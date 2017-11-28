'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseModel = require('./BaseModel');
var Utils = require('../Utils');

var ProjectMembers = function (_BaseModel) {
  _inherits(ProjectMembers, _BaseModel);

  function ProjectMembers() {
    _classCallCheck(this, ProjectMembers);

    return _possibleConstructorReturn(this, (ProjectMembers.__proto__ || Object.getPrototypeOf(ProjectMembers)).apply(this, arguments));
  }

  _createClass(ProjectMembers, [{
    key: 'list',
    value: function list(projectId) {
      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/members');
    }
  }, {
    key: 'show',
    value: function show(projectId, userId) {
      var _map = [projectId, userId].map(Utils.parse),
          _map2 = _slicedToArray(_map, 2),
          pId = _map2[0],
          uId = _map2[1];

      return this.get('projects/' + pId + '/members/' + uId);
    }
  }, {
    key: 'add',
    value: function add(projectId, userId) {
      var accessLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;

      var _map3 = [projectId, userId].map(Utils.parse),
          _map4 = _slicedToArray(_map3, 2),
          pId = _map4[0],
          uId = _map4[1];

      return this.post('projects/' + pId + '/members', {
        user_id: uId,
        access_level: parseInt(accessLevel, 10)
      });
    }
  }, {
    key: 'edit',
    value: function edit(projectId, userId) {
      var accessLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;

      var _map5 = [projectId, userId].map(Utils.parse),
          _map6 = _slicedToArray(_map5, 2),
          pId = _map6[0],
          uId = _map6[1];

      return this.put('projects/' + pId + '/members/' + uId, {
        access_level: parseInt(accessLevel, 10)
      });
    }
  }, {
    key: 'remove',
    value: function remove(projectId, userId) {
      var _map7 = [projectId, userId].map(Utils.parse),
          _map8 = _slicedToArray(_map7, 2),
          pId = _map8[0],
          uId = _map8[1];

      return this.delete('projects/' + pId + '/members/' + uId);
    }
  }]);

  return ProjectMembers;
}(BaseModel);

module.exports = ProjectMembers;