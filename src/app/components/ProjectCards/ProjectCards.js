import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaGithub, FaYoutube } from "react-icons/fa";
import projectData from "../../static/data/projectData";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

const useStyles = makeStyles({
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
    width: "80%",
    maxWidth: ({ wm }) => (wm ? "1000px" : ""),
    margin: ({ theme }) => theme.cards.cardMargin,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "0.5em",
    overflow: "hidden",

    "&:hover": {
      transform: "scale(1.025)",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39)",
    },

    transition: "transform 0.25s, box-shadow 0.25s",
  },

  image: {
    width: "100%",
    height: "auto",
    maxHeight: "400px",
    objectFit: "cover",
    objectPosition: "0% 0%",
    display: "block",

    "&:hover": {
      filter: "brightness(50%)",
    },

    transition: "filter 0.25s",
  },

  cardHeader: {
    backgroundColor: ({ theme }) => theme.color.primary,
    color: ({ theme }) => theme.color.white,
    padding: "0",
  },

  subHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardHeaderTitle: {
    padding: ({ theme }) => theme.cards.headerPadding,
    backgroundColor: ({ theme }) => theme.color.primary,
    flexGrow: "1",
    fontSize: ({ theme }) => theme.cards.headerFontSize,
  },

  cardHeaderDate: {
    backgroundColor: ({ theme }) => theme.color.primary,
    width: ({ wm }) => (wm ? "100px" : "%"),
    textAlign: "right",
    padding: ({ theme }) => theme.space.xs,
  },
  accordionPaper: {
    backgroundColor: ({ theme }) => theme.color.background,
    padding: "0",
  },

  cardContent: {
    padding: ({ theme }) => theme.space.xs,
    display: ({ wm }) => (wm ? "flex" : ""),
    justifyContent: "space-between",
    fontSize: ({ theme }) => theme.cards.bulletsFontsize,
  },
  techList: {
    padding: "0",

    li: {
      display: "inline",
    },
  },
  techListItem: {
    listStyle: "none",
    display: ({ wm }) => (wm ? "" : "inline"),
  },
  descriptionContainer: {
    width: ({ wm }) => (wm ? "50%" : ""),
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    borderLeft: ({ theme, wm }) => (wm ? `1px solid ${theme.color.black}` : ""),
  },
  description: {
    paddingLeft: ({ theme, wm }) => (wm ? `${theme.space.s}` : ""),
  },
  footer: {
    backgroundColor: ({ theme }) => theme.color.black,
    color: ({ theme }) => theme.color.white,
    padding: ({ theme }) => theme.space.xs,
    display: ({ wm }) => (wm ? "flex" : ""),
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: ({ theme }) => theme.space.xs,
    fontSize: ({ theme }) => theme.cards.bulletsFontsize,
  },
  members: {},
  links: {
    textAlign: "right",
  },
  link: {
    padding: ({ theme }) => theme.cards.headerPadding,
    fontSize: ({ theme }) => theme.cards.headerFontSize,
    color: ({ theme }) => theme.color.white,
    textDecoration: "none",
  },
});

const ProjectCards = (props) => {
  const { theme } = props;
  const wm = theme.mode === "widescreen" ? true : false;
  const classes = useStyles({ theme, wm });

  return (
    <div className={classes.root}>
      <div className={classes.sectionHeader}>Projects</div>
      <div className={classes.container}>
        {projectData.map((card, i) => (
          <div key={i} className={classes.card}>
            <div className={classes.cardHeader}>
              <div className={classes.subHeader}>
                <div className={classes.cardHeaderTitle}>{card.title}</div>
                <div className={classes.cardHeaderDate}>{card.date}</div>
              </div>

              {card.image && card.url ? (
                <a href={card.url} target="_blank" rel="noopener noreferrer">
                  <img
                    className={classes.image}
                    src={require(`../../static/projectPictures/${card.image}`)}
                    alt={classes.title}
                  />
                </a>
              ) : card.image ? (
                <img
                  className={classes.image}
                  src={require(`../../static/projectPictures/${card.image}`)}
                  alt={classes.title}
                />
              ) : null}
            </div>
            <div className={classes.cardContent}>
              <div>
                <ul className={classes.techList}>
                  <li style={{ listStyle: "none" }}>Technology involved:</li>
                  <br />
                  {card.technology.map((tech, i) => (
                    <li key={i} className={classes.techListItem}>
                      {tech +
                        (!wm
                          ? i === card.technology.length - 1
                            ? ""
                            : ", "
                          : "")}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={classes.descriptionContainer}>
                <div className={classes.description}>{card.description}</div>
              </div>
            </div>
            <div className={classes.footer}>
              <div className={classes.members}>
                {card.members.length > 1 ? "Members" : "Member"}:{" "}
                {card.members.map((mem, i) =>
                  i === card.members.length - 1 ? mem : mem + ", "
                )}
              </div>
              <div className={classes.links}>
                {card.githubLink && (
                  <a
                    className={classes.link}
                    href={card.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                )}
                {card.youtubeLink && (
                  <a
                    className={classes.link}
                    href={card.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
