// Conway Object Constructor
//
// Creates new Conway's GoL object.
// Caller should specify number of cells per side
// and cell width -- but also needs to adjust canvas
// size accordingly.
// Game controller
function Conway(cellsPerSide, cellWidth) {
  var conway = this;

  conway.stage = null;
  conway.alive = 1;
  conway.dead = 0;

  // Always a square
  conway.width = conway.height = cellsPerSide;
  conway.cellWidth = cellWidth;
  
  conway.generation = 0;

  //************
  //** Methods
  //************

  // Pre-made formations
  // Generate a completely empty (dead) 2D array 
  conway.newEmptyArray = function () {
    var i, j;
    var cells = [];
    // empty array for each cell column (loops right through x-axis)
    for (i = 0; i < conway.width; i++) {
      cells[i] = [];
      // set each cell to dead (loops down through y-axis)
      for (j = 0; j < conway.height; j++) {
        cells[i][j] = conway.dead;
      }
    }
    conway.generation = 0;
    conway.updateGenerationDisplay();
    return cells;
  }; // conway.newEmptyArray()

  // Generate Gosper Glider Gun formation
  conway.newGosperGliderGun = function () {
    var gliderCells = conway.newEmptyArray();
    gliderCells[2][5] = conway.alive;
    gliderCells[2][6] = conway.alive;
    gliderCells[3][5] = conway.alive;
    gliderCells[3][6] = conway.alive;
    gliderCells[12][5] = conway.alive;
    gliderCells[12][6] = conway.alive;
    gliderCells[12][7] = conway.alive;
    gliderCells[13][4] = conway.alive;
    gliderCells[13][8] = conway.alive;
    gliderCells[14][3] = conway.alive;
    gliderCells[14][9] = conway.alive;
    gliderCells[15][3] = conway.alive;
    gliderCells[15][9] = conway.alive;
    gliderCells[16][6] = conway.alive;
    gliderCells[17][4] = conway.alive;
    gliderCells[17][8] = conway.alive;
    gliderCells[18][5] = conway.alive;
    gliderCells[18][6] = conway.alive;
    gliderCells[18][7] = conway.alive;
    gliderCells[19][6] = conway.alive;
    gliderCells[22][3] = conway.alive;
    gliderCells[22][4] = conway.alive;
    gliderCells[22][5] = conway.alive;
    gliderCells[23][3] = conway.alive;
    gliderCells[23][4] = conway.alive;
    gliderCells[23][5] = conway.alive;
    gliderCells[24][2] = conway.alive;
    gliderCells[24][6] = conway.alive;
    gliderCells[26][1] = conway.alive;
    gliderCells[26][2] = conway.alive;
    gliderCells[26][6] = conway.alive;
    gliderCells[26][7] = conway.alive;
    gliderCells[36][3] = conway.alive;
    gliderCells[36][4] = conway.alive;
    gliderCells[37][3] = conway.alive;
    gliderCells[37][4] = conway.alive;
    return gliderCells;
  }; // conway.newGosperGliderGun()

  // Generate Pentadecathlon formation
  conway.newPentadecathlon = function () {
    var pentCells = conway.newEmptyArray();
    pentCells[10][10] = conway.alive;
    pentCells[10][11] = conway.alive;
    pentCells[10][12] = conway.alive;
    pentCells[11][10] = conway.alive;
    pentCells[11][12] = conway.alive;
    pentCells[12][10] = conway.alive;
    pentCells[12][11] = conway.alive;
    pentCells[12][12] = conway.alive;
    pentCells[13][10] = conway.alive;
    pentCells[13][11] = conway.alive;
    pentCells[13][12] = conway.alive;
    pentCells[14][10] = conway.alive;
    pentCells[14][11] = conway.alive;
    pentCells[14][12] = conway.alive;
    pentCells[15][10] = conway.alive;
    pentCells[15][11] = conway.alive;
    pentCells[15][12] = conway.alive;
    pentCells[16][10] = conway.alive;
    pentCells[16][12] = conway.alive;
    pentCells[17][10] = conway.alive;
    pentCells[17][11] = conway.alive;
    pentCells[17][12] = conway.alive;
    return pentCells;
  }; // conway.newPentadecathlon()

  // Generate Kok's Galaxy formation
  conway.newKokGalaxy = function () {
    var kokCells = conway.newEmptyArray();
    kokCells[10][10] = conway.alive;
    kokCells[10][11] = conway.alive;
    kokCells[10][12] = conway.alive;
    kokCells[10][13] = conway.alive;
    kokCells[10][14] = conway.alive;
    kokCells[10][15] = conway.alive;
    kokCells[11][10] = conway.alive;
    kokCells[11][11] = conway.alive;
    kokCells[11][12] = conway.alive;
    kokCells[11][13] = conway.alive;
    kokCells[11][14] = conway.alive;
    kokCells[11][15] = conway.alive;

    kokCells[13][10] = conway.alive;
    kokCells[14][10] = conway.alive;
    kokCells[15][10] = conway.alive;
    kokCells[16][10] = conway.alive;
    kokCells[17][10] = conway.alive;
    kokCells[18][10] = conway.alive;
    kokCells[13][11] = conway.alive;
    kokCells[14][11] = conway.alive;
    kokCells[15][11] = conway.alive;
    kokCells[16][11] = conway.alive;
    kokCells[17][11] = conway.alive;
    kokCells[18][11] = conway.alive;

    kokCells[17][13] = conway.alive;
    kokCells[17][14] = conway.alive;
    kokCells[17][15] = conway.alive;
    kokCells[17][16] = conway.alive;
    kokCells[17][17] = conway.alive;
    kokCells[17][18] = conway.alive;
    kokCells[18][13] = conway.alive;
    kokCells[18][14] = conway.alive;
    kokCells[18][15] = conway.alive;
    kokCells[18][16] = conway.alive;
    kokCells[18][17] = conway.alive;
    kokCells[18][18] = conway.alive;

    kokCells[10][17] = conway.alive;
    kokCells[11][17] = conway.alive;
    kokCells[12][17] = conway.alive;
    kokCells[13][17] = conway.alive;
    kokCells[14][17] = conway.alive;
    kokCells[15][17] = conway.alive;
    kokCells[10][18] = conway.alive;
    kokCells[11][18] = conway.alive;
    kokCells[12][18] = conway.alive;
    kokCells[13][18] = conway.alive;
    kokCells[14][18] = conway.alive;
    kokCells[15][18] = conway.alive;


    return kokCells;
  }; // conway.newKokGalaxy()

  // Generate Khvarenah Bird formation
  conway.newKhvarenah = function () {
    var farrCells = conway.newEmptyArray();
   	farrCells[24][20] = conway.alive;
   	farrCells[26][20] = conway.alive;
   	farrCells[25][21] = conway.alive;
   	farrCells[26][22] = conway.alive;
   	farrCells[25][22] = conway.alive;
   	farrCells[24][23] = conway.alive;
    return farrCells;
  }; // conway.newKhvarenah()

  // Draws grid to screen using easeljs (side effects only)
  //  Draws dead and live cells w/ different colors
  conway.draw = function (cellsArray) {
    conway.stage.removeAllChildren();
    conway.stage.update();
    var i, j;
    var square = [];
    for (i = 0; i < cellsPerSide; i++) {
      for (j = 0; j < cellsPerSide; j++) {
        //  Creates new easeljs square at coordinates
        //   corresponding to current location in array.
        //  Adds child shapes to easeljs stage
        if (cellsArray[i][j] == conway.alive) {
          square.push([]);
          square[i][j] = new createjs.Shape();
          square[i][j].graphics.beginFill('#00ff99')
            .beginStroke("#999999")
            .drawRect(0, 0, conway.cellWidth, conway.cellWidth);
          square[i][j].x = i * conway.cellWidth;
          square[i][j].y = j * conway.cellWidth;
          conway.stage.addChild(square[i][j]);
          // calls toggleCellAt on click
          square[i][j].addEventListener("click", conway.toggleCellAt(i, j, square[i][j]));
        } else {
          square.push([]);
          square[i][j] = new createjs.Shape();
          square[i][j].graphics.beginFill('#666666')
            .beginStroke("#999999")
            .drawRect(0, 0, conway.cellWidth, conway.cellWidth);
          square[i][j].x = i * conway.cellWidth;
          square[i][j].y = j * conway.cellWidth;
          conway.stage.addChild(square[i][j]);
          square[i][j].addEventListener("click", conway.toggleCellAt(cellsArray, i, j, square[i][j]));
        }
      }
    }
    // Updates easeljs stage
    conway.stage.update();
  }; // conway.draw()

  // Toggle cell's life state and color using closures
  //  to save indices of the iterations (side effects only)
  conway.toggleCellAt = function (cellsArray, x, y, square) {
    return function () {
      if (cellsArray[x][y] === conway.alive) {
        // Toggle to dead and black if alive before
        cellsArray[x][y] = conway.dead;
        square.graphics.clear();
        square = new createjs.Shape();
        square.graphics.beginFill('#666666')
          .beginStroke("#999999")
          .drawRect(0, 0, conway.cellWidth, conway.cellWidth);
        square.x = x * conway.cellWidth;
        square.y = y * conway.cellWidth;
        square.addEventListener("click", conway.toggleCellAt(cellsArray, x, y, square));
        conway.stage.addChild(square);
        conway.stage.update();
      } else {
        // Toggle to alive and bright if dead before
        cellsArray[x][y] = conway.alive;
        square.graphics.clear();
        square = new createjs.Shape();
        square.graphics.beginFill('#00ff99')
          .beginStroke("#999999")
          .drawRect(0, 0, conway.cellWidth, conway.cellWidth);
        square.x = x * conway.cellWidth;
        square.y = y * conway.cellWidth;
        square.addEventListener("click", conway.toggleCellAt(cellsArray, x, y, square));
        conway.stage.addChild(square);
        conway.stage.update();
      }
    };
  }; // conway.toggleCellAt()


  // Returns number of live neighbors of cell at x, y
  conway.getNeighborCount = function (cellsArray, x, y) {
    // Start count at 0
    var count = (cellsArray[x][y] === conway.alive) ? -1 : 0;
    // Adds to count if any of the surrounding cells are alive
    // Traverses surrounding squares.
    // [x - 1][y - 1]  [x][y - 1]  [x + 1][y - 1]
    // [x - 1][y]      [x][y]      [x + 1][y]
    // [x - 1][y + 1]  [x][y + 1]  [x + 1][y + 1]
    for (var w = -1; w <= 1; w++) {
      for (var h = -1; h <= 1; h++) {
        if (cellsArray[(conway.width + (x + w)) % conway.width][(conway.height + (y + h)) % conway.height] === conway.alive) {
          count++;
        }
      }
    }
    return count;
  }; // conway.getNeighborCount()

  // Returns 1 if square gets to live, returns 0 if square will die
  conway.createOrDestroy = function (cellsArray, x, y) {
    // Dies if alive && N<2 || N>3
    // if alive
    if (cellsArray[x][y]) {
      // if live neighbors < 2
      if (conway.getNeighborCount(cellsArray, x, y) < 2) {
        return 0;
      }
      // if live neighbors > 3
      if (conway.getNeighborCount(cellsArray, x, y) > 3) {
        return 0;
      } else { // Stay alive
        return 1;
      }
    }
    // if dead and exactly 3 neighbors, regenerate
    if (!cellsArray[x][y] && (conway.getNeighborCount(cellsArray, x, y) === 3)) {
      return 1;
    } else { // Stay dead
      return 0;
    }
  }; // conway.createOrDestroy()

  // Updates conway.cells array
  conway.updateAll = function (cellsArray) {
    var i, j;
    var newCellArray = [];
    // Traverses every square and sets it alive or dead based on GoL rules
    for (i = 0; i < conway.width; i++) {
      newCellArray.push([]);
      for (j = 0; j < conway.height; j++) {
        if (conway.createOrDestroy(cellsArray, i, j)) {
          newCellArray[i][j] = conway.alive;
        } else {
          newCellArray[i][j] = conway.dead;
        }
      }
    }
    conway.generation += 1;
    conway.updateGenerationDisplay();
    return newCellArray;
  }; // conway.updateAll()

  conway.updateGenerationDisplay = function() {
    $('#stats-line').text("Generation: " + conway.generation);
  };

} // Conway

