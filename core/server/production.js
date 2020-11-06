require("dotenv").config();
const express = require("express");
const app = express();
const UTILS = require("../utils/time");

module.exports = {
  async start() {
    app.use("/", express.static("dist"));
    const port = process.env.FRONT_PORT;
    await app.listen(port, () => {
      console.log(UTILS.currentTime() + " - front запущен, на порту: " + port);
    });
  },
};
