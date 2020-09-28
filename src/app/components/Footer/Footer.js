import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: (theme) => theme.space.l,
    backgroundColor: (theme) => theme.color.primary,
    color: (theme) => theme.color.white,
    fontSize: (theme) => theme.fontSize.footer,
    height: (theme) => theme.space.footer,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
