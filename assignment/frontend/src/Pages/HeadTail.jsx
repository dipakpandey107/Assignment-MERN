// src/pages/HeadTail.js
import React, { useState } from 'react';
import { AuthContext } from '../context/AuthContext';

function HeadTail() {
  const [selectedValue, setSelectedValue] = useState('');
  const [result, setResult] = useState([]);

    const {user} = useContext(AuthContext);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    if (!selectedValue) {
      alert('Please select a value from the dropdown.');
      return;
    }

    if(!user || user===undefined || user===null){
        return alert("Please sign in");
    }

    // Check if a new column needs to be created
    if (result.length === 0 || result[result.length - 1].indexOf(selectedValue) === -1) {
      setResult([...result, selectedValue]);
    } else {
      // Add to the existing column
      setResult(result.map((column, index) =>
        index === result.length - 1 ? column + selectedValue : column
      ));
    }

    setSelectedValue('');
  };

  return (
    <div>
      <h2>Head & Tail Page</h2>
      <div>
        <select value={selectedValue} onChange={handleSelectChange}>
          <option value="">Select value</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        {result.map((column, index) => (
          <div key={index}>{column.split('').map((char, charIndex) => (
            <span key={charIndex}>{char} </span>
          ))}</div>
        ))}
      </div>
    </div>
  );
}

export default HeadTail;
