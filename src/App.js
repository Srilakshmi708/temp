import React, { useState } from 'react';
import './App.css';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="App">
      <h1>Hello! I'm Sravanthi</h1>
      <button onClick={() => setShowMessage(!showMessage)}>
        Click Me!
      </button>
      {showMessage && <p>This is my secret message 🎉</p>}
    </div>
  );
}

export default App;
