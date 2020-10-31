const router = require("express").Router();
const path = require("path");
const db = require("../models");

// GET routes to find all workout
router.get("/", (req, res) => {
    db.Workout.find({})
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
    })
})

// POST route to create workout
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

// PUT route to update workout
// router.put("/update/:id", (req, res) => {
//     db.Workout.updateOne({
//         _id: mongojs.ObjectId(req.params.id)
//     })
//     .then(result => {
//         res.json(result);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).end();
//     })
// })

// DELETE route to delete workout
// router.delete("/delete/:id", (req, res) => {
//     db.Workout.deleteOne({
//         _id: mongojs.ObjectId(req.params.id)
//     })
//     .then(result => {
//         res.json(result);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).end();
//     })
// })

module.exports = router;