import { useState, useEffect } from 'react'

export default function StartMenu(props) {
  const {setStart, setDifficulty, difficulty} = props

  function handleChange(e) {
    setDifficulty(e.target.value)
  }

  return <>
    <h1>React-A-Mole</h1>
    <p>created by <a href='https://github.com/INS140'>INS140</a></p>
    <form>
      <label htmlFor='difficulty'>Set Difficulty: </label>
      <select value={difficulty} onChange={handleChange}>
        <option value='easy'>Easy</option>
        <option value='medium'>Medium</option>
        <option value='hard'>Hard</option>
      </select>
    </form>
    <button onClick={() => setStart(true)}>Start</button>
  </>
}