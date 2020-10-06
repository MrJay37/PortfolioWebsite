import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "inherit",
    textDecoration: "none",
  },
  picContainer: {
    height: "inherit",
    padding: (theme) => theme.headerAvatar.picPadding,
  },
  fontTheme1: {
    fontSize: (theme) => theme.headerAvatar.font1,
    margin: "0",
    padding: (theme) => theme.space.spacing.small,
    fontWeight: (theme) => theme.fontWeight.thin,
  },
  fontTheme2: {
    fontSize: (theme) => theme.headerAvatar.font2,
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
    <Link to="/" className={classes.root}>
      <div className={classes.picContainer}>
        <img
          src={require("../../static/PicIcon.jpg")}
          alt="me"
          style={{
            width: theme.headerAvatar.picWidth,
            height: "auto",
            borderRadius: "50%",
          }}
        />
      </div>
      <div>
        <h1 className={classes.fontTheme1}>Sanket Jain</h1>
        <h2 className={classes.fontTheme2}>Computer Engineer</h2>
      </div>
    </Link>
  );
};

export default HeaderAvatar;
