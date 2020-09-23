/*! For license information please see 8dfe4218.8de614d2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[559],{1085:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),i=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=i(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(a),u=r,O=d["".concat(o,".").concat(u)]||d[u]||m[u]||b;return a?n.a.createElement(O,c(c({ref:t},p),{},{components:a})):n.a.createElement(O,c({ref:t},p))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,o=new Array(b);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<b;p++)o[p]=a[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1086:function(e,t,a){"use strict";e.exports=a(1087)},1087:function(e,t,a){"use strict";var r=a(1088),n="function"==typeof Symbol&&Symbol.for,b=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,p=n?Symbol.for("react.profiler"):60114,i=n?Symbol.for("react.provider"):60109,d=n?Symbol.for("react.context"):60110,m=n?Symbol.for("react.forward_ref"):60112,u=n?Symbol.for("react.suspense"):60113,O=n?Symbol.for("react.memo"):60115,j=n?Symbol.for("react.lazy"):60116,s="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N={};function f(e,t,a){this.props=e,this.context=t,this.refs=N,this.updater=a||h}function y(){}function v(e,t,a){this.props=e,this.context=t,this.refs=N,this.updater=a||h}f.prototype.isReactComponent={},f.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},f.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=f.prototype;var P=v.prototype=new y;P.constructor=v,r(P,f.prototype),P.isPureReactComponent=!0;var D={current:null},k=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,a){var r,n={},o=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,r)&&!C.hasOwnProperty(r)&&(n[r]=t[r]);var l=arguments.length-2;if(1===l)n.children=a;else if(1<l){for(var p=Array(l),i=0;i<l;i++)p[i]=arguments[i+2];n.children=p}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===n[r]&&(n[r]=l[r]);return{$$typeof:b,type:e,key:o,ref:c,props:n,_owner:D.current}}function M(e){return"object"==typeof e&&null!==e&&e.$$typeof===b}var B=/\/+/g,T=[];function x(e,t,a,r){if(T.length){var n=T.pop();return n.result=e,n.keyPrefix=t,n.func=a,n.context=r,n.count=0,n}return{result:e,keyPrefix:t,func:a,context:r,count:0}}function w(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function S(e,t,a,r){var n=typeof e;"undefined"!==n&&"boolean"!==n||(e=null);var c=!1;if(null===e)c=!0;else switch(n){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case b:case o:c=!0}}if(c)return a(r,e,""===t?"."+E(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=t+E(n=e[l],l);c+=S(n,p,a,r)}else if(null===e||"object"!=typeof e?p=null:p="function"==typeof(p=s&&e[s]||e["@@iterator"])?p:null,"function"==typeof p)for(e=p.call(e),l=0;!(n=e.next()).done;)c+=S(n=n.value,p=t+E(n,l++),a,r);else if("object"===n)throw a=""+e,Error(g(31,"[object Object]"===a?"object with keys {"+Object.keys(e).join(", ")+"}":a,""));return c}function R(e,t,a){return null==e?0:S(e,"",t,a)}function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,a){var r=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,a,(function(e){return e})):null!=e&&(M(e)&&(e=function(e,t){return{$$typeof:b,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(B,"$&/")+"/")+a)),r.push(e))}function L(e,t,a,r,n){var b="";null!=a&&(b=(""+a).replace(B,"$&/")+"/"),R(e,$,t=x(t,b,r,n)),w(t)}var q={current:null};function I(){var e=q.current;if(null===e)throw Error(g(321));return e}var A={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:D,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,a){if(null==e)return e;var r=[];return L(e,r,null,t,a),r},forEach:function(e,t,a){if(null==e)return e;R(e,F,t=x(null,null,t,a)),w(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!M(e))throw Error(g(143));return e}},t.Component=f,t.Fragment=c,t.Profiler=p,t.PureComponent=v,t.StrictMode=l,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,a){if(null==e)throw Error(g(267,e));var n=r({},e.props),o=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=D.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(i in t)k.call(t,i)&&!C.hasOwnProperty(i)&&(n[i]=void 0===t[i]&&void 0!==p?p[i]:t[i])}var i=arguments.length-2;if(1===i)n.children=a;else if(1<i){p=Array(i);for(var d=0;d<i;d++)p[d]=arguments[d+2];n.children=p}return{$$typeof:b,type:e.type,key:o,ref:c,props:n,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:d,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:m,render:e}},t.isValidElement=M,t.lazy=function(e){return{$$typeof:j,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:O,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,a){return I().useImperativeHandle(e,t,a)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,a){return I().useReducer(e,t,a)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="16.13.1"},1088:function(e,t,a){"use strict";var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var a,c,l=o(e),p=1;p<arguments.length;p++){for(var i in a=Object(arguments[p]))n.call(a,i)&&(l[i]=a[i]);if(r){c=r(a);for(var d=0;d<c.length;d++)b.call(a,c[d])&&(l[c[d]]=a[c[d]])}}return l}},614:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return i}));var r=a(2),n=a(6),b=(a(1086),a(1085)),o={id:"_mongodbdataprovider_.mongodbdataprovider",title:"MongoDBDataProvider",sidebar_label:"MongoDBDataProvider"},c={unversionedId:"api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider",id:"api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider",isDocsHomePage:!1,title:"MongoDBDataProvider",description:"Graphback provider that connnects to the MongoDB database",source:"@site/../docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider.md",slug:"/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider",permalink:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider.md",version:"current",sidebar_label:"MongoDBDataProvider",sidebar:"docs",previous:{title:"createMongoDbProvider",permalink:"/docs/next/api/graphback-runtime-mongodb/modules/_createmongodbprovider_"},next:{title:"SchemaCRUDPlugin",permalink:"/docs/next/api/graphback-codegen-schema/classes/_schemacrudplugin_.schemacrudplugin"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Protected</code> collectionName",id:"protected-collectionname",children:[]},{value:"<code>Protected</code> db",id:"protected-db",children:[]},{value:"<code>Protected</code> fieldTransformMap",id:"protected-fieldtransformmap",children:[]},{value:"<code>Protected</code> tableMap",id:"protected-tablemap",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"batchRead",id:"batchread",children:[]},{value:"<code>Protected</code> buildProjectionOption",id:"protected-buildprojectionoption",children:[]},{value:"count",id:"count",children:[]},{value:"create",id:"create",children:[]},{value:"delete",id:"delete",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findOne",id:"findone",children:[]},{value:"<code>Private</code> sortQuery",id:"private-sortquery",children:[]},{value:"update",id:"update",children:[]},{value:"<code>Private</code> usePage",id:"private-usepage",children:[]},{value:"<code>Private</code> verifyMongoDBPrimaryKey",id:"private-verifymongodbprimarykey",children:[]}]}],p={rightToc:l};function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Graphback provider that connnects to the MongoDB database"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"Type")),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"MongoDBDataProvider"))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"GraphbackDataProvider\u2039Type\u203a")),Object(b.b)("h2",{id:"index"},"Index"),Object(b.b)("h3",{id:"constructors"},"Constructors"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#constructor"}),"constructor"))),Object(b.b)("h3",{id:"properties"},"Properties"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#protected-collectionname"}),"collectionName")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#protected-db"}),"db")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#protected-fieldtransformmap"}),"fieldTransformMap")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#protected-tablemap"}),"tableMap"))),Object(b.b)("h3",{id:"methods"},"Methods"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#batchread"}),"batchRead")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#protected-buildprojectionoption"}),"buildProjectionOption")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#count"}),"count")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#create"}),"create")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#delete"}),"delete")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#findby"}),"findBy")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#findone"}),"findOne")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#private-sortquery"}),"sortQuery")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#update"}),"update")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#private-usepage"}),"usePage")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#private-verifymongodbprimarykey"}),"verifyMongoDBPrimaryKey"))),Object(b.b)("h2",{id:"constructors-1"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new MongoDBDataProvider"),"(",Object(b.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition, ",Object(b.b)("inlineCode",{parentName:"p"},"db"),": any): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider"}),"MongoDBDataProvider"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L17"}),"MongoDBDataProvider.ts:17"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"model")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ModelDefinition")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"db")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider"}),"MongoDBDataProvider"))),Object(b.b)("h2",{id:"properties-1"},"Properties"),Object(b.b)("h3",{id:"protected-collectionname"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," collectionName"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"collectionName"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L15"}),"MongoDBDataProvider.ts:15"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-db"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," db"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"db"),": ",Object(b.b)("em",{parentName:"p"},"Db")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L14"}),"MongoDBDataProvider.ts:14"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-fieldtransformmap"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," fieldTransformMap"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"fieldTransformMap"),": ",Object(b.b)("em",{parentName:"p"},"FieldTransformMap")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L17"}),"MongoDBDataProvider.ts:17"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-tablemap"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," tableMap"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"tableMap"),": ",Object(b.b)("em",{parentName:"p"},"ModelTableMap")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L16"}),"MongoDBDataProvider.ts:16"))),Object(b.b)("h2",{id:"methods-1"},"Methods"),Object(b.b)("h3",{id:"batchread"},"batchRead"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"batchRead"),"(",Object(b.b)("inlineCode",{parentName:"p"},"relationField"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"ids"),": string[], ",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": QueryFilter, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L127"}),"MongoDBDataProvider.ts:127"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"relationField")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ids")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"QueryFilter")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-buildprojectionoption"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," buildProjectionOption"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"buildProjectionOption"),"(",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields"),": string[]): ",Object(b.b)("em",{parentName:"p"},"object")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L153"}),"MongoDBDataProvider.ts:153"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"object")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"[field]"),": ",Object(b.b)("em",{parentName:"li"},"number")," = 1")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"count"},"count"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"count"),"(",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": QueryFilter): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L123"}),"MongoDBDataProvider.ts:123"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"QueryFilter")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"create"},"create"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"create"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Type): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L30"}),"MongoDBDataProvider.ts:30"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"delete"},"delete"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"delete"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L78"}),"MongoDBDataProvider.ts:78"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"findby"},"findBy"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"findBy"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args?"),": FindByArgs, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L110"}),"MongoDBDataProvider.ts:110"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"FindByArgs")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"findone"},"findOne"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"findOne"),"(",Object(b.b)("inlineCode",{parentName:"p"},"filter"),": Partial\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L96"}),"MongoDBDataProvider.ts:96"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"private-sortquery"},Object(b.b)("inlineCode",{parentName:"h3"},"Private")," sortQuery"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"sortQuery"),"(",Object(b.b)("inlineCode",{parentName:"p"},"query"),": Cursor\u2039any\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"orderBy"),": GraphbackOrderBy): ",Object(b.b)("em",{parentName:"p"},"Cursor\u2039any\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L174"}),"MongoDBDataProvider.ts:174"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"query")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Cursor\u2039any\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"orderBy")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackOrderBy")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Cursor\u2039any\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"update"},"update"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"update"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L50"}),"MongoDBDataProvider.ts:50"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"private-usepage"},Object(b.b)("inlineCode",{parentName:"h3"},"Private")," usePage"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"usePage"),"(",Object(b.b)("inlineCode",{parentName:"p"},"query"),": Cursor\u2039any\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"page?"),": GraphbackPage): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039any[]\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L191"}),"MongoDBDataProvider.ts:191"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"query")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Cursor\u2039any\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"page?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackPage")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039any[]\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"private-verifymongodbprimarykey"},Object(b.b)("inlineCode",{parentName:"h3"},"Private")," verifyMongoDBPrimaryKey"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"verifyMongoDBPrimaryKey"),"(",Object(b.b)("inlineCode",{parentName:"p"},"modelName"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"primaryKey"),": FieldDescriptor): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L167"}),"MongoDBDataProvider.ts:167"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"modelName")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"primaryKey")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"FieldDescriptor")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")))}i.isMDXComponent=!0}}]);