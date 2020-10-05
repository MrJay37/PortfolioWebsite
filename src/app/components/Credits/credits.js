import React from "react";
import { makeStyles } from "@material-ui/core";
import CreditsData from "../../static/data/creditsData";
import { RiCodeSLine, RiCodeSSlashLine } from "react-icons/ri";

const useStyles = makeStyles({
  root: {
    paddingTop: (theme) => theme.space.header,
    paddingBottom: (theme) => theme.space.header,
    textAlign: "center",
    width: "100%",
    backgroundColor: (theme) => theme.color.black,
    color: (theme) => theme.color.white,
  },
  link: {
    fontSize: (theme) => theme.fontSize.small,
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  listHeader: {
    fontSize: (theme) => theme.fontSize.medium,
    margin: (theme) => theme.space.xs,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  hr: {
    backgroundColor: (theme) => theme.color.white,
    width: "50%",
  },
});

const Credits = (props) => {
  const { theme } = props;
  const classes = useStyles(theme);

  return (
    <>
      <div className={classes.root}>
        <div>
          <RiCodeSLine />
        </div>
        <div className={classes.listHeader}>
          <RiCodeSLine /> &nbsp;Credit where credit's due &nbsp;
          <RiCodeSSlashLine />
        </div>
        <hr className={classes.hr} />
        {CreditsData.map((credit) => (
          <div className={classes.link} key={credit.name}>
            <RiCodeSLine />
            &nbsp;
            {credit.text}
            &nbsp;
            <RiCodeSSlashLine />
          </div>
        ))}
        <div>
          <RiCodeSSlashLine />
        </div>
      </div>
    </>
  );
};

export default Credits;
