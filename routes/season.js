const router = require("express").Router();
const protected = require("../verifyToken");
const Season = require("../model/Season");
const { seasonValidation } = require("../validation");

// ! Add Season
router.post("/addseason", protected, async (req, res) => {
  const { error } = seasonValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const season = new Season({
    name: req.body.name.trim(),
  });
  await season
    .save()
    .then(() => {
      res.status(200).send("ADDSEASON_OK");
    })
    .catch((err) => {
      res.status(400).send(`ADDSEASON_ERROR: ${err}`);
    });
});

// ! GetSeasons
router.get("/seasons", protected, async (req, res) => {
  const seasons = await Season.find()
    .exec()
    .then((data) => {
      res.json(data);
    });
});

module.exports = router;
