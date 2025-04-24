import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('#FFFFFF');

  // Function to generate a random color in HEX format
  const generateColor = () => {
    setColor(
      `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`,
    );
  };

  return (
    <div className="App">
      <h1>Random Color Generator</h1>

      <button onClick={generateColor}>Generate</button>

      <div
        className="color-box"
        style={{
          backgroundColor: color,
          color: '#000',
          padding: '20px',
          marginTop: '20px',
        }}
      >
        Generated Color: {color}
      </div>
    </div>
  );
}
