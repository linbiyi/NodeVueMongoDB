//客户端
var MongoClient = require('mongodb').MongoClient;
//数据库
var DB_CONN_STR = 'mongodb://localhost:27017/Lanyu';    

var insertData = function(db, callback) {  
    //连接到表  
    var collection = db.collection('information');
    //插入数据
    var data = [{"name":'刘洋',"age":21},{"name":'张三风',"age":22}];
    collection.insert(data, function(err, result) { 
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    insertData(db, function(result) {
        console.log(result);
        db.close();
    });
});

