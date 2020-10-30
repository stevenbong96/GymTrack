const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trainingSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  duration: {
    type: String,
  },
  sets: {
    type: String,
  },
  reps: {
    type: String,
  },
  break: {
    type: String,
  },
});

const Training = mongoose.model("Training", trainingSchema);

module.exports = Training;
