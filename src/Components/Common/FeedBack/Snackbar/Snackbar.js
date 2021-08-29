import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import { setSnackBar } from "../../../../features/feedback/feedbackSlice";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    zIndex: 5000,
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const isOpen = useSelector((state) => state.feedback.isSnackbarOpen);
  const message = useSelector((state) => state.feedback.message);
  const type = useSelector((state) => state.feedback.type);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setSnackBar({ type: "Success", message: "", isOpen: false }));
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={isOpen}
        autoHideDuration={3000}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Alert onClose={onClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
