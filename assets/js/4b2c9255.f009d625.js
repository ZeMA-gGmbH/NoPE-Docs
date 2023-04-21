"use strict";(self.webpackChunkopensource_website=self.webpackChunkopensource_website||[]).push([[5400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},o="2. EventEmitters",l={unversionedId:"help/Tutorials/nodejs/basics/eventemitters",id:"help/Tutorials/nodejs/basics/eventemitters",title:"2. EventEmitters",description:"EventEmitters implent the default Observer (or publish and subscribe) Pattern. Checkout wikipedia for a short overview of the pattern.",source:"@site/docs/help/Tutorials/nodejs/03-basics/02-eventemitters.md",sourceDirName:"help/Tutorials/nodejs/03-basics",slug:"/help/Tutorials/nodejs/basics/eventemitters",permalink:"/NoPE-Docs/docs/help/Tutorials/nodejs/basics/eventemitters",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Logging",permalink:"/NoPE-Docs/docs/help/Tutorials/nodejs/basics/logging"},next:{title:"3. Observables",permalink:"/NoPE-Docs/docs/help/Tutorials/nodejs/basics/observables"}},s={},p=[{value:"Usage of <code>nope.eventemitters</code>",id:"usage-of-nopeeventemitters",level:2},{value:"<code>emit</code>: Emit Events.",id:"emit-emit-events",level:2},{value:"<code>setter</code>: Define a specific setter for the observable.",id:"setter-define-a-specific-setter-for-the-observable",level:2},{value:"<code>getter</code>: Define a specific getter for the observable.",id:"getter-define-a-specific-getter-for-the-observable",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2-eventemitters"},"2. EventEmitters"),(0,i.kt)("p",null,"EventEmitters implent the default ",(0,i.kt)("inlineCode",{parentName:"p"},"Observer")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"publish and subscribe"),") Pattern. Checkout ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Observer_pattern"},"wikipedia")," for a short overview of the pattern. "),(0,i.kt)("h2",{id:"usage-of-nopeeventemitters"},"Usage of ",(0,i.kt)("inlineCode",{parentName:"h2"},"nope.eventemitters")),(0,i.kt)("p",null,"To work with ",(0,i.kt)("inlineCode",{parentName:"p"},"eventemitters")," we have to import these:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import * as nope from "nope-js-node";\n')),(0,i.kt)("p",null,"Afterward we are able to create our first Event-Emitter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Create our Event-Emitter:\nconst obs = new nope.eventemitters.NopeEventEmitter<number>()\n")),(0,i.kt)("h2",{id:"emit-emit-events"},(0,i.kt)("inlineCode",{parentName:"h2"},"emit"),": Emit Events."),(0,i.kt)("p",null,"To em, use the method ",(0,i.kt)("inlineCode",{parentName:"p"},"emit"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Set the content to \"1337\"\nemitter.emit(5);\n\n// There is no observer, of that event\n// lets create one:\nconst observer = emitter.subscribe(event => console.log('emitted value =',event));\n")),(0,i.kt)("p",null,"Because events are not persistent, our observer will be informed,\nthe next time an event is emitted."),(0,i.kt)("h2",{id:"setter-define-a-specific-setter-for-the-observable"},(0,i.kt)("inlineCode",{parentName:"h2"},"setter"),": Define a specific setter for the observable."),(0,i.kt)("p",null,"You can specify a specifc getter for the observable for instance, to limit the number to the following constrains ",(0,i.kt)("inlineCode",{parentName:"p"},"> 0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"< 10"),"."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The setter function will receive multiple parameters, as listed below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"value"),","),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," containing:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sender"),": The Element, which changed the data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp"),": The timestamp of the change"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"args"),": additional args. ")))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The setter function have to return a ",(0,i.kt)("inlineCode",{parentName:"p"},"dict")," with the following keys:\n| key | type | content |\n| - | - | - |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"valid")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")," | A Flag, to show whether the data are valid or not. If the data is invalid, the observable wont store them |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," | The Data that has been adapted |"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Below, we will implement an example to show the setter above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'emitter.setter = (value, options) => {\n  // Print, which data we received\n  console.log("setter received", value, options);\n  // Show the result of our comparison\n  console.log("data is valid:", (value > 0) && (value < 10));\n  return {\n    // The Value\n    value: value,\n    // Valid\n    valid: (value > 0) && (value < 10)\n  }\n}\n\n// Emit "1337" ==> But our setter will prevent using this value because it isnt valid.\nemitter.emit(1337);\n')),(0,i.kt)("p",null,"This will print:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"setter received 1337 {}\ndata is valid: false\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Because our setter defined the data as invalid, the observer wont receive information.    ")),(0,i.kt)("p",null,"Now we can reset the setter by assigning ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),". This disables the setter again:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'emitter.setter = null\n\n// Emit "1337" we do not have any setter ==> we will use this parameter\nemitter.emit(1337);\n\n')),(0,i.kt)("p",null,"This will print:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"emitted value =1337\n")),(0,i.kt)("h2",{id:"getter-define-a-specific-getter-for-the-observable"},(0,i.kt)("inlineCode",{parentName:"h2"},"getter"),": Define a specific getter for the observable."),(0,i.kt)("p",null,"You can specify a specifc getter for the emitter e.g., to allways return a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// Define a getter\nemitter.getter = (value) => "Allways this result";\n\n// Now lets emit something\nemitter.emit(1234)\n')),(0,i.kt)("p",null,"This will print:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"emitted value = Allways this result\n")),(0,i.kt)("p",null,"To remove such a getter just set the getter property to ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),". This wont trigger the emitter.  "),(0,i.kt)("h1",{id:"subscriptions"},"Subscriptions"),(0,i.kt)("p",null,"You can use an emitter to get informed about changes (we already did that to get an log message):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"define a ",(0,i.kt)("inlineCode",{parentName:"li"},"callback"),", which receives both, the value and the options."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"subscribe")," the emitter.")))}m.isMDXComponent=!0}}]);