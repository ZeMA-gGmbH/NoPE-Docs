---
sidebar_position: 5
---

# 5. Connectivity Manager

The NoPE-Dispatchers uses one `ConnectivityManager`. The manager observes the connection and remotely connected dispatchers (via their `ConnectivityManager`).

## Summary

The Manager detects newly connected dispatchers and disconnected dispatchers. Additionally, it sends a StatusMessage (in the form of `INopeStatusInfo`). This status message is interpreted as heartbeat. The `ConnectivityManager` checks those heartbeats with a defined interval. If a specific amount of time is ellapsed, the remote dispatcher is marked as `slow` -> `warning` -> `dead`. After an additional delay in the state `dead` the dispatcher is altough removed.

## Details
A `connectivityManager` observes the connection to various dispatchers. This element displays all found dispatchers in the network (if there are no others only itself) in the `dispatchers` property. It manages the status (`dead`, `slow`, `warn`, `alive`) of the other dispatchers. 

The manager uses a [`bridge`](../04-advanced/01-bridge.md) to search for new dispatchers. When a layer connection is established via the bridge, a so-called `bonjour` message is sent. With this message all `dispatchers` in a network register themselves. If such a message is sent, all other dispatchers report their current status. Thus all dispatchers are known to each other.
 
The `connectivityManager` checks their status time-based. To do this, all the `connectivityManagers` send each other a `live` message (a `heartbeat`) defined time interval. This can be used to monitor when a dispatcher last checked in. If this exceeds a certain time interval, that dispatcher is first classified as 'slow' and then as 'dead'. If the dispatcher does not check in after a defined time interval, it is removed.

The described changes can be observed using the `dispatchers` property.
 
In addition, the `connectivityManager` allows synchronization of timestamps with other systems (usually other dispatchers). This is useful when different systems store sensor data, for example. The timestamp is calculated with a delay, which can be determined with pings.
 - You can get a sync timestamp using the `now` property.
 
The `connectivityManager` provides properties that simplify the collection of some information:
 - `getStatus` to get the status of a particular dispatcher.
 - `getAllHosts`: to get all hosts on the network. (It is possible that several nope runtimes are running on the same host)
 - `upTime`: since when the Connectivity Manager is running. 

## Master

Sometimes it is useful to define a `master` in the network with nope runtime, (e.g. time synchronization). For this the flag `master` can be set to `true` or `false`. This sets the master mode of the `connectivityManager` manually. If it is set to `null`, the master is determined automatically and the `connectivityManager` could be a master. The selection of the master is based on the operation time and the connection time.

Defaultly a `ConnectivityManager` is selected as `master`. The master is defined as the `ConnectivityManager` with the highest `upTime`. 

## Synchronizing time

Because we asume, that **NoPE** is running on different computing nodes, we have to be able to synchronize the time between those elements. Therefore the `ConnectivityManager` is able to sync the time (by providing a `timestamp` and an additional `delay` that was needed to get to the call (for instance `ping / 2`))

## Working with a ConnectivityManager

```typescript
// First lets install nope using npm
const nope = require("nope-js-node")

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
await localDispatcher.ready.waitFor()
```

Now we want to listen to newly connected dispatchers. For this purpose, we create an observer, which will listen to changes. The connectivityManager provides some [**observables**](./03-observables.md) and [**eventemitters**](./02-eventemitters.md) that we can use to get these updates:

```typescript
// Subscribe to changes
const observer = localDispatcher.connectivityManager.dispatchers.onChange.subscribe(data => {
  // Log the changes
  console.log((new Date()).toISOString(),"onChange - listener");
  console.log("\tadded   =", data.added);
  console.log("\tremoved =", data.removed);
});
```

Additionally we want to show the currently connected dispatchers. In this data the own dispatcher will **allways** be included:


```typescript
// Show our connected Dispatchers
let connectedDispatchers = localDispatcher.connectivityManager.dispatchers.data.getContent();
let localDispatcherIncluded = connectedDispatchers.includes(localDispatcher.id);

// Now lets log our results.
console.log("connectedDispatchers    =", connectedDispatchers);
console.log("localDispatcherIncluded =", localDispatcherIncluded);
```

    connectedDispatchers    = [ 'local' ]
    localDispatcherIncluded = true
    

