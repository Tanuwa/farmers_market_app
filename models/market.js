var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var marketSchema = new Schema({
	name: String,
	day: String,
	month: String,
	time: String,
	address:String,
	vendors: [{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Vendor"
 }]
});

module.exports = mongoose.model("Market", marketSchema);




//"name": "Downtown  Farmers Market" ,
//	"day": "Saturday",
//	"month":"June - Oct",
//	"time": "8 am - 2 pm",
//	"address": "Pioneer Park, 350 W. 300 S., Salt Lake City, Utah"