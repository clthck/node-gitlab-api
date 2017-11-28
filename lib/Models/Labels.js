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

var Labels = function (_BaseModel) {
  (0, _inherits3.default)(Labels, _BaseModel);

  function Labels() {
    (0, _classCallCheck3.default)(this, Labels);
    return (0, _possibleConstructorReturn3.default)(this, (Labels.__proto__ || Object.getPrototypeOf(Labels)).apply(this, arguments));
  }

  (0, _createClass3.default)(Labels, [{
    key: 'all',
    value: function all(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = Utils.parse(projectId);

      return this.get('projects/' + pId + '/labels', options);
    }
  }, {
    key: 'create',
    value: function create(projectId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var pId = Utils.parse(projectId);

      return this.post('projects/' + pId + '/labels', options);
    }
  }, {
    key: 'edit',
    value: function edit(projectId, labelName) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var pId = Utils.parse(projectId);

      options.name = labelName;

      return this.put('projects/' + pId + '/labels', options);
    }
  }, {
    key: 'remove',
    value: function remove(projectId, labelName) {
      var pId = Utils.parse(projectId);

      return this.delete('projects/' + pId + '/labels', { name: labelName });
    }
  }, {
    key: 'subscribe',
    value: function subscribe(projectId, labelId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _map = [projectId, labelId].map(Utils.parse),
          _map2 = (0, _slicedToArray3.default)(_map, 2),
          pId = _map2[0],
          lId = _map2[1];

      return this.post('projects/' + pId + '/issues/' + lId + '/subscribe', options);
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(projectId, labelId) {
      var _map3 = [projectId, labelId].map(Utils.parse),
          _map4 = (0, _slicedToArray3.default)(_map3, 2),
          pId = _map4[0],
          lId = _map4[1];

      return this.delete('projects/' + pId + '/issues/' + lId + '/unsubscribe');
    }
  }]);
  return Labels;
}(BaseModel);

module.exports = Labels;