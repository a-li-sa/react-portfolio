import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

export const Text = (props => {
  return (
    <Grid container justify="center" alignItems="center" style={{textAlign: props.name === "contact" ? "center" : "left"}}>
        <Grid item xs={8}>
          <Hidden smDown>
            <Typography variant="h2">
              {props.text}
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography variant="h2" style={{fontSize: 30}}>
              {props.text}
            </Typography>
          </Hidden>
        </Grid>
    </Grid>
  )
});
