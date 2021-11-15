"use strict";(self.webpackChunkmyBlog=self.webpackChunkmyBlog||[]).push([[489],{9368:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-2e0aab10",path:"/notes/data-structure/",title:"",lang:"zh-CN",frontmatter:{lastUpdated:!1},excerpt:"",headers:[],filePathRelative:"notes/data-structure/README.md",git:{updatedTime:1636989631e3,contributors:[{name:"HWYD",email:"1165203865@qq.com",commits:3}]}}},3311:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h4 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h4><p>定性计算算法运行的时间，用大写的O表示，代码执行一次为O(1),代码循环n次，就为O(n)</p><h4 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h4><p>定性计算算法运行的空间，用大写的O表示，代码中使用了一个临时变量，那就是O(1),如果是一个长度为n的数组，那就是O(n)</p><h4 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h4><p>特点：后进先出，用数组，常用场景：函数调用堆栈， 十进制转二进制，判断字符串的括号是否有效</p><h5 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h5><p>特点：先进先出，用数组，常用场景：js任务队列，计算最近请求次数</p><h4 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h4><p>特点：多个元素组成的列表，元素存储不连续，使用next指针串起来。可用Object模拟链表，数组vs链表：数组增删非首尾元素需要往往需要移动元素，链表增删非首尾元素不需要移动元素，只需要改变next的指向就可。 常用最多的是遍历链表。</p><h4 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h4><p>特点：无序且唯一，用set,常用场景:数组等去重，取交集，取差集</p><ul><li>去重：[...new Set(arr)]</li><li>交集：[...new Set(arr)].filter(item =&gt;{ return arr2.includes(item) })</li><li>差集：[...new Set(arr)].filter(item =&gt;{ return !arr2.includes(item) })</li></ul><h4 id="字典" tabindex="-1"><a class="header-anchor" href="#字典" aria-hidden="true">#</a> 字典</h4><p>特点：无序且唯一的键值对。用Map,与集合类似，子典也是一种存储唯一值的数据结构，但它是以键值对的形式来存储的。</p><ul><li>字典的常用操作：键值对的增删改查。</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">//新建字典</span>\n    m<span class="token punctuation">.</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span> <span class="token punctuation">,</span> <span class="token string">&#39;aa&#39;</span><span class="token punctuation">)</span>  <span class="token comment">//增</span>\n    m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>  <span class="token comment">//获取</span>\n    m<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>   <span class="token comment">//删</span>\n    m<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">//删除全部</span>\n    m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span> <span class="token punctuation">,</span> <span class="token string">&#39;aaa&#39;</span><span class="token punctuation">)</span>  <span class="token comment">//改，也是用set方法</span>\n    m<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 大小</span>\n    map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 判断是否拥有</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="树" tabindex="-1"><a class="header-anchor" href="#树" aria-hidden="true">#</a> 树</h4><p>特点：一种分层数据的抽象模型</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e14ccb8fafe145a2a53578c2849c5d71~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><ul><li>深度优先遍历(天然递归)(上图的顺序为 8 3 1 6 4 7 10 14 13 )</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> root<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>dfs<span class="token punctuation">)</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>广度优先遍历 (上图顺序为 8 3 10 1 6 14 4 7 13 )</li></ul><ol><li>新建一个队列，把根节点入队</li><li>把队头出队并访问</li><li>把队头的children挨个入队</li><li>重复第二、三步，直到队列为空</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">bfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n  <span class="token keyword">const</span> q <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>\n  <span class="token keyword">while</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>length<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">const</span> n <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>val<span class="token punctuation">)</span>\n  n<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h5 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h5><p>特点：树中每个节点最多只能有两个子节点，在JS中通常用Object来模拟二叉树</p><h5 id="先中后序遍历-递归" tabindex="-1"><a class="header-anchor" href="#先中后序遍历-递归" aria-hidden="true">#</a> 先中后序遍历(递归)</h5><ul><li>先序遍历</li></ul><ol><li>访问根节点</li><li>对根节点的左子树进行先序遍历</li><li>对根节点的右子树进行先序遍历</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">preorder</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span><span class="token punctuation">{</span>\n <span class="token keyword">return</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>\n<span class="token function">preorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>\n<span class="token function">preorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>中序遍历</li></ul><ol><li>对根节点的左子树进行中序遍历</li><li>访问根节点</li><li>对根节点的右子树进行中序遍历</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">constinorder</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root <span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>\n<span class="token function">inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>\n<span class="token function">inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>后序遍历</li></ul><ol><li>对根节点的左子树进行后序遍历</li><li>对根节点的右子树进行后序遍历</li><li>访问根节点</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">postorder</span><span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token parameter"><span class="token operator">!</span>root</span> <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>\n<span class="token function">postorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>\n<span class="token function">postorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h5 id="先中后序遍历-非递归" tabindex="-1"><a class="header-anchor" href="#先中后序遍历-非递归" aria-hidden="true">#</a> 先中后序遍历(非递归)</h5><p>用堆栈模拟递归的过程</p><ul><li>先序遍历 (把节点出栈，右节点先入栈，左节点后入栈，然后重复上面，每次出栈的顺序就是前序遍历的顺序)</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">constpreorder</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token keyword">return</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>\n<span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token keyword">const</span> n <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>val<span class="token punctuation">)</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>right<span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>right<span class="token punctuation">)</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>left<span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>left<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>中序遍历</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">inorder</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token keyword">return</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token keyword">let</span> p <span class="token operator">=</span> root\n<span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">||</span> p<span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>\nstack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>\n p <span class="token operator">=</span> p<span class="token punctuation">.</span>left\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> n <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>val<span class="token punctuation">)</span>\np <span class="token operator">=</span> n<span class="token punctuation">.</span>right\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li>后序遍历(利用先序遍历然后颠倒)</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">postorder</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>\n<span class="token keyword">const</span> outStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span>\n<span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token keyword">const</span> n <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\noutStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>left<span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>left<span class="token punctuation">)</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>right<span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>right<span class="token punctuation">)</span>\n <span class="token punctuation">}</span>\n<span class="token keyword">while</span><span class="token punctuation">(</span>outStack<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token keyword">const</span> n <span class="token operator">=</span> outStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>val<span class="token punctuation">)</span>\n <span class="token punctuation">}</span>\n <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="图" tabindex="-1"><a class="header-anchor" href="#图" aria-hidden="true">#</a> 图</h4><p>特点：图是网络结构的抽象模型，是一组由边连接的节点 图可以表示任何二次元关系，比如道路、航班 js中没有图，可以用Object和Array构建图 图的表示法：邻接矩阵、邻接表、关联矩阵...</p><ul><li>深度优先遍历</li></ul><ol><li>访问根节点</li><li>对根节点的没访问过的相邻节点挨个进行深度优先遍历</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token punctuation">{</span>\n<span class="token number">0</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token number">1</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token number">2</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token number">3</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>\nvisited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>\ngraph<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token parameter">c</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token function">dfs</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li>广度优先遍历</li></ul><ol><li>新建一个队列，把根节点入队</li><li>把队头出队并访问</li><li>把队头的没访问过的相邻节点入队</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token punctuation">{</span>\n<span class="token number">0</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token number">1</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token number">2</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token number">3</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nvisited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> q <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>\n<span class="token keyword">while</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token keyword">const</span> n <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>\ngraph<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\nq<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\nvisited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> 堆</h4><p>特点：堆是一种特殊的完全二叉树 每一次都填满，最后一层可以缺少右边节点 所有的节点都大于等于(最大堆)或小于等于(最小堆)它的子节点 js中通常使用数组表示堆(按广度优先遍历)<br> 左侧子节点的位置是2<em>index+1（这里的位置指index顺序） 右侧子节点的位置是2</em>index+2 堆的应用 堆能高效、快速地找出 最大值和最小值，时间复杂度：O(1),如堆顶元素不是最大值就是最小值</p><ul><li><p>找出第k个最大值或最小的元素</p></li><li><p>第k个最大元素 构建一个最小堆，并将元素依此插入堆中 当堆的容量超过K，就删除堆顶 插入结束后，堆顶就是第k个最大元素</p></li><li><p>js实现最小堆类 在类里，声明一个数组，用来装元素 主要方法：插入、删除堆顶、获取堆顶、获取堆大小 插入：将值插入堆的底部，即数组的尾部 然后上移：将这个值和它的父节点进行交换，直到父节点小于等于这个插入的值。</p></li></ul>',56),t={render:function(n,s){return p}}}}]);