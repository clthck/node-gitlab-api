'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseModel = require('./BaseModel');
var GroupMilestones = require('./GroupMilestones');
var GroupMembers = require('./GroupMembers');
var GroupProjects = require('./GroupProjects');
var GroupAccessRequests = require('./GroupAccessRequests');
var Utils = require('../Utils');

var Groups = function (_BaseModel) {
  _inherits(Groups, _BaseModel);

  function Groups() {
    var _ref;

    _classCallCheck(this, Groups);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Groups.__proto__ || Object.getPrototypeOf(Groups)).call.apply(_ref, [this].concat(args)));

    _this.milestones = new (Function.prototype.bind.apply(GroupMilestones, [null].concat(args)))();
    _this.members = new (Function.prototype.bind.apply(GroupMembers, [null].concat(args)))();
    _this.projects = new (Function.prototype.bind.apply(GroupProjects, [null].concat(args)))();
    _this.accessRequests = new (Function.prototype.bind.apply(GroupAccessRequests, [null].concat(args)))();
    return _this;
  }

  _createClass(Groups, [{
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