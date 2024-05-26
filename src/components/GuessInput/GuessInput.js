import React from 'react';

function GuessInput({ handleAddGuess, disabled }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault()
    handleAddGuess(guess)
    setGuess('')
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
        disabled={disabled}
        // Validation
        required
        pattern="[A-Z]{5}"
        title="5-letter word"
        // Binding
        value={guess}
        onChange={event => {
          setGuess(event.target.value.toUpperCase().replaceAll(/[^A-Z]/g, '').slice(0, 5))
        }} />
    </form>
  )
}

export default GuessInput;
