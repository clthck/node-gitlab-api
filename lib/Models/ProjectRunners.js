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

var ProjectRunners = function (_BaseModel) {
  (0, _inherits3.default)(ProjectRunners, _BaseModel);

  function ProjectRunners() {
    (0, _classCallCheck3.default)(this, ProjectRunners);
    return (0, _possibleConstructorReturn3.default)(this, (ProjectRunners.__proto__ || Object.getPrototypeOf(ProjectRunners)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectRunners, [{
    key: 'all',
    value: function all(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = Utils.parse(projectId);

      if (projectId != null) {
        return this.get('projects/' + pId + '/runners', options);
      }

      return this.get('runners', options);
    }
  }, {
    key: 'enable',
    value: function enable(projectId, runnerId) {
      var _map = [projectId, runnerId].map(Utils.parse),
          _map2 = (0, _slicedToArray3.default)(_map, 2),
          pId = _map2[0],
          rId = _map2[1];

      return this.post('projects/' + pId + '/runners', {
        runner_id: rId
      });
    }
  }, {
    key: 'disable',
    value: function disable(projectId, runnerId) {
      var _map3 = [projectId, runnerId].map(Utils.parse),
          _map4 = (0, _slicedToArray3.default)(_map3, 2),
          pId = _map4[0],
          rId = _map4[1];

      return this.delete('projects/' + pId + '/runners/' + rId);
    }
  }]);
  return ProjectRunners;
}(BaseModel);

module.exports = ProjectRunners;