const Router = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const Event_Schema = require('../model/Event_Schema');
const { buildSchema } = require('graphql');
const graphqlRouter = Router();
const events = [];
graphqlRouter.use(
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
  }

  type RootMutation{
    createEvent(eventInput:EventInput):Event
  }
  schema{
    query: RootQuery
    mutation: RootMutation
  },
  `),
    rootValue: {
      events: () => {
        return Event_Schema.find()
          .then((result) => {
            return result.map((event) => {
              return { ...event._doc, _id: event._doc._id.toString() };
            });
          })
          .catch((err) => {
            console.log(err);
          });
      },
      createEvent: (args) => {
        const data_entry = new Event_Schema({
          Event_Name: args.eventInput.Event_Name,
          Event_Description: args.eventInput.Event_Description,
          Event_Price: args.eventInput.Event_Price,
        });
        data_entry
          .save()
          .then((result) => {
            console.log('Your Data is this => ', result);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
    graphiql: true,
  })
);

module.exports = graphqlRouter;
