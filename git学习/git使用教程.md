#[Git教程](https://mp.weixin.qq.com/s?__biz=MzI4OTA3NDQ0Nw==&mid=2455545866&idx=1&sn=3947574636abe86044bd1bfc1069d207&chksm=fb9cb46acceb3d7ce7c757d43a3c13a134f5f7e07ecb1136ab40ee36d58a94c2d3f46ce4c34a&mpshare=1&scene=23&srcid=#rd )
##学习内容
1. 什么是版本控制系统
2. git是什么
3. 集中式vs分布式
4. Git安装
5. 本地库使用
6. 远程库使用
###什么是版本控制系统
> 如果你用Microsoft Word写过长篇大论，那你一定有这样的经历：
> 想删除一个段落，又怕将来想恢复找不回来怎么办？有办法，先把当前文件“另存为……”一个新  的Word文件，再接着改，改到一定程度，再“另存为……”一个新文件，这样一直改下去，最后你的Word文档变成了这样:

<img src="media/g1.jpg"  >

过了一周，你想找回被删除的文字,想保留最新的一个，然后把其他的删掉，又怕哪天会用上，还不敢删
如果有一个软件，不但能**自动帮我记录每次文件的改动**，还可以让同事**协作编辑**，这样就不用自己管理一堆类似的文件了，也不需要把文件传来传去。如果想查看某次改动，只需要在软件里瞄一眼就可以，岂不是很方便？

这个软件用起来就应该像这个样子，能记录每次文件的改动：

|  版本  |     文件名     |  用户  |       说明       |     日期     |
| :--: | :---------: | :--: | :------------: | :--------: |
|  1   | service.doc |  张三  |   删除了软件服务条款5   | 7/12 10:38 |
|  2   | service.doc |  张三  | 增加了License人数限制 | 7/12 18:09 |
|  3   | service.doc |  李四  |  财务部门调整了合同金额   | 7/13 9:51  |
|  4   | service.doc |  张三  |   延长了免费升级周期    | 7/14 15:17 |
这样，你就结束了手动管理多个“版本”的史前时代，进入到版本控制的20世纪。
###Git是什么?
>Git(读音为/gɪt/。)是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。 [1]  Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。

工作原理流程
<img src="media/git_response.png">
###Svn集中式vs分布式Git
- 集中式
  先说集中式版本控制系统，版本库是集中存放在中央服务器的，而干活的时候，用的都是自己的电脑，所以要先从中央服务器取得最新的版本，然后开始干活，干完活了，再把自己的活推送给中央服务器。中央服务器就好比是一个图书馆，你要改一本书，必须先从图书馆借出来，然后回到家自己改，改完了，再放回图书馆。集中式版本控制系统最大的毛病就是必须联网才能工作
  <img src="media/jz1.jpg">
- 分布式Git是分布式版本控制系统，那么它就没有中央服务器的，每个人的电脑就是一个完整的版本库，这样，工作的时候就不需要联网了，因为版本都是在自己的电脑上。既然每个人的电脑都有一个完整的版本库，那多个人如何协作呢？ 
  分布式版本控制系统通常也有一台充当“中央服务器”的电脑，但这个服务器的作用仅仅是用来方便“交换”大家的修改，没有它大家也一样干活，只是交换修改不方便而已。

###Git安装配置
在Windows上安装Git
在Windows上使用Git，可以从Git官网直接下载安装程序，（网速慢的同学请移步国内镜像），然后按默认选项安装即可。

安装完成后，在开始菜单里找到“Git”->“Git Bash”，蹦出一个类似命令行窗口的东西，就说明Git安装成功！
安装完成后，还需要最后一步设置，在命令行输入：
```
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```
因为Git是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和Email地址。你也许会担心，如果有人故意冒充别人怎么办？这个不必担心，首先我们相信大家都是善良无知的群众，其次，真的有冒充的也是有办法可查的。

注意git config命令的--global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。
###本地库使用
<img src="media/git分布式版本控制系统.png">
####理解工作区与暂存区的区别？
- 工作区：就是你在电脑上看到的目录，比如目录下testgit里的文件(.git隐藏目录版本库除外)。或者以后需要再新建的目录文件等等都属于工作区范畴。
- 版本库(Repository)：工作区有一个隐藏目录.git,这个不属于工作区，这是版本库。其中版本库里面存了很多东西，其中最重要的就是stage(暂存区)，还有Git为我们自动创建了第一个分支master,以及指向master的一个指针HEAD。
####使用
1. 初始化本地库
    git init   // 进入工作区目录，创建本地库
