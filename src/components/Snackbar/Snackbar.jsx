import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import useStyles from "./styled";

export const SnackbarComponent = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    // if we clickaway the snackbar, it will stay until the time reached/expires
    if (reason === "clickaway") return;

    setOpen((open) => !open);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Transaction succesfully created!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};
