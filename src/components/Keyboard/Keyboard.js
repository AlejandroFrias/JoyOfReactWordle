import React from 'react';
function Key({ letter, status }) {
  const className = status ? `key ${status}` : 'key'
  return (
    <span className={className}>{letter}</span>
  )
}

function Keyboard() {
  return (
    <div className="keyboard">
      <p className="keyboard-row">
        <Key letter="A" />
        <Key letter="B" status={"incorrect"} />
        <Key letter="C" status={"correct"} />
        <Key letter="D" status={"misplaced"} />
        <Key letter="A" />
        <Key letter="B" status={"incorrect"} />
        <Key letter="C" status={"correct"} />
        <Key letter="D" status={"misplaced"} />
        <Key letter="C" status={"correct"} />
        <Key letter="D" status={"misplaced"} />
      </p>
      <p className="keyboard-row">
        <Key letter="A" />
        <Key letter="B" status={"incorrect"} />
        <Key letter="C" status={"correct"} />
        <Key letter="D" status={"misplaced"} />
        <Key letter="A" />
        <Key letter="B" status={"incorrect"} />
        <Key letter="C" status={"correct"} />
        <Key letter="D" status={"misplaced"} />
        <Key letter="D" status={"misplaced"} />
      </p>
      <p className="keyboard-row">
        <Key letter="A" />
        <Key letter="B" status={"incorrect"} />
        <Key letter="C" status={"correct"} />
        <Key letter="D" status={"misplaced"} />
        <Key letter="B" status={"incorrect"} />
        <Key letter="C" status={"correct"} />
        <Key letter="D" status={"misplaced"} />
      </p>
    </div>
  )
}

export default Keyboard;
