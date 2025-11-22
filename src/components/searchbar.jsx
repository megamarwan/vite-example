// src/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ items }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredItems = items.filter(item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={handleChange} 
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;