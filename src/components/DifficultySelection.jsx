/** @format */
import { useState, useEffect } from "react";
import "../styles/difficultySelection.css";
import { Button } from "@mui/material";

function DifficultySelection({ onDifficultySelected }) {
  const [difficulty, setDifficulty] = useState("");

  const confirmDifficulty = (diff) => {
    setDifficulty(diff);
    onDifficultySelected(diff);
  };

  useEffect(() => {
    console.log(difficulty);
  }, [difficulty]); /* Update when the value changes */

  return (
    <>
      <div className="difficultyMenuContainer">
        <p>Choose Difficulty</p>
        <Button
          variant="contained"
          value={"easy"}
          onClick={(e) => confirmDifficulty("easy")}
          className="mediumButton"
          sx={{
            bgcolor: "#85f26e",
            textTransform: "none",
            fontSize: "1rem",
            borderRadius: "8px",
            "&:hover": { bgcolor: "#aef7e8", color: "green" },
          }}
        >
          Easy
        </Button>
        <Button
          variant="contained"
          value={"medium"}
          onClick={(e) => confirmDifficulty("medium")}
          className="mediumButton"
          sx={{
            bgcolor: "#85f26e",
            textTransform: "none",
            fontSize: "1rem",
            borderRadius: "8px",
            "&:hover": { bgcolor: "#aef7e8", color: "orange" },
          }}
        >
          Medium
        </Button>
        <Button
          variant="contained"
          value={"hard"}
          onClick={(e) => confirmDifficulty("hard")}
          className="mediumButton"
          sx={{
            bgcolor: "#85f26e",
            textTransform: "none",
            fontSize: "1rem",
            borderRadius: "8px",
            "&:hover": { bgcolor: "#aef7e8", color: "red" },
          }}
        >
          Hard
        </Button>
        <Button
          variant="contained"
          value={"stupid"}
          onClick={(e) => confirmDifficulty("stupid")}
          className="mediumButton"
          sx={{
            bgcolor: "red",
            textTransform: "none",
            fontSize: "1rem",
            borderRadius: "8px",
            "&:hover": { bgcolor: "#aef7e8", color: "red" },
          }}
        >
          Stupid
        </Button>
      </div>
    </>
  );
}

export default DifficultySelection;
