// Problem Statement: Please queens on a board such that they dont attack each other

// For a N x N board, where N=4

// Say a empty chess board looks like this.
// 0  0  0  0 
// 0  0  0  0 
// 0  0  0  0  
// 0  0  0  0  

// INPUT: value of N
// 4

// OUTPUT: all possible combinations
// 0  1  0  0 
// 0  0  0  1 
// 1  0  0  0 
// 0  0  1  0 

// 0  0  1  0 
// 1  0  0  0 
// 0  0  0  1 
// 0  1  0  0 


const queensMove = (boardLength, queen, obstructions) => {
    let counter = 0;
    const x = queen[0];
    const y = queen[1];
  
    function isObstacle(row, col) {
      for (let o of obstructions) {
        if (o[0] === row && o[1] === col) {
          console.log(o[0] + ',' + o[1]);
          return true;
        }
      }
    }
  
    function checkUp(row, col) {
      if (row >= 0) {
        console.log(row);
        if (isObstacle(row,col)) {
          return;
        } else {
          counter++;
          checkUp(row-1,col);
        }
      }
    }
  
    function checkDown(row, col) {
      if (row < boardLength-1) {
        if (isObstacle(row,col)) {
          return;
        } else {
          counter++;
          checkDown(row+1,col);
        }
      }
    }
  
    function checkLeft(row, col) {
      if (col >= 0) {
        if (isObstacle(row,col)) {
          return;
        } else {
          counter++;
          checkLeft(row,col-1);
        }
      }
    }
  
    function checkRight(row, col) {
      if (col < boardLength-1) {
        if (isObstacle(row,col)) {
          return;
        } else {
          counter++;
          checkRight(row,col+1);
        }
      }
    }
  
    function checkUpLeft(row, col) {
      if (row >= 0 && col >= 0) {
        if (isObstacle(row,col)) {
          return;
        } else {
          counter++;
          checkUpLeft(row-1,col-1);
        }
      }
    }
  
    function checkUpRight(row, col) {
      if (row >= 0 && col < boardLength-1) {
        if (isObstacle(row,col)) {
          return;
        } else {
          counter++;
          checkUpRight(row-1,col+1);
        }
      }
    }
  
    function checkDownRight(row, col) {
      if (row < boardLength-1 && col < boardLength-1) {
        if (isObstacle(row,col)) {
          return;
        } else {
          counter++;
          checkDownRight(row+1,col+1);
        }
      }
    }
  
    function checkDownLeft(row, col) {
      if (row < boardLength-1 && col >= 0) {
        if (isObstacle(row,col)) {
          return;
        } else {
          counter++;
          checkDownRight(row+1,col-1);
        }
      }
    }
  
    checkUp(x-1,y);
    checkUp(x+1,y);
    checkLeft(x,y-1);
    checkRight(x,y+1);
    checkUpLeft(x-1,y-1);
    checkUpRight(x-1,y+1);
    checkDownRight(x+1,y+1);
    checkDownLeft(x+1,y-1);
  
  
    return counter;
  };
  
  queensMove(8, [4,5], [[2,3], [7,4]]);