(window.webpackJsonp=window.webpackJsonp||[]).push([[35,4],{276:function(t,n,e){var content=e(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("b4a92832",content,!0,{sourceMap:!1})},280:function(t,n,e){t.exports=e.p+"img/icon_play.f375a72.png"},281:function(t,n,e){"use strict";e(276)},282:function(t,n,e){var c=e(21)((function(i){return i[1]}));c.push([t.i,"/*purgecss start ignore*/\n.content-wrap[data-v-63ad65c6]{\n  position:relative;\n  display:flex;\n  width:100vw;\n  align-items:center;\n  justify-content:center;\n  height:747px\n}\n.content-wrap .desc-box[data-v-63ad65c6]{\n  position:absolute;\n  left:50%;\n  top:98px;\n  transform:translate(-50%)\n}\n.content-wrap .desc-box[data-v-63ad65c6] :first-child{\n  text-align:center;\n  font-size:28px;\n  font-weight:700;\n  margin-bottom:19px\n}\n.content-wrap .content[data-v-63ad65c6]{\n  display:flex\n}\n.content-wrap .content .img-box[data-v-63ad65c6]{\n  position:relative;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  width:848px;\n  height:494px;\n  box-shadow:6px 6px 16px 0 rgba(8,28,57,.1);\n  border-radius:20px;\n  background:#f3f6f8\n}\n.content-wrap .content .img-box .pro-img[data-v-63ad65c6]{\n  width:808px;\n  height:455px\n}\n.content-wrap .content .img-box .play-icon[data-v-63ad65c6]{\n  position:absolute;\n  top:50%;\n  left:50%;\n  transform:translate(-50%,-50%);\n  width:60px;\n  height:60px;\n  cursor:pointer\n}\n.content-wrap .content .small-box[data-v-63ad65c6]{\n  width:630px;\n  height:354px\n}\n.content-wrap .content .small-box .pro-img[data-v-63ad65c6]{\n  width:590px;\n  height:314px\n}\n.content-wrap .content .desc-text[data-v-63ad65c6]{\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  width:426px;\n  box-sizing:border-box\n}\n.content-wrap .content .desc-text.p-left[data-v-63ad65c6]{\n  padding-left:58px\n}\n.content-wrap .content .desc-text.p-right[data-v-63ad65c6]{\n  padding-right:58px\n}\n.content-wrap .content .desc-text .desc-tip[data-v-63ad65c6]{\n  font-size:28px\n}\n.content-wrap .content .desc-text .desc-detail[data-v-63ad65c6]{\n  margin-top:41px;\n  font-size:16px;\n  line-height:24px;\n  color:#182239;\n  font-weight:400\n}\n.content-wrap .content .desc-text .desc-txt-img[data-v-63ad65c6]{\n  width:288px;\n  height:113px;\n  margin-top:40px\n}\n.content-wrap .content .small-box-desc[data-v-63ad65c6]{\n  width:572px\n}\n\n/*purgecss end ignore*/",""]),c.locals={},t.exports=c},283:function(t,n,e){"use strict";e.r(n);var c={name:"GraphicIntroduction",inject:["show"],props:{imgPos:{type:String,default:"left"},imgUrl:{type:String,default:""},descTxtTip:{type:String,default:""},descTxtList:{type:Array,default:function(){return[]}},descTxtImg:{type:String,default:""},smallImgSize:{type:Boolean,default:!1},succExample:{type:Boolean,default:!1},projectSrc:{type:String,default:""},projectType:{type:String,default:""},icon:{type:Boolean,default:!0}}},o=(e(281),e(8)),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"content-wrap",style:t.succExample?"height: 964px;padding: 260px 0 210px 0;":""},[t.succExample?c("div",{staticClass:"desc-box"},[c("div",[t._v("成功案例")]),t._v(" "),c("div",[t._v("助力企业通过数字孪生可视化 更便捷的认知和管理现实世界")])]):t._e(),t._v(" "),c("div",{staticClass:"content",class:"left"===t.imgPos?"":"flex-row-reverse"},[c("div",{staticClass:"img-box",class:t.smallImgSize?"small-box ":""},[c("img",{staticClass:"pro-img",attrs:{src:t.imgUrl,alt:""}}),t._v(" "),t.icon?c("img",{staticClass:"play-icon",attrs:{src:e(280),alt:""},on:{click:function(n){return t.show(!0,t.projectSrc,t.projectType)}}}):t._e()]),t._v(" "),c("div",{staticClass:"desc-text",class:[t.smallImgSize?"small-box-desc ":"","left"===t.imgPos?"p-left":"p-right"]},[c("div",{staticClass:"desc-tip"},[t._v(t._s(t.descTxtTip))]),t._v(" "),c("div",{staticClass:"desc-detail"},t._l(t.descTxtList,(function(n,e){return c("p",{key:n,class:e?"mt-2":""},[t._v("\n          "+t._s(n)+"\n        ")])})),0),t._v(" "),t.descTxtImg?c("div",{staticClass:"flex justify-center"},[c("img",{staticClass:"desc-txt-img",attrs:{src:t.descTxtImg,alt:""}})]):t._e()])])])}),[],!1,null,"63ad65c6",null);n.default=component.exports},432:function(t,n,e){t.exports=e.p+"img/img_bg_1.712eff2.png"},433:function(t,n,e){t.exports=e.p+"img/img_bg_2.0c988aa.png"},434:function(t,n,e){t.exports=e.p+"img/img_bg_3.4aba746.png"},435:function(t,n,e){t.exports=e.p+"img/img_bg_4.2ead0af.png"},436:function(t,n,e){t.exports=e.p+"img/img_bg_5.91283b5.png"},561:function(t,n,e){"use strict";e.r(n);var c={name:"ObjectCloning",components:{GraphicIntroduction:e(283).default},data:function(){return{part1:{imgUrl:e(432),descTxtTip:"模型扫描",descTxtList:["将需要扫描物件放置在扫描仪的旋转云台上，提前布置好相关的摄像机。","通过3-4台联动的摄像机对物件扫描的多个角度进行拍摄，获取物提表面的RGB图像。"]},part2:{imgUrl:e(433),descTxtTip:"点云运算",descTxtList:["获取的RGB图像经过自主算法（测量算法），生成对应的深度图像。","深度图像中的像素点与RGB - D中的像素点一一对应。","不同的深度图像利用算法寻找深度图像中相同的像素点，根据相同的像素点进行组个拼接就形成点云（模型骨骼）。"]},part3:{imgUrl:e(434),descTxtTip:"纹理烘焙",descTxtList:["经过搭载有 AI + 3D 的模型算法之后已经获得了初步的模型形态，但此时的模型没有纹理贴图。","此时会利用算法在采集的RGB图像上获取点云数据对应的三角面一一对应衍射到点云上去，得到最终的三维模型。"]},part4:{imgUrl:e(435),descTxtTip:"渲染展示终端",descTxtList:["运用模型轻量化技术（剪枝 、量化、共享权重）实现对模型的运算、压缩和减小，为此 AI + 3D 实景可视化封装平台具备通过跨平台/终端的轻量化传播与分享。","无需安装app，一条链接即可在现有的智能终端进行浏览 AI 咨询大厅。"]},part5:{imgUrl:e(436),descTxtTip:"YUN-PRO",descTxtList:["云上动力数字孪生技术服务，在物件展示上具有丰富成熟的经验，以YUN-PRO3D扫描仪为例，可实现高精度、超精细的可视化渲染，高度还原物件的外形、材质、纹理细节等;","同时具备多结构“爆炸图”全息动态展示、图文结合，以及网页跳转等功能，多维度展示3D扫描仪软硬件功能优势，同时给予用户多样的使用的体验，帮助用户更全面快速了解产品功能、参数及特性等。"],projectSrc:"https://www.ysdl-3d.com/platform/yun-pro/",projectType:"model"}}}},o=e(8),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("GraphicIntroduction",t._b({},"GraphicIntroduction",Object.assign({},t.part1,{icon:!1}),!1)),t._v(" "),e("div",{staticClass:"bg-linear-gradient"},[e("GraphicIntroduction",t._b({attrs:{"img-pos":"right"}},"GraphicIntroduction",Object.assign({},t.part2,{icon:!1}),!1)),t._v(" "),e("GraphicIntroduction",t._b({},"GraphicIntroduction",Object.assign({},t.part3,{icon:!1}),!1))],1),t._v(" "),e("GraphicIntroduction",t._b({staticClass:"bg-color",attrs:{"img-pos":"right"}},"GraphicIntroduction",Object.assign({},t.part4,{icon:!1}),!1)),t._v(" "),e("GraphicIntroduction",t._b({attrs:{"succ-example":!0}},"GraphicIntroduction",Object.assign({},t.part5),!1))],1)}),[],!1,null,"3f2927ca",null);n.default=component.exports}}]);