var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

//链接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/Lanyu');

mongoose.connection.on("connected", function () {
	console.log("链接成功");
});

mongoose.connection.on("error", function () {
	console.log("链接失败");
});

mongoose.connection.on("disconnected", function () {
	console.log("断开链接");
});

// 接口 http://127.0.0.1:3000/goods
router.get("/", function (req,res,next) {
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	
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
					count: doc.length,
					list: doc
				}
			})
		}
	});
});

module.exports = router;