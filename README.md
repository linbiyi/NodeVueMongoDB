# NodeVueMongoDB

# 1.Nodejs在Linux下安装和环境搭建
	0)	cd /																			(进入根目录)
	1)	wget https://npm.taobao.org/mirrors/node/v6.10.3/node-v6.10.3-linux-x64.tar.xz	(下载nodejs: 下载node-v6.10.3-linux-x64.tar.xz压缩包到根目录下)
	2)	xz -d node-v6.10.3-linux-x64.tar.xz (tar -xzvf node-v6.10.3-linux-x64.tar.gz)	(解压nodejs：前者解压xz格式 / 后者解压gz格式	xz -d:解压xz文件 输出到tar文件中)
	3)	tar -xvf node-v6.10.3-linux-x64.tar												(再次解压tar文件为目录)
	4)	ln -s /node-v6.10.3-linux-x64/bin/node /usr/local/bin/node						(生成node软链接)
	5)	ln -s /node-v6.10.3-linux-x64/bin/npm  /usr/local/bin/npm						(生成npm软连接)					
	
# 2.安装vue
	0)	进入项目目录下
	1)	npm i vue --save		安装vue(生成node_modules目录和package-lock.json文件)
	2)	npm i -g vue-cli		(win10用管理员权限安装,‪C:\Windows\System32\cmd.exe)
	3)  vue init webpack demo 	初始化一个完整的webpakc项目,demo为项目名称
	4)  填写package.json基础配置项:
			Project name demo  项目名(注意项目名不能是大写，必须是小写)
			Project description A Vue.js project    项目描述
			Author  lanyu    作者
			Use sass (y/n)	 是否使用sass
			Install vue-router  是否需要安装路由
			Use ESLint to lint your code?(y/N)  是否需要语法检查
			Setup unit tests with Karma + Mocha?(Y/n)	是否需要单元测试
			Setup e2e tests with Nightwatch?(Y/n)  是否需要e2e
	(项目生成完毕)

# 3.运行项目
	0)	cd demo      	进入项目目录
	1)	npm i 	     	下载项目打包依赖的插件项
	2)	npm run dev	 	运行项目开发模式(npm run dev ==  npm start ==  node build/dev-server.js)

# 4.vue组件和路由创建使用步骤
	0) 创建组件		xxx.vue						(创建子组件)
	1) 导入组件		import xxx from '组件url'	(父组件中导入子组件)
	2) 加载组件     components: {				(父组件中加载子组件)
						xxx
					}
					
	3) 引用组件		<xxx></xxx>					(父组件中引用子组件)
	4) 组件通讯
		父组件 ---> 子组件 (通过 props: ['']对象 传递数据,父组件在引用子组件的时候通过子组件的属性传递给props,单项绑定)
		子组件 ---> 父组件 (通过 Emit Events 传递数据,this.$emit(''),在子组件中触发父组件的事件)
	
# 5.前端路由 axios 插件
	0)	安装	npm i axios --save		安装该插件(在项目的主目录下, 也就是package.json配置文件所在的目录下安装才能成功)
	1)	调用
		在main.js中添加两行代码导入axios:
		
				import axios from 'axios'
				Vue.prototype.$ajax = axios
				
			在组件中使用axios的方式：
				使用 this.$ajax 代替原来的 axios 即可,其他不变



























	