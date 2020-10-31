const router = require("express").Router();
const path = require("path");

// Front End Routes
// GET route to display Workout
app.get("/workout", (req, res) => {
    res.sendFile(path.join(__dirname, ""));
})

// GET route to display Training
app.get("/training", (req, res) => {
    res.sendFile(path.join(__dirname, ""));
})

module.exoports = router;