var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	"id": Number,
	"name": String,
	"jobNumber": String,
	"company": String
});

module.exports = mongoose.model('Good', productSchema);