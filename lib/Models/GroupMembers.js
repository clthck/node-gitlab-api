'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseModel = require('./BaseModel');
var Utils = require('../Utils');

var GroupMembers = function (_BaseModel) {
  _inherits(GroupMembers, _BaseModel);

  function GroupMembers() {
    _classCallCheck(this, GroupMembers);

    return _possibleConstructorReturn(this, (GroupMembers.__proto__ || Object.getPrototypeOf(GroupMembers)).apply(this, arguments));
  }

  _createClass(GroupMembers, [{
    key: 'all',
    value: function all(groupId) {
      var gId = Utils.parse(groupId);

      return this.get('groups/' + gId + '/members');
    }
  }, {
    key: 'add',
    value: function add(groupId, userId, accessLevel) {
      var _map = [groupId, userId].map(Utils.parse),
          _map2 = _slicedToArray(_map, 2),
          gId = _map2[0],
          uId = _map2[1];

      return this.post('groups/' + gId + '/members', {
        user_id: uId,
        access_level: parseInt(accessLevel, 10)
      });
    }
  }, {
    key: 'edit',
    value: function edit(groupId, userId, accessLevel) {
      var _map3 = [groupId, userId].map(Utils.parse),
          _map4 = _slicedToArray(_map3, 2),
          gId = _map4[0],
          uId = _map4[1];

      return this.put('groups/' + gId + '/members/' + uId, {
        access_level: parseInt(accessLevel, 10)
      });
    }
  }, {
    key: 'show',
    value: function show(groupId, userId) {
      var _map5 = [groupId, userId].map(Utils.parse),
          _map6 = _slicedToArray(_map5, 2),
          gId = _map6[0],
          uId = _map6[1];

      return this.get('groups/' + gId + '/members/' + uId);
    }
  }, {
    key: 'remove',
    value: function remove(groupId, userId) {
      var _map7 = [groupId, userId].map(Utils.parse),
          _map8 = _slicedToArray(_map7, 2),
          gId = _map8[0],
          uId = _map8[1];

      return this.delete('groups/' + gId + '/members/' + uId);
    }
  }]);

  return GroupMembers;
}(BaseModel);

module.exports = GroupMembers;