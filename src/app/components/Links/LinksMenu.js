import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinksData from "../../static/data/linksData";

const useStyles = makeStyles({
  root: {},
  listContainer: {
    padding: "0 0 0 15px",
    fontFamily: (theme) => theme.fontFamily,
  },
  link: {
    paddingTop: "15px",
    display: "list-item",
    listStyle: "none",
    color: (theme) => theme.color.black,
    textDecoration: "none",
  },
  li: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fontSize: (theme) => theme.fontSize.menuItem,
  },
  name: {
    padding: "0 0 4px 6px",
  },
});

const LinksMenu = (props) => {
  const { theme } = props;
  const classes = useStyles(theme);
  return (
    <div className={classes.root}>
      <ul className={classes.listContainer}>
        {LinksData.map((link, i) => (
          <a
            key={i}
            className={classes.link}
            href={link.link}
            onClick={props.closeDrawer}
          >
            <li className={classes.li}>
              <span className={classes.icon}>{link.icon}</span>
              <span className={classes.name}>{link.name}</span>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default LinksMenu;
