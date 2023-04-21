---
sidebar_position: 8
---

# 9.Instance-Manager

The instance Manager manages the instances in `NoPE`. 

## Description

The `instanceManager` is used to create, remove and get access to instances. the approach is based on the object oriented method. I.e. there are the following elements:
- Classes: 
    - These describe a blueprint of a behavior. 
    - Are identified in `NoPE` by an ID / a `type`.
    - Classes have constructors that create an instance: 
        - Offered in `NoPE` as a service (service name includes the identifier, among other things).
- Instances:
    - Are instances of a class (corresponds to so-called objects).
    - Are identified in `NoPE` by identifier (here `strings`)
    - have the properties, methods and eventEmitters created in the classes.
    - Can be "destroyed" via so-called destroyers. Thus they are deleted.

The manager keeps track of the available instances in the network and allows to create `wrappers` for these instances. This allows to simplify and unify the access for the user of instances running in a different runtime. To make this possible it uses the following elements:
- `connectivityManager`: see above. Used to identify new and dead dispatchers. 
    - if a new `dispatcher` is identified, standardized descriptions of all hosted instances are sent.
    - if a `dispatcher` is identified as dead, the `wrappers` are deleted or removed.
- rpcManager`: see above. Used here to distribute `constructors` of classes and `destructors` of instances on the network. I.e.:
    - The creation of a new instance corresponds to a service call.
    - Deleting an instance corresponds to a service call
    - The `constructors` of the classes and `destructors` of the instances follow a defined naming convention, so that they can be identified by the `instanceManager`.

### Interface to interact with the Instance Manager

The `InstanceManger` can be interacted with using the following methods and properties:
- `getInstancesOfType`: returns all available instances of a given type.
- `instanceExists`: tests if an instance with the given identifier exists.
- `getInstanceDescription`: Returns the standardized description of an instance. This information is also shared with all `instanceManagers` on the network.
- `registerInstance`: Allows to **manually** register an instance.
- `deleteInstance`: Allows the **manual** removal of an instance.
- `registerConstructor`: Registers a constructor. Among other things, it is possible to specify the number of instances that may be created on the `instanceManager`. If more than one `dispatcher` is able to create an instance with the given type, then - as with `rpcManger` - the selection follows via a so-called selector.
- `unregisterConstructor`: Removes a constructor.
- `constructorExists`: Tests if a constructor is known for a type.
- `createInstance`: Allows the creation of an instance. This may be the case for remote dispatchers or for the same element. Only a wrapper communicating with a dispatcher is returned, since we do not know where the element is provided. To know which `instanceManager` hosts the instance can use the `getDispatcherForInstance` method. The returned `wrapper` behaves like a normal "internal" class. If this method is called, a `GenericModule` is returned as type by default. If a special wrapper is required for a type, such wrappers can be defined and customized via `registerInternalWrapperGenerator` and `unregisterInternalWrapperGenerator`. Here, too, the type is decisive.

## Interact with the Instance-Manager


Firstly we have to create a Dispatcher, that we are using to access the `instanceManager`


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
const instanceManager = localDispatcher.instanceManager;
```

We are now able to interact with the instance Manager.

### List a Instance

To get all instance we can use the property `instances`. It allows us to subscribe for changes (`instances.onChange`) or read all descriptions of the instances. Now lets find out if there are some instance available.


```typescript
instanceManager.instances.data.getContent()
```
The content will be:

    []


Obviously there is no instance. So lets create one. 


:::danger Info

All instances must be a `NopeBaseModule`

:::

For our tutorial we will create a Helloworld Module:


```typescript
const injectable = require("inversify").injectable;

class HelloWorldModule extends nope.InjectableNopeBaseModule
{

    async greet(name) {
        return "Hello " + name + " from our Module ("+this.identifier+")!"
    }


    /**
     * Our initializer
     * 
     * We can add addtional parameters requried during ininitalization.
     */
    async init() {
        this.author = {
            forename: "M.Karkowski",
            surename: "Karkowski",
            mail: "m.karkowski@zema.de"
        };

        this.description = "An Example";
        this.version = {
            date: new Date("5.3.2023"),
            version: 1.0,
        };

        await super.init();
        
        await this.registerMethod(
            "greet",
            this.greet.bind(this),
            {
                schema: {
                    type: "function",
                    inputs: [
                        {
                            // The Description of the Parameter
                            description: "The name which should receive a Greeting",
                            // Its used name in the function (see the arguments of the function)
                            name: "name",
                            // The Schema follows a default JSON-Schema
                            schema: {
                                type: "string"
                            }
                        }
                    ],
                    outputs: {
                        // TODO: Add implementation here!
                    },
                }
            }
        );                            
    }
}
```

Now lets create an instance:


```typescript

const instance = new HelloWorldModule(localDispatcher)

// Assign an identifier
instance.identifier = "instance"

// and initialize the instance.

await instance.init();
```

Now, we add our instance to the Dispatcher:


```typescript
await instanceManager.registerInstance(instance);
```

Now our instance is registered. Lets try to find it:

```typescript
instanceManager.instances.data.getContent()
```

The `instances` attribute will now list:


    [
      {
        author: {
          forename: 'M.Karkowski',
          surename: 'Karkowski',
          mail: 'm.karkowski@zema.de'
        },
        description: 'An Example',
        methods: { greet: [Object] },
        events: {},
        identifier: 'instance',
        properties: {},
        type: 'HelloWorldModule',
        version: { date: 2023-05-02T22:00:00.000Z, version: 1 },
        uiLinks: []
      }
    ]



### Working with instance remotely:

The main idea is, to keep share instances and allow remote access to them. Lets look at this possiblities by creating an simulated remote dispatcher:


