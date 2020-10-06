import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: { overflow: "hidden" },
  container: {
    padding: (theme) => theme.space.spacing.pageMargin,
    marginBottom: (theme) => theme.space.m,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerImage: {
    maxWidth: "1000px",
    margin: "auto",
    width: "100%",
    height: "auto",
    display: "block",
  },
  sectionHeader: {
    fontSize: (theme) => theme.fontSize.title,
    padding: (theme) => theme.cards.sectionHeaderPadding,
    textAlign: "center",
  },
  linkImage: {
    maxWidth: "800px",
    width: "100%",
    margin: "auto",

    borderRadius: "50%",
    transform: "scale(0.7)",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

    "&:hover": {
      transform: "scale(0.75)",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39)",
    },

    transition: "transform 0.25s, box-shadow 0.25s",
  },
});

const Music = (props) => {
  const { theme } = props;
  const classes = useStyles(theme);
  return (
    <div className={classes.root}>
      <img
        className={classes.headerImage}
        src={require("../../static/abagauss.JPG")}
        alt="abagauss"
      />
      <div className={classes.container}>
        <div className={classes.sectionHeader}>This is what it's all about</div>
        <a
          href="https://www.youtube.com/channel/UChY1M4qO-YB6Cpn-naXM7BQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../static/abagaussLogo.jpg")}
            alt="abagauss logo"
            className={classes.linkImage}
          />
        </a>
        <div className={classes.sectionHeader}>
          Find out more, click on the image
        </div>
      </div>
    </div>
  );
};

export default Music;
