import React, { useState } from 'react';
import './counter.css'; 

const ClickCounter = () => {
  // State to keep track of the count
  const [count, setCount] = useState(0);

  // Function to handle button click
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Click Counter</h1>
      <p>You have clicked the button {count} times.</p>
      <button className='counter-button' onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
};

export default ClickCounter;