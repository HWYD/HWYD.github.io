(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{284:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("c78d595a",content,!0,{sourceMap:!1})},287:function(t,e,n){"use strict";n(284)},288:function(t,e,n){var c=n(21)((function(i){return i[1]}));c.push([t.i,"/*purgecss start ignore*/\n.core-desc[data-v-644a1c89]{\n  width:100vw;\n  height:463px;\n  padding-top:68px\n}\n.core-desc .title[data-v-644a1c89]{\n  font-size:28px;\n  font-weight:700;\n  text-align:center\n}\n.core-desc .core-item[data-v-644a1c89]{\n  margin-left:1.75rem;\n  margin-right:1.75rem;\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  width:164px;\n  height:300px\n}\n.core-desc .core-item .default-img[data-v-644a1c89]{\n  width:75px;\n  height:75px\n}\n.core-desc .core-item .tip[data-v-644a1c89]{\n  margin-top:20px;\n  font-size:18px\n}\n.core-desc .core-item .desc[data-v-644a1c89]{\n  margin-top:15px;\n  font-size:16px\n}\n\n/*purgecss end ignore*/",""]),c.locals={},t.exports=c},290:function(t,e,n){"use strict";n.r(e);n(71);var c={name:"IconDescList",props:{iconList:{type:Array,default:function(){return[]}},title:{type:String,default:""},iconSize:{type:Array,default:function(){return[]}},liSpacex:{type:String,default:""}},data:function(){return{iconsize:"width:".concat(this.iconSize[0],";height:").concat(this.iconSize[1]),itemSpacex:this.liSpacex?"margin:0 ".concat(this.liSpacex):""}}},r=(n(287),n(8)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"core-desc bg-color"},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),t._t("default"),t._v(" "),n("div",{staticClass:"flex justify-center mt-14"},t._l(t.iconList,(function(e){return n("div",{key:e.tip,staticClass:"core-item",style:t.itemSpacex},[n("img",{style:t.iconsize,attrs:{src:e.icon,alt:""}}),t._v(" "),n("div",{staticClass:"tip"},[t._v(t._s(e.tip))]),t._v(" "),n("div",{staticClass:"desc"},[t._v(t._s(e.desc))])])})),0)],2)}),[],!1,null,"644a1c89",null);e.default=component.exports}}]);