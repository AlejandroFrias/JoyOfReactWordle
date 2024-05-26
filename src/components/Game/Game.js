import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import LostBanner from '../LostBanner';
import WonBanner from '../WonBanner';
import Keyboard from '../Keyboard';

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
    <Keyboard guessResults={guessResults} answer={answer} />
    {gameStatus === 'lost' && <LostBanner answer={answer} />}
    {gameStatus === 'won' && <WonBanner numOfGuesses={guessResults.length} />}
  </>;
}

export default Game;
