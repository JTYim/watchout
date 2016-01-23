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

	var width = 1920;
	var height = 1080;
	var svg = d3.select("body").append("svg")
		.attr("width", width)
		.attr("height", height)
		.style("background-color", "black")
		// .append("g")
		// .attr("transform", "translate(" + 960 + "," + 500 + ")" );

	var goodGuy=[{ 
		name: 0, 
		x: (width*0.66), 
		y:(height*0.66), 
	}];

	var badGuys = [1,2,3,4,5,6,7,8,9,10];
	// for(var i=1; i<=10; i++){
	// 	badGuysObj ={ name: "name", info: "info" } 
	// 	badGuys.push(badGuysObj)
	// }	

function update(zz, yy){

	var enemies = svg.selectAll("ellipse")
		.data(zz) 				
	var me = svg.selectAll("circle")
		.data(yy)

	enemies.enter().append("ellipse") 
		.attr({ rx:15, ry:8, fill:"red" })
		.attr("cx", 50)
		.attr("cy", 50)
		.attr("class", "bad1")
	me.enter().append("circle")
		.attr({r:20, fill:"#350"})
		.attr('cx', function(d) { return d.x; })
		.attr('cy', function(d) { return d.y; })
		.attr("class","good")

	var move = d3.behavior.drag().on('drag', function(){ 
           	me.attr('cx', d3.event.x);
		me.attr('cy', d3.event.y);
	})
	me.call(move)
	debugger; 			
	enemies.exit().remove();
	enemies.exit().remove();
}

update(badGuys, goodGuy);
setInterval(function() {
	update(d3.selectAll("ellipse").transition().delay(50).duration(1000)
		.attr("cx", function(d){ return 0.9*Math.floor(Math.random()*width); })
		.attr("cy", function(d){ return 0.9*Math.floor(Math.random()*height); }))
}, 1000);

function collide(player, enemy){
	debugger;
	var distance = Math.sqrt( Math.pow(( player.attr("cx") - enemy.attr("cx"), 2) + Math.pow((player.cy-enemy.cy),2)) );	 
	distance < 50 && (console.log("collision"));
};

setTimeout(function(){
	svg.selectAll('ellipse').forEach(function(enemy){
		collide(svg.selectAll('circle'), enemy);
	})
},500)









