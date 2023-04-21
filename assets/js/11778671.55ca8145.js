"use strict";(self.webpackChunkopensource_website=self.webpackChunkopensource_website||[]).push([[1856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="Constraints of NoPE",l={unversionedId:"help/Background/constraints",id:"help/Background/constraints",title:"Constraints of NoPE",description:"The following constraints were identified during the development of NoPE:",source:"@site/docs/help/Background/constraints.md",sourceDirName:"help/Background",slug:"/help/Background/constraints",permalink:"/NoPE-Docs/docs/help/Background/constraints",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Requirements of NoPE",permalink:"/NoPE-Docs/docs/help/Background/requirements"},next:{title:"The context of NoPE",permalink:"/NoPE-Docs/docs/help/Background/context"}},s={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"constraints-of-nope"},"Constraints of ",(0,a.kt)("inlineCode",{parentName:"h1"},"NoPE")),(0,a.kt)("p",null,"The following constraints were identified during the development of ",(0,a.kt)("inlineCode",{parentName:"p"},"NoPE"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the researchgroup ",(0,a.kt)("inlineCode",{parentName:"li"},"Montagesysteme"),", prototypes are developed first and foremost. Therefore the development speed is extremely important. Therefore the following boundary condition is met: ",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"In the development step, the rapid development of a runnable prototype usually takes place first, and the interfaces are not fixed until afterwards. Therefore, this development process / procedure should remain mappable in the system. (Differently than with e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC"),", with which first the interfaces are defined. Here: ",(0,a.kt)("inlineCode",{parentName:"p"},"Logic first"),")"))),(0,a.kt)("li",{parentName:"ul"},"The users are not professional programmers. This has the following implications:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"a simple application is extremely important"),(0,a.kt)("li",{parentName:"ul"},"complicated constructs (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"async")," programming should be avoided or made as simple as possible by helpers)"),(0,a.kt)("li",{parentName:"ul"},"The user has no understanding of ",(0,a.kt)("em",{parentName:"li"},"multithreading")," etc."))),(0,a.kt)("li",{parentName:"ul"},"A spreading must be actively driven, since the training represents first an additional expenditure for the coworkers, since these are partially strongly in the daily and project business involved. Impact:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The introduction is not a self-runner,"),(0,a.kt)("li",{parentName:"ul"},"Due to the uncertainty regarding the distribution of ",(0,a.kt)("inlineCode",{parentName:"li"},"NoPE")," within the researchgroup, the modules must remain functional even without ",(0,a.kt)("inlineCode",{parentName:"li"},"NoPE")),(0,a.kt)("li",{parentName:"ul"},"The integration effort of ",(0,a.kt)("inlineCode",{parentName:"li"},"NoPE")," must be minimized."),(0,a.kt)("li",{parentName:"ul"},"All hurdles have to be designed as low as possible. (e.g. easy usage, file based configuration principle, etc.)"),(0,a.kt)("li",{parentName:"ul"},"Simple ",(0,a.kt)("inlineCode",{parentName:"li"},"batch")," files for installation are required. "),(0,a.kt)("li",{parentName:"ul"},"Internally the software can be shared via ",(0,a.kt)("inlineCode",{parentName:"li"},"docker"),", the internal npm and pip administration. However, these items must be actively documented!"))),(0,a.kt)("li",{parentName:"ul"},"The Msys team has agreed on the restriction of different programming languages (backend = python, frontend = javascript).",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The languages (python and javascript) must be compatible with the system."),(0,a.kt)("li",{parentName:"ul"},"Since these languages are dynamic, the environment can be dynamic as well."))),(0,a.kt)("li",{parentName:"ul"},"runnable on different systems (Linux, Windows, Browser), because different environments are used for application development at the researchgroup."),(0,a.kt)("li",{parentName:"ul"},"The executability must be given on x86 systems. i.e.:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Embedded systems are neglected"),(0,a.kt)("li",{parentName:"ul"},"PLCs are neglected."))),(0,a.kt)("li",{parentName:"ul"},"A uniform naming convention is used. Here ",(0,a.kt)("inlineCode",{parentName:"li"},"camelCase"))))}m.isMDXComponent=!0}}]);