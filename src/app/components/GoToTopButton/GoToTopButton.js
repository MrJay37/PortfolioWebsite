import React, { useState } from "react";
import { BsChevronDoubleUp } from "react-icons/bs";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    top: ({ theme }) => theme.gototop.top,
    left: ({ theme }) => theme.gototop.left,
    position: "fixed",
    zIndex: "2",
    opacity: ({ scroll, innerHeight }) =>
      scroll > innerHeight / 2 ? "1" : "0",

    transition: "opacity 0.5s",
  },
  button: {
    backgroundColor: ({ theme }) => theme.color.black,
    position: "absolute",

    padding: ({ theme }) => theme.gototop.padding,
    borderRadius: "50%",
    border: ({ theme }) => `3px solid ${theme.color.primary}`,
  },
  buttonIcon: {
    color: ({ theme }) => theme.color.white,
  },
});
const GoToTopButton = (props) => {
  const { theme } = props;

  const [scroll, setScroll] = useState(0);

  window.addEventListener("scroll", () => setScroll(window.pageYOffset));
  const innerHeight = window.innerHeight;

  const classes = useStyles({ theme, scroll, innerHeight });

  return (
    <div className={classes.root}>
      <div
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        className={classes.button}
      >
        <BsChevronDoubleUp className={classes.buttonIcon} />
      </div>
    </div>
  );
};

export default GoToTopButton;
