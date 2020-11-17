let mongoose = require("mongoose");
const Schema = mongoose.Schema;

let neighbor = new Schema({
  id: String,
  first_name: String,
  last_name: String,
  housing: String,
  front_door: String,
  stage: String,
  apartment_number: {
    type: String,
    default: "",
  },
  link_vk: String,
  owner: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("neighbors", neighbor);
