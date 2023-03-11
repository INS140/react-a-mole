import { useState, useEffect } from 'react'
import StartMenu from './Startmenu'
import Game from './Game'

export default function App() {
  const [start, setStart] = useState(false)
  const [difficulty, setDifficulty] = useState('medium')

  useEffect(() => {
    console.log(difficulty)
  }, [difficulty])

  return <main>
    {
      start
        ? <Game
            setStart={setStart}
            difficulty={difficulty}
          />
        : <StartMenu
            setStart={setStart}
            setDifficulty={setDifficulty}
            difficulty={difficulty}
          />
    }
  </main>
}