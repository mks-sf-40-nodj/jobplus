webpackHotUpdate(0,{

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(82); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(82);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// New class `BaseComponent` extends React `Component`, but is modified to include \n// a variety of static helper class methods that may be shared by all sub-classes.\nvar BaseComponent = function (_Component) {\n  _inherits(BaseComponent, _Component);\n\n  function BaseComponent() {\n    _classCallCheck(this, BaseComponent);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseComponent).apply(this, arguments));\n  }\n\n  _createClass(BaseComponent, [{\n    key: 'parseAndFormatJobTitle',\n    value: function parseAndFormatJobTitle(job) {\n      return job\n      // .split(/[\\s|\\/]/gmi)\n      .split(' ').reduce(function (memo, index) {\n        return memo += '' + index.charAt(0).toUpperCase() + index.slice(1).toLowerCase() + ' ';\n      }, '').replace(/\\band\\b/gmi, \"&\").trim();\n    }\n  }, {\n    key: 'parseAndFormatDaysSincePosted',\n    value: function parseAndFormatDaysSincePosted(days) {\n      return days.match(/(\\w+){1,}/gmi).map(function (str) {\n        return '' + str[0].toUpperCase() + str.slice(1);\n      }).join(' ');\n    }\n  }, {\n    key: 'parsePhoneNumber',\n    value: function parsePhoneNumber(num) {\n      if (num) {\n        return num.replace(/^(\\d{3})(\\d{4})(\\d{3})/, \"+1 ($1) $2-$3\");\n      }\n    }\n  }, {\n    key: 'tagFreeSnippet',\n    value: function tagFreeSnippet(descrip) {\n      return descrip ? descrip.replace(/<[^>]+>|\\.(?=\\.{3,})/gmi, '') : descrip;\n    }\n  }]);\n\n  return BaseComponent;\n}(_react.Component);\n\nexports.default = BaseComponent;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(307); if (makeExportsHot(module, __webpack_require__(82))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"base_component.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzc2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYmFzZV9jb21wb25lbnQuanM/N2NiNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSRUFDVCBIT1QgTE9BREVSICovIGlmIChtb2R1bGUuaG90KSB7IChmdW5jdGlvbiAoKSB7IHZhciBSZWFjdEhvdEFQSSA9IHJlcXVpcmUoXCIvVXNlcnMvb2xpdmVyaXNlbnJpY2gvbm9kai9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWFwaS9tb2R1bGVzL2luZGV4LmpzXCIpLCBSb290SW5zdGFuY2VQcm92aWRlciA9IHJlcXVpcmUoXCIvVXNlcnMvb2xpdmVyaXNlbnJpY2gvbm9kai9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWxvYWRlci9Sb290SW5zdGFuY2VQcm92aWRlci5qc1wiKSwgUmVhY3RNb3VudCA9IHJlcXVpcmUoXCJyZWFjdC9saWIvUmVhY3RNb3VudFwiKSwgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7IG1vZHVsZS5tYWtlSG90ID0gbW9kdWxlLmhvdC5kYXRhID8gbW9kdWxlLmhvdC5kYXRhLm1ha2VIb3QgOiBSZWFjdEhvdEFQSShmdW5jdGlvbiAoKSB7IHJldHVybiBSb290SW5zdGFuY2VQcm92aWRlci5nZXRSb290SW5zdGFuY2VzKFJlYWN0TW91bnQpOyB9LCBSZWFjdCk7IH0pKCk7IH0gdHJ5IHsgKGZ1bmN0aW9uICgpIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLy8gTmV3IGNsYXNzIGBCYXNlQ29tcG9uZW50YCBleHRlbmRzIFJlYWN0IGBDb21wb25lbnRgLCBidXQgaXMgbW9kaWZpZWQgdG8gaW5jbHVkZSBcbi8vIGEgdmFyaWV0eSBvZiBzdGF0aWMgaGVscGVyIGNsYXNzIG1ldGhvZHMgdGhhdCBtYXkgYmUgc2hhcmVkIGJ5IGFsbCBzdWItY2xhc3Nlcy5cbnZhciBCYXNlQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEJhc2VDb21wb25lbnQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJhc2VDb21wb25lbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJhc2VDb21wb25lbnQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihCYXNlQ29tcG9uZW50KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCYXNlQ29tcG9uZW50LCBbe1xuICAgIGtleTogJ3BhcnNlQW5kRm9ybWF0Sm9iVGl0bGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZUFuZEZvcm1hdEpvYlRpdGxlKGpvYikge1xuICAgICAgcmV0dXJuIGpvYlxuICAgICAgLy8gLnNwbGl0KC9bXFxzfFxcL10vZ21pKVxuICAgICAgLnNwbGl0KCcgJykucmVkdWNlKGZ1bmN0aW9uIChtZW1vLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gbWVtbyArPSAnJyArIGluZGV4LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaW5kZXguc2xpY2UoMSkudG9Mb3dlckNhc2UoKSArICcgJztcbiAgICAgIH0sICcnKS5yZXBsYWNlKC9cXGJhbmRcXGIvZ21pLCBcIiZcIikudHJpbSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BhcnNlQW5kRm9ybWF0RGF5c1NpbmNlUG9zdGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2VBbmRGb3JtYXREYXlzU2luY2VQb3N0ZWQoZGF5cykge1xuICAgICAgcmV0dXJuIGRheXMubWF0Y2goLyhcXHcrKXsxLH0vZ21pKS5tYXAoZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gJycgKyBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgICAgIH0pLmpvaW4oJyAnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwYXJzZVBob25lTnVtYmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2VQaG9uZU51bWJlcihudW0pIHtcbiAgICAgIGlmIChudW0pIHtcbiAgICAgICAgcmV0dXJuIG51bS5yZXBsYWNlKC9eKFxcZHszfSkoXFxkezR9KShcXGR7M30pLywgXCIrMSAoJDEpICQyLSQzXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RhZ0ZyZWVTbmlwcGV0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGFnRnJlZVNuaXBwZXQoZGVzY3JpcCkge1xuICAgICAgcmV0dXJuIGRlc2NyaXAgPyBkZXNjcmlwLnJlcGxhY2UoLzxbXj5dKz58XFwuKD89XFwuezMsfSkvZ21pLCAnJykgOiBkZXNjcmlwO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCYXNlQ29tcG9uZW50O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQmFzZUNvbXBvbmVudDtcblxuLyogUkVBQ1QgSE9UIExPQURFUiAqLyB9KS5jYWxsKHRoaXMpOyB9IGZpbmFsbHkgeyBpZiAobW9kdWxlLmhvdCkgeyAoZnVuY3Rpb24gKCkgeyB2YXIgZm91bmRSZWFjdENsYXNzZXMgPSBtb2R1bGUuaG90LmRhdGEgJiYgbW9kdWxlLmhvdC5kYXRhLmZvdW5kUmVhY3RDbGFzc2VzIHx8IGZhbHNlOyBpZiAobW9kdWxlLmV4cG9ydHMgJiYgbW9kdWxlLm1ha2VIb3QpIHsgdmFyIG1ha2VFeHBvcnRzSG90ID0gcmVxdWlyZShcIi9Vc2Vycy9vbGl2ZXJpc2VucmljaC9ub2RqL25vZGVfbW9kdWxlcy9yZWFjdC1ob3QtbG9hZGVyL21ha2VFeHBvcnRzSG90LmpzXCIpOyBpZiAobWFrZUV4cG9ydHNIb3QobW9kdWxlLCByZXF1aXJlKFwicmVhY3RcIikpKSB7IGZvdW5kUmVhY3RDbGFzc2VzID0gdHJ1ZTsgfSB2YXIgc2hvdWxkQWNjZXB0TW9kdWxlID0gdHJ1ZSAmJiBmb3VuZFJlYWN0Q2xhc3NlczsgaWYgKHNob3VsZEFjY2VwdE1vZHVsZSkgeyBtb2R1bGUuaG90LmFjY2VwdChmdW5jdGlvbiAoZXJyKSB7IGlmIChlcnIpIHsgY29uc29sZS5lcnJvcihcIkNhbm5vdCBub3QgYXBwbHkgaG90IHVwZGF0ZSB0byBcIiArIFwiYmFzZV9jb21wb25lbnQuanNcIiArIFwiOiBcIiArIGVyci5tZXNzYWdlKTsgfSB9KTsgfSB9IG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkgeyBkYXRhLm1ha2VIb3QgPSBtb2R1bGUubWFrZUhvdDsgZGF0YS5mb3VuZFJlYWN0Q2xhc3NlcyA9IGZvdW5kUmVhY3RDbGFzc2VzOyB9KTsgfSkoKTsgfSB9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9jb21wb25lbnRzL2Jhc2VfY29tcG9uZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMzc2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})