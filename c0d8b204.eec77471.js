(window.webpackJsonp=window.webpackJsonp||[]).push([[171,80,112,163,183,191],{241:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),i=(n(0),n(280)),o=n(54),s=n(55),c=n(62),l=n(56),u=n(59),d={id:"pan-gesture",title:"Pan gesture",sidebar_label:"Pan gesture"},b={unversionedId:"api/gestures/pan-gesture",id:"version-2.0.0/api/gestures/pan-gesture",isDocsHomePage:!1,title:"Pan gesture",description:"A continuous gesture that can recognize a panning (dragging) gesture and track its movement.",source:"@site/versioned_docs/version-2.0.0/api/gestures/pan-gesture.md",slug:"/api/gestures/pan-gesture",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/pan-gesture",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/api/gestures/pan-gesture.md",version:"2.0.0",sidebar_label:"Pan gesture",sidebar:"version-2.0.0/docs",previous:{title:"Gesture",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/gesture"},next:{title:"Tap gesture",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/tap-gesture"}},p=[{value:"Multi touch pan handling",id:"multi-touch-pan-handling",children:[]},{value:"Config",id:"config",children:[{value:"Properties specific to <code>PanGesture</code>:",id:"properties-specific-to-pangesture",children:[]},{value:"<code>minDist(value: number)</code>",id:"mindistvalue-number",children:[]},{value:"<code>minPointers(value: number)</code>",id:"minpointersvalue-number",children:[]},{value:"<code>maxPointers(value: number)</code>",id:"maxpointersvalue-number",children:[]},{value:"<code>activeOffsetX(value: number | number[])</code>",id:"activeoffsetxvalue-number--number",children:[]},{value:"<code>activeOffsetY(value: number | number[])</code>",id:"activeoffsetyvalue-number--number",children:[]},{value:"<code>failOffsetY(value: number | number[])</code>",id:"failoffsetyvalue-number--number",children:[]},{value:"<code>failOffsetX(value: number | number[])</code>",id:"failoffsetxvalue-number--number",children:[]},{value:"<code>avgTouches(value: boolean)</code> (Android only)",id:"avgtouchesvalue-boolean-android-only",children:[]},{value:"<code>enableTrackpadTwoFingerGesture(value: boolean)</code> (iOS only)",id:"enabletrackpadtwofingergesturevalue-boolean-ios-only",children:[]}]},{value:"Callbacks",id:"callbacks",children:[]},{value:"Event data",id:"event-data",children:[{value:"Event attributes specific to <code>PanGesture</code>:",id:"event-attributes-specific-to-pangesture",children:[]},{value:"<code>translationX</code>",id:"translationx",children:[]},{value:"<code>translationY</code>",id:"translationy",children:[]},{value:"<code>velocityX</code>",id:"velocityx",children:[]},{value:"<code>velocityY</code>",id:"velocityy",children:[]},{value:"<code>x</code>",id:"x",children:[]},{value:"<code>y</code>",id:"y",children:[]},{value:"<code>absoluteX</code>",id:"absolutex",children:[]},{value:"<code>absoluteY</code>",id:"absolutey",children:[]}]},{value:"Example",id:"example",children:[]}],h={rightToc:p};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A continuous gesture that can recognize a panning (dragging) gesture and track its movement."),Object(i.b)("p",null,"The gesture ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"}),"activates")," when a finger is placed on the screen and moved some initial distance."),Object(i.b)("p",null,"Configurations such as a minimum initial distance, specific vertical or horizontal pan detection and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#minPointers"}),"number of fingers")," required for activation (allowing for multifinger swipes) may be specified."),Object(i.b)("p",null,"Gesture callback can be used for continuous tracking of the pan gesture. It provides information about the gesture such as its XY translation from the starting point as well as its instantaneous velocity."),Object(i.b)("h2",{id:"multi-touch-pan-handling"},"Multi touch pan handling"),Object(i.b)("p",null,"If your app relies on multi touch pan handling this section provides some information how the default behavior differs between the platform and how (if necessary) it can be unified."),Object(i.b)("p",null,"The difference in multi touch pan handling lies in the way how translation properties during the event are being calculated.\nOn iOS the default behavior when more than one finger is placed on the screen is to treat this situation as if only one pointer was placed in the center of mass (average position of all the pointers).\nThis applies also to many platform native components that handle touch even if not primarily interested in multi touch interactions like for example UIScrollView component."),Object(i.b)("p",null,"The default behavior for native components like scroll view, pager views or drawers is different and hence gesture defaults to that when it comes to pan handling.\nThe difference is that instead of treating the center of mass of all the fingers placed as a leading pointer it takes the latest placed finger as such.\nThis behavior can be changed on Android using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#avgtouches-android-only"}),Object(i.b)("inlineCode",{parentName:"a"},"avgTouches"))," flag."),Object(i.b)("p",null,'Note that on both Android and iOS when the additional finger is placed on the screen that translation prop is not affected even though the position of the pointer being tracked might have changed.\nTherefore it is safe to rely on translation most of the time as it only reflects the movement that happens regardless of how many fingers are placed on the screen and if that number changes over time.\nIf you wish to track the "center of mass" virtual pointer and account for its changes when the number of finger changes you can use relative or absolute position provided in the event (',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#x"}),Object(i.b)("inlineCode",{parentName:"a"},"x"))," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#y"}),Object(i.b)("inlineCode",{parentName:"a"},"y"))," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#absolutex"}),Object(i.b)("inlineCode",{parentName:"a"},"absoluteX"))," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#absolutey"}),Object(i.b)("inlineCode",{parentName:"a"},"absoluteY")),")."),Object(i.b)("h2",{id:"config"},"Config"),Object(i.b)("h3",{id:"properties-specific-to-pangesture"},"Properties specific to ",Object(i.b)("inlineCode",{parentName:"h3"},"PanGesture"),":"),Object(i.b)("h3",{id:"mindistvalue-number"},Object(i.b)("inlineCode",{parentName:"h3"},"minDist(value: number)")),Object(i.b)("p",null,"Minimum distance the finger (or multiple finger) need to travel before the gesture ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"}),"activates"),". Expressed in points."),Object(i.b)("h3",{id:"minpointersvalue-number"},Object(i.b)("inlineCode",{parentName:"h3"},"minPointers(value: number)")),Object(i.b)("p",null,"A number of fingers that is required to be placed before gesture can ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"}),"activate"),". Should be a higher or equal to 0 integer."),Object(i.b)("h3",{id:"maxpointersvalue-number"},Object(i.b)("inlineCode",{parentName:"h3"},"maxPointers(value: number)")),Object(i.b)("p",null,"When the given number of fingers is placed on the screen and gesture hasn't yet ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"}),"activated")," it will fail recognizing the gesture. Should be a higher or equal to 0 integer."),Object(i.b)("h3",{id:"activeoffsetxvalue-number--number"},Object(i.b)("inlineCode",{parentName:"h3"},"activeOffsetX(value: number | number[])")),Object(i.b)("p",null,"Range along X axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number.\nIf range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0.\nIf only one number ",Object(i.b)("inlineCode",{parentName:"p"},"p")," is given a range of ",Object(i.b)("inlineCode",{parentName:"p"},"(-inf, p)")," will be used if ",Object(i.b)("inlineCode",{parentName:"p"},"p")," is higher or equal to 0 and ",Object(i.b)("inlineCode",{parentName:"p"},"(-p, inf)")," otherwise."),Object(i.b)("h3",{id:"activeoffsetyvalue-number--number"},Object(i.b)("inlineCode",{parentName:"h3"},"activeOffsetY(value: number | number[])")),Object(i.b)("p",null,"Range along Y axis (in points) where fingers travels without activation of gesture. Moving outside of this range implies activation of gesture. Range can be given as an array or a single number.\nIf range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0.\nIf only one number ",Object(i.b)("inlineCode",{parentName:"p"},"p")," is given a range of ",Object(i.b)("inlineCode",{parentName:"p"},"(-inf, p)")," will be used if ",Object(i.b)("inlineCode",{parentName:"p"},"p")," is higher or equal to 0 and ",Object(i.b)("inlineCode",{parentName:"p"},"(-p, inf)")," otherwise."),Object(i.b)("h3",{id:"failoffsetyvalue-number--number"},Object(i.b)("inlineCode",{parentName:"h3"},"failOffsetY(value: number | number[])")),Object(i.b)("p",null,"When the finger moves outside this range (in points) along Y axis and gesture hasn't yet activated it will fail recognizing the gesture. Range can be given as an array or a single number.\nIf range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0.\nIf only one number ",Object(i.b)("inlineCode",{parentName:"p"},"p")," is given a range of ",Object(i.b)("inlineCode",{parentName:"p"},"(-inf, p)")," will be used if ",Object(i.b)("inlineCode",{parentName:"p"},"p")," is higher or equal to 0 and ",Object(i.b)("inlineCode",{parentName:"p"},"(-p, inf)")," otherwise."),Object(i.b)("h3",{id:"failoffsetxvalue-number--number"},Object(i.b)("inlineCode",{parentName:"h3"},"failOffsetX(value: number | number[])")),Object(i.b)("p",null,"When the finger moves outside this range (in points) along X axis and gesture hasn't yet activated it will fail recognizing the gesture. Range can be given as an array or a single number.\nIf range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0.\nIf only one number ",Object(i.b)("inlineCode",{parentName:"p"},"p")," is given a range of ",Object(i.b)("inlineCode",{parentName:"p"},"(-inf, p)")," will be used if ",Object(i.b)("inlineCode",{parentName:"p"},"p")," is higher or equal to 0 and ",Object(i.b)("inlineCode",{parentName:"p"},"(-p, inf)")," otherwise."),Object(i.b)("h3",{id:"avgtouchesvalue-boolean-android-only"},Object(i.b)("inlineCode",{parentName:"h3"},"avgTouches(value: boolean)")," (Android only)"),Object(i.b)("h3",{id:"enabletrackpadtwofingergesturevalue-boolean-ios-only"},Object(i.b)("inlineCode",{parentName:"h3"},"enableTrackpadTwoFingerGesture(value: boolean)")," (iOS only)"),Object(i.b)("p",null,"Enables two-finger gestures on supported devices, for example iPads with trackpads. If not enabled the gesture will require click + drag, with enableTrackpadTwoFingerGesture swiping with two fingers will also trigger the gesture."),Object(i.b)(s.default,{mdxType:"BaseEventConfig"}),Object(i.b)(c.default,{mdxType:"BaseContinousEventConfig"}),Object(i.b)("h2",{id:"callbacks"},"Callbacks"),Object(i.b)(l.default,{mdxType:"BaseEventCallbacks"}),Object(i.b)(u.default,{mdxType:"BaseContinousEventCallbacks"}),Object(i.b)("h2",{id:"event-data"},"Event data"),Object(i.b)("h3",{id:"event-attributes-specific-to-pangesture"},"Event attributes specific to ",Object(i.b)("inlineCode",{parentName:"h3"},"PanGesture"),":"),Object(i.b)("h3",{id:"translationx"},Object(i.b)("inlineCode",{parentName:"h3"},"translationX")),Object(i.b)("p",null,"Translation of the pan gesture along X axis accumulated over the time of the gesture. The value is expressed in the point units."),Object(i.b)("h3",{id:"translationy"},Object(i.b)("inlineCode",{parentName:"h3"},"translationY")),Object(i.b)("p",null,"Translation of the pan gesture along Y axis accumulated over the time of the gesture. The value is expressed in the point units."),Object(i.b)("h3",{id:"velocityx"},Object(i.b)("inlineCode",{parentName:"h3"},"velocityX")),Object(i.b)("p",null,"Velocity of the pan gesture along the X axis in the current moment. The value is expressed in point units per second."),Object(i.b)("h3",{id:"velocityy"},Object(i.b)("inlineCode",{parentName:"h3"},"velocityY")),Object(i.b)("p",null,"Velocity of the pan gesture along the Y axis in the current moment. The value is expressed in point units per second."),Object(i.b)("h3",{id:"x"},Object(i.b)("inlineCode",{parentName:"h3"},"x")),Object(i.b)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/gesture-detector"}),Object(i.b)("inlineCode",{parentName:"a"},"GestureDetector")),". Expressed in point units."),Object(i.b)("h3",{id:"y"},Object(i.b)("inlineCode",{parentName:"h3"},"y")),Object(i.b)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/gesture-detector"}),Object(i.b)("inlineCode",{parentName:"a"},"GestureDetector")),". Expressed in point units."),Object(i.b)("h3",{id:"absolutex"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteX")),Object(i.b)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. The value is expressed in point units. It is recommended to use it instead of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#x"}),Object(i.b)("inlineCode",{parentName:"a"},"x"))," in cases when the original view can be transformed as an effect of the gesture."),Object(i.b)("h3",{id:"absolutey"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteY")),Object(i.b)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. The value is expressed in point units. It is recommended to use it instead of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#y"}),Object(i.b)("inlineCode",{parentName:"a"},"y"))," in cases when the original view can be transformed as an effect of the gesture."),Object(i.b)(o.default,{mdxType:"BaseEventData"}),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const END_POSITION = 200;\nconst onLeft = useSharedValue(true);\nconst position = useSharedValue(0);\n\nconst panGesture = Gesture.Pan()\n  .onUpdate((e) => {\n    if (onLeft.value) {\n      position.value = e.translationX;\n    } else {\n      position.value = END_POSITION + e.translationX;\n    }\n  })\n  .onEnd((e) => {\n    if (position.value > END_POSITION / 2) {\n      position.value = withTiming(END_POSITION, { duration: 100 });\n      onLeft.value = false;\n    } else {\n      position.value = withTiming(0, { duration: 100 });\n      onLeft.value = true;\n    }\n  });\n\nconst animatedStyle = useAnimatedStyle(() => ({\n  transform: [{ translateX: position.value }],\n}));\n\nreturn (\n  <GestureDetector gesture={panGesture}>\n    <Animated.View style={[styles.box, animatedStyle]} />\n  </GestureDetector>\n);\n")))}m.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,h=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(280)),o={},s={unversionedId:"api/gestures/base-gesture-event-data",id:"version-2.0.0/api/gestures/base-gesture-event-data",isDocsHomePage:!1,title:"base-gesture-event-data",description:"Event attributes common to all gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-gesture-event-data.md",slug:"/api/gestures/base-gesture-event-data",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-gesture-event-data",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/api/gestures/base-gesture-event-data.md",version:"2.0.0"},c=[{value:"Event attributes common to all gestures:",id:"event-attributes-common-to-all-gestures",children:[]},{value:"<code>state</code>",id:"state",children:[]},{value:"<code>numberOfPointers</code>",id:"numberofpointers",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"event-attributes-common-to-all-gestures"},"Event attributes common to all gestures:"),Object(i.b)("h3",{id:"state"},Object(i.b)("inlineCode",{parentName:"h3"},"state")),Object(i.b)("p",null,"Current ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events"}),"state")," of the handler. Expressed as one of the constants exported under ",Object(i.b)("inlineCode",{parentName:"p"},"State")," object by the library."),Object(i.b)("h3",{id:"numberofpointers"},Object(i.b)("inlineCode",{parentName:"h3"},"numberOfPointers")),Object(i.b)("p",null,"Represents the number of pointers (fingers) currently placed on the screen."))}u.isMDXComponent=!0},55:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(280)),o={},s={unversionedId:"api/gestures/base-gesture-config",id:"version-2.0.0/api/gestures/base-gesture-config",isDocsHomePage:!1,title:"base-gesture-config",description:"Properties common to all gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-gesture-config.md",slug:"/api/gestures/base-gesture-config",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-gesture-config",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/api/gestures/base-gesture-config.md",version:"2.0.0"},c=[{value:"Properties common to all gestures:",id:"properties-common-to-all-gestures",children:[]},{value:"<code>enabled(value: boolean)</code>",id:"enabledvalue-boolean",children:[]},{value:"<code>shouldCancelWhenOutside(value: boolean)</code>",id:"shouldcancelwhenoutsidevalue-boolean",children:[]},{value:"<code>hitSlop(settings)</code>",id:"hitslopsettings",children:[]},{value:"<code>withRef(ref)</code>",id:"withrefref",children:[]},{value:"<code>simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)</code>",id:"simultaneouswithexternalgestureothergesture1-othergesture2-",children:[]},{value:"<code>requireExternalGestureToFail(otherGesture1, otherGesture2, ...)</code>",id:"requireexternalgesturetofailothergesture1-othergesture2-",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"properties-common-to-all-gestures"},"Properties common to all gestures:"),Object(i.b)("h3",{id:"enabledvalue-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"enabled(value: boolean)")),Object(i.b)("p",null,"Indicates whether the given handler should be analyzing stream of touch events or not.\nWhen set to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," we can be sure that the handler's state will ",Object(i.b)("strong",{parentName:"p"},"never")," become ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"}),Object(i.b)("inlineCode",{parentName:"a"},"ACTIVE")),".\nIf the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#failed"}),Object(i.b)("inlineCode",{parentName:"a"},"FAILED"))," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#cancelled"}),Object(i.b)("inlineCode",{parentName:"a"},"CANCELLED"))," (depending on its current state).\nDefault value is ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("h3",{id:"shouldcancelwhenoutsidevalue-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"shouldCancelWhenOutside(value: boolean)")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true")," the handler will ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#cancelled"}),"cancel")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#failed"}),"fail")," recognition (depending on its current state) whenever the finger leaves the area of the connected view.\nDefault value of this property is different depending on the handler type.\nMost handlers' ",Object(i.b)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside")," property defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," except for the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/long-press-gesture"}),Object(i.b)("inlineCode",{parentName:"a"},"LongPressGesture"))," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/tap-gesture"}),Object(i.b)("inlineCode",{parentName:"a"},"TapGesture"))," which default to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("h3",{id:"hitslopsettings"},Object(i.b)("inlineCode",{parentName:"h3"},"hitSlop(settings)")),Object(i.b)("p",null,"This parameter enables control over what part of the connected view area can be used to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#began"}),"begin")," recognizing the gesture.\nWhen a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly."),Object(i.b)("p",null,"Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for ",Object(i.b)("inlineCode",{parentName:"p"},"left"),", ",Object(i.b)("inlineCode",{parentName:"p"},"right"),", ",Object(i.b)("inlineCode",{parentName:"p"},"top")," or ",Object(i.b)("inlineCode",{parentName:"p"},"bottom")," sides.\nYou can alternatively provide ",Object(i.b)("inlineCode",{parentName:"p"},"horizontal")," or ",Object(i.b)("inlineCode",{parentName:"p"},"vertical")," instead of specifying directly ",Object(i.b)("inlineCode",{parentName:"p"},"left"),", ",Object(i.b)("inlineCode",{parentName:"p"},"right")," or ",Object(i.b)("inlineCode",{parentName:"p"},"top")," and ",Object(i.b)("inlineCode",{parentName:"p"},"bottom"),".\nFinally, the object can also take ",Object(i.b)("inlineCode",{parentName:"p"},"width")," and ",Object(i.b)("inlineCode",{parentName:"p"},"height")," attributes.\nWhen ",Object(i.b)("inlineCode",{parentName:"p"},"width")," is set it is only allow to specify one of the sides ",Object(i.b)("inlineCode",{parentName:"p"},"right")," or ",Object(i.b)("inlineCode",{parentName:"p"},"left"),".\nSimilarly when ",Object(i.b)("inlineCode",{parentName:"p"},"height")," is provided only ",Object(i.b)("inlineCode",{parentName:"p"},"top")," or ",Object(i.b)("inlineCode",{parentName:"p"},"bottom")," can be set.\nSpecifying ",Object(i.b)("inlineCode",{parentName:"p"},"width")," or ",Object(i.b)("inlineCode",{parentName:"p"},"height")," is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set ",Object(i.b)("inlineCode",{parentName:"p"},"left: 0")," and ",Object(i.b)("inlineCode",{parentName:"p"},"width: 20")," which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except ",Object(i.b)("inlineCode",{parentName:"p"},"width")," and ",Object(i.b)("inlineCode",{parentName:"p"},"height"),") to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/view.html#props"}),"hitSlop")," property."),Object(i.b)("h3",{id:"withrefref"},Object(i.b)("inlineCode",{parentName:"h3"},"withRef(ref)")),Object(i.b)("p",null,"Sets a ref to the gesture object, allowing for interoperability with the old API."),Object(i.b)("h3",{id:"simultaneouswithexternalgestureothergesture1-othergesture2-"},Object(i.b)("inlineCode",{parentName:"h3"},"simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)")),Object(i.b)("p",null,"Adds a gesture that should be recognized simultaneously with this one."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../gesture-composition"}),"composing them"),". ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"gesture-detector"}),Object(i.b)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",Object(i.b)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."),Object(i.b)("h3",{id:"requireexternalgesturetofailothergesture1-othergesture2-"},Object(i.b)("inlineCode",{parentName:"h3"},"requireExternalGestureToFail(otherGesture1, otherGesture2, ...)")),Object(i.b)("p",null,"Adds a relation requiring another gesture to fail, before this one can activate."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../gesture-composition"}),"composing them"),".",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"gesture-detector"}),Object(i.b)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",Object(i.b)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."))}u.isMDXComponent=!0},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(280)),o={},s={unversionedId:"api/gestures/base-gesture-callbacks",id:"version-2.0.0/api/gestures/base-gesture-callbacks",isDocsHomePage:!1,title:"base-gesture-callbacks",description:"Callbacks common to all gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-gesture-callbacks.md",slug:"/api/gestures/base-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-gesture-callbacks",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/api/gestures/base-gesture-callbacks.md",version:"2.0.0"},c=[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",children:[]},{value:"<code>onBegin(callback)</code>",id:"onbegincallback",children:[]},{value:"<code>onStart(callback)</code>",id:"onstartcallback",children:[]},{value:"<code>onEnd(callback)</code>",id:"onendcallback",children:[]},{value:"<code>onTouchesDown(event, stateManager)</code>",id:"ontouchesdownevent-statemanager",children:[]},{value:"<code>onTouchesMove(event, stateManager)</code>",id:"ontouchesmoveevent-statemanager",children:[]},{value:"<code>onTouchesUp(event, stateManager)</code>",id:"ontouchesupevent-statemanager",children:[]},{value:"<code>onTouchesCancelled(event, stateManager)</code>",id:"ontouchescancelledevent-statemanager",children:[]},{value:"<code>onTouchesChange(event, stateManager)</code>",id:"ontoucheschangeevent-statemanager",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),Object(i.b)("h3",{id:"onbegincallback"},Object(i.b)("inlineCode",{parentName:"h3"},"onBegin(callback)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onBegin")," callback."),Object(i.b)("h3",{id:"onstartcallback"},Object(i.b)("inlineCode",{parentName:"h3"},"onStart(callback)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onStart")," callback."),Object(i.b)("h3",{id:"onendcallback"},Object(i.b)("inlineCode",{parentName:"h3"},"onEnd(callback)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onEnd")," callback."),Object(i.b)("h3",{id:"ontouchesdownevent-statemanager"},Object(i.b)("inlineCode",{parentName:"h3"},"onTouchesDown(event, stateManager)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),Object(i.b)("h3",{id:"ontouchesmoveevent-statemanager"},Object(i.b)("inlineCode",{parentName:"h3"},"onTouchesMove(event, stateManager)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),Object(i.b)("h3",{id:"ontouchesupevent-statemanager"},Object(i.b)("inlineCode",{parentName:"h3"},"onTouchesUp(event, stateManager)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),Object(i.b)("h3",{id:"ontouchescancelledevent-statemanager"},Object(i.b)("inlineCode",{parentName:"h3"},"onTouchesCancelled(event, stateManager)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."),Object(i.b)("h3",{id:"ontoucheschangeevent-statemanager"},Object(i.b)("inlineCode",{parentName:"h3"},"onTouchesChange(event, stateManager)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onTouchesChange")," callback which is called for every touch event."))}u.isMDXComponent=!0},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(280)),o={},s={unversionedId:"api/gestures/base-continous-gesture-callbacks",id:"version-2.0.0/api/gestures/base-continous-gesture-callbacks",isDocsHomePage:!1,title:"base-continous-gesture-callbacks",description:"Callbacks common to all continous gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-continous-gesture-callbacks.md",slug:"/api/gestures/base-continous-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-continous-gesture-callbacks",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/api/gestures/base-continous-gesture-callbacks.md",version:"2.0.0"},c=[{value:"Callbacks common to all continous gestures:",id:"callbacks-common-to-all-continous-gestures",children:[]},{value:"<code>onUpdate(callback)</code>",id:"onupdatecallback",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"callbacks-common-to-all-continous-gestures"},"Callbacks common to all continous gestures:"),Object(i.b)("h3",{id:"onupdatecallback"},Object(i.b)("inlineCode",{parentName:"h3"},"onUpdate(callback)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onUpdate")," callback."))}u.isMDXComponent=!0},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(280)),o={},s={unversionedId:"api/gestures/base-continous-gesture-config",id:"version-2.0.0/api/gestures/base-continous-gesture-config",isDocsHomePage:!1,title:"base-continous-gesture-config",description:"Properties common to all continous gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-continous-gesture-config.md",slug:"/api/gestures/base-continous-gesture-config",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-continous-gesture-config",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/api/gestures/base-continous-gesture-config.md",version:"2.0.0"},c=[{value:"Properties common to all continous gestures:",id:"properties-common-to-all-continous-gestures",children:[]},{value:"<code>manualActivation(value: boolead)</code>",id:"manualactivationvalue-boolead",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"properties-common-to-all-continous-gestures"},"Properties common to all continous gestures:"),Object(i.b)("h3",{id:"manualactivationvalue-boolead"},Object(i.b)("inlineCode",{parentName:"h3"},"manualActivation(value: boolead)")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true")," the handler will not activate by itself even if its activation criteria are met. Instead you can manipulate its state using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/state-manager"}),"state manager"),"."))}u.isMDXComponent=!0}}]);