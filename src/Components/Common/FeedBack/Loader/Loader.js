import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import BackDrop from "../../../BackDrop/BackDrop";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "50%",
    left: "50%",
    width: "5rem",
    height: "5rem",
    padding: "1rem",
    backgroundColor: "white",
    transform: "translate(-50%,-50%)",
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <BackDrop>
      <div className={classes.root}>
        <CircularProgress />
      </div>
    </BackDrop>
  );
}
