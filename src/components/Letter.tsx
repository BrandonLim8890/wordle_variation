import React, { useState } from 'react';
import './Letter.css';

interface Props {
  word: { letter: string; selected: boolean }[];
  row: number;
  letter: string;
  col: number;
  handleSelect: (index: number, j: number) => void;
  selected: boolean;
}

const Letter = ({ word, col, letter, row, handleSelect, selected }: Props) => {
  const handleOnClick = (e: React.MouseEvent) => {
    handleSelect(row, col);
  };

  if (letter === word[col].letter) {
    return (
      <div
        className={`box green ${selected ? 'selected-green' : ''}`}
        onClick={handleOnClick}
      >
        <p className='letter-font'>{letter}</p>
      </div>
    );
  } else if (word.map((element) => element.letter).includes(letter)) {
    return (
      <div
        className={`box yellow ${selected ? 'selected-yellow' : ''}`}
        onClick={handleOnClick}
      >
        <p className='letter-font'>{letter}</p>
      </div>
    );
  } else {
    return (
      <div
        className={`box ${selected ? 'selected' : ''}`}
        onClick={handleOnClick}
      >
        <p className='letter-font'>{letter}</p>
      </div>
    );
  }
};

export default Letter;
