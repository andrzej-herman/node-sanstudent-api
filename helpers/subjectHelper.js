const getSubjectsWithSemester = (data) => {
  let subjects = [];
  data.forEach((element) => {
    subjects.push({
      id: element._id,
      name: `${element.name} (Sem.${element.semester})`,
    });
  });
  return subjects;
};

const getSubjects = (data) => {
  let subjects = [];
  data.forEach((element) => {
    subjects.push({
      id: element._id,
      name: element.name,
    });
  });
  return subjects;
};

module.exports.getSubjectsWithSemester = getSubjectsWithSemester;
module.exports.getSubjects = getSubjects;
