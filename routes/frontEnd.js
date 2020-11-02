const router = require("express").Router();
const path = require("path");
const db = require("../models")

// Front End Routes
// GET route to display Workout
router.get("/", (req, res) => {
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

router.get("/workoutCard", (req, res) => {
    db.Workout.find({}).lean()
    // .populate("Training")
    .then(result => {
        console.log("HELLLOOOO")
        console.log(result);
        res.render("index.handlebars", 
        {workout: result})
        // res.render("workoutCard.handlebars", 
        // {workout: result})
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

module.exports = router;