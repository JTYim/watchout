// Board
  var width = window.innerWidth;
  var height = window.innerHeight;
  var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background-color", "black")
    .append("g")  

// Player
  var goodGuy=[{ 
    name: 0, 
    x: width*0.75, 
    y: height*0.75 
  }];
  var me = svg.selectAll("circle")
    .data(goodGuy)
  me.enter().append("circle")
    .attr({r:20, fill:"#350"})
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; })
    .attr("class","good")
    // me.exit().remove();

// Enemies
  var badGuys = [d3.range(10)];
  var enemies;
    enemies = svg.selectAll("ellipse")
      .data(d3.range(10))         
    enemies.enter().append("ellipse") 
      .attr({ rx:15, ry:8, fill:"red" })
      .attr("cx", 50)
      .attr("cy", 50)
      .attr("class", "bad1")
    // enemies.exit().remove();


// Movement
  var moveGoodGuy = d3.behavior.drag().on('drag', function(){ 
    me.attr('cx', d3.event.x);
    me.attr('cy', d3.event.y);
  })
  me.call(moveGoodGuy)  

  var speed=3000;
  d3.select(".difficulty").on("input", function() {
    speed = 3000 - this.value;
    if(this.value >= 1300){
      enemies.attr({rx:35})
      moveBadGuys();
    }
  });

  var moveBadGuys = function() {
    enemies.transition().duration(speed)
      .attr("cx", function(d){ return 0.9*Math.floor(Math.random()*width); })
      .attr("cy", function(d){ return 0.9*Math.floor(Math.random()*height); })
      .each('end', function(){
        moveBadGuys();
      })
  };
  moveBadGuys();

// ScoreBoard
  var score=0, highScore=0, collisionCount=0;
  var updateScore = function(){
    d3.select( '.scoreboard .current span' ).text( score );
    d3.select( '.scoreboard .highscore span' ).text( highScore );
    d3.select( '.scoreboard .collisions span' ).text( collisionCount );
  };
  var scoreTicker = function(){
    score = score+1;
    highScore = Math.max( score, highScore );
    updateScore();
  };
  setInterval(scoreTicker, 100);

  var prevCollision = false;
  var detectCollisions = function(){
    var collision = false;
    
    enemies.each(function(){
      var cx =  d3.select(this).attr("cx") + d3.select(this).attr("rx")*2;
      var cy =  d3.select(this).attr("cy") + d3.select(this).attr("ry")*2;
      var x = cx - me.x;
      var y = cy - me.y;
      if( Math.sqrt(x*x + y*y) < 15 ){
        collision = true;
      }
    });

    if(collision){
      score = 0;
      if( prevCollision != collision ){
        collisionCount = collisionCount+1;
      }
    }

    prevCollision = collision;
  };
  d3.timer(detectCollisions);
  









