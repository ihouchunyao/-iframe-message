(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.iframeMessage = factory());
  })(this, (function () { 'use strict';
  
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
  
    function _typeof(obj) {
      "@babel/helpers - typeof";
  
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, _typeof(obj);
    }
  
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
  
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
  
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
  
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
  
    var IframeMessage = /*#__PURE__*/function () {
      function IframeMessage() {
        _classCallCheck(this, IframeMessage);
        _defineProperty(this, "events", {});
        this.events = {};
        this.addEventListener();
      }
      _createClass(IframeMessage, [{
        key: "addEventListener",
        value: function addEventListener() {
          window.onmessage = this.receive.bind(this);
        }
      }, {
        key: "receive",
        value: function receive(event) {
          this.events[event.data.type] = this.events[event.data.type] || [];
          this.events[event.data.type].forEach(function (fn) {
            fn && fn(event.data.data);
          });
        }
      }, {
        key: "dispatch",
        value: function dispatch(type, data, iframe) {
          if (iframe) {
            iframe.contentWindow.postMessage({
              type: type,
              data: data
            }, "*");
          } else {
            window.parent.postMessage({
              type: type,
              data: data
            }, "*");
          }
        }
      }, {
        key: "on",
        value: function on(type, callback) {
          // this.events[type] = this.events[type] || []
          this.events[type] = [callback];
          return this;
        }
      }]);
      return IframeMessage;
    }();
  
    var index = new IframeMessage();
  
    return index;
  
  }));
  