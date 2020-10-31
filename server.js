const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

const frontEndRoutes = require("./routes/frontEnd");
app.use("/", frontEndRoutes);

const workoutRoutes = require("./routes/workoutRoute");
app.use("/api/workout", workoutRoutes);

const trainingRoutes = require("./routes/trainingRoute");
app.use("/api/training", trainingRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
  