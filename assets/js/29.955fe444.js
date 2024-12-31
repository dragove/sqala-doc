(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{307:function(t,e,a){"use strict";a.r(e);var n=a(14),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"方法名构建查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法名构建查询"}},[t._v("#")]),t._v(" 方法名构建查询")]),t._v(" "),a("p",[t._v("现代软件的查询都倾向于简单，简单的单表查询有助于获得更高的性能和更好的并发能力，这样的查询如果使用sqala的查询构造器，会稍显繁琐，因此，sqala效仿Spring Data JPA，支持使用方法名自动生成查询，但是与前者不同的是，我们无需预先定义Repository接口，而是借助Scala的"),a("code",[t._v("Dynaimc")]),t._v("能力来动态调用方法，并且，sqala支持从方法名中自动推断出参数的类型，因此它也是类型安全的。")]),t._v(" "),a("p",[t._v("这样的方法名查询由"),a("code",[t._v("namedQuery")]),t._v("构建：")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("sqala"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compiletime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" namedQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tablePeople"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findByIdAndName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"小黑"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("sqala从上面的"),a("code",[t._v("findByIdAndName")]),t._v("方法名中推断出参数类型为"),a("code",[t._v("(Int, String)")]),t._v("，所以如果参数类型不符合要求，无法通过编译：")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编译错误")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" namedQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tablePeople"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findByIdAndName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("由于推断出的参数是元组类型，因此单参数的情况下，我们需要传入一个一元组：")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" namedQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tablePeople"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findById"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EmptyTuple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("以下是关键字列表、对应的SQL运算符以及推断出来的参数类型（使用"),a("code",[t._v("col")]),t._v("指代实际的字段名，参数类型会依次拼接，最终生成一个元组类型）：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("关键字")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("运算符")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("参数类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("findBy")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("And")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("AND")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Or")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("OR")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Col")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("=")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("col.type")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColEquals")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("=")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("col.type")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColIs")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("=")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("col.type")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColGreaterThan")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v(">")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("col.type")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColGreaterThanEqual")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v(">=")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("col.type")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColLessThan")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("<")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("col.type")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColLessThanEqual")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("<=")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("col.type")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColNot")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("<>")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("col.type")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColIn")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("IN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("List[col.type]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColNotIn")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("NOT IN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("List[col.type]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColLike")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("LIKE '%?%'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColNotLike")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("NOT LIKE '%?%'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColStartingWith")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("LIKE '?%'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColEndingWith")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("LIKE '%?'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColBetween")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BETWEEN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("(col.type, col.type)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColNotBetween")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("NOT BETWEEN")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("(col.type, col.type)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColIsNull")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("IS NULL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ColIsNotNull")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("IS NOT NULL")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("p",[a("code",[t._v("namedQuery")]),t._v("支持使用"),a("code",[t._v("OrderBy")]),t._v("来开启排序，方法名中需要在字段名后面添加"),a("code",[t._v("Asc")]),t._v("或"),a("code",[t._v("Desc")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" namedQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tablePeople"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findByIdOrderByIdAscNameDesc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EmptyTuple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);