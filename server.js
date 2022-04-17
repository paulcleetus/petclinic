'use strict';

const express = require('express');
const mongoose = require("mongoose");

// Constants
const PORT = 8081;
const vetController = require("./controllers/vets");

mongoose
  .connect("mongodb://mongodb:27017/?authMechanism=DEFAULT", {
    dbName: "pcleetus_db",
    user: "root",
    pass: "123456",
    useNewUrlParser: true
  })
  .then(() => {
    const app = express();
    app.use(express.json());

    app.get("/vets", vetController.findVets);
    app.post("/vets", vetController.createVet);
    app.get("/vets/:doctorID", vetController.findVet);
    app.patch("/vets/:doctorID", vetController.updateVet);
    app.delete("/vets/:doctorID", vetController.deleteVet);

    app.listen(PORT, () => {
      console.log(`Server has started at port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log("Database connection failed :( !", e);
  });
