const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send('Hello this is working');
});

let Port = 8080;
app.listen(`${Port}`, () => {
  console.log(`Listening to Port : ${Port}`);
});
