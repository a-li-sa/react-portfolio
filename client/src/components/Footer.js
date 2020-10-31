import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    alignItems: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar color="inherit" position="static" className={classes.footer} elevation={0}>
      <Toolbar variant="dense">
        <IconButton href="https://www.linkedin.com/in/alisa-poon/" target="_blank" color="inherit">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://github.com/a-li-sa" target="_blank" color="inherit">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://medium.com/@a_li_sa" target="_blank" color="inherit">
          <i className="fab fa-medium-m"></i>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
