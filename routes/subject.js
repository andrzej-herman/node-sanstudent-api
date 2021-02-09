const router = require("express").Router();
const protected = require("../verifyToken");
const Subject = require("../model/Subject");
const { subjectValidation } = require("../validation");
const {
  getSubjects,
  getSubjectsWithSemester,
} = require("../helpers/subjectHelper");

// ! Add Subject
router.post("/addsubject", protected, async (req, res) => {
  const { error } = subjectValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const subject = new Subject({
    name: req.body.name.trim(),
    semester: req.body.semester,
  });
  await subject
    .save()
    .then(() => {
      res.status(200).send("ADDSUBJECT_OK");
    })
    .catch((err) => {
      res.status(400).send(`ADDSUBJECT_ERROR: ${err}`);
    });
});

// ! Get Subjects
router.get("/subjects", protected, async (req, res) => {
  await Subject.find()
    .sort({ name: 1 })
    .exec()
    .then((data) => {
      const subjects = getSubjectsWithSemester(data);
      res.json(subjects);
    })
    .catch((err) => {
      console.log(err);
    });
});

// ! Get Subject By Semester
router.get("/subjects/:semester", protected, async (req, res) => {
  var sem = req.params.semester;
  await Subject.find({ semester: sem })
    .sort({ name: 1 })
    .exec()
    .then((data) => {
      const subjects = getSubjects(data);
      res.json(subjects);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
