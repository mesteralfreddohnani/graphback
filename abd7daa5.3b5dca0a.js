/*! For license information please see abd7daa5.3b5dca0a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[687],{1085:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=n,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?o.a.createElement(b,i(i({ref:t},u),{},{components:r})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1086:function(e,t,r){"use strict";e.exports=r(1087)},1087:function(e,t,r){"use strict";var n=r(1088),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function v(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||g}function j(){}function _(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||g}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=v.prototype;var w=_.prototype=new j;w.constructor=_,n(w,v.prototype),w.isPureReactComponent=!0;var k={current:null},P=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)P.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),p=0;p<l;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,T=[];function $(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function R(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case c:i=!0}}if(i)return r(n,e,""===t?"."+I(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+I(o=e[l],l);i+=R(o,u,r,n)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=y&&e[y]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),l=0;!(o=e.next()).done;)i+=R(o=o.value,u=t+I(o,l++),r,n);else if("object"===o)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function D(e,t,r){return null==e?0:R(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(E,"$&/")+"/"),D(e,M,t=$(t,a,n,o)),N(t)}var U={current:null};function q(){var e=U.current;if(null===e)throw Error(h(321));return e}var F={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,A,t=$(null,null,t,r)),N(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(h(143));return e}},t.Component=v,t.Fragment=i,t.Profiler=u,t.PureComponent=_,t.StrictMode=l,t.Suspense=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var o=n({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=k.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in t)P.call(t,p)&&!S.hasOwnProperty(p)&&(o[p]=void 0===t[p]&&void 0!==u?u[p]:t[p])}var p=arguments.length-2;if(1===p)o.children=r;else if(1<p){u=Array(p);for(var f=0;f<p;f++)u[f]=arguments[f+2];o.children=u}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return q().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,r){return q().useReducer(e,t,r)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1"},1088:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,l=c(e),u=1;u<arguments.length;u++){for(var p in r=Object(arguments[u]))o.call(r,p)&&(l[p]=r[p]);if(n){i=n(r);for(var f=0;f<i.length;f++)a.call(r,i[f])&&(l[i[f]]=r[i[f]])}}return l}},741:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(1086),r(1085)),c={id:"_templates_clienttemplates_.clienttemplate",title:"ClientTemplate",sidebar_label:"ClientTemplate"},i={unversionedId:"api/graphback-codegen-client/interfaces/_templates_clienttemplates_.clienttemplate",id:"api/graphback-codegen-client/interfaces/_templates_clienttemplates_.clienttemplate",isDocsHomePage:!1,title:"ClientTemplate",description:"Hierarchy",source:"@site/../docs/api/graphback-codegen-client/interfaces/_templates_clienttemplates_.clienttemplate.md",slug:"/api/graphback-codegen-client/interfaces/_templates_clienttemplates_.clienttemplate",permalink:"/docs/next/api/graphback-codegen-client/interfaces/_templates_clienttemplates_.clienttemplate",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-codegen-client/interfaces/_templates_clienttemplates_.clienttemplate.md",version:"current",sidebar_label:"ClientTemplate"},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"implementation",id:"implementation",children:[]},{value:"name",id:"name",children:[]}]}],u={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ClientTemplate"))),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_templates_clienttemplates_.clienttemplate#implementation"}),"implementation")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_templates_clienttemplates_.clienttemplate#name"}),"name"))),Object(a.b)("h2",{id:"properties-1"},"Properties"),Object(a.b)("h3",{id:"implementation"},"implementation"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"implementation"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-codegen-client/src/templates/ClientTemplates.ts#L5"}),"graphback-codegen-client/src/templates/ClientTemplates.ts:5"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"name"},"name"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"name"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-codegen-client/src/templates/ClientTemplates.ts#L4"}),"graphback-codegen-client/src/templates/ClientTemplates.ts:4"))))}p.isMDXComponent=!0}}]);