const mongoose = require("mongoose");
const express = require("express");

function initDatabase() {
  mongoose.set("strictQuery", false);

  db.mongoose
    .connect(
      "mongodb+srv://bissap:gerking123@cluster0.qpna6y2.mongodb.net/sadge?retryWrites=true&w=majority&authSource=admin",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Successfully connect to MongoDB.");
    });
  serverProcess();
}

initDatabase();
