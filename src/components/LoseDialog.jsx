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

function LoseDialog({ open, handleCloseDialog }) {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleCloseDialog}
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
        <DialogTitle id="dialog-title">You Lose</DialogTitle>
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
            Aw Jeez Rick, we messed up!
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
            onClick={handleCloseDialog}
          >
            Play again
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LoseDialog;
