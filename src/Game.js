import { useState, useEffect } from 'react'

export default function Game(props) {
  return <>
    <h2>Whack that mole!!!!!</h2>
    <button onClick={() => props.setStart(false)}>Quit</button>
  </>
}