2. 添加内容到暂存区
	git add 文件名    // 文件件换成" ."  表示添加当前工作区所有内容到暂存区
3. 提交内容到本地库
	git commit -m "注释"   
4. 查看工作区状态信息
	git stauts
```javascript
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   helloworld.js
```
5. 查看更改变化
```javascript
$ git diff helloworld.js
diff --git a/helloworld.js b/helloworld.js
index b906f66..e5abf89 100644
--- a/helloworld.js
+++ b/helloworld.js
@@ -1,4 +1,4 @@
-var age = 22;
-if(age == 22){
-       console.log("age == 22");
+var num = 22;
+if(num == 22){
+       console.log("num == 22");
 }
\ No newline at end of file

```
6. 查看本地库操作日志
```javascript
$ git log
commit eb91b68040c6a7b6e347fd4c9ca839238c7307f0 (HEAD -> master)
Author: zhousir <2919150@qq.com>
Date:   Fri Feb 15 09:39:48 2019 +0800

    增加if判断语句

commit 46635c71ebfe7315b105cd46ef020529c01528ff
Author: zhousir <2919150@qq.com>
Date:   Fri Feb 15 09:33:45 2019 +0800

    初始变量age

$ git log –pretty=oneline  //只显示版本号和提交注释
```
7. 回退到上一个版本
```javascript
$ git reset --hard HEAD^   //HEAD最新版本，后面跟上"^"表示最新版本的上一个版本，“^^”表示上上一个版本;  
HEAD is now at eb91b68 增加if判断语句

$ git reset --hard 46635c71ebfe7315b105cd46ef020529c01528ff //回退到指定版本号
HEAD is now at 46635c7 初始变量age

```
8. 恢复工作区删除内容
```javascript
$ git checkout -- helloworld.js  //helloworld.js 需要恢复的文件; 如果不知道恢复文件名，可通过 git status 查看

```
9. 删除本地库内容
```javascript
删除工作区文件
提交删除修改操作  git add .   git commit -m "删除文件"
```
###本地库忽律不管理的内容
新建.gitignore文件，内容为忽律的文件或目录
例示:
.gitignore
/node_modules/

###远程库使用
完全可以自己搭建一台运行Git的服务器，不过现阶段，为了学Git先搭个服务器绝对是小题大作。好在这个世界上有个叫GitHub的神奇的网站，从名字就可以看出，这个网站就是提供Git仓库托管服务的，所以，只要注册一个GitHub账号，就可以免费获得Git远程仓库。

在了解之前，先注册github账号，由于你的本地Git仓库和github仓库之间的传输是通过SSH加密的，所以需要一点设置：
- 第一步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果有的话，直接跳过此如下命令，如果没有的话，打开命令行，输入如下命令：

ssh-keygen -t rsa –C “youremail@example.com”, 由于我本地此前运行过一次，所以本地有，

id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人。

- 第二步：登录github,打开” settings”中的SSH Keys页面，然后点击“Add SSH Key”,填上任意title，在Key文本框里黏贴id_rsa.pub文件的内容。

点击 Add Key，你就应该可以看到已经添加的key。

####如何添加远程库？
现在的情景是：我们已经在本地创建了一个Git仓库后，又想在github创建一个Git仓库，并且希望这两个仓库进行远程同步，这样github的仓库可以作为备份，又可以其他人通过该仓库来协作。

- 首先，登录github上，然后在右上角找到“create a new repo”创建一个新的仓库。
- 接着 要据GitHub的提示，在本地的testgit仓库下运行命令：

	$ git remote add origin https://github.com/tugenhua0707/testgit.git  //你的github仓库地址

	$ git push -u origin master
把本地库的内容推送到远程，使用 git push命令，实际上是把当前分支master推送到远程。

由于远程库是空的，我们第一次推送master分支时，加上了 –u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。推送成功后，可以立刻在github页面中看到远程库的内容已经和本地一模一样了

- 克隆远程库内容到本地
	$ git clone https://github.com/yihu0817/webapp.git

- 推送本地库修改内容到远程库
	$ git push origin master
- 拉取远程库内容到本地
```
$ git pull
Updating 6269da3..c80261a
Fast-forward
 bin/www | 1 +
 1 file changed, 1 insertion(+)
```

