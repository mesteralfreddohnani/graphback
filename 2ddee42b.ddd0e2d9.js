(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1085:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),b=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,s=u["".concat(l,".").concat(m)]||u[m]||g[m]||i;return r?a.a.createElement(s,c(c({ref:t},o),{},{components:r})):a.a.createElement(s,c({ref:t},o))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<i;o++)l[o]=r[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},231:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),i=(r(0),r(1085)),l={id:"_plugin_migrateplugin_.migrateplugin",title:"MigratePlugin",sidebar_label:"MigratePlugin"},c={unversionedId:"api/graphql-migrations/interfaces/_plugin_migrateplugin_.migrateplugin",id:"version-0.15.x/api/graphql-migrations/interfaces/_plugin_migrateplugin_.migrateplugin",isDocsHomePage:!1,title:"MigratePlugin",description:"Interface for all migration plugins",source:"@site/versioned_docs/version-0.15.x/api/graphql-migrations/interfaces/_plugin_migrateplugin_.migrateplugin.md",slug:"/api/graphql-migrations/interfaces/_plugin_migrateplugin_.migrateplugin",permalink:"/docs/0.15.x/api/graphql-migrations/interfaces/_plugin_migrateplugin_.migrateplugin",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphql-migrations/interfaces/_plugin_migrateplugin_.migrateplugin.md",version:"0.15.x",sidebar_label:"MigratePlugin"},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"write",id:"write",children:[]}]}],o={rightToc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Interface for all migration plugins"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"MigratePlugin"))),Object(i.b)("h2",{id:"index"},"Index"),Object(i.b)("h3",{id:"methods"},"Methods"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphql-migrations/interfaces/_plugin_migrateplugin_.migrateplugin#write"}),"write"))),Object(i.b)("h2",{id:"methods-1"},"Methods"),Object(i.b)("h3",{id:"write"},"write"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"write"),"(",Object(i.b)("inlineCode",{parentName:"p"},"params"),": ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphql-migrations/interfaces/_plugin_migrateplugin_.writeparams"}),"WriteParams"),"): ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphql-migrations/src/plugin/MigratePlugin.ts#L14"}),"plugin/MigratePlugin.ts:14"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"params")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphql-migrations/interfaces/_plugin_migrateplugin_.writeparams"}),"WriteParams"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"boolean")))}b.isMDXComponent=!0}}]);