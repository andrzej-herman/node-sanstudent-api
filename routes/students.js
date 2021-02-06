const router = require("express").Router();
const protected = require("../verifyToken");

const generateFakeStudents = () => {
  const students = [
    { id: 1, name: "Sandy Rosenbaum", album: 100201 },
    { id: 2, name: "Lydia Ullrich", album: 100202 },
    { id: 3, name: "Marsha Zulauf", album: 100203 },
    { id: 4, name: "Brad Schaden", album: 100204 },
    { id: 5, name: "Leticia Kertzmann", album: 100205 },
    { id: 6, name: "Stephen Stamm", album: 100206 },
    { id: 7, name: "Monica Prosacco", album: 100207 },
    {
      id: 8,
      name: "Leon Lind",
      album: 100208,
    },
    { id: 9, name: "Leon Kuhlman", album: 100209 },
    { id: 10, name: "Drew Prosacco", album: 100210 },
  ];
  return students;
};

const generateTestStudents = () => {
  const students = [
    { id: 11, name: "Howard Davis", album: 100401 },
    { id: 12, name: "Stanley Wilkinson", album: 100402 },
    { id: 13, name: "Johanna Denesik", album: 100403 },
    { id: 14, name: "Billie Nader", album: 100404 },
    { id: 15, name: "Jackie Rutherford", album: 100405 },
    { id: 16, name: "Daniel Luettgen", album: 100406 },
    { id: 17, name: "Clyde Keebler", album: 100407 },
    { id: 18, name: "Brendan Schumm", album: 100408 },
    { id: 19, name: "Norma Vandervort", album: 100409 },
    { id: 20, name: "Muriel Donnelly", album: 100410 },
  ];
  return students;
};

// ! Get All Students
router.get("/students", protected, (req, res) => {
  const students = generateFakeStudents();
  res.json(students);
});

// ! Get All Students
router.get("/test", (req, res) => {
  const students = generateTestStudents();
  res.json(students);
});

module.exports = router;
