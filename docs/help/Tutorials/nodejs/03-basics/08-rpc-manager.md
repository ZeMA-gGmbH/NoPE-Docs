---
sidebar_position: 8
---

# 8. RPC-Manager

The **RPC-Manager** is used to establish a request-response pattern in `NoPE`. 

## Description

The `rpcManager` is essentially a service registry.

### Service Registry

A service registry is a tool used to store and manage information about available services in a distributed system. It is an important component of microservices architectures, where applications are divided into smaller, independent services that communicate over the network.

A service registry serves as a central repository for metadata about each service, including its address, port number, protocol, and API version. When a service is started, it registers with the service registry, and when it is stopped, it is removed from it.

Other services in the architecture can then query the Service Registry to find out which services are available and how they can communicate. This reduces the complexity of managing distributed systems and improves scalability and flexibility.

### Service Broker

A broker in the services world refers to a software tool or mechanism that acts as an intermediary between different services or applications. A broker is typically used in a service-oriented architecture (SOA) to facilitate and manage interaction and communication between different services.

A broker provides various functions, such as message routing and transformation, monitoring, and security management. The broker can also perform tasks such as caching messages and routing requests to the most appropriate service.

In an SOA environment, applications or services may communicate using different protocols and transports, and the broker acts as an intermediary to ensure that messages are exchanged correctly and reliably between the different systems. The broker can also help improve the scalability and flexibility of services by providing centralized control and management of service interactions.

### Implementation of a service registry and broker in `NoPE` by the `rpcManager`.

A service in `NoPE` is defined by an `id`. This usually corresponds to a name with which the service is to be addressed.

In order to implement the required functionalities of a service registry, the `rpcManager` has the following methods and attributes:
- `registerService`: This can be used to register services. These are then made available to all participants of the NoPE network.
- `unregisterService`: This can be used to remove services from the network.
- The `services` property provides an overview of which services are available (including frequency and their parameters and description).
- The `serviceExists` method can be used to test whether the service is available.
- `performCall` execute a service. All relevant communications are mapped by the `rpcManager`. The user does not know which runtime provides the service. 
    - The execution leads to a so called `task` which can be aborted by `cancelTask`. This leads to an exception at the calling unit.
    - If several service providers (NoPE-Runtime) are able to execute the service, the provider can be selected via a callback. For this purpose there are predefined `selectors
        - `master` (see `connectivityManager`) the master must execute the process
        - `first`: any provider executes the serives (the first in the list)
        - `dispatcher`: a specific dispatcher must run the service (defined by its id) 
        - `host`: a dispatcher on the defined host.
        - `cpu-usage`: the dispatcher with the least CPU usage
        - `free-ram`: The dispatcher with the lowest RAM usage
    - services with `callbacks` can also be hosted via a plugin

### Connecting the `rpcManager` in the NoPE network

The regristrated services of a `rpcManager` are distributed in the network by the `bridge`. This is done at each regristration or deregistration of the services.

In order to distribute the RPC requests within the network, the `rpcManager` uses the `bridge` to send messages. All `rpcManagers` respond to these messages and identify whether they have been addressed (for this purpose such a message can address a special dispatcher). If so, the appropriate RPC manager creates a task and runs the service in a parallel thread. As soon as this is finished or an error occurs, the task is considered as finished. If an error occurs -> this is transmitted in the response message, so that the error must be handled in the calling element. Otherwise the result is stored and the calling element gets the result.


:::danger Take care

Since a communication overhead arises during the execution of services, **all** services needs to be implemented async 

:::

## Interact with the RPC-Manager

Firstly we have to create a Dispatcher, that we are using to access the `rpcManager`


```typescript
// First lets install nope using npm
import * as nope from "nope-js-node";

// Create a communicator:
// We will use the event layer (which just runs internally)
const communicator = nope.getLayer("event");

// Lets create our dispatcher

// 1. Dispatcher simulates our local system
const localDispatcher = nope.dispatcher.getDispatcher({
  communicator,
  id: "local"
}, {
  singleton: false,
  useBaseServices: false
});

