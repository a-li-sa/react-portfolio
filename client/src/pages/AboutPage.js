import React from 'react';
import Grid from "@material-ui/core/Grid";

import { TimeLine } from '../components';

export const AboutPage = () => {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={10}>
        <TimeLine />
      </Grid>
    </Grid>
  )
}

