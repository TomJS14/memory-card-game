/** @format */
import React, { useState } from "react";
import useSound from "use-sound";
import { Button } from "@mui/material";
import PlayButton from "./PlayButton";
import backgroundMusic from "../assets/soundtrackRemix.mp3";
import HelpDialog from "./HelpDialog";
import "../styles/footer.css";

function Footer() {
  const [soundPlaying, setSoundPlaying] = useState(false);
  const [play, { pause, isPlaying }] = useSound(backgroundMusic, {
    volume: 0.2,
  });
  const toggleSound = () => {
    if (soundPlaying) {
      pause();
    } else {
      play();
    }
    setSoundPlaying(!soundPlaying);
  };

  const [openHelp, setOpenHelp] = useState(false);

  const handleDialog = () => {
    setOpenHelp(!openHelp);
  };

  return (
    <div className="footerButtons">
      <PlayButton
        toggleSound={toggleSound}
        soundPlaying={soundPlaying}
      ></PlayButton>
      <Button
        variant="contained"
        onClick={handleDialog}
        sx={{
          color: "#24242492",
          bgcolor: "#85f26e",
          width: "30px",
          height: "40px",
          textTransform: "none",
          fontSize: "1.5rem",
          borderRadius: "8px",
          "&:hover": { bgcolor: "#aef7e8", color: "black" },
        }}
      >
        ?
      </Button>
      <HelpDialog open={openHelp} handleDialog={handleDialog} />
    </div>
  );
}

export default Footer;
