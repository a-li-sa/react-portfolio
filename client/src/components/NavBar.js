import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Avatar, Link } from "@material-ui/core";

import logo from "../assets/logo.svg";

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
    <Grid container direction="column" className={classes.header}>
      <Box m={3}>
        <Link href="#" onClick={() => {
          document.getElementById('fp-nav').firstChild.firstChild.firstChild.click();
        }}>
          <Avatar alt="logo" src={logo} />
        </Link>
      </Box>
    </Grid>
  );
}
