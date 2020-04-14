'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _beeFormControl = require('bee-form-control');

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  prefixCls: _propTypes2["default"].string,
  placeholder: _propTypes2["default"].string,
  onChange: _propTypes2["default"].func,
  handleClear: _propTypes2["default"].func
};

var defaultProps = {
  placeholder: ''
};

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleChange = function (e) {
      var onChange = _this.props.onChange;
      if (onChange) {
        onChange(e);
      }
    }, _this.handleClear = function (e) {
      e.preventDefault();

      var handleClear = _this.props.handleClear;
      if (handleClear) {
        handleClear(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Search.prototype.render = function render() {
    var _props = this.props,
        placeholder = _props.placeholder,
        value = _props.value,
        prefixCls = _props.prefixCls;

    var icon = value && value.length > 0 ? _react2["default"].createElement(
      'span',
      null,
      _react2["default"].createElement(
        'a',
        { href: '#', className: prefixCls + '-action close', onClick: this.handleClear },
        _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-close-c' })
      ),
      _react2["default"].createElement(
        'span',
        { className: prefixCls + '-action search' },
        _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-search' })
      )
    ) : _react2["default"].createElement(
      'span',
      { className: prefixCls + '-action search' },
      _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-search' })
    );

    return _react2["default"].createElement(
      'div',
      null,
      _react2["default"].createElement(_beeFormControl2["default"], {
        placeholder: placeholder,
        className: prefixCls,
        value: value,
        ref: 'input',
        onChange: this.handleChange
      }),
      icon
    );
  };

  return Search;
}(_react2["default"].Component);

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

exports["default"] = Search;
module.exports = exports['default'];