// Hardcoded secrets
const password = "12345";  

// eval usage (bad practice)
const userInput = "2+2";
eval(userInput);

// Unsanitized input (injection risk)
const express = require('express');
const app = express();
app.get('/unsafe', (req, res) => {
  res.send("Hello " + req.query.name);
});
