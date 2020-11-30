import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

export const AboutText = () => {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={8}>
        <Typography variant="h2">
          My name is Alisa Poon, and I am a fullstack developer.
          Born and raised in San Francisco but constantly changing,
          I always seek new opportunities to learn and grow.
          I am excited to be a part of projects that will enhance productivity and creativity.
        </Typography>
      </Grid>
    </Grid>
  )
}
