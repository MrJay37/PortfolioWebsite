import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    margin: (theme) => theme.space.spacing.pageMargin,
    paddingTop: (theme) => theme.space.header,
    minHeight: "100vh",
  },
  container: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  heading: {
    fontSize: (theme) => theme.fontSize.subHeading,
  },
  message: {
    paddingTop: (theme) => theme.fontSize.medium,
    fontSize: (theme) => theme.fontSize.small,
  },
}));
const Building = (props) => {
  const { theme } = props;
  const classes = useStyles(theme);
  return (
    <div id="building" className={classes.root}>
      <div className={classes.container}>
        <div className={classes.heading}>
          Sorry, site is still under progress
        </div>
        <div className={classes.message}>
          I know, right? If only the boss could hurry up, he's making you wait
          wtf
        </div>
        <img
          src={require("../../static/handyman-tools.svg")}
          alt="why is this not here"
        />
      </div>
    </div>
  );
};

export default Building;
