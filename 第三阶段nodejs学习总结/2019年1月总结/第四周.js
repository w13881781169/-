一、复习，补充知识
   pug模板引擎
    1.包含include
    a.pug
    
	form	
		input(name='usrname' type='text')
		input(name='usrname' type='text')
			

    b.pug 
     	
	html
        head
            title pug模板引擎
        body
			include a.pug
			
	2.继承 extends block
	
	parent.pug
	html
	    head
		    title 标题1
			meta(charset='utf-8')
		body
			div 顶部区域	
			block container 
			  div 内容区域
			div 底部区域
			
	
	son.pug
	
	extends parent.pug
	block container
		div 新的内容区域
	div 特有的区域

   3.注释
   //单行注释              <!--单行注释-->   
   div 单行注释            <div>单行注释</div>
   
   //- 单行注释
   
   //-
      多行注释
	  
	
二、 Eslint 
   1.什么是Eslint,做什么的?
     编译javascript代码

	java源程序    编译         字节码文件            执行
    test.java      ->          test.class 
      javac test.java  	
	  java test
	  
	javascript源程序 
	test.js                执行   node test.js
	 
	 
	 规则可配置
	 
	 rules
	 
	 var k = '规则';
	 if(k ='规则'){
	 }
	 
	2.使用
	 安装  
	    npm install eslint
	 规则配置文件
		 eslint --init
	      .eslintrc.js
	 编译javascript代码
        test.js
         
		 var k = '规则';
		 if(k ='规则'){
		 
		 }		
		  
		eslint test.js  编译
		node test.js 执行

     与vscode 集成
      安装eslint插件
	  
	 
	  
三、vscode插件
   
四、小项目用户管理系统

    登录 - > 主界面   
	         添加用户
             用户列表 -> 修改用户
                      -> 删除用户
    用户管理系统				  
	Express + pug|ejs   +  mysql  
	
	
	 
	   
	 