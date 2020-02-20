(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{2256:function(e,t,r){"use strict";r.r(t);var o=r(0),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),o("p",[e._v("During the design stage of recipes, errors are bound to happen. Here are some of the more common ones relating to databases that we've seen so we decided to compile them into a list! "),o("router-link",{attrs:{to:"/recipes/recipe-job-errors.html"}},[e._v("Check out our troubleshooting section as well for more help.")]),e._v(" If it still doesnt work or you cant find your particular error over here, contact our customer support and they would be more than happy to help!")],1),e._v(" "),o("h2",{attrs:{id:"recipe-design-time-errors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#recipe-design-time-errors"}},[e._v("#")]),e._v(" Recipe design-time errors")]),e._v(" "),o("h3",{attrs:{id:"timeouts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#timeouts"}},[e._v("#")]),e._v(" Timeouts")]),e._v(" "),o("p",[e._v("Workao employs "),o("router-link",{attrs:{to:"/recipes/recipe-job-errors.html#timeouts"}},[e._v("timeouts on jobs and actions")]),e._v(" when they take too long to execute. When working with databases, this could be a common occurence since queries and stored procedures may too long to respond. When this happens, consider doing the following:")],1),e._v(" "),o("h5",{attrs:{id:"action-timeouts-one-specfic-step-times-out"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#action-timeouts-one-specfic-step-times-out"}},[e._v("#")]),e._v(" Action timeouts (One specfic step times out)")]),e._v(" "),o("ul",[o("li",[e._v("Limiting the number of rows returned further")]),e._v(" "),o("li",[e._v("Introducing indexes in your database")]),e._v(" "),o("li",[e._v("Optimising custom SQL queries (i.e. eliminating unnecessary joins)")])]),e._v(" "),o("h5",{attrs:{id:"job-timeouts-one-entire-run-of-a-recipe-times-out"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#job-timeouts-one-entire-run-of-a-recipe-times-out"}},[e._v("#")]),e._v(" Job timeouts (One entire run of a recipe times out)")]),e._v(" "),o("ul",[o("li",[e._v("Separating recipes and using callable recipes to join workflows up")]),e._v(" "),o("li",[e._v("Use asynchronous calls when calling recipes")]),e._v(" "),o("li",[e._v("Eliminating unnecessary actions")])]),e._v(" "),o("h3",{attrs:{id:"unable-to-connect-to-existing-database"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unable-to-connect-to-existing-database"}},[e._v("#")]),e._v(" Unable to connect to existing database")]),e._v(" "),o("p",[e._v("When your database connection returns an error when you try to connect, here are some possible reasons:")]),e._v(" "),o("ul",[o("li",[e._v("On-premises agent is inactive (when using an on-premises agent) and needs to be "),o("router-link",{attrs:{to:"/on-prem/agents/run.html"}},[e._v("restarted")]),e._v(".")],1),e._v(" "),o("li",[e._v("Credentials to your database have changed. Contact your database administrator for help.")]),e._v(" "),o("li",[e._v("Your database server does not accept network requests from Workato or the server that has our OPA installed. Configure your network access control to allow access to Workato or our OPAs.")])]),e._v(" "),o("h2",{attrs:{id:"logic-errors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logic-errors"}},[e._v("#")]),e._v(" Logic errors")]),e._v(" "),o("h3",{attrs:{id:"infinite-loops"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#infinite-loops"}},[e._v("#")]),e._v(" Infinite loops")]),e._v(" "),o("p",[e._v("Infinite loops can occur in Workato when actions inside a recipe trigger the recipe yet again. This is not exclusive to databases. "),o("router-link",{attrs:{to:"/recipes/infinite-loops.html"}},[e._v("Here are some ways you can detect and solve them")]),e._v(".\nWhen building recipes that are triggered on new rows in a table as well as inserting rows into that same table i.e. performing some data enrichment or data transformation on existing data, here are some ways to prevent infinite loops from occurring:")],1),e._v(" "),o("ul",[o("li",[e._v("Creating a column in your table that denotes whether that same column as been processed by Workato (detailed further in our infinite loop documentation)")]),e._v(" "),o("li",[e._v("Creating separate tables for raw unprocessed data and transformed data")])]),e._v(" "),o("h3",{attrs:{id:"multiple-copies-of-the-same-record"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#multiple-copies-of-the-same-record"}},[e._v("#")]),e._v(" Multiple copies of the same record")]),e._v(" "),o("p",[e._v("When using insert actions, job runs that raise errors but have completed the insert row action step will reinsert rows when the job is repeated. This could result in multiple copies of the same record being inserted. Consider using upsert actions that can first search for an existing record before updating one if found or inserting a new record. Find out different use cases and when to use either in our "),o("router-link",{attrs:{to:"/connectors/oracle/best-practices.html#when-to-use-update-insert-and-upsert-actions"}},[e._v("best practices")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"missing-or-invalid-values"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#missing-or-invalid-values"}},[e._v("#")]),e._v(" Missing or invalid values")]),e._v(" "),o("p",[e._v("Oracle allows you to validate new data before inserting them into tables to ensure data integrity using "),o("code",[e._v("CONSTRAINTS")]),e._v(". Constraints on data can be defined in Oracle itself when tables are created or altered and are used to make sure data integrity is maintained. You may not be aware of these constraints when designing a recipe. For example, a column that has a UNIQUE constraint cannot be guaranteed until an actual job is run. During recipe run-time, errors will be raised when these constraints are violated. The following screenshot shows a job error when no input is given for a field that has a "),o("code",[e._v("CHECK")]),e._v(" constraint. The error message highlights the check constraint as well as the constraint name ("),o("code",[e._v("ROOT.SYS_C008445")]),e._v(" in this case) which can be searched for inside the database.")]),e._v(" "),o("p",[o("DocImage",{attrs:{src:r(786),alt:"Common-error-invalid-values",width:"1047",height:"861"}})],1),e._v(" "),o("p",[e._v("Here are some possible reasons and fixes for missing values:")]),e._v(" "),o("ul",[o("li",[e._v("Your primary key column is not auto-incrementing. Alter the column to be an identity column which auto-increments after every insert")]),e._v(" "),o("li",[e._v("The column has an "),o("code",[e._v("unique")]),e._v(" constraint and results duplicate values being rejected. Consider using the upsert action to update record instead of inserting a new one.")]),e._v(" "),o("li",[e._v("The datapill entered during recipe run-time returned a "),o("code",[e._v("NULL")]),e._v(" value. When this was inserted in a column with "),o("code",[e._v("NOT NULL")]),e._v(" constraint, an error was thrown. "),o("router-link",{attrs:{to:"/recipes/recipe-job-errors.html#missing-required-fields-at-run-time"}},[e._v("More info here.")]),e._v(" Consider adding logical checks for "),o("code",[e._v("NULL")]),e._v(" values and passing default values in when need. This can be accomplished with "),o("router-link",{attrs:{to:"/formulas/formula-mode.html"}},[e._v("Workato's formula mode.")])],1)])])}),[],!1,null,null,null);t.default=s.exports},786:function(e,t,r){e.exports=r.p+"assets/img/Common-error-invalid-values.fd56a6f9.png"}}]);