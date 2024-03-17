/*\
title: $:/plugins/bj/tcmaths/numeric.js
tags: $:/tags/tiddlyclipparser
type: application/javascript
module-type: library
\*/

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";


function copyMath(table) {
	var newMath = {
			Constants: {},
			Functions: {},
			Variables: table
	};

	// Get all properties of the Math object
	var mathProperties = Object.getOwnPropertyNames(Math);

	for (let i = 0; i < mathProperties.length; i++) {
		if (typeof Math[mathProperties[i]]=== 'function') {
			newMath.Functions[mathProperties[i]] = Math[mathProperties[i]];
		}
		else newMath.Constants[mathProperties[i]] = Math[mathProperties[i]];
	};
    return newMath;

}
var TapDigit;
if($tw.browser) {
	TapDigit=require("$:/plugins/bj/tcmaths/TapDigit.js").TapDigit;
}

var doNumeric = function(expr,table) {
console.log(expr + "expr")
var evaluator = new TapDigit.Evaluator(copyMath(table));
console.log( evaluator.evaluate(expr) + " expr")
return evaluator.evaluate(expr).toString();
}

exports.run = doNumeric;
exports.symbol = '#';

