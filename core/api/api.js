let express = require("express");
const app = express();
const UTILS = require("../utils/time");
require("dotenv").config();

module.exports = {
  async start() {
    app.get("/api/test", (req, res) => {
      res.send("api work");
    });

    const port = process.env.SERVER_PORT;
    await app.listen(port, () => {
      console.log(UTILS.currentTime() + " - api запущен, на порту: " + port);
    });
  },
};
