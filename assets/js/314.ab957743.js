(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{2246:function(e,t,i){"use strict";i.r(t);var a=i(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"on-prem-files-upload-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-prem-files-upload-file"}},[e._v("#")]),e._v(" On-prem files - Upload file")]),e._v(" "),a("p",[e._v("This action uploads a file to an existing folder. You can choose to overwrite contents of an existing file, or upload copies of it with an incremental number appended to the name.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:i(761),alt:"Upload file action",width:"2218",height:"2245"}}),e._v(" "),a("em",[e._v("Upload file action")])],1),e._v(" "),a("h2",{attrs:{id:"input-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Folder")]),e._v(" "),a("td",[e._v("\n        Select the folder to upload the file to. This can be done either by selecting a folder from the pick list, or toggling the input field to text mode and providing the folder path."),a("br"),e._v("\n        This should be relative to the base path you define in the connection profile. Learn about "),a("a",{attrs:{href:"/connectors/on-prem-files.html#relative-path"}},[e._v("relative path")]),e._v(".")])]),e._v(" "),a("tr",[a("td",[e._v("File name")]),e._v(" "),a("td",[e._v("\n        Name of the file to be uploaded. This should only be the file name without any path.\n      ")])]),e._v(" "),a("tr",[a("td",[e._v("File contents")]),e._v(" "),a("td",[e._v("\n        Content of the file to upload. This input field supports "),a("a",{attrs:{href:"/features/file-streaming.html"}},[e._v("streaming")]),e._v(".\n      ")])]),e._v(" "),a("tr",[a("td",[e._v("Overwrite existing file?")]),e._v(" "),a("td",[e._v("\n        If "),a("b",[e._v("Yes")]),e._v(", contents in an existing file with the "),a("b",[e._v("same name and extension")]),e._v(" will be replaced."),a("br"),e._v("\n        If "),a("b",[e._v("No")]),e._v(", a new file will be created with an incremental number appended to the end of the file name. For example, if you are trying to upload "),a("b",[e._v("report.csv")]),e._v(" to a folder that already has a file with that name, "),a("b",[e._v("report_1.csv")]),e._v(" will be created with the new contents. Subsequent uploads will create "),a("b",[e._v("report_2.csv")]),e._v(" and "),a("b",[e._v("report_3.csv")]),e._v(".\n      ")])])])]),e._v(" "),a("h2",{attrs:{id:"output-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",[e._v("Output field")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("File name")]),e._v(" "),a("td",[e._v("Name of the file, with extension.")])]),e._v(" "),a("tr",[a("td",[e._v("File path")]),e._v(" "),a("td",[e._v("This is the path of the file. This path is relative to the base path you define in the connection profile. Learn about "),a("a",{attrs:{href:"/connectors/on-prem-files.html#relative-path"}},[e._v("relative path")]),e._v(".")])]),e._v(" "),a("tr",[a("td",[e._v("File size (bytes)")]),e._v(" "),a("td",[e._v("Size of the file contents in bytes.")])]),e._v(" "),a("tr",[a("td",[e._v("Created time")]),e._v(" "),a("td",[e._v("This is the time that the file was created. This value is set by your OS.")])]),e._v(" "),a("tr",[a("td",[e._v("Last modified time")]),e._v(" "),a("td",[e._v("This is the last modified time of the file. This value is updated by your OS.")])]),e._v(" "),a("tr",[a("td",[e._v("File existed before upload?")]),e._v(" "),a("td",[e._v("If there was a file with the "),a("b",[e._v("same name and extension")]),e._v(" in the selected folder, this datapill with return "),a("code",[e._v("true")]),e._v(". Otherwise, "),a("code",[e._v("false")]),e._v(".")])])])])])}),[],!1,null,null,null);t.default=n.exports},761:function(e,t,i){e.exports=i.p+"assets/img/upload-file-action.b24f2268.png"}}]);