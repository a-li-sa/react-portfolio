import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Alisa Poon" component={Link} to="/" {...a11yProps(0)} />
          <Typography variant="h6" className={classes.title} />
          <Tab label="About" component={Link} to="/about" {...a11yProps(1)} />
          <Tab label="Contact" component={Link} to="/contact" {...a11yProps(2)} />
          <Tab label="Portfolio" component={Link} to="/portfolio" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
    </div>
  );
}
