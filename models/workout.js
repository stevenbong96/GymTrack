const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
  },
  training: [
    {
      type: Schema.Types.ObjectId,
      ref: "Training"
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
