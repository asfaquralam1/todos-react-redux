import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector } from "react-redux";
import Counter from "./component/counter";
import Todos from "./component/Todos";
function App() {
  const count = useSelector((state) => state.count);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <Counter /> */}
      <Todos />
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card">
        <h2>Counter App</h2>
        <h3> count is {count}</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => (count = 0))}>Reset</button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
