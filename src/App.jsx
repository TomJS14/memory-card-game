/** @format */

import { useState } from "react";
import GetCards from "./Cards";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <div className="gameContainer">
          <div className="gameCard">
            <GetCards />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
