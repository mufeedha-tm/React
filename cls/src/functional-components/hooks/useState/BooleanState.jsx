import React, { useState } from 'react';

function BooleanState() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? '🔊 ON' : '🔇 OFF'}
    </button>
  );
}

export default BooleanState;
