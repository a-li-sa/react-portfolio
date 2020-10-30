import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

const Form = () => {

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
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          label="Subject"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="Message"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
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
            vertical: 'top',
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

export default Form;
