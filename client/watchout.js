// var BadGuys = function(){
// 	this.name = name,
// 	this.x = left,
// 	this.y = top
// };
// BadGuys.prototype.move(){ }
// var badGuys = new Array(30).map(function(e,i){ 
// 	return { name: i } 
// });


// IIFE: Wrap entire thing? 
// (function(){  })

var badGuys = [];
for(var i=1; i<=30; i++){
	var badGuysObj ={ name: i } 
	badGuys.push(badGuysObj)
}	

var width = 1920;
var height = 1080;
var svg = d3.select("body").append("svg")
		.attr("width", width)
		.attr("height", height)
		.style("background-color", "black")
		// .append("g")
		// .attr("transform", "translate(" + 960 + "," + 500 + ")" );

function update(zz){
	var enemies = svg.selectAll("ellipse") 			
		.data(zz)
		.attr("class", "bad1")
		.enter().append("ellipse") 					
		.attr({ rx:15, ry:8, fill:"#330" })
		.attr("cx", function(d,i){ return 0.9*Math.floor(Math.random()*width); })
		.attr("cy", function(d,i){ return 0.9*Math.floor(Math.random()*height); })





// transitions

}
update(badGuys);





