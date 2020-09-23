/*! For license information please see 62cd0763.f2f2652e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{1085:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,m=s["".concat(c,".").concat(b)]||s[b]||f[b]||o;return r?a.a.createElement(m,l(l({ref:t},i),{},{components:r})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1086:function(e,t,r){"use strict";e.exports=r(1087)},1087:function(e,t,r){"use strict";var n=r(1088),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,i=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,s=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,d=a?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||v}function g(){}function _(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=j.prototype;var N=_.prototype=new g;N.constructor=_,n(N,j.prototype),N.isPureReactComponent=!0;var w={current:null},S=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,a={},c=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,n)&&!P.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var i=Array(u),p=0;p<u;p++)i[p]=arguments[p+2];a.children=i}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:c,ref:l,props:a,_owner:w.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g,E=[];function q(e,t,r,n){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function R(e,t,r,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case c:l=!0}}if(l)return r(n,e,""===t?"."+H(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var i=t+H(a=e[u],u);l+=R(a,i,r,n)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=y&&e[y]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),u=0;!(a=e.next()).done;)l+=R(a=a.value,i=t+H(a,u++),r,n);else if("object"===a)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return l}function T(e,t,r){return null==e?0:R(e,"",t,r)}function H(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,n,r,(function(e){return e})):null!=e&&(k(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r)),n.push(e))}function I(e,t,r,n,a){var o="";null!=r&&(o=(""+r).replace(C,"$&/")+"/"),T(e,D,t=q(t,o,n,a)),$(t)}var A={current:null};function F(){var e=A.current;if(null===e)throw Error(h(321));return e}var M={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return I(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;T(e,L,t=q(null,null,t,r)),$(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!k(e))throw Error(h(143));return e}},t.Component=j,t.Fragment=l,t.Profiler=i,t.PureComponent=_,t.StrictMode=u,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var a=n({},e.props),c=e.key,l=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,u=w.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(p in t)S.call(t,p)&&!P.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==i?i[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=r;else if(1<p){i=Array(p);for(var s=0;s<p;s++)i[s]=arguments[s+2];a.children=i}return{$$typeof:o,type:e.type,key:c,ref:l,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return F().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,r){return F().useReducer(e,t,r)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.13.1"},1088:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,l,u=c(e),i=1;i<arguments.length;i++){for(var p in r=Object(arguments[i]))a.call(r,p)&&(u[p]=r[p]);if(n){l=n(r);for(var s=0;s<l.length;s++)o.call(r,l[s])&&(u[l[s]]=r[l[s]])}}return u}},454:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(1086),r(1085)),c={id:"_components_servehandler_",title:"components/serveHandler",sidebar_label:"components/serveHandler"},l={unversionedId:"api/graphql-serve/modules/_components_servehandler_",id:"api/graphql-serve/modules/_components_servehandler_",isDocsHomePage:!1,title:"components/serveHandler",description:"Index",source:"@site/../docs/api/graphql-serve/modules/_components_servehandler_.md",slug:"/api/graphql-serve/modules/_components_servehandler_",permalink:"/docs/next/api/graphql-serve/modules/_components_servehandler_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphql-serve/modules/_components_servehandler_.md",version:"current",sidebar_label:"components/serveHandler"},u=[{value:"Index",id:"index",children:[{value:"Type aliases",id:"type-aliases",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Type aliases",id:"type-aliases-1",children:[{value:"GraphQLServeParams",id:"graphqlserveparams",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"<code>Const</code> serveHandler",id:"const-servehandler",children:[]}]}],i={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"type-aliases"},"Type aliases"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/modules/_components_servehandler_#graphqlserveparams"}),"GraphQLServeParams"))),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/modules/_components_servehandler_#const-servehandler"}),"serveHandler"))),Object(o.b)("h2",{id:"type-aliases-1"},"Type aliases"),Object(o.b)("h3",{id:"graphqlserveparams"},"GraphQLServeParams"),Object(o.b)("p",null,"\u01ac ",Object(o.b)("strong",{parentName:"p"},"GraphQLServeParams"),": ",Object(o.b)("em",{parentName:"p"},"object")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphql-serve/src/components/serveHandler.ts#L4"}),"components/serveHandler.ts:4"))),Object(o.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"conflict"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-serve/modules/_runtime_#conflictresolutionstrategyname"}),"ConflictResolutionStrategyName")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"datasync"),": ",Object(o.b)("em",{parentName:"p"},"boolean"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"deltaTTL"),"? : ",Object(o.b)("em",{parentName:"p"},"number"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"model"),"? : ",Object(o.b)("em",{parentName:"p"},"string"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"port"),"? : ",Object(o.b)("em",{parentName:"p"},"number")))),Object(o.b)("h2",{id:"functions-1"},"Functions"),Object(o.b)("h3",{id:"const-servehandler"},Object(o.b)("inlineCode",{parentName:"h3"},"Const")," serveHandler"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"serveHandler"),"(",Object(o.b)("inlineCode",{parentName:"p"},"argv"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-serve/modules/_components_servehandler_#graphqlserveparams"}),"GraphQLServeParams"),"): ",Object(o.b)("em",{parentName:"p"},"Promise\u2039void\u203a")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphql-serve/src/components/serveHandler.ts#L6"}),"components/serveHandler.ts:6"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"argv")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphql-serve/modules/_components_servehandler_#graphqlserveparams"}),"GraphQLServeParams"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"Promise\u2039void\u203a")))}p.isMDXComponent=!0}}]);