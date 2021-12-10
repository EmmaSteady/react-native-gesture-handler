(window.webpackJsonp=window.webpackJsonp||[]).push([[84,5,9,75,182],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return h}));var a=n(2),r=n(6),o=(n(0),n(280)),i=n(53),c=n(52),s=n(51),l=(n(58),{id:"native-gesture",title:"Native gesture",sidebar_label:"Native gesture"}),d={unversionedId:"api/gestures/native-gesture",id:"api/gestures/native-gesture",isDocsHomePage:!1,title:"Native gesture",description:"A gesture that allows other touch handling components to participate in RNGH's gesture system. When used, the other component should be the direct child of a GestureDetector.",source:"@site/docs/api/gestures/native-gesture.md",slug:"/api/gestures/native-gesture",permalink:"/react-native-gesture-handler/docs/next/api/gestures/native-gesture",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/docs/api/gestures/native-gesture.md",version:"current",sidebar_label:"Native gesture",sidebar:"docs",previous:{title:"Force touch gesture (iOS only)",permalink:"/react-native-gesture-handler/docs/next/api/gestures/force-touch-gesture"},next:{title:"Manual gesture",permalink:"/react-native-gesture-handler/docs/next/api/gestures/manual-gesture"}},u=[{value:"Config",id:"config",children:[{value:"Properties specific to <code>NativeGesture</code>:",id:"properties-specific-to-nativegesture",children:[]},{value:"<code>shouldActivateOnStart(value: boolean)</code> (<strong>Android only</strong>)",id:"shouldactivateonstartvalue-boolean-android-only",children:[]},{value:"<code>disallowInterruption(value: boolean)</code>",id:"disallowinterruptionvalue-boolean",children:[]}]},{value:"Callbacks",id:"callbacks",children:[]},{value:"Event data",id:"event-data",children:[{value:"Event attributes specific to <code>NativeGesture</code>:",id:"event-attributes-specific-to-nativegesture",children:[]},{value:"<code>pointerInside</code>",id:"pointerinside",children:[]}]}],b={rightToc:u};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A gesture that allows other touch handling components to participate in RNGH's gesture system. When used, the other component should be the direct child of a ",Object(o.b)("inlineCode",{parentName:"p"},"GestureDetector"),"."),Object(o.b)("h2",{id:"config"},"Config"),Object(o.b)("h3",{id:"properties-specific-to-nativegesture"},"Properties specific to ",Object(o.b)("inlineCode",{parentName:"h3"},"NativeGesture"),":"),Object(o.b)("h3",{id:"shouldactivateonstartvalue-boolean-android-only"},Object(o.b)("inlineCode",{parentName:"h3"},"shouldActivateOnStart(value: boolean)")," (",Object(o.b)("strong",{parentName:"h3"},"Android only"),")"),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", underlying handler will activate unconditionally when in ",Object(o.b)("inlineCode",{parentName:"p"},"BEGAN")," or ",Object(o.b)("inlineCode",{parentName:"p"},"UNDETERMINED")," state."),Object(o.b)("h3",{id:"disallowinterruptionvalue-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"disallowInterruption(value: boolean)")),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", cancels all other gesture handlers when this ",Object(o.b)("inlineCode",{parentName:"p"},"NativeViewGestureHandler")," receives an ",Object(o.b)("inlineCode",{parentName:"p"},"ACTIVE")," state event."),Object(o.b)(c.default,{mdxType:"BaseEventConfig"}),Object(o.b)("h2",{id:"callbacks"},"Callbacks"),Object(o.b)(s.default,{mdxType:"BaseEventCallbacks"}),Object(o.b)("h2",{id:"event-data"},"Event data"),Object(o.b)("h3",{id:"event-attributes-specific-to-nativegesture"},"Event attributes specific to ",Object(o.b)("inlineCode",{parentName:"h3"},"NativeGesture"),":"),Object(o.b)("h3",{id:"pointerinside"},Object(o.b)("inlineCode",{parentName:"h3"},"pointerInside")),Object(o.b)("p",null,"True if gesture was performed inside of containing view, false otherwise."),Object(o.b)(i.default,{mdxType:"BaseEventData"}))}h.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,p=u["".concat(i,".").concat(h)]||u[h]||b[h]||o;return n?r.a.createElement(p,c(c({ref:t},l),{},{components:n})):r.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},51:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(280)),i={},c={unversionedId:"api/gestures/base-gesture-callbacks",id:"api/gestures/base-gesture-callbacks",isDocsHomePage:!1,title:"base-gesture-callbacks",description:"Callbacks common to all gestures:",source:"@site/docs/api/gestures/base-gesture-callbacks.md",slug:"/api/gestures/base-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-gesture-callbacks",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/docs/api/gestures/base-gesture-callbacks.md",version:"current"},s=[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",children:[]},{value:"<code>onBegin(callback)</code>",id:"onbegincallback",children:[]},{value:"<code>onStart(callback)</code>",id:"onstartcallback",children:[]},{value:"<code>onEnd(callback)</code>",id:"onendcallback",children:[]},{value:"<code>onFinalize(callback)</code>",id:"onfinalizecallback",children:[]},{value:"<code>onTouchesDown(event, stateManager)</code>",id:"ontouchesdownevent-statemanager",children:[]},{value:"<code>onTouchesMove(event, stateManager)</code>",id:"ontouchesmoveevent-statemanager",children:[]},{value:"<code>onTouchesUp(event, stateManager)</code>",id:"ontouchesupevent-statemanager",children:[]},{value:"<code>onTouchesCancelled(event, stateManager)</code>",id:"ontouchescancelledevent-statemanager",children:[]},{value:"<code>onTouchesChange(event, stateManager)</code>",id:"ontoucheschangeevent-statemanager",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),Object(o.b)("h3",{id:"onbegincallback"},Object(o.b)("inlineCode",{parentName:"h3"},"onBegin(callback)")),Object(o.b)("p",null,"Set the callback that is being called when given gesture handler starts receiving touches. At the moment of this callback the handler is not yet in an active state and we don't know yet if it will recognize the gesture at all."),Object(o.b)("h3",{id:"onstartcallback"},Object(o.b)("inlineCode",{parentName:"h3"},"onStart(callback)")),Object(o.b)("p",null,"Set the callback that is being called when the gesture is recognized by the handler and it transitions to the active state."),Object(o.b)("h3",{id:"onendcallback"},Object(o.b)("inlineCode",{parentName:"h3"},"onEnd(callback)")),Object(o.b)("p",null,"Set the callback that is being called when the gesture that was recognized by the handler finishes. It will be called only if the handler was previously in the active state."),Object(o.b)("h3",{id:"onfinalizecallback"},Object(o.b)("inlineCode",{parentName:"h3"},"onFinalize(callback)")),Object(o.b)("p",null,"Set the callback that is being called when the handler finalizes handling gesture - the gesture was recognized and has finished or it failed to recognize."),Object(o.b)("h3",{id:"ontouchesdownevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesDown(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),Object(o.b)("h3",{id:"ontouchesmoveevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesMove(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),Object(o.b)("h3",{id:"ontouchesupevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesUp(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),Object(o.b)("h3",{id:"ontouchescancelledevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesCancelled(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."),Object(o.b)("h3",{id:"ontoucheschangeevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesChange(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesChange")," callback which is called for every touch event."))}d.isMDXComponent=!0},52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(280)),i={},c={unversionedId:"api/gestures/base-gesture-config",id:"api/gestures/base-gesture-config",isDocsHomePage:!1,title:"base-gesture-config",description:"Properties common to all gestures:",source:"@site/docs/api/gestures/base-gesture-config.md",slug:"/api/gestures/base-gesture-config",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-gesture-config",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/docs/api/gestures/base-gesture-config.md",version:"current"},s=[{value:"Properties common to all gestures:",id:"properties-common-to-all-gestures",children:[]},{value:"<code>enabled(value: boolean)</code>",id:"enabledvalue-boolean",children:[]},{value:"<code>shouldCancelWhenOutside(value: boolean)</code>",id:"shouldcancelwhenoutsidevalue-boolean",children:[]},{value:"<code>hitSlop(settings)</code>",id:"hitslopsettings",children:[]},{value:"<code>withRef(ref)</code>",id:"withrefref",children:[]},{value:"<code>simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)</code>",id:"simultaneouswithexternalgestureothergesture1-othergesture2-",children:[]},{value:"<code>requireExternalGestureToFail(otherGesture1, otherGesture2, ...)</code>",id:"requireexternalgesturetofailothergesture1-othergesture2-",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"properties-common-to-all-gestures"},"Properties common to all gestures:"),Object(o.b)("h3",{id:"enabledvalue-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"enabled(value: boolean)")),Object(o.b)("p",null,"Indicates whether the given handler should be analyzing stream of touch events or not.\nWhen set to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," we can be sure that the handler's state will ",Object(o.b)("strong",{parentName:"p"},"never")," become ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#active"}),Object(o.b)("inlineCode",{parentName:"a"},"ACTIVE")),".\nIf the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#failed"}),Object(o.b)("inlineCode",{parentName:"a"},"FAILED"))," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#cancelled"}),Object(o.b)("inlineCode",{parentName:"a"},"CANCELLED"))," (depending on its current state).\nDefault value is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h3",{id:"shouldcancelwhenoutsidevalue-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"shouldCancelWhenOutside(value: boolean)")),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"true")," the handler will ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#cancelled"}),"cancel")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#failed"}),"fail")," recognition (depending on its current state) whenever the finger leaves the area of the connected view.\nDefault value of this property is different depending on the handler type.\nMost handlers' ",Object(o.b)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside")," property defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," except for the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/api/gestures/long-press-gesture"}),Object(o.b)("inlineCode",{parentName:"a"},"LongPressGesture"))," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/api/gestures/tap-gesture"}),Object(o.b)("inlineCode",{parentName:"a"},"TapGesture"))," which default to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h3",{id:"hitslopsettings"},Object(o.b)("inlineCode",{parentName:"h3"},"hitSlop(settings)")),Object(o.b)("p",null,"This parameter enables control over what part of the connected view area can be used to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#began"}),"begin")," recognizing the gesture.\nWhen a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly."),Object(o.b)("p",null,"Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for ",Object(o.b)("inlineCode",{parentName:"p"},"left"),", ",Object(o.b)("inlineCode",{parentName:"p"},"right"),", ",Object(o.b)("inlineCode",{parentName:"p"},"top")," or ",Object(o.b)("inlineCode",{parentName:"p"},"bottom")," sides.\nYou can alternatively provide ",Object(o.b)("inlineCode",{parentName:"p"},"horizontal")," or ",Object(o.b)("inlineCode",{parentName:"p"},"vertical")," instead of specifying directly ",Object(o.b)("inlineCode",{parentName:"p"},"left"),", ",Object(o.b)("inlineCode",{parentName:"p"},"right")," or ",Object(o.b)("inlineCode",{parentName:"p"},"top")," and ",Object(o.b)("inlineCode",{parentName:"p"},"bottom"),".\nFinally, the object can also take ",Object(o.b)("inlineCode",{parentName:"p"},"width")," and ",Object(o.b)("inlineCode",{parentName:"p"},"height")," attributes.\nWhen ",Object(o.b)("inlineCode",{parentName:"p"},"width")," is set it is only allow to specify one of the sides ",Object(o.b)("inlineCode",{parentName:"p"},"right")," or ",Object(o.b)("inlineCode",{parentName:"p"},"left"),".\nSimilarly when ",Object(o.b)("inlineCode",{parentName:"p"},"height")," is provided only ",Object(o.b)("inlineCode",{parentName:"p"},"top")," or ",Object(o.b)("inlineCode",{parentName:"p"},"bottom")," can be set.\nSpecifying ",Object(o.b)("inlineCode",{parentName:"p"},"width")," or ",Object(o.b)("inlineCode",{parentName:"p"},"height")," is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set ",Object(o.b)("inlineCode",{parentName:"p"},"left: 0")," and ",Object(o.b)("inlineCode",{parentName:"p"},"width: 20")," which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except ",Object(o.b)("inlineCode",{parentName:"p"},"width")," and ",Object(o.b)("inlineCode",{parentName:"p"},"height"),") to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/view.html#props"}),"hitSlop")," property."),Object(o.b)("h3",{id:"withrefref"},Object(o.b)("inlineCode",{parentName:"h3"},"withRef(ref)")),Object(o.b)("p",null,"Sets a ref to the gesture object, allowing for interoperability with the old API."),Object(o.b)("h3",{id:"simultaneouswithexternalgestureothergesture1-othergesture2-"},Object(o.b)("inlineCode",{parentName:"h3"},"simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)")),Object(o.b)("p",null,"Adds a gesture that should be recognized simultaneously with this one."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../gesture-composition"}),"composing them"),". ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"gesture-detector"}),Object(o.b)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",Object(o.b)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."),Object(o.b)("h3",{id:"requireexternalgesturetofailothergesture1-othergesture2-"},Object(o.b)("inlineCode",{parentName:"h3"},"requireExternalGestureToFail(otherGesture1, otherGesture2, ...)")),Object(o.b)("p",null,"Adds a relation requiring another gesture to fail, before this one can activate."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../gesture-composition"}),"composing them"),".",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"gesture-detector"}),Object(o.b)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",Object(o.b)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."))}d.isMDXComponent=!0},53:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(280)),i={},c={unversionedId:"api/gestures/base-gesture-event-data",id:"api/gestures/base-gesture-event-data",isDocsHomePage:!1,title:"base-gesture-event-data",description:"Event attributes common to all gestures:",source:"@site/docs/api/gestures/base-gesture-event-data.md",slug:"/api/gestures/base-gesture-event-data",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-gesture-event-data",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/docs/api/gestures/base-gesture-event-data.md",version:"current"},s=[{value:"Event attributes common to all gestures:",id:"event-attributes-common-to-all-gestures",children:[]},{value:"<code>state</code>",id:"state",children:[]},{value:"<code>numberOfPointers</code>",id:"numberofpointers",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"event-attributes-common-to-all-gestures"},"Event attributes common to all gestures:"),Object(o.b)("h3",{id:"state"},Object(o.b)("inlineCode",{parentName:"h3"},"state")),Object(o.b)("p",null,"Current ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events"}),"state")," of the handler. Expressed as one of the constants exported under ",Object(o.b)("inlineCode",{parentName:"p"},"State")," object by the library."),Object(o.b)("h3",{id:"numberofpointers"},Object(o.b)("inlineCode",{parentName:"h3"},"numberOfPointers")),Object(o.b)("p",null,"Represents the number of pointers (fingers) currently placed on the screen."))}d.isMDXComponent=!0},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(280)),i={},c={unversionedId:"api/gestures/base-continous-gesture-callbacks",id:"api/gestures/base-continous-gesture-callbacks",isDocsHomePage:!1,title:"base-continous-gesture-callbacks",description:"Callbacks common to all continous gestures:",source:"@site/docs/api/gestures/base-continous-gesture-callbacks.md",slug:"/api/gestures/base-continous-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-continous-gesture-callbacks",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/docs/api/gestures/base-continous-gesture-callbacks.md",version:"current"},s=[{value:"Callbacks common to all continous gestures:",id:"callbacks-common-to-all-continous-gestures",children:[]},{value:"<code>onUpdate(callback)</code>",id:"onupdatecallback",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"callbacks-common-to-all-continous-gestures"},"Callbacks common to all continous gestures:"),Object(o.b)("h3",{id:"onupdatecallback"},Object(o.b)("inlineCode",{parentName:"h3"},"onUpdate(callback)")),Object(o.b)("p",null,"Set the callback that is being called every time the gesture receives an update while it's active."))}d.isMDXComponent=!0}}]);