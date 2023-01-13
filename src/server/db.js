const mongoose = require('mongoose');


mongoose.set('strictQuery', false)


const schema = new mongoose.Schema({
	gs : String,
	js: String
})

module.exports = mongoose.model("vote",schema)	



