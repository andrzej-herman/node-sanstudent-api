const router = require("express").Router();
const Group = require("../model/Group");
const protected = require("../verifyToken");
const { getGroups } = require("../helpers/groupHelper");

// ! Add Create new Group
router.post("/create", protected, async (req, res) => {
  const group = new Group({
    userId: req.body.userId,
    seasonId: req.body.seasonId,
    seasonName: req.body.seasonName,
    subjectId: req.body.subjectId,
    subjectName: req.body.subjectName,
    semester: req.body.semester,
    studyType: req.body.studyType,
    groupNumber: req.body.groupNumber,
    day: req.body.day,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
  });

  await group
    .save()
    .then(() => {
      res.status(200).send("CREATEGROUP_OK");
    })
    .catch((err) => {
      res.status(400).send(`CREATEGROUP_ERROR: ${err}`);
    });
});

// ! Get User Groups
router.get("/groups/:userid", protected, async (req, res) => {
  var userid = req.params.userid;
  await Group.find({ userId: userid })
    .exec()
    .then((data) => {
      console.log(data);
      const groups = getGroups(data);
      res.json(groups);
    })
    .catch((err) => {
      console.log(err);
    });
});

// ! Get User Groups
router.get("/groups", protected, async (req, res) => {
  var userid = req.params.userid;
  await Group.find()
    .exec()
    .then((data) => {
      const groups = getGroups(data);
      res.json(groups);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
