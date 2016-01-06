var Profile = require("./profile.js");
var renderer = require("./renderer.js");


function home(request, response){
	if (request.url === "/") {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		renderer.view("header", {}, response);
		renderer.view("search", {}, response);
		renderer.view("footer", {}, response);
	}
}

function user(request, response) {
	var user = request.url.replace("/", "");
	if (username.length > 0) {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		renderer.view("header", {}, response);
		
		//get json from treehouse
		var studentProfile = new Profile(username);

		studentProfile.on("end", function(profileJSON){
			//show profile
			//store the values which we need
			var values = {
				avatarUrl: profileJSON.gravatar_url,
				username: profileJSON.profile_name,
				badgecount: profileJSON.badges.length,
				javascriptpoints: profileJSON.points.JavaScript
			}
			//simple response
			renderer.view("profile", values, response);
			renderer.view("footer", {}, response);
		});

			//on error
		studentProfile.on("error", function(error) {
			//show error
			renderer.view("error", {errorMessage: error.message}, response);
			renderer.view("search", {}, response);
			renderer.view("footer", {}, response);
		});
	}
}

module.exports.home = home;
module.exports.user = user;