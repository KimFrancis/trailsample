var db = require('../lib/db');
var mongoose=require('mongoose');


var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://fachiz:112194@ds039431.mongolab.com:39431/trailrushdbase");
autoIncrement.initialize(connection);

var RunnerSchema = new db.Schema({
	Runner: String
	,Age : String
});

RunnerSchema.plugin(autoIncrement.plugin, {
    model: 'Runners',
    field: 'bib',
    startAt: 1000,
    incrementBy: 1
});


var Runners=db.mongoose.model('ListofRunners', RunnerSchema);

//nextcount
//identitycounters
//end of nextcount
//end of nextcount
// Exports
module.exports.addPost =addPost;
// Add runner to database
function addPost(Runner, Age, callback) {
	var instance = new Runners();
	instance.Runner=Runner;
	instance.Age=Age; 
	instance.save(function (err) {
		if (err) {
			callback(err);
		}
		else {
			callback(null, instance);
		}
	});
}