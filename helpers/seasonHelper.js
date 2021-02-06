const getSeasons = (data) => {
  let seasons = [];
  data.forEach((element) => {
    seasons.push({ name: element.name });
  });
  return seasons;
};

module.exports.getSeasons = getSeasons;
