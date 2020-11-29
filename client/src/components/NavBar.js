import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import logo from "../assets/logo.svg";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  header: {
    minWidth: '100%',
    position: 'fixed',
    top: 0,
    alignItems: 'flex-end',
  },
  imageIcon: {
    display: 'flex',
    height: '50px',
  }
}));

export const NavBar = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" color="transparent" className={classes.header}>
      <Box m={3}>
        <Avatar alt="logo" src={logo} />
      </Box>
    </Grid>
  );
}
