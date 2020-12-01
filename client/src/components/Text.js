import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

export const Text = (props => {
  return (
    <Grid container justify="center" alignItems="center" style={{textAlign: props.name === "contact" ? "center" : "left"}}>
      <Grid item xs={8}>
        <Typography variant="h2">
          {props.text}
        </Typography>
      </Grid>
    </Grid>
  )
});
