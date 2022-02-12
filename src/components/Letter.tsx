import React from 'react'
import './Letter.css'

interface Props {
  word: string[]
  index: number
  letter: string
}

const Letter = ({ word, index, letter }: Props) => {



  if (letter === word[index]) {
    return (
      <div className='box green'>
        <p className='letter-font'>{letter}</p>
      </div>
    )
  } else if (word.includes(letter)) {
    return (
      <div className='box yellow'>
        <p className='letter-font'>{letter}</p>
      </div>
    )
  } else {
    return (
      <div className='box'>
        <p className='letter-font'>{letter}</p>
      </div>
    )
  }
}

export default Letter
