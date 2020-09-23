(window.webpackJsonp=window.webpackJsonp||[]).push([[748],{1085:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,d=s["".concat(l,".").concat(u)]||s[u]||m[u]||i;return n?r.a.createElement(d,o(o({ref:t},b),{},{components:n})):r.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},802:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(1085)),l={id:"api",title:"API Reference",sidebar_label:"API Reference"},o={unversionedId:"graphql-migrations/api",id:"version-0.14.x/graphql-migrations/api",isDocsHomePage:!1,title:"API Reference",description:"The migrateDB method takes the three arguments, listed below.",source:"@site/versioned_docs/version-0.14.x/graphql-migrations/api-reference.md",slug:"/graphql-migrations/api",permalink:"/docs/0.14.x/graphql-migrations/api",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.14.x/graphql-migrations/api-reference.md",version:"0.14.x",sidebar_label:"API Reference",sidebar:"version-0.14.x/docs",previous:{title:"Database Design",permalink:"/docs/0.14.x/graphql-migrations/db-design"},next:{title:"Custom logic with Plugins",permalink:"/docs/0.14.x/graphql-migrations/plugins"}},c=[{value:"Table and Column Comments",id:"table-and-column-comments",children:[]},{value:"Scalar Mapping",id:"scalar-mapping",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"migrateDB")," method takes the three arguments, listed below."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config"),": ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://knexjs.org/#Installation-client"}),"Knex")," database configuration options."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"schemaText"),": GraphQL schema text."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options"),": ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dbSchemaName")," (default: ",Object(i.b)("inlineCode",{parentName:"li"},"'public'"),"): table schema: ",Object(i.b)("inlineCode",{parentName:"li"},"<schemaName>.<tableName>"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dbTablePrefix")," (default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"): table name prefix: ",Object(i.b)("inlineCode",{parentName:"li"},"<prefix><tableName>"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dbColumnPrefix")," (default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"): column name prefix: ",Object(i.b)("inlineCode",{parentName:"li"},"<prefix><columnName>"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#table-and-column-comments"}),Object(i.b)("inlineCode",{parentName:"a"},"updateComments"))," (default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"): by default, ",Object(i.b)("inlineCode",{parentName:"li"},"migrateDB")," will not create or update comments on table and columns."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#scalar-mapping"}),Object(i.b)("inlineCode",{parentName:"a"},"scalarMap"))," (default: ",Object(i.b)("inlineCode",{parentName:"li"},"undefined"),"): Custom Scalar mapping"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mapListToJson")," (default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"): Map scalar/enum lists to json column type by default."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.14.x/graphql-migrations/plugins"}),Object(i.b)("inlineCode",{parentName:"a"},"plugins"))," (default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"): List of ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/aerogear/graphback/blob/master/packages/graphql-migrations/src/plugin/MigratePlugin.ts"}),"graphql-migrations plugins")," which describes queries that can be executed during migrations. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"debug")," (default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"): displays debugging informations and SQL queries."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"removeDirectivesFromSchema"),": (default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"): Strips all directives from schema before processing."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.14.x/graphql-migrations/filters"}),Object(i.b)("inlineCode",{parentName:"a"},"operationFilter")),": Filter out database operations that we don't want.")))),Object(i.b)("h2",{id:"table-and-column-comments"},"Table and Column Comments"),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"updateComments")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," it will automatically create/update table and column comments.\nTable / column comments are type or field description parsed from the model schema.\nThe parsing logic takes care of stripping off all annotations leaving only business related comments.    "),Object(i.b)("p",null,"The below model:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\nNote business model table comment.\n@model\n"""\ntype Note {\n  id: ID!\n  """\n  Note title.\n  """\n  title: String!\n}\n')),Object(i.b)("p",null,"Execution with the ",Object(i.b)("inlineCode",{parentName:"p"},"updateComments")," options set to true, as shown below"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"....\nmigrateDB(dbConfig, schemaText, {\n  updateComments: true\n}).then((ops) => {\n    console.log(ops);\n});\n...\n")),Object(i.b)("p",null,"Will create / update the ",Object(i.b)("inlineCode",{parentName:"p"},"note")," table comments as shown below: "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"\\d+\n                                       List of relations\n Schema |    Name     |   Type   |   Owner    |    Size    |            Description             \n--------+-------------+----------+------------+------------+------------------------------------\n public | note        | table    | postgresql | 8192 bytes | Note business model table comment.\n public | note_id_seq | sequence | postgresql | 8192 bytes | \n(2 rows)\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'\\d+ note\n                                                     Table "public.note"\n Column |          Type          |                     Modifiers                     | Storage  | Stats target | Description \n--------+------------------------+---------------------------------------------------+----------+--------------+-------------\n title  | character varying(255) | not null                                          | extended |              | Note title.\n id     | integer                | not null default nextval(\'note_id_seq\'::regclass) | plain    |              | \nIndexes:\n    "note_pkey" PRIMARY KEY, btree (id)\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NOTE: This options may not be supported by some database. ")),Object(i.b)("h2",{id:"scalar-mapping"},"Scalar Mapping"),Object(i.b)("p",null,"This option is a function used to specify custom Scalar mapping.\nIt takes three arguments ",Object(i.b)("inlineCode",{parentName:"p"},"(field: GraphQLField, fieldType: GraphQLScalarType, dbAnnotation: any)"),", depending on the field type you could return the ",Object(i.b)("inlineCode",{parentName:"p"},"TableColumnTypeDescriptor"),": "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"interface TableColumnTypeDescriptor {\n  /**\n   * Knex column builder function name.\n   */\n  type: TableColumnType | string\n  /**\n   * Builder function arguments.\n   */\n  args: any[]\n}\n")),Object(i.b)("p",null,"For example, if you want a custom ",Object(i.b)("inlineCode",{parentName:"p"},"CustomDate")," scalar to be have a ",Object(i.b)("inlineCode",{parentName:"p"},"date")," type in the database:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { migrateDB } from 'graphql-migrations';\n\nconst schemaText = ```\n\"\"\" @model \"\"\"\ntype Note {\n  id: ID!\n  title: String!\n  createdAt: CustomDate\n}\n\nscalar CustomDate\n```;\n\nconst dbConfig = {\n   // Knex.js db configuration\n};\n\nmigrateDB(dbConfig, schemaText, {\n  scalarMap: (\n  field: GraphQLField<any, any>,\n  scalarType: GraphQLScalarType,\n  annotations: any,\n): TableColumnTypeDescriptor | null => {\n\n  // custom date converted to date type\n  if (scalarType.name === 'CustomDate') {\n    return {\n      type: 'date',\n      args: []\n    }\n  }\n\n  return undefined\n} \n}).then((ops) => {\n    console.log(ops);\n});\n")),Object(i.b)("p",null,"A good example of this function is the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/blob/master/packages/graphql-migrations/src/abstract/getColumnTypeFromScalar.ts#L18-L129"}),"default scalar type to database column")," function, that Graphback uses to convert scalar types based on certain creteria."))}p.isMDXComponent=!0}}]);