(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{280:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var a=t(0),c=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),b=function(e){var n=c.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=b(e.components);return c.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},p=c.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=b(t),p=a,h=u["".concat(o,".").concat(p)]||u[p]||d[p]||r;return t?c.a.createElement(h,l(l({ref:n},s),{},{components:t})):c.a.createElement(h,l({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},56:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return b}));var a=t(2),c=t(6),r=(t(0),t(280)),o={},l={unversionedId:"api/gestures/base-gesture-callbacks",id:"version-2.0.0/api/gestures/base-gesture-callbacks",isDocsHomePage:!1,title:"base-gesture-callbacks",description:"Callbacks common to all gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-gesture-callbacks.md",slug:"/api/gestures/base-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-gesture-callbacks",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/api/gestures/base-gesture-callbacks.md",version:"2.0.0"},i=[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",children:[]},{value:"<code>onBegin(callback)</code>",id:"onbegincallback",children:[]},{value:"<code>onStart(callback)</code>",id:"onstartcallback",children:[]},{value:"<code>onEnd(callback)</code>",id:"onendcallback",children:[]},{value:"<code>onTouchesDown(event, stateManager)</code>",id:"ontouchesdownevent-statemanager",children:[]},{value:"<code>onTouchesMove(event, stateManager)</code>",id:"ontouchesmoveevent-statemanager",children:[]},{value:"<code>onTouchesUp(event, stateManager)</code>",id:"ontouchesupevent-statemanager",children:[]},{value:"<code>onTouchesCancelled(event, stateManager)</code>",id:"ontouchescancelledevent-statemanager",children:[]},{value:"<code>onTouchesChange(event, stateManager)</code>",id:"ontoucheschangeevent-statemanager",children:[]}],s={rightToc:i};function b(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),Object(r.b)("h3",{id:"onbegincallback"},Object(r.b)("inlineCode",{parentName:"h3"},"onBegin(callback)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onBegin")," callback."),Object(r.b)("h3",{id:"onstartcallback"},Object(r.b)("inlineCode",{parentName:"h3"},"onStart(callback)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onStart")," callback."),Object(r.b)("h3",{id:"onendcallback"},Object(r.b)("inlineCode",{parentName:"h3"},"onEnd(callback)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onEnd")," callback."),Object(r.b)("h3",{id:"ontouchesdownevent-statemanager"},Object(r.b)("inlineCode",{parentName:"h3"},"onTouchesDown(event, stateManager)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),Object(r.b)("h3",{id:"ontouchesmoveevent-statemanager"},Object(r.b)("inlineCode",{parentName:"h3"},"onTouchesMove(event, stateManager)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),Object(r.b)("h3",{id:"ontouchesupevent-statemanager"},Object(r.b)("inlineCode",{parentName:"h3"},"onTouchesUp(event, stateManager)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),Object(r.b)("h3",{id:"ontouchescancelledevent-statemanager"},Object(r.b)("inlineCode",{parentName:"h3"},"onTouchesCancelled(event, stateManager)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."),Object(r.b)("h3",{id:"ontoucheschangeevent-statemanager"},Object(r.b)("inlineCode",{parentName:"h3"},"onTouchesChange(event, stateManager)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onTouchesChange")," callback which is called for every touch event."))}b.isMDXComponent=!0}}]);