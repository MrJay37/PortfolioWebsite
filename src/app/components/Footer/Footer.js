import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: (theme) => theme.color.black,
    color: (theme) => theme.color.white,
    fontSize: (theme) => theme.fontSize.footer,
    height: (theme) => theme.space.footer,
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
});
const Footer = (props) => {
  const { theme } = props;
  const classes = useStyles(theme);
  return (
    <div className={classes.root}>
      <div>
        &#169; 2020 Sanket Jain | Made using Create-React-App | Hosted on
        Netlify
      </div>
    </div>
  );
};

export default Footer;
