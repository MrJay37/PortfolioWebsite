import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinksData from "../../static/data/linksData";

const useStyles = makeStyles({
  root: {
    marginTop: (theme) => theme.space.m,
    color: "white",
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  link: {
    color: (theme) => theme.color.white,
    textDecoration: "none",
    fontSize: (theme) => theme.fontSize.medium,
  },
});

const LinksBar = (props) => {
  const { theme } = props;

  const classes = useStyles(theme);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          {LinksData.map((link, i) => (
            <a key={i} className={classes.link} href={link.link}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default LinksBar;
