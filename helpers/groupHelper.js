const getGroups = (data) => {
  let groups = [];
  data.forEach((element) => {
    groups.push({
      id: element._id,
      seasonId: element.seasonId,
      seasonName: element.seasonName,
      subjectId: element.subjectId,
      subjectName: element.subjectName,
      semester: element.semester,
      studyType: element.studyType,
      groupNumber: element.groupNumber,
      day: element.day,
      startTime: element.startTime,
      endTime: element.endTime,
      students: element.students,
    });
  });
  return groups;
};

module.exports.getGroups = getGroups;
