"use strict";(self.webpackChunkmyBlog=self.webpackChunkmyBlog||[]).push([[163],{3965:(a,e,s)=>{s.r(e),s.d(e,{data:()=>n});const n={key:"v-133f5f04",path:"/blogs/git-blogs/usegit.html",title:"",lang:"zh-CN",frontmatter:{theme:"channing-cyan"},excerpt:"",headers:[{level:3,title:"本地项目进行git 初始化",slug:"本地项目进行git-初始化",children:[]},{level:3,title:"创建新项目加入git管理",slug:"创建新项目加入git管理",children:[]},{level:3,title:"添加ssh公钥？",slug:"添加ssh公钥",children:[]},{level:3,title:"加入项目团队，需要拉取远程代码",slug:"加入项目团队-需要拉取远程代码",children:[]},{level:3,title:"检测当前文件状态",slug:"检测当前文件状态",children:[]},{level:3,title:"查看之前跟踪过(已提交)的文件，现在修改了，但还没缓存，这些文件修改了什么",slug:"查看之前跟踪过-已提交-的文件-现在修改了-但还没缓存-这些文件修改了什么",children:[]},{level:3,title:"查看本地现有分支(带*号当前所处的分支)",slug:"查看本地现有分支-带-号当前所处的分支",children:[]},{level:3,title:"查看远程现有分支",slug:"查看远程现有分支",children:[]},{level:3,title:"查看所有分支",slug:"查看所有分支",children:[]},{level:3,title:"查看本地和远程分支是否同步和关联",slug:"查看本地和远程分支是否同步和关联",children:[]},{level:3,title:"设置对应的远程分支推送",slug:"设置对应的远程分支推送",children:[]},{level:3,title:"本地代码没有修改或更新，远程代码更新了,本地代码想获取最新",slug:"本地代码没有修改或更新-远程代码更新了-本地代码想获取最新",children:[]},{level:3,title:"同一个分支远程代码没有更新，本地更新了代码，想要更新上去",slug:"同一个分支远程代码没有更新-本地更新了代码-想要更新上去",children:[]},{level:3,title:"同一个分支本地有更新，远程也有更新",slug:"同一个分支本地有更新-远程也有更新",children:[]},{level:3,title:"合并代码(在本分支把其他分支的代码合并过来)",slug:"合并代码-在本分支把其他分支的代码合并过来",children:[]},{level:3,title:"合并的代码有冲突",slug:"合并的代码有冲突",children:[]},{level:3,title:"回退到上一个版本",slug:"回退到上一个版本",children:[]},{level:3,title:"本地仓库回退到指定版本",slug:"本地仓库回退到指定版本",children:[]},{level:3,title:"远程仓库回退",slug:"远程仓库回退",children:[]},{level:3,title:"创建本地新分支",slug:"创建本地新分支",children:[]},{level:3,title:"新建远程分支",slug:"新建远程分支",children:[]},{level:3,title:"切换分支",slug:"切换分支",children:[]},{level:3,title:"删除本地某个分支",slug:"删除本地某个分支",children:[]},{level:3,title:"删除远程某个分支",slug:"删除远程某个分支",children:[]}],filePathRelative:"blogs/git-blogs/usegit.md",git:{updatedTime:1645626385e3,contributors:[{name:"HWYD",email:"1165203865@qq.com",commits:1}]}}},3665:(a,e,s)=>{s.r(e),s.d(e,{default:()=>c});var n=s(6252);const i=(0,n.uE)('<h4 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h4><p>git是现在很流行的代码版本管理工具，我们需要学习并且掌握好它。我们在项目中使用git会遇到非常多种情况，本文分类了一下常见的情况，感兴趣的你也来看看吧!</p><h3 id="本地项目进行git-初始化" tabindex="-1"><a class="header-anchor" href="#本地项目进行git-初始化" aria-hidden="true">#</a> 本地项目进行git 初始化</h3><p>如果要对本地的某个项目进行git管理</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    git init\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="创建新项目加入git管理" tabindex="-1"><a class="header-anchor" href="#创建新项目加入git管理" aria-hidden="true">#</a> 创建新项目加入git管理</h3><p>1.在github或gitee上创建一个新的仓库用来存放项目，成功后也就是这个项目的文件夹了</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/625db88857a54d2f891e83a4e0a28e01~tplv-k3u1fbpfcp-watermark.image?" alt="cangku.png"></p><p>在自己电脑拉取项目文件，然后进行在该文件夹下可以进行写代码(搭建项目，写业务)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  git clone <span class="token string">&#39;项目地址&#39;</span>  \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后在该项目文件夹下有文件更新后,再提交到远程</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git add <span class="token punctuation">.</span>\ngit commit <span class="token operator">-</span>m <span class="token string">&#39;你的描述&#39;</span>\ngit push \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>本地有git开发了(开发到一半或完成)的项目，没有远程仓库，想创建远程仓库，并进行关联。</li></ol><ul><li>创建远程仓库，不要初始化，也就是一个没有提交记录的空仓库，然后进行关联和推送</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git remote add origin 远程仓库地址   <span class="token comment">// origin 是远程仓库别名</span>\ngit push <span class="token operator">-</span>u origin <span class="token string">&quot;master&quot;</span>      \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="添加ssh公钥" tabindex="-1"><a class="header-anchor" href="#添加ssh公钥" aria-hidden="true">#</a> 添加ssh公钥？</h3><p>如果是使用https，而不是用ssh的话，那么每次push代码都得填写用户名和密码，要是设置了ssh密钥的话，就不用，方便一点。</p><h3 id="加入项目团队-需要拉取远程代码" tabindex="-1"><a class="header-anchor" href="#加入项目团队-需要拉取远程代码" aria-hidden="true">#</a> 加入项目团队，需要拉取远程代码</h3><ul><li>刚加入项目组或新入职，都会让你拉取现有的项目到个人的电脑</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  git clone <span class="token string">&#39;项目ssh的地址&#39;</span>\n  \n  或者\n  git clone <span class="token string">&#39;项目https的地址&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="检测当前文件状态" tabindex="-1"><a class="header-anchor" href="#检测当前文件状态" aria-hidden="true">#</a> 检测当前文件状态</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  git status\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="查看之前跟踪过-已提交-的文件-现在修改了-但还没缓存-这些文件修改了什么" tabindex="-1"><a class="header-anchor" href="#查看之前跟踪过-已提交-的文件-现在修改了-但还没缓存-这些文件修改了什么" aria-hidden="true">#</a> 查看之前跟踪过(已提交)的文件，现在修改了，但还没缓存，这些文件修改了什么</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git diff\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="查看本地现有分支-带-号当前所处的分支" tabindex="-1"><a class="header-anchor" href="#查看本地现有分支-带-号当前所处的分支" aria-hidden="true">#</a> 查看本地现有分支(带*号当前所处的分支)</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git branch\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如下图有四个分支，带*表示当前处于该分支</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e1f17f2b56c3493795d141efcbeda4b3~tplv-k3u1fbpfcp-watermark.image?" alt="1.png"></p><h3 id="查看远程现有分支" tabindex="-1"><a class="header-anchor" href="#查看远程现有分支" aria-hidden="true">#</a> 查看远程现有分支</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git branch <span class="token operator">-</span>r\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如下图远程只有一个master分支</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5043627e67d64f32a9b837fa8317d855~tplv-k3u1fbpfcp-watermark.image?" alt="branch-r.png"></p><h3 id="查看所有分支" tabindex="-1"><a class="header-anchor" href="#查看所有分支" aria-hidden="true">#</a> 查看所有分支</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git branch <span class="token operator">-</span>a\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="查看本地和远程分支是否同步和关联" tabindex="-1"><a class="header-anchor" href="#查看本地和远程分支是否同步和关联" aria-hidden="true">#</a> 查看本地和远程分支是否同步和关联</h3><ul><li>建议在每次修改代码想要提交前都查询一次</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git fetch         <span class="token comment">// 这个是用来获取远程分支的最新数据，不会对本地代码有影响</span>\ngit branch <span class="token operator">-</span>vv    <span class="token comment">//列出所有分支及对应的远程分支的情况</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如图，分支abc本地落后(behind)远程2个提交记录 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c976c33fc2e8470fa17dde435f64d071~tplv-k3u1fbpfcp-watermark.image?" alt="本地落后远程的.png"> 如图，分支abc本地领先(ahead)远程2个提交记录</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d756effd905a4e5f8653e06eadbad1df~tplv-k3u1fbpfcp-watermark.image?" alt="本地领先远程的.png"></p><h3 id="设置对应的远程分支推送" tabindex="-1"><a class="header-anchor" href="#设置对应的远程分支推送" aria-hidden="true">#</a> 设置对应的远程分支推送</h3><p>这个可以设置本地的某些分支对应远程的某些分支，如下面本地develop对应远程develop</p><ul><li>origin是仓库别名，develop是分支名(如果改过仓库别名，请对应替换)</li><li>这样子的好处是每次push,只需要写git push,而不用写git push origin dev</li></ul><h4 id="设置前" tabindex="-1"><a class="header-anchor" href="#设置前" aria-hidden="true">#</a> 设置前</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git push origin develop    \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="进行设置" tabindex="-1"><a class="header-anchor" href="#进行设置" aria-hidden="true">#</a> 进行设置</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git push <span class="token operator">-</span>u origin develop    <span class="token comment">// 本地有develop分支，远程没有的情况下</span>\n或\ngit push <span class="token operator">--</span>set<span class="token operator">-</span>upstream origin develop  <span class="token comment">//本地远程都有develop分支的情况下</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="设置后-就不用带上仓库名和分支了" tabindex="-1"><a class="header-anchor" href="#设置后-就不用带上仓库名和分支了" aria-hidden="true">#</a> 设置后(就不用带上仓库名和分支了)</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git push  \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="本地代码没有修改或更新-远程代码更新了-本地代码想获取最新" tabindex="-1"><a class="header-anchor" href="#本地代码没有修改或更新-远程代码更新了-本地代码想获取最新" aria-hidden="true">#</a> 本地代码没有修改或更新，远程代码更新了,本地代码想获取最新</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git fetch\ngit pull\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="同一个分支远程代码没有更新-本地更新了代码-想要更新上去" tabindex="-1"><a class="header-anchor" href="#同一个分支远程代码没有更新-本地更新了代码-想要更新上去" aria-hidden="true">#</a> 同一个分支远程代码没有更新，本地更新了代码，想要更新上去</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git add <span class="token punctuation">.</span>\ngit commit <span class="token operator">-</span>m <span class="token string">&#39;写你想描述的信息&#39;</span>\ngit push\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="同一个分支本地有更新-远程也有更新" tabindex="-1"><a class="header-anchor" href="#同一个分支本地有更新-远程也有更新" aria-hidden="true">#</a> 同一个分支本地有更新，远程也有更新</h3><p>这种情况假设你和同学都在develop分支上工作，当你改好代码想要推送时，发现同学已经在远程develop分支推送更新过了，那么你可以先把你修改的储存起来，然后进行代码拉去，然后再把你的储存放出来，进行推送操作。注：这也使用其他情况，如：开发到一半需要去别的分支解决bug</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git stash <span class="token operator">-</span>a <span class="token operator">-</span>m <span class="token string">&#39;描述储存的信息&#39;</span>    <span class="token comment">// -a是表示所有改动包括新建文件这些没有跟踪过的</span>\ngit stash list      <span class="token comment">// 查看所有储存，根据提交的信息找到想要的</span>\ngit stash apply  储存的id      <span class="token comment">//这是将之前储存的文件放出来，这个操作在别的分支也可以做</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如图，通过git stash list 看到储存列表，红色框的 stash@{0} 就是储存id</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e228a909b8e4633a134e673195dfc96~tplv-k3u1fbpfcp-watermark.image?" alt="stash.png"></p><h3 id="合并代码-在本分支把其他分支的代码合并过来" tabindex="-1"><a class="header-anchor" href="#合并代码-在本分支把其他分支的代码合并过来" aria-hidden="true">#</a> 合并代码(在本分支把其他分支的代码合并过来)</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 假设在master分支操作</span>\ngit merge develop   <span class="token comment">// 合并本地的 develop</span>\n<span class="token comment">// 或你也可以合并远程的</span>\ngit merge origin develop\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果合并后没有问题，就可以push推送到远程分支。</p><h3 id="合并的代码有冲突" tabindex="-1"><a class="header-anchor" href="#合并的代码有冲突" aria-hidden="true">#</a> 合并的代码有冲突</h3><ul><li>这是你要合并进来的分支的内容跟你这个分支修改了同一个地方，所以需要你手动进行选择，去采用合并进来的，还是你这个分支原有的，或者你还可以修改其他。</li><li>修改后就再进行一次提交，就可以解决冲突了。 如图，如果有冲突，可以在vscode等编辑器看到类似这种情况</li></ul><ol><li>Accept Current Change:用这个分支之前的修改；</li><li>Accept Incoming Change:引用其他分支的合并进来(传进来)的修改，</li><li>Accept Both Changes:两边修改都接受；</li><li>Compare Changes:你可以看一下两者的对比情况</li></ol><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e791cb4df6348f3b90c4f52096ad003~tplv-k3u1fbpfcp-watermark.image?" alt="合并冲突.png"></p><h3 id="回退到上一个版本" tabindex="-1"><a class="header-anchor" href="#回退到上一个版本" aria-hidden="true">#</a> 回退到上一个版本</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    git reset <span class="token constant">HEAD</span><span class="token operator">^</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="本地仓库回退到指定版本" tabindex="-1"><a class="header-anchor" href="#本地仓库回退到指定版本" aria-hidden="true">#</a> 本地仓库回退到指定版本</h3><p>一般我们git log 查找一下我们要回退的版本的id，下图一串长长的数字就是那个id</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/909aa01c79154aebba360f61fd33071e~tplv-k3u1fbpfcp-watermark.image?" alt="log.png"></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\ngit reset 版本的id\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="远程仓库回退" tabindex="-1"><a class="header-anchor" href="#远程仓库回退" aria-hidden="true">#</a> 远程仓库回退</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> git reset <span class="token operator">--</span>hard <span class="token string">&#39;提交版本id&#39;</span>  <span class="token comment">// 本地先回退到对应版本   </span>\n git push <span class="token operator">-</span>f    <span class="token comment">//强制推送到远程，也就实现了回退</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="创建本地新分支" tabindex="-1"><a class="header-anchor" href="#创建本地新分支" aria-hidden="true">#</a> 创建本地新分支</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    git <span class="token function">branch</span> <span class="token punctuation">(</span>branchname<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="新建远程分支" tabindex="-1"><a class="header-anchor" href="#新建远程分支" aria-hidden="true">#</a> 新建远程分支</h3><p>如果本地有该分支，远程没有(如果本地也没有，那么就先新建本地的)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  git push <span class="token operator">-</span>u origin 分支名\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    git <span class="token function">checkout</span> <span class="token punctuation">(</span>branchname<span class="token punctuation">)</span>\n    或\n    git <span class="token keyword">switch</span> <span class="token punctuation">(</span>branchname<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="删除本地某个分支" tabindex="-1"><a class="header-anchor" href="#删除本地某个分支" aria-hidden="true">#</a> 删除本地某个分支</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git branch <span class="token operator">-</span>d 分支名\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="删除远程某个分支" tabindex="-1"><a class="header-anchor" href="#删除远程某个分支" aria-hidden="true">#</a> 删除远程某个分支</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git push origin <span class="token operator">--</span><span class="token keyword">delete</span> 分支名\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="结束语" tabindex="-1"><a class="header-anchor" href="#结束语" aria-hidden="true">#</a> 结束语</h4>',84),l=(0,n.Uk)("本文分享了一些git的常用场景，如果对你有所帮助，我很开心。如果你也在学习git，我建议深入阅读git的官方文档，并自己创建仓库进行实践。 "),r={href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"},t=(0,n.Uk)("git官方文档"),c={render:function(a,e){const s=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[i,(0,n._)("p",null,[l,(0,n._)("a",r,[t,(0,n.Wm)(s)])])],64)}}}}]);