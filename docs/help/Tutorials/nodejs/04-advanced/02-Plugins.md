---
sidebar_position: 2
---

# Plugins

The library allows the user to customize behavior or extend it using plugins.

## Description

> A plug-in is a software component that optionally connects to another software and adds necessary, additional functionality to it that was not originally supported in the main application.

### Provided Plugins

The library contains plugins to enhance the features of `NoPE`. They are located under: `lib\plugins`

Currently 2 plugins are implemented:

1. **ackMessages**: The plugin advances the Behavior of sending messages. Emitting messages using the bridge is complete, after all runtimes have ackknoweledged the message. Therefore all messages contain `messageId` (which is dynamically added.) The bridge additonally listens on the events `ackMessage` which contains a acknowledgement for every message. To fullfill this behavior, a default timeout is provided.

2. **rpcCallbacks**: The plugin allows the rpc-manager to receive callbacks as function argument. This allows the usage of dynamic callbacks in runtime. To enable such a behavior, the **RPC-Manager** creates for every callback a dynamic service and registers it as service. The RPC-Manager receving the request, converts the provided info of the dynamic callback in an actual callable callback (which executes the service again). As consequence, every callback **must** be implemented async. The Plugin althoug ensures **cancelation** and error **propagation**

## Loading Plugins

To load pluings `NoPE` provides the following function:

```typescript
let nope = null;

// make shure, all old version of the library are removed:
delete require.cache["nope-js-node"];
nope = require("nope-js-node");

// Now we load a plugin by its name:
nope.plugins.installPlugins(nope, "ackMessages");
```

If a Plugin is loaded `NoPE` reports that with the following print:

    --------------------------------------------------
    PLUGIN INSTALLTION REPORT:
    --------------------------------------------------

    Installed the following plugins:
        - ackMessages

    The following source have been modified:
        - communication.Bridge
        - dispatcher.connectivityManager.NopeConnectivityManager

    Watchout this may change the default behavior!

The function is capable to load more then 1 plugin:

```typescript
// make shure, all old version of the library are removed:
delete require.cache["nope-js-node"];
nope = require("nope-js-node");

// Now we load a plugin by its name:
nope.plugins.installPlugins(nope, ["ackMessages", "rpcCallbacks"]);
```

The Report will print:

    --------------------------------------------------
    PLUGIN INSTALLTION REPORT:
    --------------------------------------------------

    Installed the following plugins:
        - ackMessages
        - rpcCallbacks

    The following source have been modified:
    	- communication.Bridge
    	- dispatcher.connectivityManager.NopeConnectivityManager
    	- dispatcher.rpcManager.NopeRpcManager

    Watchout this may change the default behavior!


The function is although capable to load files instead of plugins provided in the library. 

## Creating Plugins

To show that behavior, let's create our first Plugin. This plugin should enhance the RPC-Manager by adding a `helloWorld` method.

We create a Plugin using the function `plugin`. This function defines the necessary elements to enhance the `NoPE` Library:


```javascript
const plugin = nope.plugins.plugin
```


```javascript
const helloWorldPlugin = plugin(
    [
        // In here we define the Class / Function we want to enhace.
        // in our case the NopeRpcManager would be accessed by:
        // nope.dispatcher.rpcManager.NopeRpcManager
        // as a result we can extract the NopeRpcManager using the following
        // path: "dispatcher.rpcManager.NopeRpcManager"
        // Providing this path the plugin method knows which element 
        // should be manipulated.
        "dispatcher.rpcManager.NopeRpcManager"
    ],
    
    // Now we have to define a callback, which will perform the modifications:
    (
        originalNopeRpcManagerClass // This is the element we requested:
    ) => {
        
        // Now we define our enhanced class:        
        class NopeRpcManager extends originalNopeRpcManagerClass {
            /** This is our extension **/
            hello(name) {
                return `Hello ${name}!`;
            }
        }
        
        // Now we have to return that class:
        
        return [
            // We allways have to return an array
            // Make shure the order is the same as
            // the modificated elements.            
            {
                // The adapted element contains our replacement
                adapted: NopeRpcManager,
                // Provide the name
                name: "NopeRpcManager",
                // The path under which the replacement must be performed.
                path: "dispatcher.rpcManager.NopeRpcManager"
            }
        ]        
        
    }
)
```

Now we are able to load this plugin next to builtins:


```javascript
// make shure, all old version of the library are removed:
delete require.cache["nope-js-node"];
nope = require("nope-js-node");

// Now we load a plugin by its name:
nope.plugins.installPlugins(nope, [helloWorldPlugin]);
```

The Report will print:
    
    --------------------------------------------------
    PLUGIN INSTALLTION REPORT:
    --------------------------------------------------
    
    Installed the following plugins:
    	- anonymousPlugin1
    
    The following source have been modified:
    	- dispatcher.rpcManager.NopeRpcManager
    
    Watchout this may change the default behavior!


after we have successfully loaded our plugin right now, we want to test our new code:


```javascript
// Create a communicator:
// We will use the event layer (which just runs internally)
const communicator = nope.getLayer("event");

// Lets create our dispatcher

// 1. Dispatcher simulates our local system
const dispatcher = nope.dispatcher.getDispatcher({
  communicator,
  id: "local"
}, {
  singleton: false,
  useBaseServices: false
});

// Test our function

dispatcher.rpcManager.hello("Example")
```

    'Hello Example!'



As we can see our enhanced **RPC-Manager** now supports the `hello` method.

:::danger Take care

Since Plugins arent loaded automatically, make shure that every `NoPE` Runtime loads the desired plugins. This is although required for different *Runtime-Environments* (like python)!

Otherwise you risk an inconsistent behavior!

:::

