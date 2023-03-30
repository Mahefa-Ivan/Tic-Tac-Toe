import "./BoardComponent.css";
import { BsCircle } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";

export default function BoardComponent({ board, onSquareClicked }) {
  const getSquareClassName = (x, y) => {
    let className = "";
    if (x === 0) {
      className += " top-row ";
    }
    if (x === 2) {
      className += " bottom-row ";
    }
    if (y === 0) {
      className += " side-left ";
    }
    if (y === 2) {
      className += " side-right ";
    }
    return className;
  };

  const renderBoard = () => {
    return board.map((row, xIndex) => {
      return row.map((square, yIndex) => {
        return (
          <div
            className={`square ${getSquareClassName(xIndex, yIndex)}`}
            key={yIndex}
            onClick={() => {
              onSquareClicked(xIndex, yIndex);
            }}
          >
            {square === "O" ? (
              <BsCircle />
            ) : square === " " ? (
              " "
            ) : (
              <TfiClose />
            )}
          </div>
        );
      });
    });
  };

  return <div className={`board size-${board[0].length}`}>{renderBoard()}</div>;
}
