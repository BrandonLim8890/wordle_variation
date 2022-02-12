import React, { useState } from 'react'
import './Main.css'
import { WORDS } from '../../data'
import Letter from '../Letter'

const Main = () => {
  const shuffled = WORDS.sort(() => 0.5 - Math.random())
  // ["game", "hello"] -> [[g,a,n,e], [h,e,l,l,o]]
  const selected = shuffled.slice(0, 5).map((word) => word.split(''))

  const shuffledSelected = shuffled
    .join('')
    .split('')
    .sort(() => 0.5 - Math.random())

  let game = []
  for (let i = 0; i < 5; i++) {
    game.push(shuffledSelected.splice(0, 5))
  }

  const [ansArr, setGameArr] = useState(selected)
  const [gameArr, setAnsArr] = useState(game)
  const [swap, setSwap] = useState([])

  const handleSelect = (index: number, j: number) => {
    const current = {i: index, j};
  }

  return (
    <div className='container'>
      {gameArr.map((word, index) => {
        return (
          <div className='letter-div' key={index}>
            {word.map((letter, i) => (
              <Letter key={i} letter={letter} index={i} word={ansArr[index]} j={i} handleSelect={handleSelect} />
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Main
