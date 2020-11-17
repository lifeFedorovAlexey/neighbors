let axios = require("axios");

module.exports = {
  getUserInfo: async () => {
    return axios.get("/api/userinfo", { text: "text" });
  },

  updateNeihbors: async (neihbors) => {
    return axios.post("/api/updateNeihbors", { neihbors });
  },
};
