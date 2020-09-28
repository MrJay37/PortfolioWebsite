import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    position: "relative",
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
    width: "100%",
    overflow: "hidden",
  },
  image: {
    position: "relative",
    width: "100%",
    height: "100vh",
    filter: "brightness(50%)",
    objectFit: "cover",
    objectPosition: (theme) =>
      theme.mode === "widescreen" ? "40% 0%" : "25% 0%",
    animation: "$pictureLoad 2000ms",
    animationTimingFunction: "ease-in-out",
  },
  heading: {
    position: "absolute",
    width: "90%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  head1: {
    fontSize: (theme) => theme.fontSize.heading,
    fontWeight: (theme) => theme.fontWeight.thin,
    animation: "$textload 2000ms",
  },
  head2: {
    paddingTop: (theme) => theme.space.s,
    fontSize: (theme) => theme.fontSize.title,
    fontWeight: (theme) => theme.fontWeight.thin,
    animation: "$textload 2000ms",
  },
  "@keyframes textload": {
    "0%": {
      color: "transparent",
    },
    "100%": {
      color: "white",
    },
  },
  "@keyframes pictureLoad": {
    "0%": {
      filter: "brightness(0%)",
      transform: "scale(1.3)",
    },
    "100%": {
      filter: "brightness(50%)",
      transform: "scale(1)",
    },
  },
});
const Banner = (props) => {
  const { theme } = props;
  const classes = useStyles(theme);
  return (
    <>
      <div className={classes.root}>
        {theme.mode === "widescreen" ? (
          <img
            src={require("../../static/banPic.jpg")}
            alt="banner-me"
            className={classes.image}
          />
        ) : (
          <img
            src={require("../../static/banPic.jpg")}
            alt="banner-me"
            className={classes.image}
          />
        )}
        <div className={classes.heading}>
          <div className={classes.head1}>Hi, I'm Sanket</div>
          <div className={classes.head2}>
            I work with electronics, software and music
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
