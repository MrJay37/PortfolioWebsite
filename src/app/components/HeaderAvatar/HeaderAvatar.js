import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "inherit",
    textDecoration: "none",
  },
  fontTheme1: {
    fontSize: (theme) => theme.fontSize.large,
    margin: "0",
    padding: (theme) => theme.space.spacing.small,
    fontWeight: (theme) => theme.fontWeight.thin,
  },
  fontTheme2: {
    fontSize: (theme) => theme.fontSize.small,
    margin: "0",
    padding: (theme) => theme.space.spacing.small,
    fontWeight: (theme) => theme.fontWeight.thin,
  },
}));

const HeaderAvatar = (props) => {
  const { theme } = props;
  const classes = useStyles(theme);

  return (
    // eslint-disable-next-line
    <a href="#" className={classes.root}>
      <div>
        <img
          src={require("../../static/PicIcon.jpg")}
          alt="me"
          style={{
            width: theme.mode === "widescreen" ? theme.space.m : theme.space.l,
            height: "auto",
            borderRadius: "50%",
          }}
        />
      </div>
      <div>
        <h1 className={classes.fontTheme1}>Sanket Jain</h1>
        <h2 className={classes.fontTheme2}>Computer Engineer</h2>
      </div>
    </a>
  );
};

export default HeaderAvatar;