//**************
//** LocalStorage
//**************

// Form localStorage namespace
function ident() {
	var id = this;
	id.host = window.location.host.split('.');
	id.out = "-";
	id.vers = "cnwy0.0.0-"
	if (id.host.length < 2){
		id.out = "localHost"+id.out;
	} else {
		id.out = id.host[0]+id.out;
		for(var i = 1; i < id.host.length; i++){
			id.out = id.host[i]+"."+id.out;
		}
	}
	return id.out+id.vers;
}

function save(cellArray) {
	localStorage.setItem(ident()+"state-start",cellArray.join());
}

function getSaved() {
	return localStorage[ident()+"state-start"];
} 
// LocalStorage

//**************
//** DOM Ready
//**************
$(document).ready(function () {
  // Create new Conway object
  var gameController = new Conway(50, 10);
  // Initialize to all dead cells
  var cells = gameController.newEmptyArray();
  
  // Create stage for easeljs as well as ticker
  gameController.stage = new createjs.Stage("gameController");

  // Draw all empty squares to stage
  gameController.draw(cells);

  // Tick event handler
  function updateAndDraw(event) {
    if (!event.paused) {
      cells = gameController.updateAll(cells);
      gameController.draw(cells);
    }
  }
  
  // Restore State from LocalStorage
  function restore() {
    cells = gameController.newEmptyArray();
    if (getSaved()) { 
      var restore = getSaved().split(',');
      var x = 0, y = 0;
      for (var i = 0; i < restore.length-1; i++) {
      	if (parseInt(restore[i])) {
        	cells[x][y] = gameController.alive;
        }
      	if (y == gameController.width-1) {
      		x++;
      	}
      	if (y < gameController.height-1) {
      		y++;
      	} else {
      		y = 0;
      	}
      }
    }
  }
  
  // Button event listeners

  // Start
  $('#start-button').click(function () {
  	save(cells);
    // Create event ticker, add handleTick() as callback to be called every tick
    createjs.Ticker.addEventListener("tick", updateAndDraw);
    // Unpauses
    createjs.Ticker.paused = false;
    // Interval of 1 Tick/1000ms
    createjs.Ticker.setInterval(250);
  });

  // Pause
  $('#pause-button').click(function () {
    createjs.Ticker.paused = (!createjs.Ticker.paused) ? true : false;
  });

  // Step
  $('#step-button').click(function () {
    // Updates stage and redraws
    cells = gameController.updateAll(cells);
    gameController.draw(cells);
  });

  // Clear
  $('#clear-button').click(function () {
    // Clears stage and redraws. Removes tick event listener
    createjs.Ticker.removeEventListener("tick", updateAndDraw);
    cells = gameController.newEmptyArray();
    gameController.draw(cells);
  });

  // Reset
  $('#reset-button').click(function () {
    // Clears stage and redraws. Removes tick event listener
    createjs.Ticker.removeEventListener("tick", updateAndDraw);
	restore();
    gameController.draw(cells);
  });

  // Gosper Gun
  $('#gosper-gun').click(function () {
    createjs.Ticker.removeEventListener("tick", updateAndDraw);
    cells = gameController.newGosperGliderGun();
    gameController.draw(cells);
  });

  // Pentadecathlon
  $('#pent-osc').click(function () {
    createjs.Ticker.removeEventListener("tick", updateAndDraw);
    cells = gameController.newPentadecathlon();
    gameController.draw(cells);
  });

  // Kok Galaxy
  $('#kok-galaxy').click(function () {
    createjs.Ticker.removeEventListener("tick", updateAndDraw);
    cells = gameController.newKokGalaxy();
    gameController.draw(cells);
  });
  
  // Khvarenah Bird
  $('#khvarenah').click(function () {
    cells = gameController.newKhvarenah();
    gameController.draw(cells);
  });


});
