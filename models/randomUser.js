let mongoose = require("mongoose");


//article schema
let userSchema = mongoose.Schema({
	gender: String,
	email : String,
	age : Number,
	nat : String

});

let random_user = mongoose.model('randomUsers',userSchema);


module.exports = random_user