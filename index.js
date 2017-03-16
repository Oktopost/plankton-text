'use strict';


var capitalize = function (string) {
	return string.replace(/(?:^|\s)\S/g, function (a) { 
		return a.toUpperCase(); 
	});
};

var camelize = function (string) {
	return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
    	return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  	}).replace(/\s+/g, '');	
};

var ucwords = function (string) {
	string = string.toLowerCase();
	
	return string.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function ($1) {
        return $1.toUpperCase();
    });
};


module.exports = {
	capitalize: capitalize,
	camelize: camelize,
	ucwords: ucwords
};