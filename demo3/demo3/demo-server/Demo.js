//接收对象
let user = require('./User');
console.log(`userName:${user.userName}`)

//接收内置http对象
let http = require('http');
//设置请求头请求的地址
let url = require('url');
//调试模式
let util = require('util');

//创建http服务器
let server = http.createServer((req, res) => {
	res.statusCode = 200;

	res.setHeader('Content-Type', 'text/plain; charset=utf-8'); 

	//req.url 字符串
	//url.parse(req.url) 对象
	//util.inspect()将对象里面的每一个key:value的value转换成字符串
	res.end(util.inspect(url.parse(req.url)));

}).listen(3000, '127.0.0.1', () => {
	console.log("服务器已经运行,请打开浏览器,请输入 http://127.0.0.1:3000/ 来进行访问")
});

