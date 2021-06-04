const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const graphqlRouter = require('./routes/graphql_route');
const app = express();

mongoose
  .connect(process.env.MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(`${Port}`, () => {
      console.log(`Listening to Port : ${Port}`);
    });
    console.log('Connected to Database Successfully');
  });
app.use(bodyParser.json());
app.use('/', graphqlRouter);

let Port = 8080 || process.env.PORT;
