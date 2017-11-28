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

var GroupProjects = function (_BaseModel) {
  (0, _inherits3.default)(GroupProjects, _BaseModel);

  function GroupProjects() {
    (0, _classCallCheck3.default)(this, GroupProjects);
    return (0, _possibleConstructorReturn3.default)(this, (GroupProjects.__proto__ || Object.getPrototypeOf(GroupProjects)).apply(this, arguments));
  }

  (0, _createClass3.default)(GroupProjects, [{
    key: 'all',
    value: function all(groupId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var gId = Utils.parse(groupId);

      return this.get('groups/' + gId + '/projects', options);
    }
  }, {
    key: 'add',
    value: function add(groupId, projectId) {
      var _map = [groupId, projectId].map(Utils.parse),
          _map2 = (0, _slicedToArray3.default)(_map, 2),
          gId = _map2[0],
          pId = _map2[1];

      return this.post('groups/' + gId + '/projects/' + pId);
    }
  }]);
  return GroupProjects;
}(BaseModel);

module.exports = GroupProjects;