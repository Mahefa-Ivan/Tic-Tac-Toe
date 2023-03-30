const checkRow = (index, board) => {
  return (
    board[index].join("") === "X".repeat(board.length) ||
    board[index].join("") === "O".repeat(board.length)
  );
};

export const checkRows = (board) => {
  for (let i = 0; i < board.length; i++) {
    if (checkRow(i, board)) {
      return true;
    }
  }
  return false;
};

export const checkLeftDiagonal = (board) => {
  let diagonal = "";
  for (let i = 0; i < board.length; i++) {
    diagonal += board[i][i];
  }
  return (
    diagonal === "X".repeat(board.length) ||
    diagonal === "O".repeat(board.length)
  );
};

export const checkRightDiagonal = (board) => {
  let diagonal = "";
  diagonal += board[2][0] + board[1][1] + board[0][2];
  return (
    diagonal === "X".repeat(board.length) ||
    diagonal === "O".repeat(board.length)
  );
};

const checkColumn = (index, board) => {
  let column = "";
  for (let i = 0; i < board.length; i++) {
    column += board[i][index];
  }
  return (
    column === "X".repeat(board.length) || column === "O".repeat(board.length)
  );
};

export const checkColumns = (board) => {
  for (let i = 0; i < board.length; i++) {
    if (checkColumn(i, board)) {
      return true;
    }
  }
  return false;
};
