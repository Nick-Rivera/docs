(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{473:function(t,a,e){"use strict";e.r(a);var s=e(3),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"编译和预编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译和预编译"}},[t._v("#")]),t._v(" 编译和预编译")]),t._v(" "),e("h2",{attrs:{id:"handlebars-compile-template-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-compile-template-options"}},[t._v("#")]),t._v(" "),e("code",[t._v("Handlebars.compile(template, options)")])]),t._v(" "),e("p",[t._v("编译一个模版以立即运行。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" template "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Handlebars"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{foo}}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("支持多种选项以更改模版的执行方式。")]),t._v(" "),e("div",{pre:!0},[e("ul",[e("li",[e("code",[t._v("data")]),t._v(": 设置为 false 以终止 "),e("code",[t._v("@data")]),t._v(" 跟踪。")]),t._v(" "),e("li",[e("code",[t._v("compat")]),t._v(": 设置为 true 以允许递归领域查找。")]),t._v(" "),e("li",[e("code",[t._v("knownHelpers")]),t._v(": 将已知在模版运行时会真实存在的助手代码列表 Hash 化。输入本参数会使编译器在一些情况下优化。内置助手代码\n已经在本列表里包含，但若设置本项为 "),e("code",[t._v("false")]),t._v("，内置的助手代码可能会被忽视。")]),t._v(" "),e("li",[e("code",[t._v("knownHelpersOnly")]),t._v(": 设置为 true 以允许基于已知助手代码列表的进一步优化。")]),t._v(" "),e("li",[e("code",[t._v("noEscape")]),t._v(": 设置为 true 以避免 HTML 的内容转义。")]),t._v(" "),e("li",[e("code",[t._v("strict")]),t._v(": 在严格模式下运行。在这个模式下，模版将会对缺失参数抛出异常，而非静默忽略。同时，这种模式将会禁止逆操作，比如\n"),e("code",[t._v("{{^foo}}{{/foo}}")]),t._v("，除非领域被特意包含在源对象中。")]),t._v(" "),e("li",[e("code",[t._v("assumeObjects")]),t._v(": 在遍历路径时，不再检查对象是否存在。这是严格模式的子集，本子集在已知输入安全的情况下会生成最优模版。")]),t._v(" "),e("li",[e("code",[t._v("preventIndent")]),t._v(": 默认情况下，缩进的代码片段调用将会导致代码片段整体全部被缩进。在代码片段写入 "),e("code",[t._v("pre")]),t._v(" 标签时，这会造成未\n预料到的结果。将本项设置成 "),e("code",[t._v("true")]),t._v(" 可以避免这种自动缩进的功能。")]),t._v(" "),e("li",[e("code",[t._v("ignoreStandalone")]),t._v(": 当设置为 "),e("code",[t._v("true")]),t._v(" 时，将不会去除单独的标签。在这种情况下，不在同一行的代码块和代码片段将不会去除本行\n里的空格。")]),t._v(" "),e("li",[e("code",[t._v("explicitPartialContext")]),t._v(": 对代码片段的上下文进行精确设置。当开启时，没有设置上下文的代码片段将会依托空对象执行。")])])]),e("h2",{attrs:{id:"handlebars-precompile-template-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-precompile-template-options"}},[t._v("#")]),t._v(" "),e("code",[t._v("Handlebars.precompile(template, options)")])]),t._v(" "),e("p",[t._v("对一个模版进行预编译，这样可以直接将模版送到客户端并执行而不需要再编译。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" templateSpec "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Handlebars"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("precompile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{foo}}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("与 "),e("code",[t._v("Handlebars.compile")]),t._v(" 方法的参数相同，并且额外的参数有：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("srcName")]),t._v(": 生成输入文件的源键值表。当运行时，返回的结构为 "),e("code",[t._v("{code, map}")]),t._v("。 "),e("code",[t._v("code")]),t._v(" 包含模版的定义，"),e("code",[t._v("map")]),t._v(" 包含源键值表。")]),t._v(" "),e("li",[e("code",[t._v("destName")]),t._v(": 可选，本参数可以与 "),e("code",[t._v("srcName")]),t._v(" 一起使用以在生成源键值表的时候同时提供目标文件的名称。")])]),t._v(" "),e("h2",{attrs:{id:"handlebars-template-templatespec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handlebars-template-templatespec"}},[t._v("#")]),t._v(" "),e("code",[t._v("Handlebars.template(templateSpec)")])]),t._v(" "),e("p",[t._v("设置一个已经被 "),e("code",[t._v("Handlebars.precompile")]),t._v(" 预编译的模版。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" template "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Handlebars"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("templateSpec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);