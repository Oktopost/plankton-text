'use strict';


var capitalize = function (string) {
	return string.replace(/(?:^|\s)\S/g, function (a) { 
		return a.toUpperCase(); 
	});
};

var camelize = function (string) {
	return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
    	return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  	}).replace(/\s+/g, '');	
};


module.exports = {
	capitalize: capitalize
	camelize: camelize
};