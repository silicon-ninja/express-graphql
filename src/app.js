const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const { buildSchema } = require('graphql');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();

const events = [];

app.use(bodyParser.json());
// mongoose.connect(process.env.MongoURL, { useNewUrlParser: true });
app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(`
    type Event {
      _id:ID!,
      Event_Name:String!
      Event_Description:String!
      Event_Price:Float!
      Date:String!
    }
    type RootQuery{
        events: [Event!]!
    }

    input EventInput{
      Event_Name:String!
      Event_Description:String!
      Event_Price:Float!
      Date:String!
    }

    type RootMutation{
      createEvent(eventInput:EventInput):Event
    }
    schema{
      query: RootQuery
      mutation: RootMutation
    }
    `),
    rootValue: {
      events: () => {
        return events;
      },
      createEvent: (args) => {
        const event = {
          _id: Math.random().toString,
          Event_Name: args.Event_Name,
          Event_Description: args.Event_Description,
          Event_Price: +args.Event_Price,
          Date: new Date().toISOString,
        };
        events.push(event);
      },
    },
    graphiql: true,
  })
);

let Port = 8080 || process.env.PORT;
app.listen(`${Port}`, () => {
  console.log(`Listening to Port : ${Port}`);
});
