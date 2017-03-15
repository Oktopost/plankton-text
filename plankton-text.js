'use strict';


window.plankton = window.plankton || {};
window.plankton.text = {};


window.plankton.text.capitalize = function (string) {
	return string.replace(/(?:^|\s)\S/g, function (a) { 
		return a.toUpperCase(); 
	});
};

window.plankton.text.camelize = function (string) {
	return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
    	return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  	}).replace(/\s+/g, '');	
};