// Lets wait for our element to be ready.
await localDispatcher.ready.waitFor();

// Create a short cut:
const rpcManager = localDispatcher.rpcManager;
```

We are now able to interact with the rpc Manager.

### Create a Service

To show the functionality of the rpc-manager, we first create a helloworld service. It must be implemented `async`. 


```typescript
const helloworld = async (greetings) => {
      return "Hello " + greetings + "!";
};
```

We now register that service at our RPC-Manager. Therefore a service requries a unique `id`. Additionally we must share a `JSON`-Schema, describing the interface of the service.


```typescript
await rpcManager.registerService(helloworld, {
    id: "helloworld",
    schema: {
        "description": "Hello World Service",
        "type": "function",        
        // To describe the used inputs of a function or serive we added the field "inputs" to the schema.
        // It contains a list of all required inputs.
        "inputs": [
            {
                // The Description of the Parameter
                "description": "The name which should receive a Greeting",
                // Its used name in the function (see the arguments of the function)
                "name": "greetings",
                // The Schema follows a default JSON-Schema
                "schema": {
                    "type": "string"
                }
            }
        ],
        // To describe the return of a function we added the field "outputs". It contains a 
        // JSON-Schema Object.
        "outputs":{
            "type": "string",
            // We provide some extra Info for the other users.
            "description": "The greeting Message!"
        }
    },
})
```

We can now check which services are present:

```typescript
// Receivce only the ids
rpcManager.services.extractedKey;
```
This will return:

    [ 'helloworld' ]

Receivce the services with the defintion:

```typescript
// Receivce the services with the defintion:
console.log(
    // Use JSON for pretty printing:
    JSON.stringify(
        rpcManager.services.data.getContent(), 
        undefined,
        4
    )
);
```
This will return:

    [
        {
            "id": "helloworld",
            "schema": {
                "description": "Hello World Service",
                "type": "function",
                "inputs": [
                    {
                        "description": "The name which should receive a Greeting",
                        "name": "greetings",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "outputs": {
                    "type": "string",
                    "description": "The greeting Message!"
                }
            }
        }
    ]
    

Additionally we can ask the manager, whether a service with an id exists:


```typescript
rpcManager.serviceExists("helloworld")
```

This will return:

    true



Or we can as how many times the service is provided (currently only once, because we only have 1 dispatcher, we will change that later)


```typescript
rpcManager.services.amountOf.get("helloworld")
```
Returns:

    1


Or we could as which dispatcher is providing the service:


```typescript
rpcManager.services.keyMappingReverse.get("helloworld")
```

Returns:

    Set(1) { 'local' }



Because the service attribute is a `mergedData` element, we can susbcribe to update or `changes`.

### Calling services

Know that we know, that we have a helloworld service we can use the rpc manager to call it.


```typescript
rpcManager.performCall("helloworld", ["first Parameter"]).then(console.log);
```




    NopePromise [Promise] { <pending> }



    Hello first Parameter!
    

To simplify the call we can use the `methoInterface` of the RPC-Manager


```typescript
rpcManager.methodInterface.helloworld("first Parameter").then(console.log);
```




    NopePromise [Promise] { <pending> }



    Hello first Parameter!
    

### Timeouts

Sometimes it is necessary, to call services with a defined timeout therefore we can use addtional options.If the Timeout is reached, an Error is thrown. 

To show that behavior, we define a *slow* function:


```typescript
const slowFunction = async (greetings) => {
    // Delay the function  
    await nope.sleep(2500); // wait 2,5 [s]
    
    return "Hello " + greetings + "!";
};

