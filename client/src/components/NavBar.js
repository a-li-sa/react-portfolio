import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            Alisa Poon
          </Button>
          <Typography variant="h6" className={classes.title} />
          <Button component={Link} to="/about" color="inherit">About</Button>
          <Button component={Link} to="/contact" color="inherit">Contact</Button>
          <Button component={Link} to="/portfolio" color="inherit">Portfolio</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
