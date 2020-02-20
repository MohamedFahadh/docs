(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{139:function(t,e,a){t.exports=a.p+"assets/img/list_datapill_in_output_tree.20c81ae4.png"},2227:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"mysql-upsert-actions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql-upsert-actions"}},[t._v("#")]),t._v(" MySQL - Upsert actions")]),t._v(" "),r("h2",{attrs:{id:"upsert-row"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upsert-row"}},[t._v("#")]),t._v(" Upsert row")]),t._v(" "),r("p",[t._v("This action upserts a single row into the selected table.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:a(688),alt:"Upsert row action",width:"1486",height:"986"}}),t._v(" "),r("em",[t._v("Upsert row action")])],1),t._v(" "),r("h3",{attrs:{id:"table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" Table")]),t._v(" "),r("p",[t._v("First, select a table to upsert rows in. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.")]),t._v(" "),r("h3",{attrs:{id:"columns"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#columns"}},[t._v("#")]),t._v(" Columns")]),t._v(" "),r("p",[t._v("Columns in the selected table are then presented as input fields here. Map the required fields from the output datatree here to upsert a row with data from preceding trigger or actions.")]),t._v(" "),r("h4",{attrs:{id:"primary-key"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#primary-key"}},[t._v("#")]),t._v(" Primary key")]),t._v(" "),r("p",[t._v("Primary key value will be used to determine if an update or an insert is executed in your MySQL database. If the primary key value of the given set of values exists in your table, that row will be updated with the values provided. In the absence of a row with the primary key value, a new row will be inserted with the values provided.")]),t._v(" "),r("h2",{attrs:{id:"upsert-batch-of-rows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upsert-batch-of-rows"}},[t._v("#")]),t._v(" Upsert batch of rows")]),t._v(" "),r("p",[t._v("This action allows you to upsert multiple rows in a single action instead of one row at a time. This provides higher throughput when you are moving a large number of records from one app to MySQL. Depending on the structure of your recipe and volume of data, this action can reduce integration time by a factor of 100.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:a(689),alt:"Upsert batch of rows action",width:"1494",height:"1204"}}),t._v(" "),r("em",[t._v("Upsert batch of rows action")])],1),t._v(" "),r("h3",{attrs:{id:"table-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table-2"}},[t._v("#")]),t._v(" Table")]),t._v(" "),r("p",[t._v("Just like with the single row upsert action, you need to select the target table first.")]),t._v(" "),r("h3",{attrs:{id:"rows-source-list"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rows-source-list"}},[t._v("#")]),t._v(" Rows source list")]),t._v(" "),r("p",[t._v("Unlike the "),r("strong",[t._v("Upsert row")]),t._v(" action (where we deal with a single row), we are now dealing with a batch of rows. Hence, the next datapill to input is the "),r("em",[t._v("source")]),t._v(" of the batch of rows to upsert to the table. This can come from any trigger or action that outputs a list datapill.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:a(139),alt:"A list datapill from the datatree",width:"722",height:"944"}}),t._v(" "),r("em",[t._v("A list datapill from the datatree")])],1),t._v(" "),r("p",[t._v("If you do not map a list datapill to this field, this action will upsert only 1 row and will behave like the "),r("strong",[t._v("Upsert row")]),t._v(" action.")]),t._v(" "),r("h3",{attrs:{id:"columns-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#columns-2"}},[t._v("#")]),t._v(" Columns")]),t._v(" "),r("p",[t._v("Finally, you will need to map the required fields from the output datatree here to upsert rows with data from preceding trigger or actions. Take note that datapills mapped to each column here should be from the source list datapill you used earlier. Datapills that are mapped outside the source list datapill will not be iterated (mappings like this will become a constant value for all rows).")]),t._v(" "),r("p",[t._v("Similar to the "),r("strong",[t._v("Upsert row")]),t._v(" action, primary key values provided will be used to determine an update or create for each row.")]),t._v(" "),r("p",[t._v("Refer to the "),r("router-link",{attrs:{to:"/features/list-management.html"}},[t._v("List management")]),t._v(" guide for more information about working with batches.")],1)])}),[],!1,null,null,null);e.default=s.exports},688:function(t,e,a){t.exports=a.p+"assets/img/upsert-row-action.e7e6b046.png"},689:function(t,e,a){t.exports=a.p+"assets/img/upsert-rows-batch-action.0f13e231.png"}}]);