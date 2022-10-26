const router = require("express").Router();
let Rider = require("../models/rider");

router.route("/").get((req, res) => {
  Rider.find()
    .then(rider => res.json(rider))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const newRider = new Rider({ email, password });

  newRider
    .save()
    .then(() => res.json("Rider added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
