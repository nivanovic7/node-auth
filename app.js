const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.set("view-engine", "ejs");

const dbURI =
  "mongodb+srv://admin-nikola:8zzcvyey9PoPublY@cluster0.7ez59.mongodb.net/node-auth?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.render("Home!");
});

app.get("/smoothies", (req, res) => {
  res.render("Smoothies Recipes!");
});
