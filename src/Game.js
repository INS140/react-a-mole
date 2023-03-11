import { useState, useEffect } from 'react'
import setNumMoles from './setNumMoles'

export default function Game(props) {
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)

  const {setStart, difficulty} = props

  const moles = setNumMoles(difficulty, setScore)

  function handlePlayAgain() {
    setTimeLeft(10)
    setScore(0)
  }

  useEffect(() => {
    const interval = timeLeft === 0
      ? null
      : setInterval(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    
    return () => clearInterval(interval)
  })

  return <>
    {
      timeLeft > 0
        ? <div className='game-container'>
          <h2>Whack those moles!!!!!</h2>
          <h3>{timeLeft}</h3>
          <h3>{score}</h3>
          <div className={`hills-container ${difficulty}`}>
            {
              moles.map(mole => mole)
            }
          </div>
          <button onClick={() => setStart(false)}>Quit</button>
        </div>
        : <div>
          <h2>Times up!!!</h2>
          <h3>You scored {score} points!</h3>
          <h3>Great job!</h3>
          <div>
            <button onClick={handlePlayAgain}>Play Again</button>
            <button onClick={() => setStart(false)}>Return to Menu</button>
          </div>
        </div>
    }
  </>
}