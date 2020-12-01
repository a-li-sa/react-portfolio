import React from 'react'
import Grid from "@material-ui/core/Grid";

import {Form, Text} from '../components'

export const ContactPage = () => {
  return (
    <Grid container justify="center" alignItems="center" >
      <Grid item xs={9}>
        <Form />
      </Grid>
    </Grid>
  )
}
