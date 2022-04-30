const functions = require("firebase-functions");
const express = require('express');
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const app = express();


app.get('/hello-world', (req,res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  res.json('hello from the whole world!')
})



exports.app = functions.https.onRequest(app);