```typescript
// 2. Dispatcher simulates our remote system
const remoteDispatcher = nope.dispatcher.getDispatcher({
  communicator,
  id: "remote"
}, {
  singleton: false,
  useBaseServices: false
});
```

Now we wait for our dispatcher to be ready.


```typescript
// Lets wait for our element to be ready.
await remoteDispatcher.ready.waitFor();
```
Lets try to check, whether the instance manager has received the instances:

```typescript
remoteDispatcher.instanceManager.instances.data.getContent()
```

The `instances` attribute will now list:

    [
      {
        author: {
          forename: 'M.Karkowski',
          surename: 'Karkowski',
          mail: 'm.karkowski@zema.de'
        },
        description: 'An Example',
        methods: { greet: [Object] },
        events: {},
        identifier: 'instance',
        properties: {},
        type: 'HelloWorldModule',
        version: { date: 2023-05-02T22:00:00.000Z, version: 1 },
        uiLinks: []
      }
    ]


Okay, we got the Instance but how do we access it?

Therefore we create an wrapper that will do all the *magic* for us


```typescript
let wrapper = await remoteDispatcher.instanceManager.generateWrapper({
    identifier: "instance",     // The name of the instance
    type: "HelloWorldModule",   // Required for typchecks.
});
```

:::danger Warning

This is not the recommended Way to create wrappers. You should work using constructors and the method `createInstance` to enable management and disposing Instances.

You are only allowed to use the method `generateWrapper` for manually registered instances!  

:::

Now that we have our wrapper, we can just call the methods like we would interact with the element.


```typescript
await

wrapper.greet("Example");
```

    'Hello Example from our Module (instance)!'



#### What is shared using a remote instance

The remote instance are capable to share:
- events using [EventEmitters](/docs/help/Tutorials/nodejs/basics/eventemitters)
- properties using [Observables](/docs/help/Tutorials/nodejs/basics/observables)
- methods

The `nope-js project` **Tool** supports you by building such modules.

### Constructors

Instead of using static instances `NoPE` allows us to dynamically create instance. Therefore we must register a Constructor.

We beginn by creating a **Constructor** that will create instances of the type `HelloWorldModule` for us. This constructor is essentially a method (following the same interface), which will be used in a factory to create the instances.


```typescript
// Now we register a Constructor
await instanceManager.registerConstructor(
    // We must specify an identifier (Type-Identifier)
    "HelloWorldModule",
    // We now define our factory
    async (core, identifier) => {
        return new HelloWorldModule(core);
    }
);
```

:::danger Warning

Constructors must follow this definition. If you need additional attributes during creation of the instance you **must** add them as arguments to the **init** method of that classes. 

NoPE enables the following order if using constructors:

1. Create the instance using the **factory** registered as constructor
2. Call the **init** method on the instance created by the **factory**. NoPE forwards the params to the **init** method.

:::


Now we have a constructor created. We should be able to figure out which construcors in `NoPE` using the following code below:


```typescript
remoteDispatcher.instanceManager.constructors.data.getContent();
```

The `constructors` attribute will no list our constructor:


    [ 'HelloWorldModule' ]



Now we create a new instance of our module using the method `createInstance`. The function will return a corresponding wrapper for the instance.


```typescript
let other = await instanceManager.createInstance({
      identifier: "other",
      type: "HelloWorldModule",
      params: [],
});
```

Now we should have 2 instances. 


```typescript
remoteDispatcher.instanceManager.instances.data.getContent()
```

The `instances` attribute will now list:

    [
      {
        author: {
          forename: 'M.Karkowski',
          surename: 'Karkowski',
          mail: 'm.karkowski@zema.de'
        },
        description: 'An Example',
        methods: { greet: [Object] },
        events: {},
        identifier: 'instance',
        properties: {},
        type: 'HelloWorldModule',
        version: { date: 2023-05-02T22:00:00.000Z, version: 1 },
        uiLinks: []
      },
      {
        author: {
          forename: 'M.Karkowski',
          surename: 'Karkowski',
          mail: 'm.karkowski@zema.de'
        },
        description: 'An Example',
        methods: { greet: [Object] },
        events: {},
        identifier: 'other',
        properties: {},
        type: 'HelloWorldModule',
        version: { date: 2023-05-02T22:00:00.000Z, version: 1 },
        uiLinks: []
      }
    ]



We are now able to interact with the wrapper like it is an internal element:



```typescript
await other.greet("Example");
```
The call will be forwarded using the **RPC-Manager** in the background

    'Hello Example from our Module (other)!'



If the instance isnt requried anymore we can dispose it. This will NoPE to check, if other Runtimes although access the instance. If not the instance is disposed.


```typescript
await other.dispose();
```

In our case, just one element used the instance, this results in removing the instance.


```typescript
remoteDispatcher.instanceManager.instances.data.getContent()
```

The `instances` attribute wont list the `other` instance any more:

    [
      {
        author: {
          forename: 'M.Karkowski',
          surename: 'Karkowski',
          mail: 'm.karkowski@zema.de'
        },
        description: 'An Example',
        methods: { greet: [Object] },
        events: {},
        identifier: 'instance',
        properties: {},
        type: 'HelloWorldModule',
        version: { date: 2023-05-02T22:00:00.000Z, version: 1 },
        uiLinks: []
      }
    ]

:::tip Info

Instances can be used by different Runtimes the same time. To make shure you get those relevant infos, you should allways use the **subscribe** functionality on *properties* oder *events*.

:::



:::tip Info

Use the defined class interface only for dynamic classes. Otherwise use the `nope-js project` tool to add classes!

:::