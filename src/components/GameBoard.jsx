const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {initialBoard.map((row, rowIndex) => {
        return (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => {
              return (
              <li key={colIndex}>
                <button>{col}</button>
              </li>);
            })}
          </ol>
        </li>);
      })}
    </ol>
  );
}
