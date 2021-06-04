const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  Event_Name: {
    type: String,
    required: true,
  },
  Event_Description: {
    type: String,
    required: true,
  },
  Event_Price: {
    type: Number,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

module.exports = mongoose.model(`express-graphql`, eventSchema);
