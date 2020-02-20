(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{18:function(e,t,a){e.exports=a.p+"assets/img/sample-google-sheet.18294aa3.jpg"},2173:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"google-sheets-action-add-row"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-sheets-action-add-row"}},[e._v("#")]),e._v(" Google Sheets action - Add row")]),e._v(" "),s("p",[e._v("The "),s("strong",[e._v("Add row")]),e._v(" action allows you to add new rows to a selected sheet.")]),e._v(" "),s("h2",{attrs:{id:"how-to-use-this-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-this-action"}},[e._v("#")]),e._v(" How to use this action")]),e._v(" "),s("h3",{attrs:{id:"setting-up-the-google-sheet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-google-sheet"}},[e._v("#")]),e._v(" Setting up the Google sheet")]),e._v(" "),s("p",[e._v("First, in order for us to retrieve the custom data in a sheet, the sheet must contain at least one header line for the first row and one data line for the second row, as in the following screenshot.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(18),alt:"Google sheet sample",width:"653",height:"283"}}),e._v(" "),s("em",[e._v("Sample Google sheet with 1 header row and 1 data rows")])],1),e._v(" "),s("h3",{attrs:{id:"configuring-the-add-row-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-add-row-action"}},[e._v("#")]),e._v(" Configuring the Add row action")]),e._v(" "),s("p",[e._v("To configure the action, we need to select the spreadsheet and the actual sheet to process.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(503),alt:"Add row action",width:"1500",height:"850"}}),e._v(" "),s("em",[e._v("Use the add row action")])],1),e._v(" "),s("p",[e._v("Selecting a specific spreadsheet would generate your list of sheets within that spreadsheet, while selecting the sheet would generate your list of columns within that sheet.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(504),alt:"configured row actions",width:"1486",height:"1158"}}),e._v(" "),s("em",[e._v("Configured row actions")])],1),e._v(" "),s("h3",{attrs:{id:"example-scenario"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-scenario"}},[e._v("#")]),e._v(" Example scenario")]),e._v(" "),s("p",[e._v("In this case, let's assume that we wish to move any new contacts created in Salesforce into a Google Sheet. The following shows the data mapping I've done to direct data coming in from Salesforce (as provided by the datatree on the right) to the matching fields in Google Sheets.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(505),alt:"available columns",width:"1528",height:"1200"}}),e._v(" "),s("em",[e._v("Available columns are derived from the selected Google sheet in the trigger")])],1),e._v(" "),s("h3",{attrs:{id:"running-the-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-the-action"}},[e._v("#")]),e._v(" Running the action")]),e._v(" "),s("p",[e._v("Now that we have the trigger and action configured, let's run our recipe!")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(506),alt:"Configured recipe",width:"2128",height:"506"}}),e._v(" "),s("em",[e._v("Configured recipe for testing")])],1),e._v(" "),s("p",[e._v("We'll take a quick look at the details of a specific job as follows, where we can see that a new contact, Anna Sharpay, was created in Salesforce. As we've mapped 'Name', 'Email' and 'Date created' in the recipe, we can see that these are the values passed to the "),s("code",[e._v("Add row")]),e._v(" action in Step 1.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(507),alt:"trigger data",width:"902",height:"723"}}),e._v(" "),s("em",[e._v("The trigger data recieved for a specific contact, as viewed in the job details page's output rab")])],1),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(508),alt:"data received",width:"1094",height:"802"}}),e._v(" "),s("em",[e._v("The data input into the create row action, as viewed from the job detail's page input tab")])],1),e._v(" "),s("p",[e._v("The output of the recipe, as viewed from our sheet, is below.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(509),alt:"edited sheet",width:"652",height:"278"}}),e._v(" "),s("em",[e._v("Edited sample sheet with added row")])],1)])}),[],!1,null,null,null);t.default=o.exports},503:function(e,t,a){e.exports=a.p+"assets/img/add-row-action.0091594e.png"},504:function(e,t,a){e.exports=a.p+"assets/img/configured-row-action.5d8397a5.jpg"},505:function(e,t,a){e.exports=a.p+"assets/img/available-columns.8cd77d68.jpg"},506:function(e,t,a){e.exports=a.p+"assets/img/configured-recipe-sf-add-gs.9ab3b78a.jpg"},507:function(e,t,a){e.exports=a.p+"assets/img/trigger-data.b135c3ae.jpg"},508:function(e,t,a){e.exports=a.p+"assets/img/data-received.b2d88fb5.jpg"},509:function(e,t,a){e.exports=a.p+"assets/img/edited-sample-sheet.acc511ab.jpg"}}]);