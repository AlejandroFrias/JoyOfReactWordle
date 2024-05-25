import React from 'react';
import { range } from '../../utils';

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
function Guess({ value }) {
  return (
    <p className="guess">
      {range(0, 5).map((index) => {
        return (
          <Cell
            key={index}
            letter={value ? value[index].letter : ''}
            status={value ? value[index].status : ''} />
        )
      })}
    </p>
  )
}

export default Guess;
