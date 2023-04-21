"use strict";(self.webpackChunkopensource_website=self.webpackChunkopensource_website||[]).push([[7431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Show me NoPE in 5 Minutes!",l={unversionedId:"help/Tutorials/nodejs/nope-5-min",id:"help/Tutorials/nodejs/nope-5-min",title:"Show me NoPE in 5 Minutes!",description:"1. Create a Nodejs Project",source:"@site/docs/help/Tutorials/nodejs/01-nope-5-min.md",sourceDirName:"help/Tutorials/nodejs",slug:"/help/Tutorials/nodejs/nope-5-min",permalink:"/NoPE-Docs/docs/help/Tutorials/nodejs/nope-5-min",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - NodeJS",permalink:"/NoPE-Docs/docs/category/tutorial---nodejs"},next:{title:"Use NoPE in Programms",permalink:"/NoPE-Docs/docs/help/Tutorials/nodejs/nope-in-programms"}},s={},p=[{value:"1. Create a <code>Nodejs</code> Project",id:"1-create-a-nodejs-project",level:2},{value:"2. Add a Service in <code>Typescript</code>",id:"2-add-a-service-in-typescript",level:2},{value:"Why a Service",id:"why-a-service",level:3},{value:"Using the <code>CLI</code> to generate the Service",id:"using-the-cli-to-generate-the-service",level:3},{value:"Adding a Service interface",id:"adding-a-service-interface",level:3},{value:"3. Running the Service:",id:"3-running-the-service",level:2},{value:"4. Interact with the Runtime",id:"4-interact-with-the-runtime",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"show-me-nope-in-5-minutes"},"Show me ",(0,r.kt)("inlineCode",{parentName:"h1"},"NoPE")," in 5 Minutes!"),(0,r.kt)("h2",{id:"1-create-a-nodejs-project"},"1. Create a ",(0,r.kt)("inlineCode",{parentName:"h2"},"Nodejs")," Project"),(0,r.kt)("p",null,"Get started by ",(0,r.kt)("strong",{parentName:"p"},"creating a new project")," distributed using ",(0,r.kt)("inlineCode",{parentName:"p"},"NoPE"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Installation using  npm:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g nope-js-node\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start your first Project:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nope-js project create\n")),(0,r.kt)("p",{parentName:"li"},"This should open a ",(0,r.kt)("inlineCode",{parentName:"p"},"cli")," like that:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Tool",src:n(1405).Z,width:"1219",height:"832"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Answer the requried questions to complete create the directory."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name the project ",(0,r.kt)("inlineCode",{parentName:"li"},"HelloWorld")),(0,r.kt)("li",{parentName:"ul"},"Give it a short summary. This summary will used during distributing your project."),(0,r.kt)("li",{parentName:"ul"},"make shure you select ",(0,r.kt)("inlineCode",{parentName:"li"},"typescript")," as project type  ")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"navigate to the create folder ( e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"cd ./HelloWorld")," ) "),(0,r.kt)("p",{parentName:"li"},"This creates the following folder structure:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Folder.",src:n(6342).Z,width:"435",height:"736"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your IDE (e.g. vscode)"))),(0,r.kt)("p",null,"By using the project-tool the following features are added to the project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Debugging of the application using VS code (launch-file)"),(0,r.kt)("li",{parentName:"ul"},"Creation of a doc file (see doc/make)"),(0,r.kt)("li",{parentName:"ul"},"Helpers to build a browser related version"),(0,r.kt)("li",{parentName:"ul"},"Defined Project Structure (using interfaces etc.)"),(0,r.kt)("li",{parentName:"ul"},"Use of a changelog"),(0,r.kt)("li",{parentName:"ul"},"Deployment as a package"),(0,r.kt)("li",{parentName:"ul"},"Simple extension using project-tool")),(0,r.kt)("h2",{id:"2-add-a-service-in-typescript"},"2. Add a Service in ",(0,r.kt)("inlineCode",{parentName:"h2"},"Typescript")),(0,r.kt)("p",null,"Our goal is to define a greeting service"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The service creates a greeting message for a person. ")),(0,r.kt)("h3",{id:"why-a-service"},"Why a Service"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This service is independent of how many times it has been called.\nOur functionality is stateless, this allows us to use a service.")),(0,r.kt)("h3",{id:"using-the-cli-to-generate-the-service"},"Using the ",(0,r.kt)("inlineCode",{parentName:"h3"},"CLI")," to generate the Service"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To create the Service:\nuse the ",(0,r.kt)("inlineCode",{parentName:"p"},"project-tool")," to create the service "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nope-js project edit\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Edit",src:n(7933).Z,width:"1219",height:"832"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Perfom the following selection inside of the tool.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Selection ",(0,r.kt)("inlineCode",{parentName:"p"},"add"),", to add a new element")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"service"),", because we want to create a service")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the name of the service, in our case ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorld")),(0,r.kt)("p",{parentName:"li"},"Creation of the corresponding files and imports is done automatically"),(0,r.kt)("p",{parentName:"li"},"This will update our files in the Folder:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Folder.",src:n(3629).Z,width:"442",height:"770"})))),(0,r.kt)("p",null,"Now ",(0,r.kt)("inlineCode",{parentName:"p"},"NoPE")," defined a new service file (",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorld.functions.ts"),") for us:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { HelloWorldService } from "../types/interfaces";\nimport { exportAsNopeService, getNopeLogger } from "nope-js-node";\n\nconst logger = getNopeLogger("HelloWorld-service")\n\n// Here is our main implementation we need to change\nexport async function _HelloWorldService (greetings: string) {\n    // Please overwrite me.\n    logger.debug("calling service \'HelloWorld\' with the following parameters:", greetings)\n    return "Hello " + greetings + "!"\n}\n\n// The exported Service.\nexport const HelloWorld: HelloWorldService =  exportAsNopeService(_HelloWorldService, {\n    id: "HelloWorld",\n    schema: {},\n});\n\n')),(0,r.kt)("p",null,"In that file, you will find a template for the service we want to implement. By default, the newly created service implements the hello-world behavior. This must changed. In our case it matches the desired behavior."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All services ",(0,r.kt)("strong",{parentName:"p"},"must")," be implemented ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," manner. This is necessary so that the runtime is not blocked.")),(0,r.kt)("h3",{id:"adding-a-service-interface"},"Adding a Service interface"),(0,r.kt)("p",null,"We now want to describe our service, that it can be used correctly at different Runtimes. Therefore we will add an ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"exported"))," service. This Schema follows the definition of a ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON-Schema"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'export const HelloWorld: HelloWorldService =  exportAsNopeService(_HelloWorldService, {\n    id: "HelloWorld",\n\n    // We describe our interface as follows:\n\n    schema: {\n\n        // Enhanced Type of the JSON-Schema. We added the type: "function" for this purpose\n        type: "function",\n        \n        // To describe the used inputs of a function or serive we added the field "inputs" to the schema.\n        // It contains a list of all required inputs.\n        inputs: [\n            {\n                // The Description of the Parameter\n                description: "The name which should receive a Greeting",\n                // Its used name in the function (see the arguments of the function)\n                name: "greetings",\n                // The Schema follows a default JSON-Schema\n                schema: {\n                    type: "string"\n                }\n            }\n        ],\n\n        // To describe the return of a function we added the field "outputs". It contains a \n        // JSON-Schema Object.\n        outputs:{\n            type: "string",\n\n            // We provide some extra Info for the other users.\n            description: "The greeting Message!"\n        }\n    },\n});\n')),(0,r.kt)("p",null,"Luckily, ",(0,r.kt)("inlineCode",{parentName:"p"},"Typescript")," will help us during this process due to the typing system of ",(0,r.kt)("inlineCode",{parentName:"p"},"Typescript"),"."),(0,r.kt)("h2",{id:"3-running-the-service"},"3. Running the Service:"),(0,r.kt)("p",null,"Before we are able to execute our service we have to ",(0,r.kt)("inlineCode",{parentName:"p"},"compile")," our code to pure ",(0,r.kt)("inlineCode",{parentName:"p"},"javascript"),". "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make shure you installed all dependencies (This has only to be performed once):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Compile your code:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./00-compile.sh\n")),(0,r.kt)("p",{parentName:"li"},"This will compile the ",(0,r.kt)("inlineCode",{parentName:"p"},"Typescript")," files to pure ",(0,r.kt)("inlineCode",{parentName:"p"},"javascript"),". Additionally the Files will be compiled to a specific browser version."))),(0,r.kt)("p",null,"To run the ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," and distribute to different ",(0,r.kt)("inlineCode",{parentName:"p"},"NoPE"),"-Runtimes we have to determine a configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nope-js conf -d dist\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cli")," will find all defined ",(0,r.kt)("inlineCode",{parentName:"p"},"services")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"modules")," exposed in a so called ",(0,r.kt)("inlineCode",{parentName:"p"},"NoPE-Package")," (This has been created automatically during the initalization of the project). The tool will store its results in the following configuration (located at ",(0,r.kt)("inlineCode",{parentName:"p"},"./config/config.json"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // Our toool fund the following functions:\n    "functions": [\n        {\n            "path": "dist\\\\src\\\\HelloWorld.functions.js",\n            "functions": []\n        }\n    ],\n\n    // Additionally the tool found our `HelloWorld` Project as "module"\n    "packages": [\n        {\n            "nameOfPackage": "HelloWorld",\n            "defaultInstances": [],\n            "autostart": {},\n            "path": "dist\\\\src\\\\HelloWorld.package.js"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"Finally we are ready to distribute our service by using the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nope-js run\n")),(0,r.kt)("p",null,"This should produce the following output."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Runtime",src:n(3265).Z,width:"1317",height:"1089"})),(0,r.kt)("h2",{id:"4-interact-with-the-runtime"},"4. Interact with the Runtime"),(0,r.kt)("p",null,"Currently our service is only run internally (nope is not connected and runs without an external connection layer). To check and play with the distribution, we kill our old process (",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl+c"),") create a separate process (e.g. a bash) and provide a serve:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nope-js run -c io-server\n")),(0,r.kt)("p",null,"This will spool up a ",(0,r.kt)("inlineCode",{parentName:"p"},"socket-io")," server on our localhost. "),(0,r.kt)("p",null,"Afterwards we will restart our Runtime hosting the created service using ",(0,r.kt)("inlineCode",{parentName:"p"},"io-sockets")," as connection layer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nope-js run -c io-client\n")),(0,r.kt)("p",null,"Now we are able to start our ",(0,r.kt)("inlineCode",{parentName:"p"},"interact-tool")," to manually execute our process:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nope-js interact -c io-client -s\n")),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"interact"),"-",(0,r.kt)("strong",{parentName:"p"},"tool")," follow the questions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What do you want to do?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We want to inspect our distributed system -> ",(0,r.kt)("inlineCode",{parentName:"li"},"inspect")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What do you want to inspect?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We want to check if our service is present -> ",(0,r.kt)("inlineCode",{parentName:"li"},"service")),(0,r.kt)("li",{parentName:"ul"},"We should be albe to see our ",(0,r.kt)("inlineCode",{parentName:"li"},"HelloWorld"),"-Service (see 1)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now we want to execute this service. Therefore we navigate ",(0,r.kt)("inlineCode",{parentName:"p"},"back")," to the main menu")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now we select ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," and afterwards ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," because we want to execute our service")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now the Tool renders the available services and we select ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorld")," (see 2) and it will render the previously defined Schema.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now we have to enter the inputs required by the Service:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It is important that the parameters are entered as list (because there might be more the 1 Parameter)"),(0,r.kt)("li",{parentName:"ul"},"Enter the parameters as valid ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON")," Data."),(0,r.kt)("li",{parentName:"ul"},"Press ",(0,r.kt)("inlineCode",{parentName:"li"},"enter"))),(0,r.kt)("admonition",{parentName:"li",title:"Take care",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Executing services with the interact tool will perfom function immedialty. If you integrated Hardware be aware of that."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Tool shows the result (see 4)"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Runtime",src:n(1259).Z,width:"1116",height:"843"})),(0,r.kt)("admonition",{title:"Congratulations",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You are now running a distributed System using ",(0,r.kt)("strong",{parentName:"p"},"remote procedure calls"))))}u.isMDXComponent=!0},7933:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/edit-project-758a8dd91405646746e45633991cd06b.png"},3629:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-folder-after-ee3eca86cb1c85ff6cde5e91baf45901.png"},6342:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-folder-before-99aa18bfb921f203135d9fc4deb7e028.png"},1405:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/project-tool-init-ae95c41cb19d0237889821c37b8d2c3b.png"},3265:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/run-js-b74fc446a5f69d9c82c27b37733e5a12.png"},1259:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/interact-4066af18d5bb6b101ffd742647c1cf61.png"}}]);