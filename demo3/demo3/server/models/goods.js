var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	"id": Number,
	"name": String,
	"jobNumber": String,
	"company": String,
	"position": String
});

module.exports = mongoose.model('Goods', productSchema);
