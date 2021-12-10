(window.webpackJsonp=window.webpackJsonp||[]).push([[216,27,56,138],{276:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return h}));var n=a(2),r=a(6),i=(a(0),a(280)),o=a(48),s=a(49),c=a(50),l={id:"tap-gesture",title:"Tap gesture",sidebar_label:"Tap gesture"},d={unversionedId:"api/gestures/tap-gesture",id:"version-2.1.0/api/gestures/tap-gesture",isDocsHomePage:!1,title:"Tap gesture",description:"A discrete gesture that recognizes one or many taps.",source:"@site/versioned_docs/version-2.1.0/api/gestures/tap-gesture.md",slug:"/api/gestures/tap-gesture",permalink:"/react-native-gesture-handler/docs/api/gestures/tap-gesture",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.1.0/api/gestures/tap-gesture.md",version:"2.1.0",sidebar_label:"Tap gesture",sidebar:"version-2.1.0/docs",previous:{title:"Pan gesture",permalink:"/react-native-gesture-handler/docs/api/gestures/pan-gesture"},next:{title:"Long press gesture",permalink:"/react-native-gesture-handler/docs/api/gestures/long-press-gesture"}},u=[{value:"Config",id:"config",children:[{value:"Properties specific to <code>TapGesture</code>:",id:"properties-specific-to-tapgesture",children:[]},{value:"<code>minPointers(value: number)</code>",id:"minpointersvalue-number",children:[]},{value:"<code>maxDurationMs(value: number)</code>",id:"maxdurationmsvalue-number",children:[]},{value:"<code>maxDelayMs(value: number)</code>",id:"maxdelaymsvalue-number",children:[]},{value:"<code>numberOfTaps(value: number)</code>",id:"numberoftapsvalue-number",children:[]},{value:"<code>maxDeltaX(value: number)</code>",id:"maxdeltaxvalue-number",children:[]},{value:"<code>maxDeltaY(value: number)</code>",id:"maxdeltayvalue-number",children:[]},{value:"<code>maxDist(value: number)</code>",id:"maxdistvalue-number",children:[]}]},{value:"Callbacks",id:"callbacks",children:[]},{value:"Event data",id:"event-data",children:[{value:"Event attributes specific to <code>TapGesture</code>:",id:"event-attributes-specific-to-tapgesture",children:[]},{value:"<code>x</code>",id:"x",children:[]},{value:"<code>y</code>",id:"y",children:[]},{value:"<code>absoluteX</code>",id:"absolutex",children:[]},{value:"<code>absoluteY</code>",id:"absolutey",children:[]}]},{value:"Example",id:"example",children:[]}],b={rightToc:u};function h(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A discrete gesture that recognizes one or many taps."),Object(i.b)("p",null,"Tap gestures detect one or more fingers briefly touching the screen.\nThe fingers involved in these gestures must not move significantly from their initial touch positions.\nThe required number of taps and allowed distance from initial position may be configured.\nFor example, you might configure tap gesture recognizers to detect single taps, double taps, or triple taps."),Object(i.b)("p",null,"In order for a gesture to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#active"}),"activate"),", specified gesture requirements such as minPointers, numberOfTaps, maxDist, maxDurationMs, and maxDelayMs (explained below) must be met. Immediately after the gesture ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#active"}),"activates"),", it will ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#end"}),"end"),"."),Object(i.b)("h2",{id:"config"},"Config"),Object(i.b)("h3",{id:"properties-specific-to-tapgesture"},"Properties specific to ",Object(i.b)("inlineCode",{parentName:"h3"},"TapGesture"),":"),Object(i.b)("h3",{id:"minpointersvalue-number"},Object(i.b)("inlineCode",{parentName:"h3"},"minPointers(value: number)")),Object(i.b)("p",null,"Minimum number of pointers (fingers) required to be placed before the gesture ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#active"}),"activates"),". Should be a positive integer. The default value is 1."),Object(i.b)("h3",{id:"maxdurationmsvalue-number"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDurationMs(value: number)")),Object(i.b)("p",null,"Maximum time, expressed in milliseconds, that defines how fast a finger must be released after a touch. The default value is 500."),Object(i.b)("h3",{id:"maxdelaymsvalue-number"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDelayMs(value: number)")),Object(i.b)("p",null,"Maximum time, expressed in milliseconds, that can pass before the next tap \u2014 if many taps are required. The default value is 500."),Object(i.b)("h3",{id:"numberoftapsvalue-number"},Object(i.b)("inlineCode",{parentName:"h3"},"numberOfTaps(value: number)")),Object(i.b)("p",null,"Number of tap gestures required to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#active"}),"activate")," the gesture. The default value is 1."),Object(i.b)("h3",{id:"maxdeltaxvalue-number"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDeltaX(value: number)")),Object(i.b)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel along the X axis during a tap gesture. If the finger travels further than the defined distance along the X axis and the gesture hasn't yet ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#active"}),"activated"),", it will fail to recognize the gesture."),Object(i.b)("h3",{id:"maxdeltayvalue-number"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDeltaY(value: number)")),Object(i.b)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel along the Y axis during a tap gesture. If the finger travels further than the defined distance along the Y axis and the gesture hasn't yet ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#active"}),"activated"),", it will fail to recognize the gesture."),Object(i.b)("h3",{id:"maxdistvalue-number"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDist(value: number)")),Object(i.b)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel during a tap gesture. If the finger travels further than the defined distance and the gesture hasn't yet ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#active"}),"activated"),", it will fail to recognize the gesture."),Object(i.b)(s.default,{mdxType:"BaseEventConfig"}),Object(i.b)("h2",{id:"callbacks"},"Callbacks"),Object(i.b)(c.default,{mdxType:"BaseEventCallbacks"}),Object(i.b)("h2",{id:"event-data"},"Event data"),Object(i.b)("h3",{id:"event-attributes-specific-to-tapgesture"},"Event attributes specific to ",Object(i.b)("inlineCode",{parentName:"h3"},"TapGesture"),":"),Object(i.b)("h3",{id:"x"},Object(i.b)("inlineCode",{parentName:"h3"},"x")),Object(i.b)("p",null,"X coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api/gestures/gesture-detector"}),Object(i.b)("inlineCode",{parentName:"a"},"GestureDetector")),"."),Object(i.b)("h3",{id:"y"},Object(i.b)("inlineCode",{parentName:"h3"},"y")),Object(i.b)("p",null,"Y coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api/gestures/gesture-detector"}),Object(i.b)("inlineCode",{parentName:"a"},"GestureDetector")),"."),Object(i.b)("h3",{id:"absolutex"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteX")),Object(i.b)("p",null,"X coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. It is recommended to use ",Object(i.b)("inlineCode",{parentName:"p"},"absoluteX")," instead of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#x"}),Object(i.b)("inlineCode",{parentName:"a"},"x"))," in cases when the view attached to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api/gestures/gesture-detector"}),Object(i.b)("inlineCode",{parentName:"a"},"GestureDetector"))," can be transformed as an effect of the gesture."),Object(i.b)("h3",{id:"absolutey"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteY")),Object(i.b)("p",null,"Y coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. It is recommended to use ",Object(i.b)("inlineCode",{parentName:"p"},"absoluteY")," instead of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#y"}),Object(i.b)("inlineCode",{parentName:"a"},"y"))," in cases when the view attached to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api/gestures/gesture-detector"}),Object(i.b)("inlineCode",{parentName:"a"},"GestureDetector"))," can be transformed as an effect of the gesture."),Object(i.b)(o.default,{mdxType:"BaseEventData"}),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"const singleTap = Gesture.Tap()\n  .maxDurationMs(250)\n  .onStart(() => {\n    Alert.alert('Single tap!');\n  });\n\nconst doubleTap = Gesture.Tap()\n  .maxDurationMs(250)\n  .onStart(() => {\n    Alert.alert('Double tap!');\n  });\n\nreturn (\n  <GestureDetector gesture={Gesture.Exclusive(doubleTap, singleTap)}>\n    <View style={styles.box} />\n  </GestureDetector>\n);\n")))}h.isMDXComponent=!0},280:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,p=u["".concat(o,".").concat(h)]||u[h]||b[h]||i;return a?r.a.createElement(p,s(s({ref:t},l),{},{components:a})):r.a.createElement(p,s({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},48:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),i=(a(0),a(280)),o={},s={unversionedId:"api/gestures/base-gesture-event-data",id:"version-2.1.0/api/gestures/base-gesture-event-data",isDocsHomePage:!1,title:"base-gesture-event-data",description:"Event attributes common to all gestures:",source:"@site/versioned_docs/version-2.1.0/api/gestures/base-gesture-event-data.md",slug:"/api/gestures/base-gesture-event-data",permalink:"/react-native-gesture-handler/docs/api/gestures/base-gesture-event-data",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.1.0/api/gestures/base-gesture-event-data.md",version:"2.1.0"},c=[{value:"Event attributes common to all gestures:",id:"event-attributes-common-to-all-gestures",children:[]},{value:"<code>state</code>",id:"state",children:[]},{value:"<code>numberOfPointers</code>",id:"numberofpointers",children:[]}],l={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"event-attributes-common-to-all-gestures"},"Event attributes common to all gestures:"),Object(i.b)("h3",{id:"state"},Object(i.b)("inlineCode",{parentName:"h3"},"state")),Object(i.b)("p",null,"Current ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events"}),"state")," of the handler. Expressed as one of the constants exported under ",Object(i.b)("inlineCode",{parentName:"p"},"State")," object by the library."),Object(i.b)("h3",{id:"numberofpointers"},Object(i.b)("inlineCode",{parentName:"h3"},"numberOfPointers")),Object(i.b)("p",null,"Represents the number of pointers (fingers) currently placed on the screen."))}d.isMDXComponent=!0},49:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),i=(a(0),a(280)),o={},s={unversionedId:"api/gestures/base-gesture-config",id:"version-2.1.0/api/gestures/base-gesture-config",isDocsHomePage:!1,title:"base-gesture-config",description:"Properties common to all gestures:",source:"@site/versioned_docs/version-2.1.0/api/gestures/base-gesture-config.md",slug:"/api/gestures/base-gesture-config",permalink:"/react-native-gesture-handler/docs/api/gestures/base-gesture-config",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.1.0/api/gestures/base-gesture-config.md",version:"2.1.0"},c=[{value:"Properties common to all gestures:",id:"properties-common-to-all-gestures",children:[]},{value:"<code>enabled(value: boolean)</code>",id:"enabledvalue-boolean",children:[]},{value:"<code>shouldCancelWhenOutside(value: boolean)</code>",id:"shouldcancelwhenoutsidevalue-boolean",children:[]},{value:"<code>hitSlop(settings)</code>",id:"hitslopsettings",children:[]},{value:"<code>withRef(ref)</code>",id:"withrefref",children:[]},{value:"<code>simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)</code>",id:"simultaneouswithexternalgestureothergesture1-othergesture2-",children:[]},{value:"<code>requireExternalGestureToFail(otherGesture1, otherGesture2, ...)</code>",id:"requireexternalgesturetofailothergesture1-othergesture2-",children:[]}],l={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"properties-common-to-all-gestures"},"Properties common to all gestures:"),Object(i.b)("h3",{id:"enabledvalue-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"enabled(value: boolean)")),Object(i.b)("p",null,"Indicates whether the given handler should be analyzing stream of touch events or not.\nWhen set to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," we can be sure that the handler's state will ",Object(i.b)("strong",{parentName:"p"},"never")," become ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#active"}),Object(i.b)("inlineCode",{parentName:"a"},"ACTIVE")),".\nIf the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#failed"}),Object(i.b)("inlineCode",{parentName:"a"},"FAILED"))," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#cancelled"}),Object(i.b)("inlineCode",{parentName:"a"},"CANCELLED"))," (depending on its current state).\nDefault value is ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("h3",{id:"shouldcancelwhenoutsidevalue-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"shouldCancelWhenOutside(value: boolean)")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true")," the handler will ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#cancelled"}),"cancel")," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#failed"}),"fail")," recognition (depending on its current state) whenever the finger leaves the area of the connected view.\nDefault value of this property is different depending on the handler type.\nMost handlers' ",Object(i.b)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside")," property defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," except for the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api/gestures/long-press-gesture"}),Object(i.b)("inlineCode",{parentName:"a"},"LongPressGesture"))," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api/gestures/tap-gesture"}),Object(i.b)("inlineCode",{parentName:"a"},"TapGesture"))," which default to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("h3",{id:"hitslopsettings"},Object(i.b)("inlineCode",{parentName:"h3"},"hitSlop(settings)")),Object(i.b)("p",null,"This parameter enables control over what part of the connected view area can be used to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#began"}),"begin")," recognizing the gesture.\nWhen a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly."),Object(i.b)("p",null,"Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for ",Object(i.b)("inlineCode",{parentName:"p"},"left"),", ",Object(i.b)("inlineCode",{parentName:"p"},"right"),", ",Object(i.b)("inlineCode",{parentName:"p"},"top")," or ",Object(i.b)("inlineCode",{parentName:"p"},"bottom")," sides.\nYou can alternatively provide ",Object(i.b)("inlineCode",{parentName:"p"},"horizontal")," or ",Object(i.b)("inlineCode",{parentName:"p"},"vertical")," instead of specifying directly ",Object(i.b)("inlineCode",{parentName:"p"},"left"),", ",Object(i.b)("inlineCode",{parentName:"p"},"right")," or ",Object(i.b)("inlineCode",{parentName:"p"},"top")," and ",Object(i.b)("inlineCode",{parentName:"p"},"bottom"),".\nFinally, the object can also take ",Object(i.b)("inlineCode",{parentName:"p"},"width")," and ",Object(i.b)("inlineCode",{parentName:"p"},"height")," attributes.\nWhen ",Object(i.b)("inlineCode",{parentName:"p"},"width")," is set it is only allow to specify one of the sides ",Object(i.b)("inlineCode",{parentName:"p"},"right")," or ",Object(i.b)("inlineCode",{parentName:"p"},"left"),".\nSimilarly when ",Object(i.b)("inlineCode",{parentName:"p"},"height")," is provided only ",Object(i.b)("inlineCode",{parentName:"p"},"top")," or ",Object(i.b)("inlineCode",{parentName:"p"},"bottom")," can be set.\nSpecifying ",Object(i.b)("inlineCode",{parentName:"p"},"width")," or ",Object(i.b)("inlineCode",{parentName:"p"},"height")," is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set ",Object(i.b)("inlineCode",{parentName:"p"},"left: 0")," and ",Object(i.b)("inlineCode",{parentName:"p"},"width: 20")," which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except ",Object(i.b)("inlineCode",{parentName:"p"},"width")," and ",Object(i.b)("inlineCode",{parentName:"p"},"height"),") to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/view.html#props"}),"hitSlop")," property."),Object(i.b)("h3",{id:"withrefref"},Object(i.b)("inlineCode",{parentName:"h3"},"withRef(ref)")),Object(i.b)("p",null,"Sets a ref to the gesture object, allowing for interoperability with the old API."),Object(i.b)("h3",{id:"simultaneouswithexternalgestureothergesture1-othergesture2-"},Object(i.b)("inlineCode",{parentName:"h3"},"simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)")),Object(i.b)("p",null,"Adds a gesture that should be recognized simultaneously with this one."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../gesture-composition"}),"composing them"),". ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"gesture-detector"}),Object(i.b)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",Object(i.b)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."),Object(i.b)("h3",{id:"requireexternalgesturetofailothergesture1-othergesture2-"},Object(i.b)("inlineCode",{parentName:"h3"},"requireExternalGestureToFail(otherGesture1, otherGesture2, ...)")),Object(i.b)("p",null,"Adds a relation requiring another gesture to fail, before this one can activate."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../gesture-composition"}),"composing them"),".",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"gesture-detector"}),Object(i.b)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",Object(i.b)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."))}d.isMDXComponent=!0},50:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),i=(a(0),a(280)),o={},s={unversionedId:"api/gestures/base-gesture-callbacks",id:"version-2.1.0/api/gestures/base-gesture-callbacks",isDocsHomePage:!1,title:"base-gesture-callbacks",description:"Callbacks common to all gestures:",source:"@site/versioned_docs/version-2.1.0/api/gestures/base-gesture-callbacks.md",slug:"/api/gestures/base-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/api/gestures/base-gesture-callbacks",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.1.0/api/gestures/base-gesture-callbacks.md",version:"2.1.0"},c=[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",children:[]},{value:"<code>onBegin(callback)</code>",id:"onbegincallback",children:[]},{value:"<code>onStart(callback)</code>",id:"onstartcallback",children:[]},{value:"<code>onEnd(callback)</code>",id:"onendcallback",children:[]},{value:"<code>onFinalize(callback)</code>",id:"onfinalizecallback",children:[]},{value:"<code>onTouchesDown(event, stateManager)</code>",id:"ontouchesdownevent-statemanager",children:[]},{value:"<code>onTouchesMove(event, stateManager)</code>",id:"ontouchesmoveevent-statemanager",children:[]},{value:"<code>onTouchesUp(event, stateManager)</code>",id:"ontouchesupevent-statemanager",children:[]},{value:"<code>onTouchesCancelled(event, stateManager)</code>",id:"ontouchescancelledevent-statemanager",children:[]},{value:"<code>onTouchesChange(event, stateManager)</code>",id:"ontoucheschangeevent-statemanager",children:[]}],l={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),Object(i.b)("h3",{id:"onbegincallback"},Object(i.b)("inlineCode",{parentName:"h3"},"onBegin(callback)")),Object(i.b)("p",null,"Set the callback that is being called when given gesture handler starts receiving touches. At the moment of this callback the handler is not yet in an active state and we don't know yet if it will recognize the gesture at all."),Object(i.b)("h3",{id:"onstartcallback"},Object(i.b)("inlineCode",{parentName:"h3"},"onStart(callback)")),Object(i.b)("p",null,"Set the callback that is being called when the gesture is recognized by the handler and it transitions to the active state."),Object(i.b)("h3",{id:"onendcallback"},Object(i.b)("inlineCode",{parentName:"h3"},"onEnd(callback)")),Object(i.b)("p",null,"Set the callback that is being called when the gesture that was recognized by the handler finishes. It will be called only if the handler was previously in the active state."),Object(i.b)("h3",{id:"onfinalizecallback"},Object(i.b)("inlineCode",{parentName:"h3"},"onFinalize(callback)")),Object(i.b)("p",null,"Set the callback that is being called when the handler finalizes handling gesture - the gesture was recognized and has finished or it failed to recognize."),Object(i.b)("h3",{id:"ontouchesdownevent-statemanager"},Object(i.b)("inlineCode",{parentName:"h3"},"onTouchesDown(event, stateManager)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),Object(i.b)("h3",{id:"ontouchesmoveevent-statemanager"},Object(i.b)("inlineCode",{parentName:"h3"},"onTouchesMove(event, stateManager)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),Object(i.b)("h3",{id:"ontouchesupevent-statemanager"},Object(i.b)("inlineCode",{parentName:"h3"},"onTouchesUp(event, stateManager)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),Object(i.b)("h3",{id:"ontouchescancelledevent-statemanager"},Object(i.b)("inlineCode",{parentName:"h3"},"onTouchesCancelled(event, stateManager)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."),Object(i.b)("h3",{id:"ontoucheschangeevent-statemanager"},Object(i.b)("inlineCode",{parentName:"h3"},"onTouchesChange(event, stateManager)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onTouchesChange")," callback which is called for every touch event."))}d.isMDXComponent=!0}}]);