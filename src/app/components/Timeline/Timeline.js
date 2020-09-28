import React from "react";
import { TimeLineData } from "../../static/data/timelinedata";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

const useStyles = makeStyles(() => ({
  contentDate: {},
  contentCardOdd: {
    border: "1px solid grey",
    borderRadius: "1em",
    padding: (theme) => theme.space.s,
    backgroundColor: (theme) => theme.color.white,
    maxWidth: "300px",
    float: "right",
  },
  contentCardEven: {
    border: "1px solid grey",
    borderRadius: "1em",
    padding: (theme) => theme.space.s,
    backgroundColor: (theme) => theme.color.white,
    maxWidth: "300px",
    float: "left",
  },
  eventTitle: {
    fontSize: (theme) => theme.fontSize.medium,
    paddingBottom: (theme) => theme.fontSize.medium,
  },
  eventDescription: {
    fontSize: (theme) => theme.fontSize.small,
  },
}));

export default function CustomizedTimeline(props) {
  const { theme } = props;
  const classes = useStyles(theme);

  return (
    <Timeline align="alternate">
      {TimeLineData.map((event) => (
        <TimelineItem key={event.id}>
          <TimelineOppositeContent>
            <div className={classes.contentDate}>{event.date}</div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div
              className={
                event.id % 2 === 1
                  ? classes.contentCardOdd
                  : classes.contentCardEven
              }
            >
              <div className={classes.eventTitle}>{event.eventTitle}</div>
              <div className={classes.eventDescription}>
                {event.eventDescription}
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
