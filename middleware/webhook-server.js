const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Endpoint to handle inbound messages
app.post('/webhooks/inbound', (req, res) => {
  console.log('Inbound Message Received:', req.body);
  res.status(200).end();
});

// Endpoint to handle message status updates
app.post('/webhooks/status', (req, res) => {
  console.log('Message Status Update:', req.body);
  res.status(200).end();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
