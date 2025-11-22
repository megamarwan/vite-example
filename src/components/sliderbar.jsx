import React, { useState } from 'react';

const Slider = () => {
  const [value, setValue] = useState(50); // Initial value

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Slider Value: {value}</h2>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={value} 
        onChange={handleChange} 
        style={{ width: '100%' }} 
      />
    </div>
  );
};

export default Slider;