Now that we have implemented our listeners and have seen the connected dispatchers (which is only the `"local"`-dispatchre), We will add an additional dispatcher. This should result in calling our `onChange`-listener. Additionally, we wait until our `remoteDispatcher` is initalized


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

This will print:

    2023-04-20T07:39:08.596Z onChange - listener
    	added   = [ 'remote' ]
    	removed = []
    

Now we want to see, which system is the current master. This should be our `local`.


```typescript
// We expect to be the master, because the localDispatcher has been created first.
console.log("master =", localDispatcher.connectivityManager.master.id);
```

This will print:

    master = local
    

We can now force the remote dispatcher to be our master, by setting the master. (For this purpose we can later use a base service ==> then we just have to call the service) 


```typescript

remoteDispatcher.connectivityManager.isMaster = true;
localDispatcher.connectivityManager.isMaster = false;

// Our messaging is async ==> we wait an amount of time (here 1000 ms)
await nope.sleep(1000)

// We expect the master to be the remote.
console.log("master =", localDispatcher.connectivityManager.master.id);
console.log("master-info =", localDispatcher.connectivityManager.master);
```

This will print:

    master = remote
    master-info = {
      id: 'remote',
      env: 'typescript',
      version: '1.0.0',
      isMaster: true,
      isMasterForced: true,
      host: {
        cores: 8,
        cpu: {
          model: 'Intel(R) Core(TM) i7-8565U CPU',
          speed: 1992,
          usage: 0.023193359375
        },
        os: 'win32',
        ram: { usedPerc: 0.2777418501514157, free: 23432, total: 32442 },
        name: 'nz-078'
      },
      pid: 6644,
      timestamp: 1681976351645,
      connectedSince: 1681976348594,
      status: 0,
      plugins: []
    }
    

Now lets see what happens if we adapt the heartbeat intervall of our *local* instance. We want to receive every 50 ms a heartbeat:


```typescript
// We define a function, which will render the 
// connection status.

const renderStatus = () => {
  console.log((new Date()).toISOString(),"master-info =", localDispatcher.connectivityManager.master.status)
}

setTimeout(renderStatus, 50);
setTimeout(renderStatus, 750);
setTimeout(renderStatus, 1500);
setTimeout(renderStatus, 2500);

// Now we adapt the timings of both dispatchers:


localDispatcher.connectivityManager.setTimings({
  // our system will send every 50 ms an heartbeat.
  sendAliveInterval: 250,
  // we will check that after
  checkInterval: 125,
  // will mark dispatchers as slow after not receiving heartbeats for 50ms
  slow: 500,
  // we will mark  dispatchers with a warning flag after 50 ms
  warn: 1000,
  // we mark it as dead after 0.5 s
  dead: 2000,
  // We will remove the dispatcher after 1 s
  remove: 3000,
});

remoteDispatcher.connectivityManager.setTimings({
  // our system will send every 50 ms an heartbeat.
  sendAliveInterval: 5000,
});

// We reset the timeouts.
setTimeout(() => localDispatcher.connectivityManager.setTimings({}), 3000);
setTimeout(() => remoteDispatcher.connectivityManager.setTimings({}), 3000);

```

This will print:

    2023-04-20T07:39:13.474Z master-info = 0
    2023-04-20T07:39:14.161Z master-info = 1
    2023-04-20T07:39:14.913Z master-info = 2
    2023-04-20T07:39:15.911Z master-info = 3
    2023-04-20T07:39:16.302Z onChange - listener
    	added   = []
    	removed = [ 'remote' ]
    2023-04-20T07:39:16.926Z onChange - listener
    	added   = [ 'remote' ]
    	removed = []
    
As we can see, the dispatcher, that uses a slower heartbeat rate (in the example the `remote`) is marked as `slow` -> `warning` -> `dead` and is removed afterwards!


