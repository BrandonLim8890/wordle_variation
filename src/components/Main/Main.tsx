import React, { useEffect, useState } from 'react';
import './Main.css';
import { WORDS } from '../../data';
import Letter from '../Letter';

interface Position {
  row: number;
  col: number;
}

const Main = () => {
  const shuffled = WORDS.sort(() => 0.5 - Math.random());
  const selectedWords = shuffled.slice(0, 1);
  const selected = selectedWords.map((word) =>
    word.split('').map((letter) => ({ letter, selected: false }))
  );

  const shuffledSelected = selectedWords
    .join('')
    .split('')
    .sort(() => 0.5 - Math.random())
    .map((letter) => ({ letter, selected: false }));

  let game = [];
  for (let i = 0; i < 1; i++) {
    game.push(shuffledSelected.splice(0, 5));
  }

  const [ansArr, setAnsArr] = useState(selected);
  const [gameArr, setGameArr] = useState(game);
  const [swap, setSwap] = useState<Position[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (swap.length === 2) {
      const firstSwap = swap[0];
      const secondSwap = swap[1];
      const tempValue = gameArr[firstSwap.row][firstSwap.col];
      let tempGame = [...gameArr];
      tempGame[firstSwap.row][firstSwap.col] = {
        ...gameArr[secondSwap.row][secondSwap.col],
        selected: false,
      };
      tempGame[secondSwap.row][secondSwap.col] = {
        ...tempValue,
        selected: false,
      };
      setMoves(moves + 1);
      setSwap([]);
      setGameArr(tempGame);
    }
  }, [swap, gameArr]);

  useEffect(() => {
    if (JSON.stringify(gameArr) === JSON.stringify(ansArr)) {
      setGameOver(true);
    }
  }, [gameArr, ansArr]);

  const handleSelect = (row: number, col: number) => {
    const current = { row, col };
    let tempGameArr = gameArr;
    if (JSON.stringify(swap[0]) === JSON.stringify(current)) {
      tempGameArr[row][col] = { ...tempGameArr[row][col], selected: false };
      setGameArr(tempGameArr);
      setSwap([]);
    } else {
      tempGameArr[row][col] = { ...tempGameArr[row][col], selected: true };
      setSwap([...swap, current]);
    }
  };

  return (
    <div className='parent-container'>
      <div
        style={
          gameOver
            ? {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }
            : {
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }
        }
      >
        <h3>Moves: {moves}</h3>
        {gameOver && <h3>You won!</h3>}
      </div>
      <div
        className='container'
        style={
          gameOver
            ? {
                pointerEvents: 'none',
              }
            : {}
        }
      >
        {gameArr.map((word, row) => {
          return (
            <div className='letter-div' key={row}>
              {word.map((letterObj, col) => (
                <Letter
                  letter={letterObj.letter}
                  row={row}
                  word={ansArr[row]}
                  col={col}
                  handleSelect={handleSelect}
                  selected={letterObj.selected}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
