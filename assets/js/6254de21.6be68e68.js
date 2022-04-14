"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[87964],{35318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=l,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||r;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11674:function(e,t,a){var n=a(63445);const l=!!n.default.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.default.canUseDOM&&navigator.platform.startsWith("Win"),o=l?"ios":"android",i=l?"macos":r?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},37785:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(27378),l=Object.defineProperty,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&u(e,a,t[a]);if(r)for(var a of r(t))i.call(t,a)&&u(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},93139:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(27378),l=a(14185),r=a(15324),o=a(38944),i="tabItem_WhCL",u=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&k(e,a,t[a]);if(s)for(var a of s(t))m.call(t,a)&&k(e,a,t[a]);return e};function f(e){var t,a,l;const{lazy:u,block:s,defaultValue:d,values:m,groupId:k,className:f}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=m?m:h.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),v=(0,r.lx)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===d?d:null!=(l=null!=d?d:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?l:null==(a=h[0])?void 0:a.props.value;if(null!==N&&!y.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:A,setTabGroupChoices:g}=(0,r.UB)(),[C,w]=(0,n.useState)(N),D=[],{blockElementScrollPositionUntilNextRender:x}=(0,r.o5)();if(null!=k){const e=A[k];null!=e&&e!==C&&y.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,a=D.indexOf(t),n=y[a].value;n!==C&&(x(t),w(n),null!=k&&g(k,n))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=D.indexOf(e.currentTarget)+1;t=D[a]||D[0];break}case"ArrowLeft":{const a=D.indexOf(e.currentTarget)-1;t=D[a]||D[D.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},y.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=b({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>D.push(e),onKeyDown:T,onFocus:O,onClick:O},a),r={className:(0,o.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":C===e})},c(l,p(r))),null!=t?t:e);var l,r}))),u?(0,n.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,l.Z)();return n.createElement(f,b({key:String(t)},e))}},21172:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return A},frontMatter:function(){return b},metadata:function(){return h},toc:function(){return v}});var n=a(35318),l=a(93139),r=a(37785),o=a(11674),i=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))d.call(t,a)&&m(e,a,t[a]);return e};const b={id:"touchableopacity",title:"TouchableOpacity"},f=void 0,h={unversionedId:"touchableopacity",id:"version-0.67/touchableopacity",title:"TouchableOpacity",description:"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.",source:"@site/versioned_docs/version-0.67/touchableopacity.md",sourceDirName:".",slug:"/touchableopacity",permalink:"/docs/0.67/touchableopacity",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/touchableopacity.md",tags:[],version:"0.67",frontMatter:{id:"touchableopacity",title:"TouchableOpacity"},sidebar:"\u7ec4\u4ef6",previous:{title:"TouchableHighlight",permalink:"/docs/0.67/touchablehighlight"},next:{title:"TouchableWithoutFeedback",permalink:"/docs/0.67/touchablewithoutfeedback"}},y={},v=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"<code>style</code>",id:"style",level:3},{value:"<code>activeOpacity</code>",id:"activeopacity",level:3},{value:"<code>tvParallaxProperties</code>",id:"tvparallaxproperties",level:3},{value:"<code>hasTVPreferredFocus</code>",id:"hastvpreferredfocus",level:3},{value:"<code>nextFocusDown</code>",id:"nextfocusdown",level:3},{value:"<code>nextFocusForward</code>",id:"nextfocusforward",level:3},{value:"<code>nextFocusLeft</code>",id:"nextfocusleft",level:3},{value:"<code>nextFocusRight</code>",id:"nextfocusright",level:3},{value:"<code>nextFocusUp</code>",id:"nextfocusup",level:3}],N={toc:v};function A(e){var t,a=e,{components:i}=a,m=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=k(k({},N),m),u(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",(0,n.kt)("a",k({parentName:"p"},{href:"/docs/0.67/pressable"}),"Pressable")," API.")),(0,n.kt)("p",null,"\u672c\u7ec4\u4ef6\u7528\u4e8e\u5c01\u88c5\u89c6\u56fe\uff0c\u4f7f\u5176\u53ef\u4ee5\u6b63\u786e\u54cd\u5e94\u89e6\u6478\u64cd\u4f5c\u3002\u5f53\u6309\u4e0b\u7684\u65f6\u5019\uff0c\u5c01\u88c5\u7684\u89c6\u56fe\u7684\u4e0d\u900f\u660e\u5ea6\u4f1a\u964d\u4f4e\u3002"),(0,n.kt)("p",null,"\u4e0d\u900f\u660e\u5ea6\u7684\u53d8\u5316\u662f\u901a\u8fc7\u628a\u5b50\u5143\u7d20\u5c01\u88c5\u5728\u4e00\u4e2a",(0,n.kt)("inlineCode",{parentName:"p"},"Animated.View"),"\u4e2d\u6765\u5b9e\u73b0\u7684\uff0c\u8fd9\u4e2a\u52a8\u753b\u89c6\u56fe\u4f1a\u88ab\u6dfb\u52a0\u5230\u89c6\u56fe\u5c42\u7ea7\u4e2d\uff0c\u5c11\u6570\u60c5\u51b5\u4e0b\u6709\u53ef\u80fd\u4f1a\u5f71\u54cd\u5230\u5e03\u5c40\u3002\uff08\u8bd1\u6ce8\uff1a\u6b64\u7ec4\u4ef6\u4e0e TouchableHighlight \u7684\u533a\u522b\u5728\u4e8e\u5e76\u6ca1\u6709\u989d\u5916\u7684\u989c\u8272\u53d8\u5316\uff0c\u66f4\u9002\u4e8e\u4e00\u822c\u573a\u666f\u3002\uff09"),(0,n.kt)("h2",k({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)(l.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",k({},{className:"snack-player","data-snack-name":"TouchableOpacity Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bcount%2C%20setCount%5D%20%3D%20useState(0)%3B%0A%20%20const%20onPress%20%3D%20()%20%3D%3E%20setCount(prevCount%20%3D%3E%20prevCount%20%2B%201)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ECount%3A%20%7Bcount%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20style%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7BonPress%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%3EPress%20Here%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingHorizontal%3A%2010%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23DDDDDD%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countContainer%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(r.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",k({},{className:"snack-player","data-snack-name":"TouchableOpacity Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20constructor(props)%20%7B%0A%20%20%20%20super(props)%3B%0A%20%20%20%20this.state%20%3D%20%7B%20count%3A%200%20%7D%3B%0A%20%20%7D%0A%0A%20%20onPress%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20count%3A%20this.state.count%20%2B%201%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%20count%20%7D%20%3D%20this.state%3B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3ECount%3A%20%7Bcount%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis.onPress%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20Here%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingHorizontal%3A%2010%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23DDDDDD%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countContainer%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("hr",null),(0,n.kt)("h1",k({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",k({},{id:"props"}),"Props"),(0,n.kt)("p",null,"Inherits ",(0,n.kt)("a",k({parentName:"p"},{href:"/docs/0.67/touchablewithoutfeedback#props"}),"TouchableWithoutFeedback Props"),"."),(0,n.kt)("h3",k({},{id:"style"}),(0,n.kt)("inlineCode",{parentName:"h3"},"style")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"View.style"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"activeopacity"}),(0,n.kt)("inlineCode",{parentName:"h3"},"activeOpacity")),(0,n.kt)("p",null,"\u6307\u5b9a\u5c01\u88c5\u7684\u89c6\u56fe\u5728\u88ab\u89e6\u6478\u64cd\u4f5c\u6fc0\u6d3b\u65f6\u4ee5\u591a\u5c11\u4e0d\u900f\u660e\u5ea6\u663e\u793a\uff080 \u5230 1 \u4e4b\u95f4\uff09\u3002\u9ed8\u8ba4\u503c\u4e3a 0.2\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"tvparallaxproperties"}),(0,n.kt)("inlineCode",{parentName:"h3"},"tvParallaxProperties")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(Apple TV only)")," Object with properties to control Apple TV parallax effects."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"enabled"),": If ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", parallax effects are enabled. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"shiftDistanceX"),": Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"2.0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"shiftDistanceY"),": Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"2.0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tiltAngle"),": Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"magnification"),": Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"1.0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pressMagnification"),": Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"1.0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pressDuration"),": Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"0.3"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pressDelay"),": Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"0.0"),".")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"hastvpreferredfocus"}),(0,n.kt)("inlineCode",{parentName:"h3"},"hasTVPreferredFocus")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(Apple TV only)")," TV preferred focus (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"nextfocusdown"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusDown")),(0,n.kt)("p",null,"TV next focus down (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"nextfocusforward"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusForward")),(0,n.kt)("p",null,"TV next focus forward (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"nextfocusleft"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusLeft")),(0,n.kt)("p",null,"TV next focus left (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"nextfocusright"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusRight")),(0,n.kt)("p",null,"TV next focus right (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"nextfocusup"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusUp")),(0,n.kt)("p",null,"TV next focus up (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Android")))))}A.isMDXComponent=!0}}]);