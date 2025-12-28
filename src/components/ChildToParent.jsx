import React, { useState } from 'react';

export  function ParentComponent() {
  // 1. State to store the data received from the child
  const [dataFromChild, setDataFromChild] = useState('No data yet');

  // 2. The callback function to be passed to the child
  const handleChildData = (data) => {
    // This function runs when the child calls it
    console.log('Received data from child:', data);
    setDataFromChild(data); // Update the parent's state
  };

  return (
    <div style={{ border: '2px solid blue', padding: '15px' }}>
      <h2>Parent Component</h2>
      <p>Data received from child: <strong>{dataFromChild}</strong></p>
      
      {/* 3. Pass the callback function down to the child as a prop */}
      <ChildComponent onDataPass={handleChildData} />
    </div>
  );
}

// export  ParentComponent;

// The Parent passes 'onDataPass' as a prop
export  function ChildComponent({ onDataPass }) {
  const [inputValue, setInputValue] = useState('');

  const sendDataToParent = () => {
    // 1. Call the function (passed via props) and send the data
    onDataPass(inputValue);
    setInputValue(''); // Clear the input after sending
  };

  return (
    <div style={{ border: '2px solid green', padding: '15px', marginTop: '10px' }}>
      <h3>Child Component</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter data to send up"
      />
      <button onClick={sendDataToParent}>
        Send Data to Parent
      </button>
    </div>
  );
}

// export  ChildComponent;