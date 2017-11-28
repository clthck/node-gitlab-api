'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseModel = require('./BaseModel');
var UserKeys = require('./UserKeys');
var Utils = require('../Utils');

var Users = function (_BaseModel) {
  (0, _inherits3.default)(Users, _BaseModel);

  function Users() {
    var _ref;

    (0, _classCallCheck3.default)(this, Users);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Users.__proto__ || Object.getPrototypeOf(Users)).call.apply(_ref, [this].concat(args)));

    _this.keys = UserKeys;
    return _this;
  }

  (0, _createClass3.default)(Users, [{
    key: 'all',
    value: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.get('users', options);
    }
  }, {
    key: 'current',
    value: function current() {
      return this.get('user');
    }
  }, {
    key: 'show',
    value: function show(userId) {
      var uId = Utils.parse(userId);

      return this.get('users/' + uId);
    }
  }, {
    key: 'create',
    value: function create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.post('users', options);
    }
  }, {
    key: 'session',
    value: function session(email, password) {
      return this.post('session', {
        email: email,
        password: password
      });
    }
  }, {
    key: 'search',
    value: function search(emailOrUsername) {
      return this.get('users', {
        search: emailOrUsername
      });
    }
  }]);
  return Users;
}(BaseModel);

module.exports = Users;