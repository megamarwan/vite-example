import React, { useState } from 'react';

export default function ParentComponentxy() {
  // 1. The data (state) that the parent wants to share
  const [message, setMessage] = useState('Hello from the Parent!');

  // Example: function to update the message
  const updateMessage = () => {
    setMessage("I'm the Parent, and I just changed my state!");
  };

  return (
    <div style={{ border: '2px solid blue', padding: '20px', marginBottom: '10px' }}>
      <h2>Parent Component</h2>
      <p>Parent's current message: <strong>{message}</strong></p>
      <button onClick={updateMessage}>
        Change Parent's Message
      </button>

      {/* 2. Passing data down via a prop */}
      {/* We name the prop 'greetingText' and assign it the value of the 'message' state */}
      <ChildComponent greetingText={message} />
    </div>
  );
};

// The child receives the data via a 'props' object
// We can destructure the specific prop we want: { greetingText }
function ChildComponent({ greetingText }) {
  
  return (
    <div style={{ border: '2px solid green', padding: '15px', marginTop: '15px' }}>
      <h3>Child Component</h3>
      <p>I received this data from my Parent:</p>
      
      {/* 3. Displaying the data received via props */}
      <blockquote style={{ background: '#f0f0f0', padding: '10px' }}>
        "{greetingText}"
      </blockquote>
      
      <p style={{ fontStyle: 'italic', fontSize: 'small' }}>
        Note: The child cannot directly change this data.
      </p>
    </div>
  );
}