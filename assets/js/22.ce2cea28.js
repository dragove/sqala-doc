(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{304:function(a,s,t){"use strict";t.r(s);var l=t(14),e=Object(l.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"sqala简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sqala简介"}},[a._v("#")]),a._v(" sqala简介")]),a._v(" "),t("p",[a._v("sqala是一个基于Scala 3.6版本的SQL查询库，得名于Scala和SQL的结合，sqala是一个轻量级的查询库，除Scala和Java官方库外没有第三方依赖。")]),a._v(" "),t("p",[a._v("得益于Scala3强大的类型系统，sqala支持类型安全的查询构建，可以通过Scala3代码以面向对象的方式安全构建复杂查询（支持连接、子查询、与内存中的集合互操作、递归查询和复杂投影操作）。并可以使用JDBC安全地将查询结果反序列化回对象。")]),a._v(" "),t("p",[a._v("sqala支持将数据对象转换为UPDATE、INSERT、DELETE等操作，而无需编写样板代码。")]),a._v(" "),t("p",[a._v("另外，sqala还内置了对于数据中台场景的支持，基于sqala提供的SQL AST（抽象语法树）与SQL Parser，可以根据运行时的信息灵活地动态构造复杂查询，为动态建立数据报表等场景提供坚实的基础，而无需使用不安全且编码复杂的字符串拼接。")]),a._v(" "),t("p",[a._v("sqala支持多种数据库方言的生成，包括：MySQL、PostgreSQL、Oracle、MSSQL、Sqlite、DB2等，只需要传入不同的数据库类型，即可将同一个查询进行方言转换（其中MySQL和PostgreSQL为第一优先级支持）。")]),a._v(" "),t("h1",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[a._v("#")]),a._v(" 注意事项")]),a._v(" "),t("p",[t("strong",[a._v("1. 由于sqala目前使用了Scala3的实验性功能，且没有基于Scala3 LTS版本构建，在Scala3发布下一个LTS版本之前，应用在生产环境需谨慎。")])]),a._v(" "),t("p",[t("strong",[a._v("2. 请确保Scala版本在3.6.2及以上。并开启实验性特性编译选项"),t("code",[a._v("-experimental")]),a._v("。")])]),a._v(" "),t("p",[t("strong",[a._v("3. 尽量使用Scala官方的"),t("code",[a._v("metals")]),a._v("插件配合VSCode、Vim等工具使用，IDEA系列目前无法获得编写提示，也无法正确显示查询返回的数据类型。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);