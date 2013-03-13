
//lengths
var GAME_AREA_HEIGHT = 640;
var GAME_AREA_WIDTH = 400;
var BLOCK_MEDIAN = 20;
var BLOCK_WIDTH = BLOCK_MEDIAN * 2;
var NUM_COLUMNS = GAME_AREA_WIDTH / BLOCK_WIDTH;
var NUM_ROWS = GAME_AREA_HEIGHT / BLOCK_WIDTH;
var LINE_WIDTH = 1;

//colors
var BLUE 	= '#003DF5';
var GREEN	= '#33FF66';
var RED 	= '#FF3366';
var YELLOW 	= '#CCFF29';
var ORANGE 	= '#FFCC33';
var CYAN 	= '#33FFCC';
var PURPLE 	= '#CC33FF';
var PINK 	= '#FF33FF';
var BROWN	= '#B88A00';
var WHITE	= '#FFFFFF';
var BLACK	= '#000000';

var square1 = new Square(20, 20, BLUE);
var square2 = new Square(60, 20, RED);
var oblock	= new OBlock(240,40);
var tblock	= new TBlock(100,60);
var iblock	= new IBlock(100,60);

function loadGame(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');

	square1.draw();
	square2.draw();
	oblock.draw();
	tblock.draw();
	iblock.draw();

	function loop()
	{
		square1.clear();
		square1.y = square1.y + BLOCK_WIDTH;
		square1.draw();
	}
	
	setInterval(loop, 1000);
}

/*
	Square
*/
function Square(x, y, color) {
	this.x = x;
	this.y = y;
	this.color = color;
}

Square.prototype.moveUp = function() {
	this.y = this.y - BLOCK_WIDTH;
}

Square.prototype.moveDown = function() {
	this.y = this.y + BLOCK_WIDTH;
}

Square.prototype.moveLeft = function() {
	this.x = this.x - BLOCK_WIDTH;
}

Square.prototype.moveRight = function() {
	this.x = this.x + BLOCK_WIDTH;
}

Square.prototype.clear = function() {
	canvas.clearRect(this.x-BLOCK_MEDIAN,this.y-BLOCK_MEDIAN, BLOCK_WIDTH, BLOCK_WIDTH);
}

Square.prototype.draw = function() {
	canvas.fillStyle = this.color;
	canvas.strokeStyle = BLACK;
	canvas.lineWidth = LINE_WIDTH;
	
	//canvas.strokeRect(this.x-BLOCK_MEDIAN,this.y-BLOCK_MEDIAN, BLOCK_WIDTH, BLOCK_WIDTH);
	canvas.fillRect(this.x-BLOCK_MEDIAN,this.y-BLOCK_MEDIAN, BLOCK_WIDTH, BLOCK_WIDTH);
}

/*
	Block
*/
function Block(centerX, centerY) {
	this.centerX = centerX;
	this.centerY = centerY;
}

Block.prototype.moveUp = function(squares) {
	for(var i=0; i<squares.length; i++) {
		squares[i].moveUp();
	};
}

Block.prototype.moveDown = function(squares) {
	for(var i=0; i<squares.length; i++) {
		squares[i].moveDown();
	};
}

Block.prototype.moveLeft = function(squares) {
	for(var i=0; i<squares.length; i++) {
		squares[i].moveLeft();
	};
}

Block.prototype.moveRight = function(squares) {
	for(var i=0; i<squares.length; i++) {
		squares[i].moveRight();
	};
}

Block.prototype.clear = function(squares) {
	for(var i=0; i<squares.length; i++) {
		squares[i].clear();
	};
}

Block.prototype.draw = function(squares) {
	for(var i=0; i<squares.length; i++) {
		squares[i].draw();
	};
}

