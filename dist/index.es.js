import React, { Component } from 'react';

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

/* eslint-disable import/prefer-default-export */

var withErrorHandler = function withErrorHandler(WrappedComponent, axios) {
  return function (_Component) {
    inherits(_class2, _Component);

    function _class2(props) {
      classCallCheck(this, _class2);

      var _this = possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this, props));

      _this.errorComfirmedHandler = function () {
        _this.setState({ error: null });
      };

      _this.state = {
        error: null
      };

      _this.reqInterceptor = axios.interceptors.request.use(function (req) {
        _this.setState({ error: null });
        return req;
      });

      _this.resInterceptor = axios.interceptors.response.use(function (res) {
        return res;
      }, function (error) {
        var response = error.response;

        var style = {
          width: '600px',
          margin: '50px auto',
          'min-height': '80vh',
          background: 'transparent',
          border: 'none'
        };
        var responseError = void 0;

        switch (response.status) {
          case 404:
            responseError = {
              status: 404,
              message: React.createElement(
                'div',
                { className: 'card error-handler-div', style: style },
                React.createElement('img', { src: 'https://firebasestorage.googleapis.com/v0/b/authorshaven-cebfb.appspot.com/o/images%2FnotFound.svg?alt=media&token=f791a123-c9b5-4278-953e-0d39f5a3fe29', className: 'card-img-top', alt: 'Not Found' }),
                React.createElement(
                  'p',
                  { className: 'card-title' },
                  response.data.message
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

    createClass(_class2, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        axios.interceptors.request.eject(this.reqInterceptor);
        axios.interceptors.response.eject(this.resInterceptor);
      }
    }, {
      key: 'render',
      value: function render() {
        var error = this.state.error;

        if (!error) {
          return React.createElement(WrappedComponent, this.props);
        }
        return error.message;
      }
    }]);
    return _class2;
  }(Component);
};

export { withErrorHandler };
//# sourceMappingURL=index.es.js.map
