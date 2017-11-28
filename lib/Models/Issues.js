'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseModel = require('./BaseModel');
var Utils = require('../Utils');

var Issues = function (_BaseModel) {
  _inherits(Issues, _BaseModel);

  function Issues() {
    _classCallCheck(this, Issues);

    return _possibleConstructorReturn(this, (Issues.__proto__ || Object.getPrototypeOf(Issues)).apply(this, arguments));
  }

  _createClass(Issues, [{
    key: 'all',
    value: function all() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.get('issues', options);
    }
  }]);

  return Issues;
}(BaseModel);

module.exports = Issues;