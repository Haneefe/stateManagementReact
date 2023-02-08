import React, { useState } from "react";
import "./App.css";
import NameList from "./UserList";
import UseReducerDemo from "./UseReducerDemo";
function App() {
  const [count, setCount] = useState(10);
  const increaseCount = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const decreaseCount = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };
  return (
    <>
      <UseReducerDemo />
      <div className="App">
        <button onClick={decreaseCount}>-</button>
        <p>{count}</p>
        <button onClick={increaseCount}>+</button>
      </div>
      <NameList />
    </>
  );
}

export default App;
