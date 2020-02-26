(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{525:function(a,t,s){"use strict";s.r(t);var e=s(3),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表达式"}},[a._v("#")]),a._v(" 表达式")]),a._v(" "),s("div",{pre:!0},[s("p",[a._v("Handlebars 表达式是 Handlebars 模板的基本单位。 您可以在 "),s("code",[a._v("{{mustache}}")]),a._v(" 中单独使用它们或将它们用作 Handlebars 助手代码，\n或将其用作 Hash 参数中的值。")])]),s("h2",{attrs:{id:"基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[a._v("#")]),a._v(" 基本用法")]),a._v(" "),s("p",[a._v("Handlebars 表达式是一些以双花括号 "),s("code",[a._v("{{}}")]),a._v(" 括起来的内容。在以下的模版中，"),s("code",[a._v("firstname")]),a._v(" 是一个被声明为表达式的变量，且被双花\n括号括起来。")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/simple-expressions.md",show:"template"}}),a._v(" "),s("p",[a._v("如果将以下对象输入模板：")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/simple-expressions.md",show:"input"}}),a._v(" "),s("p",[a._v("表达式会编译为如下输出：")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/simple-expressions.md",show:"output"}}),a._v(" "),s("h2",{attrs:{id:"路径表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路径表达式"}},[a._v("#")]),a._v(" 路径表达式")]),a._v(" "),s("p",[a._v("Handlebars 表达式亦可为以句点分隔的路径。")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/path-expressions-dot.md",show:"template"}}),a._v(" "),s("p",[a._v("这个表达式将会在输入对象中查找 "),s("code",[a._v("person")]),a._v(" 属性，然后查找 "),s("code",[a._v("person")]),a._v(" 对象中的 "),s("code",[a._v("firstname")]),a._v(" 和"),s("code",[a._v("lastname")]),a._v("属性。 person 对象内的\n属性。")]),a._v(" "),s("p",[a._v("将如下输入传入模版：")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/path-expressions-dot.md",show:"input"}}),a._v(" "),s("p",[a._v("会获得如下输出：")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/path-expressions-dot.md",show:"output"}}),a._v(" "),s("p",[a._v("Handlebars 同时支持一个已弃用的 "),s("code",[a._v("/")]),a._v(" 语法，因此你可以将上面的例子这样写：")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/path-expressions-slash.md",show:"template"}}),a._v(" "),s("h2",{attrs:{id:"更改上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改上下文"}},[a._v("#")]),a._v(" 更改上下文")]),a._v(" "),s("p",[a._v("一些诸如 "),s("code",[a._v("#with")]),a._v(" and "),s("code",[a._v("#each")]),a._v(" 的助手代码使你能够操作嵌套的对象。当你在路径中包含 "),s("code",[a._v("../")]),a._v(" 时，Handlebars 将转回父级上下文。")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/path-expressions-dot-dot",show:"template"}}),a._v(" "),s("p",[a._v("即使在注释的上下文中输出了名称，它仍然可以返回到主上下文（根对象）以检索前缀。")]),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"custom-block warning"}},[s("p",{pre:!0,attrs:{class:"custom-block-title"}},[a._v("注意")]),a._v(" "),s("p",[s("code",[a._v("../")]),a._v(" 解析的确切值根据调用该代码块的助手代码不同而有所不同。仅在上下文更改必要时使用 "),s("code",[a._v("../")]),a._v("。诸如 "),s("code",[a._v("{{#each}}")]),a._v(" 之类的子助\n手代码将需要使用 "),s("code",[a._v("../")]),a._v(" ，而诸如 "),s("code",[a._v("{{#if}}")]),a._v(" 之类的助手代码则不需要。")]),a._v(" "),s("div",{pre:!0,attrs:{class:"language-handlebars extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-handlebars"}},[s("code",[s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("permalink")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("#each")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("comments")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("permalink")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("#if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("title")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("permalink")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("/if")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("/each")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n")])])]),s("p",[a._v("在此示例中，以上所有引用相同的前缀值，即使它们位于不同的块中也是如此。这样的行为是从 Handlebars 4 开始的，\n"),s("a",{pre:!0,attrs:{href:"https://github.com/wycats/handlebars.js/blob/master/release-notes.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("发行说明"),s("OutboundLink",{pre:!0})],1),a._v(" 也讨论了先前的行为作为迁移计划。\nHandlebars 还允许通过 this 来解决助手和数据字段之间的名称冲突。参考：")])])]),s("h2",{attrs:{id:"文字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文字"}},[a._v("#")]),a._v(" 文字")]),a._v(" "),s("p",[a._v("除了以下字符，标识符可以是任何 Unicode 文本：")]),a._v(" "),s("p",[s("em",[a._v("Whitespace")]),a._v(" "),s("code",[a._v("!")]),a._v(" "),s("code",[a._v('"')]),a._v(" "),s("code",[a._v("#")]),a._v(" "),s("code",[a._v("%")]),a._v(" "),s("code",[a._v("&")]),a._v(" "),s("code",[a._v("'")]),a._v(" "),s("code",[a._v("(")]),a._v(" "),s("code",[a._v(")")]),a._v(" "),s("code",[a._v("*")]),a._v(" "),s("code",[a._v("+")]),a._v(" "),s("code",[a._v(",")]),a._v(" "),s("code",[a._v(".")]),a._v(" "),s("code",[a._v("/")]),a._v(" "),s("code",[a._v(";")]),a._v(" "),s("code",[a._v("<")]),a._v(" "),s("code",[a._v("=")]),a._v(" "),s("code",[a._v(">")]),a._v(" "),s("code",[a._v("@")]),a._v(" "),s("code",[a._v("[")]),a._v(" "),s("code",[a._v("\\")]),a._v(" "),s("code",[a._v("]")]),a._v(" "),s("code",[a._v("^")]),a._v(" "),s("code",[a._v("`")]),a._v(" "),s("code",[a._v("{")]),a._v(" "),s("code",[a._v("|")]),a._v(" "),s("code",[a._v("}")]),a._v(" "),s("code",[a._v("~")])]),a._v(" "),s("p",[a._v("除此之外，"),s("code",[a._v("true")]),a._v(", "),s("code",[a._v("false")]),a._v(", "),s("code",[a._v("null")]),a._v(" 和 "),s("code",[a._v("undefined")]),a._v(" 只允许在路径表达式的开头出现。")]),a._v(" "),s("p",[a._v("若想引用一个并非合法的标识符，你可以使用 "),s("code",[a._v("[")]),a._v("。在路径表达式中你不必使用 "),s("code",[a._v("]")]),a._v(" 来关闭它，但其他表达式中是需要的。")]),a._v(" "),s("p",[a._v("JavaScript 样式的字符串如 "),s("code",[a._v('"')]),a._v(" 和 "),s("code",[a._v("'")]),a._v(" 也是可以使用的。")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/literal-segments.md",show:"template"}}),a._v(" "),s("h2",{attrs:{id:"html-转义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-转义"}},[a._v("#")]),a._v(" HTML 转义")]),a._v(" "),s("div",{pre:!0},[s("p",[a._v("在 Handlebars 中，由 "),s("code",[a._v("{{expression}}")]),a._v(" 返回的值是 HTML 转义的。也就是说，如果一个表达式包含 "),s("code",[a._v("&")]),a._v("，那么返回的 HTML 转义的内\n容将会包含 "),s("code",[a._v("&amp;")]),a._v("。如果你不希望 Handlebars 转义字符的话，请使用 "),s("code",[a._v("{{{")]),a._v("。")])]),s("p",[a._v("在以下模板中，你将了解如何生成 HTML 转义的和原始的输出。")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/html-escaping.md",show:"template"}}),a._v(" "),s("p",[a._v("将如下特殊的输入传入模版：")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/html-escaping.md",show:"input"}}),a._v(" "),s("div",{pre:!0},[s("p",[a._v("使用 "),s("code",[a._v("{{{")]),a._v(" 会输出原始结果。否则将会输出 HTML 转义之后的结果，如下面的例子所示。")])]),s("ExamplePart",{attrs:{examplePage:"/zh/examples/html-escaping.md",show:"output"}}),a._v(" "),s("h2",{attrs:{id:"助手代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#助手代码"}},[a._v("#")]),a._v(" 助手代码")]),a._v(" "),s("p",[a._v("助手代码可以实现一些并非 Handlesbars 语言本身的功能。")]),a._v(" "),s("p",[a._v("在运行时可以用 "),s("code",[a._v("HandleBars.registerHelper")]),a._v(" 可以注册助手代码。例如为了将字符串中的所有字符转换为大写。")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-simple.md",show:"preparationScript"}}),a._v(" "),s("p",[a._v("Handlebars 助手代码的调用需要一个简单标识符，且可紧接一个或多个参数（以空格分割）。每一参数为一个 Handlebars 表达式，且\n将会用于上方“基本用法”中相同的方法来计算。")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-simple.md",show:"template"}}),a._v(" "),s("p",[a._v("此例子中，"),s("code",[a._v("load")]),a._v(" 是助手代码的名称，而 "),s("code",[a._v("lastname")]),a._v(" 为传递给助手代码的参数。此模板，将会将输入的 "),s("code",[a._v("uppercase")]),a._v(" 属性正确地转换\n为大写：")]),a._v(" "),s("Flex",[s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-simple.md",show:"input"}}),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-simple.md",show:"output"}})],1),a._v(" "),s("h3",{attrs:{id:"避免助手代码的返回值被-html-转义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免助手代码的返回值被-html-转义"}},[a._v("#")]),a._v(" 避免助手代码的返回值被 HTML 转义")]),a._v(" "),s("p",[a._v("即使当使用 "),s("code",[a._v("{{")]),a._v(" 而非 "),s("code",[a._v("{{{")]),a._v(" 来调用助手代码时，当你的助手代码返回一个 "),s("code",[a._v("Handlebars.Safestring")]),a._v(" 的实例，返回值也并不会被转义\n。你需要留心将所有参数正确地使用 "),s("code",[a._v("Handlebars.escapeExpression")]),a._v(" 来转义。")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-safestring.md",show:"preparationScript"}}),a._v(" "),s("h3",{attrs:{id:"具有多个参数的助手代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具有多个参数的助手代码"}},[a._v("#")]),a._v(" 具有多个参数的助手代码")]),a._v(" "),s("p",[a._v("我们观察一下另一个具有两个参数的助手代码：")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-multiple-parameters.md",show:"template"}}),a._v(" "),s("p",[a._v("此例子中，Handlebars 将把两个参数传递给 "),s("code",[a._v("link")]),a._v(" 助手代码：字符串 "),s("code",[a._v("See Website")]),a._v(" 与从下面提供的 "),s("code",[a._v("people")]),a._v(" 输入对象中的\n"),s("code",[a._v("people.value")]),a._v("。")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-multiple-parameters.md",show:"input"}}),a._v(" "),s("p",[a._v("如同代码中所述，此助手代码 "),s("code",[a._v("link")]),a._v(" 用于生成一个超链接。")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-multiple-parameters.md",show:"preparationScript"}}),a._v(" "),s("p",[a._v("我们会从上面的输入获得如下输出：")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-multiple-parameters.md",show:"output"}}),a._v(" "),s("p",[a._v("在此例中，你可以使用同一助手代码，但使用基于 "),s("code",[a._v("people.text")]),a._v(" 的值的动态文本：")]),a._v(" "),s("Flex",[s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-dynamic-parameters.md",show:"template"}}),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-dynamic-parameters.md",show:"input"}})],1),a._v(" "),s("h3",{attrs:{id:"字面量参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字面量参数"}},[a._v("#")]),a._v(" 字面量参数")]),a._v(" "),s("p",[a._v("帮助代码调用亦可含字面量，作为参数抑或是 Hash 参数。支持的字面量有数字、字符串、"),s("code",[a._v("true")]),a._v(", "),s("code",[a._v("false")]),a._v(", "),s("code",[a._v("null")]),a._v(" 及 "),s("code",[a._v("undefined")]),a._v("：")]),a._v(" "),s("Flex",[s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-literals",show:"template"}})],1),a._v(" "),s("h3",{attrs:{id:"含有-hash-参数的助手代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#含有-hash-参数的助手代码"}},[a._v("#")]),a._v(" 含有 Hash 参数的助手代码")]),a._v(" "),s("p",[a._v("Handlebars 提供了额外的元数据，例如 Hash 参数来作为助手代码的最后一个参数。")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-hash-arguments.md",show:"template"}}),a._v(" "),s("p",[a._v("在此模版中，最后一个参数 "),s("code",[a._v('href=people.url class="people"')]),a._v(" 为传送至助手代码的 Hash 参数。")]),a._v(" "),s("p",[a._v("Hash 参数中的键必须为简单标识符，且值为 Handlebars 表达式。这意味着值可以为简单标识符，路径或字符串。")]),a._v(" "),s("p",[a._v("若将如下输入传入模版，其中 "),s("code",[a._v("person.url")]),a._v(" 的值可以从 "),s("code",[a._v("person")]),a._v(" 中获取。")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-hash-arguments.md",show:"input"}}),a._v(" "),s("p",[a._v("正如以下助手代码中的描述，Hash 参数可以从最后一个参数 "),s("code",[a._v("options")]),a._v(" 获取，以用于助手代码内部的进一步处理。")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-hash-arguments.md",show:"preparationScript"}}),a._v(" "),s("p",[a._v("上述助手代码产生的输出如下：")]),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-hash-arguments.md",show:"output"}}),a._v(" "),s("p",[a._v("Handlebars 亦提供了使用一个模版块来调用助手代码的机制。块助手代码可用于执行任意次数（包括零次）的代码块并且使用它所选择\n的任意上下文。")]),a._v(" "),s("p",[s("router-link",{staticClass:"button-link",attrs:{to:"/zh/guide/block-helpers.html"}},[a._v("了解更多：块助手代码")])],1),a._v(" "),s("h3",{attrs:{id:"助手代码和属性查找时的消歧义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#助手代码和属性查找时的消歧义"}},[a._v("#")]),a._v(" 助手代码和属性查找时的消歧义")]),a._v(" "),s("p",[a._v("如果助手代码注册时的名称和一个输入的属性名重复，则助手代码的优先级更高。如果你想使用输入的属性，请在其名称前加 "),s("code",[a._v("./")]),a._v(" 或\n"),s("code",[a._v("this.")]),a._v("。（或是已弃用的 "),s("code",[a._v("this/")]),a._v("。）")]),a._v(" "),s("Flex",[s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-data-name-conflict",show:"template"}}),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-data-name-conflict",show:"input"}}),a._v(" "),s("ExamplePart",{attrs:{examplePage:"/zh/examples/helper-data-name-conflict",show:"preparationScript"}})],1),a._v(" "),s("h2",{attrs:{id:"子级表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子级表达式"}},[a._v("#")]),a._v(" 子级表达式")]),a._v(" "),s("p",[a._v("Handlebars 对子级表达式提供了支持，这使你可以在单个 Mustache 模板中调用多个助手代码，并且将内部助手代码调用的返回值作为\n外部助手代码的参数传递。子级表达式使用括号定界。")]),a._v(" "),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("outer-helper")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("inner-helper")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'abc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'def'")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n")])])]),s("p",[a._v("上例中，"),s("code",[a._v("inner-helper")]),a._v(" 会被调用并带有字符串参数 "),s("code",[a._v("'abc'")]),a._v("，同时不论 "),s("code",[a._v("inner-helper")]),a._v(" 返回了什么，返回值都将被作为第一个参数\n传递给 "),s("code",[a._v("outer-helper")]),a._v("（同时 "),s("code",[a._v("'def'")]),a._v(" 会作为第二个参数传递）。")]),a._v(" "),s("h2",{attrs:{id:"空格控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空格控制"}},[a._v("#")]),a._v(" 空格控制")]),a._v(" "),s("p",[a._v("通过在括号中添加一个 "),s("code",[a._v("~")]),a._v(" 字符，你可以从任何 Mustache 模板代码块的任何一侧省略模板中的空格。应用之后，该侧的所有空格将被\n删除，直到第一个位于同一侧的 Handlebars 表达式或非空格字符出现。")]),a._v(" "),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("#each")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("nav")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("~")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("url")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("~")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("#if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("test")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("~")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("title")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("^")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("~")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n      Empty\n    "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("~")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("/if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("~")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("~")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("/each")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n")])])]),s("p",[a._v("以及如下内容：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  nav"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"bar"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"bar"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("输出没有换行符并格式化了空格的结果：")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("bar"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Empty"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("p",[a._v("这扩展了「独立」助手代码（块助手代码、注释、代码片段或是空白符）在换行符时的默认行为。")]),a._v(" "),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("#each")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("nav")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("url")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("#if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("test")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("title")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("^")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n      Empty\n    "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("/if")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("~")]),s("span",{pre:!0,attrs:{class:"token block keyword"}},[a._v("/each")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n")])])]),s("p",[a._v("将会渲染")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  bar\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  Empty\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("h2",{attrs:{id:"转义-handlebars-表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转义-handlebars-表达式"}},[a._v("#")]),a._v(" 转义 Handlebars 表达式")]),a._v(" "),s("div",{pre:!0},[s("p",[a._v("Handlebars 可以从这两种方式中的任何一种转义：「内联转义」或「RAW 块助手代码」。内联转义通过 Mustache 代码块前置 "),s("code",[a._v("\\")]),a._v(" 实现\n，而 RAW 代码块通过使用 "),s("code",[a._v("{{{{")]),a._v(" 实现。")])]),s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[a._v("\\"),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("escaped")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("raw")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}}")])]),a._v("}\n  "),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("escaped")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("{{{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("raw")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[a._v("}}}")])]),a._v("}\n")])])]),s("p",[a._v("RAW 代码块的操作方式与其他 "),s("router-link",{attrs:{to:"/zh/guide/block-helpers.html"}},[a._v("块助手代码")]),a._v(" 均相同，但区别在于它的子内容被 Handlebars 视为一段字符串。")],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);