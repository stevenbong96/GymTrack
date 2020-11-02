const router = require("express").Router();
const path = require("path");
const db = require("../models");

// GET routes to find all workout
// router.get("/", (req, res) => {
//     db.Training.find({})
//     .then(result => {
//         res.json(result);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// })

// POST route to create training
router.post("/", ({body}, res) => {
    db.Workout.create(body)
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

// UPDATE route
router.put("/", (req, res) => {
    db.Training.findOneAndUpdate({
        _id: req.body.id
    },req.body, {
        new: true
    })
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

// DELETE route
router.delete("/", ({body}, res) => {
    db.Training.deleteOne({
        _id: body.id
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