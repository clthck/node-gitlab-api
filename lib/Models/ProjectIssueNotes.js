'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseModel = require('./BaseModel');
var Utils = require('../Utils');

var ProjectIssueNotes = function (_BaseModel) {
  _inherits(ProjectIssueNotes, _BaseModel);

  function ProjectIssueNotes() {
    _classCallCheck(this, ProjectIssueNotes);

    return _possibleConstructorReturn(this, (ProjectIssueNotes.__proto__ || Object.getPrototypeOf(ProjectIssueNotes)).apply(this, arguments));
  }

  _createClass(ProjectIssueNotes, [{
    key: 'all',
    value: function all(projectId, issueIId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _map = [projectId, issueIId].map(Utils.parse),
          _map2 = _slicedToArray(_map, 2),
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
          _map4 = _slicedToArray(_map3, 2),
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
          _map6 = _slicedToArray(_map5, 3),
          pId = _map6[0],
          iIId = _map6[1],
          nId = _map6[2];

      return this.put('projects/' + pId + '/issues/' + iIId + '/notes/' + nId, options);
    }
  }, {
    key: 'remove',
    value: function remove(projectId, issueIId, noteId) {
      var _map7 = [projectId, issueIId, noteId].map(Utils.parse),
          _map8 = _slicedToArray(_map7, 3),
          pId = _map8[0],
          iIId = _map8[1],
          nId = _map8[2];

      return this.delete('projects/' + pId + '/issues/' + iIId + '/notes/' + nId);
    }
  }, {
    key: 'show',
    value: function show(projectId, issueIId, noteId) {
      var _map9 = [projectId, issueIId, noteId].map(Utils.parse),
          _map10 = _slicedToArray(_map9, 3),
          pId = _map10[0],
          iIId = _map10[1],
          nId = _map10[2];

      return this.get('projects/' + pId + '/issues/' + iIId + '/notes/' + nId);
    }
  }]);

  return ProjectIssueNotes;
}(BaseModel);

module.exports = ProjectIssueNotes;