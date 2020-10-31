const router = require("express").Router();
const path = require("path");
const db = require("../models")

// Front End Routes
// GET route to display Workout
router.get("/workout", (req, res) => {
    // res.sendFile(path.join(__dirname, "index"));
    res.send("CONNECTED");
})

// GET route to display Training
// router.get("/training", (req, res) => {
//     res.sendFile(path.join(__dirname, ""));
// })

module.exports = router;