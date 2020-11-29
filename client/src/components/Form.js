import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Textfield } from './Textfield';
import axios from 'axios';

export const Form = () => {

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
      <form>
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={name === "" || email === "" || subject === "" || text === "" ? true : false}
        >
          Submit
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={snackbar}
          autoHideDuration={2750}
          onClose={handleClose}>
          <MuiAlert onClose={handleClose} severity="success">
            Your message has been sent.
          </MuiAlert>
        </Snackbar>
      </form>
  );
}
