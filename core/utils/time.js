module.exports = {
  currentTime: function() {
    let date = new Date();
    let time =
      date.getFullYear() +
      "-" +
      parseInt(date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    return time;
  },
};
