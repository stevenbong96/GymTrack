const router = require("express").Router();
const path = require("path");
const db = require("../models");

// GET routes to find all workout
router.get("/", (req, res) => {
    db.Training.find({})
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
    })
})

// POST route to create training
router.post("/", ({body}, res) => {
    db.Workout.create({})
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

// UPDATE route
app.put("/update/:id", (req, res) => {
    db.Workout.updateOne({
        _id: mongojs.ObjectId(req.params.id)
    })
    .then(result => {
        res.json(result);
    })
    .catch(err => [
        console.log(err);
        res.status(500).end();
    ])
})

// DELETE route
app.delete("/delete/:id", (req, res) => {
    db.Workout.deleteOne({
        _id: mongojs.ObjectId(req.params.id)
    })
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

module.exports = router;