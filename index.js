const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const sendMail = require('./mail.js');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

app.post('/email', (req,res) => {
  // send email here
  const { email, subject, text } = req.body
  console.log(req.body);
  sendMail(email, subject, text, (err, data) => {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
})

app.listen(PORT, () => {
  console.log('Server is starting on PORT, ', PORT);
})
