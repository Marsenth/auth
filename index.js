const auth = {
  login: function (user, password) {
    return !!user && !!password;
  }
};

module.exports = auth;
