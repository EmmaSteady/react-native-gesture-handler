(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{180:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(280)),o={id:"create-native-wrapper",title:"createNativeWrapper",sidebar_label:"createNativeWrapper()"},c={unversionedId:"gesture-handlers/api/create-native-wrapper",id:"version-2.0.0/gesture-handlers/api/create-native-wrapper",isDocsHomePage:!1,title:"createNativeWrapper",description:"Creates provided component with NativeViewGestureHandler, allowing it to be part of RNGH's",source:"@site/versioned_docs/version-2.0.0/gesture-handlers/api/create-native-wrapper.md",slug:"/gesture-handlers/api/create-native-wrapper",permalink:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/create-native-wrapper",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/gesture-handlers/api/create-native-wrapper.md",version:"2.0.0",sidebar_label:"createNativeWrapper()",sidebar:"version-2.0.0/docs",previous:{title:"NativeViewGestureHandler",permalink:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/nativeview-gh"},next:{title:"Contributing",permalink:"/react-native-gesture-handler/docs/2.0.0/contributing"}},p=[{value:"Arguments",id:"arguments",children:[{value:"Component",id:"component",children:[]},{value:"config",id:"config",children:[]}]},{value:"Returns",id:"returns",children:[]}],s={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Creates provided component with NativeViewGestureHandler, allowing it to be part of RNGH's\ngesture system."),Object(i.b)("h2",{id:"arguments"},"Arguments"),Object(i.b)("h3",{id:"component"},"Component"),Object(i.b)("p",null,"The component we want to wrap."),Object(i.b)("h3",{id:"config"},"config"),Object(i.b)("p",null,"Config is an object with properties that can be used on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/nativeview-gh"}),Object(i.b)("inlineCode",{parentName:"a"},"NativeViewGestureHandler"))),Object(i.b)("h2",{id:"returns"},"Returns"),Object(i.b)("p",null,"Wrapped component."))}u.isMDXComponent=!0},280:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return v}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,v=l["".concat(o,".").concat(b)]||l[b]||d[b]||i;return r?a.a.createElement(v,c(c({ref:t},s),{},{components:r})):a.a.createElement(v,c({ref:t},s))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);