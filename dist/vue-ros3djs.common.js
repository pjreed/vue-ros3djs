module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "4c53":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createHTML = __webpack_require__("857a");
var forcedStringHTMLMethod = __webpack_require__("af03");

// `String.prototype.sub` method
// https://tc39.es/ecma262/#sec-string.prototype.sub
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('sub') }, {
  sub: function sub() {
    return createHTML(this, 'sub', '', '');
  }
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5118":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__("6017");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.10.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5fda":
/***/ (function(module, exports) {

module.exports = require("three");

/***/ }),

/***/ "6017":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba"), __webpack_require__("4362")))

/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "857a":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9627":
/***/ (function(module, exports) {

module.exports = require("roslib");

/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ee4":
/***/ (function(module, exports) {

module.exports = require("@tweenjs/tween.js");

/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "af03":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Ros3dArrow", function() { return /* reexport */ Ros3dArrow; });
__webpack_require__.d(__webpack_exports__, "Ros3dAxes", function() { return /* reexport */ Ros3dAxes; });
__webpack_require__.d(__webpack_exports__, "Ros3dGrid", function() { return /* reexport */ Ros3dGrid; });
__webpack_require__.d(__webpack_exports__, "Ros3dInteractiveMarkerClient", function() { return /* reexport */ Ros3dInteractiveMarkerClient; });
__webpack_require__.d(__webpack_exports__, "Ros3dLaserScan", function() { return /* reexport */ Ros3dLaserScan; });
__webpack_require__.d(__webpack_exports__, "Ros3dMarkerArrayClient", function() { return /* reexport */ Ros3dMarkerArrayClient; });
__webpack_require__.d(__webpack_exports__, "Ros3dMarkerClient", function() { return /* reexport */ Ros3dMarkerClient; });
__webpack_require__.d(__webpack_exports__, "Ros3dOccupancyGridClient", function() { return /* reexport */ Ros3dOccupancyGridClient; });
__webpack_require__.d(__webpack_exports__, "Ros3dPath", function() { return /* reexport */ Ros3dPath; });
__webpack_require__.d(__webpack_exports__, "Ros3dPointCloud2", function() { return /* reexport */ Ros3dPointCloud2; });
__webpack_require__.d(__webpack_exports__, "Ros3dPoseArrow", function() { return /* reexport */ Ros3dPoseArrow; });
__webpack_require__.d(__webpack_exports__, "Ros3dSceneNode", function() { return /* reexport */ Ros3dSceneNode; });
__webpack_require__.d(__webpack_exports__, "Ros3dUrdfClient", function() { return /* reexport */ Ros3dUrdfClient; });
__webpack_require__.d(__webpack_exports__, "Ros3dViewer", function() { return /* reexport */ Ros3dViewer; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60a37599-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dArrow.vue?vue&type=template&id=1633a24c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/lib-components/Ros3dArrow.vue?vue&type=template&id=1633a24c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: external "ros3d"
var external_ros3d_ = __webpack_require__("fcaf");

// EXTERNAL MODULE: external "three"
var external_three_ = __webpack_require__("5fda");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dArrow.vue?vue&type=script&lang=js&


//
//
//
//

/**
 * @author Ludwig Waffenschmidt - ludwig.waffenschmidt@outlook.com
 */


/**
 * An Arrow is a THREE object that can be used to display an arrow model.
 * It is a wrapper for [`ROS3D.Arrow`]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.Arrow.html}.
 * 
 * @vue-prop {Boolean} [visible=true] - Visibility of this object
 * @vue-prop {Number} [x=0] - Origin x
 * @vue-prop {Number} [y=0] - Origin y
 * @vue-prop {Number} [z=0] - Origin z
 * @vue-prop {Number} [directionX=1] - Direction x
 * @vue-prop {Number} [directionY=0] - Direction y
 * @vue-prop {Number} [directionZ=0] - Direction z
 * @vue-prop {Number} length (optional) - the length of the arrow
 * @vue-prop {Number} [headLength=1] - The head length of the arrow
 * @vue-prop {Number} [shaftDiameter=0.2] - The shaft diameter of the arrow
 * @vue-prop {Number} [headDiameter=0.05] - The head diameter of the arrow
 * @vue-prop {String} [color=#00ff00] - The color to use for this arrow
 * 
 * @vue-data {ROS3D.Arrow} object - Handle for the internal [ROS3D.Arrow]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.Arrow.html}
 */

/* harmony default export */ var Ros3dArrowvue_type_script_lang_js_ = ({
  name: 'ros3d-arrow',
  inheritAttrs: false,
  props: {
    visible: {
      type: Boolean,
      default: true,
      require: false
    },
    x: {
      type: Number,
      default: 0,
      require: false
    },
    y: {
      type: Number,
      default: 0,
      require: false
    },
    z: {
      type: Number,
      default: 0,
      require: false
    },
    directionX: {
      type: Number,
      default: 1,
      require: false
    },
    directionY: {
      type: Number,
      default: 0,
      require: false
    },
    directionZ: {
      type: Number,
      default: 0,
      require: false
    },
    length: {
      type: Number,
      default: 1,
      require: false
    },
    headLength: {
      type: Number,
      default: 0.2,
      require: false
    },
    shaftDiameter: {
      type: Number,
      default: 0.05,
      require: false
    },
    headDiameter: {
      type: Number,
      default: 0.1,
      require: false
    },
    color: {
      type: String,
      default: "#00ff00",
      require: false
    }
  },
  watch: {
    color: function color(n) {
      this.object.material.color.set(n);
    },
    x: function x() {
      this.$nextTick(this.setPosition);
    },
    y: function y() {
      this.$nextTick(this.setPosition);
    },
    z: function z() {
      this.$nextTick(this.setPosition);
    },
    directionX: function directionX() {
      this.$nextTick(this.setDirection);
    },
    directionY: function directionY() {
      this.$nextTick(this.setDirection);
    },
    directionZ: function directionZ() {
      this.$nextTick(this.setDirection);
    },
    length: function length(n) {
      this.object.setLength(n);
    },
    visible: function visible(newState) {
      if (newState) this.show();else this.hide();
    }
  },
  methods: {
    show: function show() {
      this.$parent.viewer.scene.add(this.object);
    },
    hide: function hide() {
      var obj = this.$parent.viewer.scene.getObjectByName(this._uid);
      if (obj != null) this.$parent.viewer.scene.remove(obj);
    },
    setPosition: function setPosition() {
      this.object.position.set(this.x, this.y, this.z);
    },
    setDirection: function setDirection() {
      this.object.setDirection(new external_three_["Vector3"](this.directionX || 0, this.directionY || 0, this.directionZ || 0));
    }
  },
  mounted: function mounted() {
    this.object = new external_ros3d_["Arrow"]({
      ros: this.$parent.ros,
      tfClient: this.$parent.tfClient,
      rootObject: this.$parent.viewer.scene,
      origin: new external_three_["Vector3"](this.x || 0, this.y || 0, this.z || 0),
      direction: new external_three_["Vector3"](this.directionX || 0, this.directionY || 0, this.directionZ || 0),
      length: this.length,
      headLength: this.headLength,
      shaftDiameter: this.shaftDiameter,
      headDiameter: this.headDiameter,
      material: new external_three_["MeshBasicMaterial"]({
        color: this.color
      })
    });
    this.object.name = this._uid;
    if (this.visible) this.show();
  },
  beforeDestroy: function beforeDestroy() {
    this.hide();
  }
});
// CONCATENATED MODULE: ./src/lib-components/Ros3dArrow.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_components_Ros3dArrowvue_type_script_lang_js_ = (Ros3dArrowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/lib-components/Ros3dArrow.vue





/* normalize component */

var component = normalizeComponent(
  lib_components_Ros3dArrowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Ros3dArrow = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60a37599-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dAxes.vue?vue&type=template&id=fb20c40e&
var Ros3dAxesvue_type_template_id_fb20c40e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var Ros3dAxesvue_type_template_id_fb20c40e_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib-components/Ros3dAxes.vue?vue&type=template&id=fb20c40e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dAxes.vue?vue&type=script&lang=js&


//
//
//
//

/**
 * @author Ludwig Waffenschmidt - ludwig.waffenschmidt@outlook.com
 */

/**
 * An Axes object can be used to display the axis of a particular coordinate frame.
 * It is a wrapper for [`ROS3D.Axes`]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.Axes.html}.
 * 
 * @vue-prop {Boolean} [visible=true] - Visibility of this object
 * @vue-prop {Number} [x=0] - Origin x
 * @vue-prop {Number} [y=0] - Origin y
 * @vue-prop {Number} [z=0] - Origin z
 * @vue-prop {Number} [scale=1] - The scale of the frame (defaults to 1.0)
 * @vue-prop {Number} [lineType=full] - The line type for the axes. Supported line types: 'dashed' and 'full'.
 * @vue-prop {Number} [lineDashLength=0.1] - The length of the dashes, relative to the length of the axis. Maximum value is 1, which means the dash length is equal to the length of the axis. Parameter only applies when lineType is set to dashed.
 * @vue-prop {Number} [headLength=0.1] - The head length to render
 * @vue-prop {Number} [shaftRadius=0.008] - The shaft radius to render
 * @vue-prop {Number} [headRadius=0.023] - The head radius to render
 * 
 * @vue-data {ROS3D.Axes} object - Handle for the internal [ROS3D.Axes]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.Axes.html}
 */

/* harmony default export */ var Ros3dAxesvue_type_script_lang_js_ = ({
  name: 'ros3d-axes',
  props: {
    visible: {
      type: Boolean,
      default: true,
      require: false
    },
    x: {
      type: Number,
      default: 0,
      require: false
    },
    y: {
      type: Number,
      default: 0,
      require: false
    },
    z: {
      type: Number,
      default: 0,
      require: false
    },
    lineType: {
      type: String,
      default: "full",
      require: false
    },
    lineDashLength: {
      type: Number,
      default: 0.1,
      require: false
    },
    scale: {
      type: Number,
      default: 1.0,
      require: false
    },
    headLength: {
      type: Number,
      default: 0.1,
      require: false
    },
    shaftRadius: {
      type: Number,
      default: 0.008,
      require: false
    },
    headRadius: {
      type: Number,
      default: 0.023,
      require: false
    }
  },
  watch: {
    visible: function visible(newState) {
      if (newState) this.show();else this.hide();
    },
    x: function x() {
      this.$nextTick(this.setPosition);
    },
    y: function y() {
      this.$nextTick(this.setPosition);
    },
    z: function z() {
      this.$nextTick(this.setPosition);
    },
    lineType: function lineType() {
      this.$nextTick(this.createObject);
    },
    lineDashLength: function lineDashLength() {
      this.$nextTick(this.createObject);
    },
    scale: function scale() {
      this.$nextTick(this.createObject);
    },
    headLength: function headLength() {
      this.$nextTick(this.createObject);
    },
    shaftRadius: function shaftRadius() {
      this.$nextTick(this.createObject);
    },
    headRadius: function headRadius() {
      this.$nextTick(this.createObject);
    }
  },
  methods: {
    show: function show() {
      this.$parent.viewer.scene.add(this.object);
    },
    hide: function hide() {
      var obj = this.$parent.viewer.scene.getObjectByName(this._uid);
      if (obj != null) this.$parent.viewer.scene.remove(obj);
    },
    createObject: function createObject() {
      if (this.object != null) this.hide();
      this.object = new external_ros3d_["Axes"]({
        ros: this.$parent.ros,
        tfClient: this.$parent.tfClient,
        rootObject: this.$parent.viewer.scene,
        lineType: this.lineType,
        lineDashLength: this.lineDashLength,
        scale: this.scale,
        headLength: this.headLength,
        shaftRadius: this.shaftRadius,
        headRadius: this.headRadius
      });
      this.object.name = this._uid;
      this.setPosition();
      if (this.visible) this.show();
    },
    setPosition: function setPosition() {
      this.object.position.set(this.x, this.y, this.z);
    }
  },
  mounted: function mounted() {
    this.createObject();
  },
  beforeDestroy: function beforeDestroy() {
    this.hide();
  }
});
// CONCATENATED MODULE: ./src/lib-components/Ros3dAxes.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_components_Ros3dAxesvue_type_script_lang_js_ = (Ros3dAxesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib-components/Ros3dAxes.vue





/* normalize component */

var Ros3dAxes_component = normalizeComponent(
  lib_components_Ros3dAxesvue_type_script_lang_js_,
  Ros3dAxesvue_type_template_id_fb20c40e_render,
  Ros3dAxesvue_type_template_id_fb20c40e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Ros3dAxes = (Ros3dAxes_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60a37599-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dGrid.vue?vue&type=template&id=350f80dc&
var Ros3dGridvue_type_template_id_350f80dc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var Ros3dGridvue_type_template_id_350f80dc_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib-components/Ros3dGrid.vue?vue&type=template&id=350f80dc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dGrid.vue?vue&type=script&lang=js&


//
//
//
//

/**
 * @author Ludwig Waffenschmidt - ludwig.waffenschmidt@outlook.com
 */

/**
 * Create a grid object.
 * It is a wrapper for [`ROS3D.Grid`]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.Grid.html}.
 * 
 * @vue-prop {Boolean} [visible=true] - Visibility of this object
 * @vue-prop {Number} [numCells=10] - The number of cells of the grid
 * @vue-prop {Number} [lineWidth=1] - The width of the lines in the grid
 * @vue-prop {Number} [cellSize=1] - The length, in meters, of the side of each cell
 * @vue-prop {String} [color=#cccccc] - The line color of the grid
 * 
 * @vue-data {ROS3D.Grid} object - Handle for the internal [ROS3D.Grid]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.Grid.html}
 */

/* harmony default export */ var Ros3dGridvue_type_script_lang_js_ = ({
  name: 'ros3d-grid',
  props: {
    visible: {
      type: Boolean,
      default: true,
      require: false
    },
    numCells: {
      type: Number,
      default: 10,
      require: false
    },
    color: {
      type: String,
      default: "#cccccc",
      require: false
    },
    lineWidth: {
      type: Number,
      default: 1,
      require: false
    },
    cellSize: {
      type: Number,
      default: 1,
      require: false
    }
  },
  watch: {
    visible: function visible(newState) {
      if (newState) this.show();else this.hide();
    },
    numCells: function numCells() {
      this.$nextTick(this.createObject);
    },
    color: function color() {
      this.$nextTick(this.createObject);
    },
    lineWidth: function lineWidth() {
      this.$nextTick(this.createObject);
    },
    cellSize: function cellSize() {
      this.$nextTick(this.createObject);
    }
  },
  methods: {
    show: function show() {
      this.$parent.viewer.scene.add(this.object);
    },
    hide: function hide() {
      var obj = this.$parent.viewer.scene.getObjectByName(this._uid);
      if (obj != null) this.$parent.viewer.scene.remove(obj);
    },
    createObject: function createObject() {
      if (this.object != null) this.hide();
      this.object = new external_ros3d_["Grid"]({
        num_cells: this.numCells,
        color: this.color,
        lineWidth: this.lineWidth,
        cellSize: this.cellSize
      });
      this.object.name = this._uid;
      if (this.visible) this.show();
    }
  },
  mounted: function mounted() {
    this.createObject();
  },
  beforeDestroy: function beforeDestroy() {
    this.hide();
  }
});
// CONCATENATED MODULE: ./src/lib-components/Ros3dGrid.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_components_Ros3dGridvue_type_script_lang_js_ = (Ros3dGridvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib-components/Ros3dGrid.vue





/* normalize component */

var Ros3dGrid_component = normalizeComponent(
  lib_components_Ros3dGridvue_type_script_lang_js_,
  Ros3dGridvue_type_template_id_350f80dc_render,
  Ros3dGridvue_type_template_id_350f80dc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Ros3dGrid = (Ros3dGrid_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60a37599-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dInteractiveMarkerClient.vue?vue&type=template&id=e5e21b42&
var Ros3dInteractiveMarkerClientvue_type_template_id_e5e21b42_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var Ros3dInteractiveMarkerClientvue_type_template_id_e5e21b42_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib-components/Ros3dInteractiveMarkerClient.vue?vue&type=template&id=e5e21b42&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dInteractiveMarkerClient.vue?vue&type=script&lang=js&

//
//
//
//

/**
 * @author Ludwig Waffenschmidt - ludwig.waffenschmidt@outlook.com
 */

/**
 * A client for an interactive marker topic.
 * It is a wrapper for [`ROS3D.InteractiveMarkerClient`]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.InteractiveMarkerClient.html}.
 * 
 * @vue-prop {Boolean} [visible=true] - Visibility of this object
 * @vue-prop {String} [topic] - The topic to subscribe to, like '/basic_controls'
 * 
 * @vue-data {ROS3D.InteractiveMarkerClient} object - Handle for the internal [ROS3D.InteractiveMarkerClient]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.InteractiveMarkerClient.html}
 */

/* harmony default export */ var Ros3dInteractiveMarkerClientvue_type_script_lang_js_ = ({
  name: 'ros3d-interactive-marker-client',
  props: {
    visible: {
      type: Boolean,
      default: true,
      require: false
    },
    topic: {
      type: String,
      default: '',
      require: false
    }
  },
  watch: {
    topic: function topic(n) {
      this.object.unsubscribe();
      this.object.topicName = n;
      this.object.subscribe();
    },
    visible: function visible(newState) {
      if (newState) this.show();else this.hide();
    }
  },
  methods: {
    show: function show() {
      this.$parent.viewer.scene.add(this.object);
    },
    hide: function hide() {
      var obj = this.$parent.viewer.scene.getObjectByName(this._uid);
      if (obj != null) this.$parent.viewer.scene.remove(obj);
    }
  },
  mounted: function mounted() {
    this.object = new external_ros3d_["InteractiveMarkerClient"]({
      ros: this.$parent.ros,
      tfClient: this.$parent.tfClient,
      rootObject: this.$parent.viewer.selectableObjects,
      camera: this.$parent.viewer.camera,
      topic: this.topic
    });
    this.object.name = this._uid;
    if (!this.visible) this.hide();
  },
  beforeDestroy: function beforeDestroy() {
    this.object.unsubscribe();
    this.hide();
  }
});
// CONCATENATED MODULE: ./src/lib-components/Ros3dInteractiveMarkerClient.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_components_Ros3dInteractiveMarkerClientvue_type_script_lang_js_ = (Ros3dInteractiveMarkerClientvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib-components/Ros3dInteractiveMarkerClient.vue





/* normalize component */

var Ros3dInteractiveMarkerClient_component = normalizeComponent(
  lib_components_Ros3dInteractiveMarkerClientvue_type_script_lang_js_,
  Ros3dInteractiveMarkerClientvue_type_template_id_e5e21b42_render,
  Ros3dInteractiveMarkerClientvue_type_template_id_e5e21b42_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Ros3dInteractiveMarkerClient = (Ros3dInteractiveMarkerClient_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60a37599-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dLaserScan.vue?vue&type=template&id=60ca88cc&
var Ros3dLaserScanvue_type_template_id_60ca88cc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var Ros3dLaserScanvue_type_template_id_60ca88cc_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib-components/Ros3dLaserScan.vue?vue&type=template&id=60ca88cc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dLaserScan.vue?vue&type=script&lang=js&


//
//
//
//

/**
 * @author Ludwig Waffenschmidt - ludwig.waffenschmidt@outlook.com
 */

/**
 * A LaserScan client that listens to a given topic and displays the points.
 * It is a wrapper for [`ROS3D.LaserScan`]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.LaserScan.html}.
 * 
 * @vue-prop {Boolean} [visible=true] - Visibility of this object
 * @vue-prop {String} [topic=/scan] - The marker topic to listen to
 * @vue-prop {String} [compression=cbor] - Message compression
 * @vue-prop {Number} [max_pts=10000] - Number of points to draw
 * @vue-prop {Number} [pointRatio=1] - Point subsampling ratio (default: 1, no subsampling)
 * @vue-prop {Number} [messageRatio=1] - Message  subsampling ratio (default: 1, no subsampling)
 * @vue-prop {String} [color=#ff0000] - The color for the laser scan points
 * 
 * @vue-data {ROS3D.LaserScan} object - Handle for the internal [ROS3D.LaserScan]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.LaserScan.html}
 */

/* harmony default export */ var Ros3dLaserScanvue_type_script_lang_js_ = ({
  name: 'ros3d-laser-scan',
  props: {
    visible: {
      type: Boolean,
      default: true,
      require: false
    },
    topic: {
      type: String,
      default: '/scan',
      require: false
    },
    compression: {
      type: String,
      default: 'cbor',
      require: false
    },
    max_pts: {
      type: Number,
      default: 10000,
      require: false
    },
    pointRatio: {
      type: Number,
      default: 1,
      require: false
    },
    messageRatio: {
      type: Number,
      default: 1,
      require: false
    },
    color: {
      type: String,
      default: "#ff0000",
      require: false
    },
    particleSize: {
      type: Number,
      default: 0.25,
      require: false
    }
  },
  watch: {
    visible: function visible(newState) {
      if (newState) this.show();else this.hide();
    },
    topic: function topic(n) {
      this.object.unsubscribe();
      this.object.topicName = n;
      this.object.subscribe();
    },
    compression: function compression(n) {
      this.object.unsubscribe();
      this.object.compression = n;
      this.object.subscribe();
    },
    max_pts: function max_pts() {
      this.$nextTick(this.createObject);
    },
    messageRatio: function messageRatio() {
      this.$nextTick(this.createObject);
    },
    color: function color() {
      this.$nextTick(this.createObject);
    },
    particleSize: function particleSize() {
      this.$nextTick(this.createObject);
    }
  },
  methods: {
    show: function show() {
      this.object.subscribe();
      if (this.object.points.sn != null) this.$parent.viewer.scene.add(this.object.points.sn);
    },
    hide: function hide() {
      this.object.unsubscribe();
      if (this.object.points.sn != null) this.$parent.viewer.scene.remove(this.object.points.sn);
    },
    createObject: function createObject() {
      if (this.object != null) this.hide(); // Setup the laser scan.

      this.object = new external_ros3d_["LaserScan"]({
        ros: this.$parent.ros,
        tfClient: this.$parent.tfClient,
        rootObject: this.$parent.viewer.scene,
        topic: this.topic,
        compression: this.compression,
        max_pts: this.max_pts,
        pointRatio: this.pointRatio,
        messageRatio: this.messageRatio,
        material: {
          color: this.color,
          size: this.particleSize
        }
      });
      this.object.name = this._uid;
      if (!this.visible) this.hide();
    }
  },
  mounted: function mounted() {
    this.createObject();
  },
  beforeDestroy: function beforeDestroy() {
    this.object.unsubscribe();
    this.hide();
  }
});
// CONCATENATED MODULE: ./src/lib-components/Ros3dLaserScan.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_components_Ros3dLaserScanvue_type_script_lang_js_ = (Ros3dLaserScanvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib-components/Ros3dLaserScan.vue





/* normalize component */

var Ros3dLaserScan_component = normalizeComponent(
  lib_components_Ros3dLaserScanvue_type_script_lang_js_,
  Ros3dLaserScanvue_type_template_id_60ca88cc_render,
  Ros3dLaserScanvue_type_template_id_60ca88cc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Ros3dLaserScan = (Ros3dLaserScan_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60a37599-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dMarkerArrayClient.vue?vue&type=template&id=261c7111&
var Ros3dMarkerArrayClientvue_type_template_id_261c7111_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var Ros3dMarkerArrayClientvue_type_template_id_261c7111_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib-components/Ros3dMarkerArrayClient.vue?vue&type=template&id=261c7111&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dMarkerArrayClient.vue?vue&type=script&lang=js&

//
//
//
//

/**
 * Based on https://github.com/LdwgWffnschmdt/vue-ros3djs/blob/master/src/lib-components/Ros3dMarkerClient.vue
 * @author Ludwig Waffenschmidt - ludwig.waffenschmidt@outlook.com
 */

/**
 * A marker array client that listens to a given marker array topic.
 * It is a wrapper for [`ROS3D.MarkerArrayClient`]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.MarkerArrayClient.html}.
 *
 * @vue-prop {Boolean} [visible=true] - Visibility of this object
 * @vue-prop {String} [topic=] - The marker array topic to listen to
 *
 * @vue-data {ROS3D.MarkerArrayClient} object - Handle for the internal [ROS3D.MarkerArrayClient]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.MarkerArrayClient.html}
 */

/* harmony default export */ var Ros3dMarkerArrayClientvue_type_script_lang_js_ = ({
  name: 'ros3d-marker-array-client',
  props: {
    visible: {
      type: Boolean,
      default: true,
      require: false
    },
    topic: {
      type: String,
      default: '',
      require: false
    }
  },
  watch: {
    topic: function topic(n) {
      this.object.unsubscribe();
      this.object.topicName = n;
      this.object.subscribe();
    },
    visible: function visible(newState) {
      if (newState) this.show();else this.hide();
    }
  },
  methods: {
    show: function show() {
      this.$parent.viewer.scene.add(this.object.rootObject);
    },
    hide: function hide() {
      this.$parent.viewer.scene.remove(this.object.rootObject);
    }
  },
  mounted: function mounted() {
    this.object = new external_ros3d_["MarkerArrayClient"]({
      ros: this.$parent.ros,
      tfClient: this.$parent.tfClient,
      topic: this.topic
    });
    this.object.name = this._uid;

    if (this.visible) {
      this.$parent.viewer.scene.add(this.object.rootObject);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.object.unsubscribe();
    this.hide();
  }
});
// CONCATENATED MODULE: ./src/lib-components/Ros3dMarkerArrayClient.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_components_Ros3dMarkerArrayClientvue_type_script_lang_js_ = (Ros3dMarkerArrayClientvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib-components/Ros3dMarkerArrayClient.vue





/* normalize component */

var Ros3dMarkerArrayClient_component = normalizeComponent(
  lib_components_Ros3dMarkerArrayClientvue_type_script_lang_js_,
  Ros3dMarkerArrayClientvue_type_template_id_261c7111_render,
  Ros3dMarkerArrayClientvue_type_template_id_261c7111_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Ros3dMarkerArrayClient = (Ros3dMarkerArrayClient_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60a37599-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dMarkerClient.vue?vue&type=template&id=6cc5815c&
var Ros3dMarkerClientvue_type_template_id_6cc5815c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var Ros3dMarkerClientvue_type_template_id_6cc5815c_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib-components/Ros3dMarkerClient.vue?vue&type=template&id=6cc5815c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dMarkerClient.vue?vue&type=script&lang=js&

//
//
//
//

/**
 * @author Ludwig Waffenschmidt - ludwig.waffenschmidt@outlook.com
 */

/**
 * A marker client that listens to a given marker topic.
 * It is a wrapper for [`ROS3D.MarkerClient`]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.MarkerClient.html}.
 * This custom version of it fires an event when our marker changes that contains information about the marker.
 *
 * @vue-prop {Boolean} [visible=true] - Visibility of this object
 * @vue-prop {String} [topic=] - The marker topic to listen to
 *
 * @vue-data {ROS3D.MarkerClient} object - Handle for the internal [ROS3D.MarkerClient]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.MarkerClient.html}
 */

/* harmony default export */ var Ros3dMarkerClientvue_type_script_lang_js_ = ({
  name: 'ros3d-marker-client',
  props: {
    visible: {
      type: Boolean,
      default: true,
      require: false
    },
    topic: {
      type: String,
      default: '',
      require: false
    }
  },
  watch: {
    topic: function topic(n) {
      this.object.unsubscribe();
      this.object.topicName = n;
      this.object.subscribe();
    },
    visible: function visible(newState) {
      if (newState) this.show();else this.hide();
    }
  },
  methods: {
    show: function show() {
      this.$parent.viewer.scene.add(this.object.rootObject);
    },
    hide: function hide() {
      this.$parent.viewer.scene.remove(this.object.rootObject);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.object = new external_ros3d_["MarkerClient"]({
      ros: this.$parent.ros,
      tfClient: this.$parent.tfClient,
      topic: this.topic
    });
    this.object.name = this._uid;
    this.object.on('change', function () {
      return _this.$emit('update:marker', {
        topic: _this.topic,
        frame: _this.object.markers[0].frameID,
        marker: _this.object.markers[0].children[0]
      });
    });

    if (this.visible) {
      this.show();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.object.unsubscribe();
    this.hide();
  }
});
// CONCATENATED MODULE: ./src/lib-components/Ros3dMarkerClient.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_components_Ros3dMarkerClientvue_type_script_lang_js_ = (Ros3dMarkerClientvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib-components/Ros3dMarkerClient.vue





/* normalize component */

var Ros3dMarkerClient_component = normalizeComponent(
  lib_components_Ros3dMarkerClientvue_type_script_lang_js_,
  Ros3dMarkerClientvue_type_template_id_6cc5815c_render,
  Ros3dMarkerClientvue_type_template_id_6cc5815c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Ros3dMarkerClient = (Ros3dMarkerClient_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60a37599-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dOccupancyGridClient.vue?vue&type=template&id=9129ddec&
var Ros3dOccupancyGridClientvue_type_template_id_9129ddec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var Ros3dOccupancyGridClientvue_type_template_id_9129ddec_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib-components/Ros3dOccupancyGridClient.vue?vue&type=template&id=9129ddec&

// EXTERNAL MODULE: external "roslib"
var external_roslib_ = __webpack_require__("9627");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dOccupancyGridClient.vue?vue&type=script&lang=js&


//
//
//
//

/**
 * @author Ludwig Waffenschmidt - ludwig.waffenschmidt@outlook.com
 */


/**
 * An occupancy grid client that listens to a given map topic.
 * It is a wrapper for [`ROS3D.OccupancyGridClient`]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.OccupancyGridClient.html}.
 * 
 * @vue-prop {Boolean} [visible=true] - Visibility of this object
 * @vue-prop {String} [topic=] - The marker topic to listen to
 * @vue-prop {Number} [x=0] - X offset
 * @vue-prop {Number} [y=0] - Y offset
 * @vue-prop {Number} [z=0] - Z offset
 * @vue-prop {Boolean} [continuous=false] - If the map should be continuously loaded (e.g., for SLAM)
 * 
 * @vue-data {ROS3D.OccupancyGridClient} object - Handle for the internal [ROS3D.OccupancyGridClient]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.OccupancyGridClient.html}
 */

/* harmony default export */ var Ros3dOccupancyGridClientvue_type_script_lang_js_ = ({
  name: 'ros3d-occupancy-grid-client',
  props: {
    visible: {
      type: Boolean,
      default: true,
      require: false
    },
    topic: {
      type: String,
      default: '',
      require: false
    },
    x: {
      type: Number,
      default: 0,
      require: false
    },
    y: {
      type: Number,
      default: 0,
      require: false
    },
    z: {
      type: Number,
      default: 0,
      require: false
    },
    continuous: {
      type: Boolean,
      default: false,
      require: false
    }
  },
  watch: {
    topic: function topic(n) {
      this.object.unsubscribe();
      this.object.topicName = n;
      this.object.subscribe();
    },
    continuous: function continuous(n) {
      this.object.continuous = n;
      if (n) this.object.subscribe();
    },
    x: function x() {
      this.$nextTick(this.setOffset);
    },
    y: function y() {
      this.$nextTick(this.setOffset);
    },
    z: function z() {
      this.$nextTick(this.setOffset);
    },
    visible: function visible(newState) {
      if (newState) this.show();else this.hide();
    }
  },
  methods: {
    show: function show() {
      this.$parent.viewer.scene.add(this.object.sceneNode);
    },
    hide: function hide() {
      if (this.object.sceneNode != null) this.$parent.viewer.scene.remove(this.object.sceneNode);
    },
    setOffset: function setOffset() {
      this.object.unsubscribe();
      this.object.offsetPose = new external_roslib_["Pose"]({
        position: {
          x: this.x,
          y: this.y,
          z: this.z
        }
      });
      this.object.subscribe();
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.object = new external_ros3d_["OccupancyGridClient"]({
      ros: this.$parent.ros,
      tfClient: this.$parent.tfClient,
      rootObject: this.$parent.viewer.scene,
      topic: this.topic,
      continuous: this.continuous,
      offsetPose: new external_roslib_["Pose"]({
        position: {
          x: this.x,
          y: this.y,
          z: this.z
        }
      })
    });
    this.object.name = this._uid;

    this.object.processMessage = function (message) {
      external_ros3d_["OccupancyGridClient"].prototype.processMessage.call(_this.object, message);
    };

    if (!this.visible) this.hide();
  },
  beforeDestroy: function beforeDestroy() {
    this.hide();
  }
});
// CONCATENATED MODULE: ./src/lib-components/Ros3dOccupancyGridClient.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_components_Ros3dOccupancyGridClientvue_type_script_lang_js_ = (Ros3dOccupancyGridClientvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib-components/Ros3dOccupancyGridClient.vue





/* normalize component */

var Ros3dOccupancyGridClient_component = normalizeComponent(
  lib_components_Ros3dOccupancyGridClientvue_type_script_lang_js_,
  Ros3dOccupancyGridClientvue_type_template_id_9129ddec_render,
  Ros3dOccupancyGridClientvue_type_template_id_9129ddec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Ros3dOccupancyGridClient = (Ros3dOccupancyGridClient_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60a37599-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dPath.vue?vue&type=template&id=25342f76&
var Ros3dPathvue_type_template_id_25342f76_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var Ros3dPathvue_type_template_id_25342f76_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib-components/Ros3dPath.vue?vue&type=template&id=25342f76&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dPath.vue?vue&type=script&lang=js&

//
//
//
//

/**
 * @author Ludwig Waffenschmidt - ludwig.waffenschmidt@outlook.com
 */

/**
 * A Path client that listens to a given topic and displays a line connecting the poses.
 * It is a wrapper for [`ROS3D.Path`]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.Path.html}.
 * 
 * @vue-prop {Boolean} [visible=true] - Visibility of this object
 * @vue-prop {String} [topic=] - The path topic to listen to
 * @vue-prop {String} [color=#009688] - The color to use for this arrow
 * 
 * @vue-data {ROS3D.Path} object - Handle for the internal [ROS3D.Path]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.Path.html}
 */

/* harmony default export */ var Ros3dPathvue_type_script_lang_js_ = ({
  name: 'ros3d-path',
  props: {
    visible: {
      type: Boolean,
      default: true,
      require: false
    },
    topic: {
      type: String,
      default: '',
      require: false
    },
    color: {
      type: String,
      default: "#009688",
      require: false
    }
  },
  watch: {
    topic: function topic(n) {
      this.object.unsubscribe();
      this.object.topicName = n;
      this.object.subscribe();
    },
    color: function color(n) {
      this.object.color = n;
    },
    visible: function visible(newState) {
      if (newState) this.show();else this.hide();
    }
  },
  methods: {
    show: function show() {
      this.$parent.viewer.scene.add(this.object);
    },
    hide: function hide() {
      var obj = this.$parent.viewer.scene.getObjectByName(this._uid);
      if (obj != null) this.$parent.viewer.scene.remove(obj);
    }
  },
  mounted: function mounted() {
    this.object = new external_ros3d_["Path"]({
      ros: this.$parent.ros,
      tfClient: this.$parent.tfClient,
      rootObject: this.$parent.viewer.scene,
      topic: this.topic,
      color: this.color
    });
    this.object.name = this._uid;
    if (!this.visible) this.hide();
  },
  beforeDestroy: function beforeDestroy() {
    this.object.unsubscribe();
    this.hide();
  }
});
// CONCATENATED MODULE: ./src/lib-components/Ros3dPath.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_components_Ros3dPathvue_type_script_lang_js_ = (Ros3dPathvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib-components/Ros3dPath.vue





/* normalize component */

var Ros3dPath_component = normalizeComponent(
  lib_components_Ros3dPathvue_type_script_lang_js_,
  Ros3dPathvue_type_template_id_25342f76_render,
  Ros3dPathvue_type_template_id_25342f76_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Ros3dPath = (Ros3dPath_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60a37599-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dPointCloud2.vue?vue&type=template&id=35d5fb3f&
var Ros3dPointCloud2vue_type_template_id_35d5fb3f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var Ros3dPointCloud2vue_type_template_id_35d5fb3f_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib-components/Ros3dPointCloud2.vue?vue&type=template&id=35d5fb3f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dPointCloud2.vue?vue&type=script&lang=js&


//
//
//
//

/**
 * @author Ludwig Waffenschmidt - ludwig.waffenschmidt@outlook.com
 */

/**
 * A Path client that listens to a given topic and displays a line connecting the poses.
 * It is a wrapper for [`ROS3D.PointCloud2`]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.PointCloud2.html}.
 * 
 * @vue-prop {Boolean} [visible=true] - Visibility of this object
 * @vue-prop {String} [topic=/points] - The PointCloud2 topic to listen to
 * @vue-prop {String} [compression=cbor] - Message compression
 * @vue-prop {Number} [max_pts=10000] - Number of points to draw
 * @vue-prop {Number} [pointRatio=1] - Point subsampling ratio (default: 1, no subsampling)
 * @vue-prop {Number} [messageRatio=1] - Message  subsampling ratio (default: 1, no subsampling)
 * @vue-prop {Number} [colorsrc=rgb] - The field to be used for coloring
 * @vue-prop {Object} [colormap] - Function that turns the colorsrc field value to a color
 * @vue-prop {Number} [particleSize=0.25] - Size of the particles
 * @vue-prop {String} [color=#009688] - The color to use for the particles
 * 
 * @vue-data {ROS3D.PointCloud2} object - Handle for the internal [ROS3D.PointCloud2]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.PointCloud2.html}
 */

/* harmony default export */ var Ros3dPointCloud2vue_type_script_lang_js_ = ({
  name: 'ros3d-point-cloud2',
  props: {
    visible: {
      type: Boolean,
      default: true,
      require: false
    },
    topic: {
      type: String,
      default: '/points',
      require: false
    },
    compression: {
      type: String,
      default: 'cbor',
      require: false
    },
    max_pts: {
      type: Number,
      default: 10000,
      require: false
    },
    pointRatio: {
      type: Number,
      default: 1,
      require: false
    },
    messageRatio: {
      type: Number,
      default: 1,
      require: false
    },
    colorsrc: {
      type: String,
      default: "rgb",
      require: false
    },
    colormap: {
      type: Object,
      default: undefined,
      require: false
    },
    color: {
      type: String,
      default: "#ff0000",
      require: false
    },
    particleSize: {
      type: Number,
      default: 0.25,
      require: false
    }
  },
  watch: {
    visible: function visible(newState) {
      if (newState) this.show();else this.hide();
    },
    topic: function topic(n) {
      this.object.unsubscribe();
      this.object.topicName = n;
      this.object.subscribe();
    },
    compression: function compression(n) {
      this.object.unsubscribe();
      this.object.compression = n;
      this.object.subscribe();
    },
    max_pts: function max_pts() {
      this.$nextTick(this.createObject);
    },
    messageRatio: function messageRatio() {
      this.$nextTick(this.createObject);
    },
    colorsrc: function colorsrc() {
      this.$nextTick(this.createObject);
    },
    colormap: function colormap() {
      this.$nextTick(this.createObject);
    },
    color: function color() {
      this.$nextTick(this.createObject);
    },
    particleSize: function particleSize() {
      this.$nextTick(this.createObject);
    }
  },
  methods: {
    show: function show() {
      this.object.subscribe();
      if (this.object.points.sn != null) this.$parent.viewer.scene.add(this.object.points.sn);
    },
    hide: function hide() {
      this.object.unsubscribe();
      if (this.object.points.sn != null) this.$parent.viewer.scene.remove(this.object.points.sn);
    },
    createObject: function createObject() {
      if (this.object != null) this.hide(); // Setup the point cloud.

      this.object = new external_ros3d_["PointCloud2"]({
        ros: this.$parent.ros,
        tfClient: this.$parent.tfClient,
        rootObject: this.$parent.viewer.scene,
        topic: this.topic,
        compression: this.compression,
        max_pts: this.max_pts,
        pointRatio: this.pointRatio,
        messageRatio: this.messageRatio,
        material: {
          color: this.color,
          size: this.particleSize
        }
      });
      this.object.name = this._uid;
      if (!this.visible) this.hide();
    }
  },
  mounted: function mounted() {
    this.createObject();
  },
  beforeDestroy: function beforeDestroy() {
    this.object.unsubscribe();
    this.hide();
  }
});
// CONCATENATED MODULE: ./src/lib-components/Ros3dPointCloud2.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_components_Ros3dPointCloud2vue_type_script_lang_js_ = (Ros3dPointCloud2vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib-components/Ros3dPointCloud2.vue





/* normalize component */

var Ros3dPointCloud2_component = normalizeComponent(
  lib_components_Ros3dPointCloud2vue_type_script_lang_js_,
  Ros3dPointCloud2vue_type_template_id_35d5fb3f_render,
  Ros3dPointCloud2vue_type_template_id_35d5fb3f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Ros3dPointCloud2 = (Ros3dPointCloud2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60a37599-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dPoseArrow.vue?vue&type=template&id=0d362dc9&
var Ros3dPoseArrowvue_type_template_id_0d362dc9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var Ros3dPoseArrowvue_type_template_id_0d362dc9_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib-components/Ros3dPoseArrow.vue?vue&type=template&id=0d362dc9&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dPoseArrow.vue?vue&type=script&lang=js&


//
//
//
//

/**
 * @author Ludwig Waffenschmidt - ludwig.waffenschmidt@outlook.com
 */


/**
 * This is the same as the {@link Ros3dArrow}, but it directly takes a [`ROSLIB.Pose`]{@link http://robotwebtools.org/jsdoc/roslibjs/current/Pose.html}.
 * 
 * @vue-prop {Boolean} [visible=true] - Visibility of this object
 * @vue-prop {ROSLIB.Pose} [pose] - [ROSLIB.Pose]{@link http://robotwebtools.org/jsdoc/roslibjs/current/Pose.html} of the arrow
 * @vue-prop {Number} length (optional) - the length of the arrow
 * @vue-prop {Number} [headLength=1] - The head length of the arrow
 * @vue-prop {Number} [shaftDiameter=0.2] - The shaft diameter of the arrow
 * @vue-prop {Number} [headDiameter=0.05] - The head diameter of the arrow
 * @vue-prop {String} [color=#00ff00] - The color to use for this arrow
 * 
 * @vue-data {ROS3D.Arrow} object - Handle for the internal [ROS3D.Arrow]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.Arrow.html}
 */

/* harmony default export */ var Ros3dPoseArrowvue_type_script_lang_js_ = ({
  name: 'ros3d-pose-arrow',
  inheritAttrs: false,
  props: {
    visible: {
      type: Boolean,
      default: true,
      require: false
    },
    pose: {
      type: Object,
      default: undefined,
      require: false
    },
    length: {
      type: Number,
      default: 1,
      require: false
    },
    headLength: {
      type: Number,
      default: 0.2,
      require: false
    },
    shaftDiameter: {
      type: Number,
      default: 0.05,
      require: false
    },
    headDiameter: {
      type: Number,
      default: 0.1,
      require: false
    },
    color: {
      type: String,
      default: "#00ff00",
      require: false
    }
  },
  watch: {
    color: function color(n) {
      this.object.material.color.set(n);
    },
    pose: function pose() {
      this.$nextTick(this.setPose);
    },
    length: function length(n) {
      this.object.setLength(n);
    },
    visible: function visible(newState) {
      if (newState) this.show();else this.hide();
    }
  },
  methods: {
    show: function show() {
      this.$parent.viewer.scene.add(this.object);
    },
    hide: function hide() {
      var obj = this.$parent.viewer.scene.getObjectByName(this._uid);
      if (obj != null) this.$parent.viewer.scene.remove(obj);
    },
    setPose: function setPose() {
      if (this.pose == undefined) return;
      this.object.position.set(this.pose.position.x, this.pose.position.y, this.pose.position.z);
      var rot = new external_three_["Quaternion"](this.pose.orientation.x, this.pose.orientation.y, this.pose.orientation.z, this.pose.orientation.w);
      var direction = new external_three_["Vector3"](1, 0, 0);
      direction.applyQuaternion(rot);
      this.object.setDirection(direction);
    }
  },
  mounted: function mounted() {
    this.object = new external_ros3d_["Arrow"]({
      ros: this.$parent.ros,
      tfClient: this.$parent.tfClient,
      rootObject: this.$parent.viewer.scene,
      length: this.length,
      headLength: this.headLength,
      shaftDiameter: this.shaftDiameter,
      headDiameter: this.headDiameter,
      material: new external_three_["MeshBasicMaterial"]({
        color: this.color
      })
    });
    this.object.name = this._uid;
    this.setPose();
    if (this.visible) this.show();
  },
  beforeDestroy: function beforeDestroy() {
    this.hide();
  }
});
// CONCATENATED MODULE: ./src/lib-components/Ros3dPoseArrow.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_components_Ros3dPoseArrowvue_type_script_lang_js_ = (Ros3dPoseArrowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib-components/Ros3dPoseArrow.vue





/* normalize component */

var Ros3dPoseArrow_component = normalizeComponent(
  lib_components_Ros3dPoseArrowvue_type_script_lang_js_,
  Ros3dPoseArrowvue_type_template_id_0d362dc9_render,
  Ros3dPoseArrowvue_type_template_id_0d362dc9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Ros3dPoseArrow = (Ros3dPoseArrow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60a37599-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dSceneNode.vue?vue&type=template&id=510b170d&
var Ros3dSceneNodevue_type_template_id_510b170d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var Ros3dSceneNodevue_type_template_id_510b170d_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib-components/Ros3dSceneNode.vue?vue&type=template&id=510b170d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dSceneNode.vue?vue&type=script&lang=js&

//
//
//
//

/**
 * @author Ludwig Waffenschmidt - ludwig.waffenschmidt@outlook.com
 */

/**
 * A SceneNode can be used to keep track of a 3D object with respect to a ROS frame within a scene.
 * It is more or less a wrapper for [`ROS3D.SceneNode`]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.SceneNode.html}.
 * 
 * @vue-prop {Object} model - The THREE 3D object to be rendered
 * @vue-prop {String} [frameID=base_link] - The frame ID this object belongs to
 * @vue-prop {Boolean} [visible=true] - Visibility of this object
 * 
 * @vue-data {ROS3D.SceneNode} object - Handle for the internal [ROS3D.SceneNode]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.SceneNode.html}
 */

/* harmony default export */ var Ros3dSceneNodevue_type_script_lang_js_ = ({
  name: 'ros3d-scene-node',
  props: {
    model: {
      type: Object,
      require: true
    },
    frameID: {
      type: String,
      default: 'base_link',
      require: false
    },
    visible: {
      type: Boolean,
      default: true,
      require: false
    }
  },
  watch: {
    model: function model() {
      this.$nextTick(this.createObject);
    },
    frameID: function frameID() {
      this.$nextTick(this.createObject);
    },
    visible: function visible(newState) {
      if (newState) this.show();else this.hide();
    }
  },
  methods: {
    show: function show() {
      this.$parent.viewer.scene.add(this.object);
    },
    hide: function hide() {
      var obj = this.$parent.viewer.scene.getObjectByName(this._uid);
      if (obj != null) this.$parent.viewer.scene.remove(obj);
    },
    createObject: function createObject() {
      if (this.object != null) this.hide();

      if (this.model != null) {
        this.object = new external_ros3d_["SceneNode"]({
          tfClient: this.$parent.tfClient,
          frameID: this.frameID,
          object: this.model
        });
        this.object.name = this._uid; // This is not done automatically

        this.show();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.object.unsubscribeTf();
    this.hide();
  }
});
// CONCATENATED MODULE: ./src/lib-components/Ros3dSceneNode.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_components_Ros3dSceneNodevue_type_script_lang_js_ = (Ros3dSceneNodevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib-components/Ros3dSceneNode.vue





/* normalize component */

var Ros3dSceneNode_component = normalizeComponent(
  lib_components_Ros3dSceneNodevue_type_script_lang_js_,
  Ros3dSceneNodevue_type_template_id_510b170d_render,
  Ros3dSceneNodevue_type_template_id_510b170d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Ros3dSceneNode = (Ros3dSceneNode_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60a37599-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dUrdfClient.vue?vue&type=template&id=0206647a&
var Ros3dUrdfClientvue_type_template_id_0206647a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var Ros3dUrdfClientvue_type_template_id_0206647a_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib-components/Ros3dUrdfClient.vue?vue&type=template&id=0206647a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dUrdfClient.vue?vue&type=script&lang=js&

//
//
//
//

/**
 * A URDF client that pulls the robot description from the parameter server.
 * It is a wrapper for [`ROS3D.UrdfClient`]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.UrdfClient.html}.
 *
 * @vue-prop {Boolean} [visible=true] - Visibility of this object
 * @vue-prop {String} [param=] - Paramter to load the URDF from, like 'robot_description'
 * @vue-prop {String} [path=] - Base path to the associated Collada models that will be loaded
 * @vue-prop {String} [tfPrefix=] - TF prefix to used for multi-robots
 *
 * @vue-data {ROS3D.UrdfClient} object - Handle for the internal [ROS3D.UrdfClient]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.UrdfClient.html}
 */

/* harmony default export */ var Ros3dUrdfClientvue_type_script_lang_js_ = ({
  name: 'ros3d-urdf-client',
  props: {
    visible: {
      type: Boolean,
      default: true,
      require: false
    },
    param: {
      type: String,
      default: 'robot_description',
      require: false
    },
    path: {
      type: String,
      default: null,
      require: false
    },
    tfPrefix: {
      type: String,
      default: null,
      require: false
    }
  },
  watch: {
    visible: function visible(newState) {
      if (newState) this.show();else this.hide();
    }
  },
  methods: {
    show: function show() {
      this.$parent.viewer.scene.add(this.object.rootObject);
    },
    hide: function hide() {
      this.$parent.viewer.scene.remove(this.object.rootObject);
    }
  },
  mounted: function mounted() {
    this.object = new external_ros3d_["UrdfClient"]({
      ros: this.$parent.ros,
      param: this.param,
      tfClient: this.$parent.tfClient,
      path: this.path,
      tfPrefix: this.tfPrefix,
      loader: external_ros3d_["COLLADA_LOADER"]
    });
    this.object.name = this._uid;

    if (this.visible) {
      this.show();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.hide();
  }
});
// CONCATENATED MODULE: ./src/lib-components/Ros3dUrdfClient.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_components_Ros3dUrdfClientvue_type_script_lang_js_ = (Ros3dUrdfClientvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib-components/Ros3dUrdfClient.vue





/* normalize component */

var Ros3dUrdfClient_component = normalizeComponent(
  lib_components_Ros3dUrdfClientvue_type_script_lang_js_,
  Ros3dUrdfClientvue_type_template_id_0206647a_render,
  Ros3dUrdfClientvue_type_template_id_0206647a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Ros3dUrdfClient = (Ros3dUrdfClient_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"60a37599-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dViewer.vue?vue&type=template&id=7e0b2956&
var Ros3dViewervue_type_template_id_7e0b2956_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.loaded)?_vm._t("default"):_vm._e()],2)}
var Ros3dViewervue_type_template_id_7e0b2956_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib-components/Ros3dViewer.vue?vue&type=template&id=7e0b2956&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.sub.js
var es_string_sub = __webpack_require__("4c53");

// EXTERNAL MODULE: external "@tweenjs/tween.js"
var tween_js_ = __webpack_require__("9ee4");
var tween_js_default = /*#__PURE__*/__webpack_require__.n(tween_js_);

// EXTERNAL MODULE: ./node_modules/timers-browserify/main.js
var main = __webpack_require__("5118");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib-components/Ros3dViewer.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//

/**
 * Based on https://github.com/LdwgWffnschmdt/vue-ros3djs/blob/master/src/lib-components/Ros3dViewer.vue
 * @author Ludwig Waffenschmidt - ludwig.waffenschmidt@outlook.com
 */



 // var Three = window.Three = require('three');


/**
 * @typedef {Object} TouchResult
 * @property {ROSLIB.Pose} pose - [`ROSLIB.Pose`]{@link http://robotwebtools.org/jsdoc/roslibjs/current/Pose.html} object relative to the `fixedFrame` TF frame
 * @property {number[]} screenPosition - X and Y coordinates on the screen
 */

/**
 * This is the root object all others are placed in.
 * It is more or less a wrapper for [`ROS3D.Viewer`]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.Viewer.html} with some additional logic for right-click/long-press handling and already integrates [`ROSLIB.TFClient`]{@link http://robotwebtools.org/jsdoc/roslibjs/current/TFClient.html}.
 * 
 * @vue-prop {ROSLIB.Ros} ros - [ROSLIB.Ros]{@link http://robotwebtools.org/jsdoc/roslibjs/current/Ros.html} connection handle
 * @vue-prop {String} [background=#7e7e7e] - The color to render the background, like '#efefef'
 * @vue-prop {Boolean} [antialias=true] - If antialiasing should be used
 * @vue-prop {String} [fixedFrame=/map] - The fixed base frame for the tf listener
 * @vue-prop {Number} [longPressTolerance=15] - Tolerance in pixels for finger movement during long-press
 * @vue-prop {Number} [longPressDuration=750] - Duration for long-press in milliseconds
 * 
 * @vue-data {ROS3D.Viewer} viewer - Handle for the internal [ROS3D.Viewer]{@link http://robotwebtools.org/jsdoc/ros3djs/current/ROS3D.Viewer.html}
 * @vue-data {ROSLIB.TFClient} tfClient - Handle for the internal [ROSLIB.TFClient]{@link http://robotwebtools.org/jsdoc/roslibjs/current/TFClient.html}
 * 
 * @vue-event {TouchResult} touch - Emitted on right-click or long-press. {@link TouchResult}
 */

/* harmony default export */ var Ros3dViewervue_type_script_lang_js_ = ({
  name: 'ros3d-viewer',
  props: {
    ros: {
      type: Object,
      require: true
    },
    background: {
      type: String,
      default: '#7e7e7e',
      require: false
    },
    antialias: {
      type: Boolean,
      default: true,
      require: false
    },
    fixedFrame: {
      type: String,
      default: '/map',
      require: false
    },
    longPressTolerance: {
      type: Number,
      default: 15,
      require: false
    },
    longPressDuration: {
      type: Number,
      default: 750,
      require: false
    },
    initialCameraPose: {
      type: Object,
      require: false,
      default: function _default() {
        return {
          x: 8,
          y: 7,
          z: 50
        };
      }
    }
  },
  data: function data() {
    return {
      viewer: null,
      tfClient: null,
      loaded: false,
      hold: false,
      position: null,
      direction: null,
      screenPosition: null
    };
  },
  watch: {
    hold: function hold(n, o) {
      if (n && !o) {
        this.viewer.scene.add(this.arrow);
      } else if (o && !n) {
        this.viewer.scene.remove(this.arrow);
      }
    },
    position: function position(n) {
      if (n != null) {
        this.arrow.position.set(n.x, n.y, n.z + 0.05);
        this.circle.position.set(n.x, n.y, n.z + 0.05);
      }
    },
    direction: function direction(n) {
      if (n != null) this.arrow.setDirection(n);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$el.id = "viewer"; // Create the main viewer.

    this.viewer = new external_ros3d_["Viewer"]({
      divID: this.$el.id,
      width: this.$el.clientWidth,
      height: this.$el.clientHeight,
      antialias: this.antialias,
      background: this.background,
      displayPanAndZoomFrame: false,
      cameraPose: this.initialCameraPose
    });
    window.addEventListener('resize', this.handleResize); // Add TWEEN.update() to draw loop (for smooth animations)

    this.viewer.draw = function () {
      tween_js_default.a.update();
      external_ros3d_["Viewer"].prototype.draw.call(_this.viewer);
    }; // Setup a client to listen to TFs.


    this.tfClient = new external_roslib_["TFClient"]({
      ros: this.ros,
      angularThres: 0.0001,
      transThres: 0.0001,
      rate: 10.0,
      fixedFrame: this.fixedFrame
    }); // listen to DOM events

    var eventNames = ['contextmenu', 'click', 'mouseout', 'mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchend', 'touchcancel', 'touchleave', 'touchmove'];
    this.listeners = {}; // add event listeners for the associated mouse events

    eventNames.forEach(function (eventName) {
      _this.listeners[eventName] = _this.processDomEvent.bind(_this);

      _this.$el.addEventListener(eventName, _this.listeners[eventName], true);
    }, this); // For debug reason

    window.scene = window.Scene = this.viewer.scene; // Create arrow for touch-and-hold or right-click

    this.arrow = new external_ros3d_["Arrow"]({
      ros: this.ros,
      tfClient: this.tfClient,
      rootObject: this.viewer.scene,
      material: new external_three_["MeshBasicMaterial"]({
        color: 0xff0000
      })
    }); // Create circle for touchdown animation

    var geometry = new external_three_["CircleGeometry"](1, 32);
    var material = new external_three_["MeshPhongMaterial"]({
      color: 0x000000,
      specular: 0x666666,
      emissive: 0x994400,
      shininess: 0,
      opacity: 0.5,
      transparent: true
    });
    this.circle = new external_three_["Mesh"](geometry, material);
    this.circle.visible = false;
    this.circle.scale.set(0, 0, 0);
    this.viewer.scene.add(this.circle);
    this.loaded = true;
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize: function handleResize() {
      this.viewer.resize(this.$el.clientWidth, this.$el.clientHeight);
    },
    startTimer: function startTimer() {
      var _this2 = this;

      if (this.timer) Object(main["clearTimeout"])(this.timer);
      this.timer = Object(main["setTimeout"])(function () {
        return _this2.hold = true;
      }, this.longPressDuration);
    },
    stopTimer: function stopTimer() {
      if (this.timer) {
        Object(main["clearTimeout"])(this.timer);
        this.timer = undefined;
      }

      this.hold = false;
      this.position = null;
      this.direction = null;
      this.screenPosition = null;
      this.circle.visible = false;
      this.circle.scale.set(0, 0, 0);
    },
    processDomEvent: function processDomEvent(domEvent) {
      var _this3 = this;

      this.$emit(domEvent.type); // if the mouse/touch leaves the dom element, stop everything

      if (domEvent.type === 'mouseout' || domEvent.type === 'touchleave' || domEvent.type === 'touchcancel') {
        this.stopTimer();
        return;
      }

      if (domEvent.type === 'mouseup' || domEvent.type === 'click' || domEvent.type === 'touchend') {
        if (this.hold) {
          var quat = new external_three_["Quaternion"]();
          this.arrow.getWorldQuaternion(quat);
          quat = quat.multiply(new external_three_["Quaternion"](0, 0, Math.sqrt(0.5), Math.sqrt(0.5)));
          this.$emit("touch", {
            pose: new external_roslib_["Pose"]({
              position: new external_roslib_["Vector3"]({
                x: this.position.x,
                y: this.position.y
              }),
              orientation: new external_roslib_["Quaternion"]({
                x: quat.x,
                y: quat.y,
                z: quat.z,
                w: quat.w
              })
            }),
            screenPosition: this.screenPosition
          });
        }

        this.stopTimer();
        return;
      }

      var pos_x, pos_y;

      if (domEvent.type.indexOf('touch') !== -1) {
        pos_x = 0;
        pos_y = 0;

        for (var i = 0; i < domEvent.touches.length; ++i) {
          pos_x += domEvent.touches[i].clientX;
          pos_y += domEvent.touches[i].clientY;
        }

        pos_x /= domEvent.touches.length;
        pos_y /= domEvent.touches.length;
      } else {
        pos_x = domEvent.clientX;
        pos_y = domEvent.clientY;
      } // Calculate the touch position in ROS space


      var vec = new external_three_["Vector3"](); // create once and reuse

      var pos = new external_three_["Vector3"](); // create once and reuse

      vec.set(pos_x / window.innerWidth * 2 - 1, -(pos_y / window.innerHeight) * 2 + 1, 0.5);
      vec.unproject(this.viewer.camera);
      vec.sub(this.viewer.camera.position).normalize();
      var distance = -this.viewer.camera.position.z / vec.z;
      pos.copy(this.viewer.camera.position).add(vec.multiplyScalar(distance));
      var scaleVector, scaleFactor, scale;

      if (domEvent.type === 'mousedown' && domEvent.button === 2) {
        // Right click
        this.hold = true;
        this.position = pos;
        this.screenPosition = [pos_x, pos_y]; // Make touch group scale independent of camera

        scaleVector = new external_three_["Vector3"]();
        scaleFactor = 20;
        scale = scaleVector.subVectors(this.position, this.viewer.camera.position).length() / scaleFactor;
        this.arrow.scale.set(scale, scale, 1);
        return;
      } else if (domEvent.type === 'touchmove' || domEvent.type === 'mousemove') {
        if (this.hold) {
          this.hold = true;
          this.direction = pos.sub(this.position);
          domEvent.stopPropagation();
        } else if (this.screenPosition == null || Math.sqrt((this.screenPosition[0] - pos_x) * (this.screenPosition[0] - pos_x) + (this.screenPosition[1] - pos_y) * (this.screenPosition[1] - pos_y)) > this.longPressTolerance) {
          this.stopTimer();
        }

        return;
      } else if (domEvent.type === 'touchstart') {
        this.position = pos;
        this.screenPosition = [pos_x, pos_y];
        this.startTimer(); // Make touch group scale independent of camera

        scaleVector = new external_three_["Vector3"]();
        scaleFactor = 10;
        scale = scaleVector.subVectors(this.position, this.viewer.camera.position).length() / scaleFactor;
        this.arrow.scale.set(scale, scale, 1);
        this.circle.visible = true;
        if (this.circleScaleTween) this.circleScaleTween.stop();
        this.circle.scale.set(0, 0, 0);
        this.circleScaleTween = new tween_js_default.a.Tween(this.circle.scale.clone()).to(new external_three_["Vector3"](scale, scale, 1), this.longPressDuration).easing(tween_js_default.a.Easing.Back.InOut).onUpdate(function (obj) {
          _this3.circle.scale.copy(obj);
        }).start();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/lib-components/Ros3dViewer.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_components_Ros3dViewervue_type_script_lang_js_ = (Ros3dViewervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib-components/Ros3dViewer.vue





/* normalize component */

var Ros3dViewer_component = normalizeComponent(
  lib_components_Ros3dViewervue_type_script_lang_js_,
  Ros3dViewervue_type_template_id_7e0b2956_render,
  Ros3dViewervue_type_template_id_7e0b2956_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Ros3dViewer = (Ros3dViewer_component.exports);
// CONCATENATED MODULE: ./src/index.js














// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fcaf":
/***/ (function(module, exports) {

module.exports = require("ros3d");

/***/ })

/******/ });
//# sourceMappingURL=vue-ros3djs.common.js.map