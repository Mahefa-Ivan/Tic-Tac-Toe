import BoardComponent from "./components/game/BoardComponent/BoardComponent";
import FooterComponent from "./components/ui/FooterComponent/FooterComponent";
import { useState } from "react";
import { useEffect } from "react";
import {
  checkColumns,
  checkLeftDiagonal,
  checkRows,
  checkRightDiagonal,
} from "./utils/boardChecking";

function App() {
  const default_board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  const default_score = {
    o: 0,
    x: 0,
    draw: 0,
  };

  const [board, setBoard] = useState(default_board);
  const [score, setScore] = useState(default_score);

  const [turnIndex, setturnIndex] = useState(1);

  const boardIsFull = () => {
    let counter = 0;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] !== " ") {
          counter += 1;
        }
      }
    }
    return counter === board.length * board.length;
  };

  const gameIsOver = () => {
    return (
      checkRows(board) ||
      checkColumns(board) ||
      checkLeftDiagonal(board) ||
      checkRightDiagonal(board)
    );
  };

  const handleScoring = () => {
    const clone = { ...score };
    if (boardIsFull()) {
      clone.draw += 1;
      setScore(clone);
    }
    if (gameIsOver() && turnIndex % 2) {
      clone.x += 1;
      setScore(clone);
    }
    if (gameIsOver() && !(turnIndex % 2)) {
      clone.o += 1;
      setScore(clone);
    }
  };

  useEffect(() => {
    handleScoring();
    console.log("App rerendered");
  }, [board]); // DO NOT LISTEN TO THE WARNING, if you do add handleScoring as a dependecy it will loop forever

  const getMark = () => {
    if (turnIndex % 2) {
      setturnIndex(turnIndex + 1);
      return "O";
    }
    setturnIndex(turnIndex + 1);
    return "X";
  };

  const handleResetBoard = () => {
    setBoard(default_board);
    setturnIndex(1);
  };

  const handleSquareClicked = (positionX, positionY) => {
    if (boardIsFull()) {
      const clone = { ...score };
      clone.draw += 1;
      setScore(clone);
      console.log(clone);
    }
    if (gameIsOver()) {
      return false;
    }
    if (board[positionX][positionY] !== " ") {
      return false;
    }

    const boardClone = [...board];

    boardClone[positionX][positionY] = getMark();
    setBoard(boardClone);

    return true;
  };

  return (
    <div className="container">
      <div className="wrapper">
        <BoardComponent board={board} onSquareClicked={handleSquareClicked} />
        <FooterComponent buttonOnClick={handleResetBoard} score={score} />
      </div>
    </div>
  );
}

export default App;
