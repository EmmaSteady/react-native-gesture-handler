(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(280)),o={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/"},l={unversionedId:"introduction",id:"version-2.0.0/introduction",isDocsHomePage:!1,title:"Introduction",description:"Gesture Handler aims to replace React Native's built in touch system called Gesture Responder System.",source:"@site/versioned_docs/version-2.0.0/introduction.md",slug:"/",permalink:"/react-native-gesture-handler/docs/2.0.0/",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/introduction.md",version:"2.0.0",sidebar_label:"Introduction",sidebar:"version-2.0.0/docs",next:{title:"Quick start",permalink:"/react-native-gesture-handler/docs/2.0.0/quickstart/quickstart"}},c=[{value:"Installation",id:"installation",children:[{value:"Requirements",id:"requirements",children:[]},{value:"Expo",id:"expo",children:[]},{value:"JS",id:"js",children:[]},{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Testing",id:"testing",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Gesture Handler aims to replace React Native's built in touch system called ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/gesture-responder-system"}),"Gesture Responder System"),"."),Object(i.b)("p",null,"The motivation for building this library was to address the performance limitations of React Native's Gesture Responder System and to provide more control over the built-in native components that can handle gestures.\nWe recommend ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=V8maYc4R2G0"}),"this talk")," by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/kzzzf"}),"Krzysztof Magiera")," in which he explains issues with the responder system."),Object(i.b)("p",null,"In a nutshell, the library provides:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A way to use a platform's native touch handling system for recognizing pinch, rotation and pan (besides a few other gestures)."),Object(i.b)("li",{parentName:"ul"},"The ability to define relations between gesture handlers, e.g. when you have a pan handler in ",Object(i.b)("inlineCode",{parentName:"li"},"ScrollView")," you can make that ",Object(i.b)("inlineCode",{parentName:"li"},"ScrollView")," wait until it knows pan won't recognize."),Object(i.b)("li",{parentName:"ul"},"Mechanisms to use touchables that run in native thread and follow platform default behavior; e.g. in the event they are in a scrollable component, turning into pressed state is slightly delayed to prevent it from highlighting when you fling.")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It is recommended to use Reanimated 2 for animations when using React Native Gesture Handler as its more advanced features rely heavily on the worklets provided by Reanimated."))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("h3",{id:"requirements"},"Requirements"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"version"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"th"},"react-native")," version"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.4.0+"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.60.0+")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.1.0+"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.57.2+")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"<","1.1.0"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.50.0+")))),Object(i.b)("p",null,"It may be possible to use newer versions of react-native-gesture-handler on React Native with version <= 0.59 by reverse Jetifying.\nRead more on that here ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikehardy/jetifier#to-reverse-jetify--convert-node_modules-dependencies-to-support-libraries"}),"https://github.com/mikehardy/jetifier#to-reverse-jetify--convert-node_modules-dependencies-to-support-libraries")),Object(i.b)("p",null,"Note that if you wish to use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/refs-and-the-dom.html"}),Object(i.b)("inlineCode",{parentName:"a"},"React.createRef()"))," support for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/gesture-handlers/basics/interactions"}),"interactions")," you need to use v16.3 of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React")),Object(i.b)("p",null,"In order to fully utilize the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/touch-events"}),"touch events")," you also need to use ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," 2.3.0-beta.4 or newer."),Object(i.b)("h3",{id:"expo"},"Expo"),Object(i.b)("h4",{id:"managed-expo"},"Managed ",Object(i.b)("a",Object(a.a)({parentName:"h4"},{href:"https://expo.io"}),"Expo")),Object(i.b)("p",null,"To use the version of react-native-gesture-handler that is compatible with your managed Expo project, run ",Object(i.b)("inlineCode",{parentName:"p"},"expo install react-native-gesture-handler"),"."),Object(i.b)("p",null,"The Expo SDK incorporates the latest version of react-native-gesture-handler available at the time of each SDK release, so managed Expo apps might not always support all our latest features as soon as they are available."),Object(i.b)("h4",{id:"bare-react-native"},"Bare ",Object(i.b)("a",Object(a.a)({parentName:"h4"},{href:"http://facebook.github.io/react-native/"}),"React Native")),Object(i.b)("p",null,"Since the library uses native support for handling gestures, it requires an extended installation to the norm. If you are starting a new project, you may want to initialize it with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.expo.io/versions/latest/workflow/expo-cli/"}),"expo-cli")," and use a bare template, they come pre-installed with react-native-gesture-handler."),Object(i.b)("h3",{id:"js"},"JS"),Object(i.b)("p",null,"First, install the library using ",Object(i.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-gesture-handler\n")),Object(i.b)("p",null,"or with ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," if you prefer:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save react-native-gesture-handler\n")),Object(i.b)("p",null,"After installation, wrap your entry point with ",Object(i.b)("inlineCode",{parentName:"p"},"<GestureHandlerRootView>")," or\n",Object(i.b)("inlineCode",{parentName:"p"},"gestureHandlerRootHOC"),"."),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export default function App() {\n  return <GestureHandlerRootView>{/* content */}</GestureHandlerRootView>;\n}\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you use props such as ",Object(i.b)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside"),", ",Object(i.b)("inlineCode",{parentName:"p"},"simultaneousHandlers"),", ",Object(i.b)("inlineCode",{parentName:"p"},"waitFor")," etc. with gesture handlers, the handlers need to be mounted under a single ",Object(i.b)("inlineCode",{parentName:"p"},"GestureHandlerRootView"),". So it's important to keep the ",Object(i.b)("inlineCode",{parentName:"p"},"GestureHandlerRootView")," as close to the actual root view as possible."),Object(i.b)("p",{parentName:"div"},"Note that ",Object(i.b)("inlineCode",{parentName:"p"},"GestureHandlerRootView")," acts like a normal ",Object(i.b)("inlineCode",{parentName:"p"},"View"),". So if you want it to fill the screen, you will need to pass ",Object(i.b)("inlineCode",{parentName:"p"},"{ flex: 1 }")," like you'll need to do with a normal ",Object(i.b)("inlineCode",{parentName:"p"},"View"),". By default, it'll take the size of the content nested inside."))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you're using gesture handler in your component library, you may want to wrap your library's code in the GestureHandlerRootView component. This will avoid extra configuration for the user."))),Object(i.b)("h4",{id:"linking"},"Linking"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Important"),": You only need to do this step if you're using React Native 0.59 or lower. Since v0.60, linking happens automatically.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"react-native link react-native-gesture-handler\n")),Object(i.b)("h3",{id:"android"},"Android"),Object(i.b)("h4",{id:"usage-with-modals-on-android"},"Usage with modals on Android"),Object(i.b)("p",null,"On Android RNGH does not work by default because modals are not located under React Native Root view in native hierarchy.\nTo fix that, components need to be wrapped with ",Object(i.b)("inlineCode",{parentName:"p"},"gestureHandlerRootHOC")," (it's no-op on iOS and web)."),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const ExampleWithHoc = gestureHandlerRootHOC(() => (\n    <View>\n      <DraggableBox />\n    </View>\n  );\n);\n\nexport default function Example() {\n  return (\n    <Modal>\n      <ExampleWithHoc />\n    </Modal>\n  );\n}\n")),Object(i.b)("h4",{id:"kotlin"},"Kotlin"),Object(i.b)("p",null,"Since version ",Object(i.b)("inlineCode",{parentName:"p"},"2.0.0")," RNGH has been rewritten with Kotlin. The default version of the Kotlin plugin used in this library is ",Object(i.b)("inlineCode",{parentName:"p"},"1.5.20"),"."),Object(i.b)("p",null,"If you need to use a different Kotlin version, set the ",Object(i.b)("inlineCode",{parentName:"p"},"kotlinVersion")," ext property in ",Object(i.b)("inlineCode",{parentName:"p"},"android/build.gradle")," file and RNGH will use that version:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'buildscript {\n    ext {\n        ...\n        kotlinVersion = "1.5.20"\n    }\n}\n')),Object(i.b)("p",null,"The minimal version of the Kotlin plugin supported by RNGH is ",Object(i.b)("inlineCode",{parentName:"p"},"1.4.10"),"."),Object(i.b)("h3",{id:"ios"},"iOS"),Object(i.b)("p",null,"There is no additional configuration required on iOS except what follows in the next steps."),Object(i.b)("p",null,"If you're in a CocoaPods project (the default setup since React Native 0.60),\nmake sure to install pods before you run your app:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ios && pod install\n")),Object(i.b)("p",null,"For React Native 0.61 or greater, add the library as the first import in your index.js file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import 'react-native-gesture-handler';\n")),Object(i.b)("h3",{id:"testing"},"Testing"),Object(i.b)("p",null,"In order to load mocks provided by the library add following to your jest config in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"setupFiles": ["./node_modules/react-native-gesture-handler/jestSetup.js"]\n')),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"jest": {\n  "preset": "react-native",\n  "setupFiles": ["./node_modules/react-native-gesture-handler/jestSetup.js"]\n}\n')))}b.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);