/*
	OBlock Type
*/
function OBlock(centerX, centerY) {
	Block.call(this, centerX, centerY);
	
	var squares = new Array();
	squares.push( new Square(centerX-BLOCK_MEDIAN, centerY-BLOCK_MEDIAN, WHITE) );
	squares.push( new Square(centerX+BLOCK_MEDIAN, centerY-BLOCK_MEDIAN, WHITE) );
	squares.push( new Square(centerX-BLOCK_MEDIAN, centerY+BLOCK_MEDIAN, WHITE) );
	squares.push( new Square(centerX+BLOCK_MEDIAN, centerY+BLOCK_MEDIAN, WHITE) );
	
	this.squares = squares;
	
	this.moveUp = function() {
		Block.prototype.moveUp(squares);
	}
	
	this.moveDown = function() {
		Block.prototype.moveDown(squares);
	}
	
	this.moveLeft = function() {
		Block.prototype.moveLeft(squares);
	}
	
	this.moveRight = function() {
		Block.prototype.moveRight(squares);
	}
	
	this.draw = function() {
		Block.prototype.draw(squares);
	}
	
	this.clear = function() {
		Block.prototype.clear(squares);
	}
}

OBlock.prototype = new Block();
OBlock.prototype.constructor = OBlock;

/*
	TBlock Type
*/
function TBlock(centerX, centerY) {
	Block.call(this, centerX, centerY);
	
	var squares = new Array();
	squares.push( new Square(centerX, centerY-2*BLOCK_MEDIAN, BLUE) );
	squares.push( new Square(centerX, centerY, BLUE) );
	squares.push( new Square(centerX-2*BLOCK_MEDIAN, centerY, BLUE) );
	squares.push( new Square(centerX+2*BLOCK_MEDIAN, centerY, BLUE) );
	
	this.squares = squares;
	
	this.moveUp = function() {
		Block.prototype.moveUp(squares);
	}
	
	this.moveDown = function() {
		Block.prototype.moveDown(squares);
	}
	
	this.moveLeft = function() {
		Block.prototype.moveLeft(squares);
	}
	
	this.moveRight = function() {
		Block.prototype.moveRight(squares);
	}
	
	this.draw = function() {
		Block.prototype.draw(squares);
	}
	
	this.clear = function() {
		Block.prototype.clear(squares);
	}
}

TBlock.prototype = new Block();
TBlock.prototype.constructor = TBlock;

/*
	IBlock Type
*/
function IBlock(centerX, centerY) {
	Block.call(this, centerX, centerY);
	
	var squares = new Array();
	squares.push( new Square(centerX, centerY, CYAN) );
	squares.push( new Square(centerX, centerY-2*BLOCK_MEDIAN, CYAN) );
	squares.push( new Square(centerX, centerY+2*BLOCK_MEDIAN, CYAN) );
	squares.push( new Square(centerX, centerY+4*BLOCK_MEDIAN, CYAN) );
	
	this.squares = squares;
	
	this.moveUp = function() {
		Block.prototype.moveUp(squares);
	}
	
	this.moveDown = function() {
		Block.prototype.moveDown(squares);
	}
	
	this.moveLeft = function() {
		Block.prototype.moveLeft(squares);
	}
	
	this.moveRight = function() {
		Block.prototype.moveRight(squares);
	}
	
	this.draw = function() {
		Block.prototype.draw(squares);
	}
	
	this.clear = function() {
		Block.prototype.clear(squares);
	}
}

IBlock.prototype = new Block();
IBlock.prototype.constructor = IBlock;

/*
	Event Handlers
*/
function keyDown() {
	switch (event.keyCode) {
		case 37:
			square2.clear();
			square2.moveLeft();
			square2.draw();
			
			block1.clear();
			block1.moveLeft();
			block1.draw();
		break;
	
		case 38:
			square2.clear();
			square2.moveUp();
			square2.draw();
			
			block1.clear();
			block1.moveUp();
			block1.draw();
		break;
		
		case 39:
			square2.clear();
			square2.moveRight();
			square2.draw();
			
			block1.clear();
			block1.moveRight();
			block1.draw();
		break;
	
		case 40:
			square2.clear();
			square2.moveDown();
			square2.draw();
			
			block1.clear();
			block1.moveDown();
			block1.draw();
		break;
	}
}

window.addEventListener("load", loadGame, false);
window.addEventListener('keydown', keyDown, false);