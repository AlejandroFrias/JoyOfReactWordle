import React from 'react';

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map(({ label, id }) => (
        <p className="guess" key={id}>{label}</p>
      ))}
    </div>
  )
}

export default GuessResults;
