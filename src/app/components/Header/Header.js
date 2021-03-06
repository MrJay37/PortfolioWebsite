import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import HeaderAvatar from "../HeaderAvatar";
import Menu from "../Menu";
import { LinksMenu } from "../Links";
import { HiMenu } from "react-icons/hi";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles({
  root: {
    position: (props) =>
      props.scroll <= props.innerHeight ? "absolute" : "fixed",
    backgroundColor: (props) =>
      props.scroll <= props.innerHeight
        ? "transparent"
        : props.theme.color.black,
    width: "100%",
    left: "50%",
    right: "50%",
    marginLeft: "-50%",
    marginRight: "-50%",
    zIndex: "1",
    top: "0",
    color: (props) => props.theme.color.white,
    padding: "0",
    height: (props) => props.theme.space.header,
    transition: "background-color 0.5s, color 0.5s, position 0.5s",

    boxShadow: (props) =>
      props.scroll <= props.innerHeight
        ? "none"
        : "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headAvater: {
    margin: (props) => props.theme.space.spacing.small,
  },
  menuBar: {},
  drawerIcon: {
    fontSize: (props) => props.theme.fontSize.large,
    paddingTop: (props) => props.theme.space.xxs,
    paddingRight: (props) => props.theme.space.s,
  },
  drawerPaper: {
    backgroundColor: "rgba(190, 176, 148, 0.9)",
    width: "45%",
  },
  drawerMenu: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

const Header = (props) => {
  const { theme } = props;
  const [drawer, setDrawer] = useState(false);
  const [scroll, setScroll] = useState(0);
  let innerHeight;

  if (props.home) {
    window.addEventListener("scroll", () => setScroll(window.pageYOffset));
    innerHeight = window.innerHeight;
  }

  const classes = useStyles({ theme, scroll, innerHeight });

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.headAvater}>
          <HeaderAvatar {...props} />
        </div>
        {theme.mode === "widescreen" ? (
          <div className={classes.menuBar}>
            <Menu {...props} />
          </div>
        ) : (
          <div className={classes.drawerIcon}>
            {!drawer && <HiMenu onClick={() => setDrawer(true)} />}
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              anchor="right"
              open={drawer}
              onClose={() => setDrawer(false)}
            >
              <div className={classes.drawerMenu}>
                <Menu closeDrawer={() => setDrawer(false)} {...props} />
                <LinksMenu closeDrawer={() => setDrawer(false)} {...props} />
              </div>
            </Drawer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
