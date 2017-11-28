'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fs = require('fs');
var Path = require('path');
var BaseModel = require('./BaseModel');
var Utils = require('../Utils');
var ProjectMembers = require('./ProjectMembers');
var ProjectHooks = require('./ProjectHooks');
var ProjectIssues = require('./ProjectIssues');
var ProjectLabels = require('./ProjectLabels');
var ProjectRepository = require('./ProjectRepository');
var ProjectMilestones = require('./ProjectMilestones');
var ProjectDeployKeys = require('./ProjectDeployKeys');
var ProjectMergeRequests = require('./ProjectMergeRequests');
var ProjectServices = require('./ProjectServices');
var ProjectTriggers = require('./ProjectTriggers');
var ProjectRunners = require('./ProjectRunners');
var ProjectPipelines = require('./ProjectPipelines');

var Projects = function (_BaseModel) {
  _inherits(Projects, _BaseModel);

  function Projects() {
    var _ref;

    _classCallCheck(this, Projects);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Projects.__proto__ || Object.getPrototypeOf(Projects)).call.apply(_ref, [this].concat(args)));

    _this.members = new (Function.prototype.bind.apply(ProjectMembers, [null].concat(args)))();
    _this.hooks = new (Function.prototype.bind.apply(ProjectHooks, [null].concat(args)))();
    _this.issues = new (Function.prototype.bind.apply(ProjectIssues, [null].concat(args)))();
    _this.labels = new (Function.prototype.bind.apply(ProjectLabels, [null].concat(args)))();
    _this.repository = new (Function.prototype.bind.apply(ProjectRepository, [null].concat(args)))();
    _this.milestones = new (Function.prototype.bind.apply(ProjectMilestones, [null].concat(args)))();
    _this.deploy_keys = new (Function.prototype.bind.apply(ProjectDeployKeys, [null].concat(args)))();
    _this.merge_requests = new (Function.prototype.bind.apply(ProjectMergeRequests, [null].concat(args)))();
    _this.services = new (Function.prototype.bind.apply(ProjectServices, [null].concat(args)))();
    _this.triggers = new (Function.prototype.bind.apply(ProjectTriggers, [null].concat(args)))();
    _this.pipelines = new (Function.prototype.bind.apply(ProjectPipelines, [null].concat(args)))();
    _this.runners = new (Function.prototype.bind.apply(ProjectRunners, [null].concat(args)))();
    return _this;
  }

  _createClass(Projects, [{
    key: 'all',
    value: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.get('projects', options);
    }
  }, {
    key: 'allAdmin',
    value: function allAdmin() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.get('projects/all', options);
    }
  }, {
    key: 'create',
    value: function create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.userId) {
        var uId = Utils.parse(options.userId);

        return this.post('projects/user/' + uId, options);
      }

      return this.post('projects', options);
    }
  }, {
    key: 'edit',
    value: function edit(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = Utils.parse(projectId);

      return this.put('projects/' + pId, options);
    }
  }, {
    key: 'fork',
    value: function fork(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = Utils.parse(projectId);

      return this.post('projects/' + pId + '/fork', options);
    }
  }, {
    key: 'remove',
    value: function remove(projectId) {
      var pId = Utils.parse(projectId);

      return this.delete('projects/' + pId);
    }
  }, {
    key: 'search',
    value: function search(projectName) {
      return this.get('projects', { search: projectName });
    }
  }, {
    key: 'share',
    value: function share(projectId, groupId, groupAccess, options) {
      var pId = Utils.parse(projectId);

      if (!groupId || !groupAccess) throw new Error('Missing required arguments');

      options.group_id = groupId;
      options.group_access = groupAccess;

      return this.post('projects/' + pId + '/share', options);
    }
  }, {
    key: 'show',
    value: function show(projectId) {
      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId);
    }
  }, {
    key: 'star',
    value: function star(projectId) {
      var pId = Utils.parse(projectId);

      return this.post('projects/' + pId + '/star');
    }
  }, {
    key: 'unstar',
    value: function unstar(projectId) {
      var pId = Utils.parse(projectId);

      return this.post('projects/' + pId + '/unstar');
    }
  }, {
    key: 'upload',
    value: function upload(projectId, filePath) {
      var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref2$fileName = _ref2.fileName,
          fileName = _ref2$fileName === undefined ? Path.basename(filePath) : _ref2$fileName;

      var pId = Utils.parse(projectId);
      var file = Fs.readFileSync(filePath);

      return this.postForm('projects/' + pId + '/uploads', {
        file: {
          value: file,
          options: {
            filename: fileName,
            contentType: 'application/octet-stream'
          }
        }
      });
    }
  }]);

  return Projects;
}(BaseModel);

module.exports = Projects;