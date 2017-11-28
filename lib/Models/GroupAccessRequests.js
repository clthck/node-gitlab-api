'use strict';

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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
var Utils = require('../Utils');

var ACCESS_LEVELS = {
  GUEST: 10,
  REPORTER: 20,
  DEVELOPER: 30,
  MASTER: 40,
  OWNER: 50
};

var GroupAccessRequests = function (_BaseModel) {
  (0, _inherits3.default)(GroupAccessRequests, _BaseModel);

  function GroupAccessRequests() {
    var _ref;

    (0, _classCallCheck3.default)(this, GroupAccessRequests);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = GroupAccessRequests.__proto__ || Object.getPrototypeOf(GroupAccessRequests)).call.apply(_ref, [this].concat(args)));

    _this.ACCESS_LEVELS = ACCESS_LEVELS;
    return _this;
  }

  (0, _createClass3.default)(GroupAccessRequests, [{
    key: 'all',
    value: function all(groupId) {
      var gId = Utils.parse(groupId);

      return this.get('groups/' + gId + '/access_requests');
    }
  }, {
    key: 'request',
    value: function request(groupId) {
      var gId = Utils.parse(groupId);

      return this.post('groups/' + gId + '/access_requests');
    }
  }, {
    key: 'approve',
    value: function approve(groupId, userId, _ref2) {
      var _ref2$access_level = _ref2.access_level,
          access_level = _ref2$access_level === undefined ? 30 : _ref2$access_level;

      var _map = [groupId, userId].map(Utils.parse),
          _map2 = (0, _slicedToArray3.default)(_map, 2),
          gId = _map2[0],
          uId = _map2[1];

      return this.post('groups/' + gId + '/access_requests/' + uId + '/approve', { access_level: access_level });
    }
  }, {
    key: 'deny',
    value: function deny(groupId, userId) {
      var _map3 = [groupId, userId].map(Utils.parse),
          _map4 = (0, _slicedToArray3.default)(_map3, 2),
          gId = _map4[0],
          uId = _map4[1];

      return this.delete('groups/' + gId + '/access_requests/' + uId + '/approve');
    }
  }]);
  return GroupAccessRequests;
}(BaseModel);

module.exports = GroupAccessRequests;