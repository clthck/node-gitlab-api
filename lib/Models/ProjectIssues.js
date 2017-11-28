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
var ProjectIssueNotes = require('./ProjectIssueNotes');

var ProjectIssues = function (_BaseModel) {
  (0, _inherits3.default)(ProjectIssues, _BaseModel);

  function ProjectIssues() {
    var _ref;

    (0, _classCallCheck3.default)(this, ProjectIssues);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProjectIssues.__proto__ || Object.getPrototypeOf(ProjectIssues)).call.apply(_ref, [this].concat(args)));

    _this.notes = new (Function.prototype.bind.apply(ProjectIssueNotes, [null].concat(args)))();
    return _this;
  }

  (0, _createClass3.default)(ProjectIssues, [{
    key: 'all',
    value: function all(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/issues', options);
    }
  }, {
    key: 'create',
    value: function create(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = Utils.parse(projectId);

      return this.post('projects/' + pId + '/issues', options);
    }
  }, {
    key: 'edit',
    value: function edit(projectId, issueId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _map = [projectId, issueId].map(Utils.parse),
          _map2 = (0, _slicedToArray3.default)(_map, 2),
          pId = _map2[0],
          iId = _map2[1];

      return this.put('projects/' + pId + '/issues/' + iId, options);
    }
  }, {
    key: 'remove',
    value: function remove(projectId, issueId) {
      var _map3 = [projectId, issueId].map(Utils.parse),
          _map4 = (0, _slicedToArray3.default)(_map3, 2),
          pId = _map4[0],
          iId = _map4[1];

      return this.delete('projects/' + pId + '/issues/' + iId);
    }
  }, {
    key: 'show',
    value: function show(projectId, issueId) {
      var _map5 = [projectId, issueId].map(Utils.parse),
          _map6 = (0, _slicedToArray3.default)(_map5, 2),
          pId = _map6[0],
          iId = _map6[1];

      return this.get('projects/' + pId + '/issues/' + iId);
    }
  }, {
    key: 'subscribe',
    value: function subscribe(projectId, issueId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _map7 = [projectId, issueId].map(Utils.parse),
          _map8 = (0, _slicedToArray3.default)(_map7, 2),
          pId = _map8[0],
          iId = _map8[1];

      return this.post('projects/' + pId + '/issues/' + iId + '/subscribe', options);
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(projectId, issueId) {
      var _map9 = [projectId, issueId].map(Utils.parse),
          _map10 = (0, _slicedToArray3.default)(_map9, 2),
          pId = _map10[0],
          iId = _map10[1];

      return this.delete('projects/' + pId + '/issues/' + iId + '/unsubscribe');
    }
  }, {
    key: 'link',
    value: function link(projectId, issueIId, targetProjectId, targetIssueId) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      var _map11 = [projectId, issueIId].map(Utils.parse),
          _map12 = (0, _slicedToArray3.default)(_map11, 2),
          pId = _map12[0],
          iId = _map12[1];

      var _map13 = [targetProjectId, targetIssueId].map(Utils.parse),
          _map14 = (0, _slicedToArray3.default)(_map13, 2),
          targetpId = _map14[0],
          targetIId = _map14[1];

      options.target_project_id = targetpId;
      options.target_issue_id = targetIId;

      return this.post('projects/' + pId + '/issues/' + iId + '/links', options);
    }
  }]);
  return ProjectIssues;
}(BaseModel);

module.exports = ProjectIssues;