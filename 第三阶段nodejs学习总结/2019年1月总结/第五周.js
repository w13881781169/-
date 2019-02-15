上周知识回顾:
一、Pug/jade  |  ejs  模板引擎
     
	模板 +  数据(json对象)  =>  html文本
    
	
	main.ejs                                +               json对象
	
    <html>                                                   {'message' : '模板学习'}
		<head></head>
		<body>
			<h1> <%= message %> </h1>
		</body>
	</html> 	
    
	
	html文本
	
	<html>                                                  
		<head></head>
		<body>
			<h1>模板学习</h1>
		</body>
	</html> 	
	
	
    main.pug
	
	html
	    head
		body 
		    h1 #{message}

二、Eslint 中间件  编译检查javaScript代码是否符合定义的js语法规则
    
	test.js
	
	var a = "10"
	if(a='20'){
		console.log(a);
	}
	
	npm install eslint;  //安装eslint
	
	eslint test.js;    //编译检查js代码是否符合规则
	node test.js;    //运行js代码
	
	vscode 安装eslint插件
	webstome 
	
三、Express异常错误处理

    Express内置一个错误处理句柄  Error Handler 中间件
	
	app.js
	
    var app = express();
	
	//错误处理句柄  Error Handler 中间件
	function errorHander(err,req,res,next){
		//处理异常代码
	}
	app.use(errorHander());
	
	
	app.use(function(err,req,res,next){
		//处理异常代码
	});
	
四、Promise  处理异步任务
    
	fs.readfile('test.txt',function(err,data){
		if(err){
			throws new Error('读文件出错');
		}else{
			console.log(data);
		}

	});
	
	var promise = new Promise(function(resolve,reject){
		//异步任务
		fs.readfile('test.txt',function(err,data){
			if(err){
				reject('读文件出错');
			}else{
				resolve(data);
			}
	  });
	});
	
	promise.then(function(data){
		//处理成功
	}).catch(function(err){
		//处理失败
	});
	
	
// ============  周一  =============

1. 登录示例
   Express + ejs  + mysql
   
2. cookie技术
    web服务器发送给客户端的文本信息   名称,值
	
	res.send('信息');
	res.render('test.ejs',{'message':'内容'});
    res.redirect('/login.do');
	
    //发送cookie到客户端	
	res.cookie('username','admin');

	res.cookie('user', {'username':'admin', 'password':'123'} , {'maxAge': 1000*60*60*24));
	
	//获取cookie内容
	var user =req.cookies.user;
	
    //清除cookie
	res.clearCookie('user');
	
	

	
	
      