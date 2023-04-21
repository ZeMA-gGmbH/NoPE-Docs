"use strict";(self.webpackChunkopensource_website=self.webpackChunkopensource_website||[]).push([[2316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},i="1. What is NoPE ?",s={unversionedId:"help/what-is-nope",id:"help/what-is-nope",title:"1. What is NoPE ?",description:"What does NoPE stand for?",source:"@site/docs/help/what-is-nope.md",sourceDirName:"help",slug:"/help/what-is-nope",permalink:"/NoPE-Docs/docs/help/what-is-nope",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"2. How to start?",permalink:"/NoPE-Docs/docs/help/how-to-start"}},l={},p=[{value:"What does <code>NoPE</code> stand for?",id:"what-does-nope-stand-for",level:2},{value:"Purpose of <code>NoPE</code>",id:"purpose-of-nope",level:2},{value:"Technical task of <code>NoPE</code>",id:"technical-task-of-nope",level:2},{value:"Requirements for <code>NoPE</code>",id:"requirements-for-nope",level:2},{value:"Quality objectives of <code>NoPE</code>",id:"quality-objectives-of-nope",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-what-is-nope-"},"1. What is NoPE ?"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3748).Z,width:"826",height:"282"})),(0,a.kt)("h2",{id:"what-does-nope-stand-for"},"What does ",(0,a.kt)("inlineCode",{parentName:"h2"},"NoPE")," stand for?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"No")," ",(0,a.kt)("strong",{parentName:"p"},"P"),"rogramming ",(0,a.kt)("strong",{parentName:"p"},"Environment")),(0,a.kt)("h2",{id:"purpose-of-nope"},"Purpose of ",(0,a.kt)("inlineCode",{parentName:"h2"},"NoPE")),(0,a.kt)("p",null,'NoPE" is essentially intended to simplify the implementation of distributed software systems. In the context of the researchgroup ',(0,a.kt)("a",{parentName:"p",href:"https://montagesysteme.zema.de/"},"Montagesysteme")," this includes all individual partial software components (e.g. wrapper for a robot, gripper or laser line sensor or software components), which are necessary to interact with an assembly system."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NoPE")," pursues the following goals and tasks, among others:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Creation of a uniform communication structure so that individual software components can communicate with each other."),(0,a.kt)("li",{parentName:"ul"},"Basis for subsystems that need to be connected."),(0,a.kt)("li",{parentName:"ul"},"By ",(0,a.kt)("inlineCode",{parentName:"li"},"NoPE")," software components should become more reusable and must not be provided each time again. "),(0,a.kt)("li",{parentName:"ul"},"The user should not be influenced by the concepts of ",(0,a.kt)("inlineCode",{parentName:"li"},"NoPE"),", much more ",(0,a.kt)("inlineCode",{parentName:"li"},"NoPE")," should be understood as work facilitation.")),(0,a.kt)("h2",{id:"technical-task-of-nope"},"Technical task of ",(0,a.kt)("inlineCode",{parentName:"h2"},"NoPE")),(0,a.kt)("p",null,"With the NoPE, employees develop software that is compatible with a common basis. For this purpose different patterns must be implemented. NoPE should support this process using a common communication basis. This communcation technology is compatible with other technologies (like ",(0,a.kt)("inlineCode",{parentName:"p"},"rest"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"opcua"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ros")," etc.)-"),(0,a.kt)("p",null,"For this a basic basis software / library is developed, with which standardizes and simplifies the communication between different modules. The structure of the software is to be standardized in a certain form (e.g. via standard classes and methods), so that a handover can be simplified and the developers only have to worry about the implementation of the logic. Thus, the developers do not need to independently integrate e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"REST")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt")," to interact with the modules of other developers. Furthermore, ",(0,a.kt)("inlineCode",{parentName:"p"},"NoPE")," should enable a ",(0,a.kt)("em",{parentName:"p"},"distribution")," of the software (e.g. on servers, IPCs etc.). Thus, e.g. ML solutions in Python can be implemented on a server and used in a javascript."),(0,a.kt)("p",null,"This is described in the following picture:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7820).Z,width:"593",height:"569"})),(0,a.kt)("h2",{id:"requirements-for-nope"},"Requirements for ",(0,a.kt)("inlineCode",{parentName:"h2"},"NoPE")),(0,a.kt)("p",null,"The following functional requirements are to be met by ",(0,a.kt)("inlineCode",{parentName:"p"},"NoPE"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A simple structure shall be used so that everyone can use ",(0,a.kt)("inlineCode",{parentName:"li"},"NoPE"),"."),(0,a.kt)("li",{parentName:"ul"},"All relevant patterns (",(0,a.kt)("inlineCode",{parentName:"li"},"pub-sub"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"request and response"),") should be able to be implemented via ",(0,a.kt)("inlineCode",{parentName:"li"},"NoPE"),". "),(0,a.kt)("li",{parentName:"ul"},"The user should not worry about the communication, but concentrate on the implementation of his software component."),(0,a.kt)("li",{parentName:"ul"},"The user should be able to use programming languages independently of the modules."),(0,a.kt)("li",{parentName:"ul"},"NoPE should be so flexible that in the future further architectures can be built on it (e.g. Blackboard etc).")),(0,a.kt)("h2",{id:"quality-objectives-of-nope"},"Quality objectives of ",(0,a.kt)("inlineCode",{parentName:"h2"},"NoPE")),(0,a.kt)("p",null,"The top 3 architectural quality requirements that key stakeholders are particularly concerned with meeting or maintaining are\nare particularly important: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Functional Suitablity"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Motivation"),": The system should meet the requirements so that the system can be used and this is desired by the users.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Operability"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Motivation"),": The application should merge different research topics by allowing individual software components (created by different users) to be used. This should lead to a change of culture in the long run. The software components are to become concomitantly better tested, more universal and versatile applicable.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Transferablitiy"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Motivation"),": The system should be applicable in different use cases. Thus a long-term compatibility of the software written by the users is to be ensured."))))}d.isMDXComponent=!0},7820:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/nope-network-5e9d6836de191586c36e9daf50bb473b.png"},3748:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/logo-93ea64fcc0c48c3d6c76e7cd558f6822.png"}}]);