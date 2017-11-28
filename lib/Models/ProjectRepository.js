'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseModel = require('./BaseModel');
var Utils = require('../Utils');

var ProjectRepository = function (_BaseModel) {
  _inherits(ProjectRepository, _BaseModel);

  function ProjectRepository() {
    _classCallCheck(this, ProjectRepository);

    return _possibleConstructorReturn(this, (ProjectRepository.__proto__ || Object.getPrototypeOf(ProjectRepository)).apply(this, arguments));
  }

  _createClass(ProjectRepository, [{
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