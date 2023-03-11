import MoleContainer from "./MoleContainer"

export default function setNumMoles(difficulty, setScore) {
  let moles = []

  switch (difficulty) {
    case 'easy':
      for (let i=0; i<4; i++) {
        moles.push(
          <MoleContainer
            key={`mole-${i}`}
            setScore={setScore}
          />
        )
      }
      break
    case 'hard':
      for (let i=0; i<16; i++) {
        moles.push(
          <MoleContainer
            key={`mole-${i}`}
            setScore={setScore}
          />
        )
      }
      break
    default:
      for (let i=0; i<9; i++) {
        moles.push(
          <MoleContainer
            key={`mole-${i}`}
            setScore={setScore}
          />
        )
      }
      break
  }

  return moles
}