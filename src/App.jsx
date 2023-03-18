import BoardComponent from "./components/game/BoardComponent/BoardComponent";
import { useState } from "react";

function App() {
  /* const size4 = [
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", " "],
  ]; */

  const size3 = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  const [board, setBoard] = useState(size3);

  const [turnIndicator, setTurnIndicator] = useState(1);

  const getMark = () => {
    if (turnIndicator % 2) {
      setTurnIndicator(turnIndicator + 1);
      return "O";
    }
    setTurnIndicator(turnIndicator + 1);
    return "X";
  };

  const handleResetBoard = () => {
    setBoard(size3);
    setTurnIndicator(1);
  };

  const checkRow = (index) => {
    return (
      board[index].join("") === "X".repeat(board.length) ||
      board[index].join("") === "O".repeat(board.length)
    );
  };

  const checkRows = () => {
    for (let i = 0; i < board.length; i++) {
      if (checkRow(i)) {
        return true;
      }
    }
    return false;
  };

  const checkLeftDiagonal = () => {
    let diagonal = "";
    for (let i = 0; i < board.length; i++) {
      diagonal += board[i][i];
    }
    return (
      diagonal === "X".repeat(board.length) ||
      diagonal === "O".repeat(board.length)
    );
  };

  const checkRightDiagonal = () => {
    // TODO: stop being lazy and implement it the correct way already
    let diagonal = "";
    diagonal += board[2][0] + board[1][1] + board[0][2];
    return (
      diagonal === "X".repeat(board.length) ||
      diagonal === "O".repeat(board.length)
    );
  };

  const checkColumn = (index) => {
    let column = "";
    for (let i = 0; i < board.length; i++) {
      column += board[i][index];
    }
    return (
      column === "X".repeat(board.length) || column === "O".repeat(board.length)
    );
  };

  const checkColumns = () => {
    for (let i = 0; i < board.length; i++) {
      if (checkColumn(i)) {
        return true;
      }
    }
    return false;
  };

  const boardIsFull = () => {
    let counter = 0;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] !== " ") {
          counter += 1;
        }
      }
    }
    console.log(counter);
    return counter === board.length * board.length;
  };

  const gameIsOver = () => {
    return (
      checkRows() ||
      checkColumns() ||
      checkLeftDiagonal() ||
      checkRightDiagonal()
    );
  };

  const handleSquareClicked = (positionX, positionY) => {
    if (gameIsOver()) {
      return turnIndicator % 2 ? "O" : "X";
    }

    if (board[positionX][positionY] !== " ") {
      return false;
    }

    const boardClone = board;

    boardClone[positionX][positionY] = getMark();
    setBoard(boardClone);
    return true;
  };

  const getHeaderText = () => {
    if (gameIsOver()) {
      let a = turnIndicator % 2 ? "X" : "O";
      return `${a} won`;
    }
    if (boardIsFull()) {
      return "Draw";
    }
    return "Tic-Tac-Toe";
  };

  return (
    <div className="container">
      <h2>{getHeaderText()}</h2>
      <BoardComponent board={board} onSquareCliked={handleSquareClicked} />
      <button onClick={handleResetBoard}>New game</button>
    </div>
  );
}

export default App;
