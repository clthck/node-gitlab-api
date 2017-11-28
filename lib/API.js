'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Request = require('request-promise');

var _require = require('./Models'),
    Groups = _require.Groups,
    Projects = _require.Projects,
    Issues = _require.Issues,
    Runners = _require.Runners,
    Users = _require.Users,
    Labels = _require.Labels;

function defaultRequest(url, endpoint, _ref) {
  var headers = _ref.headers,
      body = _ref.body,
      qs = _ref.qs,
      formData = _ref.formData,
      _ref$resolveWithFullR = _ref.resolveWithFullResponse,
      resolveWithFullResponse = _ref$resolveWithFullR === undefined ? false : _ref$resolveWithFullR;

  var params = {
    url: '' + url + endpoint,
    headers: headers,
    json: true
  };

  if (body) params.body = body;
  if (qs) params.qs = qs;
  if (formData) params.formData = formData;

  params.resolveWithFullResponse = resolveWithFullResponse;

  return params;
}

var API = function () {
  function API(_ref2) {
    var _ref2$url = _ref2.url,
        url = _ref2$url === undefined ? 'https://gitlab.com' : _ref2$url,
        token = _ref2.token,
        oauthToken = _ref2.oauthToken;
    (0, _classCallCheck3.default)(this, API);

    this.url = url + '/api/v4/';
    this.headers = {};

    if (oauthToken) {
      this.headers.Authorization = 'Bearer ' + oauthToken;
    } else if (token) {
      this.headers['private-token'] = token;
    } else {
      throw new Error('`token` (private-token) or `oauth_token` is mandatory');
    }

    this.groups = new Groups(this);
    this.projects = new Projects(this);
    this.issues = new Issues(this);
    this.users = new Users(this);
    this.labels = new Labels(this);
    this.runners = new Runners(this);
  }

  (0, _createClass3.default)(API, [{
    key: 'get',
    value: function get(endpoint, options, fullResponse) {
      return Request.get(defaultRequest(this.url, endpoint, {
        headers: this.headers,
        qs: options,
        resolveWithFullResponse: fullResponse
      }));
    }
  }, {
    key: 'post',
    value: function post(endpoint, options) {
      return Request.post(defaultRequest(this.url, endpoint, {
        headers: this.headers,
        body: options
      }));
    }
  }, {
    key: 'postForm',
    value: function postForm(endpoint, options) {
      return Request.post(defaultRequest(this.url, endpoint, {
        headers: this.headers,
        formData: options
      }));
    }
  }, {
    key: 'put',
    value: function put(endpoint, options) {
      return Request.put(defaultRequest(this.url, endpoint, {
        headers: this.headers,
        body: options
      }));
    }
  }, {
    key: 'delete',
    value: function _delete(endpoint, options) {
      return Request.delete(defaultRequest(this.url, endpoint, {
        headers: this.headers,
        qs: options
      }));
    }
  }]);
  return API;
}();

module.exports = API;