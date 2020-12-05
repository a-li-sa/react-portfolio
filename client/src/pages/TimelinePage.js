import React from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box"

import { TimeLine } from '../components';

export const TimelinePage = () => {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item sm={10}>
        <Box m={5}>
          <TimeLine />
        </Box>
      </Grid>
    </Grid>
  )
}



