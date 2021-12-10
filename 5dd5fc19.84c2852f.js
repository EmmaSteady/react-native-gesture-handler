(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(280)),c=n(282),l=n(284),i={id:"example",title:"Running Example App"},p={unversionedId:"example",id:"version-2.1.0/example",isDocsHomePage:!1,title:"Running Example App",description:"Example app code is located under example/ folder in the repo.",source:"@site/versioned_docs/version-2.1.0/example.md",slug:"/example",permalink:"/react-native-gesture-handler/docs/example",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.1.0/example.md",version:"2.1.0",sidebar:"version-2.1.0/docs",previous:{title:"What's new in 2.0",permalink:"/react-native-gesture-handler/docs/whats-new"},next:{title:"GestureDetector",permalink:"/react-native-gesture-handler/docs/api/gestures/gesture-detector"}},s=[{value:"Running example app locally",id:"running-example-app-locally",children:[]}],u={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Example app code is located under ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/example"}),Object(o.b)("inlineCode",{parentName:"a"},"example/"))," folder in the repo.\nIt showcases the majority of the Gesture Handler library features.\nThe app consist of the list of single screen examples presenting the capabilities of the library.\nEach example is located under a separate folder under ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/example"}),Object(o.b)("inlineCode",{parentName:"a"},"example/")),"."),Object(o.b)(l.a,{mdxType:"GifGallery"},Object(o.b)("img",{src:Object(c.a)("gifs/sampleapp.gif"),width:"180",height:"320"})),Object(o.b)("h2",{id:"running-example-app-locally"},"Running example app locally"),Object(o.b)("p",null,"Before you begin you should follow ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/getting-started.html"}),"React Native's setup steps")," to make sure you have all the tools necessary to build and run React Native apps installed.\nThe example app is a regular React Native app, so in case of problems or to learn about available commands you may want to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/cli/blob/master/README.md"}),"check react-native cli documentation"),"."),Object(o.b)("p",null,"In order to run example app you need to clone the repo first:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:software-mansion/react-native-gesture-handler.git\n")),Object(o.b)("p",null,"Then go to the library folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd react-native-gesture-handler/\n")),Object(o.b)("p",null,"Install dependencies of library with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn\n")),Object(o.b)("p",null,"Then go to the ",Object(o.b)("inlineCode",{parentName:"p"},"example")," folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd example\n")),Object(o.b)("p",null,"Install dependencies of example with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn\n")),Object(o.b)("p",null,"Run development server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn start\n")),Object(o.b)("p",null,"Finally run one of the commands below in order to build, install and launch the app on Android:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn android\n")),Object(o.b)("p",null,"or on iOS:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn ios\n")),Object(o.b)("p",null,"You will need to have an Android or iOS device or emulator connected and ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-cli")," package installed globally."))}b.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},281:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},282:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(281),r=n(283);function o(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,c=o.forcePrependBaseUrl,l=void 0!==c&&c,i=o.absolute,p=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(l)return t+n;var s=!n.startsWith(t)?t+n.replace(/^\//,""):n;return p?e+s:s}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},283:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},284:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o={container:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},img:{border:"1px solid #acacac",borderRadius:"6px",boxShadow:"0 0 20px #acacac",marginTop:"1em",marginBottom:"1em"}};t.a=function(e){var t=e.children;return r.a.createElement("div",{style:o.container},a.Children.map(t,(function(e){return Object(a.cloneElement)(e,Object.assign({},e.props.style,{style:o.img}))})))}}}]);