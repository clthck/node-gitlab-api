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

var GroupMilestoneMergeRequests = function (_BaseModel) {
  (0, _inherits3.default)(GroupMilestoneMergeRequests, _BaseModel);

  function GroupMilestoneMergeRequests() {
    (0, _classCallCheck3.default)(this, GroupMilestoneMergeRequests);
    return (0, _possibleConstructorReturn3.default)(this, (GroupMilestoneMergeRequests.__proto__ || Object.getPrototypeOf(GroupMilestoneMergeRequests)).apply(this, arguments));
  }

  (0, _createClass3.default)(GroupMilestoneMergeRequests, [{
    key: 'all',
    value: function all(groupId, milestoneId) {
      var _map = [groupId, milestoneId].map(Utils.parse),
          _map2 = (0, _slicedToArray3.default)(_map, 2),
          gId = _map2[0],
          mId = _map2[1];

      return this.get('groups/' + gId + '/milestones/' + mId + '/merge_requests');
    }
  }]);
  return GroupMilestoneMergeRequests;
}(BaseModel);

module.exports = GroupMilestoneMergeRequests;