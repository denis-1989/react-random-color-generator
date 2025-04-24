import './App.css';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('#ffffff');

  const generateColor = () => {
    const newColor =
      '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
    setColor(newColor);
  };

  // Determine if text color should be dark or light
  const isDark =
    parseInt(color.replace('#', ''), 16) < 0xffffff / 2 ? true : false;

  return (
    <div className="App">
      <h1>Random Color Generator</h1>
      <div
        className="color-card"
        style={{
          '--color': color,
          '--textColor': isDark ? '#ffffff' : '#000000',
        }}
      >
        <span>Generated Color:</span>
        <code>{color}</code>
      </div>
      <button onClick={generateColor}>Generate</button>
    </div>
  );
}
