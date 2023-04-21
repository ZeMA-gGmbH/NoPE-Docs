---
sidebar_position: 7
---

# 7. Data-Distributor

The `DataDistributor` essentially represents a `DataPubSubSystem`. It distributes data over the NoPE network (or internally). Data is manipulated via JSON pointers (these are structured like MQTT topics; see above). In order to inform systems about changes, `subscribers` can be informed about changes like in MQTT. The wildcards of MQTT can be used to get the relevant information. I.e.:
- The `DataDistributor` contains a `root` data object.
    - The `root` data object can be modified via paths (similar to topics) (see methods `patternBasedPush` or `pushData`)
- If the data object is manipulated, all changes are automatically forwarded to the interested `subscribers`.
- The naming of the methods corresponds to the push and pull principle 

## DataPubSubSystem

A data based publish and subscribe system.
It extends the PubSubSystem by providing the methods and properties:
- `pushData` to push data into the system.
- `pullData` to pull data from the system. It always returns the current data or the default value if there is no data under the specified path.
- `patternbasedPullData` to fetch data with a specific pattern. See the example for details.
- `patternBasedPush` to push data with a given pattern into the system.
- `data`: direct access to the `root` data object. This object is continuously present and always contains the most recent data manipulated by changes (see `patternBasedPush` or `pushData`).

## Interact with the DataDistributor

Firstly we have to create a Dispatcher, that we are using to access the `dataDistributor`


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
const dataDistributor = localDispatcher.dataDistributor;
```

We are now ready to manipulate some data in the system:

```typescript
// Now we manipulate the data:
dataDistributor.pushData("", { robot: {status: {state:"waiting", speed:0}}});
// Render the Root Object. (Read only)
dataDistributor.data
```

The **root** object contains:

    { robot: { status: { state: 'waiting', speed: 0 } } }



## Subscribing to data Changes

We are now interessed in data changes. We want allways be informed about the status of a specific object.

Therefore we create an subscription of on the topic `robot/status`. By subscribing, we will immediately receive an update containing the current status:


```typescript
const observer = dataDistributor.registerSubscription("robot/status", (data) => {
    console.log("The Robot-Status is",data)
})
```

Executing the code above result in the following output:

    The Robot-Status is { state: 'waiting', speed: 0 }
    

We now simulate a change of the robots speed:


```typescript
// We create an extra Element describing the status.
// We use an observable for that purpose

const robotStatus = new nope.NopeObservable();
robotStatus.setContent({state:"waiting", speed:0});

dataDistributor.register(robotStatus, {
    mode: "publish",
    topic: "robot/status"
});

// Now we adapt the status

robotStatus.getContent().speed = 1;
robotStatus.getContent().state = "moving";
```

Registering the `robotStatus` results in triggering the subscription:

    The Robot-Status is { state: 'waiting', speed: 0 }
    

As we can see, we didnt receive an update. Thats based on the behavior of the observable. We have to trigger an update manually right now, or must use the method `setContent` instead of adapting the data object directly.


```typescript
robotStatus.forcePublish();

// Alternative:
robotStatus.setContent({state:"moving", speed:1});
```

    The Robot-Status is { state: 'moving', speed: 1 }


> But why didn't receive 2 updates? we used the method `forcePublish` and `setContent` and assigned a new status-object, but didnt receive 2 notifications. This is related to the behavior of observables. They only emit changes, if the data really changed (what wasnt the case)

## Accessing specific datapoints

If we want to manipulate data we can use the method `pushData`. Lets add an additional status of an sensor:


```typescript
dataDistributor.pushData("sensor", {status: {state:"waiting"}});
```

The **root** object of the dataDistributor can be read with the property `data`

```typescript
dataDistributor.data
```

The content of the **root** object is now:

    {
      robot: { status: { state: 'moving', speed: 1 } },
      sensor: { status: { state: 'waiting' } }
    }



If we want to access specific data points inside of the dataDistributor, we can use the function `pullData` or `patternBasedPullData`


```typescript
// pull the data of the sensor:
dataDistributor.pullData("sensor",false)
```

The pull commands extract the following data:

    { status: { state: 'waiting' } }



If the data is not present, you can provide an default value, which will be return instead.
Otherwise an Error is thrown.


```typescript
// Data that is not present
dataDistributor.pullData("not_contained", "default-value")
```

> If no data is present, the default value is returned!


    'default-value'


```typescript
// Accessing data with a pattern
dataDistributor.patternbasedPullData("+/status/state")
```

> Patterns can be used to pull data. The method will allways return a list (it might be empty.)

    [
      { path: 'robot/status/state', data: 'moving' },
      { path: 'sensor/status/state', data: 'waiting' }
    ]



As you can see, we receive an array, which contains the object containing:
- the `path` of the data
- the `data`

Additionally you are able to manipulate data using a path with wildcards, which will trigger our subscriptions as well:


```typescript
dataDistributor.patternBasedPush("+/status/state", "manipulated!")
```

    The Robot-Status is { state: 'manipulated!', speed: 1 }
    

If we look at the data again, we have manipulated the state of the sensor and robot


```typescript
dataDistributor.data
```

    {
      robot: { status: { state: 'manipulated!', speed: 1 } },
      sensor: { status: { state: 'manipulated!' } }
    }



Like the `eventDistributor` the `dataDistributor` shares those changes with all runtimes in the network. For this purpose please check the docu of the [`eventDistributor`](./06-event-distributor.md)

