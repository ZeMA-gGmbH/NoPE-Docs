# Namespace: dispatcher

## Author

Martin Karkowski

## Email

m.karkowski@zema.de

# NoPE - Dispatcher

The NoPE-Dispatcher is designed as Layer between the different Modules / Dispatchers. They allow distributed computing or just a simple **_Service oriented Architecture_** (_SOA_). A dispatcher is used to link the modules, share data and events and provide a remote procedure call (rpc) interface.

## Building Blocks of a Dispatcher:

| element                                                                                                       | description                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connectivityManager`: [connectivityManager](namespaces/connectivityManager/namespace.connectivityManager.md) | establishes a connection to other dispatchers and manages the status of the remotely connected dispatchers. It checks their health and removes dead dispatchers.                                                                                                                                                                                                                 |
| `eventDistributor`: [PubSubSystem](../pubSub/classes/class.PubSubSystem.md)                                   | shares events accross the network (or internally). You can use this element to listen for specific events. The subscription to those events allows `mqtt`-patterns. Additionaly, you are allowed to emit event on specific topics, or pattern based topics                                                                                                                       |
| `dataDistributor`: [DataPubSubSystem](../pubSub/classes/class.DataPubSubSystem.md)                            | shares data accross the network (or internally). In comperisson to events, data is persistent and is available all the time. You can use this sub-module to listen for specific data-changes (install data-hooks), pull specific data or push data. You can pull / push data using a `mqtt`-pattern based path.                                                                  |
| `rpcManager`: [rpcManager](namespaces/rpcManager/namespace.rpcManager.md)                                     | Used to perform `remote procedure calls` (see [here](https://de.wikipedia.org/wiki/Remote_Procedure_Call)). The manager keeps track of the available services. You must use the sub-module to register/unregister (new) services.                                                                                                                                                |
| `instanceManager`: [instanceManager](namespaces/instanceManager/namespace.instanceManager.md)                 | Used to create/dispose (remote) instances. The manager keeps track of the available instances in the network, allows to create `wrappers` for those instances. You must use the sub-module to register/unregister (new) instances. To allow the system to provide a service for creating instances of as specific type, you can provide a generator and provide it as `service`. |

## Create a Dispatcher

To start exploring the capabilities of the dispatcher we will firstly create a dispatcher with the code below:

```javascript
// First lets install nope using npm
const nope = require("nope-js-node");

// Lets create our dispatcher
const dispatcher = nope.dispatcher.getDispatcher({
  // We will use the event layer (which just runs internally)
  communicator: nope.getLayer("event"),

  // We will adapt the timings (normally, we send a hartbeat and check for dead dispatchers)
  timings: {
    // Interval for the alive message given in [ms]. If "0" is provided,
    // no alive messages are provided
    sendAliveInterval: 0,

    // Interval, to check the other dispatcher for being slow, dead, etc..
    // should be lager then the "sendAliveInterval". The value is given in [ms]
    // If "0" is provided, no alive messages are provided
    checkInterval: 0,
  },
});
```

## Settings for creating:

The relevant Settings are described by the [INopeDispatcherOptions](types/type-alias.INopeDispatcherOptions.md). This options allows to define:

- the communication bridge. (use `getLayer` to receive a bridge with the specified layer)
- define a specific `id`
- provide a logger (otherwise the dispatcher wont log anything)
- define the timings for `heartbeats` and `checks` (see [INopeINopeConnectivityTimeOptions](namespaces/connectivityManager/types/type-alias.INopeINopeConnectivityTimeOptions.md) for more details)
- a `defaultSelector` which is used as selector for a service provide

## Playing with the dispatcher:

To play with a dispatcher, you can use the `nope-js` repl tool. this tool creates a `dispatcher` and you are able to interact with the dispatcher in an interactive console.

## Index

### References

- [IexportAsNopeServiceParameters](namespace.dispatcher.md#iexportasnopeserviceparameters)
- [exportAsNopeService](namespace.dispatcher.md#exportasnopeservice)
- [nopeEmitter](namespace.dispatcher.md#nopeemitter)
- [nopeMethod](namespace.dispatcher.md#nopemethod)
- [nopeProperty](namespace.dispatcher.md#nopeproperty)

### Namespaces

- [baseServices](namespaces/baseServices/namespace.baseServices.md)
- [connectivityManager](namespaces/connectivityManager/namespace.connectivityManager.md)
- [instanceManager](namespaces/instanceManager/namespace.instanceManager.md)
- [rpcManager](namespaces/rpcManager/namespace.rpcManager.md)

### Interfaces

- [IDispatcherConstructor](interfaces/interface.IDispatcherConstructor.md)
- [IHostOverview](interfaces/interface.IHostOverview.md)
- [INopeDispatcher](interfaces/interface.INopeDispatcher.md)

### Type Aliases

- [IGenerateInstanceCallback](types/type-alias.IGenerateInstanceCallback.md)
- [IGenerateRemoteInstanceCallback](types/type-alias.IGenerateRemoteInstanceCallback.md)
- [IGenerateRemoteInstanceForOtherDispatcherCallback](types/type-alias.IGenerateRemoteInstanceForOtherDispatcherCallback.md)
- [INopeDispatcherOptions](types/type-alias.INopeDispatcherOptions.md)
- [IValidPromise](types/type-alias.IValidPromise.md)

### Functions

- [getDispatcher](functions/function.getDispatcher.md)

## References

### IexportAsNopeServiceParameters

Re-exports [IexportAsNopeServiceParameters](../decorators/types/type-alias.IexportAsNopeServiceParameters.md)

```ts
IexportAsNopeServiceParameters;
```

### exportAsNopeService

Re-exports [exportAsNopeService](../decorators/functions/function.exportAsNopeService.md)

```ts
exportAsNopeService;
```

### nopeEmitter

Re-exports [nopeEmitter](../decorators/functions/function.nopeEmitter.md)

```ts
nopeEmitter;
```

### nopeMethod

Re-exports [nopeMethod](../decorators/functions/function.nopeMethod.md)

```ts
nopeMethod;
```

### nopeProperty

Re-exports [nopeProperty](../decorators/functions/function.nopeProperty.md)

```ts
nopeProperty;
```
