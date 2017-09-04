var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	"id": Number,
	"name": String,
	"jobNumber": String,
	"company": String
});

<<<<<<< HEAD
module.exports = mongoose.model('Good', productSchema);
=======
module.exports = mongoose.model('Goods', productSchema);
>>>>>>> aa1313df539e35340427f69273b56966197957f2
