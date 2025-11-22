import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  // 1. Use State to hold the fetched data
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Use the useEffect Hook for the API call (runs once after initial render)
  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // 3. Update the state with the fetched data
        setUsers(data); 
        setLoading(false); // Done loading
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setLoading(false);
      });
  }, []); // The empty array [] ensures this runs only once

  // 4. Conditional Rendering based on state
  if (loading) {
    return <header>Loading user data...</header>;
  }

  // 5. Render the list using the 'users' state
  return (
    <header className="Header-container">
      <h1>User Data</h1>
      <ul id="user-list">
        {users.map(user => (
          // Key prop is necessary for list items in React
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </header>
  );
};

export default Header;