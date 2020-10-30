import React from 'react';
import TextField from '@material-ui/core/TextField';

const Textfield = (props) => {
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

export default Textfield;
