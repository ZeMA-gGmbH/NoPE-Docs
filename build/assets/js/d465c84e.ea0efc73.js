"use strict";(self.webpackChunkopensource_website=self.webpackChunkopensource_website||[]).push([[8207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||b[d]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:3},o="3. Observables",i={unversionedId:"help/Tutorials/nodejs/basics/observables",id:"help/Tutorials/nodejs/basics/observables",title:"3. Observables",description:"Observables implent the default Observer Pattern. Checkout wikipedia for a short overview of the pattern.",source:"@site/docs/help/Tutorials/nodejs/03-basics/03-observables.md",sourceDirName:"help/Tutorials/nodejs/03-basics",slug:"/help/Tutorials/nodejs/basics/observables",permalink:"/docs/help/Tutorials/nodejs/basics/observables",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. EventEmitters",permalink:"/docs/help/Tutorials/nodejs/basics/eventemitters"},next:{title:"4. Create a Dispatcher",permalink:"/docs/help/Tutorials/nodejs/basics/create-dispatcher"}},s={},p=[{value:"Usage of <code>nope.observables</code>",id:"usage-of-nopeobservables",level:2},{value:"<code>setContent</code>: Change the content of the Observable.",id:"setcontent-change-the-content-of-the-observable",level:2},{value:"<code>setter</code>: Define a specific setter for the observable.",id:"setter-define-a-specific-setter-for-the-observable",level:2},{value:"<code>getContent</code>: Get the current content of the Observable.",id:"getcontent-get-the-current-content-of-the-observable",level:2},{value:"<code>getter</code>: Define a specific getter for the observable.",id:"getter-define-a-specific-getter-for-the-observable",level:2},{value:"Subscriptions",id:"subscriptions",level:2},{value:"Comparing EventEmitters and Observables",id:"comparing-eventemitters-and-observables",level:2}],u={toc:p},c="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"3-observables"},"3. Observables"),(0,a.kt)("p",null,"Observables implent the default ",(0,a.kt)("inlineCode",{parentName:"p"},"Observer")," Pattern. Checkout ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Observer_pattern"},"wikipedia")," for a short overview of the pattern. "),(0,a.kt)("p",null,"Our Implementation enhances the ",(0,a.kt)("inlineCode",{parentName:"p"},"EventEmitters")),(0,a.kt)("h2",{id:"usage-of-nopeobservables"},"Usage of ",(0,a.kt)("inlineCode",{parentName:"h2"},"nope.observables")),(0,a.kt)("p",null,"To work with ",(0,a.kt)("inlineCode",{parentName:"p"},"observables")," we have to import these:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import * as nope from "nope-js-node";\n')),(0,a.kt)("p",null,"Afterward we are able to create our first Observable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Create our Observable:\nconst obs = new nope.observables.NopeObservable<number>()\n")),(0,a.kt)("h2",{id:"setcontent-change-the-content-of-the-observable"},(0,a.kt)("inlineCode",{parentName:"h2"},"setContent"),": Change the content of the Observable."),(0,a.kt)("p",null,"To change the content of an observable use the method ",(0,a.kt)("inlineCode",{parentName:"p"},"setContent"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// Set the content to "1337"\nobs.setContent(5);\n\n// Print the content (see getContent)\nconsole.log("current value =",obs.getContent());\n')),(0,a.kt)("p",null,"This will print:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"current value = 5\n")),(0,a.kt)("h2",{id:"setter-define-a-specific-setter-for-the-observable"},(0,a.kt)("inlineCode",{parentName:"h2"},"setter"),": Define a specific setter for the observable."),(0,a.kt)("p",null,"You can specify a specifc getter for the observable for instance, to limit the number to the following constrains ",(0,a.kt)("inlineCode",{parentName:"p"},"> 0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"< 10"),"."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The setter function will receive multiple parameters, as listed below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"value"),","),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," containing:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sender"),": The Element, which changed the data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timestamp"),": The timestamp of the change"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"args"),": additional args. ")))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The setter function have to return a ",(0,a.kt)("inlineCode",{parentName:"p"},"dict")," with the following keys:\n| key | type | content |\n| - | - | - |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"valid")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"bool")," | A Flag, to show whether the data are valid or not. If the data is invalid, the observable wont store them |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," | The Data that has been adapted |"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Below, we will implement an example to show the setter above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'obs.setter = (value, options) => {\n  // Print, which data we received\n  console.log("setter received", value, options);\n  // Show the result of our comparison\n  console.log("data is valid:", (value > 0) && (value < 10));\n  return {\n    // The Value\n    value: value,\n    // Valid\n    valid: (value > 0) && (value < 10)\n  }\n}\n\n// Set the content to "1337" ==> But our setter will prevent using this value because it isnt valid.\nobs.setContent(1337);\n\n// Print the content (see getContent) ==> we expect to get "5"\nconsole.log("current value =", obs.getContent());\n')),(0,a.kt)("p",null,"This will print:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"setter received 1337 {}\ndata is valid: false\ncurrent value = 5\n")),(0,a.kt)("p",null,"Now we can reset the setter by assigning ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),". This disables the setter again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'obs.setter = null\n\n// Set the content to "1337" we do not have any setter ==> we will use this parameter\nobs.setContent(1337);\n\n// Print the content (see getContent) ==> we expect to get "1337"\nconsole.log("current value =", obs.getContent());\n')),(0,a.kt)("p",null,"This will print:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"current value = 1337\n")),(0,a.kt)("p",null,"To remove such a getter just set the getter property to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("h2",{id:"getcontent-get-the-current-content-of-the-observable"},(0,a.kt)("inlineCode",{parentName:"h2"},"getContent"),": Get the current content of the Observable."),(0,a.kt)("p",null,"To extract the content of our observable, we are able to use the function ",(0,a.kt)("inlineCode",{parentName:"p"},"getContent")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let content = obs.getContent();\nconsole.log("current value =", content)\n')),(0,a.kt)("p",null,"This will print:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"current value = 1337\n")),(0,a.kt)("p",null,"If no data is assigned, this will result in ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),". Otherwise the current data is returned."),(0,a.kt)("h2",{id:"getter-define-a-specific-getter-for-the-observable"},(0,a.kt)("inlineCode",{parentName:"h2"},"getter"),": Define a specific getter for the observable."),(0,a.kt)("p",null,"You can specify a specifc getter for the observable for instance, to allways return a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// Define a getter\nobs.getter = (value) => "Allways this result";\nconsole.log("current value (with getter) =", obs.getContent());\n')),(0,a.kt)("p",null,"This will print:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"current value (with getter) = Allways this result\n")),(0,a.kt)("p",null,"To remove such a getter just set the getter property to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),". "),(0,a.kt)("p",null,'The Original value is not changed ==> we expect to get "1337"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// Reset the getter.\nobs.getter = null;\nconsole.log("current value (after removing the getter) =", obs.getContent());\n')),(0,a.kt)("p",null,"This will print:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"current value (after removing the getter) = 1337\n")),(0,a.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,a.kt)("p",null,"You can use an observable to get informed about changes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"define a ",(0,a.kt)("inlineCode",{parentName:"li"},"callback"),", which receives both, the value and the options."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"subscribe")," the observable.")),(0,a.kt)("p",null,"During subscribing you can use the following options for subscribing:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"key"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"content"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"skipCurrent")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",{parentName:"tr",align:null},"A Flag, which will call the callback if set to true the first time after a change. Defaults to False")))),(0,a.kt)("p",null,"Lets determine the behavior using an example code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'function onChange(value, options){\n    console.log("options.skipCurrent = False. Value is now:", value)\n}\n    \nfunction onChangeSkip(value, options){\n    console.log("options.skipCurrent = True. Value is now:", value);\n}\n\nconst observer_01 = obs.subscribe(onChange)\nconst observer_02 = obs.subscribe(onChangeSkip, {"skipCurrent": true})\n\nobs.setContent("new-value")\nobs.setContent("new-value-2")\n')),(0,a.kt)("p",null,"This code results in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"options.skipCurrent = False. Value is now: 1337\noptions.skipCurrent = False. Value is now: new-value\noptions.skipCurrent = True. Value is now: new-value\noptions.skipCurrent = False. Value is now: new-value-2\noptions.skipCurrent = True. Value is now: new-value-2\n")),(0,a.kt)("h2",{id:"comparing-eventemitters-and-observables"},"Comparing EventEmitters and Observables"),(0,a.kt)("p",null,"As you perhaps has already noticed there is overlapping feature set between ",(0,a.kt)("inlineCode",{parentName:"p"},"EventEmitters")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Observables"),". But what is the main difference?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"EventEmitters"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you subscribe to ",(0,a.kt)("em",{parentName:"li"},"EventEmitters")," you will only get informed, when the next event is emitted."),(0,a.kt)("li",{parentName:"ul"},"You ",(0,a.kt)("strong",{parentName:"li"},"can't")," determine the last event that was published, before you subscribe"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Events")," exists just during emitting, afterwards there is no ",(0,a.kt)("strong",{parentName:"li"},"event")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Observables"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you subscribe to ",(0,a.kt)("em",{parentName:"li"},"Observables")," you will received the current value immediately."),(0,a.kt)("li",{parentName:"ul"},"You can extract the data of an observable using the ",(0,a.kt)("inlineCode",{parentName:"li"},"getContent")," method, without subscribing to the data."),(0,a.kt)("li",{parentName:"ul"},"In an object orientated approach, observables match properties of instances.")))))}b.isMDXComponent=!0}}]);