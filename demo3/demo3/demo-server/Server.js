//接收内置http对象
let http = require('http');
//设置请求头请求的地址
let url = require('url');
//调试模式
let util = require('util');
//通过fs文件系统加载web文件 index.html
let fs = require('fs');

//创建http服务器
let server = http.createServer((req, res) => {
	//读取文件
	var pathname = url.parse(req.url).pathname;
	console.log(pathname.substring(1));
	//pathname.substring(1)去掉斜杠
	fs.readFile(pathname.substring(1), function (err, data) {
		if (err) {
			res.writeHead(404, {
				'Content-Type': 'text/html'
			});
		} else {
			res.writeHead(200, {
				'Content-Type': 'text/html'
			});

			res.write(data.toString());
		}

		res.end();
	});

}).listen(3000, '127.0.0.1', () => {
	console.log("服务器已经运行,请打开浏览器,请输入 http://127.0.0.1:3000/ 来进行访问")
});

