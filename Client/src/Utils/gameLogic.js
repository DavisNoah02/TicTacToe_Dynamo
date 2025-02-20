export const HUMAN = 'X';
export const COMP = 'O';

export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function emptyCells(squares) {
  const cells = [];
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      cells.push(i);
    }
  }
  return cells;
}

export function minimax(squares, depth, isMaximizing) {
  const winner = calculateWinner(squares);
  if (winner === COMP) return { score: 10 - depth };
  if (winner === HUMAN) return { score: depth - 10 };
  if (emptyCells(squares).length === 0) return { score: 0 };

  if (isMaximizing) {
    let best = { score: -Infinity };
    emptyCells(squares).forEach((index) => {
      squares[index] = COMP;
      const result = minimax(squares, depth + 1, false);
      squares[index] = null;
      result.index = index;
      if (result.score > best.score) {
        best = result;
      }
    });
    return best;
  } else {
    let best = { score: Infinity };
    emptyCells(squares).forEach((index) => {
      squares[index] = HUMAN;
      const result = minimax(squares, depth + 1, true);
      squares[index] = null;
      result.index = index;
      if (result.score < best.score) {
        best = result;
      }
    });
    return best;
  }
}