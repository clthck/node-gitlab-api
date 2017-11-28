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

var GroupMembers = function (_BaseModel) {
  (0, _inherits3.default)(GroupMembers, _BaseModel);

  function GroupMembers() {
    (0, _classCallCheck3.default)(this, GroupMembers);
    return (0, _possibleConstructorReturn3.default)(this, (GroupMembers.__proto__ || Object.getPrototypeOf(GroupMembers)).apply(this, arguments));
  }

  (0, _createClass3.default)(GroupMembers, [{
    key: 'all',
    value: function all(groupId) {
      var gId = Utils.parse(groupId);

      return this.get('groups/' + gId + '/members');
    }
  }, {
    key: 'add',
    value: function add(groupId, userId, accessLevel) {
      var _map = [groupId, userId].map(Utils.parse),
          _map2 = (0, _slicedToArray3.default)(_map, 2),
          gId = _map2[0],
          uId = _map2[1];

      return this.post('groups/' + gId + '/members', {
        user_id: uId,
        access_level: parseInt(accessLevel, 10)
      });
    }
  }, {
    key: 'edit',
    value: function edit(groupId, userId, accessLevel) {
      var _map3 = [groupId, userId].map(Utils.parse),
          _map4 = (0, _slicedToArray3.default)(_map3, 2),
          gId = _map4[0],
          uId = _map4[1];

      return this.put('groups/' + gId + '/members/' + uId, {
        access_level: parseInt(accessLevel, 10)
      });
    }
  }, {
    key: 'show',
    value: function show(groupId, userId) {
      var _map5 = [groupId, userId].map(Utils.parse),
          _map6 = (0, _slicedToArray3.default)(_map5, 2),
          gId = _map6[0],
          uId = _map6[1];

      return this.get('groups/' + gId + '/members/' + uId);
    }
  }, {
    key: 'remove',
    value: function remove(groupId, userId) {
      var _map7 = [groupId, userId].map(Utils.parse),
          _map8 = (0, _slicedToArray3.default)(_map7, 2),
          gId = _map8[0],
          uId = _map8[1];

      return this.delete('groups/' + gId + '/members/' + uId);
    }
  }]);
  return GroupMembers;
}(BaseModel);

module.exports = GroupMembers;