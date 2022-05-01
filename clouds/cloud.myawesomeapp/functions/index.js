const functions = require('firebase-functions');
const { initializeApp } = require('firebase/app');
const { getDatabase, set, ref } = require('firebase/database');
const express = require('express');
const app = express();
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBtdH5nFEr8biBPQNC9M1ho6D7KYb6BE1s',
  authDomain: 'myawesomeappdotorg.firebaseapp.com',
  databaseURL: 'https://myawesomeappdotorg-default-rtdb.firebaseio.com',
  projectId: 'myawesomeappdotorg',
  storageBucket: 'myawesomeappdotorg.appspot.com',
  messagingSenderId: '781395862437',
  appId: '1:781395862437:web:89d9bf74111cd8fe673e4c'
});

const database = getDatabase(firebaseApp);

function example() {
  set(ref(database, 'users/' + '1233'), {
    username: 'demo',
  });
}
app.get('/hello-world', (req,res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  example();
  res.json( 'hello from the whole world!');
});

exports.app = functions.https.onRequest(app);
