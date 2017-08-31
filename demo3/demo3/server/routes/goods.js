//使用express框架获取二级路由
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//加载模型表
var Goods = require('../models/goods');

//链接MongoDB数据库
mongoose.connect('mongodb://10.40.40.128:27017/demo');
//监听数据库是否链接成功
mongoose.connection.on("connected", function () {
	console.log("链接成功");
});
mongoose.connection.on("error", function () {
	console.log("链接失败");
});
mongoose.connection.on("disconnected", function () {
	console.log("断开链接");
});

//实现路由,访问/的时候默认查询商品列表,回调,next继续执行对象
//接口：http://localhost:3000/goods
router.get("/", function (req,res,next) {
	res.send("发送请求成功");
	Goods.find({}, function (err, doc) {
		if (err) {
			res.json({
				status: "1",
				msg: err.message
			});
		} else {
			res.json({
				status: "0",
				msg: '',
				result: {
					//doc就是查出来的文档集合
					count: doc.length,
					list: doc
				}
			})
		}
	});
});

//输出
module.exports = router;
