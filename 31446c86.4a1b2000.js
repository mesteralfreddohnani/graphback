/*! For license information please see 31446c86.4a1b2000.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1085:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,f=p["".concat(l,".").concat(d)]||p[d]||b[d]||o;return t?a.a.createElement(f,i(i({ref:n},s),{},{components:t})):a.a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1086:function(e,n,t){"use strict";e.exports=t(1087)},1087:function(e,n,t){"use strict";var r=t(1088),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,l=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,s=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,b=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.memo"):60115,h=a?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,n,t){this.props=e,this.context=n,this.refs=v,this.updater=t||y}function j(){}function w(e,n,t){this.props=e,this.context=n,this.refs=v,this.updater=t||y}O.prototype.isReactComponent={},O.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,n,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var N=w.prototype=new j;N.constructor=w,r(N,O.prototype),N.isPureReactComponent=!0;var q={current:null},S=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var r,a={},l=null,i=null;if(null!=n)for(r in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(l=""+n.key),n)S.call(n,r)&&!C.hasOwnProperty(r)&&(a[r]=n[r]);var c=arguments.length-2;if(1===c)a.children=t;else if(1<c){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:l,ref:i,props:a,_owner:q.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var D=/\/+/g,x=[];function E(e,n,t,r){if(x.length){var a=x.pop();return a.result=e,a.keyPrefix=n,a.func=t,a.context=r,a.count=0,a}return{result:e,keyPrefix:n,func:t,context:r,count:0}}function G(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function L(e,n,t,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case l:i=!0}}if(i)return t(r,e,""===n?"."+_(e,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=n+_(a=e[c],c);i+=L(a,s,t,r)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=m&&e[m]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),c=0;!(a=e.next()).done;)i+=L(a=a.value,s=n+_(a,c++),t,r);else if("object"===a)throw t=""+e,Error(g(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return i}function R(e,n,t){return null==e?0:L(e,"",n,t)}function _(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return n[e]}))}(e.key):n.toString(36)}function I(e,n){e.func.call(e.context,n,e.count++)}function T(e,n,t){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?$(e,r,t,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+t)),r.push(e))}function $(e,n,t,r,a){var o="";null!=t&&(o=(""+t).replace(D,"$&/")+"/"),R(e,T,n=E(n,o,r,a)),G(n)}var Q={current:null};function U(){var e=Q.current;if(null===e)throw Error(g(321));return e}var A={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:q,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:function(e,n,t){if(null==e)return e;var r=[];return $(e,r,null,n,t),r},forEach:function(e,n,t){if(null==e)return e;R(e,I,n=E(null,null,n,t)),G(n)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var n=[];return $(e,n,null,(function(e){return e})),n},only:function(e){if(!P(e))throw Error(g(143));return e}},n.Component=O,n.Fragment=i,n.Profiler=s,n.PureComponent=w,n.StrictMode=c,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,n.cloneElement=function(e,n,t){if(null==e)throw Error(g(267,e));var a=r({},e.props),l=e.key,i=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,c=q.current),void 0!==n.key&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in n)S.call(n,u)&&!C.hasOwnProperty(u)&&(a[u]=void 0===n[u]&&void 0!==s?s[u]:n[u])}var u=arguments.length-2;if(1===u)a.children=t;else if(1<u){s=Array(u);for(var p=0;p<u;p++)s[p]=arguments[p+2];a.children=s}return{$$typeof:o,type:e.type,key:l,ref:i,props:a,_owner:c}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:p,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:b,render:e}},n.isValidElement=P,n.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},n.memo=function(e,n){return{$$typeof:f,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return U().useCallback(e,n)},n.useContext=function(e,n){return U().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return U().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return U().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return U().useLayoutEffect(e,n)},n.useMemo=function(e,n){return U().useMemo(e,n)},n.useReducer=function(e,n,t){return U().useReducer(e,n,t)},n.useRef=function(e){return U().useRef(e)},n.useState=function(e){return U().useState(e)},n.version="16.13.1"},1088:function(e,n,t){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,n){for(var t,i,c=l(e),s=1;s<arguments.length;s++){for(var u in t=Object(arguments[s]))a.call(t,u)&&(c[u]=t[u]);if(r){i=r(t);for(var p=0;p<i.length;p++)o.call(t,i[p])&&(c[i[p]]=t[i[p]])}}return c}},246:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(1086),t(1085)),l={id:"graphqlserve",title:"Running an API without code",sidebar_label:"API without code"},i={unversionedId:"graphqlserve/graphqlserve",id:"graphqlserve/graphqlserve",isDocsHomePage:!1,title:"Running an API without code",description:"With GraphQL Serve you can have a full featured GraphQL CRUD API with subscriptions and data synchronization running in just a few seconds without writing a single line of code - all you need is a data model .graphql file.",source:"@site/../docs/graphqlserve/graphqlserve.md",slug:"/graphqlserve/graphqlserve",permalink:"/docs/next/graphqlserve/graphqlserve",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/graphqlserve/graphqlserve.md",version:"current",sidebar_label:"API without code",sidebar:"docs",previous:{title:"GraphQL Migrations Filters",permalink:"/docs/next/graphql-migrations/filters"},next:{title:"Plugins Overview",permalink:"/docs/next/plugins/overview"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Running your codeless GraphQL server",id:"running-your-codeless-graphql-server",children:[]},{value:"CRUD",id:"crud",children:[]},{value:"Enable Data Synchronization",id:"enable-data-synchronization",children:[]},{value:"Printing your GraphQL schema",id:"printing-your-graphql-schema",children:[]},{value:"Usage Information",id:"usage-information",children:[]}]}],s={rightToc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With GraphQL Serve you can have a full featured ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphqlcrud.org/"}),"GraphQL CRUD")," API with subscriptions and data synchronization running in just a few seconds without writing a single line of code - all you need is a data model ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file."),Object(o.b)("p",null,"GraphQL Serve is a CLI tool that leverages the power of Graphback to generate a codeless Node.js GraphQL API complete with schema and CRUD resolvers and an in-memory MongoDB database. "),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"You can install ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-serve")," globally with npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm i -g graphql-serve\n")),Object(o.b)("p",null,"or with yarn:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn global add graphql-serve\n")),Object(o.b)("p",null,"or run it with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/npx"}),"npx"),": "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npx graphql-serve\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"The bare minimum you need is a GraphQL file with your data models. Create a file called ",Object(o.b)("inlineCode",{parentName:"p"},"Note.graphql")," and add the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  _id: GraphbackObjectID!\n  title: String!\n  description: String\n  likes: Int\n}\n\nscalar GraphbackObjectID\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@model")," annotation indicates that ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," is a data model and Graphback will generate resolvers, a CRUD service and data source for it. You can learn how to build more complex data models in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../model/datamodel#model"}),"Data Model"),"."),Object(o.b)("h3",{id:"running-your-codeless-graphql-server"},"Running your codeless GraphQL server"),Object(o.b)("p",null,"To start your server, run the following command from the same directory as ",Object(o.b)("inlineCode",{parentName:"p"},"Note.graphql"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gqlserve serve Note.graphql\n")),Object(o.b)("p",null,"This will start a GraphQL server on a random port using the ",Object(o.b)("inlineCode",{parentName:"p"},"Note.graphql")," data models we just added."),Object(o.b)("p",null,"You can customise the directory of the data models:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gqlserve serve ./path/to/models\n")),Object(o.b)("p",null,"You can also specify where to load the data models from with a Glob pattern:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gqlserve serve ./schema/**/*.graphql\n")),Object(o.b)("p",null,"You can specify which port to start the server on:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve serve ./path/to/models --port 8080\n\nStarting server...\n\nListening at: http://localhost:8080/graphql\n")),Object(o.b)("h3",{id:"crud"},"CRUD"),Object(o.b)("p",null,"GraphQL Serve creates an in-memory CRUD API to give you queries, mutations and subscriptions for all your models using API patterns from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphqlcrud.org"}),"GraphQLCRUD"),"."),Object(o.b)("p",null,"Visit the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../crud/overview"}),"CRUD section")," for an overview of the CRUD specification and guides on how to perform CRUD operations on your data."),Object(o.b)("h3",{id:"enable-data-synchronization"},"Enable Data Synchronization"),Object(o.b)("p",null,"GraphQL Serve can also operate on data sync models. Under the hood this uses the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../datasync/intro"}),"Data Sync")," package.\nTo enable data synchronization, all we need to do is enable datasync capabilities on our models via the ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," annotation."),Object(o.b)("p",null,"For the ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," model defined above, this would look like: "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" \n@model\n@datasync \n"""\ntype Note {\n  _id: GraphbackObjectID!\n  title: String!\n  description: String\n  likes: Int\n}\n\nscalar GraphbackObjectID\n')),Object(o.b)("p",null,"Once we have a model with datasync capabilities, we can run our GraphQL server by enabling data synchronization as shown below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gqlserve serve Note.graphql --datasync\n")),Object(o.b)("p",null,"Conflict resolution strategies for datasync enabled models can be specified via the --conflict option:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gqlserve serve Note.graphql --datasync --conflict=clientSideWins\n")),Object(o.b)("p",null,"This defaults to ClientSideWins, if unset."),Object(o.b)("p",null,"The TTL for delta tables, can also be set using the --deltaTTL option:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gqlserve serve Note.graphql --datasync --deltaTTL=172800\n")),Object(o.b)("p",null,"This value defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"172800")," when unused"),Object(o.b)("h3",{id:"printing-your-graphql-schema"},"Printing your GraphQL schema"),Object(o.b)("p",null,"Graphback receives your data models as an input and processes them to generate a GraphQL schema complete with additional types, queries, mutations and subscriptions."),Object(o.b)("p",null,"GraphQL Serve allows you to print the resulting schema in your terminal with the ",Object(o.b)("inlineCode",{parentName:"p"},"print-schema")," subcommand:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve print-schema ./path/to/models\nGenerated schema:\n\n...\n")),Object(o.b)("h3",{id:"usage-information"},"Usage Information"),Object(o.b)("p",null,"This information is also provided with the command itself:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve -h\ngqlserve <command>\n\nCommands:\n  gqlserve print-schema [modelDir]     Generate and print GraphQL schema from data\n                                   model files\n  gqlserve serve [modelDir] [options]  Generate and start GraphQL server from data\n                                   model files\n\nOptions:\n  -h, --help     Show help                                             [boolean]\n  -v, --version  Show version number                                   [boolean]\n")),Object(o.b)("p",null,"For the ",Object(o.b)("inlineCode",{parentName:"p"},"serve")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve serve -h\ngqlserve serve [modelDir] [options]\n\nGenerate and start GraphQL server from data model files\n\nPositionals:\n  modelDir, model  Directory to search for data models                  [string]\n\nOptions:\n  --port, -p        Specify the port on which to listen on              [number]\n  --datasync, --ds  Enable datasynchronization features                [boolean]\n  -h, --help        Show help                                          [boolean]\n  -v, --version     Show version number                                [boolean]\n\nExamples:\n  gqlserve serve . -p 8080  generate schema from data model files in current\n                            directory and start GraphQL server on port 8080\n")),Object(o.b)("p",null,"Also for ",Object(o.b)("inlineCode",{parentName:"p"},"print-schema")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve print-schema -h\ngqlserve print-schema [modelDir]\n\nGenerate and print GraphQL schema from data model files\n\nPositionals:\n  modelDir, model  Directory to search for data models                  [string]\n\nOptions:\n  -h, --help     Show help                                             [boolean]\n  -v, --version  Show version number                                   [boolean]\n\nExamples:\n  gqlserve print-schema modelDir  only display generated schema from data model\n                              files in modelDir directory and quit\n")))}u.isMDXComponent=!0}}]);