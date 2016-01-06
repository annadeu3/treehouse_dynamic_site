var fs = require('fs');

 view(templateName, values, response) {
	//read from the template files
	//insert values into the content
	//write out to the response
	var fileContents = fs.readFileSync('./views/' + templateName + '.html');
		response.write(fileContents);
}

module.exports.view = view;