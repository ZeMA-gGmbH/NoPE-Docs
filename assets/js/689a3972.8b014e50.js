"use strict";(self.webpackChunkopensource_website=self.webpackChunkopensource_website||[]).push([[1120],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>g});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return a?t.createElement(g,o(o({ref:n},c),{},{components:a})):t.createElement(g,o({ref:n},c))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6480:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},o="Plugins",l={unversionedId:"help/Tutorials/nodejs/advanced/Plugins",id:"help/Tutorials/nodejs/advanced/Plugins",title:"Plugins",description:"The library allows the user to customize behavior or extend it using plugins.",source:"@site/docs/help/Tutorials/nodejs/04-advanced/02-Plugins.md",sourceDirName:"help/Tutorials/nodejs/04-advanced",slug:"/help/Tutorials/nodejs/advanced/Plugins",permalink:"/NoPE-Docs/docs/help/Tutorials/nodejs/advanced/Plugins",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Bridge",permalink:"/NoPE-Docs/docs/help/Tutorials/nodejs/advanced/bridge"},next:{title:"UI-Definitions",permalink:"/NoPE-Docs/docs/help/Tutorials/nodejs/advanced/uis-for-editor"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Provided Plugins",id:"provided-plugins",level:3},{value:"Loading Plugins",id:"loading-plugins",level:2},{value:"Creating Plugins",id:"creating-plugins",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(u,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plugins"},"Plugins"),(0,r.kt)("p",null,"The library allows the user to customize behavior or extend it using plugins."),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A plug-in is a software component that optionally connects to another software and adds necessary, additional functionality to it that was not originally supported in the main application.")),(0,r.kt)("h3",{id:"provided-plugins"},"Provided Plugins"),(0,r.kt)("p",null,"The library contains plugins to enhance the features of ",(0,r.kt)("inlineCode",{parentName:"p"},"NoPE"),". They are located under: ",(0,r.kt)("inlineCode",{parentName:"p"},"lib\\plugins")),(0,r.kt)("p",null,"Currently 2 plugins are implemented:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ackMessages"),": The plugin advances the Behavior of sending messages. Emitting messages using the bridge is complete, after all runtimes have ackknoweledged the message. Therefore all messages contain ",(0,r.kt)("inlineCode",{parentName:"p"},"messageId")," (which is dynamically added.) The bridge additonally listens on the events ",(0,r.kt)("inlineCode",{parentName:"p"},"ackMessage")," which contains a acknowledgement for every message. To fullfill this behavior, a default timeout is provided.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"rpcCallbacks"),": The plugin allows the rpc-manager to receive callbacks as function argument. This allows the usage of dynamic callbacks in runtime. To enable such a behavior, the ",(0,r.kt)("strong",{parentName:"p"},"RPC-Manager")," creates for every callback a dynamic service and registers it as service. The RPC-Manager receving the request, converts the provided info of the dynamic callback in an actual callable callback (which executes the service again). As consequence, every callback ",(0,r.kt)("strong",{parentName:"p"},"must")," be implemented async. The Plugin althoug ensures ",(0,r.kt)("strong",{parentName:"p"},"cancelation")," and error ",(0,r.kt)("strong",{parentName:"p"},"propagation")))),(0,r.kt)("h2",{id:"loading-plugins"},"Loading Plugins"),(0,r.kt)("p",null,"To load pluings ",(0,r.kt)("inlineCode",{parentName:"p"},"NoPE")," provides the following function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'let nope = null;\n\n// make shure, all old version of the library are removed:\ndelete require.cache["nope-js-node"];\nnope = require("nope-js-node");\n\n// Now we load a plugin by its name:\nnope.plugins.installPlugins(nope, "ackMessages");\n')),(0,r.kt)("p",null,"If a Plugin is loaded ",(0,r.kt)("inlineCode",{parentName:"p"},"NoPE")," reports that with the following print:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--------------------------------------------------\nPLUGIN INSTALLTION REPORT:\n--------------------------------------------------\n\nInstalled the following plugins:\n    - ackMessages\n\nThe following source have been modified:\n    - communication.Bridge\n    - dispatcher.connectivityManager.NopeConnectivityManager\n\nWatchout this may change the default behavior!\n")),(0,r.kt)("p",null,"The function is capable to load more then 1 plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// make shure, all old version of the library are removed:\ndelete require.cache["nope-js-node"];\nnope = require("nope-js-node");\n\n// Now we load a plugin by its name:\nnope.plugins.installPlugins(nope, ["ackMessages", "rpcCallbacks"]);\n')),(0,r.kt)("p",null,"The Report will print:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--------------------------------------------------\nPLUGIN INSTALLTION REPORT:\n--------------------------------------------------\n\nInstalled the following plugins:\n    - ackMessages\n    - rpcCallbacks\n\nThe following source have been modified:\n    - communication.Bridge\n    - dispatcher.connectivityManager.NopeConnectivityManager\n    - dispatcher.rpcManager.NopeRpcManager\n\nWatchout this may change the default behavior!\n")),(0,r.kt)("p",null,"The function is although capable to load files instead of plugins provided in the library. "),(0,r.kt)("h2",{id:"creating-plugins"},"Creating Plugins"),(0,r.kt)("p",null,"To show that behavior, let's create our first Plugin. This plugin should enhance the RPC-Manager by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"helloWorld")," method."),(0,r.kt)("p",null,"We create a Plugin using the function ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin"),". This function defines the necessary elements to enhance the ",(0,r.kt)("inlineCode",{parentName:"p"},"NoPE")," Library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const plugin = nope.plugins.plugin\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const helloWorldPlugin = plugin(\n    [\n        // In here we define the Class / Function we want to enhace.\n        // in our case the NopeRpcManager would be accessed by:\n        // nope.dispatcher.rpcManager.NopeRpcManager\n        // as a result we can extract the NopeRpcManager using the following\n        // path: "dispatcher.rpcManager.NopeRpcManager"\n        // Providing this path the plugin method knows which element \n        // should be manipulated.\n        "dispatcher.rpcManager.NopeRpcManager"\n    ],\n    \n    // Now we have to define a callback, which will perform the modifications:\n    (\n        originalNopeRpcManagerClass // This is the element we requested:\n    ) => {\n        \n        // Now we define our enhanced class:        \n        class NopeRpcManager extends originalNopeRpcManagerClass {\n            /** This is our extension **/\n            hello(name) {\n                return `Hello ${name}!`;\n            }\n        }\n        \n        // Now we have to return that class:\n        \n        return [\n            // We allways have to return an array\n            // Make shure the order is the same as\n            // the modificated elements.            \n            {\n                // The adapted element contains our replacement\n                adapted: NopeRpcManager,\n                // Provide the name\n                name: "NopeRpcManager",\n                // The path under which the replacement must be performed.\n                path: "dispatcher.rpcManager.NopeRpcManager"\n            }\n        ]        \n        \n    }\n)\n')),(0,r.kt)("p",null,"Now we are able to load this plugin next to builtins:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// make shure, all old version of the library are removed:\ndelete require.cache["nope-js-node"];\nnope = require("nope-js-node");\n\n// Now we load a plugin by its name:\nnope.plugins.installPlugins(nope, [helloWorldPlugin]);\n')),(0,r.kt)("p",null,"The Report will print:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--------------------------------------------------\nPLUGIN INSTALLTION REPORT:\n--------------------------------------------------\n\nInstalled the following plugins:\n    - anonymousPlugin1\n\nThe following source have been modified:\n    - dispatcher.rpcManager.NopeRpcManager\n\nWatchout this may change the default behavior!\n")),(0,r.kt)("p",null,"after we have successfully loaded our plugin right now, we want to test our new code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Create a communicator:\n// We will use the event layer (which just runs internally)\nconst communicator = nope.getLayer("event");\n\n// Lets create our dispatcher\n\n// 1. Dispatcher simulates our local system\nconst dispatcher = nope.dispatcher.getDispatcher({\n  communicator,\n  id: "local"\n}, {\n  singleton: false,\n  useBaseServices: false\n});\n\n// Test our function\n\ndispatcher.rpcManager.hello("Example")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"'Hello Example!'\n")),(0,r.kt)("p",null,"As we can see our enhanced ",(0,r.kt)("strong",{parentName:"p"},"RPC-Manager")," now supports the ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," method."),(0,r.kt)("admonition",{title:"Take care",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Since Plugins arent loaded automatically, make shure that every ",(0,r.kt)("inlineCode",{parentName:"p"},"NoPE")," Runtime loads the desired plugins. This is although required for different ",(0,r.kt)("em",{parentName:"p"},"Runtime-Environments")," (like python)!"),(0,r.kt)("p",{parentName:"admonition"},"Otherwise you risk an inconsistent behavior!")))}d.isMDXComponent=!0}}]);