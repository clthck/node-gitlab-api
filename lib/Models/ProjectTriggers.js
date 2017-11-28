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

var ProjectTriggers = function (_BaseModel) {
  (0, _inherits3.default)(ProjectTriggers, _BaseModel);

  function ProjectTriggers() {
    (0, _classCallCheck3.default)(this, ProjectTriggers);
    return (0, _possibleConstructorReturn3.default)(this, (ProjectTriggers.__proto__ || Object.getPrototypeOf(ProjectTriggers)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectTriggers, [{
    key: 'add',
    value: function add(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = Utils.parse(projectId);

      return this.post('projects/' + pId + '/triggers', options);
    }
  }, {
    key: 'edit',
    value: function edit(projectId, triggerId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _map = [projectId, triggerId].map(Utils.parse),
          _map2 = (0, _slicedToArray3.default)(_map, 2),
          pId = _map2[0],
          tId = _map2[1];

      return this.put('projects/' + pId + '/triggers/' + tId, options);
    }
  }, {
    key: 'list',
    value: function list(projectId) {
      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/triggers');
    }
  }, {
    key: 'remove',
    value: function remove(projectId, triggerId) {
      var _map3 = [projectId, triggerId].map(Utils.parse),
          _map4 = (0, _slicedToArray3.default)(_map3, 2),
          pId = _map4[0],
          tId = _map4[1];

      return this.delete('projects/' + pId + '/triggers/' + tId);
    }
  }, {
    key: 'show',
    value: function show(projectId, triggerId) {
      var _map5 = [projectId, triggerId].map(Utils.parse),
          _map6 = (0, _slicedToArray3.default)(_map5, 2),
          pId = _map6[0],
          tId = _map6[1];

      return this.get('projects/' + pId + '/triggers/' + tId);
    }
  }]);
  return ProjectTriggers;
}(BaseModel);

module.exports = ProjectTriggers;