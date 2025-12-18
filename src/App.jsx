import React, { useState } from 'react';
import './index.css';

const SudokuResolver = () => {
  const [sudoku, setSudoku] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const isSafe = (board, row, col, num) => {
    // Vérifier la ligne
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num && i !== col) {
        return false;
      }
    }

    // Vérifier la colonne
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num && i !== row) {
        return false;
      }
    }

    // Vérifier le carré 3x3
    const boxRow = Math.floor(row / 3);
    const boxCol = Math.floor(col / 3);

    for (let i = boxRow * 3; i < boxRow * 3 + 3; i++) {
      for (let j = boxCol * 3; j < boxCol * 3 + 3; j++) {
        if (board[i][j] === num && (i !== row || j !== col)) {
          return false;
        }
      }
    }

    return true;
  };

  const solveSudoku = (board) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isSafe(board, row, col, num)) {
              board[row][col] = num;

              if (solveSudoku(board)) {
                return true;
              }

              board[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  const handleSolve = () => {
    const board = [...sudoku];
    solveSudoku(board);
    setSudoku(board);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FF69B4]">
      <h1 className="text-4xl font-bold mb-8 text-white">Sudoku Resolver</h1>
      <div className="grid grid-cols-9 gap-1 bg-white p-4 rounded-lg">
        {sudoku.map((row, i) =>
          row.map((cell, j) => (
            <input
              key={`${i}-${j}`}
              type="number"
              min="0"
              max="9"
              value={cell === 0 ? '' : cell}
              onChange={(e) => {
                const newSudoku = [...sudoku];
                newSudoku[i][j] = parseInt(e.target.value) || 0;
                setSudoku(newSudoku);
              }}
              className="w-10 h-10 text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-[#FF69B4]"
            />
          ))
        )}
      </div>
      <button
        onClick={handleSolve}
        className="mt-8 bg-[#FF69B4] hover:bg-[#FF4081] text-white font-bold py-2 px-4 rounded"
      >
        Solve
      </button>
    </div>
  );
};

export default SudokuResolver;