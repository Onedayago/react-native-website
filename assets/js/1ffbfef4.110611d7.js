"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[77613],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27648:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return y}});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&p(e,n,t[n]);return e};const m={id:"symbolication",title:"Symbolicating a stack trace"},d=void 0,f={unversionedId:"symbolication",id:"version-0.67/symbolication",title:"Symbolicating a stack trace",description:"If a React Native app throws an unhandled exception in a release build, the output may be obfuscated and hard to read:",source:"@site/versioned_docs/version-0.67/symbolication.md",sourceDirName:".",slug:"/symbolication",permalink:"/docs/0.67/symbolication",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/symbolication.md",tags:[],version:"0.67",frontMatter:{id:"symbolication",title:"Symbolicating a stack trace"},sidebar:"docs",previous:{title:"\u8c03\u8bd5",permalink:"/docs/0.67/debugging"},next:{title:"Testing",permalink:"/docs/0.67/testing-overview"}},b={},y=[{value:"Notes on Sourcemaps",id:"notes-on-sourcemaps",level:2}],k={toc:y};function g(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},k),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"If a React Native app throws an unhandled exception in a release build, the output may be obfuscated and hard to read:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"07-15 10:58:25.820 18979 18998 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: Process: com.awesomeproject, PID: 18979 07-15 10:58:25.820 18979 18998 E AndroidRuntime: com.facebook.react.common.JavascriptException: Failed, js engine: hermes, stack:\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: p@1:132161\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: p@1:132084\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: f@1:131854\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: anonymous@1:131119\n")),(0,r.kt)("p",null,"The sections like ",(0,r.kt)("inlineCode",{parentName:"p"},"p@1:132161")," are minified function names and bytecode offsets. To debug the problem, you would instead want to translate it into file, line and function name: ",(0,r.kt)("inlineCode",{parentName:"p"},"AwesomeProject/App.js:54:initializeMap"),". This is known as ",(0,r.kt)("strong",{parentName:"p"},"symbolication.")," You can symbolicate minified function names and bytecode like the above by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"metro-symbolicate")," a generated source map and the stack trace."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"metro-symbolicate")," package is installed by default in the React Native template project from ",(0,r.kt)("a",u({parentName:"p"},{href:"environment-setup"}),"setting up your development environment"),".")),(0,r.kt)("p",null,"From a file containing the stacktrace:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"npx metro-symbolicate android/app/build/generated/sourcemaps/react/release/index.android.bundle.map < stacktrace.txt\n")),(0,r.kt)("p",null,"From ",(0,r.kt)("inlineCode",{parentName:"p"},"adb logcat"),"directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"adb logcat -d | npx metro-symbolicate android/app/build/generated/sourcemaps/react/release/index.android.bundle.map\n")),(0,r.kt)("p",null,"This will turn each minified function name and offset like ",(0,r.kt)("inlineCode",{parentName:"p"},"p@1:132161")," into the actual file- and function name ",(0,r.kt)("inlineCode",{parentName:"p"},"AwesomeProject/App.js:54:initializeMap"),"."),(0,r.kt)("h2",u({},{id:"notes-on-sourcemaps"}),"Notes on Sourcemaps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multiple source maps may be generated by the build process. Make sure to used the one in the location shown in the examples."),(0,r.kt)("li",{parentName:"ul"},"Make sure that the source map you use corresponds to the exact commit of the crashing app. Small changes in source code can cause large differences in offsets."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"metro-symbolicate")," exits immediately with success, make sure the input comes from a pipe or redirection and not from a terminal.")))}g.isMDXComponent=!0}}]);