let axios = require("axios");

module.exports = {
  getAuth: async () => {
    return axios.post("/api/test", { text: "text" });
  },
};
