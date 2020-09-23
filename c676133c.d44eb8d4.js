/*! For license information please see c676133c.d44eb8d4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[805],{1085:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,h=s["".concat(c,".").concat(b)]||s[b]||f[b]||o;return r?a.a.createElement(h,u(u({ref:t},l),{},{components:r})):a.a.createElement(h,u({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1086:function(e,t,r){"use strict";e.exports=r(1087)},1087:function(e,t,r){"use strict";var n=r(1088),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,u=a?Symbol.for("react.fragment"):60107,i=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,s=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,h=a?Symbol.for("react.memo"):60115,d=a?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function v(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||m}function O(){}function j(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=v.prototype;var w=j.prototype=new O;w.constructor=j,n(w,v.prototype),w.isPureReactComponent=!0;var x={current:null},S=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,a={},c=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,n)&&!E.hasOwnProperty(n)&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+2];a.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:x.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g,G=[];function R(e,t,r,n){if(G.length){var a=G.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>G.length&&G.push(e)}function D(e,t,r,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case c:u=!0}}if(u)return r(n,e,""===t?"."+A(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=t+A(a=e[i],i);u+=D(a,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=g&&e[g]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(a=e.next()).done;)u+=D(a=a.value,l=t+A(a,i++),r,n);else if("object"===a)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return u}function N(e,t,r){return null==e?0:D(e,"",t,r)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,a){var o="";null!=r&&(o=(""+r).replace(_,"$&/")+"/"),N(e,T,t=R(t,o,n,a)),$(t)}var I={current:null};function U(){var e=I.current;if(null===e)throw Error(y(321));return e}var F={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;N(e,L,t=R(null,null,t,r)),$(t)},count:function(e){return N(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(y(143));return e}},t.Component=v,t.Fragment=u,t.Profiler=l,t.PureComponent=j,t.StrictMode=i,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var a=n({},e.props),c=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=x.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(p in t)S.call(t,p)&&!E.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==l?l[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=r;else if(1<p){l=Array(p);for(var s=0;s<p;s++)l[s]=arguments[s+2];a.children=l}return{$$typeof:o,type:e.type,key:c,ref:u,props:a,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},1088:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,u,i=c(e),l=1;l<arguments.length;l++){for(var p in r=Object(arguments[l]))a.call(r,p)&&(i[p]=r[p]);if(n){u=n(r);for(var s=0;s<u.length;s++)o.call(r,u[s])&&(i[u[s]]=r[u[s]])}}return i}},862:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(1086),r(1085)),c={id:"index",title:"graphback",sidebar_label:"README"},u={unversionedId:"api/graphback/index",id:"api/graphback/index",isDocsHomePage:!1,title:"graphback",description:"Graphback",source:"@site/../docs/api/graphback/index.md",slug:"/api/graphback/index",permalink:"/docs/next/api/graphback/index",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback/index.md",version:"current",sidebar_label:"README"},i=[{value:"Graphback",id:"graphback",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Graphback usage",id:"graphback-usage",children:[]},{value:"GraphbackGenerator",id:"graphbackgenerator",children:[]},{value:"Graphback Runtime",id:"graphback-runtime",children:[]}],l={rightToc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"graphback"},"Graphback"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{width:"400",src:"https://raw.githubusercontent.com/aerogear/graphback/master/website/static/img/logo.png"}),Object(o.b)("br",null),"Auto generate database structure, ",Object(o.b)("br",null),"GraphQL Resolvers and Queries from GraphQL types \ud83d\ude80"),Object(o.b)("h2",{id:"motivation"},"Motivation"),Object(o.b)("p",null,"Graphback helps you to kickstart your experience with any existing GraphQL implementation\nby generating backend and client side CRUD layer using your GraphQL data model."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Documentation"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphback.dev"}),"https://graphback.dev")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Repository"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/"}),"https://github.com/aerogear/graphback/")),Object(o.b)("h2",{id:"graphback-usage"},"Graphback usage"),Object(o.b)("p",null,"Graphback package provides programatic API for the Graphback ecosystem.\nIn most of the cases you can use graphback by utilizing graphback-cli package that will expose all useful commands and cover most of the use cases."),Object(o.b)("p",null,"Graphback package provides two ways to initialize entire ecosystem from the code"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"GraphbackRuntime"),Object(o.b)("li",{parentName:"ul"},"GraphbackGenerator")),Object(o.b)("h2",{id:"graphbackgenerator"},"GraphbackGenerator"),Object(o.b)("p",null,"Graphback generator can be used to initialize Graphback plugins that will transform schema and generate source code.\nGraphback Generator will utilize GraphQL-Config with underlying plugins"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"  const config = await loadConfig({\n    rootDir: process.cwd(),\n    extensions: [graphbackConfigExtension]\n  });\n  const project = config.getProject('default')\n  const graphbackConfig = project.extension('graphback');\n\n  const generator = new GraphbackGenerator(schemaDocument, graphbackConfig)\n  generator.generateSourceCode();\n")),Object(o.b)("p",null,"For full usage please check:\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/blob/master/packages/graphback-cli/src/components/generate.ts#L42-L43"}),"https://github.com/aerogear/graphback/blob/master/packages/graphback-cli/src/components/generate.ts#L42-L43")),Object(o.b)("h2",{id:"graphback-runtime"},"Graphback Runtime"),Object(o.b)("p",null,"Runtime class allows to initialize Graphback CRUD layer without code generation.\nAll resolvers and schema are created in-memory"),Object(o.b)("p",null,"For full usage and examples please check runtime example application\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/tree/master/templates/ts-apollo-runtime-backend"}),"https://github.com/aerogear/graphback/tree/master/templates/ts-apollo-runtime-backend")))}p.isMDXComponent=!0}}]);