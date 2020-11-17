const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let User = new Schema({
  id: Number,
  username: String,
  familyName: String,
  givenName: String,
  profileUrl: String,
  photo: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("user", User);
