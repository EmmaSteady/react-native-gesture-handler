(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{266:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(6),i=(a(0),a(280)),o={id:"common-gh",title:"Common handler properties",sidebar_label:"Common handler properties"},s={unversionedId:"gesture-handlers/api/common-gh",id:"version-2.0.0/gesture-handlers/api/common-gh",isDocsHomePage:!1,title:"Common handler properties",description:"This page covers the common set of properties all gesture handler components expose.",source:"@site/versioned_docs/version-2.0.0/gesture-handlers/api/common-gh.md",slug:"/gesture-handlers/api/common-gh",permalink:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/common-gh",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/gesture-handlers/api/common-gh.md",version:"2.0.0",sidebar_label:"Common handler properties",sidebar:"version-2.0.0/docs",previous:{title:"Cross handler interactions",permalink:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/interactions"},next:{title:"PanGestureHandler",permalink:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/pan-gh"}},c=[{value:"Units",id:"units",children:[]},{value:"Properties",id:"properties",children:[{value:"<code>enabled</code>",id:"enabled",children:[]},{value:"<code>shouldCancelWhenOutside</code>",id:"shouldcancelwhenoutside",children:[]},{value:"<code>simultaneousHandlers</code>",id:"simultaneoushandlers",children:[]},{value:"<code>waitFor</code>",id:"waitfor",children:[]},{value:"<code>hitSlop</code>",id:"hitslop",children:[]},{value:"<code>onGestureEvent</code>",id:"ongestureevent",children:[]},{value:"<code>onHandlerStateChange</code>",id:"onhandlerstatechange",children:[]}]},{value:"Event data",id:"event-data",children:[{value:"<code>state</code>",id:"state",children:[]},{value:"<code>numberOfPointers</code>",id:"numberofpointers",children:[]}]}],d={rightToc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This page covers the common set of properties all gesture handler components expose."),Object(i.b)("h3",{id:"units"},"Units"),Object(i.b)("p",null,'All handler component properties and event attributes that represent onscreen dimensions are expressed in screen density independent units we refer to as "points".\nThese are the units commonly used in React Native ecosystem (e.g. in the ',Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/flexbox.html"}),"layout system"),").\nThey do not map directly to physical pixels but instead to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/library/content/documentation/2DDrawing/Conceptual/DrawingPrintingiOS/GraphicsDrawingOverview/GraphicsDrawingOverview.html#//apple_ref/doc/uid/TP40010156-CH14-SW7"}),"iOS's points")," and to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/guide/topics/resources/more-resources#Dimension"}),"dp")," units on Android."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"This section describes properties that can be used with all gesture handler components:"),Object(i.b)("h3",{id:"enabled"},Object(i.b)("inlineCode",{parentName:"h3"},"enabled")),Object(i.b)("p",null,"Accepts a boolean value.\nIndicates whether the given handler should be analyzing stream of touch events or not.\nWhen set to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," we can be sure that the handler's state will ",Object(i.b)("strong",{parentName:"p"},"never")," become ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#active"}),Object(i.b)("inlineCode",{parentName:"a"},"ACTIVE")),".\nIf the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#failed"}),Object(i.b)("inlineCode",{parentName:"a"},"FAILED"))," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#cancelled"}),Object(i.b)("inlineCode",{parentName:"a"},"CANCELLED"))," (depending on its current state).\nDefault value is ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("h3",{id:"shouldcancelwhenoutside"},Object(i.b)("inlineCode",{parentName:"h3"},"shouldCancelWhenOutside")),Object(i.b)("p",null,"Accepts a boolean value.\nWhen ",Object(i.b)("inlineCode",{parentName:"p"},"true")," the handler will ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#cancelled"}),"cancel")," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#failed"}),"fail")," recognition (depending on its current state) whenever the finger leaves the area of the connected view.\nDefault value of this property is different depending on the handler type.\nMost handlers' ",Object(i.b)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside")," property defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," except for the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/longpress-gh"}),Object(i.b)("inlineCode",{parentName:"a"},"LongPressGestureHandler"))," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/tap-gh"}),Object(i.b)("inlineCode",{parentName:"a"},"TapGestureHandler"))," which default to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("h3",{id:"simultaneoushandlers"},Object(i.b)("inlineCode",{parentName:"h3"},"simultaneousHandlers")),Object(i.b)("p",null,"Accepts a react ref object or an array of refs to other handler components (refs should be created using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/refs-and-the-dom.html"}),Object(i.b)("inlineCode",{parentName:"a"},"React.createRef()")),"). When set, the handler will be allowed to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#active"}),"activate")," even if one or more of the handlers provided by their refs are in an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#active"}),Object(i.b)("inlineCode",{parentName:"a"},"ACTIVE"))," state. It will also prevent the provided handlers from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#cancelled"}),"cancelling")," the current handler when they ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#active"}),"activate"),". Read more in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/interactions#simultaneous-recognition"}),"cross handler interaction")," section."),Object(i.b)("h3",{id:"waitfor"},Object(i.b)("inlineCode",{parentName:"h3"},"waitFor")),Object(i.b)("p",null,"Accepts a react ref object or an array of refs to other handler components (refs should be created using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/refs-and-the-dom.html"}),Object(i.b)("inlineCode",{parentName:"a"},"React.createRef()")),"). When set the handler will not ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#active"}),"activate")," as long as the handlers provided by their refs are in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#began"}),Object(i.b)("inlineCode",{parentName:"a"},"BEGAN"))," state. Read more in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/interactions#awaiting-other-handlers"}),"cross handler interaction")," section."),Object(i.b)("h3",{id:"hitslop"},Object(i.b)("inlineCode",{parentName:"h3"},"hitSlop")),Object(i.b)("p",null,"This parameter enables control over what part of the connected view area can be used to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#began"}),"begin")," recognizing the gesture.\nWhen a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly."),Object(i.b)("p",null,"Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for ",Object(i.b)("inlineCode",{parentName:"p"},"left"),", ",Object(i.b)("inlineCode",{parentName:"p"},"right"),", ",Object(i.b)("inlineCode",{parentName:"p"},"top")," or ",Object(i.b)("inlineCode",{parentName:"p"},"bottom")," sides.\nYou can alternatively provide ",Object(i.b)("inlineCode",{parentName:"p"},"horizontal")," or ",Object(i.b)("inlineCode",{parentName:"p"},"vertical")," instead of specifying directly ",Object(i.b)("inlineCode",{parentName:"p"},"left"),", ",Object(i.b)("inlineCode",{parentName:"p"},"right")," or ",Object(i.b)("inlineCode",{parentName:"p"},"top")," and ",Object(i.b)("inlineCode",{parentName:"p"},"bottom"),".\nFinally, the object can also take ",Object(i.b)("inlineCode",{parentName:"p"},"width")," and ",Object(i.b)("inlineCode",{parentName:"p"},"height")," attributes.\nWhen ",Object(i.b)("inlineCode",{parentName:"p"},"width")," is set it is only allow to specify one of the sides ",Object(i.b)("inlineCode",{parentName:"p"},"right")," or ",Object(i.b)("inlineCode",{parentName:"p"},"left"),".\nSimilarly when ",Object(i.b)("inlineCode",{parentName:"p"},"height")," is provided only ",Object(i.b)("inlineCode",{parentName:"p"},"top")," or ",Object(i.b)("inlineCode",{parentName:"p"},"bottom")," can be set.\nSpecifying ",Object(i.b)("inlineCode",{parentName:"p"},"width")," or ",Object(i.b)("inlineCode",{parentName:"p"},"height")," is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set ",Object(i.b)("inlineCode",{parentName:"p"},"left: 0")," and ",Object(i.b)("inlineCode",{parentName:"p"},"width: 20")," which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except ",Object(i.b)("inlineCode",{parentName:"p"},"width")," and ",Object(i.b)("inlineCode",{parentName:"p"},"height"),") to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/view.html#props"}),"hitSlop")," property."),Object(i.b)("h3",{id:"ongestureevent"},Object(i.b)("inlineCode",{parentName:"h3"},"onGestureEvent")),Object(i.b)("p",null,"Takes a callback that is going to be triggered for each subsequent touch event while the handler is in an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#active"}),"ACTIVE")," state. Event payload depends on the particular handler type. Common set of event data attributes is documented ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#event-data"}),"below")," and handler specific attributes are documented on the corresponding handler pages. E.g. event payload for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/rotation-gh#event-data"}),Object(i.b)("inlineCode",{parentName:"a"},"PinchGestureHandler"))," contains ",Object(i.b)("inlineCode",{parentName:"p"},"scale")," attribute that represents how the distance between fingers changed since when the gesture started."),Object(i.b)("p",null,"Instead of a callback ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/animated.html#event"}),Object(i.b)("inlineCode",{parentName:"a"},"Animated.event"))," object can be used. Also Animated events with ",Object(i.b)("inlineCode",{parentName:"p"},"useNativeDriver")," flag enabled ",Object(i.b)("strong",{parentName:"p"},"are fully supported"),"."),Object(i.b)("h3",{id:"onhandlerstatechange"},Object(i.b)("inlineCode",{parentName:"h3"},"onHandlerStateChange")),Object(i.b)("p",null,"Takes a callback that is going to be triggered when ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state"}),"state")," of the given handler changes."),Object(i.b)("p",null,"The event payload contains the same payload as in case of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#ongestureevent"}),Object(i.b)("inlineCode",{parentName:"a"},"onGestureEvent"))," including handler specific event attributes some handlers may provide."),Object(i.b)("p",null,"In addition ",Object(i.b)("inlineCode",{parentName:"p"},"onHandlerStateChange")," event payload contains ",Object(i.b)("inlineCode",{parentName:"p"},"oldState")," attribute which represents the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state"}),"state")," of the handler right before the change."),Object(i.b)("p",null,"Instead of a callback ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/animated.html#event"}),Object(i.b)("inlineCode",{parentName:"a"},"Animated.event"))," object can be used. Also Animated events with ",Object(i.b)("inlineCode",{parentName:"p"},"useNativeDriver")," flag enabled ",Object(i.b)("strong",{parentName:"p"},"are fully supported"),"."),Object(i.b)("h2",{id:"event-data"},"Event data"),Object(i.b)("p",null,"This section describes the attributes of event object being provided to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#ongestureevent"}),Object(i.b)("inlineCode",{parentName:"a"},"onGestureEvent"))," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#onhandlerstatechange"}),Object(i.b)("inlineCode",{parentName:"a"},"onHandlerStateChange"))," callbacks:"),Object(i.b)("h3",{id:"state"},Object(i.b)("inlineCode",{parentName:"h3"},"state")),Object(i.b)("p",null,"Current ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state"}),"state")," of the handler. Expressed as one of the constants exported under ",Object(i.b)("inlineCode",{parentName:"p"},"State")," object by the library. Refer to the section about ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state"}),"handler state")," to learn more about how to use it."),Object(i.b)("h3",{id:"numberofpointers"},Object(i.b)("inlineCode",{parentName:"h3"},"numberOfPointers")),Object(i.b)("p",null,"Represents the number of pointers (fingers) currently placed on the screen."))}l.isMDXComponent=!0},280:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=l(a),h=n,u=b["".concat(o,".").concat(h)]||b[h]||p[h]||i;return a?r.a.createElement(u,s(s({ref:t},d),{},{components:a})):r.a.createElement(u,s({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);