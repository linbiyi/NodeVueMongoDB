// var mongoose = require('mongoose');
// var PhotoList = mongoose.model('PhotoList');
// module.exports = function(req, res, next) {
// 	PhotoList.find({}, function(err, docs) {
// 		if(err) {
// 			res.end('Error');
// 			return next();
// 		}
// 		res.send(JSON.stringify(docs));
// 	});
// }

//mongo客户端
var MongoClient = require('mongodb').MongoClient;
//数据库
var DB_TEST = 'mongodb://localhost:27017/Lanyu';
//链接数据库
var selectData = function(db, callback) {
    //链接到表
    var collection = db.collection('information');
    //查询数据
    collection.find().toArray(function(err, result) {
        if(err) 
        {
            console.log("Error:"+ err);
            return;
        } 
        callback(result);
    });
}

MongoClient.connect(DB_TEST, (err, db) => {
    console.log("链接成功");
    selectData(db, function(result) {
        console.log(result);
        db.close();
    });
});
