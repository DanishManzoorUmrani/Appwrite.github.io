import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [text, settext] = useState("")
  console.log(text);
 
  const handlingupercase = () => {
    let newtext = text.toUpperCase();
    settext(newtext)
  }
  const handlinglowercase = () => {
    let newtext = text.toLowerCase();
    settext(newtext)
  }
  const handlingtextclear = () => {
    settext(" ")
  }
  const handlingprint = () => {
    window.print();
  }
 
  return (
    <>
      <div className="textfield">
        <h1>My Word</h1>
        <textarea name="text" style={{textTransform:'capitalize'}} value={text} onChange={(e) => settext(e.target.value)}></textarea>
        <div className="btn">
          <button onClick={handlingupercase}>UpperCase</button>
          <button onClick={handlinglowercase}>UpperCase</button>
          <button onClick={handlingtextclear}>Clear</button>
          <button onClick={handlingprint}>print</button>
          
        </div>
        <div className="length">
          <p>{text.split(" ").length}   word length</p>
          <p>{text.length}     later length</p>
          <p> {0.08 * text.split(" ").length} Minutes Read </p>
        </div>
        <h1>previous</h1>
        <p>{text}</p>
      </div>

    </>
  );
} 

export default App;
