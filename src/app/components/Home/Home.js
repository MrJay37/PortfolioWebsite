import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import skillsData from "../../static/data/skillsData";
import { MdQueueMusic } from "react-icons/md";
import { HiBriefcase, HiUser } from "react-icons/hi";

const useStyles = makeStyles({
  root: {
    padding: ({ theme }) => theme.home.pageMargin,
  },
  container: {
    display: "flex",
    flexDirection: ({ wm }) => (wm ? "row-reverse" : "column"),
    justifyContent: "center",
    alignItems: ({ wm }) => (wm ? "" : "center"),
  },
  image: {
    border: ({ theme }) => `3px solid ${theme.color.primary}`,
    maxWidth: "500px",
    width: "100%",
    height: "auto",
    borderRadius: "1em",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  text: {
    width: ({ wm }) => (wm ? "50%" : ""),
    padding: ({ theme }) => theme.home.textPadding,
  },
  sectionHeader: {
    fontSize: ({ theme }) => theme.fontSize.title,
    paddingBottom: ({ theme }) => theme.home.lineSpacing,
  },
  cardsContainer: {
    width: "100%",
    paddingTop: ({ theme }) => theme.home.cardsPadding,
    display: "flex",
    justifyContent: "space-around",
  },
  alink: {
    textDecoration: "none",
  },
  card: {
    outline: "none",
    minWidth: ({ theme }) => theme.home.cardWidth,
    backgroundColor: ({ theme }) => theme.color.primary,
    height: ({ theme }) => theme.home.cardHeight,
    padding: ({ theme }) => theme.home.cardPadding,
    borderRadius: "1em",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    color: ({ theme }) => theme.color.white,

    "&:hover": {
      transform: "scale(1.025)",
      textDecoration: "none",
    },

    transition: "transform 0.25s",
  },
  cardIcon: {
    fontSize: ({ theme }) => theme.home.cardIconFontSize,
  },
  skillBar: {
    padding: ({ theme }) => theme.home.skillBarPadding,
  },
  linkLabel: {
    paddingBottom: ({ theme }) => theme.home.linkLabelSpace,
  },
  statusBar: {
    width: "100%",
    height: "8px",
    backgroundColor: ({ theme }) => theme.color.black,
    borderRadius: "1em",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  statusComplete: {
    backgroundColor: ({ theme }) => theme.color.primary,
    height: "8px",
    borderRadius: "1em",
    zIndex: "2",
  },
  resumeButtonContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: ({ theme }) => theme.home.cardPadding,
  },
  resumeButton: {
    backgroundColor: "transparent",
    width: "50%",
    border: ({ theme }) => `2px solid ${theme.color.primary}`,
    textAlign: "center",
    padding: ({ theme }) => theme.home.lineSpacing,
    color: ({ theme }) => theme.color.black,
    textDecoration: "none",

    "&:focus": {
      border: ({ theme }) => `2px solid ${theme.color.primary}`,
    },
  },
});

const Home = (props) => {
  const { theme } = props;
  const wm = theme.mode === "widescreen" ? true : false;
  const classes = useStyles({ theme, wm });
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {!wm && <div className={classes.sectionHeader}>More about me?</div>}
        <div>
          <img
            src={require("../../static/picofMe.jpg")}
            alt="picofme"
            className={classes.image}
          />
          {wm && (
            <>
              <div className={classes.cardsContainer}>
                <Link className={classes.alink} to="about">
                  <div className={classes.card}>
                    <div>Work Exp</div>
                    <div className={classes.cardIcon}>
                      <HiUser />
                    </div>
                  </div>
                </Link>
                <Link className={classes.alink} to="projects">
                  <div className={classes.card}>
                    <div>Projects</div>
                    <div className={classes.cardIcon}>
                      <HiBriefcase />
                    </div>
                  </div>
                </Link>
                <Link className={classes.alink} to="music">
                  <div className={classes.card}>
                    <div>Music</div>
                    <div className={classes.cardIcon}>
                      <MdQueueMusic />
                    </div>
                  </div>
                </Link>
              </div>
              <div className={classes.resumeButtonContainer}>
                <a
                  className={classes.resumeButton}
                  href={require("../../static/Resume_Sanket_Jain.pdf")}
                  filename="Resume_Sanket_Jain.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <>Resume</>
                </a>
              </div>
            </>
          )}
        </div>
        <div className={classes.text}>
          {wm && <div className={classes.sectionHeader}>More about me?</div>}
          <p>
            I'm a Master of Science in Computer Engineering student from Jersey
            City, NJ, about to graduate this December from Stevens Institute of
            Technology!
          </p>
          <p>
            Currently, I work at{" "}
            <a
              href="https://www.contentstack.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              Contentstack{" "}
            </a>
            as a Front End Developer Intern.
          </p>
          <p>
            I'm looking for full time opportunities in Front End/ Full Stack
            Development roles to learn industrial development methods and
            techniques!
          </p>
          <div>
            {skillsData.map((skill, i) => (
              <div key={i} className={classes.skillBar}>
                <div className={classes.linkLabel}>{skill.name}</div>
                <div className={classes.statusBar}>
                  <div
                    className={classes.statusComplete}
                    style={{ width: skill.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {!wm && (
          <>
            <div className={classes.cardsContainer}>
              <Link className={classes.alink} to="about">
                <div className={classes.card}>
                  <div>Work Exp</div>
                  <div className={classes.cardIcon}>
                    <HiUser />
                  </div>
                </div>
              </Link>
              <Link className={classes.alink} to="projects">
                <div className={classes.card}>
                  <div>Projects</div>
                  <div className={classes.cardIcon}>
                    <HiBriefcase />
                  </div>
                </div>
              </Link>
              <Link className={classes.alink} to="music">
                <div className={classes.card}>
                  <div>Music</div>
                  <div className={classes.cardIcon}>
                    <MdQueueMusic />
                  </div>
                </div>
              </Link>
            </div>
            <div className={classes.resumeButtonContainer}>
              <a
                className={classes.resumeButton}
                href={require("../../static/Resume_Sanket_Jain.pdf")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <>Resume</>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
