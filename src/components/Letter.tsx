import React, { MouseEventHandler, useState } from 'react'
import './Letter.css'

interface Props {
  word: string[]
  index: number
  letter: string
  j: number
  handleSelect: (index: number, j: number) => void;
}

const Letter = ({ word, index, letter, j, handleSelect }: Props) => {

  const handleOnClick = (e: React.MouseEvent) => {
    handleSelect(index, j);
    setSelected(!selected);
  }

  const [selected, setSelected] = useState(false);

  if (letter === word[index]) {
    return (
      <div className={`box green ${selected ? "selected-green" : ""}`} onClick={handleOnClick} >
        <p className='letter-font'>{letter}</p>
      </div>
    )
  } else if (word.includes(letter)) {
    return (
      <div className={`box yellow ${selected ? "selected-yellow" : ""}`} onClick={handleOnClick}>
        <p className='letter-font'>{letter}</p>
      </div>
    )
  } else {
    return (
      <div className={`box ${selected ? "selected" : ""}`} onClick={handleOnClick}>
        <p className='letter-font'>{letter}</p>
      </div>
    )
  }
}

export default Letter
