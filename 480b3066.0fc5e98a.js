/*! For license information please see 480b3066.0fc5e98a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{1085:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return y}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),f=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=f(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=f(t),b=n,y=p["".concat(c,".").concat(b)]||p[b]||s[b]||a;return t?o.a.createElement(y,u(u({ref:r},l),{},{components:t})):o.a.createElement(y,u({ref:r},l))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1086:function(e,r,t){"use strict";e.exports=t(1087)},1087:function(e,r,t){"use strict";var n=t(1088),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||g}function j(){}function k(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var w=k.prototype=new j;w.constructor=k,n(w,O.prototype),w.isPureReactComponent=!0;var S={current:null},E=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function P(e,r,t){var n,o={},c=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(c=""+r.key),r)E.call(r,n)&&!x.hasOwnProperty(n)&&(o[n]=r[n]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:S.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g,R=[];function $(e,r,t,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function D(e,r,t,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case c:u=!0}}if(u)return t(n,e,""===r?"."+A(e,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=r+A(o=e[i],i);u+=D(o,l,t,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=h&&e[h]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)u+=D(o=o.value,l=r+A(o,i++),t,n);else if("object"===o)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return u}function T(e,r,t){return null==e?0:D(e,"",r,t)}function A(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function q(e,r){e.func.call(e.context,r,e.count++)}function M(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?I(e,n,t,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,r){return{$$typeof:a,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+t)),n.push(e))}function I(e,r,t,n,o){var a="";null!=t&&(a=(""+t).replace(C,"$&/")+"/"),T(e,M,r=$(r,a,n,o)),N(r)}var U={current:null};function G(){var e=U.current;if(null===e)throw Error(m(321));return e}var L={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return I(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;T(e,q,r=$(null,null,r,t)),N(r)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var r=[];return I(e,r,null,(function(e){return e})),r},only:function(e){if(!_(e))throw Error(m(143));return e}},r.Component=O,r.Fragment=u,r.Profiler=l,r.PureComponent=k,r.StrictMode=i,r.Suspense=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,r.cloneElement=function(e,r,t){if(null==e)throw Error(m(267,e));var o=n({},e.props),c=e.key,u=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=S.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in r)E.call(r,f)&&!x.hasOwnProperty(f)&&(o[f]=void 0===r[f]&&void 0!==l?l[f]:r[f])}var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){l=Array(f);for(var p=0;p<f;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:u,props:o,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:p,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},r.createElement=P,r.createFactory=function(e){var r=P.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=_,r.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:y,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return G().useCallback(e,r)},r.useContext=function(e,r){return G().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return G().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return G().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return G().useLayoutEffect(e,r)},r.useMemo=function(e,r){return G().useMemo(e,r)},r.useReducer=function(e,r,t){return G().useReducer(e,r,t)},r.useRef=function(e){return G().useRef(e)},r.useState=function(e){return G().useState(e)},r.version="16.13.1"},1088:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,u,i=c(e),l=1;l<arguments.length;l++){for(var f in t=Object(arguments[l]))o.call(t,f)&&(i[f]=t[f]);if(n){u=n(t);for(var p=0;p<u.length;p++)a.call(t,u[p])&&(i[u[p]]=t[u[p]])}}return i}},340:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return f}));var n=t(2),o=t(6),a=(t(1086),t(1085)),c={id:"index",title:"@graphback/core",sidebar_label:"README"},u={unversionedId:"api/graphback-core/index",id:"api/graphback-core/index",isDocsHomePage:!1,title:"@graphback/core",description:"Graphback",source:"@site/../docs/api/graphback-core/index.md",slug:"/api/graphback-core/index",permalink:"/docs/next/api/graphback-core/index",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/index.md",version:"current",sidebar_label:"README"},i=[{value:"Graphback",id:"graphback",children:[]},{value:"Graphback-Core",id:"graphback-core",children:[]}],l={rightToc:i};function f(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"graphback"},"Graphback"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{width:"400",src:"https://raw.githubusercontent.com/aerogear/graphback/master/website/static/img/logo.png"}),Object(a.b)("br",null),"Auto generate database structure, ",Object(a.b)("br",null),"GraphQL Resolvers and Queries from GraphQL types \ud83d\ude80"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Documentation"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphback.dev"}),"https://graphback.dev"),"\n",Object(a.b)("strong",{parentName:"p"},"Repository"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/"}),"https://github.com/aerogear/graphback/")),Object(a.b)("h2",{id:"graphback-core"},"Graphback-Core"),Object(a.b)("p",null,"Core package is an abstraction that provides common entry point to all graphback concepts:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Plugins"),Object(a.b)("li",{parentName:"ul"},"Helpers for building ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://graphqlcrud.org"}),"https://graphqlcrud.org")," schema"),Object(a.b)("li",{parentName:"ul"},"GraphbackCRUDService abstraction"),Object(a.b)("li",{parentName:"ul"},"DataProvider abstraction")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"NOTE: This package is not designed to be used directly.")))}f.isMDXComponent=!0}}]);