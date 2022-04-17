const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  prefix: String,
  firstname: String,
  lastname: String,
  clinicName: String,
  doctorID: String
});

module.exports = mongoose.model("Vet", schema);