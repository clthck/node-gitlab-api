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

var ProjectServices = function (_BaseModel) {
  (0, _inherits3.default)(ProjectServices, _BaseModel);

  function ProjectServices() {
    (0, _classCallCheck3.default)(this, ProjectServices);
    return (0, _possibleConstructorReturn3.default)(this, (ProjectServices.__proto__ || Object.getPrototypeOf(ProjectServices)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectServices, [{
    key: 'show',
    value: function show(projectId, serviceName) {
      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/services/' + serviceName);
    }
  }, {
    key: 'update',
    value: function update(projectId, serviceName) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var pId = Utils.parse(projectId);

      return this.put('projects/' + pId + '/services/' + serviceName, options);
    }
  }, {
    key: 'remove',
    value: function remove(projectId, serviceName) {
      var pId = Utils.parse(projectId);

      return this.delete('projects/' + pId + '/services/' + serviceName);
    }
  }]);
  return ProjectServices;
}(BaseModel);

module.exports = ProjectServices;