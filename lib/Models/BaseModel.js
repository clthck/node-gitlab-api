'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var getAllPages = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(client, endpoint) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var results = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var response, links, limit, moreResults;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var LinkParser = require('parse-link-header');

var BaseModel = function () {
  function BaseModel(APIClient) {
    _classCallCheck(this, BaseModel);

    this.client = APIClient;
  }

  _createClass(BaseModel, [{
    key: 'get',
    value: function get(endpoint, options) {
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