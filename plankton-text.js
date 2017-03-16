'use strict';


window.plankton = window.plankton || {};
window.plankton.text = {};


window.plankton.text.capitalize = function (string) {
	return string.replace(/(?:^|\s)\S/g, function (a) { 
		return a.toUpperCase(); 
	});
};

window.plankton.text.camelize = function (string) {
	return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
    	return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  	}).replace(/\s+/g, '');	
};

window.plankton.text.ucwords = function (string) {
	string = string.toLowerCase();
	
	return string.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function ($1) {
        return $1.toUpperCase();
    });
};

    