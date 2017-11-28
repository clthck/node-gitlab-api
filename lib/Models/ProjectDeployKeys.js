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

var ProjectKeys = function (_BaseModel) {
  (0, _inherits3.default)(ProjectKeys, _BaseModel);

  function ProjectKeys() {
    (0, _classCallCheck3.default)(this, ProjectKeys);
    return (0, _possibleConstructorReturn3.default)(this, (ProjectKeys.__proto__ || Object.getPrototypeOf(ProjectKeys)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectKeys, [{
    key: 'listKeys',
    value: function listKeys(projectId) {
      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/deploy_keys');
    }
  }, {
    key: 'getKey',
    value: function getKey(projectId, keyId) {
      var _map = [projectId, keyId].map(Utils.parse),
          _map2 = (0, _slicedToArray3.default)(_map, 2),
          pId = _map2[0],
          kId = _map2[1];

      return this.get('projects/' + pId + '/deploy_keys/' + kId);
    }
  }, {
    key: 'addKey',
    value: function addKey(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = Utils.parse(projectId);

      return this.post('projects/' + pId + '/deploy_keys', options);
    }
  }]);
  return ProjectKeys;
}(BaseModel);

module.exports = ProjectKeys;