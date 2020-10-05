import React from "react";
import workData from "../../static/data/workData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: ({ theme }) => theme.cards.pageMargin,
  },
  sectionHeader: {
    fontSize: ({ theme }) => theme.fontSize.title,
    padding: ({ theme }) => theme.cards.sectionHeaderPadding,
    textAlign: "right",
  },
  container: {
    paddingTop: ({ theme }) => theme.space.s,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    margin: ({ theme }) => theme.cards.cardMargin,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    width: "80%",
    borderRadius: "0.5em",
    overflow: "hidden",

    "&:hover": {
      transform: "scale(1.025)",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39)",
    },

    transition: "transform 0.25s, box-shadow 0.25s",
  },
  cardHeader: {
    display: ({ wm }) => (wm ? "flex" : "block"),
    justifyContent: "space-between",
  },
  cardHeaderTitle: {
    padding: ({ theme }) => theme.cards.headerPadding,
    flexGrow: "1",
    backgroundColor: ({ theme }) => theme.color.primary,
    color: ({ theme }) => theme.color.white,
  },
  cardHeaderTitleHeader: {
    fontSize: ({ theme }) => theme.cards.headerFontSize,
  },
  cardHeaderTitleSubHeader: {
    fontSize: ({ theme }) => theme.cards.subHeaderFontSize,
  },
  cardHeaderDates: {
    padding: ({ theme }) => theme.cards.headerPadding,
    backgroundColor: ({ theme }) => theme.color.black,
    color: ({ theme }) => theme.color.white,
    width: ({ theme, wm }) => (wm ? "150px" : "100%"),
    textAlign: ({ wm }) => (wm ? "right" : "left"),
    fontSize: ({ theme }) => theme.cards.subHeaderFontSize,
  },
  cardBody: {
    padding: ({ theme }) => theme.space.xs,
  },
  ul: {
    padding: ({ theme }) => theme.cards.bulletsPadding,
    fontSize: ({ theme }) => theme.cards.bulletsFontsize,
  },
  cardFooter: {},
});

export const WorkExCards = (props) => {
  const { theme } = props;
  const wm = theme.mode === "widescreen" ? true : false;
  const classes = useStyles({ theme, wm });
  return (
    <div className={classes.root}>
      <div className={classes.sectionHeader}>Work</div>
      <div className={classes.container}>
        {workData.map((card, i) => (
          <div key={i} className={classes.card}>
            <div className={classes.cardHeader}>
              <div className={classes.cardHeaderTitle}>
                <div className={classes.cardHeaderTitleHeader}>
                  {card.employer}
                </div>
                <div className={classes.cardHeaderTitleSubHeader}>
                  {card.role}
                </div>
              </div>
              <div className={classes.cardHeaderDates}>
                <div>From: {card.fromDate}</div>
                <div>To: {card.toDate}</div>
              </div>
            </div>
            <ul className={classes.ul}>
              {card.description.map((job, i) => (
                <li key={i}>{job}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExCards;
