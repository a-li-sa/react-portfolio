import React from 'react';
import { AnimatedLogo } from '../components/'
import Grid from "@material-ui/core/Grid";

export const HomePage = () => {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <AnimatedLogo/>
      </Grid>
    </Grid>
  )
}
