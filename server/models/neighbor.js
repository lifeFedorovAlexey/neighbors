let mongoose = require("mongoose");
const Schema = mongoose.Schema;

let neighbor = new Schema({
  id: String,
  first_name: String,
  last_name: String,
  house: String,
});

module.exports = mongoose.model("neighbors", neighbor);
