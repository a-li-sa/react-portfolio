import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Hidden, Typography, Box, Tooltip} from "@material-ui/core";
import {makeStyles, withStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: theme.spacing(2),
  },
  box: {
    textAlign: 'center',
    margin: theme.spacing(2),
  }
}));

const Text = (props) => {
  return (
    <Grid item>
      <Hidden smDown>
        <Typography variant={props.name === 'heading' ? 'h2' : 'h4'} style={{fontWeight: 300}}>
          {props.text}
        </Typography>
      </Hidden>
      <Hidden mdUp>
        <Typography variant="h2" style={{fontSize: props.name === 'heading' ? 30 : 24}}>
          {props.text}
        </Typography>
      </Hidden>
    </Grid>
  )
}

const TextOnlyTooltip = withStyles({
  tooltip: {
    backgroundColor: "black",
    fontSize: 14,
  }
})(Tooltip);

export const SkillsPage = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Box m={2}>
          <Text name="heading" text="Skills"/>
        </Box>
      </Grid>
      <Grid item xs={10} container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Box className={classes.box}>
            <Text text="Applications"/>
            <Text text={(
              <>
              <TextOnlyTooltip title="npm" placement="bottom">
                <span className={classes.icon}><i className="fab fa-npm"></i></span>
              </TextOnlyTooltip>
              <TextOnlyTooltip title="Git" placement="bottom">
                <span className={classes.icon}><i className="icon-git"></i></span>
              </TextOnlyTooltip>
              <TextOnlyTooltip title="Heroku" placement="bottom">
                <span className={classes.icon}><i className="icon-heroku"></i></span>
              </TextOnlyTooltip>
              </>
            )}/>
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.box}>
            <Text text="Databases"/>
            <Text text={(
              <>
              <TextOnlyTooltip title="MySql" placement="bottom">
                <span className={classes.icon}><i className="icon-mysql"></i></span>
              </TextOnlyTooltip>
              <TextOnlyTooltip title="MongoDB" placement="bottom">
                <span className={classes.icon}><i className="icon-mongodb"></i></span>
              </TextOnlyTooltip>
              </>
            )}/>
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.box}>
            <Text text="Frameworks"/>
            <Text text={(
              <>
              <TextOnlyTooltip title="React" placement="bottom">
                <span className={classes.icon}><i className="fab fa-react"></i></span>
              </TextOnlyTooltip>
              <TextOnlyTooltip title="Bootstrap" placement="bottom">
                <span className={classes.icon}><i className="icon-bootstrap"></i></span>
              </TextOnlyTooltip>
              <TextOnlyTooltip title="jQuery" placement="bottom">
                <span className={classes.icon}><i className="icon-jquery"></i></span>
              </TextOnlyTooltip>
              </>
            )}/>
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.box}>
            <Text text="Programming Languages"/>
            <Text text={(
              <>
              <TextOnlyTooltip title="HTML5" placement="bottom">
                <span className={classes.icon}><i className="fab fa-html5"></i></span>
              </TextOnlyTooltip>
              <TextOnlyTooltip title="CSS3" placement="bottom">
                <span className={classes.icon}><i className="fab fa-css3"></i></span>
              </TextOnlyTooltip>
              <TextOnlyTooltip title="Node" placement="bottom">
                <span className={classes.icon}><i className="fab fa-node-js"></i></span>
              </TextOnlyTooltip>
              <TextOnlyTooltip title="JavaScript" placement="bottom">
                <span className={classes.icon}><i className="fab fa-js-square"></i></span>
              </TextOnlyTooltip>
              </>
            )}/>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}
