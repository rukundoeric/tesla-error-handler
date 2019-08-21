'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var withErrorHandler = function withErrorHandler(WrappedComponent, axios) {
  return function (_Component) {
    inherits(_class, _Component);

    function _class(props) {
      classCallCheck(this, _class);

      var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.state = {
        error: null
      };

      _this.resInterceptor = axios.interceptors.response.use(function (res) {
        return res;
      }, function (error) {
        var response = error.response;

        var style = {
          width: '600px',
          margin: '50px auto',
          background: 'transparent',
          border: 'none'
        };
        var responseError = void 0;

        switch (response.status) {
          case 404:
            responseError = {
              status: 404,
              message: React__default.createElement(
                'div',
                { className: 'card', style: style },
                React__default.createElement('img', { src: './notFound.svg', className: 'card-img-top', alt: 'Not Found' }),
                React__default.createElement(
                  'div',
                  { className: 'card-body' },
                  React__default.createElement(
                    'h5',
                    { className: 'card-title' },
                    response.data.message
                  ),
                  React__default.createElement(
                    'a',
                    { href: '/', className: 'btn btn-primary' },
                    'Homepage'
                  )
                )
              )
            };
            _this.setState({ error: responseError });
            break;
          default:
        }
      });
      return _this;
    }

    createClass(_class, [{
      key: 'render',
      value: function render() {
        var error = this.state.error;

        if (!error) {
          return React__default.createElement(WrappedComponent, this.props);
        }
        return error.message;
      }
    }]);
    return _class;
  }(React.Component);
};

module.exports = withErrorHandler;
//# sourceMappingURL=index.js.map
