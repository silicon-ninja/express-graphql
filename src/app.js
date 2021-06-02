const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
import 'dotenv';

const app = express();

app.use(bodyParser.json());
mongoose.connect(process.env.MongoURL, { useNewUrlParser: true });
app.get('/', (req, res, next) => {
  res.send('Hello this is working');
});

let Port = 8080 || process.env.PORT;
app.listen(`${Port}`, () => {
  console.log(`Listening to Port : ${Port}`);
});
