import React from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { TimeLine } from '../components';

export const AboutPage = () => {
  return (
      <Grid container justify="center" alignItems="center">
        <Grid item md={10}>
          <TimeLine />
            <Box mt={3} ml={3} mr={3} variant="outlined" component={Paper} p={1}>
              <Box style={{textAlign: "center"}}>
                <Typography variant="caption">
                  Whether it be helping an athlete stretch before a big game, caring for an elderly person with physical limitations, or volunteering at a non-profit,
                </Typography>
              </Box>
              <Box style={{textAlign: "center"}}>
                <Typography variant="caption">
                  I am most motivated when I am able to see the direct impact of my work to help others.
                </Typography>
              </Box>
            </Box>
        </Grid>
      </Grid>
  )
}



