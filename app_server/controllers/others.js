//* GET home page */
const about = function (req, res) {
  res.render("generic-text", { title: "About" });
};
const login = function (req, res) {
  res.render("locations-login", { title: "Login" });
};
const register = function (req, res) {
  res.render("locations-register", { title: "Register" });
};

const infoHotel = function (req, res) {
  res.render("location-infoHotels", { title: "Info" });
};

module.exports = {
  about,
  login,
  register,
  infoHotel,
};
