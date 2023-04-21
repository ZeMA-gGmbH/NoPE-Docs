"use strict";(self.webpackChunkopensource_website=self.webpackChunkopensource_website||[]).push([[4183],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},i="nope-js project",p={unversionedId:"help/Tools/project",id:"help/Tools/project",title:"nope-js project",description:"A Helper to create a new Project or add new items to an existing project.",source:"@site/docs/help/Tools/03-project.md",sourceDirName:"help/Tools",slug:"/help/Tools/project",permalink:"/docs/help/Tools/project",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"nope-js run",permalink:"/docs/help/Tools/run"},next:{title:"nope-js scan-ui",permalink:"/docs/help/Tools/scan-ui"}},l={},c=[{value:"parameters",id:"parameters",level:2},{value:"output",id:"output",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nope-js-project"},(0,o.kt)("inlineCode",{parentName:"h1"},"nope-js project")),(0,o.kt)("p",null,"A Helper to create a new Project or add new items to an existing project."),(0,o.kt)("admonition",{title:"Overwrite Files",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"nope-js project")," doesn't pre check, whether folder etc. exists. It may overwrites files. ")),(0,o.kt)("h2",{id:"parameters"},"parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"create"),": creates new Projects."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The tool will create a new folder based on the project name. "),(0,o.kt)("li",{parentName:"ul"},"The folder contains a default structure for a project    "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"edit"),": Helper to enhance your project and add ",(0,o.kt)("inlineCode",{parentName:"p"},"services")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"modules"),". It only works in projects created with ",(0,o.kt)("inlineCode",{parentName:"p"},"nope-js project")))),(0,o.kt)("admonition",{title:"Dialogs guide you",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"nope-js project")," uses interactive dialogs to guide you throught the process.")),(0,o.kt)("h2",{id:"output"},"output"),(0,o.kt)("p",null,"By using ",(0,o.kt)("inlineCode",{parentName:"p"},"nope-js project")," the following features are added to the project folder:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Debugging of the application using VS code (launch-file)"),(0,o.kt)("li",{parentName:"ul"},"Creation of a doc file (see doc/make)"),(0,o.kt)("li",{parentName:"ul"},"Helpers to build a browser related version"),(0,o.kt)("li",{parentName:"ul"},"Defined Project Structure (using interfaces etc.)"),(0,o.kt)("li",{parentName:"ul"},"Use of a changelog"),(0,o.kt)("li",{parentName:"ul"},"Deployment as a package"),(0,o.kt)("li",{parentName:"ul"},"Simple extension using project-tool")))}d.isMDXComponent=!0}}]);