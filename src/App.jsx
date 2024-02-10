/** @format */

import { React, useState, useEffect } from "react";
import GetCards from "./components/Cards";
import DifficultySelection from "./components/DifficultySelection";
import Footer from "./components/Footer";
import LoadingFace from "./components/LoadingPage";

function App() {
  const [loading, setLoading] = useState(false);
  const [difficulty, setDifficulty] = useState("");

  const handleDifficultySelected = (diff) => {
    setDifficulty(diff);
  };

  useEffect(() => {
    /* Temporary Change this to load while fetching instead of a timeout */
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3800);
  }, []);

  return (
    <>
      <div className="app">
        {loading ? (
          <LoadingFace />
        ) : (
          <div>
            {!difficulty ? (
              <DifficultySelection
                onDifficultySelected={handleDifficultySelected}
              />
            ) : (
              <GetCards difficulty={difficulty} />
            )}
          </div>
        )}
        <div className="footer">{!loading ? <Footer></Footer> : ""}</div>
      </div>
    </>
  );
}

export default App;
