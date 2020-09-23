(window.webpackJsonp=window.webpackJsonp||[]).push([[945],{1001:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(1085)),c={title:"Improving the GraphQL experience with Graphback 0.14",author:"Manyanda Chitimbo",author_title:"Software Engineer",author_url:"https://github.com/machi1990",author_image_url:"https://avatars3.githubusercontent.com/u/10106536?s=460&u=ba1f66c0295c5151f147dd869a543bdc68671c56&v=4",tags:["graphql","graphback","graphqlcrud","graphql-js","nodejs","release"],image:"https://graphback.dev/img/logo.png"},l={permalink:"/blog/2020/07/22/new-graphback-release-0-14",source:"@site/blog/2020-07-22-new-graphback-release-0-14.md",description:"TL;DR:",date:"2020-07-22T00:00:00.000Z",tags:[{label:"graphql",permalink:"/blog/tags/graphql"},{label:"graphback",permalink:"/blog/tags/graphback"},{label:"graphqlcrud",permalink:"/blog/tags/graphqlcrud"},{label:"graphql-js",permalink:"/blog/tags/graphql-js"},{label:"nodejs",permalink:"/blog/tags/nodejs"},{label:"release",permalink:"/blog/tags/release"}],title:"Improving the GraphQL experience with Graphback 0.14",readingTime:6.74,truncated:!0},i=[{value:"TL;DR:",id:"tldr",children:[]}],p={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tldr"},"TL;DR:"),Object(o.b)("p",null,"Over the past couple of months, we have been working on improving Graphback. We are excited to announce that we have released Graphback 0.14.0, bringing a new and improved CRUD and runtime experience.\nMost notable changes in this release:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Full implementation of the CRUD API specification"),Object(o.b)("li",{parentName:"ul"},"Improved runtime API to remove complexity of setting up a Graphback API"),Object(o.b)("li",{parentName:"ul"},"RBAC Authorization on top of the Graphback Service and Keycloak")),Object(o.b)("p",null,"The complete changelog is available at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphback.dev/docs/releases#0140"}),"https://graphback.dev/docs/releases#0140")))}u.isMDXComponent=!0},1085:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(r),g=n,h=b["".concat(c,".").concat(g)]||b[g]||s[g]||o;return r?a.a.createElement(h,l(l({ref:t},p),{},{components:r})):a.a.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);