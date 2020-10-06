import React, { useState } from "react";
import { TimeLineData } from "../../static/data/timelinedata";
import { makeStyles } from "@material-ui/core/styles";
import { BsChevronDoubleDown } from "react-icons/bs";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import { ContentCardLeft, ContentCardRight } from "./ContentCards";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: (props) => props.theme.space.s,
    marginTop: (props) => props.theme.space.s,
    zIndex: "0",
  },
  accordian: {
    boxShadow: "none",
    backgroundColor: (props) => props.theme.color.background,
    width: "100%",
  },
  accordianSummary: {
    padding: "0",
    width: (props) => (props.acc ? "100%" : "50%"),
    margin: (props) => (props.acc ? "0" : "0 25% 0 25%"),
    backgroundColor: (props) => props.theme.color.background,
    borderRadius: (props) => (props.acc ? "0" : "1em"),
    border: (props) => `1px solid ${props.theme.color.primary}`,

    "&:hover": {
      backgroundColor: (props) => props.theme.color.primary,
      color: (props) => props.theme.color.white,
    },

    transition:
      "width 1s, background-color 0.25s, border 0.25s, border-radius 0.25s, color 0.25s, margin 1s",
  },
  Icon: {
    padding: "0",
    marginRight: "5vw",
  },
  accordianHeading: {
    width: "100%",
    padding: (props) => props.theme.space.spacing.medium,
    textAlign: "center",
  },
  image: {
    height: "inherit",
    maxWidth: "400px",

    "@media only screen and (max-width: 1024px)": {
      maxWidth: "100%",
    },
  },
  closeAccordion: {
    textAlign: "center",
    border: "1px solid black",
    borderRadius: "1em",
    width: "200px",
    margin: "auto",

    "&:hover": {
      color: ({ theme }) => theme.color.white,
      backgroundColor: ({ theme }) => theme.color.primary,
    },

    transition: "color 0.25s, background-color 0.25s",
  },
}));

export default function CustomizedTimeline(props) {
  const { theme } = props;
  const [acc, setAcc] = useState(false);
  const classes = useStyles({ theme, acc });

  return (
    <div className={classes.root}>
      <Accordion expanded={acc} className={classes.accordian}>
        <AccordionSummary
          className={classes.accordianSummary}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => setAcc(!acc)}
          IconButtonProps={{ className: classes.Icon }}
        >
          <div className={classes.accordianHeading}>
            Want to know more? {acc ? null : <br />} Here's my journey!
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Timeline align="alternate">
            {TimeLineData.map((event, i) => (
              <TimelineItem key={i}>
                <TimelineOppositeContent>
                  <div>
                    {/* <img
                      className={classes.image}
                      src={require("../../static/pinkPic.jpg")}
                      alt={event.title}
                    /> */}
                  </div>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <BsChevronDoubleDown />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  {i % 2 === 0 ? (
                    <ContentCardLeft event={event} theme={theme} />
                  ) : (
                    <ContentCardRight event={event} theme={theme} />
                  )}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </AccordionDetails>
      </Accordion>
      {acc && (
        <div onClick={() => setAcc(false)} className={classes.closeAccordion}>
          Close!
        </div>
      )}
    </div>
  );
}
