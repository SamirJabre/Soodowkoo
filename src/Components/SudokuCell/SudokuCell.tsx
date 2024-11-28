// src/components/SudokuCell.tsx
import React from 'react';

interface SudokuCellProps {
  value: number;
  onChange: (value: number) => void;
}

const SudokuCell: React.FC<SudokuCellProps> = ({ value, onChange }) => {
  return (
    <input
      type="number"
      min="1"
      max="9"
      value={value || ''}
      onChange={(e) => onChange(Number(e.target.value))}
      className="sudoku-cell"
    />
  );
};

export default SudokuCell;