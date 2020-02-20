(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{2220:function(t,e,a){"use strict";a.r(e);var s=a(0),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mysql-run-custom-sql-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-run-custom-sql-action"}},[t._v("#")]),t._v(" MySQL - Run custom SQL action")]),t._v(" "),s("h2",{attrs:{id:"run-custom-sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-custom-sql"}},[t._v("#")]),t._v(" Run custom SQL")]),t._v(" "),s("p",[t._v("This action lets you send a SQL string to the MySQL instance to be executed. It can be used to execute Data Manipulation Language (DML) statements like "),s("code",[t._v("INSERT")]),t._v(", "),s("code",[t._v("UPDATE")]),t._v(", "),s("code",[t._v("SELECT")]),t._v(" and "),s("code",[t._v("DELETE")]),t._v(", as well as Data Definition Language (DDL) commands, like "),s("code",[t._v("CREATE")]),t._v(", "),s("code",[t._v("ALTER")]),t._v(" and "),s("code",[t._v("DROP")]),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("This action requires a connection using OPA version 2.4.3 or newer.")])]),t._v(" "),s("p",[s("DocImage",{attrs:{src:a(679),alt:"Run custom SQL action",width:"1000",height:"987"}}),t._v(" "),s("em",[t._v("Run custom SQL action")])],1),t._v(" "),s("h3",{attrs:{id:"input-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("SQL")]),t._v(" "),s("td",[s("p",[s("b",[t._v("This field is required")]),t._v(". Provide a valid SQL string to be executed. This SQL string will be executed in your MySQL instance.")]),t._v(" "),s("p",[t._v("If multiple SQL statements are provided, all of them will be executed. However, only results from the last statement will be returned. Make sure each statement is separated by a "),s("code",[t._v(";")]),t._v(" character.")]),t._v(" "),s("p",[t._v("You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes ("),s("code",[t._v("''")]),t._v(").")])])]),t._v(" "),s("tr",[s("td",[t._v("Output fields")]),t._v(" "),s("td",[s("p",[t._v("Use this input to describe the columns that you are expecting from your SQL statement.")]),t._v(" "),s("p",[t._v("If you do not expect any return values or do not need any, you may ignore this input field.")])])])])]),t._v(" "),s("h3",{attrs:{id:"output-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Rows")]),t._v(" "),s("td",[s("p",[t._v("List of rows returned from the SQL execution. The fields in this list are defined by the "),s("b",[t._v("Output fields")]),t._v(" input field.")]),t._v(" "),s("p",[t._v("If left blank, this row will be available in the datatree as an array datapill.")])])]),t._v(" "),s("tr",[s("td",[t._v("Rows affected")]),t._v(" "),s("td",[s("p",[t._v("This is an integer value indicating the number of rows inserted/updated/deleted from the SQL string.")]),t._v(" "),s("p",[t._v("When executing "),s("code",[t._v("SELECT")]),t._v(" statements, this will return "),s("code",[t._v("nil")]),t._v(".")]),t._v(" "),s("p",[t._v("When executing a DDL (for example, creating a table), the value "),s("code",[t._v("0")]),t._v(" will be returned.")])])])])]),t._v(" "),s("h3",{attrs:{id:"limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[t._v("#")]),t._v(" Limitations")]),t._v(" "),s("p",[t._v("There is a size limit of "),s("code",[t._v("1000")]),t._v(" rows when your custom SQL statement returns data.")])])}),[],!1,null,null,null);e.default=i.exports},679:function(t,e,a){t.exports=a.p+"assets/img/run_sql.3371f907.png"}}]);