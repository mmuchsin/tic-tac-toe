import { useState } from "react";

/**
 * Defines the initial state of the game board,
 * with all squares set to null.
 */
const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

/**
 * Renders a tic-tac-toe game board with clickable squares to place moves.
 *
 * @param {Function} onSelectSquare - Callback when a square is clicked
 * @param {string} activePlayerSymbol - 'X' or 'O' for the current player
 */
export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialBoard);

  function handleGameBoardClik(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      // deepcopy agar ketika newGameBoard diubah prevGameBoard tidak ikut berubah
      const newGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
      return newGameBoard;
    });
    onSelectSquare();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleGameBoardClik(rowIndex, colIndex)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
