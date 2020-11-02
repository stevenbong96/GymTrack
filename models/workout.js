const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const workoutSchema = new Schema({
//   name: {
//     type: String,
//   },
//   training: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Training"
//     }
//   ]
// });

const workoutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  trainingName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  sets: {
    type: String,
  },
  reps: {
    type: String,
  },
  break: {
    type: String,
    required: true
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
