const express = require("express");
const router = express.Router();
const ctrlLocations = require("../controllers/locations");
const ctrlOthers = require("../controllers/others");

/* Locations pages */
router.get("/", ctrlLocations.homelist);
router.get("/location", ctrlLocations.locationInfo);
router.get("/location/review/new", ctrlLocations.addReview);

/* Other pages */
router.get("/about", ctrlOthers.about);
router.get("/login", ctrlOthers.login);
router.get("/register", ctrlOthers.register);
router.get("/infoHotels", ctrlOthers.infoHotel);
module.exports = router;
