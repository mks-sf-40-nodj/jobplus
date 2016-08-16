webpackHotUpdate(0,{

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(82); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(82);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// New class `BaseComponent` extends React `Component`, but is modified to include \n// a variety of static helper class methods that may be shared by all sub-classes.\nvar BaseComponent = function (_Component) {\n  _inherits(BaseComponent, _Component);\n\n  function BaseComponent() {\n    _classCallCheck(this, BaseComponent);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseComponent).apply(this, arguments));\n  }\n\n  _createClass(BaseComponent, [{\n    key: 'parseAndFormatJobTitle',\n    value: function parseAndFormatJobTitle(job) {\n      var specialFormatTerms = {\n        '.net': '.NET',\n        'dba': 'DBA',\n        'dev/ops': 'Dev/Ops',\n        'ios': 'iOS',\n        'javascript': 'JavaScript',\n        'js': 'JS',\n        'nosql': 'NoSQL',\n        'nyc': 'NYC',\n        'php': 'PHP',\n        'with': 'w/',\n        'of': 'of'\n      };\n\n      return job\n      // .split(/[\\s|\\/]/gmi)\n      .split(' ').reduce(function (memo, index) {\n        return index.toLowerCase() in specialFormatTerms ? memo += ' ' + specialFormatTerms[index.toLowerCase()] + ' ' : memo += ' ' + index.charAt(0).toUpperCase() + index.slice(1).toLowerCase() + ' ';\n      }).replace(/\\band\\b/gmi, \"&\").trim();\n    }\n  }, {\n    key: 'parseAndFormatDaysSincePosted',\n    value: function parseAndFormatDaysSincePosted(days) {\n      return days.match(/(\\w+){1,}/gmi).map(function (str) {\n        return '' + str[0].toUpperCase() + str.slice(1);\n      }).join(' ');\n    }\n  }, {\n    key: 'parsePhoneNumber',\n    value: function parsePhoneNumber(num) {\n      if (num) {\n        return num.replace(/^(\\d{3})(\\d{4})(\\d{3})/, \"+1 ($1) $2-$3\");\n      }\n    }\n  }, {\n    key: 'tagFreeSnippet',\n    value: function tagFreeSnippet(descrip) {\n      return descrip ? descrip.replace(/<[^>]+>|\\.(?=\\.{3,})/gmi, '') : descrip;\n    }\n  }]);\n\n  return BaseComponent;\n}(_react.Component);\n\nexports.default = BaseComponent;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(307); if (makeExportsHot(module, __webpack_require__(82))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"base_component.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYmFzZV9jb21wb25lbnQuanM/N2NiNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSRUFDVCBIT1QgTE9BREVSICovIGlmIChtb2R1bGUuaG90KSB7IChmdW5jdGlvbiAoKSB7IHZhciBSZWFjdEhvdEFQSSA9IHJlcXVpcmUoXCIvVXNlcnMvb2xpdmVyaXNlbnJpY2gvbm9kai9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWFwaS9tb2R1bGVzL2luZGV4LmpzXCIpLCBSb290SW5zdGFuY2VQcm92aWRlciA9IHJlcXVpcmUoXCIvVXNlcnMvb2xpdmVyaXNlbnJpY2gvbm9kai9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWxvYWRlci9Sb290SW5zdGFuY2VQcm92aWRlci5qc1wiKSwgUmVhY3RNb3VudCA9IHJlcXVpcmUoXCJyZWFjdC9saWIvUmVhY3RNb3VudFwiKSwgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7IG1vZHVsZS5tYWtlSG90ID0gbW9kdWxlLmhvdC5kYXRhID8gbW9kdWxlLmhvdC5kYXRhLm1ha2VIb3QgOiBSZWFjdEhvdEFQSShmdW5jdGlvbiAoKSB7IHJldHVybiBSb290SW5zdGFuY2VQcm92aWRlci5nZXRSb290SW5zdGFuY2VzKFJlYWN0TW91bnQpOyB9LCBSZWFjdCk7IH0pKCk7IH0gdHJ5IHsgKGZ1bmN0aW9uICgpIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLy8gTmV3IGNsYXNzIGBCYXNlQ29tcG9uZW50YCBleHRlbmRzIFJlYWN0IGBDb21wb25lbnRgLCBidXQgaXMgbW9kaWZpZWQgdG8gaW5jbHVkZSBcbi8vIGEgdmFyaWV0eSBvZiBzdGF0aWMgaGVscGVyIGNsYXNzIG1ldGhvZHMgdGhhdCBtYXkgYmUgc2hhcmVkIGJ5IGFsbCBzdWItY2xhc3Nlcy5cbnZhciBCYXNlQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEJhc2VDb21wb25lbnQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJhc2VDb21wb25lbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJhc2VDb21wb25lbnQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihCYXNlQ29tcG9uZW50KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCYXNlQ29tcG9uZW50LCBbe1xuICAgIGtleTogJ3BhcnNlQW5kRm9ybWF0Sm9iVGl0bGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZUFuZEZvcm1hdEpvYlRpdGxlKGpvYikge1xuICAgICAgdmFyIHNwZWNpYWxGb3JtYXRUZXJtcyA9IHtcbiAgICAgICAgJy5uZXQnOiAnLk5FVCcsXG4gICAgICAgICdkYmEnOiAnREJBJyxcbiAgICAgICAgJ2Rldi9vcHMnOiAnRGV2L09wcycsXG4gICAgICAgICdpb3MnOiAnaU9TJyxcbiAgICAgICAgJ2phdmFzY3JpcHQnOiAnSmF2YVNjcmlwdCcsXG4gICAgICAgICdqcyc6ICdKUycsXG4gICAgICAgICdub3NxbCc6ICdOb1NRTCcsXG4gICAgICAgICdueWMnOiAnTllDJyxcbiAgICAgICAgJ3BocCc6ICdQSFAnLFxuICAgICAgICAnd2l0aCc6ICd3LycsXG4gICAgICAgICdvZic6ICdvZidcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBqb2JcbiAgICAgIC8vIC5zcGxpdCgvW1xcc3xcXC9dL2dtaSlcbiAgICAgIC5zcGxpdCgnICcpLnJlZHVjZShmdW5jdGlvbiAobWVtbywgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4LnRvTG93ZXJDYXNlKCkgaW4gc3BlY2lhbEZvcm1hdFRlcm1zID8gbWVtbyArPSAnICcgKyBzcGVjaWFsRm9ybWF0VGVybXNbaW5kZXgudG9Mb3dlckNhc2UoKV0gKyAnICcgOiBtZW1vICs9ICcgJyArIGluZGV4LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaW5kZXguc2xpY2UoMSkudG9Mb3dlckNhc2UoKSArICcgJztcbiAgICAgIH0pLnJlcGxhY2UoL1xcYmFuZFxcYi9nbWksIFwiJlwiKS50cmltKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncGFyc2VBbmRGb3JtYXREYXlzU2luY2VQb3N0ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZUFuZEZvcm1hdERheXNTaW5jZVBvc3RlZChkYXlzKSB7XG4gICAgICByZXR1cm4gZGF5cy5tYXRjaCgvKFxcdyspezEsfS9nbWkpLm1hcChmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiAnJyArIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICAgICAgfSkuam9pbignICcpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BhcnNlUGhvbmVOdW1iZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZVBob25lTnVtYmVyKG51bSkge1xuICAgICAgaWYgKG51bSkge1xuICAgICAgICByZXR1cm4gbnVtLnJlcGxhY2UoL14oXFxkezN9KShcXGR7NH0pKFxcZHszfSkvLCBcIisxICgkMSkgJDItJDNcIik7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndGFnRnJlZVNuaXBwZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0YWdGcmVlU25pcHBldChkZXNjcmlwKSB7XG4gICAgICByZXR1cm4gZGVzY3JpcCA/IGRlc2NyaXAucmVwbGFjZSgvPFtePl0rPnxcXC4oPz1cXC57Myx9KS9nbWksICcnKSA6IGRlc2NyaXA7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEJhc2VDb21wb25lbnQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBCYXNlQ29tcG9uZW50O1xuXG4vKiBSRUFDVCBIT1QgTE9BREVSICovIH0pLmNhbGwodGhpcyk7IH0gZmluYWxseSB7IGlmIChtb2R1bGUuaG90KSB7IChmdW5jdGlvbiAoKSB7IHZhciBmb3VuZFJlYWN0Q2xhc3NlcyA9IG1vZHVsZS5ob3QuZGF0YSAmJiBtb2R1bGUuaG90LmRhdGEuZm91bmRSZWFjdENsYXNzZXMgfHwgZmFsc2U7IGlmIChtb2R1bGUuZXhwb3J0cyAmJiBtb2R1bGUubWFrZUhvdCkgeyB2YXIgbWFrZUV4cG9ydHNIb3QgPSByZXF1aXJlKFwiL1VzZXJzL29saXZlcmlzZW5yaWNoL25vZGovbm9kZV9tb2R1bGVzL3JlYWN0LWhvdC1sb2FkZXIvbWFrZUV4cG9ydHNIb3QuanNcIik7IGlmIChtYWtlRXhwb3J0c0hvdChtb2R1bGUsIHJlcXVpcmUoXCJyZWFjdFwiKSkpIHsgZm91bmRSZWFjdENsYXNzZXMgPSB0cnVlOyB9IHZhciBzaG91bGRBY2NlcHRNb2R1bGUgPSB0cnVlICYmIGZvdW5kUmVhY3RDbGFzc2VzOyBpZiAoc2hvdWxkQWNjZXB0TW9kdWxlKSB7IG1vZHVsZS5ob3QuYWNjZXB0KGZ1bmN0aW9uIChlcnIpIHsgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKFwiQ2Fubm90IG5vdCBhcHBseSBob3QgdXBkYXRlIHRvIFwiICsgXCJiYXNlX2NvbXBvbmVudC5qc1wiICsgXCI6IFwiICsgZXJyLm1lc3NhZ2UpOyB9IH0pOyB9IH0gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7IGRhdGEubWFrZUhvdCA9IG1vZHVsZS5tYWtlSG90OyBkYXRhLmZvdW5kUmVhY3RDbGFzc2VzID0gZm91bmRSZWFjdENsYXNzZXM7IH0pOyB9KSgpOyB9IH1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvYmFzZV9jb21wb25lbnQuanNcbiAqKiBtb2R1bGUgaWQgPSA0NDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})