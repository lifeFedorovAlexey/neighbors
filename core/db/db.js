const mongoose = require("mongoose");
const UTILS = require("../utils/time");
require("dotenv").config();

module.exports = {
  connect: function() {
    mongoose.connect(
      "mongodb://localhost/" + process.env.DB_NAME,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      function(err) {
        if (err)
          throw console.log(
            UTILS.currentTime() + " - ошибка подключения к db " + err
          );
        console.log(UTILS.currentTime() + " - подключен к db");
      }
    );
  },
};
