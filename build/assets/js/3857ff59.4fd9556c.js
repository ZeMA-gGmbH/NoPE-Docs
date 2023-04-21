"use strict";(self.webpackChunkopensource_website=self.webpackChunkopensource_website||[]).push([[1746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5},a="nope-js scan-ui",l={unversionedId:"help/Tools/scan-ui",id:"help/Tools/scan-ui",title:"nope-js scan-ui",description:"Generates a new ui-configuration file. This configuration can then be uploaded using the nope-js upload-ui.",source:"@site/docs/help/Tools/04-scan-ui.md",sourceDirName:"help/Tools",slug:"/help/Tools/scan-ui",permalink:"/docs/help/Tools/scan-ui",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"nope-js project",permalink:"/docs/help/Tools/project"},next:{title:"6. Technical Background",permalink:"/docs/category/6-technical-background"}},c={},s=[{value:"parameters",id:"parameters",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nope-js-scan-ui"},(0,o.kt)("inlineCode",{parentName:"h1"},"nope-js scan-ui")),(0,o.kt)("p",null,"Generates a new ui-configuration file. This configuration can then be uploaded using the ",(0,o.kt)("inlineCode",{parentName:"p"},"nope-js upload-ui"),"."),(0,o.kt)("p",null,"The tool scans the files located at the directory (chang that folder with ",(0,o.kt)("inlineCode",{parentName:"p"},"-d ./your/folder"),") and searches  ",(0,o.kt)("inlineCode",{parentName:"p"},"*.package.js")," files. They may include some ui-defintions. These definitions are callbacks which can be parsed and loaded into an ui. The ",(0,o.kt)("inlineCode",{parentName:"p"},"scan-ui")," performs the scanning and parsing process. "),(0,o.kt)("h2",{id:"parameters"},"parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-h"),": shows the help."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-d"),": Folder which should be scaned for the ",(0,o.kt)("inlineCode",{parentName:"li"},"*.package.js")," files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-f"),": The Output File. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"./config/config.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-i"),": Switchtes the tool to an interactive mode, where the user is able to determine which items should be included in the config file.")))}d.isMDXComponent=!0}}]);