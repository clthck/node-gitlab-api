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
var Utils = require('../Utils');

var ProjectLabels = function (_BaseModel) {
  (0, _inherits3.default)(ProjectLabels, _BaseModel);

  function ProjectLabels() {
    (0, _classCallCheck3.default)(this, ProjectLabels);
    return (0, _possibleConstructorReturn3.default)(this, (ProjectLabels.__proto__ || Object.getPrototypeOf(ProjectLabels)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectLabels, [{
    key: 'all',
    value: function all(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/labels', options);
    }
  }]);
  return ProjectLabels;
}(BaseModel);

module.exports = ProjectLabels;