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
var GroupMilestoneIssues = require('./GroupMilestoneIssues');
var GroupMilestoneMergeRequests = require('./GroupMilestoneMergeRequests');

var Utils = require('../Utils');

var GroupMilestones = function (_BaseModel) {
  (0, _inherits3.default)(GroupMilestones, _BaseModel);

  function GroupMilestones() {
    var _ref;

    (0, _classCallCheck3.default)(this, GroupMilestones);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = GroupMilestones.__proto__ || Object.getPrototypeOf(GroupMilestones)).call.apply(_ref, [this].concat(args)));

    _this.issues = new (Function.prototype.bind.apply(GroupMilestoneIssues, [null].concat(args)))();
    _this.mergeRequests = new (Function.prototype.bind.apply(GroupMilestoneMergeRequests, [null].concat(args)))();
    return _this;
  }

  (0, _createClass3.default)(GroupMilestones, [{
    key: 'all',
    value: function all(groupId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var gId = Utils.parse(groupId);

      return this.get('groups/' + gId + '/milestones', options);
    }
  }, {
    key: 'create',
    value: function create(groupId, title, options) {
      var gId = Utils.parse(groupId);

      return this.post('groups/' + gId + '/milestones', options);
    }
  }, {
    key: 'edit',
    value: function edit(groupId, milestoneId, options) {
      var _map = [groupId, milestoneId].map(Utils.parse),
          _map2 = (0, _slicedToArray3.default)(_map, 2),
          gId = _map2[0],
          mId = _map2[1];

      return this.put('groups/' + gId + '/milestones/' + mId, options);
    }
  }, {
    key: 'show',
    value: function show(groupId, milestoneId) {
      var _map3 = [groupId, milestoneId].map(Utils.parse),
          _map4 = (0, _slicedToArray3.default)(_map3, 2),
          gId = _map4[0],
          mId = _map4[1];

      return this.get('groups/' + gId + '/milestones/' + mId);
    }
  }]);
  return GroupMilestones;
}(BaseModel);

module.exports = GroupMilestones;