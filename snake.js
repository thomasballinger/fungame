onload = init();

function init(){
  var s = newSnake()
	draw(s);
}

function draw(points){
	var board = document.getElementById('board');
  board.innerHTML = ''; // clears out elements from last render
	for (var i = 0; i<10; i++){
	    var row = document.createElement('div');
	    row.classList.add('row');
	    board.appendChild(row);
	    for (var j = 0; j<10; j++){
	        var tile = document.createElement('div');
	        tile.classList.add('tile');
	        row.appendChild(tile);
          if (containsPoint(points, {x: j, y: i})){
            tile.classList.add('snake');
          }
	        console.log('create tile');
	    }
	}
}

function containsPoint(points, point){
  for (var i=0; i<points.length; i++){
    if (point.x === points[i].x && point.y === points[i].y){
      return true;
    }
  }
  return false;
}

// Make a new snake... maybe?
function newSnake(){
  var length = 5;
  snake = [];
  for (var i = 0; i < length; i++){
    snake.push({x:i, y:0});
  }
  return snake;
}