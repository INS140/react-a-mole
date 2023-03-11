import { useState, useEffect } from 'react'

export default function MoleContainer(props) {
  const [liveOne, setLiveOne] = useState(false)

  function whack() {
    setLiveOne(false)
    props.setScore(prevScore => prevScore + 5)
  }

  useEffect(() => {
    const randomTime = liveOne
      ? Math.max(Math.ceil(Math.random() * 1000), 500)
      : Math.max(Math.ceil(Math.random() * 5000), 500)

    const timer = setTimeout(() => setLiveOne(!liveOne), randomTime)

    return () => clearTimeout(timer)
  })

  return <div className='mole-container'>
    {
      liveOne
        ? <button onClick={whack}>
            <img
              src='/images/mole.png'
              alt='A live one!'
              className='mole-img'
            />
          </button>
        : <button>
            <img
              src='/images/molehill.png'
              alt='No mole!'
              className='mole-img'
            />
          </button>
    }
  </div>
}