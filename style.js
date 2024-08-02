const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const { name, email, age } = req.body;
  
  let errors = [];

  // Validate Name
  if (name.length < 3) {
    errors.push('Name must be at least 3 characters long.');
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push('Please enter a valid email address.');
  }

  // Validate Age
  if (age < 18) {
    errors.push('You must be at least 18 years old.');
  }

  if (errors.length > 0) {
    res.status(400).send(errors.join('<br>'));
  } else {
    res.send('Form submitted successfully!');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});