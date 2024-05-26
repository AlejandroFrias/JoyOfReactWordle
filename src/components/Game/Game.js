import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import LostBanner from '../LostBanner/LostBanner';
import WonBanner from '../WonBanner/WonBanner';

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

  let gameStatus = 'running'
  if (
    guessResults.find((guess) => guess === answer)
  ) {
    gameStatus = 'won'
  } else if (guessResults.length === NUM_OF_GUESSES_ALLOWED) {
    gameStatus = 'lost'
  }

  return <>
    <GuessResults
      guessResults={guessResults}
      answer={answer}
    />
    <GuessInput
      handleAddGuess={handleAddGuess}
      disabled={gameStatus !== 'running'}
    />
    {gameStatus === 'lost' && <LostBanner answer={answer} />}
    {gameStatus === 'won' && <WonBanner numOfGuesses={guessResults.length} />}
  </>;
}

export default Game;
