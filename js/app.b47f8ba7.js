(function(e){function t(t){for(var o,s,r=t[0],u=t[1],a=t[2],l=0,d=[];l<r.length;l++)s=r[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==i[u]&&(o=!1)}o&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},c=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var a=0;a<r.length;a++)t(r[a]);var f=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"225f":function(e,t,n){},"44fd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function i(e,t,n,i,c,s){var r=Object(o["k"])("book");return Object(o["g"])(),Object(o["d"])("div",null,[Object(o["f"])(r)])}var c=Object(o["o"])("data-v-c756507e");Object(o["i"])("data-v-c756507e");var s={class:"book-wrapper"},r=Object(o["f"])("div",{id:"reader"},null,-1),u={class:"mask"};Object(o["h"])();var a=c((function(e,t,n,i,c,a){var f=Object(o["k"])("book-menu");return Object(o["g"])(),Object(o["d"])("div",s,[r,Object(o["f"])("div",u,[Object(o["f"])("div",{class:"left",onClick:t[1]||(t[1]=function(){return a.prePage&&a.prePage.apply(a,arguments)})}),Object(o["f"])("div",{class:"center",onClick:t[2]||(t[2]=function(){return a.toggleMenu&&a.toggleMenu.apply(a,arguments)})}),Object(o["f"])("div",{class:"right",onClick:t[3]||(t[3]=function(){return a.nextPage&&a.nextPage.apply(a,arguments)})})]),Object(o["f"])(f,{ref:"bookMenu",menushow:c.menuShow,fontSizeList:c.fontSizeList,themeList:c.themeList,defaultTheme:c.defaultTheme,onSetFontSize:a.setFontSize,onSetTheme:a.setTheme},null,8,["menushow","fontSizeList","themeList","defaultTheme","onSetFontSize","onSetTheme"])])})),f=(n("159b"),n("b0c0"),n("a211")),l=Object(o["o"])("data-v-1763ee70");Object(o["i"])("data-v-1763ee70");var d={class:"menu-wrapper"},b=Object(o["f"])("div",null,[Object(o["f"])("span",{class:"iconfont icon-xianxingtubiaozhizuomoban-39 icon"})],-1),h=Object(o["f"])("div",null,[Object(o["f"])("span",{class:"iconfont icon-progress icon"})],-1),p=Object(o["f"])("span",{class:"iconfont icon-brightj2 icon"},null,-1),j=Object(o["f"])("span",{class:"icon"},"A",-1),O={class:"setting-box"},m={key:0,class:"font-setting"},g={class:"font-select"},v=Object(o["f"])("div",{class:"line"},null,-1),S={class:"point"},w=Object(o["f"])("div",{class:"small-point"},null,-1),y=Object(o["f"])("div",{class:"line"},null,-1),k={key:1,class:"themes-setting"};Object(o["h"])();var z=l((function(e,t,n,i,c,s){return Object(o["g"])(),Object(o["d"])("div",d,[Object(o["f"])(o["b"],{name:"slide"},{default:l((function(){return[Object(o["n"])(Object(o["f"])("div",{class:["book-menu",{noboxshadow:c.childMenuShow||!n.menushow}]},[b,h,Object(o["f"])("div",{onClick:t[1]||(t[1]=function(e){return s.toggleSet(1)})},[p]),Object(o["f"])("div",{onClick:t[2]||(t[2]=function(e){return s.toggleSet(0)})},[j])],2),[[o["m"],n.menushow]])]})),_:1}),Object(o["f"])(o["b"],{name:"slide"},{default:l((function(){return[Object(o["n"])(Object(o["f"])("div",O,[0===c.showTag?(Object(o["g"])(),Object(o["d"])("div",m,[Object(o["f"])("div",{class:"preview",style:{fontSize:n.fontSizeList[0].fontSize+"px"}},"A",4),Object(o["f"])("div",g,[(Object(o["g"])(!0),Object(o["d"])(o["a"],null,Object(o["j"])(n.fontSizeList,(function(e,t){return Object(o["g"])(),Object(o["d"])("div",{class:"select-wrapper",key:t},[v,Object(o["f"])("div",{class:"point-wrapper",onClick:function(e){return s.setFontSize(t)}},[Object(o["n"])(Object(o["f"])("div",S,[w],512),[[o["m"],c.selectFont==t]])],8,["onClick"]),y])})),128))]),Object(o["f"])("div",{class:"preview",style:{fontSize:n.fontSizeList[n.fontSizeList.length-1].fontSize+"px"}},"A",4)])):Object(o["e"])("",!0),1===c.showTag?(Object(o["g"])(),Object(o["d"])("div",k,[(Object(o["g"])(!0),Object(o["d"])(o["a"],null,Object(o["j"])(n.themeList,(function(e,t){return Object(o["g"])(),Object(o["d"])("div",{class:"themes-wrapper",key:t,onClick:function(e){return s.setTheme(t)}},[Object(o["f"])("div",{class:["bg--box",{"bg-border":"#fff"===e.style.body.background}],style:{background:e.style.body.background}},null,6),Object(o["f"])("div",{class:["bg-des",{"default-desc":n.defaultTheme===t}]},Object(o["l"])(e.name),3)],8,["onClick"])})),128))])):Object(o["e"])("",!0)],512),[[o["m"],c.childMenuShow]])]})),_:1})])})),T=(n("a9e3"),{name:"bookMenu",props:{menushow:{type:Boolean,default:!1},fontSizeList:{type:Array,default:function(){return[]}},themeList:{type:Array,default:function(){return[]}},defaultTheme:Number},data:function(){return{childMenuShow:!1,selectFont:2,showTag:0}},methods:{toggleSet:function(e){this.showTag!==e&&this.childMenuShow||(this.childMenuShow=!this.childMenuShow),this.showTag=e},hideChildMenu:function(){this.childMenuShow=!1},setFontSize:function(e){this.selectFont=e,this.$emit("setFontSize",this.fontSizeList[e].fontSize)},setTheme:function(e){this.$emit("setTheme",e)}}});n("c21d");T.render=z,T.__scopeId="data-v-1763ee70";var M=T,x={name:"book",components:{BookMenu:M},data:function(){return{book:"",rendition:"",menuShow:!1,fontSizeList:[{fontSize:12},{fontSize:14},{fontSize:16},{fontSize:18},{fontSize:20},{fontSize:22},{fontSize:24}],themeList:[{name:"default",style:{body:{color:"#000",background:"#fff"}}},{name:"eye",style:{body:{color:"#000",background:"#ceeaba"}}},{name:"night",style:{body:{color:"#fff",background:"#000"}}},{name:"gold",style:{body:{color:"#000",background:"rgb(241, 236, 226)"}}}],defaultTheme:0}},mounted:function(){this.showBook()},methods:{showBook:function(){var e=this;this.book=new f["a"]("/山海经.epub"),this.rendition=this.book.renderTo("reader",{width:window.innerWidth,height:window.innerHeight}),this.rendition.display(),this.themeList.forEach((function(t){e.rendition.themes.register(t.name,t.style)}))},prePage:function(){this.rendition.prev()},nextPage:function(){this.rendition.next()},toggleMenu:function(){this.menuShow=!this.menuShow,this.menuShow||this.$refs.bookMenu.hideChildMenu()},setFontSize:function(e){this.rendition.themes&&this.rendition.themes.fontSize(e+"px")},setTheme:function(e){this.defaultTheme=0,this.rendition.themes.select(this.themeList[e].name)}}};n("7e69");x.render=a,x.__scopeId="data-v-c756507e";var L=x,P={name:"App",components:{Book:L}};P.render=i;var _=P;n("44fd");Object(o["c"])(_).mount("#app")},"7e69":function(e,t,n){"use strict";n("225f")},c21d:function(e,t,n){"use strict";n("cdf4")},cdf4:function(e,t,n){}});
//# sourceMappingURL=app.b47f8ba7.js.map