import React, { useState } from 'react';
import {ThemeProvider, createMuiTheme, withStyles} from "@material-ui/core/styles";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Textfield } from './Textfield';
import axios from 'axios';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import Tooltip from "@material-ui/core/Tooltip";

export const Form = () => {
  const theme = createMuiTheme({
    palette: {
      primary: amber,
    },
  });
  const TextOnlyTooltip = withStyles({
    tooltip: {
      backgroundColor: "black",
      fontSize: 14,
    }
  })(Tooltip);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [snackbar, setSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/email',{
      email,
      subject: `${name}: ${subject}`,
      text,
    })
      .then(res => {
        clearStates();
        setSnackbar(true);
      });
  }

  const clearStates = () => {
    setName('');
    setEmail('');
    setSubject('');
    setText('');
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Textfield
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Name"
      />
      <Textfield
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
      />
      <Textfield
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        label="Subject"
      />
      <Textfield
        value={text}
        onChange={(e) => setText(e.target.value)}
        label="Message"
        multiline
        rows={5}
      />
      <TextOnlyTooltip title="Send your message!" placement="right">
        <IconButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={name === "" || email === "" || subject === "" || text === "" ? true : false}
        >
          <EmailIcon/>
        </IconButton>
      </TextOnlyTooltip>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackbar}
        autoHideDuration={2750}
        onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success">
          Your message has been sent.
        </MuiAlert>
      </Snackbar>
    </ThemeProvider>
  );
}
