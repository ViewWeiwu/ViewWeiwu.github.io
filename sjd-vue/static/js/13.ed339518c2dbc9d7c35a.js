webpackJsonp([13,18],{20:function(t,e,s){var i=s(34)(s(92),s(68),null,null);t.exports=i.exports},34:function(t,e){t.exports=function(t,e,s,i){var n,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(n=t,a=t.default);var r="function"==typeof a?a.options:a;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),s&&(r._scopeId=s),i){var l=Object.create(r.computed||null);Object.keys(i).forEach(function(t){var e=i[t];l[t]=function(){return e}}),r.computed=l}return{esModule:n,exports:a,options:r}}},35:function(t,e,s){var i=s(34)(s(37),s(36),null,null);t.exports=i.exports},36:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("div",{staticClass:"left",on:{click:t.onLeftClick}},[t.leftArrow?s("i",{staticClass:"iconfont"},[t._v("")]):t._e(),t._v(t._s(t.left))]),t._v(" "),s("div",{staticClass:"title",on:{click:t.onTitleClick}},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"right",on:{click:t.onRightClick}},[t._v(t._s(t.right)),t.rightArrow?s("i",{staticClass:"iconfont"},[t._v("")]):t._e()])])},staticRenderFns:[]}},37:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["left","title","right","leftArrow","rightArrow"],methods:{onLeftClick:function(){this.$emit("leftClick")},onTitleClick:function(){this.$emit("titleClick")},onRightClick:function(){this.$emit("rightClick")}}}},68:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container trip-detail"},[s("page-header",{attrs:{title:"订单详情",leftArrow:"true"},on:{leftClick:function(e){t.$router.go(-1)}}}),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"main"},[s("div",{staticClass:"card-list"},[s("h3",{staticClass:"green"},[t._v("订单信息")]),t._v(" "),s("div",{staticClass:"card"},[s("p",[s("span",{staticClass:"label"},[t._v("出发地:")]),t._v(" "),s("span",{staticClass:"text"},[t._v("浙江温州")])]),t._v(" "),s("p",[s("span",{staticClass:"label"},[t._v("目的地:")]),t._v(" "),s("span",{staticClass:"text"},[t._v("浙江杭州")])])]),t._v(" "),s("h3",[t._v("司机信息")]),t._v(" "),s("div",{staticClass:"card"},[s("p",[s("span",{staticClass:"label"},[t._v("司机:")]),t._v(" "),s("span",{staticClass:"text"},[t._v("路人甲")])])]),t._v(" "),s("h3",[t._v("乘客信息")]),t._v(" "),s("div",{staticClass:"card"},[s("p",[s("span",{staticClass:"label"},[t._v("乘客:")]),t._v(" "),s("span",{staticClass:"text"},[t._v("路人乙")])])])])])}]}},92:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(35),n=s.n(i);e.default={components:{pageHeader:n.a},data:function(){return{}},methods:{onCardClick:function(){}}}}});
//# sourceMappingURL=13.ed339518c2dbc9d7c35a.js.map