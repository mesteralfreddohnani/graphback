/*! For license information please see fc86c1ff.322994ba.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1014],{1070:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(6),o=(t(1086),t(1085)),i={id:"db-design",title:"Database Design",sidebar_label:"Database Design"},l={unversionedId:"graphql-migrations/db-design",id:"graphql-migrations/db-design",isDocsHomePage:!1,title:"Database Design",description:"GraphQL Migrations operates on business models defined in your schema: These are GraphQL types decorated with a @model annotation.",source:"@site/../docs/graphql-migrations/db-design.md",slug:"/graphql-migrations/db-design",permalink:"/docs/next/graphql-migrations/db-design",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/graphql-migrations/db-design.md",version:"current",sidebar_label:"Database Design",sidebar:"docs",previous:{title:"GraphQL Migrations",permalink:"/docs/next/graphql-migrations/intro"},next:{title:"API Reference",permalink:"/docs/next/graphql-migrations/api"}},c=[{value:"Primary key",id:"primary-key",children:[]},{value:"Nullability",id:"nullability",children:[]},{value:"Foreign keys",id:"foreign-keys",children:[{value:"OneToOne",id:"onetoone",children:[]},{value:"OneToMany",id:"onetomany",children:[]},{value:"ManyToMany",id:"manytomany",children:[]}]},{value:"Default field value",id:"default-field-value",children:[]},{value:"Custom column type",id:"custom-column-type",children:[]},{value:"Column length",id:"column-length",children:[]},{value:"Rename",id:"rename",children:[]},{value:"Ignore a field",id:"ignore-a-field",children:[]},{value:"Column name",id:"column-name",children:[]},{value:"Index",id:"index",children:[{value:"Arguments",id:"arguments",children:[]}]},{value:"Unique",id:"unique",children:[{value:"Arguments",id:"arguments-1",children:[]}]}],b={rightToc:c};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GraphQL Migrations operates on business models defined in your schema: These are GraphQL types decorated with a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../model/datamodel#model"}),Object(o.b)("inlineCode",{parentName:"a"},"@model"))," annotation. "),Object(o.b)("h2",{id:"primary-key"},"Primary key"),Object(o.b)("p",null,"Each type must have a primary key. You can specify one are one using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../model/annotations#id"}),Object(o.b)("inlineCode",{parentName:"a"},"@id"))," annotation on a field."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  """\n  custom primary key on a note\n  @id  \n  """\n  reference: String!\n  \n  title: String!\n}\n')),Object(o.b)("p",null,"Alternatively, you can use auto-incremented primary keys by having an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," field which mus be of type ",Object(o.b)("inlineCode",{parentName:"p"},"ID"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Note {\n  id: ID!\n  title: String!\n}\n")),Object(o.b)("h2",{id:"nullability"},"Nullability"),Object(o.b)("p",null,"GraphQL Migrations packages automatically adds a ",Object(o.b)("inlineCode",{parentName:"p"},"NOT NULL")," constraint to all non null fields defined in the business model.\nAll primary keys are not nullable, irrespective of whether they are defined as non null or not. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  """\n  custom primary key on a note\n  @id  \n  """\n  reference: String!\n  \n  title: String!\n}\n')),Object(o.b)("p",null,"The above model definition will result in the following table being created: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'\\d note\n              Table "public.note"\n  Column   |          Type          | Modifiers \n-----------+------------------------+-----------\n reference | character varying(255) | not null\n title     | character varying(255) | not null\nIndexes:\n    "note_pkey" PRIMARY KEY, btree (reference)\n')),Object(o.b)("h2",{id:"foreign-keys"},"Foreign keys"),Object(o.b)("p",null,"GraphQL Migrations will automatically create and index foreign keys once it sees relationships between business models."),Object(o.b)("h3",{id:"onetoone"},"OneToOne"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Profile {\n  id: ID!\n  """\n  @oneToOne\n  """\n  user: User!\n}\n\n"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String\n}\n')),Object(o.b)("p",null,"This creates a relationship via a ",Object(o.b)("inlineCode",{parentName:"p"},"userId")," column in the ",Object(o.b)("inlineCode",{parentName:"p"},"profile")," table. You can customize the key tracking the relationship with the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," annotation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Profile {\n  id: ID!\n  """\n  @oneToOne(key: \'user_id\')\n  """\n  user: User!\n}\n\n"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String\n}\n')),Object(o.b)("p",null,"This maps ",Object(o.b)("inlineCode",{parentName:"p"},"Profile.user")," to ",Object(o.b)("inlineCode",{parentName:"p"},"profile.user_id")," in the database."),Object(o.b)("h3",{id:"onetomany"},"OneToMany"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  title: String!\n  """\n  @oneToMany(field: \'note\')\n  """\n  comments: [Comment]\n}\n')),Object(o.b)("p",null,"This specifies a relationship between ",Object(o.b)("inlineCode",{parentName:"p"},"Note.comments")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Comment.note")," and maps to ",Object(o.b)("inlineCode",{parentName:"p"},"comment.noteId")," in the database. "),Object(o.b)("p",null,"With the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," annotation you can customise the database column to map to."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  title: String!\n  """\n  @oneToMany(field: \'note\', key: \'note_id\')\n  """\n  comments: [Comment]\n}\n')),Object(o.b)("p",null,"This maps to ",Object(o.b)("inlineCode",{parentName:"p"},"comment.note_id")," in the database."),Object(o.b)("h3",{id:"manytomany"},"ManyToMany"),Object(o.b)("p",null,"To create a many-to-many relationship, add a model for your join table and use two one-to-many relationship mappings to create the relationship."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" \n@model \n"""\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  """\n  @oneToMany(field: \'note\')\n  """\n  authors: [NoteAuthor]\n}\n\n"""\n@model\n"""\ntype NoteAuthor {\n  id: ID!\n}\n\n"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String\n  """\n  @oneToMany(field: \'author\')\n  """\n  notes: [NoteAuthor]\n}\n')),Object(o.b)("p",null,"Let's see all of these in an example code below ran agains the PostgreSQL database:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import { migrateDB } from \'graphql-migrations\';\n\nconst schemaText = ```\n""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  """\n  @oneToMany(field: \'note\')\n  """\n  comments: [Comment]!\n}\n\n""" @model """\ntype Comment {\n  """\n  @id\n  """\n  text: String\n  description: String\n}\n```;\n\nconst dbConfig = {\n    client: process.env.DB_CLIENT,\n    connection: {\n      user: process.env.DB_USER,\n      password: process.env.DB_PASSWORD,\n      database: process.env.DB_DATABASE,\n      host: "localhost",\n      port: 5432\n    },\n    pool: { min: 5, max: 30 }\n};\n\nmigrateDB(dbConfig, schemaText, {\n  // Additional options\n}).then((ops) => {\n    console.log(ops);\n});\n...\n')),Object(o.b)("p",null,"This is a classic business model containing two types: ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Comment"),", having a ",Object(o.b)("inlineCode",{parentName:"p"},"oneToMany")," relationship between them.\nFrom the relationship definition we can deduce that a ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," can have zero or many comments, inversely a ",Object(o.b)("inlineCode",{parentName:"p"},"Comment")," can be about\none ",Object(o.b)("inlineCode",{parentName:"p"},"Note"),"."),Object(o.b)("p",null,"Upon successfuly completion, the above migration will create the following layout in your database schema."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"              List of relations\n Schema |    Name     |   Type   |   Owner    \n--------+-------------+----------+------------\n public | comment     | table    | postgresql\n public | note        | table    | postgresql\n public | note_id_seq | sequence | postgresql\n(3 rows)\n")),Object(o.b)("p",null,"We can see notice that we have the ",Object(o.b)("inlineCode",{parentName:"p"},"note_id_seq")," but not ",Object(o.b)("inlineCode",{parentName:"p"},"comment_id_seq"),", this is because we are using auto-incremented\nprimary key for the ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," model and a custom primary key for the ",Object(o.b)("inlineCode",{parentName:"p"},"Comment")," model. We will see how these looks like in details\nfor each model below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'\\d comment\n              Table "public.comment"\n   Column    |          Type          | Modifiers \n-------------+------------------------+-----------\n text        | character varying(255) | not null\n description | character varying(255) | \n noteId      | integer                | \nIndexes:\n    "comment_pkey" PRIMARY KEY, btree (text)\nForeign-key constraints:\n    "comment_noteid_foreign" FOREIGN KEY ("noteId") REFERENCES note(id)\n')),Object(o.b)("p",null,"Table details for the ",Object(o.b)("inlineCode",{parentName:"p"},"Comment")," type shows that we have a ",Object(o.b)("inlineCode",{parentName:"p"},"text")," as the primary key and ",Object(o.b)("inlineCode",{parentName:"p"},"noteId")," as a foreign key on the ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," type because of the relationship we defined. "),Object(o.b)("p",null,"Here is how the ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," table looks like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'\\d note\n                                   Table "public.note"\n   Column    |          Type          |                     Modifiers                     \n-------------+------------------------+---------------------------------------------------\n title       | character varying(255) | not null\n description | character varying(255) | \n id          | integer                | not null default nextval(\'note_id_seq\'::regclass)\nIndexes:\n    "note_pkey" PRIMARY KEY, btree (id)\nReferenced by:\n    TABLE "comment" CONSTRAINT "comment_noteid_foreign" FOREIGN KEY ("noteId") REFERENCES note(id)\n')),Object(o.b)("p",null,"GraphQL Migrations created the auto-incremented primary key by inferring the usage of ",Object(o.b)("inlineCode",{parentName:"p"},"id: ID!")," field on the ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," model.\nAdditionally we can see that this primary key is referenced by the ",Object(o.b)("inlineCode",{parentName:"p"},"comment")," table because of the relationship."),Object(o.b)("h2",{id:"default-field-value"},"Default field value"),Object(o.b)("p",null,"You can specify a default value using the ",Object(o.b)("inlineCode",{parentName:"p"},"@default")," field annotation as shown below."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  id: ID!\n  title: String!\n  """\n  Define a default value\n  @default(value: false)\n  """\n  complete: Boolean\n}\n')),Object(o.b)("h2",{id:"custom-column-type"},"Custom column type"),Object(o.b)("p",null,"You can specify a custom type usig the ",Object(o.b)("inlineCode",{parentName:"p"},"@db")," field annotation as shown below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  id: ID!\n  """\n  Define a custom json type\n  @db(type: \'json\')\n  """\n  comments: [Comment]\n}\n\ntype Comment {\n  text: String\n  description: String\n}\n')),Object(o.b)("h2",{id:"column-length"},"Column length"),Object(o.b)("p",null,"By default string columns will be created as ",Object(o.b)("inlineCode",{parentName:"p"},"varchar")," with a column length of ",Object(o.b)("inlineCode",{parentName:"p"},"255"),".\nThis can be configured to any length using the ",Object(o.b)("inlineCode",{parentName:"p"},"@db")," field annnotation and the ",Object(o.b)("inlineCode",{parentName:"p"},"length")," argument:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  id: ID!\n  """\n  Define custom column length\n  @db(length: 100)\n  """\n  title: String!\n}\n')),Object(o.b)("h2",{id:"rename"},"Rename"),Object(o.b)("p",null,"Table or columns can be renamed using the ",Object(o.b)("inlineCode",{parentName:"p"},"@db(oldNames: ['old'])")," annotation as shown below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@db(oldNames: [\'task\'])\n@model\n"""\ntype Note {\n  id: ID!\n  """\n  @db(oldNames: [\'text\'])\n  """\n  title: String!\n}\n')),Object(o.b)("p",null,"This will rename the ",Object(o.b)("inlineCode",{parentName:"p"},"text")," to ",Object(o.b)("inlineCode",{parentName:"p"},"title")," and the table name to ",Object(o.b)("inlineCode",{parentName:"p"},"note")," without data loss. "),Object(o.b)("h2",{id:"ignore-a-field"},"Ignore a field"),Object(o.b)("p",null,"Sometimes our business model can contain more fields and some of these fields may only be there for representation purposes.\nWe can safely ignore generating columns for these fields using the ",Object(o.b)("inlineCode",{parentName:"p"},"@transient")," annotation on the corresponding field. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  id: ID!\n  """\n  Define custom column length\n  @transient\n  """\n  title: String!\n}\n')),Object(o.b)("h2",{id:"column-name"},"Column name"),Object(o.b)("p",null,"When working with database migration library it is possible to change individual database columns."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  id: ID!\n  """\n  @db(name: \'note_title\')\n  """\n  title: String!\n}\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This annotation is not supported by Graphback CRUD.\nWhen using custom name in database we need to map it directly inside resolver or db layer."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"      // In your data provider\n      data.title = data['note_title']\n      return data;\n    }\n")))),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@index")," annotation can be used to create an index on a specific field. This annotation optionally takes the following arguments "),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"name")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"The name of the created index. If the name argument is left out, GraphQL Migrations will create one for you using the ",Object(o.b)("inlineCode",{parentName:"td"},"<tablename>_<columnName>_index")," format")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"type")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"The type of the index e.g ",Object(o.b)("inlineCode",{parentName:"td"},"btree"),", ",Object(o.b)("inlineCode",{parentName:"td"},"hash"),", ",Object(o.b)("inlineCode",{parentName:"td"},"brin")," etc. Defaults to ",Object(o.b)("inlineCode",{parentName:"td"},"btree"))))),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Comment {\n  id: ID!\n  """\n  @index(name: "title-index")\n  """\n  text: String!\n  """\n  @index\n  """\n  description: String\n}\n')),Object(o.b)("p",null,"The above model will result in the following indexes being created"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'\\d comment\n                                   Table "public.comment"\n   Column    |          Type          |                       Modifiers                       \n-------------+------------------------+-------------------------------------------------------\n text        | character varying(255) | not null\n description | character varying(255) | \n id          | integer                | not null default nextval(\'comment_id_seq\'::regclass)\nIndexes:\n    "comment_pkey" PRIMARY KEY, btree (id)\n    "comment_description_index" btree (description)\n    "title-index" btree (text)\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Use the same index name in order to create compound index on two or more columns.  "))),Object(o.b)("h2",{id:"unique"},"Unique"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@unique")," annotation can be used to create a unique constraint on a specific field. This annotation optionally takes the following arguments"),Object(o.b)("h3",{id:"arguments-1"},"Arguments"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"name")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"The name of the created unique constraint. If the name argument is left out, GraphQL Migrations will create one for you using the ",Object(o.b)("inlineCode",{parentName:"td"},"<tablename>_<columnName>_unique")," format")))),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Comment {\n  id: ID!\n  """\n  @unique\n  """\n  text: String\n}\n')),Object(o.b)("p",null,"The above model will result in the following constraint being created"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'\\d comment\n                                   Table "public.comment"\n   Column    |          Type          |                       Modifiers                       \n-------------+------------------------+-------------------------------------------------------\n text        | character varying(255) | \n id          | integer                | not null default nextval(\'comment_id_seq\'::regclass)\nIndexes:\n    "comment_pkey" PRIMARY KEY, btree (id)\n    "comment_text_unique" UNIQUE CONSTRAINT, btree (text)\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Use the same unique constraint ",Object(o.b)("inlineCode",{parentName:"p"},"name")," in order to create composite unique columns.  "))))}s.isMDXComponent=!0},1085:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),s=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return t?r.a.createElement(m,l(l({ref:n},b),{},{components:t})):r.a.createElement(m,l({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=t[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1086:function(e,n,t){"use strict";e.exports=t(1087)},1087:function(e,n,t){"use strict";var a=t(1088),r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,l=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,b=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,f=r?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function j(e,n,t){this.props=e,this.context=n,this.refs=y,this.updater=t||g}function N(){}function v(e,n,t){this.props=e,this.context=n,this.refs=y,this.updater=t||g}j.prototype.isReactComponent={},j.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(O(85));this.updater.enqueueSetState(this,e,n,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=j.prototype;var w=v.prototype=new N;w.constructor=v,a(w,j.prototype),w.isPureReactComponent=!0;var C={current:null},x=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,t){var a,r={},i=null,l=null;if(null!=n)for(a in void 0!==n.ref&&(l=n.ref),void 0!==n.key&&(i=""+n.key),n)x.call(n,a)&&!k.hasOwnProperty(a)&&(r[a]=n[a]);var c=arguments.length-2;if(1===c)r.children=t;else if(1<c){for(var b=Array(c),s=0;s<c;s++)b[s]=arguments[s+2];r.children=b}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===r[a]&&(r[a]=c[a]);return{$$typeof:o,type:e,key:i,ref:l,props:r,_owner:C.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g,I=[];function q(e,n,t,a){if(I.length){var r=I.pop();return r.result=e,r.keyPrefix=n,r.func=t,r.context=a,r.count=0,r}return{result:e,keyPrefix:n,func:t,context:a,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function E(e,n,t,a){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var l=!1;if(null===e)l=!0;else switch(r){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return t(a,e,""===n?"."+P(e,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var b=n+P(r=e[c],c);l+=E(r,b,t,a)}else if(null===e||"object"!=typeof e?b=null:b="function"==typeof(b=h&&e[h]||e["@@iterator"])?b:null,"function"==typeof b)for(e=b.call(e),c=0;!(r=e.next()).done;)l+=E(r=r.value,b=n+P(r,c++),t,a);else if("object"===r)throw t=""+e,Error(O(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return l}function R(e,n,t){return null==e?0:E(e,"",n,t)}function P(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return n[e]}))}(e.key):n.toString(36)}function M(e,n){e.func.call(e.context,n,e.count++)}function A(e,n,t){var a=e.result,r=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?L(e,a,t,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+t)),a.push(e))}function L(e,n,t,a,r){var o="";null!=t&&(o=(""+t).replace(_,"$&/")+"/"),R(e,A,n=q(n,o,a,r)),D(n)}var U={current:null};function $(){var e=U.current;if(null===e)throw Error(O(321));return e}var Y={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:a};n.Children={map:function(e,n,t){if(null==e)return e;var a=[];return L(e,a,null,n,t),a},forEach:function(e,n,t){if(null==e)return e;R(e,M,n=q(null,null,n,t)),D(n)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var n=[];return L(e,n,null,(function(e){return e})),n},only:function(e){if(!T(e))throw Error(O(143));return e}},n.Component=j,n.Fragment=l,n.Profiler=b,n.PureComponent=v,n.StrictMode=c,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,n.cloneElement=function(e,n,t){if(null==e)throw Error(O(267,e));var r=a({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(l=n.ref,c=C.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var b=e.type.defaultProps;for(s in n)x.call(n,s)&&!k.hasOwnProperty(s)&&(r[s]=void 0===n[s]&&void 0!==b?b[s]:n[s])}var s=arguments.length-2;if(1===s)r.children=t;else if(1<s){b=Array(s);for(var p=0;p<s;p++)b[p]=arguments[p+2];r.children=b}return{$$typeof:o,type:e.type,key:i,ref:l,props:r,_owner:c}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:p,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var n=S.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=T,n.lazy=function(e){return{$$typeof:f,_ctor:e,_status:-1,_result:null}},n.memo=function(e,n){return{$$typeof:m,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return $().useCallback(e,n)},n.useContext=function(e,n){return $().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return $().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return $().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return $().useLayoutEffect(e,n)},n.useMemo=function(e,n){return $().useMemo(e,n)},n.useReducer=function(e,n,t){return $().useReducer(e,n,t)},n.useRef=function(e){return $().useRef(e)},n.useState=function(e){return $().useState(e)},n.version="16.13.1"},1088:function(e,n,t){"use strict";var a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,n){for(var t,l,c=i(e),b=1;b<arguments.length;b++){for(var s in t=Object(arguments[b]))r.call(t,s)&&(c[s]=t[s]);if(a){l=a(t);for(var p=0;p<l.length;p++)o.call(t,l[p])&&(c[l[p]]=t[l[p]])}}return c}}}]);