import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  container: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    outline: "1px solid grey",
    backgroundColor: (theme) => theme.color.white,
    width: "400px",
    height: "267px",
    float: "left",
    overflow: "hidden",
    marginBottom: (theme) => theme.space.s,
    "@media only screen and (max-width: 1024px)": {
      width: "100%",
      height: "auto",
    },
  },
  title: {
    display: "flex",
    flexDirection: "row-reverse",
    width: "100%",
    justifyContent: "space-between",
    fontSize: (theme) => theme.cards.headerFontSize,
    "@media only screen and (max-width: 1024px)": {
      display: "block",
    },
  },
  titleDate: {
    flexGrow: "1",
    minWidth: "60px",
    maxWidth: "60px",
    minHeight: "62px",
    paddingTop: (theme) => theme.space.xxs,
    backgroundColor: (theme) => theme.color.black,

    textAlign: "center",
    color: (theme) => theme.color.white,
    fontSize: (theme) => theme.cards.subHeaderFontSize,

    "@media only screen and (max-width: 1024px)": {
      padding: (theme) => theme.space.xxs,
      minHeight: "auto",
      minWidth: "100%",
      maxWidth: "100%",
    },
  },
  titleText: {
    flexGrow: "3",
    padding: (theme) => theme.space.xs,
    backgroundColor: (theme) => theme.color.primary,
    color: (theme) => theme.color.white,
    fontSize: (theme) => theme.fontSize.small,
    textAlign: "left",

    "@media only screen and (max-width: 1024px)": {
      textAlign: "center",
    },
  },
  description: {
    padding: (theme) => theme.space.xs,
    fontSize: (theme) => theme.cards.bulletsFontsize,
    textAlign: "right",
  },
});

const ContentCardLeft = (props) => {
  const { theme } = props;
  const classes = useStyles(theme);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.title}>
            <div className={classes.titleDate}>{props.event.date}</div>
            <div className={classes.titleText}>{props.event.eventTitle}</div>
          </div>
          <div className={classes.description}>
            {props.event.eventDescription}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCardLeft;
