---
sidebar_position: 2
---
# Use `NoPE` in Programms

## Optional: Create a Project:

To create a project folder with `NoPE` checkout our [tutorial](./nope-5-min), otherwise ensure the `NoPE`-Package is installed:

```bash
npm install nope-js-node
```

## The Dispatcher:

To implement the functionalities of `NoPE`,  `NoPE` creates so called runtime environments. Inside of such a environment the system uses a so-called 'NoPE dispatcher' as a central element.

The NoPE dispatcher is designed as a layer between the different modules and other runtimes (these might exist based on the distribution of the system). The dispatcher enables distributed computing and creates simply micro kernel architecture. A dispatcher is used to connect the modules, share data and events and provide a remote procedure call (rpc) interface.

## Create a Dispatcher

To start exploring the capabilities of the dispatcher we will firstly create a Dispatcher. Please checkout the [**getDispatcher**-function](./basics/create-dispatcher) in basics sample to get some informations about the valid parameters.

```typescript
// First lets import nope.
import * as nope from "nope-js-node";

// Lets create our dispatcher
const dispatcher = nope.dispatcher.getDispatcher({
  communicator: nope.getLayer("event"),
});
```

## Wait for the Dispatcher

Because the entire Library is written `async`, we must wait until the sytem is ready: 

```typescript
// To wait until the Sytem is ready, we 
// can  use the ready Oberservable of the 
// dispatcher.
await dispatcher.ready.waitFor()
```

if we are not running the code above in an `async` method we will use the `.then` option:

```typescript
// To wait until the Sytem is ready, we 
// can  use the ready Oberservable of the 
// dispatcher.
dispatcher.ready.waitFor().then(_ => {
  // Do your stuff.
}).catch(e => {
  // Handle the error
});
```

:::tip Congratulations

You are now running a distributed System inside your programm

:::
