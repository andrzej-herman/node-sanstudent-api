const router = require("express").Router();
const protected = require("../verifyToken");

const generateFakeStudents = () => {
  const students = [
    { id: 1, name: "Sandy Rosenbaum", album: 100201 },
    { id: 2, name: "Lydia Ullrich", album: 100202 },
    { id: 3, name: "Marsha Zulauf", album: 100203 },
    { id: 4, name: "Marsha Zulauf", album: 100204 },
    { id: 5, name: "Leticia Kertzmann", album: 100205 },
    { id: 6, name: "Stephen Stamm", album: 100206 },
    { id: 7, name: "Monica Prosacco", album: 100207 },
    { id: 8, name: "Leon Lind", album: 100208 },
    { id: 9, name: "Leon Kuhlman", album: 100209 },
    { id: 10, name: "Drew Prosacco", album: 100210 },
  ];
  return students;
};

// ! Get All Students
router.get("/students", protected, (req, res) => {
  const students = generateFakeStudents();
  res.json(students);
});

module.exports = router;
