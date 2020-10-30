import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/email',{
      email,
      subject: `${name}: ${subject}`,
      text,
    })
      .then(res => {
        setName('');
        setEmail('');
        setSubject('');
        setText('');
      });
  }

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
          name={subject}
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
          name={text}
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
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
  );
}
