(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{227:function(t,n,o){},228:function(t,n,o){},254:function(t,n,o){"use strict";var e=o(227);o.n(e).a},255:function(t,n,o){"use strict";var e=o(228);o.n(e).a},271:function(t,n,o){"use strict";o.r(n);o(22);var e=o(231),c=o(190);o(0).a.use(e.a);var i={components:{GButton:c.a},data:function(){return{content:"\n        <style>\n          .gulu-toast {\n            z-index: 30;\n          }\n        </style>\n        <div>\n          <g-button @click=\"onClickButton\">上方弹出</g-button>\n        </div>\n        methods: {\n          onClickButton () {\n            this.$toast('你知道我在等你吗？', {\n              closeButton: {\n                text: '知道了',\n                callback: () => {\n                  console.log('他说知道了')\n                }\n              }\n            })\n          }\n        },\n    ".replace(/^ {8}/gm,"").trim()}},methods:{onClickButton:function(){this.$toast("你知道我在等你吗？",{closeButton:{text:"知道了",callback:function(){console.log("他说知道了")}}})}}},s=(o(254),o(255),o(1)),u=Object(s.a)(i,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticStyle:{"padding-top":"16px"}},[o("h2",[t._v("设置关闭按钮")]),t._v(" "),t._m(0),t._v(" "),o("div",[o("g-button",{on:{click:t.onClickButton}},[t._v("上方弹出")])],1),t._v(" "),t._m(1),t._v(" "),o("pre",[o("code",[t._v(t._s(t.content))])])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"868ad4fc",null);u.options.__file="toast-demo-2.vue";n.default=u.exports}}]);