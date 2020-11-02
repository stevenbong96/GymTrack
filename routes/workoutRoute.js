const router = require("express").Router();
const path = require("path");
const db = require("../models");

// GET routes to find all workout

// POST route to create workout
router.post("/api/workout", (req, res) => {
    let data = req.body
    console.log(req.body)
    db.Workout.create({
        name: data.name,
        sets: data.sets
    })
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

router.put("/api/workouts/:id", (req, res) => {
    let id = req.params.id;
    let data = req.body;
    db.Workout.findOneAndUpdate({_id: id}, {
        $push: {training: data}
    }, {new:true}
    ).then(dbUpdate => {
        res.send(dbUpdate)
    })
})


// DELETE route to delete workout
router.delete("/api/delete/:id", (req, res) => {
    db.Workout.deleteOne({
        _id: req.params.id
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