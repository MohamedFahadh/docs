(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{2228:function(t,e,r){"use strict";r.r(e);var s=r(0),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"netsuite-action-update-records-in-bulk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#netsuite-action-update-records-in-bulk"}},[t._v("#")]),t._v(" NetSuite Action - Update records in bulk")]),t._v(" "),s("p",[t._v("The actions "),s("code",[t._v("Update standard records in bulk")]),t._v(" and "),s("code",[t._v("Update custom records in bulk")]),t._v(" allow you to update in bulk standard records or custom records.")]),t._v(" "),s("p",[t._v("They accept a list of a maximum 200 records. Actions will fail if more than 200 records are provided.")]),t._v(" "),s("h2",{attrs:{id:"input-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),s("p",[t._v("Select the "),s("code",[t._v("Standard record")]),t._v(" or "),s("code",[t._v("Custom record")]),t._v(" you want to update. In this example, we select "),s("code",[t._v("Customer")]),t._v(":")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:r(24),alt:"Select Netsuite record",width:"591",height:"121"}})],1),t._v(" "),s("p",[t._v("After that, you can proceed to configure the next sections.")]),t._v(" "),s("h3",{attrs:{id:"field-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#field-configuration"}},[t._v("#")]),t._v(" Field configuration")]),t._v(" "),s("p",[t._v("This section allows you to shortlist which NetSuite fields you want to use. Only those shortlisted fields will be displayed in action's input and output. This makes it easier to work with complex NetSuite objects with hundreds of fields.")]),t._v(" "),s("p",[t._v("In this example, we just want to use the fields "),s("code",[t._v("First name")]),t._v(", "),s("code",[t._v("Last name")]),t._v(", "),s("code",[t._v("Email")]),t._v(", "),s("code",[t._v("phone")]),t._v(" from the "),s("code",[t._v("Customer")]),t._v(" record:")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:r(25),alt:"Field configuration",width:"594",height:"456"}})],1),t._v(" "),s("p",[t._v("The followings are all input fields in this section:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field name")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Fields")]),t._v(" "),s("td",[t._v("The Netsuite record's main fields to be shortlisted.")])]),t._v(" "),s("tr",[s("td",[t._v("Custom fields")]),t._v(" "),s("td",[t._v("The Netsuite record's custom fields to be shortlisted.")])]),t._v(" "),s("tr",[s("td",[t._v("Custom segment schema")]),t._v(" "),s("td",[t._v("If your Netsuite record has custom schema, you can define the custom schema here.")])]),t._v(" "),s("tr",[s("td",[t._v("Line item custom fields")]),t._v(" "),s("td",[t._v("The Netsuite record's line item custom fields to be shortlisted.")])]),t._v(" "),s("tr",[s("td",[t._v("Line item custom segment schema")]),t._v(" "),s("td",[t._v("If your Netsuite line item has custom schema, you can define the custom schema here.")])])])]),t._v(" "),s("h3",{attrs:{id:"record"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#record"}},[t._v("#")]),t._v(" Record")]),t._v(" "),s("p",[t._v("This section's name will change based on your selected "),s("code",[t._v("Standard record")]),t._v(" or "),s("code",[t._v("Custom record")]),t._v(". In this section, you will provide data mappings to update the NetSuite records.")]),t._v(" "),s("p",[t._v("In the example below, we map the data from the Box trigger "),s("code",[t._v("New CSV file in directory")]),t._v(" into NetSuite record "),s("code",[t._v("Customer")]),t._v(". Notice that only the shortlisted fields "),s("code",[t._v("First name")]),t._v(", "),s("code",[t._v("Last name")]),t._v(", "),s("code",[t._v("Email")]),t._v(", "),s("code",[t._v("phone")]),t._v(" are displayed here.")]),t._v(" "),s("p",[t._v("You also need to map the record's "),s("code",[t._v("Internal ID")]),t._v(" so NetSuite can know which records to update. In this case, our CSV records from Box contain NetSuite IDs for mapping.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:r(690),alt:"Field mappings",width:"983",height:"907"}})],1),t._v(" "),s("p",[t._v("The followings are all input fields in this section:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field name")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Record source list")]),t._v(" "),s("td",[t._v("You need to provide a "),s("router-link",{attrs:{to:"/features/list-management.html"}},[t._v("list data pill")]),t._v(" here. For example, list of rows in a CSV file. The action will automatically iterate through all items in the list and map them to NetSuite records.")],1)]),t._v(" "),s("tr",[s("td",[t._v("Internal ID")]),t._v(" "),s("td",[t._v("ID of the NetSuite record. NetSuite uses this to determine which record to update.")])]),t._v(" "),s("tr",[s("td",[t._v("Record fields")]),t._v(" "),s("td",[t._v("Here you need to map the data pills under the list data pill provided above. For example, CSV column names under the "),s("code",[t._v("CSV Rows")]),t._v(" list data pill. The action will automatically iterate through all items in the list and map them to NetSuite records.")])])])]),t._v(" "),s("h2",{attrs:{id:"output-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Field name")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Number of processed records")]),t._v(" "),s("td",[t._v("Total number of records processed.")])]),t._v(" "),s("tr",[s("td",[t._v("Number of successful records")]),t._v(" "),s("td",[t._v("Number of records successfully updated.")])]),t._v(" "),s("tr",[s("td",[t._v("Number of failed records")]),t._v(" "),s("td",[t._v("Number of records failed to be updated.")])]),t._v(" "),s("tr",[s("td",[t._v("Successful records")]),t._v(" "),s("td",[t._v("A list data pill containing all successful records. You can use this to "),s("router-link",{attrs:{to:"/features/list-management.html"}},[t._v("iterate through all records in the list")]),t._v(". The data fields of each record is shown below:")],1)]),t._v(" "),s("tr",[s("td",[t._v("- Internal ID")]),t._v(" "),s("td",[t._v("Internal ID of this record.")])]),t._v(" "),s("tr",[s("td",[t._v("- External ID")]),t._v(" "),s("td",[t._v("External ID of this record.")])]),t._v(" "),s("tr",[s("td",[t._v("- Record")]),t._v(" "),s("td",[t._v("Contains all data fields of this record.")])]),t._v(" "),s("tr",[s("td",[t._v("- List size")]),t._v(" "),s("td",[t._v("Number of successful records in this list.")])]),t._v(" "),s("tr",[s("td",[t._v("Failed records")]),t._v(" "),s("td",[t._v("A list data pill containing all failed records. You can use this to "),s("router-link",{attrs:{to:"/features/list-management.html"}},[t._v("iterate through all records in the list")]),t._v(". The data fields of each record is shown below:")],1)]),t._v(" "),s("tr",[s("td",[t._v("- Error")]),t._v(" "),s("td",[t._v("A list data pill containing all errors of this record. You can use this to "),s("router-link",{attrs:{to:"/features/list-management.html"}},[t._v("iterate through all errors in the list")]),t._v(".")],1)]),t._v(" "),s("tr",[s("td",[t._v("- Record")]),t._v(" "),s("td",[t._v("Contains all data fields of this record.")])]),t._v(" "),s("tr",[s("td",[t._v("- List size")]),t._v(" "),s("td",[t._v("Number of failed records in this list.")])])])])])}),[],!1,null,null,null);e.default=o.exports},24:function(t,e){t.exports="data:image/png;base64,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"},25:function(t,e,r){t.exports=r.p+"assets/img/field-config.035110a8.png"},690:function(t,e,r){t.exports=r.p+"assets/img/batch-mapping-update.57c0821f.png"}}]);