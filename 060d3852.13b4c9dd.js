(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{280:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),b=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},h=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=b(n),h=a,p=d["".concat(o,".").concat(h)]||d[h]||u[h]||r;return n?c.a.createElement(p,l(l({ref:t},s),{},{components:n})):c.a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},51:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(2),c=n(6),r=(n(0),n(280)),o={},l={unversionedId:"api/gestures/base-gesture-callbacks",id:"api/gestures/base-gesture-callbacks",isDocsHomePage:!1,title:"base-gesture-callbacks",description:"Callbacks common to all gestures:",source:"@site/docs/api/gestures/base-gesture-callbacks.md",slug:"/api/gestures/base-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-gesture-callbacks",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/docs/api/gestures/base-gesture-callbacks.md",version:"current"},i=[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",children:[]},{value:"<code>onBegin(callback)</code>",id:"onbegincallback",children:[]},{value:"<code>onStart(callback)</code>",id:"onstartcallback",children:[]},{value:"<code>onEnd(callback)</code>",id:"onendcallback",children:[]},{value:"<code>onFinalize(callback)</code>",id:"onfinalizecallback",children:[]},{value:"<code>onTouchesDown(event, stateManager)</code>",id:"ontouchesdownevent-statemanager",children:[]},{value:"<code>onTouchesMove(event, stateManager)</code>",id:"ontouchesmoveevent-statemanager",children:[]},{value:"<code>onTouchesUp(event, stateManager)</code>",id:"ontouchesupevent-statemanager",children:[]},{value:"<code>onTouchesCancelled(event, stateManager)</code>",id:"ontouchescancelledevent-statemanager",children:[]},{value:"<code>onTouchesChange(event, stateManager)</code>",id:"ontoucheschangeevent-statemanager",children:[]}],s={rightToc:i};function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),Object(r.b)("h3",{id:"onbegincallback"},Object(r.b)("inlineCode",{parentName:"h3"},"onBegin(callback)")),Object(r.b)("p",null,"Set the callback that is being called when given gesture handler starts receiving touches. At the moment of this callback the handler is not yet in an active state and we don't know yet if it will recognize the gesture at all."),Object(r.b)("h3",{id:"onstartcallback"},Object(r.b)("inlineCode",{parentName:"h3"},"onStart(callback)")),Object(r.b)("p",null,"Set the callback that is being called when the gesture is recognized by the handler and it transitions to the active state."),Object(r.b)("h3",{id:"onendcallback"},Object(r.b)("inlineCode",{parentName:"h3"},"onEnd(callback)")),Object(r.b)("p",null,"Set the callback that is being called when the gesture that was recognized by the handler finishes. It will be called only if the handler was previously in the active state."),Object(r.b)("h3",{id:"onfinalizecallback"},Object(r.b)("inlineCode",{parentName:"h3"},"onFinalize(callback)")),Object(r.b)("p",null,"Set the callback that is being called when the handler finalizes handling gesture - the gesture was recognized and has finished or it failed to recognize."),Object(r.b)("h3",{id:"ontouchesdownevent-statemanager"},Object(r.b)("inlineCode",{parentName:"h3"},"onTouchesDown(event, stateManager)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),Object(r.b)("h3",{id:"ontouchesmoveevent-statemanager"},Object(r.b)("inlineCode",{parentName:"h3"},"onTouchesMove(event, stateManager)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),Object(r.b)("h3",{id:"ontouchesupevent-statemanager"},Object(r.b)("inlineCode",{parentName:"h3"},"onTouchesUp(event, stateManager)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),Object(r.b)("h3",{id:"ontouchescancelledevent-statemanager"},Object(r.b)("inlineCode",{parentName:"h3"},"onTouchesCancelled(event, stateManager)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."),Object(r.b)("h3",{id:"ontoucheschangeevent-statemanager"},Object(r.b)("inlineCode",{parentName:"h3"},"onTouchesChange(event, stateManager)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onTouchesChange")," callback which is called for every touch event."))}b.isMDXComponent=!0}}]);