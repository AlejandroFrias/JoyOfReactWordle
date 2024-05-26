import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import EndGameBanner from '../EndGameBanner/EndGameBanner';

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  function handleAddGuess(guess) {
    setGuessResults([
      ...guessResults,
      guess
    ]);
  }


  return <>
    <EndGameBanner guessResults={guessResults} answer={answer} />
    <GuessResults guessResults={guessResults} answer={answer} />
    <GuessInput handleAddGuess={handleAddGuess} />
  </>;
}

export default Game;