// Register the Function without a schema <- Bad Practice!!!
await rpcManager.registerService(slowFunction, {
    id: "slow",
    schema: {},
})
```

Now lets call the function again with our timelimits


```typescript
rpcManager.performCall(
    "slow", 
    [
        "first Parameter"
    ], {
        timeout: 0.5 // [ms]
    }
).then(console.log).catch(console.error);
```

    Error: TIMEOUT. The Service allowed execution time of 0.5[ms] has been excided
        at Timeout._onTimeout (C:\Users\m.karkowski\Documents\00-Repos\NoPE-JS\dist-nodejs\dispatcher\RpcManager\NopeRpcManager.js:699:50)
        at listOnTimeout (node:internal/timers:559:17)
        at processTimers (node:internal/timers:502:7)
    

### Error Propagation

In the case that a service throws an exception, the Exeception is forwarded to the call. Lets see this behavior by defining a funciton that allways will throw an error.


```typescript
const errorFunction = async (greetings) => {
    // Delay the function  
    throw Error("Some internal Exception")
};

// Register the Function without a schema <- Bad Practice!!!
await rpcManager.registerService(errorFunction, {
    id: "error",
    schema: {},
});
```

Now, if we call the service, we receive an error

```typescript
rpcManager.performCall(
    "error", 
    [
        "first Parameter"
    ]
).then(console.log).catch(console.error);
```

    {
      error: Error: Some internal Exception
          at errorFunction (evalmachine.<anonymous>:4:11)
          at NopeRpcManager._handleExternalRequest (C:\Users\m.karkowski\Documents\00-Repos\NoPE-JS\dist-nodejs\dispatcher\RpcManager\NopeRpcManager.js:151:40)
          at EventEmitter.<anonymous> (C:\Users\m.karkowski\Documents\00-Repos\NoPE-JS\dist-nodejs\dispatcher\RpcManager\NopeRpcManager.js:295:19)
          at EventEmitter.emit (node:events:527:28)
          at Bridge._emit (C:\Users\m.karkowski\Documents\00-Repos\NoPE-JS\dist-nodejs\communication\bridge.js:139:35)
          at Bridge.emit (C:\Users\m.karkowski\Documents\00-Repos\NoPE-JS\dist-nodejs\communication\bridge.js:47:21)
          at C:\Users\m.karkowski\Documents\00-Repos\NoPE-JS\dist-nodejs\dispatcher\RpcManager\NopeRpcManager.js:691:43
          at new Promise (<anonymous>)
          at new NopePromise (C:\Users\m.karkowski\Documents\00-Repos\NoPE-JS\dist-nodejs\promise\nopePromise.js:40:9)
          at NopeRpcManager._performCall (C:\Users\m.karkowski\Documents\00-Repos\NoPE-JS\dist-nodejs\dispatcher\RpcManager\NopeRpcManager.js:628:21),
      msg: 'Error: Some internal Exception'
    }
    

### Cancel Services

We have the posibility to define services that are able to be canceled. Lets see how it works:


```typescript
const cancelFunction = function(parameter) {
    // We must use a nope.NopePromise
    const promise = new nope.NopePromise( 
        (resolve, reject) => {
            // We resolve our Promise in 5000 ms
            setTimeout(resolve, 5000)
        }
    )
    
    promise.cancel = (reason) => {
        console.log("Function canceled. Reason = ", reason);
    }
    
    return promise;
}

// Register the Function without a schema <- Bad Practice!!!
await rpcManager.registerService(cancelFunction, {
    id: "cancel",
    schema: {},
});
```

We can allways use the promise return by our perform call, to cancel a rpc request.


```typescript
const promise = rpcManager.performCall(
    "cancel", 
    [
        "first Parameter"
    ]
);

promise.catch(console.error);
promise.then(console.log)

const timeout = setTimeout( _ => {
    promise.cancel("Demo")
}, 100);
```

This leads to canceling the function:

    Function canceled. Reason =  Demo
    

    Demo
    UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Demo".

## Connect to RPC-Managers

The main idea is, to keep the interface the same. It doesnt madder, whether a service is running in a local dispatcher or in a remote dispatcher. This hides the distribution an unifies the interface. 

Lets create an additional RPC-Manager simulating a external Manager.


```typescript
// 2. Dispatcher simulates our remote system
const remoteDispatcher = nope.dispatcher.getDispatcher({
  communicator,
  id: "remote"
}, {
  singleton: false,
  useBaseServices: false
});

