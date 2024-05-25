import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  let className = 'cell'
  if (status) {
    className = `cell ${status}`
  }
  return (
    <span className={className}>
      {letter}
    </span>
  )

}
function Guess({ value, answer }) {
  const result = checkGuess(value, answer) ?? []
  return (
    <p className="guess">
      {range(0, 5).map((index) => {
        const { letter, status } = result[index] ?? { letter: '', status: '' };
        return (
          <Cell
            key={index}
            letter={letter}
            status={status} />
        )
      })}
    </p>
  )
}

export default Guess;
