(window.webpackJsonp=window.webpackJsonp||[]).push([[24,2,4],{275:function(t,n,e){var content=e(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("fb0df4ca",content,!0,{sourceMap:!1})},276:function(t,n,e){var content=e(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("b4a92832",content,!0,{sourceMap:!1})},277:function(t,n,e){"use strict";e(275)},278:function(t,n,e){var o=e(21)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.header-container[data-v-3b00042c]{\n  position:relative;\n  color:#000\n}\n.header-container .tip-box[data-v-3b00042c]{\n  position:absolute;\n  text-align:center;\n  top:50%;\n  left:50%;\n  transform:translate(-50%,-50%)\n}\n.header-container .tip-box .en-tip[data-v-3b00042c]{\n  margin-bottom:8px;\n  font-size:16px;\n  color:#d1b46e\n}\n.header-container .tip-box .big-tip[data-v-3b00042c]{\n  font-size:48px;\n  font-weight:600\n}\n.header-container .tip-box .small-tip[data-v-3b00042c]{\n  margin-top:33px;\n  font-size:18px;\n  font-weight:400\n}\n.header-container .link-box[data-v-3b00042c]{\n  position:absolute;\n  bottom:0px;\n  padding-left:1.25rem;\n  padding-right:1.25rem;\n  text-align:center;\n  left:50%;\n  transform:translate(-50%);\n  height:72px;\n  font-size:18px;\n  color:#182239;\n  border-radius:8px 8px 0 0;\n  background:#f3f5f8\n}\n.header-container .link-box .link-item[data-v-3b00042c]{\n  width:146px;\n  position:relative;\n  display:flex;\n  height:100%;\n  cursor:pointer;\n  align-items:center;\n  justify-content:center\n}\n.header-container .link-box .active-item[data-v-3b00042c]{\n  font-weight:700;\n  background:#fff\n}\n.header-container .link-box .active-item .active-border[data-v-3b00042c]{\n  position:absolute;\n  bottom:0;\n  left:50%;\n  transform:translate(-50%);\n  width:98px;\n  height:4px;\n  background:#d1b46e\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},279:function(t,n,e){"use strict";e.r(n);var o={name:"GeneralHeader",props:{imgUrl:{type:String,default:"",require:!0},bigTip:{type:String,default:""},smallTip:{type:String,default:""},enTip:{type:String,default:""},fontColor:{type:String,default:""},linksList:{type:Array,default:function(){return[]}}},computed:{camera_item:function(){switch(this.$route.path){case"/product-center/camera/camera-app":case"/product-center/camera/instructions":case"/product-center/camera/warranty":return!0;default:return!1}}},methods:{toPage:function(link){this.$router.push(link)}}},r=(e(277),e(8)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"header-container"},[e("img",{staticClass:"w-full h-full",attrs:{src:t.imgUrl,alt:""}}),t._v(" "),e("div",{staticClass:"tip-box"},[t.enTip?e("div",{staticClass:"en-tip",style:{color:t.fontColor?t.fontColor:""}},[t._v("\n      "+t._s(t.enTip)+"\n    ")]):t._e(),t._v(" "),e("div",{staticClass:"big-tip",style:{color:t.fontColor?t.fontColor:""}},[t._v("\n      "+t._s(t.bigTip)+"\n    ")]),t._v(" "),t.smallTip?e("div",{staticClass:"small-tip",style:{color:t.fontColor?t.fontColor:""}},[t._v("\n      "+t._s(t.smallTip)+"\n    ")]):t._e()]),t._v(" "),t.linksList.length?e("div",{staticClass:"link-box"},[e("ul",{staticClass:"flex h-full"},t._l(t.linksList,(function(n){return e("li",{key:n.link,staticClass:"link-item",class:{"active-item":n.link===t.$route.path||"/product-center/camera/camera-app"===n.link&&t.camera_item},on:{click:function(e){return t.toPage(n.link)}}},[t._v("\n        "+t._s(n.name)+"\n        "),n.link===t.$route.path||"/product-center/camera/camera-app"===n.link&&t.camera_item?e("div",{staticClass:"active-border"}):t._e()])})),0)]):t._e()])}),[],!1,null,"3b00042c",null);n.default=component.exports},280:function(t,n,e){t.exports=e.p+"img/icon_play.f375a72.png"},281:function(t,n,e){"use strict";e(276)},282:function(t,n,e){var o=e(21)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.content-wrap[data-v-63ad65c6]{\n  position:relative;\n  display:flex;\n  width:100vw;\n  align-items:center;\n  justify-content:center;\n  height:747px\n}\n.content-wrap .desc-box[data-v-63ad65c6]{\n  position:absolute;\n  left:50%;\n  top:98px;\n  transform:translate(-50%)\n}\n.content-wrap .desc-box[data-v-63ad65c6] :first-child{\n  text-align:center;\n  font-size:28px;\n  font-weight:700;\n  margin-bottom:19px\n}\n.content-wrap .content[data-v-63ad65c6]{\n  display:flex\n}\n.content-wrap .content .img-box[data-v-63ad65c6]{\n  position:relative;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  width:848px;\n  height:494px;\n  box-shadow:6px 6px 16px 0 rgba(8,28,57,.1);\n  border-radius:20px;\n  background:#f3f6f8\n}\n.content-wrap .content .img-box .pro-img[data-v-63ad65c6]{\n  width:808px;\n  height:455px\n}\n.content-wrap .content .img-box .play-icon[data-v-63ad65c6]{\n  position:absolute;\n  top:50%;\n  left:50%;\n  transform:translate(-50%,-50%);\n  width:60px;\n  height:60px;\n  cursor:pointer\n}\n.content-wrap .content .small-box[data-v-63ad65c6]{\n  width:630px;\n  height:354px\n}\n.content-wrap .content .small-box .pro-img[data-v-63ad65c6]{\n  width:590px;\n  height:314px\n}\n.content-wrap .content .desc-text[data-v-63ad65c6]{\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  width:426px;\n  box-sizing:border-box\n}\n.content-wrap .content .desc-text.p-left[data-v-63ad65c6]{\n  padding-left:58px\n}\n.content-wrap .content .desc-text.p-right[data-v-63ad65c6]{\n  padding-right:58px\n}\n.content-wrap .content .desc-text .desc-tip[data-v-63ad65c6]{\n  font-size:28px\n}\n.content-wrap .content .desc-text .desc-detail[data-v-63ad65c6]{\n  margin-top:41px;\n  font-size:16px;\n  line-height:24px;\n  color:#182239;\n  font-weight:400\n}\n.content-wrap .content .desc-text .desc-txt-img[data-v-63ad65c6]{\n  width:288px;\n  height:113px;\n  margin-top:40px\n}\n.content-wrap .content .small-box-desc[data-v-63ad65c6]{\n  width:572px\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},283:function(t,n,e){"use strict";e.r(n);var o={name:"GraphicIntroduction",inject:["show"],props:{imgPos:{type:String,default:"left"},imgUrl:{type:String,default:""},descTxtTip:{type:String,default:""},descTxtList:{type:Array,default:function(){return[]}},descTxtImg:{type:String,default:""},smallImgSize:{type:Boolean,default:!1},succExample:{type:Boolean,default:!1},projectSrc:{type:String,default:""},projectType:{type:String,default:""},icon:{type:Boolean,default:!0}}},r=(e(281),e(8)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"content-wrap",style:t.succExample?"height: 964px;padding: 260px 0 210px 0;":""},[t.succExample?o("div",{staticClass:"desc-box"},[o("div",[t._v("成功案例")]),t._v(" "),o("div",[t._v("助力企业通过数字孪生可视化 更便捷的认知和管理现实世界")])]):t._e(),t._v(" "),o("div",{staticClass:"content",class:"left"===t.imgPos?"":"flex-row-reverse"},[o("div",{staticClass:"img-box",class:t.smallImgSize?"small-box ":""},[o("img",{staticClass:"pro-img",attrs:{src:t.imgUrl,alt:""}}),t._v(" "),t.icon?o("img",{staticClass:"play-icon",attrs:{src:e(280),alt:""},on:{click:function(n){return t.show(!0,t.projectSrc,t.projectType)}}}):t._e()]),t._v(" "),o("div",{staticClass:"desc-text",class:[t.smallImgSize?"small-box-desc ":"","left"===t.imgPos?"p-left":"p-right"]},[o("div",{staticClass:"desc-tip"},[t._v(t._s(t.descTxtTip))]),t._v(" "),o("div",{staticClass:"desc-detail"},t._l(t.descTxtList,(function(n,e){return o("p",{key:n,class:e?"mt-2":""},[t._v("\n          "+t._s(n)+"\n        ")])})),0),t._v(" "),t.descTxtImg?o("div",{staticClass:"flex justify-center"},[o("img",{staticClass:"desc-txt-img",attrs:{src:t.descTxtImg,alt:""}})]):t._e()])])])}),[],!1,null,"63ad65c6",null);n.default=component.exports},506:function(t,n,e){t.exports=e.p+"img/banner_zhyq.b6e94ed.png"},507:function(t,n,e){t.exports=e.p+"img/img_bg_1.3466f40.png"},508:function(t,n,e){t.exports=e.p+"img/img_bg_2.68687eb.png"},509:function(t,n,e){t.exports=e.p+"img/img_bg_3.a13727d.png"},572:function(t,n,e){"use strict";e.r(n);var o=e(279),r=e(283),c={name:"WisdomPark",components:{GeneralHeader:o.default,GraphicIntroduction:r.default},data:function(){return{imgUrl:e(506),bigTip:"智慧园区",smallTip:"云上动力——企业数字化应用解决方案提供商",linksList:[{name:"智慧园区",link:"/industry-application/wisdom-park"},{name:"房产营销",link:"/industry-application/estate-marketing"},{name:"云上企业",link:"/industry-application/cloud-enterprise"},{name:"数字文博",link:"/industry-application/digital-wenbo"},{name:"数字零售",link:"/industry-application/digital-retail"}],part1:{imgUrl:e(507),descTxtTip:"祁阳高新区",projectSrc:"https://ysdl-model.oss-cn-shenzhen.aliyuncs.com/jinandao/video/qiyang.mp4",projectType:"video",descTxtList:["园区充分利用大数据、云计算、物联网、互联网、人工智能等新技术，通过时空一体化基础平台进行全方位全要素资产管理和立体精准管控，基于园区资产数字化场景的三维空间与实时监控的联动管理，达到从宏观到微观、地上到地下、室外到室内的精准管理，实现对资产的线上查看、线上调用、线上维护、线上统计等全场景管理，让园区的资产管理运营模式得到重塑，园区资产一切尽在3D场景可视化管理平台当中。"]},part2:{imgUrl:e(508),descTxtTip:"东莞常平",projectSrc:"https://ysdl-model.oss-cn-shenzhen.aliyuncs.com/jinandao/video/changpin.mp4",projectType:"video",descTxtList:["结合4G/5G网络的应用，借助便携的终端上网设备，主动感知常平资源、经济、活动、人员等方面的信息，通过信息及时发布，让工作人员、管理者等第一时间了解常平资源动态，及时对其资源的整体维修做计划安排与统筹，从而达到对园区各资源信息的智能感知、最大化利用的效果，重塑常平管理运营新模式。"]},part3:{imgUrl:e(509),descTxtTip:"广州大湾区轨道交通产业发展中心项目",projectSrc:"https://ysdl-model.oss-cn-shenzhen.aliyuncs.com/jinandao/video/maineng.mp4",projectType:"video",descTxtList:["广州大湾区轨道交通产业发展中心项目，运用先进的计算机三维数字化图形图像技术、数字多媒体技术和互联网技术构建一个智慧园区全景三维数字化应用场景，集成园区系统及视频监控数据植入，通过线下多媒体展示设备或智能移动终端的访问形式综合展现出一个可漫游参观的全景三维数字化应用场景，采用实景还原方式多维度再现场景的内外结构容貌方便管理及应用，为参观者提供一个互联网化、智能化、虚拟化的数字展示窗口。"]}}}},l=e(8),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("GeneralHeader",t._b({attrs:{"font-color":"#fff"}},"GeneralHeader",{imgUrl:t.imgUrl,bigTip:t.bigTip,smallTip:t.smallTip,linksList:t.linksList},!1)),t._v(" "),e("GraphicIntroduction",t._b({attrs:{"small-img-size":!0}},"GraphicIntroduction",Object.assign({},t.part1),!1)),t._v(" "),e("GraphicIntroduction",t._b({staticClass:"bg-color",attrs:{"img-pos":"right","small-img-size":!0}},"GraphicIntroduction",Object.assign({},t.part2),!1)),t._v(" "),e("GraphicIntroduction",t._b({attrs:{"small-img-size":!0}},"GraphicIntroduction",Object.assign({},t.part3),!1))],1)}),[],!1,null,"5b39247d",null);n.default=component.exports}}]);