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

var goodGuy=[{ 
	name: 0, 
	x:500, 
	y:500 
}];
var badGuys = [];
for(var i=1; i<=10; i++){
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

function update(zz, yy){
	var enemies = svg.selectAll("ellipse") 			
		.data(zz)
			.attr("class", "bad1")
		.enter().append("ellipse") 					
			.attr({ rx:15, ry:8, fill:"#320" })
			.attr("cx", 50)
			.attr("cy", 50);
		// enemies.attr("x", function(d, i) { return 100; })
		// enemies.exit().remove();

	var drag = d3.behavior.drag().on('drag', function(){ 
             	me.attr('cx', d3.event.x)
			me.attr('cy', d3.event.y); 
		})
	var me = svg.selectAll("circle")
		.data(yy)
	me.attr("class","good")
	me.enter().append("circle")
			.attr({r:20, fill:"#350"})
			.attr('cx', function(d) { return d.x; })
			.attr('cy', function(d) { return d.y; })
			.call(drag)
}

update(badGuys, goodGuy);
setInterval(function() {
	update(d3.selectAll("ellipse").transition().duration(2000)
		.attr("cx", function(d){ return 0.9*Math.floor(Math.random()*width); })
		.attr("cy", function(d){ return 0.9*Math.floor(Math.random()*height); }))
}, 1000);




