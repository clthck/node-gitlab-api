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

var Runners = function (_BaseModel) {
  (0, _inherits3.default)(Runners, _BaseModel);

  function Runners() {
    (0, _classCallCheck3.default)(this, Runners);
    return (0, _possibleConstructorReturn3.default)(this, (Runners.__proto__ || Object.getPrototypeOf(Runners)).apply(this, arguments));
  }

  (0, _createClass3.default)(Runners, [{
    key: 'all',
    value: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.get('runners/all', options);
    }
  }, {
    key: 'show',
    value: function show(runnerId) {
      var rId = Utils.parse(runnerId);

      return this.get('runners/' + rId);
    }
  }, {
    key: 'update',
    value: function update(runnerId, attributes) {
      var rId = Utils.parse(runnerId);

      return this.put('runners/' + rId, attributes);
    }
  }, {
    key: 'remove',
    value: function remove(runnerId) {
      var rId = Utils.parse(runnerId);

      return this.delete('runners/' + rId);
    }
  }]);
  return Runners;
}(BaseModel);

module.exports = Runners;