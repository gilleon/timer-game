import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const playName = useRef();
  //before using useRef
  // const [submitted, setSubmitted] = useState(false);
  // function handleChange(event) {
  //   setEnteredPlayerName(event.target.value);
  // }
  function handleClick() {
    setEnteredPlayerName(playName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? "unknown entity" : ""}</h2>
      <p>
        {/* 
        before using userRef
        <input type="text" onChange={handleChange} value={enteredPlayerName} /> */}
        <input ref={playName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
