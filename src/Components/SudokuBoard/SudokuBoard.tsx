// src/components/SudokuBoard.tsx
import React, { useState } from 'react';
import SudokuCell from '../SudokuCell/SudokuCell';

const SudokuBoard: React.FC = () => {
  const [board, setBoard] = useState<number[][]>(Array(9).fill(Array(9).fill(0)));

  const handleCellChange = (row: number, col: number, value: number) => {
    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) => (rowIndex === row && colIndex === col ? value : cell))
    );
    setBoard(newBoard);
  };

  return (
    <div className="sudoku-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => (
            <SudokuCell
              key={colIndex}
              value={cell}
              onChange={(value) => handleCellChange(rowIndex, colIndex, value)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuBoard;