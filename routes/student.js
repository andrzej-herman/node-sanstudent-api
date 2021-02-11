const router = require("express").Router();
const protected = require("../verifyToken");
const Student = require("../model/Student");

// ! Add Students
router.post("/addstudent", protected, async (req, res) => {
  const student = new Student({
    firstname: req.body.firstName.trim(),
    lastname: req.body.lastName.trim(),
    album: req.body.album.trim(),
    email: req.body.email.trim(),
    github: req.body.gitHub.trim(),
    comments: "",
  });

  await student
    .save()
    .then(() => {
      res.status(200).send("ADDCODE_OK");
    })
    .catch((err) => {
      res.status(400).send(`ADDCODE_ERROR: ${err}`);
    });
});

// // ! Get All Students
// router.get("/test", (req, res) => {
//   const students = generateTestStudents();
//   res.json(students);
// });

module.exports = router;
