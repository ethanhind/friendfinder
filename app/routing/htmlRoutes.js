var path = require("path");

module.exports = function (app) {

	console.log('This is from htmlRoutes.js module.exports');

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});


	app.use((req, res)=>{
		res.sendFile(path.oin(__dirname + "/../public/home.html"));
	}); 

} 