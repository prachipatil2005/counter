import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  //let counter=5
  const addValue = () => {
    console.log("clicked", counter);
    //counter+=1
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>chai or react</h1>
      <h1>counter value:{counter}</h1>
      <button onClick={addValue}>Add value:</button>
      <br />
      <br />
      <button>Remove Value{counter}</button>
    </>
  );
}

export default App;
