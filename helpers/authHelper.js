const getInitials = (user) => {
  return `${user.firstname.substr(0, 1).toUpperCase()}${user.lastname
    .substr(0, 1)
    .toUpperCase()}`;
};

module.exports.getInitials = getInitials;
