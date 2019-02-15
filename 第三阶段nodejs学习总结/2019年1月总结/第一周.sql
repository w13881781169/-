-------2018.12.18------

一、重装mysql数据库软件
    1.卸载mysql数据库软件
	    1>停止mysql服务: 方式一: window电脑-管理-服务
	                     方式二: net stop mysql
	    2>移除mysql服务: mysqld remove mysql
	    3>删除mysql文件目录
    2.安装mysql数据库
        1>下载mysql安装包，解压到指定目录	
		2>创建mysql配置文件:my.ini; 
		3>进入bin目录:D:\mysql\mysql-5.7.24-win32\bin (该目录下有执行mysql安装命令)
		    mysqld install           //安装mysql数据库
          	mysqld --initialize      //初始化mysql数据库
            net start mysql          //启动mysql服务
	
	
二、mysql客户端/服务端模式 c/s   (b/s)
    	
	1.客户端连接服务端
      mysql  -u账号名  -p密码  -h主机(mysql服务器ip地址localhost)  -P端口号(3306)
	2.mysql客户端发送SQL命令，服务解析SQL命令响应用结果
	
三、SQL语句-结构化查询语句
   1.常用SQL
   CREATE DATABASE 数据库名;  //创建数据库
   USE 数据库名;  //选中数据库
   SHOW TABLES;   //查看表
   //创建表结构
   CREATE TABLE 表名(     
       字段名1  数据类型  约束,
	   字段名2  数据类型  约束,
	       .....
   )
   INSERT INTO 表名  (字段名1,字段名2,...)VALUES (值1,值2....); //插入数据
   UPDATE 表名  SET 字段名1=值1，字段2=值2 ... WHERE 条件;  //修改
   DELETE FROM 表名 WHERE 条件;     //删除
   
   2.SQL语句分类
    DDL     CREATE ALTER DROP 
	DML     INSERT UPDATE DELETE
    DQL     SELECT 
    DCL     GRANT

四、Where子句
五、聚合函数    


------2018.12.19---
一、 GROUP BY 子句 -分组
   订单表
    订单时间    订单金额      客户
	2018.12.7     1000        小明
	2018.11.3     500         小明
	2018.10.10    2000        张三
	2018.9.10     1000        张三
	2018.4.10     1000        王二
	
	1.每个客户在2018年订单总金额?
	SELECT 客户,SUM(订单金额) AS 总金额
	FROM 订单表
	GROUP BY 客户;
	

	网站记录表
	
    统计各个网站总访问量?
	
	HAVING 子句 - 条件子句与where条件子句区别：HAVING可以与函数一起使用
	
	1.在2018年订单总金额大于2000的客户?

   	SELECT 客户 
	FROM 订单表
	GROUP BY 客户
	HAVING SUM(订单金额) > 2000;
	
二、ORDER BY 子句 -排序	
	
	SELECT 客户 
	FROM 订单表
	ORDER BY 订单金额 ASC升序|DESC降序

三、LIMIT 子句 - 分页
    SELECT 客户 
	FROM 订单表
	LIMIT 0,20;

	查询SQL语句语法:
	
	SELECT 字段列表|*
	FROM 表名
    [WHERE 条件]
	[GROUP BY 字段]
	[HAVING 条件]
	[ORDER BY 字段 ASC|DESC]
	[LIMIT [偏移量,] 记录条数]
	
	
四、外键-外键约束
    CREATE TABLE 表名(
		字段1 数据类型,
		字段2 数据类型,
		PRIMARY KEY(字段1)， //设置字段1为主键
		CONSTANT `fk1` FOREIGN KEY(`字段2`) REFERENCES 表名2(`id`) ON DELETE CASCADE, UPDATE RESTRICT
	)
	
五、表间关系

  教学管理系统
   学生表    课程表     班级表    教师表  
      
	班级表 1:n 学生表   一对多
    学生表 n:n 课程表   多对多
	班级表 1:1 教师表   一对一
	
---------------2018.12.20--------------
一、查询多表数据
	1.查询单表数据
	 
    SELECT 字段列表|*
	FROM 表名
    [WHERE 条件]
	[GROUP BY 字段]
	[HAVING 条件]
	[ORDER BY 字段 ASC|DESC]
	[LIMIT [偏移量,] 记录条数]
	
	2.查询多表数据
   方式一：
     连接查询
	     普通多表连接
		     SELECT 字段....
			 FROM 表1,表2...
			 WHERE 连接条件
			 AND 其它条件
		 
		 内连接
		     SELECT 字段...
			 FROM 表1 INNER JOIN 表2
			 ON 连接条件
			 WHERE 其它条件
			 
	方式二:
	  子查询
	      SELECT 字段
		  FROM 表1
		  WHERE 字段1 = ( SELECT 字段1 FROM 表2 WHERE 条件 );
	  
	      INSERT INTO 表1 (字段1,字段2,字段3)VALUES(值1，值2, ( SELECT 字段1 FROM 表2 WHERE 条件  ))

	3.示例: 部门表-员工表
	 
	



	  