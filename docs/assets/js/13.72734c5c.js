(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{478:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"datepicker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datepicker"}},[t._v("#")]),t._v(" Datepicker")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#demo"}},[t._v("Demo")])]),e("li",[e("a",{attrs:{href:"#props"}},[t._v("Props")])]),e("li",[e("a",{attrs:{href:"#events"}},[t._v("Events")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),e("demo",[e("datepicker",{attrs:{value:"2019-08-31 23:55",mode:"datetime"}})],1),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("datepicker")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("value")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2019-08-31 23:55"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("mode")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("datetime"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("datepicker")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),e("prop",{attrs:{name:"name",type:"String"}},[t._v("\n  The "),e("code",[t._v("name")]),t._v(" attribute of the input element\n")]),t._v(" "),e("prop",{attrs:{name:"value",type:"String"}},[t._v("\n  Initial value, it needs to have a format such as 2017-03-01 or 2017-03-01 12:10\n")]),t._v(" "),e("prop",{attrs:{name:"id",type:"String"}},[t._v("\n  The "),e("code",[t._v("id")]),t._v(" attribute of the input element\n")]),t._v(" "),e("prop",{attrs:{name:"container-class",type:"String"}},[t._v("\n  The class/classes of the container element\n")]),t._v(" "),e("prop",{attrs:{name:"formatter",type:"Function","default-value":"null"}},[e("p",[t._v('\n    Callback used for formatting the date input.\n    It receives current date in "YYYY-MM-DD (HH:MM)" format as a parameter.\n    Can be easily used with '),e("code",[t._v("moment.js")]),t._v(":\n  ")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("formatter")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token parameter"}},[t._v("date")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("moment")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("locale")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token keyword"}},[t._v("this")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("momentLocale"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("format")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token keyword"}},[t._v("this")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("format"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("prop",{attrs:{name:"use-am",type:"Boolean","default-value":"false"}},[t._v("\n  If true the hour will be displayed in AM/PM format\n")]),t._v(" "),e("prop",{attrs:{name:"days-of-week",type:"Array","default-value":"['Su', 'Mo', 'Tu', ...]"}},[t._v("\n  Days of the week\n")]),t._v(" "),e("prop",{attrs:{name:"highlight-today",type:"Boolean","default-value":"true"}},[t._v("\n  Highlights today in the calendar\n")]),t._v(" "),e("prop",{attrs:{name:"icons",type:"Object","default-value":"{ left: 'glyphicon glyphicon-chevron-left', ... }"}},[t._v("\n  Icons for UI buttons\n")]),t._v(" "),e("prop",{attrs:{name:"mode",type:"String","default-value":"date"}},[t._v("\n  Mode can be set to date, datetime or time\n")]),t._v(" "),e("prop",{attrs:{name:"months",type:"Array","default-value":"['January', 'February', 'March', ...]"}},[t._v("\n  Month names\n")]),t._v(" "),e("prop",{attrs:{name:"months-short",type:"Array","default-value":"['Jan', 'Feb', 'Mar', ...]"}},[t._v("\n  Short month names, used on the month selector view\n")]),t._v(" "),e("prop",{attrs:{name:"placeholder",type:"String"}},[t._v("\n  The "),e("code",[t._v("placeholder")]),t._v(" attribute of the input element\n")]),t._v(" "),e("prop",{attrs:{name:"translations",type:"Object","default-value":"{ today: 'Go to today', clear: 'Clear selection', ... }"}},[t._v("\n  Allows to override tooltips with messages in another language\n")]),t._v(" "),e("prop",{attrs:{name:"disabled",type:"Boolean","default-value":"false"}},[t._v("\n  Disable input\n")]),t._v(" "),e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),e("event",{attrs:{name:"changed",parameters:"Selected date (String)"}},[t._v("\n  Emitted when the date is changed\n")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);