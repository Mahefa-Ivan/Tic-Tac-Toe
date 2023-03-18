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

  const handleSquareClicked = (positionX, positionY) => {
    const boardClone = board;
    if (boardClone[positionX][positionY] !== " ") {
      return false;
    }
    boardClone[positionX][positionY] = getMark();
    setBoard(boardClone);
    return true;
  };

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

  return (
    <div className="container">
      <BoardComponent
        dimensions={{ x: 3, y: 3 }}
        board={board}
        onSquareCliked={handleSquareClicked}
      />
      <button onClick={handleResetBoard}>New game</button>
    </div>
  );
}

export default App;
