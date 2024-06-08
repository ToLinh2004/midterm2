import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [onA, setOnA] = useState();
  const [onB, setOnB] = useState();
  const [sum, setSum] = useState();

  /* You will need some function to handle the key pressed and button events */
  const handleOnClick = () => {
    setSum(parseInt(onA) + parseInt(onB));
  };
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input
        onKeyUp={onA}
        value={onA}
        onChange={(e) => setOnA(e.target.value)}
      />

      <label>B =</label>
      <input
        onKeyUp={onA}
        value={onB}
        onChange={(e) => setOnB(e.target.value)}
      />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={sum} />
      <button onClick={handleOnClick}>Compute</button>
    </main>
  );
}

export default App;
