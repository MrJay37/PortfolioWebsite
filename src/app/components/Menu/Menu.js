import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { HiBriefcase, HiUser, HiOutlineMail, HiDownload } from "react-icons/hi";

const menuIcons = [
  {
    id: 0,
    name: "About",
    link: "#/about",
    icon: <HiUser style={{ margin: "0", padding: "0" }} />,
  },
  {
    id: 1,
    name: "Projects",
    link: "#/projects",
    icon: <HiBriefcase style={{ margin: "0", padding: "0" }} />,
  },
  {
    id: 2,
    name: "Contact",
    link: "",
    icon: <HiOutlineMail style={{ margin: "0", padding: "0" }} />,
  },
];

const useStyles = makeStyles({
  root: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    width: (props) => (props.wm ? "auto" : "150px"),
    fontFamily: (props) => props.theme.fontFamily,
  },
  li: {
    display: (props) => (props.wm ? "inline-block" : "list-item"),
    margin: (props) => props.theme.space.spacing.medium,
    padding: (props) => props.theme.space.spacing.small,
    paddingTop: (props) => (props.wm ? "0" : props.theme.space.s),
    cursor: "pointer",
  },
  a: {
    display: "flex",
    alignItems: "center",
    color: "inherit",
    textDecoration: "none",
  },
  span: {
    margin: (props) => props.theme.space.spacing.headerIcon,
    fontSize: (props) => props.theme.fontSize.medium,
  },
  closeDrawIcon: {
    fontSize: (props) => props.theme.fontSize.large,
    transform: "rotate(-90deg)",
    margin: (props) => props.theme.space.xs,
  },
  breaker: {
    padding: "0",
    margin: "0",
    backgroundColor: "black",
    borderColor: "black",
  },
});
const Menu = (props) => {
  const { theme } = props;
  const wm = theme.mode === "widescreen" ? true : false;
  const classes = useStyles({ theme, wm });

  return (
    <div>
      {wm ? null : (
        <>
          <HiDownload
            className={classes.closeDrawIcon}
            onClick={props.closeDrawer}
          />
          <hr className={classes.breaker} />
        </>
      )}
      <ul className={classes.root}>
        {menuIcons.map((menu) => (
          <li key={menu.id} className={classes.li} onClick={props.closeDrawer}>
            {menu.link ? (
              <a href={menu.link} className={classes.a} onClick={menu.onClick}>
                <span className={classes.span}>{menu.icon}</span>
                <span>{menu.name}</span>
              </a>
            ) : (
              <div
                className={classes.a}
                onClick={() =>
                  document.getElementById("contact").scrollIntoView()
                }
              >
                <span className={classes.span}>{menu.icon}</span>
                <span>{menu.name}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
