/** @format */

import { useState, useEffect } from "react";
import GetCards from "./Cards";

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /* Change this to load while fetching instead of a timeout */
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      <div className="app">
        {loading ? (
          <ClimbingBoxLoader
            color={"yellow"}
            loading={loading}
            size={50}
            aria-label="Loading pinner"
            data-testid="loader"
          />
        ) : (
          <div className="gameContainer">
            <GetCards />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
