import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialBoard);

  function handleGameBoardClik(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      // deepcopy agar ketika newGameBoard diubah prevGameBoard tidak ikut berubah
      const newGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      newGameBoard[rowIndex][colIndex] =  activePlayerSymbol;
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
