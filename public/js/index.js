console.log("Hello World!");

class Placement {
  constructor() {
    this.wasHit = false;
    this.hasShip = false;
  }
}

// Nested Arrays
// An array of array values

let totalShips = Math.floor(Math.random() * 5) + 1; // 1-5
let boardSize = 5; // 5 X 5
let score = 0;

let generatedShips = 0;

let board = generateBoard(boardSize, totalShips);

// Battle Ship Game

do {
  let hit = prompt(
    "Choose where to fire:\nFormat is Letter (A-E), Number (1-5)\nEx: 'D4'"
  );
  let row = hit[0].charCodeAt(0) - 65; // "D"
  let col = hit[1] - 1; // "4"
  if (row < 0 || row > 4 || col < 0 || col > 4) {
    alert(
      "Invalid Hit Placement\nFormat is Letter (A-E), Number (1-5)\nEx: 'D4'"
    );
  } else {
    score++;
    board[row][col].wasHit = true;
    if (board[row][col].hasShip) {
      totalShips--;
      alert("You scored a hit!");
    } else {
      alert("Miss!");
    }
  }
} while (totalShips);

alert("You won with a score of " + score);

function generateBoard(boardSize, totalShips) {
  let newBoard = [];
  for (let i = 0; i < boardSize; i++) {
    let row = [];
    for (let o = 0; o < boardSize; o++) {
      let hasShip = Math.round(Math.random()); // 0 or 1, false or true
      let placement = new Placement();
      if (hasShip && generatedShips < totalShips) {
        generatedShips++;
        placement.hasShip = true;
      }
      row.push(placement);
    }
    newBoard.push(row);
  }

  return newBoard;
}
