(window.webpackJsonp=window.webpackJsonp||[]).push([[23,2,4],{275:function(t,n,e){var content=e(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("fb0df4ca",content,!0,{sourceMap:!1})},276:function(t,n,e){var content=e(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("b4a92832",content,!0,{sourceMap:!1})},277:function(t,n,e){"use strict";e(275)},278:function(t,n,e){var r=e(21)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.header-container[data-v-3b00042c]{\n  position:relative;\n  color:#000\n}\n.header-container .tip-box[data-v-3b00042c]{\n  position:absolute;\n  text-align:center;\n  top:50%;\n  left:50%;\n  transform:translate(-50%,-50%)\n}\n.header-container .tip-box .en-tip[data-v-3b00042c]{\n  margin-bottom:8px;\n  font-size:16px;\n  color:#d1b46e\n}\n.header-container .tip-box .big-tip[data-v-3b00042c]{\n  font-size:48px;\n  font-weight:600\n}\n.header-container .tip-box .small-tip[data-v-3b00042c]{\n  margin-top:33px;\n  font-size:18px;\n  font-weight:400\n}\n.header-container .link-box[data-v-3b00042c]{\n  position:absolute;\n  bottom:0px;\n  padding-left:1.25rem;\n  padding-right:1.25rem;\n  text-align:center;\n  left:50%;\n  transform:translate(-50%);\n  height:72px;\n  font-size:18px;\n  color:#182239;\n  border-radius:8px 8px 0 0;\n  background:#f3f5f8\n}\n.header-container .link-box .link-item[data-v-3b00042c]{\n  width:146px;\n  position:relative;\n  display:flex;\n  height:100%;\n  cursor:pointer;\n  align-items:center;\n  justify-content:center\n}\n.header-container .link-box .active-item[data-v-3b00042c]{\n  font-weight:700;\n  background:#fff\n}\n.header-container .link-box .active-item .active-border[data-v-3b00042c]{\n  position:absolute;\n  bottom:0;\n  left:50%;\n  transform:translate(-50%);\n  width:98px;\n  height:4px;\n  background:#d1b46e\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},279:function(t,n,e){"use strict";e.r(n);var r={name:"GeneralHeader",props:{imgUrl:{type:String,default:"",require:!0},bigTip:{type:String,default:""},smallTip:{type:String,default:""},enTip:{type:String,default:""},fontColor:{type:String,default:""},linksList:{type:Array,default:function(){return[]}}},computed:{camera_item:function(){switch(this.$route.path){case"/product-center/camera/camera-app":case"/product-center/camera/instructions":case"/product-center/camera/warranty":return!0;default:return!1}}},methods:{toPage:function(link){this.$router.push(link)}}},o=(e(277),e(8)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"header-container"},[e("img",{staticClass:"w-full h-full",attrs:{src:t.imgUrl,alt:""}}),t._v(" "),e("div",{staticClass:"tip-box"},[t.enTip?e("div",{staticClass:"en-tip",style:{color:t.fontColor?t.fontColor:""}},[t._v("\n      "+t._s(t.enTip)+"\n    ")]):t._e(),t._v(" "),e("div",{staticClass:"big-tip",style:{color:t.fontColor?t.fontColor:""}},[t._v("\n      "+t._s(t.bigTip)+"\n    ")]),t._v(" "),t.smallTip?e("div",{staticClass:"small-tip",style:{color:t.fontColor?t.fontColor:""}},[t._v("\n      "+t._s(t.smallTip)+"\n    ")]):t._e()]),t._v(" "),t.linksList.length?e("div",{staticClass:"link-box"},[e("ul",{staticClass:"flex h-full"},t._l(t.linksList,(function(n){return e("li",{key:n.link,staticClass:"link-item",class:{"active-item":n.link===t.$route.path||"/product-center/camera/camera-app"===n.link&&t.camera_item},on:{click:function(e){return t.toPage(n.link)}}},[t._v("\n        "+t._s(n.name)+"\n        "),n.link===t.$route.path||"/product-center/camera/camera-app"===n.link&&t.camera_item?e("div",{staticClass:"active-border"}):t._e()])})),0)]):t._e()])}),[],!1,null,"3b00042c",null);n.default=component.exports},280:function(t,n,e){t.exports=e.p+"img/icon_play.f375a72.png"},281:function(t,n,e){"use strict";e(276)},282:function(t,n,e){var r=e(21)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.content-wrap[data-v-63ad65c6]{\n  position:relative;\n  display:flex;\n  width:100vw;\n  align-items:center;\n  justify-content:center;\n  height:747px\n}\n.content-wrap .desc-box[data-v-63ad65c6]{\n  position:absolute;\n  left:50%;\n  top:98px;\n  transform:translate(-50%)\n}\n.content-wrap .desc-box[data-v-63ad65c6] :first-child{\n  text-align:center;\n  font-size:28px;\n  font-weight:700;\n  margin-bottom:19px\n}\n.content-wrap .content[data-v-63ad65c6]{\n  display:flex\n}\n.content-wrap .content .img-box[data-v-63ad65c6]{\n  position:relative;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  width:848px;\n  height:494px;\n  box-shadow:6px 6px 16px 0 rgba(8,28,57,.1);\n  border-radius:20px;\n  background:#f3f6f8\n}\n.content-wrap .content .img-box .pro-img[data-v-63ad65c6]{\n  width:808px;\n  height:455px\n}\n.content-wrap .content .img-box .play-icon[data-v-63ad65c6]{\n  position:absolute;\n  top:50%;\n  left:50%;\n  transform:translate(-50%,-50%);\n  width:60px;\n  height:60px;\n  cursor:pointer\n}\n.content-wrap .content .small-box[data-v-63ad65c6]{\n  width:630px;\n  height:354px\n}\n.content-wrap .content .small-box .pro-img[data-v-63ad65c6]{\n  width:590px;\n  height:314px\n}\n.content-wrap .content .desc-text[data-v-63ad65c6]{\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  width:426px;\n  box-sizing:border-box\n}\n.content-wrap .content .desc-text.p-left[data-v-63ad65c6]{\n  padding-left:58px\n}\n.content-wrap .content .desc-text.p-right[data-v-63ad65c6]{\n  padding-right:58px\n}\n.content-wrap .content .desc-text .desc-tip[data-v-63ad65c6]{\n  font-size:28px\n}\n.content-wrap .content .desc-text .desc-detail[data-v-63ad65c6]{\n  margin-top:41px;\n  font-size:16px;\n  line-height:24px;\n  color:#182239;\n  font-weight:400\n}\n.content-wrap .content .desc-text .desc-txt-img[data-v-63ad65c6]{\n  width:288px;\n  height:113px;\n  margin-top:40px\n}\n.content-wrap .content .small-box-desc[data-v-63ad65c6]{\n  width:572px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},283:function(t,n,e){"use strict";e.r(n);var r={name:"GraphicIntroduction",inject:["show"],props:{imgPos:{type:String,default:"left"},imgUrl:{type:String,default:""},descTxtTip:{type:String,default:""},descTxtList:{type:Array,default:function(){return[]}},descTxtImg:{type:String,default:""},smallImgSize:{type:Boolean,default:!1},succExample:{type:Boolean,default:!1},projectSrc:{type:String,default:""},projectType:{type:String,default:""},icon:{type:Boolean,default:!0}}},o=(e(281),e(8)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"content-wrap",style:t.succExample?"height: 964px;padding: 260px 0 210px 0;":""},[t.succExample?r("div",{staticClass:"desc-box"},[r("div",[t._v("成功案例")]),t._v(" "),r("div",[t._v("助力企业通过数字孪生可视化 更便捷的认知和管理现实世界")])]):t._e(),t._v(" "),r("div",{staticClass:"content",class:"left"===t.imgPos?"":"flex-row-reverse"},[r("div",{staticClass:"img-box",class:t.smallImgSize?"small-box ":""},[r("img",{staticClass:"pro-img",attrs:{src:t.imgUrl,alt:""}}),t._v(" "),t.icon?r("img",{staticClass:"play-icon",attrs:{src:e(280),alt:""},on:{click:function(n){return t.show(!0,t.projectSrc,t.projectType)}}}):t._e()]),t._v(" "),r("div",{staticClass:"desc-text",class:[t.smallImgSize?"small-box-desc ":"","left"===t.imgPos?"p-left":"p-right"]},[r("div",{staticClass:"desc-tip"},[t._v(t._s(t.descTxtTip))]),t._v(" "),r("div",{staticClass:"desc-detail"},t._l(t.descTxtList,(function(n,e){return r("p",{key:n,class:e?"mt-2":""},[t._v("\n          "+t._s(n)+"\n        ")])})),0),t._v(" "),t.descTxtImg?r("div",{staticClass:"flex justify-center"},[r("img",{staticClass:"desc-txt-img",attrs:{src:t.descTxtImg,alt:""}})]):t._e()])])])}),[],!1,null,"63ad65c6",null);n.default=component.exports},502:function(t,n,e){t.exports=e.p+"img/banner_fcyx.80a8475.png"},503:function(t,n,e){t.exports=e.p+"img/img_bg_1.1884efa.png"},504:function(t,n,e){t.exports=e.p+"img/img_bg_2.aff8942.png"},505:function(t,n,e){t.exports=e.p+"img/img_bg_3.a140fb2.png"},571:function(t,n,e){"use strict";e.r(n);var r=e(279),o=e(283),c={name:"EstateMarketing",components:{GeneralHeader:r.default,GraphicIntroduction:o.default},data:function(){return{imgUrl:e(502),bigTip:"房产营销",smallTip:"云上动力——企业数字化应用解决方案提供商",linksList:[{name:"智慧园区",link:"/industry-application/wisdom-park"},{name:"房产营销",link:"/industry-application/estate-marketing"},{name:"云上企业",link:"/industry-application/cloud-enterprise"},{name:"数字文博",link:"/industry-application/digital-wenbo"},{name:"数字零售",link:"/industry-application/digital-retail"}],part1:{imgUrl:e(503),descTxtTip:"莎玛酒店大堂",projectSrc:"https://www.ysdl-3d.com/projects/scan/hw-AJ1HOZ1sU/v3local/spc.html?m=hw-AJ1HOZ1sU",projectType:"model",descTxtList:["大堂形象是酒店形象的浓缩与升华，传统的二维平面图片，能够展现的内容非常有限。云上动力将数字孪生技术应用在莎玛酒店大堂展示中，以3D、VR形式多维度展现酒店大堂，开启了酒店智能化模式。","用户在手机、电脑随意点击移动就能查看酒店大堂各个位置风光。酒店则可以通过更智能、更全面的3D数字酒店模型，真实再现酒店大堂，提升酒店形象、品牌形象。"]},part2:{imgUrl:e(504),descTxtTip:"酒店选房系统",projectSrc:"https://www.ysdl-3d.com/projects/scan/hw-UrNtadCaN/v3local/spc.html?m=hw-UrNtadCaN",projectType:"model",descTxtList:["云上动力智慧酒店系统，为酒店各个房间进行扫描建模，“克隆”酒店房间数字虚拟对象，并生成链接。用户可以通过酒店选房链接，720°全景查看房间内部环境，犹如身处房间之中。","于用户而言，智慧酒店系统解决了以往用户出游选择酒店房间，容易出现图片和房间不符合的情况。可以在抵达酒店前就订购到自己心仪的房间。于酒店而言，该系统为酒店提供了一种更加全面的宣传方式，让外地的消费者能够更加方便、直观的了解到这家酒店，从而吸引客流。"]},part3:{imgUrl:e(505),descTxtTip:"乐天智谷",projectSrc:"https://ysdl-3d.com/projects/scan/ltzg/QSzNxUXoqAZ/",projectType:"model",descTxtList:["云上动力使用数字孪生技术，实现了乐天集团从线下到线上的跨越，从办公用具、办公场所以及公共区域等，全场景、全设备打造三维可视化乐天集团。满足用户对于办公场所的三维空间观察需求。智能测距，足不出户也能了解场地面积；户型图、三维视图辅助用户快速找到并查看浏览特定房间。告别传统纸媒，节约成本、提高效率，提升用户体验，同时赋能集团品牌数字信息化！"]}}}},l=e(8),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("GeneralHeader",t._b({attrs:{"font-color":"#fff"}},"GeneralHeader",{imgUrl:t.imgUrl,bigTip:t.bigTip,smallTip:t.smallTip,linksList:t.linksList},!1)),t._v(" "),e("GraphicIntroduction",t._b({attrs:{"small-img-size":!0}},"GraphicIntroduction",Object.assign({},t.part1),!1)),t._v(" "),e("div",{staticClass:"bg-linear-gradient"},[e("GraphicIntroduction",t._b({attrs:{"img-pos":"right","small-img-size":!0}},"GraphicIntroduction",Object.assign({},t.part2),!1)),t._v(" "),e("GraphicIntroduction",t._b({attrs:{"small-img-size":!0}},"GraphicIntroduction",Object.assign({},t.part3),!1))],1)],1)}),[],!1,null,"ac676c62",null);n.default=component.exports}}]);