// Lets wait for our element to be ready.
await remoteDispatcher.ready.waitFor();
```

Now we can check which services are available for the 2. Dispatcher.


```typescript
remoteDispatcher.rpcManager.services.data.getContent();
```

As we can see, all services are included:

    [
      {
        id: 'helloworld',
        schema: {
          description: 'Hello World Service',
          type: 'function',
          inputs: [Array],
          outputs: [Object]
        }
      },
      { id: 'slow', schema: {} },
      { id: 'error', schema: {} },
      { id: 'cancel', schema: {} }
    ]



Now lets use the second RPC-Manager to perform a call

```typescript
remoteDispatcher.rpcManager.methodInterface.helloworld("first Parameter").then(console.log);
```

    Hello first Parameter!
    

As you can see there is no difference, whether a service is running locally or externally.

### Multiple Service Providers

But you may ask, what happens, if 2 providers are hosting services with the same id. Lets register our Helloworld service to the second dispatcher to discuss that situation.


```typescript
const helloworldRemote = async (greetings) => {    
    return "Hello " + greetings + " from Remote!";
};

// Register the Function with the same schema
await remoteDispatcher.rpcManager.registerService(helloworldRemote, {
    id: "helloworld",
    schema: {
        "description": "Hello World Service",
        "type": "function",
        // To describe the used inputs of a function or serive we added the field "inputs" to the schema.
        // It contains a list of all required inputs.
        "inputs": [
            {
                // The Description of the Parameter
                "description": "The name which should receive a Greeting",
                // Its used name in the function (see the arguments of the function)
                "name": "greetings",
                // The Schema follows a default JSON-Schema
                "schema": {
                    "type": "string"
                }
            }
        ],
        // To describe the return of a function we added the field "outputs". It contains a 
        // JSON-Schema Object.
        "outputs": {
            "type": "string",
            // We provide some extra Info for the other users.
            "description": "The greeting Message!"
        }
    },
});
```

If we now checkout our providers, we should be able, to see, that there are 2 providers:


```typescript
remoteDispatcher.rpcManager.services.amountOf.get("helloworld")
```

This will return:

    2

Now we can ask, which dispatcher is providing the services:


```typescript
rpcManager.services.keyMappingReverse.get("helloworld")
```

    Set(2) { 'local', 'remote' }

In our case - as desired - both dispatchers are able to execute the service. Now the question arises, what happes, if we perform the service?


```typescript
remoteDispatcher.rpcManager.methodInterface.helloworld("first Parameter").then(console.log);
```
    Hello first Parameter!
    

The Service is executed. But how do we controll, which provider should execute the request?

To control, which provider should execute the service, we are using a **default** provided strategy. This strategy uses the first dispatcher it finds providing this service. There are although some other predefined strategies like:

- `master` (see `connectivityManager`) the master must execute the process
- `first`: any provider executes the serives (the first in the list)
- `dispatcher`: a specific dispatcher must run the service (defined by its id) 
- `host`: a dispatcher on the defined host.
- `cpu-usage`: the dispatcher with the least CPU usage
- `free-ram`: The dispatcher with the lowest RAM usage

So lets now use the `dispatcher` strategy and force the execution on our second dispatcher:

```typescript
remoteDispatcher.rpcManager.methodInterfaceWithOptions.helloworld(
    {
        // We create an async callback which must return an dispatcher ID
        selector: async () => {
            return "remote"
        }
    },
    "first Parameter"
).then(console.log);
```

This will lead to call the second dispatcher:

    Hello first Parameter from Remote!

## FAQ

- I provided services multiple times, but it is only listed once. Whats the problem?
    - Make shure the json schema matches. If there is a difference, the RPC-Manager will list those services as `conflicts` because there are different descriptions for the service.