/** @format */

import React from "react";
import { Button } from "@mui/material";
import soundOnIcon from "../assets/Speaker_Icon.svg";
import soundOffIcon from "../assets/Mute_Icon.svg";

function PlayButton({ toggleSound, soundPlaying }) {
  return (
    <Button
      onClick={toggleSound}
      variant="contained"
      className="mediumButton"
      sx={{
        bgcolor: "#85f26e",
        width: "30px",
        height: "40px",
        textTransform: "none",
        fontSize: "1rem",
        borderRadius: "8px",
        "&:hover": { bgcolor: "#aef7e8", color: "red" },
      }}
    >
      <img
        style={{ height: "50px" }}
        src={soundPlaying ? soundOnIcon : soundOffIcon}
        alt="sound icon"
      />
    </Button>
  );
}

export default PlayButton;
