// This is a very simple web server
// It just says "OK" when you open /health

const express = require('express');  // Import express web framework
const app = express();               // Create an app

// Define one route (endpoint)
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });        // Respond with JSON
});

// Listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
