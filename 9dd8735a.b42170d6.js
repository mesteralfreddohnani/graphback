(window.webpackJsonp=window.webpackJsonp||[]).push([[621],{1085:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},676:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),i=(n(0),n(1085)),o={id:"sqlite",title:"Using SQLite with Graphback",sidebar_label:"SQLite"},c={unversionedId:"databases/sqlite",id:"version-0.16.x/databases/sqlite",isDocsHomePage:!1,title:"Using SQLite with Graphback",description:"SQLite is an open-source, zero-configuration, self-contained, stand-alone, transaction relational database engine designed to be embedded into an application. Graphback Knex Provider package provides instant integration to your SQLite database, giving you implementation of the CRUD API.",source:"@site/versioned_docs/version-0.16.x/databases/sqlite.md",slug:"/databases/sqlite",permalink:"/docs/databases/sqlite",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/databases/sqlite.md",version:"0.16.x",sidebar_label:"SQLite",sidebar:"version-0.16.x/docs",previous:{title:"Using PostgreSQL with Graphback",permalink:"/docs/databases/postgres"},next:{title:"Subscriptions",permalink:"/docs/subscriptions/intro"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Configuring the Database",id:"configuring-the-database",children:[]},{value:"Using Knex Provider",id:"using-knex-provider",children:[]}],b={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.sqlite.org/index.html"}),"SQLite")," is an open-source, zero-configuration, self-contained, stand-alone, transaction relational database engine designed to be embedded into an application. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@graphback/runtime-knex"}),"Graphback Knex Provider")," package provides instant integration to your SQLite database, giving you implementation of the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/crud/overview"}),"CRUD API"),". "),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"}," SQLite is a good choice for testing or development purposes. We do not recommend using it in production environment. For a production setup, you can use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/databases/postgres"}),"PostgreSQL"),". "))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Install with npm:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @graphback/runtime-knex knex\n")),Object(i.b)("p",null,"Install with yarn:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @graphback/runtime-knex knex\n")),Object(i.b)("h2",{id:"configuring-the-database"},"Configuring the Database"),Object(i.b)("p",null,"The following code shows how a SQLite database can be configured."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import Knex from \'knex\';\n\nconst dbConfig = {\n    client: "sqlite3",\n    connection: {\n      filename: "./users.sqlite"\n    }\n};\n\nconst db = Knex(dbConfig);\n')),Object(i.b)("p",null,"Visit ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://knexjs.org/#Installation-client"}),"Knex Connection Options")," to learn more about the different connection options. "),Object(i.b)("h2",{id:"using-knex-provider"},"Using Knex Provider"),Object(i.b)("p",null,"The provider exposes a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider"}),Object(i.b)("inlineCode",{parentName:"a"},"SQLiteKnexDBDataProvider"))," API, which can be used to create a SQLite data providers for each of your data models. "),Object(i.b)("p",null,"The code below shows how to create a data provider creator for a SQLite database and how to use it in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/graphback/modules/_buildgraphbackapi_"}),Object(i.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI")),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import Knex from \'knex\';\nimport { migrateDB } from \'graphql-migrations\';\nimport { ModelDefinition } from \'@graphback/core\';\nimport { SQLiteKnexDBDataProvider } from \'@graphback/runtime-knex\';\n\n// highlight-start\n// database configuration\nconst dbConfig = {\n    client: "sqlite3",\n    connection: {\n      filename: "./users.sqlite"\n    }\n};\n\n// create the connection to the database\nconst db = Knex(dbConfig);\n\n// the business model\nconst userModel = `\n """\n @model\n """\n type User {\n     id: ID!\n     username: String!\n }\n`;\n\n// create the user table in database \nmigrateDB(dbConfig, userModel, { }).then(() => {\n  console.log("Migrated database");\n});\n\n// create the SQLite data provider\nconst dataProviderCreator = (model: ModelDefinition) => new SQLiteKnexDBDataProvider(model, db);\n\n// highlight-end\n\n// Use the dataProvider in buildGraphbackAPI\nconst { resolvers, services, contextCreator } = buildGraphbackAPI(userModel, { dataProviderCreator });\n')),Object(i.b)("p",null,"The highlighted code does the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Define connection configuration to the database."),Object(i.b)("li",{parentName:"ul"},"Create a connection to SQLite database using Knex."),Object(i.b)("li",{parentName:"ul"},"Define the user model."),Object(i.b)("li",{parentName:"ul"},"Perform the migrations using ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/graphql-migrations/intro"}),"GraphQL Migrations")," to create the ",Object(i.b)("inlineCode",{parentName:"li"},"user")," table."),Object(i.b)("li",{parentName:"ul"},"And finally, create a data provider creator which will be applied to our model, using the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider"}),Object(i.b)("inlineCode",{parentName:"a"},"SQLiteKnexDBDataProvider"))," API. ")),Object(i.b)("p",null,"The rest of the code uses ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/graphback/modules/_buildgraphbackapi_"}),Object(i.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI"))," to create Graphback CRUD API based on the defined ",Object(i.b)("inlineCode",{parentName:"p"},"userModel")," model."),Object(i.b)("p",null,"Visit ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/model/datamodel"}),"Data Models")," to learn more about how to design your business models."))}l.isMDXComponent=!0}}]);