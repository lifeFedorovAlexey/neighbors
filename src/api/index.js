let axios = require("axios");

module.exports = {
  getUserInfo: async () => {
    return axios.get("/api/userinfo");
  },

  updateNeihbors: async (neighbors) => {
    return axios.post("/api/updateNeighbors", { neighbors });
  },

  getNeighbors: async () => {
    return axios.get("/api/neighbors");
  },

  updateNeighbor: async (neighbor) => {
    return axios.post("/api/updateNeighbor", { neighbor });
  },
};
