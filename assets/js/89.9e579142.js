(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{2160:function(t,e,o){"use strict";o.r(e);var i=o(0),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"microsoft-dynamics-crm"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#microsoft-dynamics-crm"}},[t._v("#")]),t._v(" Microsoft Dynamics CRM")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://dynamics.microsoft.com/en-us/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Dynamics CRM"),i("OutboundLink")],1),t._v(" is a customer relationship management software package developed by Microsoft. It is built on the Microsoft Dynamics 365 platform, allowing users to easily extend and tailor the application for their business.")]),t._v(" "),i("h2",{attrs:{id:"how-to-connect-to-microsoft-dynamics-crm-on-workato"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-to-microsoft-dynamics-crm-on-workato"}},[t._v("#")]),t._v(" How to connect to Microsoft Dynamics CRM on Workato")]),t._v(" "),i("h2",{attrs:{id:"connecting-to-a-cloud-microsoft-dynamics-crm-instance"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-a-cloud-microsoft-dynamics-crm-instance"}},[t._v("#")]),t._v(" Connecting to a cloud Microsoft Dynamics CRM instance")]),t._v(" "),i("p",[t._v("In order to connect to Microsoft CRM Dynamics on Workato, you need to obtain a client ID by registering your Microsoft CRM Dynamics app with Azure Active Directory. We walk through the process of registering Microsoft CRM Dynamics below.")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Sign in to the Microsoft Azure management portal by using an account with administrator permission. You must use an account in the same Office 365 subscription (tenant) as you intend to register the app with. You can also access the Microsoft Azure portal through the Office 365 admin center by expanding the ADMIN item in the left navigation pane and selecting Azure AD.")])]),t._v(" "),i("li",[i("p",[t._v("Click on "),i("strong",[t._v("Azure Active Directory (AAD)")]),t._v(" in the left side menu.")])])]),t._v(" "),i("p",[i("DocImage",{attrs:{src:o(475),alt:"Azure Directory",width:"1220",height:"718"}}),t._v(" "),i("em",[t._v("Azure Active Directory is located on the navigation menu on the left")])],1),t._v(" "),i("ol",{attrs:{start:"3"}},[i("li",[t._v("Click "),i("strong",[t._v("App registrations")]),t._v(".")])]),t._v(" "),i("p",[i("DocImage",{attrs:{src:o(476),alt:"App Registration",width:"1219",height:"784"}}),t._v(" "),i("em",[t._v("App registrations is located on the navigation menu on the left")])],1),t._v(" "),i("ol",{attrs:{start:"4"}},[i("li",[t._v("If you already have an application, use that ID. If not, proceed to click "),i("strong",[t._v("Add")]),t._v('. Provide a name for the application to add (typically "Workato"). Choose the application type as “Native” and provide a redirect URI value of '),i("code",[t._v("https://www.workato.com/oauth/callback")]),t._v(". Click "),i("strong",[t._v("Create")]),t._v(" in the bottom of the page.")])]),t._v(" "),i("p",[i("DocImage",{attrs:{src:o(477),alt:"Add application",width:"1417",height:"766"}}),t._v(" "),i("em",[t._v("Create the application")])],1),t._v(" "),i("ol",{attrs:{start:"5"}},[i("li",[t._v("Click on the newly created application to look at the app details.")])]),t._v(" "),i("p",[i("DocImage",{attrs:{src:o(478),alt:"Add",width:"741",height:"335"}}),t._v(" "),i("em",[t._v("Click on the newly created application")])],1),t._v(" "),i("ol",{attrs:{start:"6"}},[i("li",[t._v("In the right menu click "),i("strong",[t._v("Required permissions")]),t._v(".")])]),t._v(" "),i("p",[i("DocImage",{attrs:{src:o(479),alt:"Required permissions",width:"1418",height:"755"}}),t._v(" "),i("em",[t._v("Click Required permissions")])],1),t._v(" "),i("ol",{attrs:{start:"7"}},[i("li",[t._v("Add API access. Click "),i("em",[t._v("Add")]),t._v(" > "),i("em",[t._v("Select an API")]),t._v(" > "),i("em",[t._v("Dynamics CRM Online")]),t._v(". Then, check the "),i("strong",[t._v("Access CRM Online as organization users")]),t._v(" checkbox. Click on "),i("strong",[t._v("Done")])])]),t._v(" "),i("p",[i("DocImage",{attrs:{src:o(480),alt:"Dynamics CRM",width:"1418",height:"765"}}),t._v(" "),i("em",[t._v("Add Dynamics CRM Online API access")])],1),t._v(" "),i("ol",{attrs:{start:"8"}},[i("li",[t._v("Click on "),i("strong",[t._v("Grant permissons")]),t._v(" (right next to "),i("strong",[t._v("+Add")]),t._v(") and click "),i("strong",[t._v("Yes")]),t._v(".")])]),t._v(" "),i("p",[i("DocImage",{attrs:{src:o(481),alt:"Grant permissions",width:"1746",height:"942"}}),t._v(" "),i("em",[t._v("Grant permissions")])],1),t._v(" "),i("ol",{attrs:{start:"9"}},[i("li",[t._v("Use the application ID as the client ID to connect to Workato.")])]),t._v(" "),i("p",[i("DocImage",{attrs:{src:o(482),alt:"Application ID",width:"899",height:"739"}}),t._v(" "),i("em",[t._v("Retrieve the Application ID")])],1),t._v(" "),i("ol",{attrs:{start:"9"}},[i("li",[i("a",{attrs:{href:"#extending-refresh-token-expiration-time"}},[t._v("Extend the refresh token expiration time")]),t._v(" if required.")])]),t._v(" "),i("h2",{attrs:{id:"connecting-to-an-on-premise-microsoft-dynamics-crm-instance"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-an-on-premise-microsoft-dynamics-crm-instance"}},[t._v("#")]),t._v(" Connecting to an on-premise Microsoft Dynamics CRM instance")]),t._v(" "),i("p",[t._v("In order to connect to Microsoft CRM Dynamics on Workato, you need to obtain a client ID by registering Microsoft CRM Dynamics App with Active Directory Federation Service. Click "),i("a",{attrs:{href:"https://technet.microsoft.com/itpro/powershell/windows/adfs/add-adfsclient",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),i("OutboundLink")],1),t._v(" to read more on how to register an on-premise Dynamics app with Active Directory Federation Service.")]),t._v(" "),i("p",[t._v("Remember to "),i("a",{attrs:{href:"#extending-refresh-token-expiration-time"}},[t._v("extend the refresh token expiration time")]),t._v(" if required.")]),t._v(" "),i("h2",{attrs:{id:"extending-refresh-token-expiration-time"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#extending-refresh-token-expiration-time"}},[t._v("#")]),t._v(" Extending refresh token expiration time")]),t._v(" "),i("p",[t._v("Whenever you connect to a Dynamics app, Workato gets an access token to be able to read and write to your Dynamics instance. This access token is valid until its expiry date. Workato also gets an accompanying refresh token with this access token. Whenever your access token expires, Workato can request for a new access token with the refresh token. Dynamics will check that this refresh token is still valid (i.e. the token has not been revoked), and provide a new pair of access and refresh tokens.")]),t._v(" "),i("p",[t._v("However, refresh tokens have expiry dates as well. If both access token and refresh token expires before Workato requests for new tokens, the Dynamics connection will no longer be valid, and a re-connection is required from the user. When this happens, Workato's requests to Dynamics will get a 400 response. If you are using a Dynamics CRM trigger, this results in your recipe experiencing "),i("router-link",{attrs:{to:"/recipes/error-notifications.html#trigger-errors"}},[t._v("trigger errors")]),t._v(". If you are using a Dynamics CRM action, this results in "),i("router-link",{attrs:{to:"/recipes/error-notifications.html#action-errors"}},[t._v("job errors")]),t._v(".")],1),t._v(" "),i("p",[t._v("To ensure your recipes run continuously without requiring intervention, extend your refresh token expiration time, or set it to unlimited. You can apply and scope it to an OAuth application instead of applying it to the entire organization.")]),t._v(" "),i("p",[t._v("Read more about token lifetimes in the "),i("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/active-directory-configurable-token-lifetimes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft documentation"),i("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports},475:function(t,e,o){t.exports=o.p+"assets/img/azure-directory.2e1d0ac7.png"},476:function(t,e,o){t.exports=o.p+"assets/img/app-registrations.afb800d0.png"},477:function(t,e,o){t.exports=o.p+"assets/img/add.fe48a318.gif"},478:function(t,e,o){t.exports=o.p+"assets/img/click-on-app.7b12f060.png"},479:function(t,e,o){t.exports=o.p+"assets/img/permission.6d2f8b5c.png"},480:function(t,e,o){t.exports=o.p+"assets/img/dynamics.57b64d3c.gif"},481:function(t,e,o){t.exports=o.p+"assets/img/grant-permissions.6e1f375e.png"},482:function(t,e,o){t.exports=o.p+"assets/img/application.d0b5735c.png"}}]);