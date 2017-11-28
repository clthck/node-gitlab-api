'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getAllPages = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(client, endpoint) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var results = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var response, links, limit, moreResults;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return client.get(endpoint, options, true);

          case 2:
            response = _context.sent;

            if (response.headers['x-page']) {
              _context.next = 5;
              break;
            }

            return _context.abrupt('return', response);

          case 5:
            links = LinkParser(response.headers.link);
            limit = options.max_pages ? response.headers['x-page'] < options.max_pages : true;
            moreResults = results.concat(response.body);

            if (!(links.next && limit)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt('return', getAllPages(client, links.next.url.replace(client.url, ''), options, moreResults));

          case 10:
            return _context.abrupt('return', moreResults);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAllPages(_x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkParser = require('parse-link-header');

var BaseModel = function () {
  function BaseModel(APIClient) {
    (0, _classCallCheck3.default)(this, BaseModel);

    this.client = APIClient;
  }

  (0, _createClass3.default)(BaseModel, [{
    key: 'get',
    value: function get(endpoint) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!options.page) {
        return getAllPages(this.client, endpoint, options);
      }

      return this.client.get(endpoint, options);
    }
  }, {
    key: 'post',
    value: function post(endpoint, options) {
      return this.client.post(endpoint, options);
    }
  }, {
    key: 'postForm',
    value: function postForm(endpoint, options) {
      return this.client.postForm(endpoint, options);
    }
  }, {
    key: 'put',
    value: function put(endpoint, options) {
      return this.client.put(endpoint, options);
    }
  }, {
    key: 'delete',
    value: function _delete(endpoint, options) {
      return this.client.delete(endpoint, options);
    }
  }]);
  return BaseModel;
}();

module.exports = BaseModel;