'use strict';

var API = require('./API');

module.exports = function (_ref) {
  var url = _ref.url,
      token = _ref.token,
      oauthToken = _ref.oauthToken;
  return new API({ url: url, token: token, oauthToken: oauthToken });
};