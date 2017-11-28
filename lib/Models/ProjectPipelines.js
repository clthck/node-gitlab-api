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

var Pipelines = function (_BaseModel) {
  (0, _inherits3.default)(Pipelines, _BaseModel);

  function Pipelines() {
    (0, _classCallCheck3.default)(this, Pipelines);
    return (0, _possibleConstructorReturn3.default)(this, (Pipelines.__proto__ || Object.getPrototypeOf(Pipelines)).apply(this, arguments));
  }

  (0, _createClass3.default)(Pipelines, [{
    key: 'all',
    value: function all(projectId) {
      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/pipelines');
    }
  }]);
  return Pipelines;
}(BaseModel);

module.exports = Pipelines;