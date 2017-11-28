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

var ProjectMilestones = function (_BaseModel) {
  (0, _inherits3.default)(ProjectMilestones, _BaseModel);

  function ProjectMilestones() {
    (0, _classCallCheck3.default)(this, ProjectMilestones);
    return (0, _possibleConstructorReturn3.default)(this, (ProjectMilestones.__proto__ || Object.getPrototypeOf(ProjectMilestones)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectMilestones, [{
    key: 'all',
    value: function all(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/milestones', options);
    }
  }, {
    key: 'show',
    value: function show(projectId, milestoneId) {
      var _map = [projectId, milestoneId].map(Utils.parse),
          _map2 = (0, _slicedToArray3.default)(_map, 2),
          pId = _map2[0],
          mId = _map2[1];

      return this.get('projects/' + pId + '/milestones/' + mId);
    }
  }, {
    key: 'add',
    value: function add(projectId, title, _ref) {
      var description = _ref.description,
          due_date = _ref.due_date;

      var pId = Utils.parse(projectId);

      return this.post('projects/' + pId + '/milestones', {
        title: title,
        description: description,
        due_date: due_date
      });
    }
  }, {
    key: 'update',
    value: function update(projectId, milestoneId, _ref2) {
      var title = _ref2.title,
          description = _ref2.description,
          due_date = _ref2.due_date,
          state_event = _ref2.state_event;

      var _map3 = [projectId, milestoneId].map(Utils.parse),
          _map4 = (0, _slicedToArray3.default)(_map3, 2),
          pId = _map4[0],
          mId = _map4[1];

      return this.put('projects/' + pId + '/milestones/' + mId, {
        title: title,
        description: description,
        due_date: due_date,
        state_event: state_event
      });
    }
  }]);
  return ProjectMilestones;
}(BaseModel);

module.exports = ProjectMilestones;