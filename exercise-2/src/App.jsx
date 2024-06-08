import React from "react";
import { useState } from "react";
function App() {
  const [letter,setLetter]=useState();

  /* You will need to use a boolean state to keep the value of the text entered */

  /* You will need a function to handle a key pressed on the first input and update the state*/

    const handleUpperCase= (e)=>{
      setLetter(e.target.value);

  }
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input  value={letter} onChange={handleUpperCase}/>

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in lower case */}
        <input style={{textTransform:'uppercase'}} value={letter} disabled />
      </p>
    </main>
  );
}

export default App;
