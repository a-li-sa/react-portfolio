import React from 'react';
import {createMuiTheme, ThemeProvider, withStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import amber from "@material-ui/core/colors/amber";

const theme = createMuiTheme({
  palette: {
    primary: amber,
  },
});

const StyledTimelineDot = withStyles({
  root: {
    boxShadow: 'none',
  },
})(TimelineDot);

export const TimeLine = () => {
  return (
    <ThemeProvider theme={theme}>
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot color="primary">
            <i className="fas fa-school"></i>
          </StyledTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box p={1} component={Paper} variant="outlined">
            <Typography variant="button" component="h2">
              Student at UC Berkeley Extension
            </Typography>
            <Typography variant="overline" color="textSecondary">
              June 2020 - Present
            </Typography>
            <Typography variant="body2" component="p">
              Berkeley Coding Boot Camp
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot color="primary">
            <i className="fas fa-hands-helping"></i>
          </StyledTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box p={1} component={Paper} variant="outlined">
            <Typography variant="button" component="h2">
              Intern at San Francisco City Impact Leadership School
            </Typography>
            <Typography variant="overline" color="textSecondary">
              August 2019 - May 2020
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot color="primary">
            <i className="fas fa-graduation-cap"></i>
          </StyledTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box p={1} component={Paper} variant="outlined">
            <Typography variant="button" component="h2">
              Graduate from UC Davis
            </Typography>
            <Typography variant="overline" color="textSecondary">
              March 2019
            </Typography>
            <Typography variant="body2" component="p">
              Neurobiology, Physiology, and Behavior, B.S.
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot color="primary">
            <i className="fab fa-accessible-icon"></i>
          </StyledTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box p={1} component={Paper} variant="outlined">
            <Typography variant="button" component="h2">
              Personal Care Aide at Carlton Senior Living
            </Typography>
            <Typography variant="overline" color="textSecondary">
              August 2018 - July 2019
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot color="primary">
            <i className="fas fa-futbol"></i>
          </StyledTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box p={1} component={Paper} variant="outlined">
            <Typography variant="button" component="h2">
              Student Intern at UC Davis Sports Medicine
            </Typography>
            <Typography variant="overline" color="textSecondary">
              March 2017 - March 2019
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot color="primary">
            <i className="fas fa-ambulance"></i>
          </StyledTimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Box p={1} component={Paper} variant="outlined">
            <Typography variant="button" component="h2">
              Student at University of San Francisco
            </Typography>
            <Typography variant="overline" color="textSecondary">
              July 2016 - August 2016
            </Typography>
            <Typography variant="body2" component="p">
              Emergency Medical Technician Program
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </ThemeProvider>
  );
}
