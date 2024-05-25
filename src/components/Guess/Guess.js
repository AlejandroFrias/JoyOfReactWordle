import React from 'react';
import { range } from '../../utils';

function Guess({ value }) {
  return (
    <p className="guess">
      {range(0, 5).map((index) => (
        <span key={index} className="cell">{value ? value[index] : ''}</span>
      ))}
    </p>
  )
}

export default Guess;
