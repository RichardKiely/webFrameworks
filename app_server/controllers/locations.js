/* GET 'home' page */
const homelist = function (req, res) {
  res.render("locations-list", {
    title: "Hotel Finder - find a place to have your wedding",
    pageHeader: {
      title: "Hotel Finder",
      strapline: "Find hotels that cater for weddings near you!",
    },
    locations: [
      {
        name: "Brandon Hotel",
        address: "Prince's St, Tralee, Co. Kerry, V92 PVK6",
        rating: 5,
        facilities: ["Dance Hall", "Good Food ", "Premium wedding room"],
        cost: "€100",
      },
      {
        name: "Ballygarry Hotel",
        address: "Leebrook, Tralee, Co. Kerry, V92 W279",
        rating: 2,
        facilities: ["Chapel", "Excellent Food", "Premium service"],
        cost: "€200",
      },
      {
        name: "Meadowlands Hotel",
        address: "Oakpark, Tralee, Co. Kerry",
        rating: 1,
        facilities: ["DJ", "Food", "Premium rooms"],
        cost: "€99",
      },
    ],
  });
};

/* GET 'Location info' page */
const locationInfo = function (req, res) {
  res.render("location-info", { title: "Location info" });
};
/* GET 'Add review' page */
const addReview = function (req, res) {
  res.render("location-review-form", { title: "Add review" });
};

/* GET 'Location info' page */
const infoHotel = function (req, res) {
  res.render("location-infoHotel", {
    title: "Hotel info - find a hotel that caters for weddings",
    pageHeader: {
      title: "Hotel Finder",
      strapline: "Find hotels near you!",
    },
  });
};

module.exports = {
  homelist,
  locationInfo,
  addReview,
  infoHotel,
};
