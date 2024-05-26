import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function EndGameBanner({ guessResults, answer }) {
  const winner = guessResults[guessResults.length - 1] === answer
  const loser = !winner && guessResults.length === NUM_OF_GUESSES_ALLOWED

  if (winner) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{guessResults.length} guesses</strong>.
        </p>
      </div>
    )
  }
  if (loser) {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )
  }
  return null
}

export default EndGameBanner;
