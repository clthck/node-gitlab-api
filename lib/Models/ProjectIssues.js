'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseModel = require('./BaseModel');
var Utils = require('../Utils');
var ProjectIssueNotes = require('./ProjectIssueNotes');

var ProjectIssues = function (_BaseModel) {
  _inherits(ProjectIssues, _BaseModel);

  function ProjectIssues() {
    var _ref;

    _classCallCheck(this, ProjectIssues);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ProjectIssues.__proto__ || Object.getPrototypeOf(ProjectIssues)).call.apply(_ref, [this].concat(args)));

    _this.notes = new (Function.prototype.bind.apply(ProjectIssueNotes, [null].concat(args)))();
    return _this;
  }

  _createClass(ProjectIssues, [{
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
          _map2 = _slicedToArray(_map, 2),
          pId = _map2[0],
          iId = _map2[1];

      return this.put('projects/' + pId + '/issues/' + iId, options);
    }
  }, {
    key: 'remove',
    value: function remove(projectId, issueId) {
      var _map3 = [projectId, issueId].map(Utils.parse),
          _map4 = _slicedToArray(_map3, 2),
          pId = _map4[0],
          iId = _map4[1];

      return this.delete('projects/' + pId + '/issues/' + iId);
    }
  }, {
    key: 'show',
    value: function show(projectId, issueId) {
      var _map5 = [projectId, issueId].map(Utils.parse),
          _map6 = _slicedToArray(_map5, 2),
          pId = _map6[0],
          iId = _map6[1];

      return this.get('projects/' + pId + '/issues/' + iId);
    }
  }, {
    key: 'subscribe',
    value: function subscribe(projectId, issueId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _map7 = [projectId, issueId].map(Utils.parse),
          _map8 = _slicedToArray(_map7, 2),
          pId = _map8[0],
          iId = _map8[1];

      return this.post('projects/' + pId + '/issues/' + iId + '/subscribe', options);
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(projectId, issueId) {
      var _map9 = [projectId, issueId].map(Utils.parse),
          _map10 = _slicedToArray(_map9, 2),
          pId = _map10[0],
          iId = _map10[1];

      return this.delete('projects/' + pId + '/issues/' + iId + '/unsubscribe');
    }
  }, {
    key: 'link',
    value: function link(projectId, issueIId, targetProjectId, targetIssueId) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      var _map11 = [projectId, issueIId].map(Utils.parse),
          _map12 = _slicedToArray(_map11, 2),
          pId = _map12[0],
          iId = _map12[1];

      var _map13 = [targetProjectId, targetIssueId].map(Utils.parse),
          _map14 = _slicedToArray(_map13, 2),
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