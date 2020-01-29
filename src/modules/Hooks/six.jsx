import React, { useState, useCallback } from 'react';

export default function App() {
    const [clickCount, setClickCount] = useState(0);  
  
    const handleClick = useCallback(() => {
      setClickCount(clickCount + 1);
    }, [clickCount]);
  
    return (
      <div>
          <button onClick={handleClick}>Press</button>
          <span>{clickCount}</span>
      </div>
    )
  }