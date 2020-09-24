(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1306:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=b(n),s=r,d=m["".concat(o,".").concat(s)]||m[s]||p[s]||i;return n?a.a.createElement(d,l(l({ref:t},u),{},{components:n})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(1306)),o={id:"_util_isautoincrementablecolumn_",title:"util/isAutoIncrementableColumn",sidebar_label:"util/isAutoIncrementableColumn"},l={unversionedId:"api/graphql-migrations/modules/_util_isautoincrementablecolumn_",id:"version-1.0/api/graphql-migrations/modules/_util_isautoincrementablecolumn_",isDocsHomePage:!1,title:"util/isAutoIncrementableColumn",description:"Index",source:"@site/versioned_docs/version-1.0/api/graphql-migrations/modules/_util_isautoincrementablecolumn_.md",slug:"/api/graphql-migrations/modules/_util_isautoincrementablecolumn_",permalink:"/docs/api/graphql-migrations/modules/_util_isautoincrementablecolumn_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/api/graphql-migrations/modules/_util_isautoincrementablecolumn_.md",version:"1.0",sidebar_label:"util/isAutoIncrementableColumn"},c=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"isAutoIncrementableColumn",id:"isautoincrementablecolumn",children:[]}]}],u={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"index"},"Index"),Object(i.b)("h3",{id:"functions"},"Functions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphql-migrations/modules/_util_isautoincrementablecolumn_#isautoincrementablecolumn"}),"isAutoIncrementableColumn"))),Object(i.b)("h2",{id:"functions-1"},"Functions"),Object(i.b)("h3",{id:"isautoincrementablecolumn"},"isAutoIncrementableColumn"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"isAutoIncrementableColumn"),"(",Object(i.b)("inlineCode",{parentName:"p"},"client"),": string, ",Object(i.b)("inlineCode",{parentName:"p"},"columnInfo"),": ColumnInfo): ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphql-migrations/src/util/isAutoIncrementableColumn.ts#L9"}),"util/isAutoIncrementableColumn.ts:9"))),Object(i.b)("p",null,"Detect if the column is incrementable based on column information"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"client")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"database client")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"columnInfo")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ColumnInfo"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"metadata for column")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"boolean")))}b.isMDXComponent=!0}}]);