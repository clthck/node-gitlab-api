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

var ProjectMergeRequests = function (_BaseModel) {
  (0, _inherits3.default)(ProjectMergeRequests, _BaseModel);

  function ProjectMergeRequests() {
    (0, _classCallCheck3.default)(this, ProjectMergeRequests);
    return (0, _possibleConstructorReturn3.default)(this, (ProjectMergeRequests.__proto__ || Object.getPrototypeOf(ProjectMergeRequests)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectMergeRequests, [{
    key: 'list',
    value: function list(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/merge_requests', options);
    }
  }, {
    key: 'show',
    value: function show(projectId, mergerequestId) {
      var _map = [projectId, mergerequestId].map(Utils.parse),
          _map2 = (0, _slicedToArray3.default)(_map, 2),
          pId = _map2[0],
          mId = _map2[1];

      return this.get('projects/' + pId + '/merge_requests/' + mId);
    }
  }, {
    key: 'add',
    value: function add(projectId, sourceBranch, targetBranch, assigneeId, title) {
      var _map3 = [projectId, assigneeId].map(Utils.parse),
          _map4 = (0, _slicedToArray3.default)(_map3, 2),
          pId = _map4[0],
          aId = _map4[1];

      var options = {
        id: pId,
        source_branch: sourceBranch,
        target_branch: targetBranch,
        title: title
      };

      if (assigneeId !== undefined) options.assigneeId = aId;

      return this.post('projects/' + pId + '/merge_requests', options);
    }
  }, {
    key: 'update',
    value: function update(projectId, mergerequestId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _map5 = [projectId, mergerequestId].map(Utils.parse),
          _map6 = (0, _slicedToArray3.default)(_map5, 2),
          pId = _map6[0],
          mId = _map6[1];

      options.id = pId;
      options.merge_request_id = mId;

      return this.put('projects/' + pId + '/merge_requests/' + mId, options);
    }
  }, {
    key: 'comment',
    value: function comment(projectId, mergerequestId, note) {
      var _map7 = [projectId, mergerequestId].map(Utils.parse),
          _map8 = (0, _slicedToArray3.default)(_map7, 2),
          pId = _map8[0],
          mId = _map8[1];

      return this.post('projects/' + pId + '/merge_requests/' + mId + '/comments', {
        body: note
      });
    }
  }]);
  return ProjectMergeRequests;
}(BaseModel);

module.exports = ProjectMergeRequests;