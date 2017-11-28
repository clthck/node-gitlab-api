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

var ProjectRepository = function (_BaseModel) {
  (0, _inherits3.default)(ProjectRepository, _BaseModel);

  function ProjectRepository() {
    (0, _classCallCheck3.default)(this, ProjectRepository);
    return (0, _possibleConstructorReturn3.default)(this, (ProjectRepository.__proto__ || Object.getPrototypeOf(ProjectRepository)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectRepository, [{
    key: 'listBranches',
    value: function listBranches(projectId) {
      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/repository/branches');
    }
  }, {
    key: 'showBranch',
    value: function showBranch(projectId, branchId) {
      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/repository/branches/' + encodeURI(branchId));
    }
  }, {
    key: 'protectBranch',
    value: function protectBranch(projectId, branchId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var pId = Utils.parse(projectId);

      return this.put('projects/' + pId + '/repository/branches/' + encodeURI(branchId) + '/protect', options);
    }
  }, {
    key: 'unprotectBranch',
    value: function unprotectBranch(projectId, branchId) {
      var pId = Utils.parse(projectId);

      return this.put('projects/' + pId + '/repository/branches/' + encodeURI(branchId) + '/unprotect');
    }
  }, {
    key: 'createBranch',
    value: function createBranch(projectId, branch, ref) {
      var pId = Utils.parse(projectId);

      return this.post('projects/' + pId + '/repository/branches', { branch: branch, ref: ref });
    }
  }, {
    key: 'deleteBranch',
    value: function deleteBranch(projectId, branchId) {
      var pId = Utils.parse(projectId);

      return this.delete('projects/' + pId + '/repository/branches/' + encodeURI(branchId));
    }
  }, {
    key: 'addTag',
    value: function addTag(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = Utils.parse(projectId);

      return this.post('projects/' + pId + '/repository/tags', options);
    }
  }, {
    key: 'deleteTag',
    value: function deleteTag(projectId, tagName) {
      var pId = Utils.parse(projectId);

      return this.delete('projects/' + pId + '/repository/tags/' + encodeURI(tagName));
    }
  }, {
    key: 'showTag',
    value: function showTag(projectId, tagName) {
      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/repository/tags/' + encodeURI(tagName));
    }
  }, {
    key: 'listTags',
    value: function listTags(projectId) {
      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/repository/tags');
    }
  }, {
    key: 'listCommits',
    value: function listCommits(projectId) {
      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/repository/commits');
    }
  }, {
    key: 'showCommit',
    value: function showCommit(projectId, sha) {
      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/repository/commits/' + sha);
    }
  }, {
    key: 'diffCommit',
    value: function diffCommit(projectId, sha) {
      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/repository/commits/' + sha + '/diff');
    }
  }, {
    key: 'listTree',
    value: function listTree(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/repository/tree', options);
    }
  }, {
    key: 'showFile',
    value: function showFile(projectId, filePath, ref) {
      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/repository/files/' + filePath, { ref: ref });
    }
  }, {
    key: 'showRawFile',
    value: function showRawFile(projectId, filePath, ref) {
      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/repository/files/' + filePath + '/raw', { ref: ref });
    }
  }, {
    key: 'createFile',
    value: function createFile(projectId, filePath, branch) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var pId = Utils.parse(projectId);

      return this.post('projects/' + pId + '/repository/files/' + filePath, Object.assign({ branch: branch }, options));
    }
  }, {
    key: 'updateFile',
    value: function updateFile(projectId, filePath, branch) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var pId = Utils.parse(projectId);

      return this.put('projects/' + pId + '/repository/files/' + filePath, Object.assign({ branch: branch }, options));
    }
  }, {
    key: 'deleteFile',
    value: function deleteFile(projectId, filePath, branch) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var pId = Utils.parse(projectId);

      return this.delete('projects/' + pId + '/repository/files/' + filePath, Object.assign({ branch: branch }, options));
    }
  }, {
    key: 'compare',
    value: function compare(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/repository/compare', options);
    }
  }]);
  return ProjectRepository;
}(BaseModel);

module.exports = ProjectRepository;