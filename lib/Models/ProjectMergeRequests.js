'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseModel = require('./BaseModel');
var Utils = require('../Utils');

var ProjectMergeRequests = function (_BaseModel) {
  _inherits(ProjectMergeRequests, _BaseModel);

  function ProjectMergeRequests() {
    _classCallCheck(this, ProjectMergeRequests);

    return _possibleConstructorReturn(this, (ProjectMergeRequests.__proto__ || Object.getPrototypeOf(ProjectMergeRequests)).apply(this, arguments));
  }

  _createClass(ProjectMergeRequests, [{
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
          _map2 = _slicedToArray(_map, 2),
          pId = _map2[0],
          mId = _map2[1];

      return this.get('projects/' + pId + '/merge_requests/' + mId);
    }
  }, {
    key: 'add',
    value: function add(projectId, sourceBranch, targetBranch, assigneeId, title) {
      var _map3 = [projectId, assigneeId].map(Utils.parse),
          _map4 = _slicedToArray(_map3, 2),
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
          _map6 = _slicedToArray(_map5, 2),
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
          _map8 = _slicedToArray(_map7, 2),
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