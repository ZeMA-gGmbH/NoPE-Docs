---
sidebar_position: 1
---

# Bridge

The Bridge is used to establish connections to other `NoPE` Runtimes.

A bridge is used to establish different connections (a bridge can establish several connections with different layers). 

The bridge is the core interface with which all Nope core elements interact. Its main task is to add and remove multiple layers (like 'mqtt' or 'io-sockets'). 

To the outside, the bridge behaves like a `CommunicationLayer`. I.e. it also implements the methods `on` and `with`. However, the bridge ensures that each of the `CommunicationLayer` added to it can receive and send the messages. Furthermore, the status `connected` indicates whether all layers are connected or not. 

If different layers are only optional, e.g. all connections are covered by io-sockets, but all messages should be mirrored to MQTT, because they should be picked up there, then this can be considered in the `add` method. These connections are then *not* considered in the status `connected`.

## Layers:

A layer is an element that is used to establish a communication connection. This element implements the connection (e.g.  a MQTT layer).

A layer is utilized by the Bridge.

A layer has the following functionalities provided by its interface:
- The layer must implement the methods on, which are used to listen for various events that can be subscribed to by the nope systems.
- Messages are sent out using the emit method.
- The connection status of the layer is indicated in the connected observable. This value is allowed to be true only if there is a connection.
- Sometimes the layer receives its own messages (the implementation of an udp-broadcast based layer, while broadcasting we will receive our own messages). If this is the case, the receivesOwnMessages flag must be set to true to prevent messages from being received twice.
- If a layer is not used, we can destroy it with dispose.

Currently there are 3 layers implemented:
- `MQTT`
- `IO-Sockets`:
   - `io-client`
   - `io-server`
- `event`: an internal layer only. Is defaultly provided.

## Create a Bridge

To create a bridge, it is recommend to use the function `getLayer`.

you may change the type to: `mqtt` or `client-io` based on your requirements.


```typescript
// First lets install nope using npm
import * as nope from "nope-js-node";

// Create a communicator:
// We will use the event layer (which just runs internally)
const communicator = nope.getLayer("event");
```

You are able to add other layer by using the function `addCommunicationLayer`. The bridge will then share the event to the different layer (like a relais)


## Subscribing to events of the Bridge:

We create a dispatcher, to see some messages on the `Bridge`


```typescript


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
const bridge = localDispatcher.communicator;
```

We can use the following events to listen to:

- `aurevoir`
- `bonjour`
- `instancesChanged`
- `dataChanged`
- `servicesChanged`
- `statusChanged`
- `taskCancelation`
- `event`
- `rpcRequest`
- `rpcResponse`
- `rpcUnregister`
- `tasks`

Let's now subscribe to `event` to get the messages shared between `NoPE` Runtimes:

```typescript
// Subscribe
bridge.on("event", console.log)

// Now emit an event:
localDispatcher.eventDistributor.emit("",{
    "foo1": ["bar1", "baz2"],
    "foo2": ["bar2", "baz2"],
});
``` 

The following message will be printed

    {
        path: '',
        data: { foo1: [ 'bar1', 'baz2' ], foo2: [ 'bar2', 'baz2' ] },
        timestamp: 1682071023419,
        forced: false,
        args: [],
        sender: 'local',
        pubSubUpdate: true
    }

The Bridge is able to emit different message as well. But make shure the implementation of the layers is dynamic. Otherwise you might face some issues.