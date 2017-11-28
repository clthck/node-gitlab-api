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
  (0, _inherits3.default)(Projects, _BaseModel);

  function Projects() {
    var _ref;

    (0, _classCallCheck3.default)(this, Projects);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Projects.__proto__ || Object.getPrototypeOf(Projects)).call.apply(_ref, [this].concat(args)));

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

  (0, _createClass3.default)(Projects, [{
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