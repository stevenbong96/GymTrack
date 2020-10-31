const router = require("express").Router();
const path = require("path");
const db = require("../models")

// Front End Routes
// GET route to display Workout
router.get("/combinationWorkoutAndTraining", (req, res) => {
    db.Workout.find({})
    .populate("Training")
    .then(result => {
        res.render("index.handlebars", {

        })
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
    // res.send(path.join(__dirname, "index"))
})

module.exports = router;