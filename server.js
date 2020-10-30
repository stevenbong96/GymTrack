const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

// GET route
app.get("/", (req, res) => {
    db.User.find({})
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
    })
})

// POST route
app.post("/submit", ({body}, res) => {
    
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

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
  