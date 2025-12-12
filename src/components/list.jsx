import React, { useState } from 'react';
import Button from '@mui/material/Button';

export default function List() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState('');

  const addItem = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    setItems(prev => [...prev, trimmed]); // append `trimmed` to items immutably: use functional updater (prev) to get latest array, spread into new array, then add new item
    setValue('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter item"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={addItem} id="bt1">
        Add
      </Button>
      <h1>List Component</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}