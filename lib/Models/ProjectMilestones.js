'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseModel = require('./BaseModel');
var Utils = require('../Utils');

var ProjectMilestones = function (_BaseModel) {
  _inherits(ProjectMilestones, _BaseModel);

  function ProjectMilestones() {
    _classCallCheck(this, ProjectMilestones);

    return _possibleConstructorReturn(this, (ProjectMilestones.__proto__ || Object.getPrototypeOf(ProjectMilestones)).apply(this, arguments));
  }

  _createClass(ProjectMilestones, [{
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
          _map2 = _slicedToArray(_map, 2),
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
          _map4 = _slicedToArray(_map3, 2),
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