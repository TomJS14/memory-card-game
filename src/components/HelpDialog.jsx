/** @format */
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Slide,
} from "@mui/material";
import * as React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function HelpDialog({ open, handleDialog }) {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        aria-labelledby="dialog-title"
        PaperProps={{
          sx: {
            backgroundColor: "#85f26e;",
            color: "black",
            borderRadius: "10px",
            alignItems: "center",
          },
        }}
      >
        <DialogTitle id="dialog-title">How to Play</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="dialog-description"
            sx={{
              color: "black",
              textTransform: "none",
              fontSize: "1.5rem",
              fontWeight: "800",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <p>Test your memory!</p>
            <p>Don't click on the same card twice!</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: "white",
              textTransform: "none",
              fontSize: "1rem",
              borderRadius: "8px",
              backgroundColor: "#1a1a1a",
              "&:hover": { bgcolor: "#1a1a1a", color: "#85f26e;" },
            }}
            autoFocus
            onClick={handleDialog}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default HelpDialog;
