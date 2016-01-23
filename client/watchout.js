// start slingin' some d3 here.

// var BadGuys = function(){
// 	this.name: name
// })



var width = 960;
var height = 500;

var svg = d3.select("body").append("svg")
		.attr("width", width)
		.attr("height", height)
		// .attr("fill", backgrd)
svg.append("ellipse")
	.attr({ cx:33, cy:33, rx:15, ry:8, fill:"#333" });


