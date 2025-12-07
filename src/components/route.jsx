import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import './route.css'; 

// Sample Components
const Home = () => (
 <div style={{ flex: 1, textAlign: 'center', border: '1px solid black',height : '150px' }}>
    <h2>Home Page</h2>
  </div> 
);

const About = () => (
  <div style={{ flex: 1, textAlign: 'center', border: '1px solid black',height : '150px' }}>
    <h2>About Page</h2>
  </div>
);

const Contact = () => (
  <div style={{ flex: 1, textAlign: 'center', border: '1px solid black',height : '150px' }}>
    <h2>Contact Page</h2>
  </div>
);

const SearchBar = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState(''); // state variable to hold the current search term (string)

  const handleChange = (e) => setSearchTerm(e.target.value);// function to update the string variable with input value
  const filteredItems = items.filter(item =>  
    item.toLowerCase().includes(searchTerm.toLowerCase()) 
  ); // function to search the array

  return (
    <div style={{ flex: 1, border: '1px solid black' }}>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={handleChange} 
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};// the function takes an array input declare a state variable of type string , then a function to put data in the array , then a function to search inside the array and finally render the searched data on the web page.

const LoginSignup = () => {
  const handleClick = () => {
    window.location.href = '/hi.html'; // Redirect to hi.html
  }; // declea a function to redirect to another page when clicked

  return (
    <div style={{ flex: 1, textAlign: 'center', border: '1px solid black',height : '150px'}}>
      <button onClick={handleClick}>
        Go to Hi Page
      </button>
    </div>
  );
};

// New component for hi.html content
const Hi = () => (
  <div>
    <h1>Welcome to the Hi Page!</h1>
    <p>This is the content of hi.html.</p>
     <p><a href="./hi.html">click here</a>.</p>
  </div>
);

const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

const RouteComponent = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About </Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/search" className="nav-link">Search</Link>
        <Link to="/login-signup" className="nav-link">Login / Sign up</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<SearchBar items={items} />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route path="/hi" element={<Hi />} /> {/* Route for Hi component */}
      </Routes>
    </Router>
  );
};

export default RouteComponent;