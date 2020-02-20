(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{1097:function(t,e,o){t.exports=o.p+"assets/img/get-custom-object.611c27b1.png"},1098:function(t,e,o){t.exports=o.p+"assets/img/get-custom-object-output.30a9aaa4.png"},2360:function(t,e,o){"use strict";o.r(e);var s=o(0),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"get-custom-objects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-custom-objects"}},[t._v("#")]),t._v(" Get custom objects")]),t._v(" "),s("p",[t._v("You can extend Workday business objects by configuring custom objects. These custom objects are based standard Workday business objects and can be used to store additional information. This allows you to capture data unique to your organization in Workday.")]),t._v(" "),s("h2",{attrs:{id:"get-custom-objects-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-custom-objects-actions"}},[t._v("#")]),t._v(" Get custom objects actions")]),t._v(" "),s("p",[t._v("This action allows you to retrieve a custom object value of a specific Workday object.")]),t._v(" "),s("h4",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("For example, we are setting a new onboarding process for our employee. Every employee has to undergo a drug test. On Workday, we set up a custom object called "),s("strong",[t._v("drugTested")]),t._v(" under the parent object "),s("strong",[t._v("Workers")]),t._v(".")]),t._v(" "),s("p",[t._v("We can use this action to retrieve the status of a worker, to see if he/she has undergone the drug test.")]),t._v(" "),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:o(1097),alt:"screen",width:"2427",height:"968"}}),t._v(" "),s("em",[t._v("Inputs for get custom object action")])],1),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Input field")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Alias")]),t._v(" "),s("td",[t._v("Select the custom object that you want to retrieve. This is the Web service alias.")])]),t._v(" "),s("tr",[s("td",[t._v("Parent object ID")]),t._v(" "),s("td",[t._v("The Workday ID of the parent object that you are selecting.")])]),t._v(" "),s("tr",[s("td",[t._v("Custom object fields")]),t._v(" "),s("td",[t._v("Define the fields in this custom object. If left blank, it will retrieve all fields with their default names.")])])])]),t._v(" "),s("h4",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("To retrieve the drug test status of Worker "),s("code",[t._v("1da8b422311b4929bfa4520f7f0b4e83")]),t._v(", we will use the "),s("strong",[t._v("Get custom object")]),t._v(" action and define it like so:")]),t._v(" "),s("ul",[s("li",[t._v("Alias: "),s("code",[t._v("drugTested")])]),t._v(" "),s("li",[t._v("Parent object ID: "),s("code",[t._v("1da8b422311b4929bfa4520f7f0b4e83")])])]),t._v(" "),s("h2",{attrs:{id:"outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:o(1098),alt:"Custom object output",width:"2436",height:"1204"}}),t._v(" "),s("em",[t._v("Custom object output")])],1),t._v(" "),s("p",[t._v("The outputs of this action are:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Output field")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ID")]),t._v(" "),s("td",[t._v("A unique Workday ID for this custom object.")])]),t._v(" "),s("tr",[s("td",[t._v("Custom field values")]),t._v(" "),s("td",[t._v("The values for the custom fields belonging to this specific Workday object.")])])])]),t._v(" "),s("p",[t._v("Each field is retrieved and converted into a datapill. These can be used in subsequent recipe actions.")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("If the parent object does not contain the custom object, this action will return "),s("code",[t._v("Error 404: Not found")]),t._v(".")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);