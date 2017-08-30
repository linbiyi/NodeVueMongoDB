//接收内置http对象
let http = require('http');
//调试模式
let util = require('util');
//node作为服务端调用第三方的接口
http.get('http://www.imooc.com/u/card', function (res) {
	let data = '';
	res.on("data", function (chunk) {
		//数据不能一次接收,要累加接收
		data += chunk;
	});

	res.on("end", function () {
		let result = JSON.parse(data);
		console.log(util.inspect(result));
	})

});