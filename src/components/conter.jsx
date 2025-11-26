// Import necessary modules from React
import React, { useState } from 'react'; // Import React library and the useState hook
import './counter.css'; // Import a CSS stylesheet for styling the component

// Define a functional component named ClickCounter
const ClickCounter = () => {
//this function contains a count variable and  asetCount function to update the count variable
 // State to keep track of the count
 // useState is a React Hook that allows you to have state variables in functional components
 // Here, count is initialized to 0, and setCount is the function that updates the count state
 const [count, setCount] = useState(0);

 // Function to handle button click
 // This function will be called whenever the button is clicked
 const handleClick = () => {
 // Update the state by incrementing the count by 1
 setCount(count + 1);
 };

 // Return the JSX that defines the UI of the component
 // This structure resembles HTML, but it's written in JSX syntax
 return (
 <div style={{ textAlign: 'center', marginTop: '50px' }}>
 // Header for the counter
 <h1>Click Counter</h1>
 // Paragraph displaying how many times the button has been clicked
 <p>You have clicked the button {count} times.</p>
 // Button that triggers the handleClick function on click
 <button className='counter-button' onClick={handleClick}>
 Click Me! // Button label
 </button>
 </div>
 );
};

// Export the ClickCounter component, making it available for import in other files
export default ClickCounter;