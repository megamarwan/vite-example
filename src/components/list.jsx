import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

export default function List() {
const [items, setItems] = useState([]);
const [value, setValue] = useState('');
 useEffect (()=>{console.log('this is rendered');} , [items]);


const addItem = () => {
  
  const trimmed = value.trim();
  if (!trimmed) return;
  setItems(prev => [...prev, trimmed]);
  console.log(3^6^3);
  console.log(3^6^3);
  setValue('');
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
      <Button variaLnt="contained" color="primary" onClick={addItem} id="bt1">
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