//=====2018.12.24=======

一、nodejs
    1.什么nodejs
    2.安装:  node -v
    3.配置： node_global 及 node_cache
二、javascript编程
    1.javaScript与ECMAScript区别
	  jScription|actionScript
	  
	2. 基础语法
       标识符:   var k1 = 10;  字母，_,$
	   变量，常量
	   数据类型: number string boolean undefind  null object
       语句:  程序就是由各种语句构成; 赋值语句，变量声明语句 ,流程控制语句
              流程控制语句: 分支语句, 多分支语句， 循环语句,跳转语句 break
               for(var item : arrays ){
			       console.log(item);
			   }			  
			   for(var i = 0; i < length; i++){
			       arrays[0];
				   break; //直接跳出循环
				   continue; //结束本次循环，继续下次循环
			   }
		运算符: 算术运算符  +  -  * / % ++  --
                关系运算符  >  <  >=  <= !=
                逻辑运算符  &&   ||   !
                三目运算符  表达式A?表达式B:表达式c
                
  		标准对象
        Array 
        Date		
			   
	
    3. 全选框
    4. js基础练习 nodejs平台

三、单步调式
    环境: 浏览器 chrome
	      IDE  vscode  webstome
	步骤： 断点	  
	       debug
		   
四、集成开发环境IDE
    nodepad++   +  cmd 
	vscode  webstome 
	
//========12.25=========

//========12.26=========	
	 
//========12.27=========
一、web服务器-网站服务器
	nginx服务器安装、使用

二、http协议
    1. 什么是http协议 超文本传输协议 
                     基于客户端服务端请求响应模式的,无状态的，无连接的应用层协议.    
	2. URL地址  格式 http://ip:port/path/
	
	3. 请求和响应文本格式
	客户端发送给服务端的请求文本格式:
	
	请求行       请求方法(get,post) URL地址  协议版本
	请求头部     host:192.168.40.114
	               ... 
	请求正文     username=admin&passsword=123

	服务端响应客户端文本格式:
   
    响应行        协议版本  状态码(200,404,500) 状态码描述
    响应头部      content-type:text/plain; charset=utf-8
	                ....
    响应正文	  {"name":"admin"}

三、nodejs开发web服务端应用程序
    
	var http = require("http");
	
	var webserver = http.createServer(function(request,response){
		//=== 处理请求
		var url = request.url;// 处理请求
		url.pathname;  //
		var user = url.query.name
		
		//======处理响应
		response.writeHead("content-type:text/plain; charset=utf-8");//响应头
		response.write('{"name":"admin"}'); //响应正文   响应内容来自：数据库，文件
		response.end(); //结束
		
	});

    webserver.lisent(8081);

四、express WEB框架开发web应用程序
    npm install express -g
	
	var express = require("express");
	var app = express();
	
	//http://ip:port/find
	app.get("/find",function(request,response){
		response.send('{"name":"admin"}');
		
	});
	app.post("/find",function(request,response){
		response.send('{"name":"admin"}');
		
	});
	
	app.lisent(8081,function(){
		
	});
    

	
//-------2019.1.2----第二周小结-----
Nodejs学习
一、nodejs
  1.什么是nodejs  
    是一个编程平台,使用的编程语言javascript,程序运行环境使用是google chrome浏览器v8引擎;包含了应用开发接口api;
     
	 
  2.核心API
    //文件操作   
	var  fs = require("fs");
    fs.readFile("./my.json",function(err,data){
		处理文件
	});
	//文件路径操作
	var path = require("path");
	var currentPath = path.resolve(".");
    path.join(currentPath,"public","my.html");  //currentPath/public/my.html

	//http网络操作
	var http = require("http");
	var webServer = http.createServer(function(request,response){		
		处理网络请求响应
	});
	webServer.listen(8080);
	
	//url
	var url = require("url"); //url模块         
    var urlObj =  url.parse(request.url); 
	
	//util工具模块
	var util = require("util"); //工具模块     
	util.insepct(object) =>将对象参数传换为字符串输出
	
 3.第三方模块
   //数据库操作  mysql
   npm install mysql -g  --save
   var mysql = require("mysql");
   
   var connection = mysql.createConnection({
	   host:192.168.40.114,
	   user:root,
	   password:123,
	   database:mydb
   });//创建数据库连接
   
   connection.connect();//打开数据库连接
   connection.query(sql,parmenter,function(err,data){
	   数据库数据处理
   });
   connection.end(); //关闭数据库连接
   
   //web框架 Express
   npm install express -g --save
   var express = require("express");
   var app = express(); //创建一个express实例instance
   app.get("/login.do",function(request,response){
	    //处理网络请求响应
   });
   app.post("/loginsubmit.do",function(request,response){
	   //处理网络请求响应
   });
    /**
	 * 启动web服务监听8081端口
	 */
	app.listen(8081,function(){
		console.log("服务端启动, http://192.168.40.114:8081");
	});

	//body-parser 解析请求体
	npm install body-parser -g --save
	var bodyParser = require("body-parser");
	var jsonParser = bodyParser.json();
    app.user(jsonParser);
	
二、http协议理解 重点
    web服务器 	
	
	
   
   
	