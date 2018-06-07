var friends = require("../data/friends.js");

module.exports = function (app) {

	console.log('This is from apiRoutes.js module.exports');

	
	app.get("/api/friends", (req, res)=>{
		res.json(friends);
	}); 

	app.post("/api/friends", function(req, res) {

		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		
		var userData 	= req.body;
		var userScores	= userData.scores;

		console.log('userscores', req.body);

		
		var totalDifference = 0;

		
		for (var i = 0; i < friends.length; i++) {

			console.log(friends[i]);
		

			for (var j = 0; j < friends[i].scores[j]; j++) {

				
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
				

				console.log('totalDifference = ' + totalDifference);

				

				if (totalDifference <= bestMatch.friendDifference) {

						
						bestMatch.name				= friends[i].name;
						bestMatch.photo				= friends[i].photo;
						bestMatch.friendDifference	= totalDifference;
				} 
			} 
		} 


		friends.push(userData);

		
		res.json(bestMatch);
	});
	
	
} 
