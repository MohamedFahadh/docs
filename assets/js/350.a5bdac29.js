(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{1114:function(t,e,r){t.exports=r.p+"assets/img/scheduled-report-input.a0683a3c.png"},2364:function(t,e,r){"use strict";r.r(e);var o=r(0),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"workday-scheduled-report-trigger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#workday-scheduled-report-trigger"}},[t._v("#")]),t._v(" Workday scheduled report trigger")]),t._v(" "),o("h2",{attrs:{id:"how-to-use"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[t._v("#")]),t._v(" How to use")]),t._v(" "),o("p",[t._v("This trigger is a combination of a Scheduler (advanced) and Workday RaaS action. When configured, it will run a report in Workday at pre-defined times and return results of the report in "),o("router-link",{attrs:{to:"/features/batch-processing.html"}},[t._v("batches")]),t._v(". The batch size defaults to "),o("code",[t._v("200")]),t._v(" and maximum size is "),o("code",[t._v("10,000")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"inputs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),o("p",[t._v("The required inputs are naturally a combination of both the Scheduler trigger and Workday RaaS actions.")]),t._v(" "),o("p",[t._v("First, configure the Workday report to retrieve.")]),t._v(" "),o("ul",[o("li",[t._v("Provide the RaaS report URL of the Workday report. Click "),o("router-link",{attrs:{to:"/connectors/workday/workday_raas.html"}},[t._v("here")]),t._v(" to learn how to retrieve the RaaS URL.")],1),t._v(" "),o("li",[t._v("If the report requires inputs (e.g. filter parameters), additional input fields will be generated. Find out more about input configuration "),o("router-link",{attrs:{to:"/connectors/workday/get_report.html#inputs"}},[t._v("here")]),t._v(".")],1),t._v(" "),o("li",[t._v("Configure output batch size using the "),o("strong",[t._v("Report batch size")]),t._v(" input field. Use this to adjust the size of each batch of rows to match the size limit of other actions in the recipe. Batch size default to "),o("code",[t._v("200")]),t._v(" and can be increased up to "),o("code",[t._v("10,000")]),t._v(".")])]),t._v(" "),o("p",[t._v("Second, configure the scheduler.")]),t._v(" "),o("ul",[o("li",[t._v("Refer to documentation about configuring the advanced scheduler trigger "),o("router-link",{attrs:{to:"/features/scheduler.html"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),o("p",[o("DocImage",{attrs:{src:r(1114),alt:"Scheduled report input",width:"2497",height:"1963"}}),t._v(" "),o("em",[t._v("Scheduled report configuration")])],1),t._v(" "),o("h2",{attrs:{id:"outputs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),o("p",[t._v("This trigger returns a number of fields:")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Field")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Scheduled time")]),t._v(" "),o("td",[t._v("The time that the report was ran.")])]),t._v(" "),o("tr",[o("td",[t._v("Total number of records")]),t._v(" "),o("td",[t._v("The total number of rows generated in the scheduled run of the report. If this report has more rows than the specified batch size, they will be split into multiple batches with the specified number of rows in each. Each batch will then be processed as individual jobs, in the same sequence as returned by the Workday RaaS endpoint.")])]),t._v(" "),o("tr",[o("td",[t._v("Starting offset")]),t._v(" "),o("td",[t._v("The offset number for the first row of this batch. For example, if there are "),o("code",[t._v("1000")]),t._v(" rows in the report and the trigger uses a batch size of "),o("code",[t._v("200")]),t._v(". Given that, if the current job is showing the 2nd batch (rows "),o("code",[t._v("201")]),t._v(" to "),o("code",[t._v("400")]),t._v("), the starting offset will be "),o("code",[t._v("200")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[t._v("Ending offset")]),t._v(" "),o("td",[t._v("The offset number for the last row of this batch. For example, if there are "),o("code",[t._v("1000")]),t._v(" rows in the report and the trigger uses a batch size of "),o("code",[t._v("200")]),t._v(". Given that, if the current job is showing the 2nd batch (rows "),o("code",[t._v("201")]),t._v(" to "),o("code",[t._v("400")]),t._v("), the ending offset will be "),o("code",[t._v("400")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[t._v("First batch")]),t._v(" "),o("td",[t._v("A boolean value indicating if this is the first batch.")])]),t._v(" "),o("tr",[o("td",[t._v("Last batch")]),t._v(" "),o("td",[t._v("A boolean value indicating if this is the last batch.")])]),t._v(" "),o("tr",[o("td",[t._v("Rows")]),t._v(" "),o("td",[t._v("Each batch of rows is returned as a list (array). Each item in this list corresponds to a row in the report. Similarly, each column in your report will be rendered as a field in the output datatree.")])])])]),t._v(" "),o("h4",{attrs:{id:"using-first-last-batch-in-your-recipe-logic"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-first-last-batch-in-your-recipe-logic"}},[t._v("#")]),t._v(" Using first/last batch in your recipe logic")]),t._v(" "),o("p",[t._v("You can use the values from "),o("strong",[t._v("first batch")]),t._v(" and "),o("strong",[t._v("last batch")]),t._v(" and integrate them into your recipe logic. For example, this is useful when you want to create a file from the output of a Workday report. Your recipe will contain the following logic:")]),t._v(" "),o("p",[t._v("if "),o("code",[t._v("First batch")]),t._v(" is "),o("code",[t._v("true")])]),t._v(" "),o("ul",[o("li",[t._v("Create a new file with contents of the first batch")])]),t._v(" "),o("p",[t._v("if "),o("code",[t._v("First batch")]),t._v(" is "),o("code",[t._v("false")])]),t._v(" "),o("ul",[o("li",[t._v("Append lines to an existing file")])]),t._v(" "),o("p",[t._v("if "),o("code",[t._v("Last batch")]),t._v(" is "),o("code",[t._v("true")])]),t._v(" "),o("ul",[o("li",[t._v("Send notification about successful transfer of report content")])])])}),[],!1,null,null,null);e.default=i.exports}}]);