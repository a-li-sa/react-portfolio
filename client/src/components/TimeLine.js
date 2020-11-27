import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  pos: {
    fontSize: '14px',
  }
}));

const TimeLine = () => {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <i className="fas fa-school"></i>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h2">
              Student at UC Berkeley Extension
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              June 2020 - Present
            </Typography>
            <Typography variant="body2" component="p">
              Berkeley Coding Boot Camp
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <i className="fas fa-hands-helping"></i>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h2">
              Intern at San Francisco City Impact Leadership School
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              August 2019 - May 2020
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <i className="fas fa-graduation-cap"></i>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h2">
              Graduate from UC Davis
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              March 2019
            </Typography>
            <Typography variant="body2" component="p">
              Neurobiology, Physiology, and Behavior, B.S.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <i className="fab fa-accessible-icon"></i>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h2">
              Personal Care Aide at Carlton Senior Living
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              August 2018 - July 2019
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <i className="fas fa-futbol"></i>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h2">
              Student Intern at UC Davis Sports Medicine
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              March 2017 - March 2019
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <i className="fas fa-ambulance"></i>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h2">
              Student at University of San Francisco
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              July 2016 - August 2016
            </Typography>
            <Typography variant="body2" component="p">
              Emergency Medical Technician Program
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default TimeLine;
