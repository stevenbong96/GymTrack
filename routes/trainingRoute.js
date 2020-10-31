const router = require("express").Router();
const path = require("path");
const db = require("../models");

// GET routes to find all workout
router.get("/api/training", (req, res) => {
    db.Training.find({})
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
    })
})

// POST route to create training
router.post("/api/training", ({body}, res) => {
    db.Workout.create({})
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

module.exports = router;