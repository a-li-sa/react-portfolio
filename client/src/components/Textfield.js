import React from 'react';
import TextField from '@material-ui/core/TextField';

export const Textfield = (props) => {
  return (
    <TextField
      {...props}
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  )
}
