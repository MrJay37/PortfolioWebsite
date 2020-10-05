import React from "react";
import educationData from "../../static/data/educationData";
import { makeStyles } from "@material-ui/core/styles";
import { BsClock, BsCheck } from "react-icons/bs";

const useStyles = makeStyles(() => ({
  root: {
    padding: ({ theme }) => theme.cards.pageMargin,
  },
  sectionHeader: {
    fontSize: ({ theme }) => theme.fontSize.title,
    padding: ({ theme }) => theme.cards.sectionHeaderPadding,
    textAlign: "left",
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
    padding: ({ theme }) => theme.cards.headerPadding,
    display: ({ wm }) => (wm ? "flex" : "block"),
    justifyContent: "space-between",
  },
  studyDetails: {
    marginBlockEnd: "1em",
    fontSize: ({ theme }) => theme.cards.bulletsFontsize,
  },
  graduated: {
    margin: "0 0 0 auto",
    width: ({ theme, wm }) => (wm ? "150px" : "40%"),
    border: "1px solid green",
    color: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  underway: {
    margin: "0 0 0 auto",
    width: ({ theme, wm }) => (wm ? "150px" : "40%"),
    border: ({ theme }) => `1px solid ${theme.color.primary}`,
    color: ({ theme }) => theme.color.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  cardFooter: {},
}));
const EducationCards = (props) => {
  const { theme } = props;
  const wm = theme.mode === "widescreen" ? true : false;
  const classes = useStyles({ theme, wm });

  return (
    <div className={classes.root}>
      <div className={classes.sectionHeader}>Education</div>
      <div className={classes.container}>
        {educationData.map((card, i) => (
          <div key={i} className={classes.card}>
            <div className={classes.cardHeader}>
              <div className={classes.cardHeaderTitle}>
                <div className={classes.cardHeaderTitleHeader}>
                  {card.schoolName}
                </div>
                <div className={classes.cardHeaderTitleSubHeader}>
                  {card.schoolAddress}
                </div>
              </div>
              <div className={classes.cardHeaderDates}>
                <div>From: {card.fromDate}</div>
                <div>To: {card.toDate}</div>
              </div>
            </div>
            <div className={classes.cardBody}>
              <div className={classes.studyDetails}>
                <div>Degree: {card.degree}</div>
                <div>Program: {card.program}</div>
              </div>
              <div
                className={
                  card.graduated ? classes.graduated : classes.underway
                }
              >
                {card.graduated ? (
                  <>
                    {" "}
                    <BsCheck /> GRADUATED{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    <BsClock /> UNDERWAY
                  </>
                )}
              </div>
            </div>
            <div>{card.keyEvents}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationCards;
