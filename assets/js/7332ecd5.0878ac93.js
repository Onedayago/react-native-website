"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[62557],{91366:function(e){e.exports=JSON.parse('{"pluginId":"architecture","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"architecture":[{"type":"category","label":"\u67b6\u6784","collapsed":false,"items":[{"type":"link","label":"\u67b6\u6784\u6982\u89c8","href":"/architecture/overview","docId":"architecture-overview"},{"type":"category","label":"\u6e32\u67d3","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Fabric","href":"/architecture/fabric-renderer","docId":"fabric-renderer"},{"type":"link","label":"\u6e32\u67d3\uff0c\u63d0\u4ea4\u4e0e\u6302\u8f7d\uff08\u6e32\u67d3\u6d41\u6c34\u7ebf\uff09","href":"/architecture/render-pipeline","docId":"render-pipeline"},{"type":"link","label":"\u8de8\u5e73\u53f0\u7684\u5b9e\u73b0","href":"/architecture/xplat-implementation","docId":"xplat-implementation"},{"type":"link","label":"\u89c6\u56fe\u62cd\u5e73","href":"/architecture/view-flattening","docId":"view-flattening"},{"type":"link","label":"\u7ebf\u7a0b\u6a21\u578b","href":"/architecture/threading-model","docId":"threading-model"}]},{"type":"link","label":"\u672f\u8bed\u8868","href":"/architecture/glossary","docId":"architecture-glossary"}],"collapsible":true}]},"docs":{"architecture-glossary":{"id":"architecture-glossary","title":"\u672f\u8bed\u8868","description":"Fabric \u6e32\u67d3\u5668\uff08Fabric Renderer\uff09","sidebar":"architecture"},"architecture-overview":{"id":"architecture-overview","title":"\u67b6\u6784\u6982\u89c8","description":"Welcome to the Architecture Overview! If you\'re getting started with React Native, please refer to Guides section. Continue reading to learn how internals of React Native work!","sidebar":"architecture"},"fabric-renderer":{"id":"fabric-renderer","title":"Fabric","description":"Fabric \u662f React Native \u65b0\u67b6\u6784\u7684\u6e32\u67d3\u7cfb\u7edf\uff0c\u662f\u4ece\u8001\u67b6\u6784\u7684\u6e32\u67d3\u7cfb\u7edf\u6f14\u53d8\u800c\u6765\u7684\u3002\u6838\u5fc3\u539f\u7406\u662f\u5728 C++ \u5c42\u7edf\u4e00\u66f4\u591a\u7684\u6e32\u67d3\u903b\u8f91\uff0c\u63d0\u5347\u4e0e\u5bbf\u4e3b\u5e73\u53f0\uff08host platforms\uff09\u4e92\u64cd\u4f5c\u6027\uff0c\u5e76\u4e3a React Native \u89e3\u9501\u66f4\u591a\u80fd\u529b\u3002\u5176\u7814\u53d1\u59cb\u4e8e 2018 \u5e74\u3002\u4ece 2021 \u5e74\u5f00\u59cb\uff0c Facebook App \u4e2d\u7684 React Native \u542f\u7528\u4e86\u65b0\u7684\u6e32\u67d3\u5668\u3002","sidebar":"architecture"},"render-pipeline":{"id":"render-pipeline","title":"\u6e32\u67d3\uff0c\u63d0\u4ea4\u4e0e\u6302\u8f7d\uff08\u6e32\u67d3\u6d41\u6c34\u7ebf\uff09","description":"React Native \u6e32\u67d3\u5668\u901a\u8fc7\u4e00\u7cfb\u5217\u52a0\u5de5\u5904\u7406\uff0c\u5c06 React \u4ee3\u7801\u6e32\u67d3\u5230\u5bbf\u4e3b\u5e73\u53f0\u3002\u8fd9\u4e00\u7cfb\u5217\u52a0\u5de5\u5904\u7406\u5c31\u662f\u6e32\u67d3\u6d41\u6c34\u7ebf\uff08pipeline\uff09\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u521d\u59cb\u5316\u6e32\u67d3\u548c UI \u72b6\u6001\u66f4\u65b0\u3002 \u63a5\u4e0b\u6765\u4ecb\u7ecd\u7684\u662f\u6e32\u67d3\u6d41\u6c34\u7ebf\uff0c\u53ca\u5176\u5728\u5404\u79cd\u573a\u666f\u4e2d\u7684\u4e0d\u540c\u4e4b\u5904\u3002","sidebar":"architecture"},"threading-model":{"id":"threading-model","title":"\u7ebf\u7a0b\u6a21\u578b","description":"React Native \u6e32\u67d3\u5668\u5728\u591a\u4e2a\u7ebf\u7a0b\u4e4b\u95f4\u5206\u914d\u6e32\u67d3\u6d41\u6c34\u7ebf\uff08render pipeline\uff09\u4efb\u52a1\u3002","sidebar":"architecture"},"view-flattening":{"id":"view-flattening","title":"\u89c6\u56fe\u62cd\u5e73","description":"\u89c6\u56fe\u62cd\u5e73\uff08View Flattening\uff09\u662f React Native \u6e32\u67d3\u5668\u907f\u514d\u5e03\u5c40\u5d4c\u5957\u592a\u6df1\u7684\u4f18\u5316\u624b\u6bb5\u3002","sidebar":"architecture"},"xplat-implementation":{"id":"xplat-implementation","title":"\u8de8\u5e73\u53f0\u7684\u5b9e\u73b0","description":"React Native \u6e32\u67d3\u5668\u4f7f\u7528\u4e86\u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u6838\u5fc3\u6e32\u67d3\u7cfb\u7edf","sidebar":"architecture"}}}')}}]);