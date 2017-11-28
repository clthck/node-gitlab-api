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

var ProjectMembers = function (_BaseModel) {
  (0, _inherits3.default)(ProjectMembers, _BaseModel);

  function ProjectMembers() {
    (0, _classCallCheck3.default)(this, ProjectMembers);
    return (0, _possibleConstructorReturn3.default)(this, (ProjectMembers.__proto__ || Object.getPrototypeOf(ProjectMembers)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectMembers, [{
    key: 'list',
    value: function list(projectId) {
      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/members');
    }
  }, {
    key: 'show',
    value: function show(projectId, userId) {
      var _map = [projectId, userId].map(Utils.parse),
          _map2 = (0, _slicedToArray3.default)(_map, 2),
          pId = _map2[0],
          uId = _map2[1];

      return this.get('projects/' + pId + '/members/' + uId);
    }
  }, {
    key: 'add',
    value: function add(projectId, userId) {
      var accessLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;

      var _map3 = [projectId, userId].map(Utils.parse),
          _map4 = (0, _slicedToArray3.default)(_map3, 2),
          pId = _map4[0],
          uId = _map4[1];

      return this.post('projects/' + pId + '/members', {
        user_id: uId,
        access_level: parseInt(accessLevel, 10)
      });
    }
  }, {
    key: 'edit',
    value: function edit(projectId, userId) {
      var accessLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;

      var _map5 = [projectId, userId].map(Utils.parse),
          _map6 = (0, _slicedToArray3.default)(_map5, 2),
          pId = _map6[0],
          uId = _map6[1];

      return this.put('projects/' + pId + '/members/' + uId, {
        access_level: parseInt(accessLevel, 10)
      });
    }
  }, {
    key: 'remove',
    value: function remove(projectId, userId) {
      var _map7 = [projectId, userId].map(Utils.parse),
          _map8 = (0, _slicedToArray3.default)(_map7, 2),
          pId = _map8[0],
          uId = _map8[1];

      return this.delete('projects/' + pId + '/members/' + uId);
    }
  }]);
  return ProjectMembers;
}(BaseModel);

module.exports = ProjectMembers;