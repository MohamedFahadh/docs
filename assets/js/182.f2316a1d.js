(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{2253:function(t,e,r){"use strict";r.r(e);var o=r(0),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"oracle-insert-actions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#oracle-insert-actions"}},[t._v("#")]),t._v(" Oracle - Insert actions")]),t._v(" "),o("p",[t._v("Workato offers both batch and single insert row actions. This allows you the flexibility to choose the action that you require for your recipe and to fulfill your business needs. Check out our "),o("router-link",{attrs:{to:"/connectors/oracle/best-practices.html#when-to-use-batch-of-rows-triggers-actions-vs-single-row-triggers-actions"}},[t._v("best practices on whether to use batch or single insert actions")]),t._v(" and "),o("router-link",{attrs:{to:"/connectors/oracle/best-practices.html#when-to-use-update-insert-and-upsert-actions"}},[t._v("when to use insert, update or update")]),t._v(".")],1),t._v(" "),o("blockquote",[o("p",[t._v("Errors raised in a step after an "),o("code",[t._v("insert row")]),t._v(" action has been executed during a job run will result in another insert if the job is repeated. Consider using upserts that prevent inserting multiple rows into your database tables by deduping them on a key")])]),t._v(" "),o("h2",{attrs:{id:"insert-row"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#insert-row"}},[t._v("#")]),t._v(" Insert row")]),t._v(" "),o("p",[t._v("This action inserts a single row into the selected table.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:r(782),alt:"Insert row action",width:"2190",height:"1076"}}),t._v(" "),o("center",[o("i",[t._v("Insert row action")])])],1),t._v(" "),o("h3",{attrs:{id:"table-view"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#table-view"}},[t._v("#")]),t._v(" Table/view")]),t._v(" "),o("p",[t._v("First, select a table to insert a row into. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.")]),t._v(" "),o("h3",{attrs:{id:"columns"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#columns"}},[t._v("#")]),t._v(" Columns")]),t._v(" "),o("p",[t._v("Next, map the datapills from your previous triggers or actions into their respective columns. The columns in the selected table are presented as input fields here for you to insert datapills.")]),t._v(" "),o("h2",{attrs:{id:"insert-batch-of-rows"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#insert-batch-of-rows"}},[t._v("#")]),t._v(" Insert batch of rows")]),t._v(" "),o("p",[t._v("This action allows you to insert multiple rows in a single action instead of one row at a time. This provides higher throughput when you are moving a large number of records from one app to Oracle. Depending on the structure of your recipe and volume of data, this action can reduce integration time by a factor of 100.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:r(783),alt:"Insert batch of rows action",width:"1980",height:"1160"}}),t._v(" "),o("center",[o("i",[t._v("Insert batch of rows action")])])],1),t._v(" "),o("h3",{attrs:{id:"table"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" Table")]),t._v(" "),o("p",[t._v("Just like with the single row insert action, you need to select the target table first.")]),t._v(" "),o("h3",{attrs:{id:"rows-source-list"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rows-source-list"}},[t._v("#")]),t._v(" Rows source list")]),t._v(" "),o("p",[t._v("Unlike the "),o("strong",[t._v("Insert row")]),t._v(" action (where we deal with a single row), we are now dealing with a batch of rows. Hence, the next datapill to input is the "),o("em",[t._v("source")]),t._v(" of the batch of rows to insert to the table. This can come from any trigger or action that outputs a list datapill.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:r(51),alt:"A list datapill from the datatree",width:"722",height:"944"}}),t._v(" "),o("center",[o("i",[t._v("A list datapill from the datatree")])])],1),t._v(" "),o("p",[t._v("If you do not map a list datapill to this field, this action will insert only 1 row and will behave like the "),o("strong",[t._v("Insert row")]),t._v(" action.")]),t._v(" "),o("h3",{attrs:{id:"columns-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#columns-2"}},[t._v("#")]),t._v(" Columns")]),t._v(" "),o("p",[t._v("Finally, you will need to map the required fields from the output datatree here to insert rows with data from preceding trigger or actions. Take note that datapills mapped to each column here should be from the source list datapill you used earlier. Datapills that are mapped outside the source list datapill will not be iterated.")]),t._v(" "),o("p",[t._v("Refer to the "),o("router-link",{attrs:{to:"/features/list-management.html"}},[t._v("List management")]),t._v(" guide for more information about working with batches.")],1),t._v(" "),o("h2",{attrs:{id:"next-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next steps")]),t._v(" "),o("p",[t._v("Learn more about the other triggers and actions Workato has to offer for SQL server")]),t._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"/connectors/oracle/new-row-trigger.html"}},[t._v("New row trigger")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/mssql/updated-row-trigger.html"}},[t._v("New/updated row trigger")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/select.html"}},[t._v("Select actions")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/update.html"}},[t._v("Update actions")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/upsert.html"}},[t._v("Upsert actions")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/delete.html"}},[t._v("Delete actions")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/run_sql.html"}},[t._v("Run custom SQL action")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/oracle/stored-procedure.html"}},[t._v("Execute stored procedure")])],1)]),t._v(" "),o("p",[t._v("Or get busy building your recipes now! Check out our")]),t._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"/connectors/oracle/best-practices.html"}},[t._v("Best practices")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/connectors/database-common-use-cases.html"}},[t._v("Use cases")])],1)])])}),[],!1,null,null,null);e.default=a.exports},51:function(t,e,r){t.exports=r.p+"assets/img/list_datapill_in_output_tree.20c81ae4.png"},782:function(t,e,r){t.exports=r.p+"assets/img/insert_row_action.f0c83552.png"},783:function(t,e,r){t.exports=r.p+"assets/img/insert_rows_batch_action.33acf4bf.png"}}]);