(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{167:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var r=a(2),n=a(6),i=(a(0),a(280)),s={id:"tap-gh",title:"TapGestureHandler",sidebar_label:"Tap"},o={unversionedId:"gesture-handlers/api/tap-gh",id:"version-2.0.0/gesture-handlers/api/tap-gh",isDocsHomePage:!1,title:"TapGestureHandler",description:"A discrete gesture handler that recognizes one or many taps.",source:"@site/versioned_docs/version-2.0.0/gesture-handlers/api/tap-gh.md",slug:"/gesture-handlers/api/tap-gh",permalink:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/tap-gh",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/gesture-handlers/api/tap-gh.md",version:"2.0.0",sidebar_label:"Tap",sidebar:"version-2.0.0/docs",previous:{title:"PanGestureHandler",permalink:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/pan-gh"},next:{title:"LongPressGestureHandler",permalink:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/longpress-gh"}},l=[{value:"Properties",id:"properties",children:[{value:"<code>minPointers</code>",id:"minpointers",children:[]},{value:"<code>maxDurationMs</code>",id:"maxdurationms",children:[]},{value:"<code>maxDelayMs</code>",id:"maxdelayms",children:[]},{value:"<code>numberOfTaps</code>",id:"numberoftaps",children:[]},{value:"<code>maxDeltaX</code>",id:"maxdeltax",children:[]},{value:"<code>maxDeltaY</code>",id:"maxdeltay",children:[]},{value:"<code>maxDist</code>",id:"maxdist",children:[]}]},{value:"Event data",id:"event-data",children:[{value:"<code>x</code>",id:"x",children:[]},{value:"<code>y</code>",id:"y",children:[]},{value:"<code>absoluteX</code>",id:"absolutex",children:[]},{value:"<code>absoluteY</code>",id:"absolutey",children:[]}]},{value:"Example",id:"example",children:[]}],c={rightToc:l};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A discrete gesture handler that recognizes one or many taps."),Object(i.b)("p",null,"Tap gestures detect one or more fingers briefly touching the screen.\nThe fingers involved in these gestures must not move significantly from their initial touch positions.\nThe required number of taps and allowed distance from initial position may be configured.\nFor example, you might configure tap gesture recognizers to detect single taps, double taps, or triple taps."),Object(i.b)("p",null,"In order for a handler to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#active"}),"activate"),", specified gesture requirements such as minPointers, numberOfTaps, maxDist, maxDurationMs, and maxDelayMs (explained below) must be met. Immediately after the handler ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#active"}),"activates"),", it will ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#end"}),"END"),"."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/common-gh#properties"}),"set of properties inherited from base handler class"),". Below is a list of properties specific to the ",Object(i.b)("inlineCode",{parentName:"p"},"TapGestureHandler")," component:"),Object(i.b)("h3",{id:"minpointers"},Object(i.b)("inlineCode",{parentName:"h3"},"minPointers")),Object(i.b)("p",null,"Minimum number of pointers (fingers) required to be placed before the handler ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#active"}),"activates"),". Should be a positive integer. The default value is 1."),Object(i.b)("h3",{id:"maxdurationms"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDurationMs")),Object(i.b)("p",null,"Maximum time, expressed in milliseconds, that defines how fast a finger must be released after a touch. The default value is 500."),Object(i.b)("h3",{id:"maxdelayms"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDelayMs")),Object(i.b)("p",null,"Maximum time, expressed in milliseconds, that can pass before the next tap \u2014 if many taps are required. The default value is 500."),Object(i.b)("h3",{id:"numberoftaps"},Object(i.b)("inlineCode",{parentName:"h3"},"numberOfTaps")),Object(i.b)("p",null,"Number of tap gestures required to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#active"}),"activate")," the handler. The default value is 1."),Object(i.b)("h3",{id:"maxdeltax"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDeltaX")),Object(i.b)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel along the X axis during a tap gesture. If the finger travels further than the defined distance along the X axis and the handler hasn't yet ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#active"}),"activated"),", it will fail to recognize the gesture."),Object(i.b)("h3",{id:"maxdeltay"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDeltaY")),Object(i.b)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel along the Y axis during a tap gesture. If the finger travels further than the defined distance along the Y axis and the handler hasn't yet ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#active"}),"activated"),", it will fail to recognize the gesture."),Object(i.b)("h3",{id:"maxdist"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDist")),Object(i.b)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel during a tap gesture. If the finger travels further than the defined distance and the handler hasn't yet ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/state#active"}),"activated"),", it will fail to recognize the gesture."),Object(i.b)("h2",{id:"event-data"},"Event data"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/api/common-gh#event-data"}),"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to the ",Object(i.b)("inlineCode",{parentName:"p"},"TapGestureHandler")," component:"),Object(i.b)("h3",{id:"x"},Object(i.b)("inlineCode",{parentName:"h3"},"x")),Object(i.b)("p",null,"X coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler."),Object(i.b)("h3",{id:"y"},Object(i.b)("inlineCode",{parentName:"h3"},"y")),Object(i.b)("p",null,"Y coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler."),Object(i.b)("h3",{id:"absolutex"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteX")),Object(i.b)("p",null,"X coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. It is recommended to use ",Object(i.b)("inlineCode",{parentName:"p"},"absoluteX")," instead of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#x"}),Object(i.b)("inlineCode",{parentName:"a"},"x"))," in cases when the view attached to the handler can be transformed as an effect of the gesture."),Object(i.b)("h3",{id:"absolutey"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteY")),Object(i.b)("p",null,"Y coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. It is recommended to use ",Object(i.b)("inlineCode",{parentName:"p"},"absoluteY")," instead of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#y"}),Object(i.b)("inlineCode",{parentName:"a"},"y"))," in cases when the view attached to the handler can be transformed as an effect of the gesture."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/basic/multitap/index.tsx"}),"multitap example")," from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/example"}),"GestureHandler Example App"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"export class PressBox extends Component {\n  doubleTapRef = React.createRef();\n  render() {\n    return (\n      <TapGestureHandler\n        onHandlerStateChange={this._onSingleTap}\n        waitFor={this.doubleTapRef}>\n        <TapGestureHandler ref={this.doubleTapRef} numberOfTaps={2}>\n          <View style={styles.box} />\n        </TapGestureHandler>\n      </TapGestureHandler>\n    );\n  }\n}\n")))}d.isMDXComponent=!0},280:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),b=r,h=p["".concat(s,".").concat(b)]||p[b]||u[b]||i;return a?n.a.createElement(h,o(o({ref:t},c),{},{components:a})):n.a.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);