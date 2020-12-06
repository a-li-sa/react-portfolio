import React from 'react';
import { Grid, Box } from "@material-ui/core";

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



