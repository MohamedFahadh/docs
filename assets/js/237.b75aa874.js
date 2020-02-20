(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{148:function(t,e,s){t.exports=s.p+"assets/img/custom-sql-action.071d0538.png"},2255:function(t,e,s){"use strict";s.r(e);var o=s(0),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"oracle-select-actions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#oracle-select-actions"}},[t._v("#")]),t._v(" Oracle - Select actions")]),t._v(" "),o("h2",{attrs:{id:"select-rows"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#select-rows"}},[t._v("#")]),t._v(" Select rows")]),t._v(" "),o("p",[t._v("This action lets you select rows based on certain criteria defined by a "),o("code",[t._v("WHERE")]),t._v(" condition. Rows from the selected table that match the "),o("code",[t._v("WHERE")]),t._v(" condition will be returned as the output of this action.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:s(785),alt:"Select rows action",width:"1758",height:"1056"}}),t._v(" "),o("em",[t._v("Select rows action")])],1),t._v(" "),o("h3",{attrs:{id:"table-views"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#table-views"}},[t._v("#")]),t._v(" Table/Views")]),t._v(" "),o("p",[t._v("First, select a table/view to work with. This can be done either by selecting a table or view from the pick list, or toggling the input to text mode and typing the full table name.")]),t._v(" "),o("h3",{attrs:{id:"where-condition"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-condition"}},[t._v("#")]),t._v(" WHERE condition")]),t._v(" "),o("p",[t._v("Next, provide a "),o("code",[t._v("WHERE")]),t._v(" condition to filter rows. This condition can be as simple as filtering a single record by it's "),o("code",[t._v("ID")]),t._v(".")]),t._v(" "),o("div",{staticClass:"language-sql extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sql"}},[o("code",[t._v("CUSTOMER_ID "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n")])])]),o("p",[t._v("Alternatively, it can be used to select multiple rows based on values in one or more columns.")]),t._v(" "),o("div",{staticClass:"language-sql extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sql"}},[o("code",[t._v("CUSTOMER_EMAIL "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eeshan@workato.com'")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" PRIORITY "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),o("p",[t._v("Complex "),o("code",[t._v("WHERE")]),t._v(" conditions with subqueries can also be used. Refer to the "),o("router-link",{attrs:{to:"/connectors/oracle/introduction.html#using-where-conditions"}},[t._v("WHERE condition")]),t._v(" guide for more information.")],1),t._v(" "),o("h3",{attrs:{id:"order-by"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#order-by"}},[t._v("#")]),t._v(" Order by")]),t._v(" "),o("p",[t._v("Rows returned from this action can be ordered based on the "),o("strong",[t._v("Order by")]),t._v(" input field. This field is used to change the default ordering of rows from your Oracle database.")]),t._v(" "),o("p",[t._v("You can also define the direction of order for each column you wish to order by. The following order by statement will order rows by "),o("code",[t._v("priority")]),t._v(" in ascending order followed by "),o("code",[t._v("created_date")]),t._v(" in descending order (latest first).")]),t._v(" "),o("div",{staticClass:"language-sql extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sql"}},[o("code",[t._v("CUSTOMER_ID "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),t._v("\n")])])]),o("h3",{attrs:{id:"limit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limit"}},[t._v("#")]),t._v(" Limit")]),t._v(" "),o("p",[t._v("This input field determines the maximum number of rows to return. The default limit is 100 and capped at a maximum of 1000 rows for a single "),o("strong",[t._v("Select rows")]),t._v(" action.")]),t._v(" "),o("h3",{attrs:{id:"offset"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#offset"}},[t._v("#")]),t._v(" Offset")]),t._v(" "),o("p",[t._v("This input field gives you the option to fetch only a page of results from the entire results set. For example, to skip the first 100 rows of the selected results set, input "),o("code",[t._v("100")]),t._v(" to this field. The default is "),o("code",[t._v("0")]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"select-rows-using-custom-sql"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#select-rows-using-custom-sql"}},[t._v("#")]),t._v(" Select rows using custom SQL")]),t._v(" "),o("p",[t._v("This action lets you select rows based on a custom SQL query. Rows that are returned from the query will be returned as the output of this action.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:s(148),alt:"Select rows using custom SQL action",width:"2155",height:"1948"}}),t._v(" "),o("em",[t._v("Select rows using custom SQL action")])],1),t._v(" "),o("h3",{attrs:{id:"sql"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[t._v("#")]),t._v(" SQL")]),t._v(" "),o("p",[t._v("Provide the SQL query to be executed to select rows. The query here will be used to generate the output datatree. To do this, the SQL will be executed once when you provide it. You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes ("),o("code",[t._v("''")]),t._v("). "),o("strong",[t._v("Do not add a "),o("code",[t._v(";")]),t._v(" at the end of your SQL query as this will cause the action to fail.")])]),t._v(" "),o("p",[t._v("Avoid using limit clauses like "),o("code",[t._v("ROWNUM")]),t._v(" in your SQL. This is because the limit to the number of rows returned in the query is based on the value defined in the "),o("a",{attrs:{href:"#limit"}},[o("strong",[t._v("Limit")]),t._v(" input field")]),t._v(". Adding your own limit clause will cause the action to fail.")]),t._v(" "),o("h3",{attrs:{id:"limit-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limit-2"}},[t._v("#")]),t._v(" Limit")]),t._v(" "),o("p",[t._v("This input field determines the maximum number of rows to return. The default limit is 100 and capped at a maximum of 1000 rows for a single "),o("strong",[t._v("Select rows using custom SQL")]),t._v(" action.")]),t._v(" "),o("p",[t._v("If this field is left blank, "),o("code",[t._v("ROWNUM <= 100")]),t._v(" will be used.")]),t._v(" "),o("h2",{attrs:{id:"list-of-workato-triggers-and-actions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#list-of-workato-triggers-and-actions"}},[t._v("#")]),t._v(" List of Workato triggers and actions")]),t._v(" "),o("p",[t._v("Workato currently supports the following triggers and actions. Find out more details about each by clicking on the links below. You can also navigate to them through the side bar.")]),t._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"/connectors/oracle/new-row-trigger.html"}},[t._v("New row trigger")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/updated-row-trigger.html"}},[t._v("New/updated row trigger")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/insert.html"}},[t._v("Insert actions")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/update.html"}},[t._v("Update actions")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/upsert.html"}},[t._v("Upsert actions")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/delete.html"}},[t._v("Delete actions")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/run_sql.html"}},[t._v("Run custom SQL action")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/stored-procedure.html"}},[t._v("Execute stored procedure")])],1)]),t._v(" "),o("p",[t._v("Or get busy building your recipes now! Check out our")]),t._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"/connectors/oracle/best-practices.html"}},[t._v("Best practices")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/database-common-use-cases.html"}},[t._v("Use cases")])],1)])])}),[],!1,null,null,null);e.default=r.exports},785:function(t,e,s){t.exports=s.p+"assets/img/select-rows-action.efbe191d.png"}}]);