import './App.css';
import React, { useState } from 'react';

function App() {
  // State to store the generated color
  const [color, setColor] = useState('#FFFFFF');

  // Function to generate a random color in HEX format
  const generateColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
    setColor(randomColor); // Update the state with the new color
  };

  return (
    <div className="App">
      <h1>Random Color Generator</h1>
      {/* Button to trigger color generation */}
      <button onClick={generateColor}>Generate</button>

      {/* Display the generated color */}
      <div
        className="color-box"
        style={{
          backgroundColor: color, // Set the background color to the generated color
          color: '#000', // Set text color to black for contrast
          padding: '20px',
          marginTop: '20px',
        }}
      >
        Generated color: {color} {/* Display the HEX code */}
      </div>
    </div>
  );
}

export default App;
