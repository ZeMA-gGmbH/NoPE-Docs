"use strict";(self.webpackChunkopensource_website=self.webpackChunkopensource_website||[]).push([[3323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},a="nope-js conf",l={unversionedId:"help/Tools/conf",id:"help/Tools/conf",title:"nope-js conf",description:"Generates a new configuration file which will used in run.",source:"@site/docs/help/Tools/01-conf.md",sourceDirName:"help/Tools",slug:"/help/Tools/conf",permalink:"/docs/help/Tools/conf",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/help/Tools/overview"},next:{title:"nope-js run",permalink:"/docs/help/Tools/run"}},s={},c=[{value:"parameters",id:"parameters",level:2},{value:"output",id:"output",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nope-js-conf"},(0,r.kt)("inlineCode",{parentName:"h1"},"nope-js conf")),(0,r.kt)("p",null,"Generates a new configuration file which will used in run."),(0,r.kt)("p",null,"The Config Tool creates a configuration that contains the packages and services to be loaded. The file is saved as a JSON file and can be manipulated afterwards. "),(0,r.kt)("p",null,"The config file describes what a NoPE instance should execute inital and provide to other systems. To do this| the tool scans a folder and identifies all ",(0,r.kt)("inlineCode",{parentName:"p"},"*.package.js")," files.  These are loaded by the tool and if present the NoPE packages are extracted."),(0,r.kt)("h2",{id:"parameters"},"parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-h"),": shows the help."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-d"),": Folder which should be scaned for the ",(0,r.kt)("inlineCode",{parentName:"li"},"*.package.js")," files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-f"),": The Output File. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"./config/config.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-i"),": Switchtes the tool to an interactive mode, where the user is able to determine which items should be included in the config file. ")),(0,r.kt)("admonition",{title:"info",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to manipulate your config-file without an editor use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-i")," option. The interactive tool will assist you to build your configuration!")),(0,r.kt)("h2",{id:"output"},"output"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cli")," will find all defined ",(0,r.kt)("inlineCode",{parentName:"p"},"services")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"modules")," exposed in a so called ",(0,r.kt)("inlineCode",{parentName:"p"},"NoPE-Package")," (This has been created automatically during the initalization of the project). The tool will store its results in the following configuration (located at ",(0,r.kt)("inlineCode",{parentName:"p"},"./config/config.json"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // Our toool fund the following functions:\n    "functions": [\n        {\n            "path": "dist\\\\src\\\\HelloWorld.functions.js",\n            "functions": []\n        }\n    ],\n\n    // Additionally the tool found our `HelloWorld` Project as "module"\n    "packages": [\n        {\n            "nameOfPackage": "HelloWorld",\n            "defaultInstances": [],\n            "autostart": {},\n            "path": "dist\\\\src\\\\HelloWorld.package.js"\n        }\n    ]\n}\n')))}d.isMDXComponent=!0}}]);