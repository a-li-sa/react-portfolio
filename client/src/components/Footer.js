import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar';
import Grid from "@material-ui/core/Grid";
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import resume from '../assets/resume.pdf'

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    alignItems: 'flex-end',
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" color="transparent" className={classes.footer}>
      <Tooltip title="Resume" placement="top">
        <IconButton target="_blank" href={resume} color="inherit">
          <AttachFileIcon/>
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn" placement="top">
        <IconButton href="https://www.linkedin.com/in/alisa-poon/" target="_blank" color="inherit">
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub" placement="top">
        <IconButton href="https://github.com/a-li-sa" target="_blank" color="inherit">
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Medium" placement="top">
        <IconButton href="https://medium.com/@a_li_sa" target="_blank" color="inherit">
          <i className="fab fa-medium-m"></i>
        </IconButton>
      </Tooltip>
    </Grid>
  );
}
