"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[81030],{35318:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(r),p=a,m=h["".concat(d,".").concat(p)]||h[p]||u[p]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},31951:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var n=r(52685),a=r(1244),i=(r(27378),r(35318)),o=["components"],s={id:"threading-model",title:"\u7ebf\u7a0b\u6a21\u578b"},d=void 0,c={unversionedId:"threading-model",id:"version-0.66/threading-model",title:"\u7ebf\u7a0b\u6a21\u578b",description:"This document refers to the architecture of the new renderer, Fabric, that is in active roll-out.",source:"@site/versioned_docs/version-0.66/threading-model.md",sourceDirName:".",slug:"/threading-model",permalink:"/docs/threading-model",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/threading-model.md",tags:[],version:"0.66",frontMatter:{id:"threading-model",title:"\u7ebf\u7a0b\u6a21\u578b"},sidebar:"\u67b6\u6784",previous:{title:"\u89c6\u56fe\u5c42\u5408\u5e76\u4f18\u5316",permalink:"/docs/view-flattening"},next:{title:"\u672f\u8bed\u8868",permalink:"/docs/glossary"}},l=[{value:"The React Native renderer distributes the work of the render pipeline across multiple threads.",id:"the-react-native-renderer-distributes-the-work-of-the-render-pipeline-across-multiple-threads",children:[],level:4},{value:"Render Scenarios",id:"render-scenarios",children:[{value:"Render in a Background Thread",id:"render-in-a-background-thread",children:[],level:3},{value:"Render in the UI Thread",id:"render-in-the-ui-thread",children:[],level:3},{value:"Default or continuous event interruption",id:"default-or-continuous-event-interruption",children:[],level:3},{value:"Discrete event interruption",id:"discrete-event-interruption",children:[],level:3},{value:"Background thread batches updates from JavaScript",id:"background-thread-batches-updates-from-javascript",children:[],level:3},{value:"C++ State update",id:"c-state-update",children:[],level:3}],level:2}],u={toc:l};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This document refers to the architecture of the new renderer, ",(0,i.kt)("a",{parentName:"p",href:"fabric-renderer"},"Fabric"),", that is in active roll-out.")),(0,i.kt)("h4",{id:"the-react-native-renderer-distributes-the-work-of-the-render-pipeline-across-multiple-threads"},"The React Native renderer distributes the work of the ",(0,i.kt)("a",{parentName:"h4",href:"render-pipeline"},"render pipeline")," across multiple threads."),(0,i.kt)("p",null,"Here we define the threading model and provide some examples to illustrate thread usage of the render pipeline."),(0,i.kt)("p",null,"React Native renderer is designed to be thread safe. At a high level thread safety is guaranteed by using immutable data structures in the internals of the framework (enforced by C++ \u201cconst correctness\u201d feature). This means that every update in React creates or clones new objects in the renderer instead of updating data structures. This allows the framework to expose thread safe and synchronous APIs to React."),(0,i.kt)("p",null,"The renderer uses three different threads:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"UI thread")," (often called main): The only thread that can manipulate host views."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"JavaScript thread"),": This is where React\u2019s render phase is executed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Background thread"),": Thread dedicated to layout.")),(0,i.kt)("p",null,"Let\u2019s review the supported scenarios of execution for each phase:"),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/docs/assets/Architecture/threading-model/symbols.png",alt:"Threading model symbols"})),(0,i.kt)("h2",{id:"render-scenarios"},"Render Scenarios"),(0,i.kt)("h3",{id:"render-in-a-background-thread"},"Render in a Background Thread"),(0,i.kt)("p",null,"This is the most common scenario where most of the render pipeline happens on JavaScript and background thread."),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/docs/assets/Architecture/threading-model/case-1.jpg",alt:"Threading model use case one"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"render-in-the-ui-thread"},"Render in the UI Thread"),(0,i.kt)("p",null,"When there is a high priority event on the UI Thread, the renderer is able to execute all the render pipeline synchronously on the UI thread."),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/docs/assets/Architecture/threading-model/case-2.jpg",alt:"Threading model use case two"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"default-or-continuous-event-interruption"},"Default or continuous event interruption"),(0,i.kt)("p",null,"This scenario shows the interruption of the render phase by a low priority event in the UI thread. React and the React Native renderer are able to interrupt the render phase and merge its state with a low priority event that is executed on the UI thread. In this case the render process continues executing in the background thread."),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/docs/assets/Architecture/threading-model/case-3.jpg",alt:"Threading model use case three"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"discrete-event-interruption"},"Discrete event interruption"),(0,i.kt)("p",null,"The render phase is interruptible. This scenario shows the interruption of the render phase by a high priority event in the UI thread. React and the renderer are able to interrupt the render phase and merge its state with a high priority event that was executed on the UI thread. The render phase executes synchronously on the UI thread."),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/docs/assets/Architecture/threading-model/case-4.jpg",alt:"Threading model use case four"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"background-thread-batches-updates-from-javascript"},"Background thread batches updates from JavaScript"),(0,i.kt)("p",null,"Before background thread dispatches update to UI thread, it checks if a newer update hasn\u2019t come in from JavaScript. This way, the renderer doesn\u2019t render stale state when it knows a newer state is coming it."),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/docs/assets/Architecture/threading-model/case-5.jpg",alt:"Threading model use case five"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"c-state-update"},"C++ State update"),(0,i.kt)("p",null,"Update originating on UI thread and skips rendering phase. See ",(0,i.kt)("a",{parentName:"p",href:"render-pipeline#react-native-renderer-state-updates"},"React Native Renderer State Updates")," for more details."),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/docs/assets/Architecture/threading-model/case-6.jpg",alt:"Threading model use case six"})))}h.isMDXComponent=!0}}]);