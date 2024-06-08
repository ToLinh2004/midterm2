import React, { useState } from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const[raning,isRaning]=useState(true)
  const[color,setColor]=useState(false);
  const [title,setTitle]=useState(true);


  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setColor(false);
    isRaning(true)
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    setColor(true)
    isRaning(false)
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    setTitle(false)
  
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    
  }

  return (
    <main className={raning ? 'sunny': 'rainy'}>
      <h1>{raning ? `SUNNY TIME!`:`RAIN TIME!` }</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
