import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault()
    setGuess('')
    window.alert('Guess submitted: ' + guess)
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        handleSubmit(event)
      }}>
      <label htmlFor="guess-input">
        Enter guess: {guess}
      </label>
      <input
        id="guess-input"
        type="text"
        // Validation
        required
        pattern="[A-Z]{5}"
        title="5-letter word"
        // Binding
        value={guess}
        onChange={event => {
          setGuess(event.target.value.toUpperCase().replaceAll(/[^A-Z]/g, ''))
        }} />
    </form>
  )
}

export default GuessInput;
