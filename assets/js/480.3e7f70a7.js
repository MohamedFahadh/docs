(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{2289:function(t,e,a){"use strict";a.r(e);var n=a(0),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"amazon-s3-action-download-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amazon-s3-action-download-file"}},[t._v("#")]),t._v(" Amazon S3 action - Download file")]),t._v(" "),a("p",[t._v("This action downloads contents of a file in Amazon S3. File contents can be used in subsequent steps of the recipe to upload the file into other applications.")]),t._v(" "),a("p",[t._v("This action uses "),a("router-link",{attrs:{to:"/features/file-streaming.html"}},[t._v("streaming mechanism")]),t._v(" and can support large file. However, the maximum file size you can download depends on how long the download takes. It is limit to Workato's job runtime limit ("),a("strong",[t._v("5400 seconds")]),t._v("). Consider enabling "),a("a",{attrs:{href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon S3 transfer acceleration"),a("OutboundLink")],1),t._v(" to speed up the download.")],1),t._v(" "),a("h2",{attrs:{id:"input-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Bucket region")]),t._v(" "),a("td",[t._v("The region of the bucket that the file resides, e.g. us-west-2. In Amazon S3, go to "),a("strong",[t._v("Bucket > Properties > Static website hosting")]),t._v(" to find your region in the Endpoint URL.")])]),t._v(" "),a("tr",[a("td",[t._v("Bucket")]),t._v(" "),a("td",[t._v("The bucket that the file resides. Select a bucket from the picklist or enter the bucket name directly.")])]),t._v(" "),a("tr",[a("td",[t._v("File")]),t._v(" "),a("td",[t._v("The file to download. Select a file from the picklist or enter file path directly.")])]),t._v(" "),a("tr",[a("td",[t._v("Use transfer acceleration")]),t._v(" "),a("td",[t._v("Select Yes to accelerate data transfer. Go to "),a("strong",[t._v("Bucket > Properties > Transfer acceleration")]),t._v(" to enable "),a("a",{attrs:{href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("transfer acceleration"),a("OutboundLink")],1),t._v(" before using this setting.")])]),t._v(" "),a("tr",[a("td",[t._v("Chunk size"),a("br"),t._v("(in kilobytes)")]),t._v(" "),a("td",[t._v("File contents will be "),a("router-link",{attrs:{to:"/features/file-streaming.html"}},[t._v("streamed")]),t._v(" in chunks of this size. Default is 1024 KB, minimum is 32 KB. Workato manages the chunk size automatically by default. Configure this when you want to optimize the data throughput yourself. Larger chunk size will increase throughput, but may exceed API limit.")],1)])])]),t._v(" "),a("h2",{attrs:{id:"output-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("File contents")]),t._v(" "),a("td",[t._v("The contents of the file. This is a "),a("router-link",{attrs:{to:"/features/file-streaming.html"}},[t._v("streaming object")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[t._v("Size")]),t._v(" "),a("td",[t._v("The size of the file in bytes.")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);