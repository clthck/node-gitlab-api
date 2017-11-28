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

var ProjectIssueNotes = function (_BaseModel) {
  (0, _inherits3.default)(ProjectIssueNotes, _BaseModel);

  function ProjectIssueNotes() {
    (0, _classCallCheck3.default)(this, ProjectIssueNotes);
    return (0, _possibleConstructorReturn3.default)(this, (ProjectIssueNotes.__proto__ || Object.getPrototypeOf(ProjectIssueNotes)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectIssueNotes, [{
    key: 'all',
    value: function all(projectId, issueIId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _map = [projectId, issueIId].map(Utils.parse),
          _map2 = (0, _slicedToArray3.default)(_map, 2),
          pId = _map2[0],
          iIId = _map2[1];

      return this.get('projects/' + pId + '/issues/' + iIId + '/notes', options);
    }
  }, {
    key: 'create',
    value: function create(projectId, issueIId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!options.body) throw new Error('Missing required property: body');

      var _map3 = [projectId, issueIId].map(Utils.parse),
          _map4 = (0, _slicedToArray3.default)(_map3, 2),
          pId = _map4[0],
          iIId = _map4[1];

      return this.post('projects/' + pId + '/issues/' + iIId + '/notes', options);
    }
  }, {
    key: 'edit',
    value: function edit(projectId, issueIId, noteId) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (!options.body) throw new Error('Missing required property: body');

      var _map5 = [projectId, issueIId, noteId].map(Utils.parse),
          _map6 = (0, _slicedToArray3.default)(_map5, 3),
          pId = _map6[0],
          iIId = _map6[1],
          nId = _map6[2];

      return this.put('projects/' + pId + '/issues/' + iIId + '/notes/' + nId, options);
    }
  }, {
    key: 'remove',
    value: function remove(projectId, issueIId, noteId) {
      var _map7 = [projectId, issueIId, noteId].map(Utils.parse),
          _map8 = (0, _slicedToArray3.default)(_map7, 3),
          pId = _map8[0],
          iIId = _map8[1],
          nId = _map8[2];

      return this.delete('projects/' + pId + '/issues/' + iIId + '/notes/' + nId);
    }
  }, {
    key: 'show',
    value: function show(projectId, issueIId, noteId) {
      var _map9 = [projectId, issueIId, noteId].map(Utils.parse),
          _map10 = (0, _slicedToArray3.default)(_map9, 3),
          pId = _map10[0],
          iIId = _map10[1],
          nId = _map10[2];

      return this.get('projects/' + pId + '/issues/' + iIId + '/notes/' + nId);
    }
  }]);
  return ProjectIssueNotes;
}(BaseModel);

module.exports = ProjectIssueNotes;