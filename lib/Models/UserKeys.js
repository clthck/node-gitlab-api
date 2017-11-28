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

var UserKeys = function (_BaseModel) {
  (0, _inherits3.default)(UserKeys, _BaseModel);

  function UserKeys() {
    (0, _classCallCheck3.default)(this, UserKeys);
    return (0, _possibleConstructorReturn3.default)(this, (UserKeys.__proto__ || Object.getPrototypeOf(UserKeys)).apply(this, arguments));
  }

  (0, _createClass3.default)(UserKeys, [{
    key: 'all',
    value: function all(userId) {
      var uId = Utils.parse(userId);

      return this.get('users/' + uId + '/keys');
    }
  }, {
    key: 'addKey',
    value: function addKey(userId, title, key) {
      var uId = Utils.parse(userId);

      return this.post('users/' + uId + '/keys', {
        title: title,
        key: key
      });
    }
  }]);
  return UserKeys;
}(BaseModel);

module.exports = UserKeys;