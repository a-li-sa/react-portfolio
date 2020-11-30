import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box"
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import resume from '../assets/resume.pdf'

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    bottom: 0,
    alignItems: 'flex-end',
  },
}));

const TextOnlyTooltip = withStyles({
  tooltip: {
    backgroundColor: "black",
    fontSize: 14,
  }
})(Tooltip);

export const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="flex-end">
      <Grid xs={2} item container direction="column" className={classes.footer}>
        <Box mr={2}>
          <TextOnlyTooltip title="Resume" placement="left">
            <IconButton target="_blank" href={resume} color="inherit">
              <AttachFileIcon/>
            </IconButton>
          </TextOnlyTooltip>
        </Box>
        <Box mr={2}>
          <TextOnlyTooltip title="LinkedIn" placement="left">
            <IconButton href="https://www.linkedin.com/in/alisa-poon/" target="_blank" color="inherit">
              <LinkedInIcon />
            </IconButton>
          </TextOnlyTooltip>
        </Box>
        <Box mr={2}>
          <TextOnlyTooltip title="GitHub" placement="left">
            <IconButton href="https://github.com/a-li-sa" target="_blank" color="inherit">
              <GitHubIcon />
            </IconButton>
          </TextOnlyTooltip>
        </Box>
        <Box mr={2} mb={2}>
          <TextOnlyTooltip title="Medium" placement="left">
            <IconButton href="https://medium.com/@a_li_sa" target="_blank" color="inherit"><i className="fab fa-medium-m"></i>
            </IconButton>
          </TextOnlyTooltip>
        </Box>
      </Grid>
    </Grid>
  );
}
