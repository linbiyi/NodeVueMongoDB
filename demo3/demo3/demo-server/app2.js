//客户端
var MongoClient = require('mongodb').MongoClient;
//数据库
var DB_CONN_STR = 'mongodb://127.0.0.1:27017/Lanyu';  
//读取数据
var selectData = function(db, callback) {  
  //连接到表  
  var collection = db.collection('information');
  //查询数据
  //var whereStr = {id:1};
  collection.find().toArray(function(err, result) {
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
  selectData(db, function(result) {
    console.log(result);
    db.close();
  });
});

