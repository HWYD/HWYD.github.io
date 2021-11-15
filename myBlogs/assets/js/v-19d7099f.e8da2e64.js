"use strict";(self.webpackChunkmyBlog=self.webpackChunkmyBlog||[]).push([[571],{8969:(l,i,e)=>{e.r(i),e.d(i,{data:()=>a});const a={key:"v-19d7099f",path:"/notes/css-notes/",title:"",lang:"zh-CN",frontmatter:{highlight:"an-old-hope",theme:"vuepress",lastUpdated:!1},excerpt:"",headers:[{level:3,title:"css盒模型",slug:"css盒模型",children:[]},{level:3,title:"float浮动",slug:"float浮动",children:[]},{level:3,title:"定位",slug:"定位",children:[]},{level:3,title:"flex弹性盒子",slug:"flex弹性盒子",children:[]},{level:3,title:"grid网格布局",slug:"grid网格布局",children:[]}],filePathRelative:"notes/css-notes/README.md",git:{updatedTime:1636989631e3,contributors:[{name:"HWYD",email:"1165203865@qq.com",commits:4}]}}},6456:(l,i,e)=>{e.r(i),e.d(i,{default:()=>p});const a=(0,e(6252).uE)('<h3 id="css盒模型" tabindex="-1"><a class="header-anchor" href="#css盒模型" aria-hidden="true">#</a> css盒模型</h3><ul><li><p>盒子的组成：content内容、padding内填充、border边框、margin外边距</p></li><li><p>背景色会平铺到非margin的区域</p></li><li><p>子元素设置margin-top，父元素也会有的传递的问题</p><ul><li><p>不用margin-top,使用padding代替</p></li><li><p>父元素添加border边框,padding等可以使得现象消失</p></li><li><p>bfc</p></li></ul></li><li><p>margin上下重叠的现象，margin-top和margin-bottom会取较大值</p><ul><li><p>设置一种就可以了</p></li><li><p>bfc解决</p></li></ul></li><li><p>块级盒子与内联盒子</p><ul><li>块级盒子 <ul><li><p>独占一行</p></li><li><p>支持所有样式</p></li></ul></li><li>内联盒子 <ul><li><p>盒子不会产生换行</p></li><li><p>有些样式不支持，例如：width、height，margin，padding等</p></li><li><p>不写宽度的时候，宽度由内容决定</p></li><li><p>所占的内容不一定是矩形</p></li></ul></li><li>块级盒子主要做布局，内联盒子主要做修饰</li></ul></li><li><p>标准盒模型和怪异盒模型</p><ul><li><p>标准盒模型： width指的是内容content的大小</p></li><li><p>怪异盒模型： width指的是内容 content+padding+boder 三者的大小</p></li><li><p>怪异盒模型的应用</p><ul><li>量取尺寸时不用再去计算一些值</li><li>解决一些需要设置百分比和盒模型值</li></ul></li></ul></li></ul><h3 id="float浮动" tabindex="-1"><a class="header-anchor" href="#float浮动" aria-hidden="true">#</a> float浮动</h3><h4 id="清除浮动的方案" tabindex="-1"><a class="header-anchor" href="#清除浮动的方案" aria-hidden="true">#</a> 清除浮动的方案</h4><ul><li>clear属性 <ul><li>上面的div设置了float:left;</li><li>下面的div 设置 clear:left;或者clear:both; 就可以恢复正常</li></ul></li><li>bfc</li><li>使用空标签</li><li>.clearfix::after{} //类似空标签的方法</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token punctuation">.</span>clearfix<span class="token operator">:</span><span class="token operator">:</span>after<span class="token punctuation">{</span>\n      content <span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">;</span>\n      clear<span class="token operator">:</span>both <span class="token punctuation">;</span>\n      display<span class="token operator">:</span>block <span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="浮动特性注意点" tabindex="-1"><a class="header-anchor" href="#浮动特性注意点" aria-hidden="true">#</a> 浮动特性注意点</h4><ul><li><p>只会影响后面元素</p></li><li><p>文本不会被浮动元素覆盖</p></li><li><p>具备内联盒子特性：宽度由内容决定</p></li><li><p>具备块级盒子特性：支持所有样式</p></li><li><p>浮动放不下，会自动换行</p></li></ul><h3 id="定位" tabindex="-1"><a class="header-anchor" href="#定位" aria-hidden="true">#</a> 定位</h3><ul><li><p>static</p></li><li><p>relative</p></li><li><p>absolute</p><ul><li><p>脱离文档流，不占据空间</p></li><li><p>具备内联盒子特性：宽度由内容决定</p></li><li><p>具备块级盒子特性：支持所有样式</p></li><li><p>相对于最近的非static祖先元素定位。如果都没有就以视口定位</p></li></ul></li><li><p>fixed</p></li><li><p>sticky</p><ul><li>粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之 后为固定定位</li></ul></li></ul><h3 id="flex弹性盒子" tabindex="-1"><a class="header-anchor" href="#flex弹性盒子" aria-hidden="true">#</a> flex弹性盒子</h3><ul><li><p>弹性盒子是一种用于按行或按列布局元素的一维布局方法。元素可以膨胀以填充额外的空间，收缩以适应更小的空间</p></li><li><p>flex容器</p></li><li><p>flex-direction</p></li><li><p>flex-wrap</p></li><li><p>justify-content</p></li><li><p>align-item</p><ul><li><p>stretch(默认)</p></li><li><p>flex-start</p></li><li><p>flex-end</p></li><li><p>center</p></li><li><p>baseline</p></li></ul></li><li><p>flex-flow</p></li><li><p>align-content</p><ul><li><p>当不折行的情况下，align-content是不生效的，多行情况才会生效\\</p></li><li><p>stretch（默认）</p></li><li><p>flex-start</p></li><li><p>flex-end</p></li><li><p>center</p></li><li><p>space-around</p></li><li><p>space-between</p></li><li><p>space-evenly</p></li></ul></li></ul><h3 id="grid网格布局" tabindex="-1"><a class="header-anchor" href="#grid网格布局" aria-hidden="true">#</a> grid网格布局</h3><ul><li>css网格是一个用于web的二维布局系统。利用网格，你可以把内容按照行与列的格式进行排版。</li></ul>',14),p={render:function(l,i){return a}}}}]);