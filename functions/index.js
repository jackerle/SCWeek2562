const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
// build multiple CRUD interfaces:

app.get('/modals', (req, res) => {
  res.sendFile('modals.js')
});

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);