const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgtan');
const items = require('./routes/api/items');
const path = require('path');

const app = express();

app.use(logger('dev'));
// Bodyparser middleware
app.use(bodyParser.json());

// db config
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('mongodb connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
