const getSeasons = (data) => {
  let seasons = [];
  data.forEach((element) => {
    seasons.push({ id: element._id, name: element.name });
  });
  return seasons;
};

const getSeason = (data) => {
  return { id: data._id, name: data.name };
};

module.exports.getSeasons = getSeasons;
module.exports.getSeason = getSeason;
