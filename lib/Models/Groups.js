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
var GroupMilestones = require('./GroupMilestones');
var GroupMembers = require('./GroupMembers');
var GroupProjects = require('./GroupProjects');
var GroupAccessRequests = require('./GroupAccessRequests');
var Utils = require('../Utils');

var Groups = function (_BaseModel) {
  (0, _inherits3.default)(Groups, _BaseModel);

  function Groups() {
    var _ref;

    (0, _classCallCheck3.default)(this, Groups);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Groups.__proto__ || Object.getPrototypeOf(Groups)).call.apply(_ref, [this].concat(args)));

    _this.milestones = new (Function.prototype.bind.apply(GroupMilestones, [null].concat(args)))();
    _this.members = new (Function.prototype.bind.apply(GroupMembers, [null].concat(args)))();
    _this.projects = new (Function.prototype.bind.apply(GroupProjects, [null].concat(args)))();
    _this.accessRequests = new (Function.prototype.bind.apply(GroupAccessRequests, [null].concat(args)))();
    return _this;
  }

  (0, _createClass3.default)(Groups, [{
    key: 'all',
    value: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.get('groups', options);
    }
  }, {
    key: 'allSubgroups',
    value: function allSubgroups(groupId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var gId = Utils.parse(groupId);

      return this.get('groups/' + gId + '/subgroups', options);
    }
  }, {
    key: 'show',
    value: function show(groupId) {
      var gId = Utils.parse(groupId);

      return this.get('groups/' + gId);
    }
  }, {
    key: 'create',
    value: function create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.post('groups', options);
    }
  }, {
    key: 'remove',
    value: function remove(groupId) {
      var gId = Utils.parse(groupId);

      return this.delete('groups/' + gId);
    }
  }, {
    key: 'search',
    value: function search(nameOrPath) {
      return this.get('groups', {
        search: nameOrPath
      });
    }
  }]);
  return Groups;
}(BaseModel);

module.exports = Groups;