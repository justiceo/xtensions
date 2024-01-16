var IS_DEV_BUILD=true;
(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/@sentry/utils/esm/is.js
  var objectToString = Object.prototype.toString;
  function isError(wat) {
    switch (objectToString.call(wat)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return true;
      default:
        return isInstanceOf(wat, Error);
    }
  }
  function isBuiltin(wat, className) {
    return objectToString.call(wat) === `[object ${className}]`;
  }
  function isErrorEvent(wat) {
    return isBuiltin(wat, "ErrorEvent");
  }
  function isDOMError(wat) {
    return isBuiltin(wat, "DOMError");
  }
  function isDOMException(wat) {
    return isBuiltin(wat, "DOMException");
  }
  function isString(wat) {
    return isBuiltin(wat, "String");
  }
  function isPrimitive(wat) {
    return wat === null || typeof wat !== "object" && typeof wat !== "function";
  }
  function isPlainObject(wat) {
    return isBuiltin(wat, "Object");
  }
  function isEvent(wat) {
    return typeof Event !== "undefined" && isInstanceOf(wat, Event);
  }
  function isElement(wat) {
    return typeof Element !== "undefined" && isInstanceOf(wat, Element);
  }
  function isRegExp(wat) {
    return isBuiltin(wat, "RegExp");
  }
  function isThenable(wat) {
    return Boolean(wat && wat.then && typeof wat.then === "function");
  }
  function isSyntheticEvent(wat) {
    return isPlainObject(wat) && "nativeEvent" in wat && "preventDefault" in wat && "stopPropagation" in wat;
  }
  function isNaN2(wat) {
    return typeof wat === "number" && wat !== wat;
  }
  function isInstanceOf(wat, base) {
    try {
      return wat instanceof base;
    } catch (_e) {
      return false;
    }
  }
  function isVueViewModel(wat) {
    return !!(typeof wat === "object" && wat !== null && (wat.__isVue || wat._isVue));
  }

  // node_modules/@sentry/utils/esm/string.js
  function truncate(str, max2 = 0) {
    if (typeof str !== "string" || max2 === 0) {
      return str;
    }
    return str.length <= max2 ? str : `${str.slice(0, max2)}...`;
  }
  function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
      return "";
    }
    const output = [];
    for (let i = 0; i < input.length; i++) {
      const value = input[i];
      try {
        if (isVueViewModel(value)) {
          output.push("[VueViewModel]");
        } else {
          output.push(String(value));
        }
      } catch (e) {
        output.push("[value cannot be serialized]");
      }
    }
    return output.join(delimiter);
  }
  function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
    if (!isString(value)) {
      return false;
    }
    if (isRegExp(pattern)) {
      return pattern.test(value);
    }
    if (isString(pattern)) {
      return requireExactStringMatch ? value === pattern : value.includes(pattern);
    }
    return false;
  }
  function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
    return patterns.some((pattern) => isMatchingPattern(testString, pattern, requireExactStringMatch));
  }

  // node_modules/@sentry/utils/esm/aggregate-errors.js
  function applyAggregateErrorsToEvent(exceptionFromErrorImplementation, parser, maxValueLimit = 250, key, limit, event, hint) {
    if (!event.exception || !event.exception.values || !hint || !isInstanceOf(hint.originalException, Error)) {
      return;
    }
    const originalException = event.exception.values.length > 0 ? event.exception.values[event.exception.values.length - 1] : void 0;
    if (originalException) {
      event.exception.values = truncateAggregateExceptions(
        aggregateExceptionsFromError(
          exceptionFromErrorImplementation,
          parser,
          limit,
          hint.originalException,
          key,
          event.exception.values,
          originalException,
          0
        ),
        maxValueLimit
      );
    }
  }
  function aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, error, key, prevExceptions, exception, exceptionId) {
    if (prevExceptions.length >= limit + 1) {
      return prevExceptions;
    }
    let newExceptions = [...prevExceptions];
    if (isInstanceOf(error[key], Error)) {
      applyExceptionGroupFieldsForParentException(exception, exceptionId);
      const newException = exceptionFromErrorImplementation(parser, error[key]);
      const newExceptionId = newExceptions.length;
      applyExceptionGroupFieldsForChildException(newException, key, newExceptionId, exceptionId);
      newExceptions = aggregateExceptionsFromError(
        exceptionFromErrorImplementation,
        parser,
        limit,
        error[key],
        key,
        [newException, ...newExceptions],
        newException,
        newExceptionId
      );
    }
    if (Array.isArray(error.errors)) {
      error.errors.forEach((childError, i) => {
        if (isInstanceOf(childError, Error)) {
          applyExceptionGroupFieldsForParentException(exception, exceptionId);
          const newException = exceptionFromErrorImplementation(parser, childError);
          const newExceptionId = newExceptions.length;
          applyExceptionGroupFieldsForChildException(newException, `errors[${i}]`, newExceptionId, exceptionId);
          newExceptions = aggregateExceptionsFromError(
            exceptionFromErrorImplementation,
            parser,
            limit,
            childError,
            key,
            [newException, ...newExceptions],
            newException,
            newExceptionId
          );
        }
      });
    }
    return newExceptions;
  }
  function applyExceptionGroupFieldsForParentException(exception, exceptionId) {
    exception.mechanism = exception.mechanism || { type: "generic", handled: true };
    exception.mechanism = {
      ...exception.mechanism,
      is_exception_group: true,
      exception_id: exceptionId
    };
  }
  function applyExceptionGroupFieldsForChildException(exception, source, exceptionId, parentId) {
    exception.mechanism = exception.mechanism || { type: "generic", handled: true };
    exception.mechanism = {
      ...exception.mechanism,
      type: "chained",
      source,
      exception_id: exceptionId,
      parent_id: parentId
    };
  }
  function truncateAggregateExceptions(exceptions, maxValueLength) {
    return exceptions.map((exception) => {
      if (exception.value) {
        exception.value = truncate(exception.value, maxValueLength);
      }
      return exception;
    });
  }

  // node_modules/@sentry/utils/esm/worldwide.js
  function isGlobalObj(obj) {
    return obj && obj.Math == Math ? obj : void 0;
  }
  var GLOBAL_OBJ = typeof globalThis == "object" && isGlobalObj(globalThis) || typeof window == "object" && isGlobalObj(window) || typeof self == "object" && isGlobalObj(self) || typeof global == "object" && isGlobalObj(global) || function() {
    return this;
  }() || {};
  function getGlobalObject() {
    return GLOBAL_OBJ;
  }
  function getGlobalSingleton(name, creator, obj) {
    const gbl = obj || GLOBAL_OBJ;
    const __SENTRY__ = gbl.__SENTRY__ = gbl.__SENTRY__ || {};
    const singleton = __SENTRY__[name] || (__SENTRY__[name] = creator());
    return singleton;
  }

  // node_modules/@sentry/utils/esm/browser.js
  var WINDOW = getGlobalObject();
  var DEFAULT_MAX_STRING_LENGTH = 80;
  function htmlTreeAsString(elem, options = {}) {
    try {
      let currentElem = elem;
      const MAX_TRAVERSE_HEIGHT = 5;
      const out = [];
      let height = 0;
      let len = 0;
      const separator = " > ";
      const sepLength = separator.length;
      let nextStr;
      const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
      const maxStringLength = !Array.isArray(options) && options.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
      while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
        nextStr = _htmlElementAsString(currentElem, keyAttrs);
        if (nextStr === "html" || height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength) {
          break;
        }
        out.push(nextStr);
        len += nextStr.length;
        currentElem = currentElem.parentNode;
      }
      return out.reverse().join(separator);
    } catch (_oO) {
      return "<unknown>";
    }
  }
  function _htmlElementAsString(el, keyAttrs) {
    const elem = el;
    const out = [];
    let className;
    let classes;
    let key;
    let attr;
    let i;
    if (!elem || !elem.tagName) {
      return "";
    }
    out.push(elem.tagName.toLowerCase());
    const keyAttrPairs = keyAttrs && keyAttrs.length ? keyAttrs.filter((keyAttr) => elem.getAttribute(keyAttr)).map((keyAttr) => [keyAttr, elem.getAttribute(keyAttr)]) : null;
    if (keyAttrPairs && keyAttrPairs.length) {
      keyAttrPairs.forEach((keyAttrPair) => {
        out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
      });
    } else {
      if (elem.id) {
        out.push(`#${elem.id}`);
      }
      className = elem.className;
      if (className && isString(className)) {
        classes = className.split(/\s+/);
        for (i = 0; i < classes.length; i++) {
          out.push(`.${classes[i]}`);
        }
      }
    }
    const allowedAttrs = ["aria-label", "type", "name", "title", "alt"];
    for (i = 0; i < allowedAttrs.length; i++) {
      key = allowedAttrs[i];
      attr = elem.getAttribute(key);
      if (attr) {
        out.push(`[${key}="${attr}"]`);
      }
    }
    return out.join("");
  }
  function getLocationHref() {
    try {
      return WINDOW.document.location.href;
    } catch (oO) {
      return "";
    }
  }

  // node_modules/@sentry/utils/esm/logger.js
  var PREFIX = "Sentry Logger ";
  var CONSOLE_LEVELS = ["debug", "info", "warn", "error", "log", "assert", "trace"];
  var originalConsoleMethods = {};
  function consoleSandbox(callback) {
    if (!("console" in GLOBAL_OBJ)) {
      return callback();
    }
    const console2 = GLOBAL_OBJ.console;
    const wrappedFuncs = {};
    const wrappedLevels = Object.keys(originalConsoleMethods);
    wrappedLevels.forEach((level) => {
      const originalConsoleMethod = originalConsoleMethods[level];
      wrappedFuncs[level] = console2[level];
      console2[level] = originalConsoleMethod;
    });
    try {
      return callback();
    } finally {
      wrappedLevels.forEach((level) => {
        console2[level] = wrappedFuncs[level];
      });
    }
  }
  function makeLogger() {
    let enabled = false;
    const logger3 = {
      enable: () => {
        enabled = true;
      },
      disable: () => {
        enabled = false;
      }
    };
    if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
      CONSOLE_LEVELS.forEach((name) => {
        logger3[name] = (...args) => {
          if (enabled) {
            consoleSandbox(() => {
              GLOBAL_OBJ.console[name](`${PREFIX}[${name}]:`, ...args);
            });
          }
        };
      });
    } else {
      CONSOLE_LEVELS.forEach((name) => {
        logger3[name] = () => void 0;
      });
    }
    return logger3;
  }
  var logger = makeLogger();

  // node_modules/@sentry/utils/esm/dsn.js
  var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
  function isValidProtocol(protocol) {
    return protocol === "http" || protocol === "https";
  }
  function dsnToString(dsn, withPassword = false) {
    const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
    return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
  }
  function dsnFromString(str) {
    const match = DSN_REGEX.exec(str);
    if (!match) {
      console.error(`Invalid Sentry Dsn: ${str}`);
      return void 0;
    }
    const [protocol, publicKey, pass = "", host, port = "", lastPath] = match.slice(1);
    let path = "";
    let projectId = lastPath;
    const split = projectId.split("/");
    if (split.length > 1) {
      path = split.slice(0, -1).join("/");
      projectId = split.pop();
    }
    if (projectId) {
      const projectMatch = projectId.match(/^\d+/);
      if (projectMatch) {
        projectId = projectMatch[0];
      }
    }
    return dsnFromComponents({ host, pass, path, projectId, port, protocol, publicKey });
  }
  function dsnFromComponents(components) {
    return {
      protocol: components.protocol,
      publicKey: components.publicKey || "",
      pass: components.pass || "",
      host: components.host,
      port: components.port || "",
      path: components.path || "",
      projectId: components.projectId
    };
  }
  function validateDsn(dsn) {
    if (!(typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__)) {
      return true;
    }
    const { port, projectId, protocol } = dsn;
    const requiredComponents = ["protocol", "publicKey", "host", "projectId"];
    const hasMissingRequiredComponent = requiredComponents.find((component) => {
      if (!dsn[component]) {
        logger.error(`Invalid Sentry Dsn: ${component} missing`);
        return true;
      }
      return false;
    });
    if (hasMissingRequiredComponent) {
      return false;
    }
    if (!projectId.match(/^\d+$/)) {
      logger.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
      return false;
    }
    if (!isValidProtocol(protocol)) {
      logger.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
      return false;
    }
    if (port && isNaN(parseInt(port, 10))) {
      logger.error(`Invalid Sentry Dsn: Invalid port ${port}`);
      return false;
    }
    return true;
  }
  function makeDsn(from) {
    const components = typeof from === "string" ? dsnFromString(from) : dsnFromComponents(from);
    if (!components || !validateDsn(components)) {
      return void 0;
    }
    return components;
  }

  // node_modules/@sentry/utils/esm/error.js
  var SentryError = class extends Error {
    constructor(message, logLevel = "warn") {
      super(message);
      this.message = message;
      this.name = new.target.prototype.constructor.name;
      Object.setPrototypeOf(this, new.target.prototype);
      this.logLevel = logLevel;
    }
  };

  // node_modules/@sentry/utils/esm/object.js
  function fill(source, name, replacementFactory) {
    if (!(name in source)) {
      return;
    }
    const original = source[name];
    const wrapped = replacementFactory(original);
    if (typeof wrapped === "function") {
      markFunctionWrapped(wrapped, original);
    }
    source[name] = wrapped;
  }
  function addNonEnumerableProperty(obj, name, value) {
    try {
      Object.defineProperty(obj, name, {
        value,
        writable: true,
        configurable: true
      });
    } catch (o_O) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Failed to add non-enumerable property "${name}" to object`, obj);
    }
  }
  function markFunctionWrapped(wrapped, original) {
    try {
      const proto = original.prototype || {};
      wrapped.prototype = original.prototype = proto;
      addNonEnumerableProperty(wrapped, "__sentry_original__", original);
    } catch (o_O) {
    }
  }
  function getOriginalFunction(func) {
    return func.__sentry_original__;
  }
  function urlEncode(object) {
    return Object.keys(object).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`).join("&");
  }
  function convertToPlainObject(value) {
    if (isError(value)) {
      return {
        message: value.message,
        name: value.name,
        stack: value.stack,
        ...getOwnProperties(value)
      };
    } else if (isEvent(value)) {
      const newObj = {
        type: value.type,
        target: serializeEventTarget(value.target),
        currentTarget: serializeEventTarget(value.currentTarget),
        ...getOwnProperties(value)
      };
      if (typeof CustomEvent !== "undefined" && isInstanceOf(value, CustomEvent)) {
        newObj.detail = value.detail;
      }
      return newObj;
    } else {
      return value;
    }
  }
  function serializeEventTarget(target) {
    try {
      return isElement(target) ? htmlTreeAsString(target) : Object.prototype.toString.call(target);
    } catch (_oO) {
      return "<unknown>";
    }
  }
  function getOwnProperties(obj) {
    if (typeof obj === "object" && obj !== null) {
      const extractedProps = {};
      for (const property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
          extractedProps[property] = obj[property];
        }
      }
      return extractedProps;
    } else {
      return {};
    }
  }
  function extractExceptionKeysForMessage(exception, maxLength = 40) {
    const keys = Object.keys(convertToPlainObject(exception));
    keys.sort();
    if (!keys.length) {
      return "[object has no keys]";
    }
    if (keys[0].length >= maxLength) {
      return truncate(keys[0], maxLength);
    }
    for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
      const serialized = keys.slice(0, includedKeys).join(", ");
      if (serialized.length > maxLength) {
        continue;
      }
      if (includedKeys === keys.length) {
        return serialized;
      }
      return truncate(serialized, maxLength);
    }
    return "";
  }
  function dropUndefinedKeys(inputValue) {
    const memoizationMap = /* @__PURE__ */ new Map();
    return _dropUndefinedKeys(inputValue, memoizationMap);
  }
  function _dropUndefinedKeys(inputValue, memoizationMap) {
    if (isPlainObject(inputValue)) {
      const memoVal = memoizationMap.get(inputValue);
      if (memoVal !== void 0) {
        return memoVal;
      }
      const returnValue = {};
      memoizationMap.set(inputValue, returnValue);
      for (const key of Object.keys(inputValue)) {
        if (typeof inputValue[key] !== "undefined") {
          returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
        }
      }
      return returnValue;
    }
    if (Array.isArray(inputValue)) {
      const memoVal = memoizationMap.get(inputValue);
      if (memoVal !== void 0) {
        return memoVal;
      }
      const returnValue = [];
      memoizationMap.set(inputValue, returnValue);
      inputValue.forEach((item) => {
        returnValue.push(_dropUndefinedKeys(item, memoizationMap));
      });
      return returnValue;
    }
    return inputValue;
  }

  // node_modules/@sentry/utils/esm/stacktrace.js
  var STACKTRACE_FRAME_LIMIT = 50;
  var WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
  var STRIP_FRAME_REGEXP = /captureMessage|captureException/;
  function createStackParser(...parsers) {
    const sortedParsers = parsers.sort((a, b) => a[0] - b[0]).map((p) => p[1]);
    return (stack, skipFirst = 0) => {
      const frames = [];
      const lines = stack.split("\n");
      for (let i = skipFirst; i < lines.length; i++) {
        const line = lines[i];
        if (line.length > 1024) {
          continue;
        }
        const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, "$1") : line;
        if (cleanedLine.match(/\S*Error: /)) {
          continue;
        }
        for (const parser of sortedParsers) {
          const frame = parser(cleanedLine);
          if (frame) {
            frames.push(frame);
            break;
          }
        }
        if (frames.length >= STACKTRACE_FRAME_LIMIT) {
          break;
        }
      }
      return stripSentryFramesAndReverse(frames);
    };
  }
  function stackParserFromStackParserOptions(stackParser) {
    if (Array.isArray(stackParser)) {
      return createStackParser(...stackParser);
    }
    return stackParser;
  }
  function stripSentryFramesAndReverse(stack) {
    if (!stack.length) {
      return [];
    }
    const localStack = Array.from(stack);
    if (/sentryWrapped/.test(localStack[localStack.length - 1].function || "")) {
      localStack.pop();
    }
    localStack.reverse();
    if (STRIP_FRAME_REGEXP.test(localStack[localStack.length - 1].function || "")) {
      localStack.pop();
      if (STRIP_FRAME_REGEXP.test(localStack[localStack.length - 1].function || "")) {
        localStack.pop();
      }
    }
    return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map((frame) => ({
      ...frame,
      filename: frame.filename || localStack[localStack.length - 1].filename,
      function: frame.function || "?"
    }));
  }
  var defaultFunctionName = "<anonymous>";
  function getFunctionName(fn) {
    try {
      if (!fn || typeof fn !== "function") {
        return defaultFunctionName;
      }
      return fn.name || defaultFunctionName;
    } catch (e) {
      return defaultFunctionName;
    }
  }

  // node_modules/@sentry/utils/esm/supports.js
  var WINDOW2 = getGlobalObject();
  function supportsFetch() {
    if (!("fetch" in WINDOW2)) {
      return false;
    }
    try {
      new Headers();
      new Request("http://www.example.com");
      new Response();
      return true;
    } catch (e) {
      return false;
    }
  }
  function isNativeFetch(func) {
    return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
  }
  function supportsNativeFetch() {
    if (!supportsFetch()) {
      return false;
    }
    if (isNativeFetch(WINDOW2.fetch)) {
      return true;
    }
    let result = false;
    const doc = WINDOW2.document;
    if (doc && typeof doc.createElement === "function") {
      try {
        const sandbox = doc.createElement("iframe");
        sandbox.hidden = true;
        doc.head.appendChild(sandbox);
        if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
          result = isNativeFetch(sandbox.contentWindow.fetch);
        }
        doc.head.removeChild(sandbox);
      } catch (err) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", err);
      }
    }
    return result;
  }

  // node_modules/@sentry/utils/esm/vendor/supportsHistory.js
  var WINDOW3 = getGlobalObject();
  function supportsHistory() {
    const chrome3 = WINDOW3.chrome;
    const isChromePackagedApp = chrome3 && chrome3.app && chrome3.app.runtime;
    const hasHistoryApi = "history" in WINDOW3 && !!WINDOW3.history.pushState && !!WINDOW3.history.replaceState;
    return !isChromePackagedApp && hasHistoryApi;
  }

  // node_modules/@sentry/utils/esm/instrument.js
  var WINDOW4 = getGlobalObject();
  var SENTRY_XHR_DATA_KEY = "__sentry_xhr_v2__";
  var handlers = {};
  var instrumented = {};
  function instrument(type) {
    if (instrumented[type]) {
      return;
    }
    instrumented[type] = true;
    switch (type) {
      case "console":
        instrumentConsole();
        break;
      case "dom":
        instrumentDOM();
        break;
      case "xhr":
        instrumentXHR();
        break;
      case "fetch":
        instrumentFetch();
        break;
      case "history":
        instrumentHistory();
        break;
      case "error":
        instrumentError();
        break;
      case "unhandledrejection":
        instrumentUnhandledRejection();
        break;
      default:
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("unknown instrumentation type:", type);
        return;
    }
  }
  function addInstrumentationHandler(type, callback) {
    handlers[type] = handlers[type] || [];
    handlers[type].push(callback);
    instrument(type);
  }
  function triggerHandlers(type, data) {
    if (!type || !handlers[type]) {
      return;
    }
    for (const handler of handlers[type] || []) {
      try {
        handler(data);
      } catch (e) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(
          `Error while triggering instrumentation handler.
Type: ${type}
Name: ${getFunctionName(handler)}
Error:`,
          e
        );
      }
    }
  }
  function instrumentConsole() {
    if (!("console" in GLOBAL_OBJ)) {
      return;
    }
    CONSOLE_LEVELS.forEach(function(level) {
      if (!(level in GLOBAL_OBJ.console)) {
        return;
      }
      fill(GLOBAL_OBJ.console, level, function(originalConsoleMethod) {
        originalConsoleMethods[level] = originalConsoleMethod;
        return function(...args) {
          triggerHandlers("console", { args, level });
          const log = originalConsoleMethods[level];
          log && log.apply(GLOBAL_OBJ.console, args);
        };
      });
    });
  }
  function instrumentFetch() {
    if (!supportsNativeFetch()) {
      return;
    }
    fill(GLOBAL_OBJ, "fetch", function(originalFetch) {
      return function(...args) {
        const { method, url } = parseFetchArgs(args);
        const handlerData = {
          args,
          fetchData: {
            method,
            url
          },
          startTimestamp: Date.now()
        };
        triggerHandlers("fetch", {
          ...handlerData
        });
        return originalFetch.apply(GLOBAL_OBJ, args).then(
          (response) => {
            triggerHandlers("fetch", {
              ...handlerData,
              endTimestamp: Date.now(),
              response
            });
            return response;
          },
          (error) => {
            triggerHandlers("fetch", {
              ...handlerData,
              endTimestamp: Date.now(),
              error
            });
            throw error;
          }
        );
      };
    });
  }
  function hasProp(obj, prop) {
    return !!obj && typeof obj === "object" && !!obj[prop];
  }
  function getUrlFromResource(resource) {
    if (typeof resource === "string") {
      return resource;
    }
    if (!resource) {
      return "";
    }
    if (hasProp(resource, "url")) {
      return resource.url;
    }
    if (resource.toString) {
      return resource.toString();
    }
    return "";
  }
  function parseFetchArgs(fetchArgs) {
    if (fetchArgs.length === 0) {
      return { method: "GET", url: "" };
    }
    if (fetchArgs.length === 2) {
      const [url, options] = fetchArgs;
      return {
        url: getUrlFromResource(url),
        method: hasProp(options, "method") ? String(options.method).toUpperCase() : "GET"
      };
    }
    const arg = fetchArgs[0];
    return {
      url: getUrlFromResource(arg),
      method: hasProp(arg, "method") ? String(arg.method).toUpperCase() : "GET"
    };
  }
  function instrumentXHR() {
    if (!WINDOW4.XMLHttpRequest) {
      return;
    }
    const xhrproto = XMLHttpRequest.prototype;
    fill(xhrproto, "open", function(originalOpen) {
      return function(...args) {
        const url = args[1];
        const xhrInfo = this[SENTRY_XHR_DATA_KEY] = {
          method: isString(args[0]) ? args[0].toUpperCase() : args[0],
          url: args[1],
          request_headers: {}
        };
        if (isString(url) && xhrInfo.method === "POST" && url.match(/sentry_key/)) {
          this.__sentry_own_request__ = true;
        }
        const onreadystatechangeHandler = () => {
          const xhrInfo2 = this[SENTRY_XHR_DATA_KEY];
          if (!xhrInfo2) {
            return;
          }
          if (this.readyState === 4) {
            try {
              xhrInfo2.status_code = this.status;
            } catch (e) {
            }
            triggerHandlers("xhr", {
              args,
              endTimestamp: Date.now(),
              startTimestamp: Date.now(),
              xhr: this
            });
          }
        };
        if ("onreadystatechange" in this && typeof this.onreadystatechange === "function") {
          fill(this, "onreadystatechange", function(original) {
            return function(...readyStateArgs) {
              onreadystatechangeHandler();
              return original.apply(this, readyStateArgs);
            };
          });
        } else {
          this.addEventListener("readystatechange", onreadystatechangeHandler);
        }
        fill(this, "setRequestHeader", function(original) {
          return function(...setRequestHeaderArgs) {
            const [header, value] = setRequestHeaderArgs;
            const xhrInfo2 = this[SENTRY_XHR_DATA_KEY];
            if (xhrInfo2) {
              xhrInfo2.request_headers[header.toLowerCase()] = value;
            }
            return original.apply(this, setRequestHeaderArgs);
          };
        });
        return originalOpen.apply(this, args);
      };
    });
    fill(xhrproto, "send", function(originalSend) {
      return function(...args) {
        const sentryXhrData = this[SENTRY_XHR_DATA_KEY];
        if (sentryXhrData && args[0] !== void 0) {
          sentryXhrData.body = args[0];
        }
        triggerHandlers("xhr", {
          args,
          startTimestamp: Date.now(),
          xhr: this
        });
        return originalSend.apply(this, args);
      };
    });
  }
  var lastHref;
  function instrumentHistory() {
    if (!supportsHistory()) {
      return;
    }
    const oldOnPopState = WINDOW4.onpopstate;
    WINDOW4.onpopstate = function(...args) {
      const to = WINDOW4.location.href;
      const from = lastHref;
      lastHref = to;
      triggerHandlers("history", {
        from,
        to
      });
      if (oldOnPopState) {
        try {
          return oldOnPopState.apply(this, args);
        } catch (_oO) {
        }
      }
    };
    function historyReplacementFunction(originalHistoryFunction) {
      return function(...args) {
        const url = args.length > 2 ? args[2] : void 0;
        if (url) {
          const from = lastHref;
          const to = String(url);
          lastHref = to;
          triggerHandlers("history", {
            from,
            to
          });
        }
        return originalHistoryFunction.apply(this, args);
      };
    }
    fill(WINDOW4.history, "pushState", historyReplacementFunction);
    fill(WINDOW4.history, "replaceState", historyReplacementFunction);
  }
  var debounceDuration = 1e3;
  var debounceTimerID;
  var lastCapturedEvent;
  function shouldShortcircuitPreviousDebounce(previous, current) {
    if (!previous) {
      return true;
    }
    if (previous.type !== current.type) {
      return true;
    }
    try {
      if (previous.target !== current.target) {
        return true;
      }
    } catch (e) {
    }
    return false;
  }
  function shouldSkipDOMEvent(event) {
    if (event.type !== "keypress") {
      return false;
    }
    try {
      const target = event.target;
      if (!target || !target.tagName) {
        return true;
      }
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return false;
      }
    } catch (e) {
    }
    return true;
  }
  function makeDOMEventHandler(handler, globalListener = false) {
    return (event) => {
      if (!event || lastCapturedEvent === event) {
        return;
      }
      if (shouldSkipDOMEvent(event)) {
        return;
      }
      const name = event.type === "keypress" ? "input" : event.type;
      if (debounceTimerID === void 0) {
        handler({
          event,
          name,
          global: globalListener
        });
        lastCapturedEvent = event;
      } else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
        handler({
          event,
          name,
          global: globalListener
        });
        lastCapturedEvent = event;
      }
      clearTimeout(debounceTimerID);
      debounceTimerID = WINDOW4.setTimeout(() => {
        debounceTimerID = void 0;
      }, debounceDuration);
    };
  }
  function instrumentDOM() {
    if (!WINDOW4.document) {
      return;
    }
    const triggerDOMHandler = triggerHandlers.bind(null, "dom");
    const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
    WINDOW4.document.addEventListener("click", globalDOMEventHandler, false);
    WINDOW4.document.addEventListener("keypress", globalDOMEventHandler, false);
    ["EventTarget", "Node"].forEach((target) => {
      const proto = WINDOW4[target] && WINDOW4[target].prototype;
      if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) {
        return;
      }
      fill(proto, "addEventListener", function(originalAddEventListener) {
        return function(type, listener, options) {
          if (type === "click" || type == "keypress") {
            try {
              const el = this;
              const handlers2 = el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {};
              const handlerForType = handlers2[type] = handlers2[type] || { refCount: 0 };
              if (!handlerForType.handler) {
                const handler = makeDOMEventHandler(triggerDOMHandler);
                handlerForType.handler = handler;
                originalAddEventListener.call(this, type, handler, options);
              }
              handlerForType.refCount++;
            } catch (e) {
            }
          }
          return originalAddEventListener.call(this, type, listener, options);
        };
      });
      fill(
        proto,
        "removeEventListener",
        function(originalRemoveEventListener) {
          return function(type, listener, options) {
            if (type === "click" || type == "keypress") {
              try {
                const el = this;
                const handlers2 = el.__sentry_instrumentation_handlers__ || {};
                const handlerForType = handlers2[type];
                if (handlerForType) {
                  handlerForType.refCount--;
                  if (handlerForType.refCount <= 0) {
                    originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                    handlerForType.handler = void 0;
                    delete handlers2[type];
                  }
                  if (Object.keys(handlers2).length === 0) {
                    delete el.__sentry_instrumentation_handlers__;
                  }
                }
              } catch (e) {
              }
            }
            return originalRemoveEventListener.call(this, type, listener, options);
          };
        }
      );
    });
  }
  var _oldOnErrorHandler = null;
  function instrumentError() {
    _oldOnErrorHandler = WINDOW4.onerror;
    WINDOW4.onerror = function(msg, url, line, column, error) {
      triggerHandlers("error", {
        column,
        error,
        line,
        msg,
        url
      });
      if (_oldOnErrorHandler && !_oldOnErrorHandler.__SENTRY_LOADER__) {
        return _oldOnErrorHandler.apply(this, arguments);
      }
      return false;
    };
    WINDOW4.onerror.__SENTRY_INSTRUMENTED__ = true;
  }
  var _oldOnUnhandledRejectionHandler = null;
  function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = WINDOW4.onunhandledrejection;
    WINDOW4.onunhandledrejection = function(e) {
      triggerHandlers("unhandledrejection", e);
      if (_oldOnUnhandledRejectionHandler && !_oldOnUnhandledRejectionHandler.__SENTRY_LOADER__) {
        return _oldOnUnhandledRejectionHandler.apply(this, arguments);
      }
      return true;
    };
    WINDOW4.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
  }

  // node_modules/@sentry/utils/esm/memo.js
  function memoBuilder() {
    const hasWeakSet = typeof WeakSet === "function";
    const inner = hasWeakSet ? /* @__PURE__ */ new WeakSet() : [];
    function memoize(obj) {
      if (hasWeakSet) {
        if (inner.has(obj)) {
          return true;
        }
        inner.add(obj);
        return false;
      }
      for (let i = 0; i < inner.length; i++) {
        const value = inner[i];
        if (value === obj) {
          return true;
        }
      }
      inner.push(obj);
      return false;
    }
    function unmemoize(obj) {
      if (hasWeakSet) {
        inner.delete(obj);
      } else {
        for (let i = 0; i < inner.length; i++) {
          if (inner[i] === obj) {
            inner.splice(i, 1);
            break;
          }
        }
      }
    }
    return [memoize, unmemoize];
  }

  // node_modules/@sentry/utils/esm/misc.js
  function uuid4() {
    const gbl = GLOBAL_OBJ;
    const crypto = gbl.crypto || gbl.msCrypto;
    let getRandomByte = () => Math.random() * 16;
    try {
      if (crypto && crypto.randomUUID) {
        return crypto.randomUUID().replace(/-/g, "");
      }
      if (crypto && crypto.getRandomValues) {
        getRandomByte = () => crypto.getRandomValues(new Uint8Array(1))[0];
      }
    } catch (_) {
    }
    return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(
      /[018]/g,
      (c) => (c ^ (getRandomByte() & 15) >> c / 4).toString(16)
    );
  }
  function getFirstException(event) {
    return event.exception && event.exception.values ? event.exception.values[0] : void 0;
  }
  function getEventDescription(event) {
    const { message, event_id: eventId } = event;
    if (message) {
      return message;
    }
    const firstException = getFirstException(event);
    if (firstException) {
      if (firstException.type && firstException.value) {
        return `${firstException.type}: ${firstException.value}`;
      }
      return firstException.type || firstException.value || eventId || "<unknown>";
    }
    return eventId || "<unknown>";
  }
  function addExceptionTypeValue(event, value, type) {
    const exception = event.exception = event.exception || {};
    const values = exception.values = exception.values || [];
    const firstException = values[0] = values[0] || {};
    if (!firstException.value) {
      firstException.value = value || "";
    }
    if (!firstException.type) {
      firstException.type = type || "Error";
    }
  }
  function addExceptionMechanism(event, newMechanism) {
    const firstException = getFirstException(event);
    if (!firstException) {
      return;
    }
    const defaultMechanism = { type: "generic", handled: true };
    const currentMechanism = firstException.mechanism;
    firstException.mechanism = { ...defaultMechanism, ...currentMechanism, ...newMechanism };
    if (newMechanism && "data" in newMechanism) {
      const mergedData = { ...currentMechanism && currentMechanism.data, ...newMechanism.data };
      firstException.mechanism.data = mergedData;
    }
  }
  function checkOrSetAlreadyCaught(exception) {
    if (exception && exception.__sentry_captured__) {
      return true;
    }
    try {
      addNonEnumerableProperty(exception, "__sentry_captured__", true);
    } catch (err) {
    }
    return false;
  }
  function arrayify(maybeArray) {
    return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
  }

  // node_modules/@sentry/utils/esm/env.js
  function isBrowserBundle() {
    return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
  }
  function getSDKSource() {
    return "npm";
  }

  // node_modules/@sentry/utils/esm/node.js
  function isNodeEnv() {
    return !isBrowserBundle() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
  }
  function dynamicRequire(mod, request) {
    return mod.require(request);
  }

  // node_modules/@sentry/utils/esm/normalize.js
  function normalize(input, depth = 100, maxProperties = Infinity) {
    try {
      return visit("", input, depth, maxProperties);
    } catch (err) {
      return { ERROR: `**non-serializable** (${err})` };
    }
  }
  function normalizeToSize(object, depth = 3, maxSize = 100 * 1024) {
    const normalized = normalize(object, depth);
    if (jsonSize(normalized) > maxSize) {
      return normalizeToSize(object, depth - 1, maxSize);
    }
    return normalized;
  }
  function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
    const [memoize, unmemoize] = memo;
    if (value == null || ["number", "boolean", "string"].includes(typeof value) && !isNaN2(value)) {
      return value;
    }
    const stringified = stringifyValue(key, value);
    if (!stringified.startsWith("[object ")) {
      return stringified;
    }
    if (value["__sentry_skip_normalization__"]) {
      return value;
    }
    const remainingDepth = typeof value["__sentry_override_normalization_depth__"] === "number" ? value["__sentry_override_normalization_depth__"] : depth;
    if (remainingDepth === 0) {
      return stringified.replace("object ", "");
    }
    if (memoize(value)) {
      return "[Circular ~]";
    }
    const valueWithToJSON = value;
    if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") {
      try {
        const jsonValue = valueWithToJSON.toJSON();
        return visit("", jsonValue, remainingDepth - 1, maxProperties, memo);
      } catch (err) {
      }
    }
    const normalized = Array.isArray(value) ? [] : {};
    let numAdded = 0;
    const visitable = convertToPlainObject(value);
    for (const visitKey in visitable) {
      if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
        continue;
      }
      if (numAdded >= maxProperties) {
        normalized[visitKey] = "[MaxProperties ~]";
        break;
      }
      const visitValue = visitable[visitKey];
      normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);
      numAdded++;
    }
    unmemoize(value);
    return normalized;
  }
  function stringifyValue(key, value) {
    try {
      if (key === "domain" && value && typeof value === "object" && value._events) {
        return "[Domain]";
      }
      if (key === "domainEmitter") {
        return "[DomainEmitter]";
      }
      if (typeof global !== "undefined" && value === global) {
        return "[Global]";
      }
      if (typeof window !== "undefined" && value === window) {
        return "[Window]";
      }
      if (typeof document !== "undefined" && value === document) {
        return "[Document]";
      }
      if (isVueViewModel(value)) {
        return "[VueViewModel]";
      }
      if (isSyntheticEvent(value)) {
        return "[SyntheticEvent]";
      }
      if (typeof value === "number" && value !== value) {
        return "[NaN]";
      }
      if (typeof value === "function") {
        return `[Function: ${getFunctionName(value)}]`;
      }
      if (typeof value === "symbol") {
        return `[${String(value)}]`;
      }
      if (typeof value === "bigint") {
        return `[BigInt: ${String(value)}]`;
      }
      const objName = getConstructorName(value);
      if (/^HTML(\w*)Element$/.test(objName)) {
        return `[HTMLElement: ${objName}]`;
      }
      return `[object ${objName}]`;
    } catch (err) {
      return `**non-serializable** (${err})`;
    }
  }
  function getConstructorName(value) {
    const prototype = Object.getPrototypeOf(value);
    return prototype ? prototype.constructor.name : "null prototype";
  }
  function utf8Length(value) {
    return ~-encodeURI(value).split(/%..|./).length;
  }
  function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
  }

  // node_modules/@sentry/utils/esm/syncpromise.js
  var States;
  (function(States2) {
    const PENDING = 0;
    States2[States2["PENDING"] = PENDING] = "PENDING";
    const RESOLVED = 1;
    States2[States2["RESOLVED"] = RESOLVED] = "RESOLVED";
    const REJECTED = 2;
    States2[States2["REJECTED"] = REJECTED] = "REJECTED";
  })(States || (States = {}));
  function resolvedSyncPromise(value) {
    return new SyncPromise((resolve) => {
      resolve(value);
    });
  }
  function rejectedSyncPromise(reason) {
    return new SyncPromise((_, reject) => {
      reject(reason);
    });
  }
  var SyncPromise = class {
    constructor(executor) {
      SyncPromise.prototype.__init.call(this);
      SyncPromise.prototype.__init2.call(this);
      SyncPromise.prototype.__init3.call(this);
      SyncPromise.prototype.__init4.call(this);
      this._state = States.PENDING;
      this._handlers = [];
      try {
        executor(this._resolve, this._reject);
      } catch (e) {
        this._reject(e);
      }
    }
    then(onfulfilled, onrejected) {
      return new SyncPromise((resolve, reject) => {
        this._handlers.push([
          false,
          (result) => {
            if (!onfulfilled) {
              resolve(result);
            } else {
              try {
                resolve(onfulfilled(result));
              } catch (e) {
                reject(e);
              }
            }
          },
          (reason) => {
            if (!onrejected) {
              reject(reason);
            } else {
              try {
                resolve(onrejected(reason));
              } catch (e) {
                reject(e);
              }
            }
          }
        ]);
        this._executeHandlers();
      });
    }
    catch(onrejected) {
      return this.then((val) => val, onrejected);
    }
    finally(onfinally) {
      return new SyncPromise((resolve, reject) => {
        let val;
        let isRejected;
        return this.then(
          (value) => {
            isRejected = false;
            val = value;
            if (onfinally) {
              onfinally();
            }
          },
          (reason) => {
            isRejected = true;
            val = reason;
            if (onfinally) {
              onfinally();
            }
          }
        ).then(() => {
          if (isRejected) {
            reject(val);
            return;
          }
          resolve(val);
        });
      });
    }
    __init() {
      this._resolve = (value) => {
        this._setResult(States.RESOLVED, value);
      };
    }
    __init2() {
      this._reject = (reason) => {
        this._setResult(States.REJECTED, reason);
      };
    }
    __init3() {
      this._setResult = (state, value) => {
        if (this._state !== States.PENDING) {
          return;
        }
        if (isThenable(value)) {
          void value.then(this._resolve, this._reject);
          return;
        }
        this._state = state;
        this._value = value;
        this._executeHandlers();
      };
    }
    __init4() {
      this._executeHandlers = () => {
        if (this._state === States.PENDING) {
          return;
        }
        const cachedHandlers = this._handlers.slice();
        this._handlers = [];
        cachedHandlers.forEach((handler) => {
          if (handler[0]) {
            return;
          }
          if (this._state === States.RESOLVED) {
            handler[1](this._value);
          }
          if (this._state === States.REJECTED) {
            handler[2](this._value);
          }
          handler[0] = true;
        });
      };
    }
  };

  // node_modules/@sentry/utils/esm/promisebuffer.js
  function makePromiseBuffer(limit) {
    const buffer = [];
    function isReady() {
      return limit === void 0 || buffer.length < limit;
    }
    function remove(task) {
      return buffer.splice(buffer.indexOf(task), 1)[0];
    }
    function add(taskProducer) {
      if (!isReady()) {
        return rejectedSyncPromise(new SentryError("Not adding Promise because buffer limit was reached."));
      }
      const task = taskProducer();
      if (buffer.indexOf(task) === -1) {
        buffer.push(task);
      }
      void task.then(() => remove(task)).then(
        null,
        () => remove(task).then(null, () => {
        })
      );
      return task;
    }
    function drain(timeout) {
      return new SyncPromise((resolve, reject) => {
        let counter = buffer.length;
        if (!counter) {
          return resolve(true);
        }
        const capturedSetTimeout = setTimeout(() => {
          if (timeout && timeout > 0) {
            resolve(false);
          }
        }, timeout);
        buffer.forEach((item) => {
          void resolvedSyncPromise(item).then(() => {
            if (!--counter) {
              clearTimeout(capturedSetTimeout);
              resolve(true);
            }
          }, reject);
        });
      });
    }
    return {
      $: buffer,
      add,
      drain
    };
  }

  // node_modules/@sentry/utils/esm/url.js
  function parseUrl(url) {
    if (!url) {
      return {};
    }
    const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
      return {};
    }
    const query = match[6] || "";
    const fragment = match[8] || "";
    return {
      host: match[4],
      path: match[5],
      protocol: match[2],
      search: query,
      hash: fragment,
      relative: match[5] + query + fragment
    };
  }

  // node_modules/@sentry/utils/esm/severity.js
  var validSeverityLevels = ["fatal", "error", "warning", "log", "info", "debug"];
  function severityLevelFromString(level) {
    return level === "warn" ? "warning" : validSeverityLevels.includes(level) ? level : "log";
  }

  // node_modules/@sentry/utils/esm/time.js
  var WINDOW5 = getGlobalObject();
  var dateTimestampSource = {
    nowSeconds: () => Date.now() / 1e3
  };
  function getBrowserPerformance() {
    const { performance } = WINDOW5;
    if (!performance || !performance.now) {
      return void 0;
    }
    const timeOrigin = Date.now() - performance.now();
    return {
      now: () => performance.now(),
      timeOrigin
    };
  }
  function getNodePerformance() {
    try {
      const perfHooks = dynamicRequire(module, "perf_hooks");
      return perfHooks.performance;
    } catch (_) {
      return void 0;
    }
  }
  var platformPerformance = isNodeEnv() ? getNodePerformance() : getBrowserPerformance();
  var timestampSource = platformPerformance === void 0 ? dateTimestampSource : {
    nowSeconds: () => (platformPerformance.timeOrigin + platformPerformance.now()) / 1e3
  };
  var dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
  var timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
  var _browserPerformanceTimeOriginMode;
  var browserPerformanceTimeOrigin = (() => {
    const { performance } = WINDOW5;
    if (!performance || !performance.now) {
      _browserPerformanceTimeOriginMode = "none";
      return void 0;
    }
    const threshold = 3600 * 1e3;
    const performanceNow = performance.now();
    const dateNow = Date.now();
    const timeOriginDelta = performance.timeOrigin ? Math.abs(performance.timeOrigin + performanceNow - dateNow) : threshold;
    const timeOriginIsReliable = timeOriginDelta < threshold;
    const navigationStart = performance.timing && performance.timing.navigationStart;
    const hasNavigationStart = typeof navigationStart === "number";
    const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
    const navigationStartIsReliable = navigationStartDelta < threshold;
    if (timeOriginIsReliable || navigationStartIsReliable) {
      if (timeOriginDelta <= navigationStartDelta) {
        _browserPerformanceTimeOriginMode = "timeOrigin";
        return performance.timeOrigin;
      } else {
        _browserPerformanceTimeOriginMode = "navigationStart";
        return navigationStart;
      }
    }
    _browserPerformanceTimeOriginMode = "dateNow";
    return dateNow;
  })();

  // node_modules/@sentry/utils/esm/envelope.js
  function createEnvelope(headers, items = []) {
    return [headers, items];
  }
  function addItemToEnvelope(envelope, newItem) {
    const [headers, items] = envelope;
    return [headers, [...items, newItem]];
  }
  function forEachEnvelopeItem(envelope, callback) {
    const envelopeItems = envelope[1];
    for (const envelopeItem of envelopeItems) {
      const envelopeItemType = envelopeItem[0].type;
      const result = callback(envelopeItem, envelopeItemType);
      if (result) {
        return true;
      }
    }
    return false;
  }
  function encodeUTF8(input, textEncoder) {
    const utf8 = textEncoder || new TextEncoder();
    return utf8.encode(input);
  }
  function serializeEnvelope(envelope, textEncoder) {
    const [envHeaders, items] = envelope;
    let parts = JSON.stringify(envHeaders);
    function append(next) {
      if (typeof parts === "string") {
        parts = typeof next === "string" ? parts + next : [encodeUTF8(parts, textEncoder), next];
      } else {
        parts.push(typeof next === "string" ? encodeUTF8(next, textEncoder) : next);
      }
    }
    for (const item of items) {
      const [itemHeaders, payload] = item;
      append(`
${JSON.stringify(itemHeaders)}
`);
      if (typeof payload === "string" || payload instanceof Uint8Array) {
        append(payload);
      } else {
        let stringifiedPayload;
        try {
          stringifiedPayload = JSON.stringify(payload);
        } catch (e) {
          stringifiedPayload = JSON.stringify(normalize(payload));
        }
        append(stringifiedPayload);
      }
    }
    return typeof parts === "string" ? parts : concatBuffers(parts);
  }
  function concatBuffers(buffers) {
    const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);
    const merged = new Uint8Array(totalLength);
    let offset2 = 0;
    for (const buffer of buffers) {
      merged.set(buffer, offset2);
      offset2 += buffer.length;
    }
    return merged;
  }
  function createAttachmentEnvelopeItem(attachment, textEncoder) {
    const buffer = typeof attachment.data === "string" ? encodeUTF8(attachment.data, textEncoder) : attachment.data;
    return [
      dropUndefinedKeys({
        type: "attachment",
        length: buffer.length,
        filename: attachment.filename,
        content_type: attachment.contentType,
        attachment_type: attachment.attachmentType
      }),
      buffer
    ];
  }
  var ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor"
  };
  function envelopeItemTypeToDataCategory(type) {
    return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
  }
  function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
    if (!metadataOrEvent || !metadataOrEvent.sdk) {
      return;
    }
    const { name, version } = metadataOrEvent.sdk;
    return { name, version };
  }
  function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
    const dynamicSamplingContext = event.sdkProcessingMetadata && event.sdkProcessingMetadata.dynamicSamplingContext;
    return {
      event_id: event.event_id,
      sent_at: new Date().toISOString(),
      ...sdkInfo && { sdk: sdkInfo },
      ...!!tunnel && { dsn: dsnToString(dsn) },
      ...dynamicSamplingContext && {
        trace: dropUndefinedKeys({ ...dynamicSamplingContext })
      }
    };
  }

  // node_modules/@sentry/utils/esm/clientreport.js
  function createClientReportEnvelope(discarded_events, dsn, timestamp) {
    const clientReportItem = [
      { type: "client_report" },
      {
        timestamp: timestamp || dateTimestampInSeconds(),
        discarded_events
      }
    ];
    return createEnvelope(dsn ? { dsn } : {}, [clientReportItem]);
  }

  // node_modules/@sentry/utils/esm/ratelimit.js
  var DEFAULT_RETRY_AFTER = 60 * 1e3;
  function parseRetryAfterHeader(header, now = Date.now()) {
    const headerDelay = parseInt(`${header}`, 10);
    if (!isNaN(headerDelay)) {
      return headerDelay * 1e3;
    }
    const headerDate = Date.parse(`${header}`);
    if (!isNaN(headerDate)) {
      return headerDate - now;
    }
    return DEFAULT_RETRY_AFTER;
  }
  function disabledUntil(limits, category) {
    return limits[category] || limits.all || 0;
  }
  function isRateLimited(limits, category, now = Date.now()) {
    return disabledUntil(limits, category) > now;
  }
  function updateRateLimits(limits, { statusCode, headers }, now = Date.now()) {
    const updatedRateLimits = {
      ...limits
    };
    const rateLimitHeader = headers && headers["x-sentry-rate-limits"];
    const retryAfterHeader = headers && headers["retry-after"];
    if (rateLimitHeader) {
      for (const limit of rateLimitHeader.trim().split(",")) {
        const [retryAfter, categories] = limit.split(":", 2);
        const headerDelay = parseInt(retryAfter, 10);
        const delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1e3;
        if (!categories) {
          updatedRateLimits.all = now + delay;
        } else {
          for (const category of categories.split(";")) {
            updatedRateLimits[category] = now + delay;
          }
        }
      }
    } else if (retryAfterHeader) {
      updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
    } else if (statusCode === 429) {
      updatedRateLimits.all = now + 60 * 1e3;
    }
    return updatedRateLimits;
  }

  // node_modules/@sentry/core/esm/constants.js
  var DEFAULT_ENVIRONMENT = "production";

  // node_modules/@sentry/core/esm/eventProcessors.js
  function getGlobalEventProcessors() {
    return getGlobalSingleton("globalEventProcessors", () => []);
  }
  function addGlobalEventProcessor(callback) {
    getGlobalEventProcessors().push(callback);
  }
  function notifyEventProcessors(processors, event, hint, index = 0) {
    return new SyncPromise((resolve, reject) => {
      const processor = processors[index];
      if (event === null || typeof processor !== "function") {
        resolve(event);
      } else {
        const result = processor({ ...event }, hint);
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && processor.id && result === null && logger.log(`Event processor "${processor.id}" dropped event`);
        if (isThenable(result)) {
          void result.then((final) => notifyEventProcessors(processors, final, hint, index + 1).then(resolve)).then(null, reject);
        } else {
          void notifyEventProcessors(processors, result, hint, index + 1).then(resolve).then(null, reject);
        }
      }
    });
  }

  // node_modules/@sentry/core/esm/session.js
  function makeSession(context) {
    const startingTime = timestampInSeconds();
    const session = {
      sid: uuid4(),
      init: true,
      timestamp: startingTime,
      started: startingTime,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: false,
      toJSON: () => sessionToJSON(session)
    };
    if (context) {
      updateSession(session, context);
    }
    return session;
  }
  function updateSession(session, context = {}) {
    if (context.user) {
      if (!session.ipAddress && context.user.ip_address) {
        session.ipAddress = context.user.ip_address;
      }
      if (!session.did && !context.did) {
        session.did = context.user.id || context.user.email || context.user.username;
      }
    }
    session.timestamp = context.timestamp || timestampInSeconds();
    if (context.ignoreDuration) {
      session.ignoreDuration = context.ignoreDuration;
    }
    if (context.sid) {
      session.sid = context.sid.length === 32 ? context.sid : uuid4();
    }
    if (context.init !== void 0) {
      session.init = context.init;
    }
    if (!session.did && context.did) {
      session.did = `${context.did}`;
    }
    if (typeof context.started === "number") {
      session.started = context.started;
    }
    if (session.ignoreDuration) {
      session.duration = void 0;
    } else if (typeof context.duration === "number") {
      session.duration = context.duration;
    } else {
      const duration = session.timestamp - session.started;
      session.duration = duration >= 0 ? duration : 0;
    }
    if (context.release) {
      session.release = context.release;
    }
    if (context.environment) {
      session.environment = context.environment;
    }
    if (!session.ipAddress && context.ipAddress) {
      session.ipAddress = context.ipAddress;
    }
    if (!session.userAgent && context.userAgent) {
      session.userAgent = context.userAgent;
    }
    if (typeof context.errors === "number") {
      session.errors = context.errors;
    }
    if (context.status) {
      session.status = context.status;
    }
  }
  function closeSession(session, status) {
    let context = {};
    if (status) {
      context = { status };
    } else if (session.status === "ok") {
      context = { status: "exited" };
    }
    updateSession(session, context);
  }
  function sessionToJSON(session) {
    return dropUndefinedKeys({
      sid: `${session.sid}`,
      init: session.init,
      started: new Date(session.started * 1e3).toISOString(),
      timestamp: new Date(session.timestamp * 1e3).toISOString(),
      status: session.status,
      errors: session.errors,
      did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : void 0,
      duration: session.duration,
      attrs: {
        release: session.release,
        environment: session.environment,
        ip_address: session.ipAddress,
        user_agent: session.userAgent
      }
    });
  }

  // node_modules/@sentry/core/esm/scope.js
  var DEFAULT_MAX_BREADCRUMBS = 100;
  var Scope = class {
    constructor() {
      this._notifyingListeners = false;
      this._scopeListeners = [];
      this._eventProcessors = [];
      this._breadcrumbs = [];
      this._attachments = [];
      this._user = {};
      this._tags = {};
      this._extra = {};
      this._contexts = {};
      this._sdkProcessingMetadata = {};
      this._propagationContext = generatePropagationContext();
    }
    static clone(scope) {
      const newScope = new Scope();
      if (scope) {
        newScope._breadcrumbs = [...scope._breadcrumbs];
        newScope._tags = { ...scope._tags };
        newScope._extra = { ...scope._extra };
        newScope._contexts = { ...scope._contexts };
        newScope._user = scope._user;
        newScope._level = scope._level;
        newScope._span = scope._span;
        newScope._session = scope._session;
        newScope._transactionName = scope._transactionName;
        newScope._fingerprint = scope._fingerprint;
        newScope._eventProcessors = [...scope._eventProcessors];
        newScope._requestSession = scope._requestSession;
        newScope._attachments = [...scope._attachments];
        newScope._sdkProcessingMetadata = { ...scope._sdkProcessingMetadata };
        newScope._propagationContext = { ...scope._propagationContext };
      }
      return newScope;
    }
    addScopeListener(callback) {
      this._scopeListeners.push(callback);
    }
    addEventProcessor(callback) {
      this._eventProcessors.push(callback);
      return this;
    }
    setUser(user) {
      this._user = user || {};
      if (this._session) {
        updateSession(this._session, { user });
      }
      this._notifyScopeListeners();
      return this;
    }
    getUser() {
      return this._user;
    }
    getRequestSession() {
      return this._requestSession;
    }
    setRequestSession(requestSession) {
      this._requestSession = requestSession;
      return this;
    }
    setTags(tags) {
      this._tags = {
        ...this._tags,
        ...tags
      };
      this._notifyScopeListeners();
      return this;
    }
    setTag(key, value) {
      this._tags = { ...this._tags, [key]: value };
      this._notifyScopeListeners();
      return this;
    }
    setExtras(extras) {
      this._extra = {
        ...this._extra,
        ...extras
      };
      this._notifyScopeListeners();
      return this;
    }
    setExtra(key, extra) {
      this._extra = { ...this._extra, [key]: extra };
      this._notifyScopeListeners();
      return this;
    }
    setFingerprint(fingerprint) {
      this._fingerprint = fingerprint;
      this._notifyScopeListeners();
      return this;
    }
    setLevel(level) {
      this._level = level;
      this._notifyScopeListeners();
      return this;
    }
    setTransactionName(name) {
      this._transactionName = name;
      this._notifyScopeListeners();
      return this;
    }
    setContext(key, context) {
      if (context === null) {
        delete this._contexts[key];
      } else {
        this._contexts[key] = context;
      }
      this._notifyScopeListeners();
      return this;
    }
    setSpan(span) {
      this._span = span;
      this._notifyScopeListeners();
      return this;
    }
    getSpan() {
      return this._span;
    }
    getTransaction() {
      const span = this.getSpan();
      return span && span.transaction;
    }
    setSession(session) {
      if (!session) {
        delete this._session;
      } else {
        this._session = session;
      }
      this._notifyScopeListeners();
      return this;
    }
    getSession() {
      return this._session;
    }
    update(captureContext) {
      if (!captureContext) {
        return this;
      }
      if (typeof captureContext === "function") {
        const updatedScope = captureContext(this);
        return updatedScope instanceof Scope ? updatedScope : this;
      }
      if (captureContext instanceof Scope) {
        this._tags = { ...this._tags, ...captureContext._tags };
        this._extra = { ...this._extra, ...captureContext._extra };
        this._contexts = { ...this._contexts, ...captureContext._contexts };
        if (captureContext._user && Object.keys(captureContext._user).length) {
          this._user = captureContext._user;
        }
        if (captureContext._level) {
          this._level = captureContext._level;
        }
        if (captureContext._fingerprint) {
          this._fingerprint = captureContext._fingerprint;
        }
        if (captureContext._requestSession) {
          this._requestSession = captureContext._requestSession;
        }
        if (captureContext._propagationContext) {
          this._propagationContext = captureContext._propagationContext;
        }
      } else if (isPlainObject(captureContext)) {
        captureContext = captureContext;
        this._tags = { ...this._tags, ...captureContext.tags };
        this._extra = { ...this._extra, ...captureContext.extra };
        this._contexts = { ...this._contexts, ...captureContext.contexts };
        if (captureContext.user) {
          this._user = captureContext.user;
        }
        if (captureContext.level) {
          this._level = captureContext.level;
        }
        if (captureContext.fingerprint) {
          this._fingerprint = captureContext.fingerprint;
        }
        if (captureContext.requestSession) {
          this._requestSession = captureContext.requestSession;
        }
        if (captureContext.propagationContext) {
          this._propagationContext = captureContext.propagationContext;
        }
      }
      return this;
    }
    clear() {
      this._breadcrumbs = [];
      this._tags = {};
      this._extra = {};
      this._user = {};
      this._contexts = {};
      this._level = void 0;
      this._transactionName = void 0;
      this._fingerprint = void 0;
      this._requestSession = void 0;
      this._span = void 0;
      this._session = void 0;
      this._notifyScopeListeners();
      this._attachments = [];
      this._propagationContext = generatePropagationContext();
      return this;
    }
    addBreadcrumb(breadcrumb, maxBreadcrumbs) {
      const maxCrumbs = typeof maxBreadcrumbs === "number" ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
      if (maxCrumbs <= 0) {
        return this;
      }
      const mergedBreadcrumb = {
        timestamp: dateTimestampInSeconds(),
        ...breadcrumb
      };
      const breadcrumbs = this._breadcrumbs;
      breadcrumbs.push(mergedBreadcrumb);
      this._breadcrumbs = breadcrumbs.length > maxCrumbs ? breadcrumbs.slice(-maxCrumbs) : breadcrumbs;
      this._notifyScopeListeners();
      return this;
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      this._breadcrumbs = [];
      this._notifyScopeListeners();
      return this;
    }
    addAttachment(attachment) {
      this._attachments.push(attachment);
      return this;
    }
    getAttachments() {
      return this._attachments;
    }
    clearAttachments() {
      this._attachments = [];
      return this;
    }
    applyToEvent(event, hint = {}) {
      if (this._extra && Object.keys(this._extra).length) {
        event.extra = { ...this._extra, ...event.extra };
      }
      if (this._tags && Object.keys(this._tags).length) {
        event.tags = { ...this._tags, ...event.tags };
      }
      if (this._user && Object.keys(this._user).length) {
        event.user = { ...this._user, ...event.user };
      }
      if (this._contexts && Object.keys(this._contexts).length) {
        event.contexts = { ...this._contexts, ...event.contexts };
      }
      if (this._level) {
        event.level = this._level;
      }
      if (this._transactionName) {
        event.transaction = this._transactionName;
      }
      if (this._span) {
        event.contexts = { trace: this._span.getTraceContext(), ...event.contexts };
        const transaction = this._span.transaction;
        if (transaction) {
          event.sdkProcessingMetadata = {
            dynamicSamplingContext: transaction.getDynamicSamplingContext(),
            ...event.sdkProcessingMetadata
          };
          const transactionName = transaction.name;
          if (transactionName) {
            event.tags = { transaction: transactionName, ...event.tags };
          }
        }
      }
      this._applyFingerprint(event);
      const scopeBreadcrumbs = this._getBreadcrumbs();
      const breadcrumbs = [...event.breadcrumbs || [], ...scopeBreadcrumbs];
      event.breadcrumbs = breadcrumbs.length > 0 ? breadcrumbs : void 0;
      event.sdkProcessingMetadata = {
        ...event.sdkProcessingMetadata,
        ...this._sdkProcessingMetadata,
        propagationContext: this._propagationContext
      };
      return notifyEventProcessors([...getGlobalEventProcessors(), ...this._eventProcessors], event, hint);
    }
    setSDKProcessingMetadata(newData) {
      this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...newData };
      return this;
    }
    setPropagationContext(context) {
      this._propagationContext = context;
      return this;
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    _getBreadcrumbs() {
      return this._breadcrumbs;
    }
    _notifyScopeListeners() {
      if (!this._notifyingListeners) {
        this._notifyingListeners = true;
        this._scopeListeners.forEach((callback) => {
          callback(this);
        });
        this._notifyingListeners = false;
      }
    }
    _applyFingerprint(event) {
      event.fingerprint = event.fingerprint ? arrayify(event.fingerprint) : [];
      if (this._fingerprint) {
        event.fingerprint = event.fingerprint.concat(this._fingerprint);
      }
      if (event.fingerprint && !event.fingerprint.length) {
        delete event.fingerprint;
      }
    }
  };
  function generatePropagationContext() {
    return {
      traceId: uuid4(),
      spanId: uuid4().substring(16)
    };
  }

  // node_modules/@sentry/core/esm/hub.js
  var API_VERSION = 4;
  var DEFAULT_BREADCRUMBS = 100;
  var Hub = class {
    constructor(client, scope = new Scope(), _version = API_VERSION) {
      this._version = _version;
      this._stack = [{ scope }];
      if (client) {
        this.bindClient(client);
      }
    }
    isOlderThan(version) {
      return this._version < version;
    }
    bindClient(client) {
      const top = this.getStackTop();
      top.client = client;
      if (client && client.setupIntegrations) {
        client.setupIntegrations();
      }
    }
    pushScope() {
      const scope = Scope.clone(this.getScope());
      this.getStack().push({
        client: this.getClient(),
        scope
      });
      return scope;
    }
    popScope() {
      if (this.getStack().length <= 1)
        return false;
      return !!this.getStack().pop();
    }
    withScope(callback) {
      const scope = this.pushScope();
      try {
        callback(scope);
      } finally {
        this.popScope();
      }
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getStack() {
      return this._stack;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    captureException(exception, hint) {
      const eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : uuid4();
      const syntheticException = new Error("Sentry syntheticException");
      this._withClient((client, scope) => {
        client.captureException(
          exception,
          {
            originalException: exception,
            syntheticException,
            ...hint,
            event_id: eventId
          },
          scope
        );
      });
      return eventId;
    }
    captureMessage(message, level, hint) {
      const eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : uuid4();
      const syntheticException = new Error(message);
      this._withClient((client, scope) => {
        client.captureMessage(
          message,
          level,
          {
            originalException: message,
            syntheticException,
            ...hint,
            event_id: eventId
          },
          scope
        );
      });
      return eventId;
    }
    captureEvent(event, hint) {
      const eventId = hint && hint.event_id ? hint.event_id : uuid4();
      if (!event.type) {
        this._lastEventId = eventId;
      }
      this._withClient((client, scope) => {
        client.captureEvent(event, { ...hint, event_id: eventId }, scope);
      });
      return eventId;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addBreadcrumb(breadcrumb, hint) {
      const { scope, client } = this.getStackTop();
      if (!client)
        return;
      const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } = client.getOptions && client.getOptions() || {};
      if (maxBreadcrumbs <= 0)
        return;
      const timestamp = dateTimestampInSeconds();
      const mergedBreadcrumb = { timestamp, ...breadcrumb };
      const finalBreadcrumb = beforeBreadcrumb ? consoleSandbox(() => beforeBreadcrumb(mergedBreadcrumb, hint)) : mergedBreadcrumb;
      if (finalBreadcrumb === null)
        return;
      if (client.emit) {
        client.emit("beforeAddBreadcrumb", finalBreadcrumb, hint);
      }
      scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
    }
    setUser(user) {
      this.getScope().setUser(user);
    }
    setTags(tags) {
      this.getScope().setTags(tags);
    }
    setExtras(extras) {
      this.getScope().setExtras(extras);
    }
    setTag(key, value) {
      this.getScope().setTag(key, value);
    }
    setExtra(key, extra) {
      this.getScope().setExtra(key, extra);
    }
    setContext(name, context) {
      this.getScope().setContext(name, context);
    }
    configureScope(callback) {
      const { scope, client } = this.getStackTop();
      if (client) {
        callback(scope);
      }
    }
    run(callback) {
      const oldHub = makeMain(this);
      try {
        callback(this);
      } finally {
        makeMain(oldHub);
      }
    }
    getIntegration(integration) {
      const client = this.getClient();
      if (!client)
        return null;
      try {
        return client.getIntegration(integration);
      } catch (_oO) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Cannot retrieve integration ${integration.id} from the current Hub`);
        return null;
      }
    }
    startTransaction(context, customSamplingContext) {
      const result = this._callExtensionMethod("startTransaction", context, customSamplingContext);
      if ((typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && !result) {
        const client = this.getClient();
        if (!client) {
          console.warn(
            "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'"
          );
        } else {
          console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`);
        }
      }
      return result;
    }
    traceHeaders() {
      return this._callExtensionMethod("traceHeaders");
    }
    captureSession(endSession = false) {
      if (endSession) {
        return this.endSession();
      }
      this._sendSessionUpdate();
    }
    endSession() {
      const layer = this.getStackTop();
      const scope = layer.scope;
      const session = scope.getSession();
      if (session) {
        closeSession(session);
      }
      this._sendSessionUpdate();
      scope.setSession();
    }
    startSession(context) {
      const { scope, client } = this.getStackTop();
      const { release, environment = DEFAULT_ENVIRONMENT } = client && client.getOptions() || {};
      const { userAgent } = GLOBAL_OBJ.navigator || {};
      const session = makeSession({
        release,
        environment,
        user: scope.getUser(),
        ...userAgent && { userAgent },
        ...context
      });
      const currentSession = scope.getSession && scope.getSession();
      if (currentSession && currentSession.status === "ok") {
        updateSession(currentSession, { status: "exited" });
      }
      this.endSession();
      scope.setSession(session);
      return session;
    }
    shouldSendDefaultPii() {
      const client = this.getClient();
      const options = client && client.getOptions();
      return Boolean(options && options.sendDefaultPii);
    }
    _sendSessionUpdate() {
      const { scope, client } = this.getStackTop();
      const session = scope.getSession();
      if (session && client && client.captureSession) {
        client.captureSession(session);
      }
    }
    _withClient(callback) {
      const { scope, client } = this.getStackTop();
      if (client) {
        callback(client, scope);
      }
    }
    _callExtensionMethod(method, ...args) {
      const carrier = getMainCarrier();
      const sentry = carrier.__SENTRY__;
      if (sentry && sentry.extensions && typeof sentry.extensions[method] === "function") {
        return sentry.extensions[method].apply(this, args);
      }
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Extension method ${method} couldn't be found, doing nothing.`);
    }
  };
  function getMainCarrier() {
    GLOBAL_OBJ.__SENTRY__ = GLOBAL_OBJ.__SENTRY__ || {
      extensions: {},
      hub: void 0
    };
    return GLOBAL_OBJ;
  }
  function makeMain(hub) {
    const registry = getMainCarrier();
    const oldHub = getHubFromCarrier(registry);
    setHubOnCarrier(registry, hub);
    return oldHub;
  }
  function getCurrentHub() {
    const registry = getMainCarrier();
    if (registry.__SENTRY__ && registry.__SENTRY__.acs) {
      const hub = registry.__SENTRY__.acs.getCurrentHub();
      if (hub) {
        return hub;
      }
    }
    return getGlobalHub(registry);
  }
  function getGlobalHub(registry = getMainCarrier()) {
    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
      setHubOnCarrier(registry, new Hub());
    }
    return getHubFromCarrier(registry);
  }
  function hasHubOnCarrier(carrier) {
    return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
  }
  function getHubFromCarrier(carrier) {
    return getGlobalSingleton("hub", () => new Hub(), carrier);
  }
  function setHubOnCarrier(carrier, hub) {
    if (!carrier)
      return false;
    const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    __SENTRY__.hub = hub;
    return true;
  }

  // node_modules/@sentry/core/esm/tracing/dynamicSamplingContext.js
  function getDynamicSamplingContextFromClient(trace_id, client, scope) {
    const options = client.getOptions();
    const { publicKey: public_key } = client.getDsn() || {};
    const { segment: user_segment } = scope && scope.getUser() || {};
    const dsc = dropUndefinedKeys({
      environment: options.environment || DEFAULT_ENVIRONMENT,
      release: options.release,
      user_segment,
      public_key,
      trace_id
    });
    client.emit && client.emit("createDsc", dsc);
    return dsc;
  }

  // node_modules/@sentry/core/esm/exports.js
  function captureException(exception, captureContext) {
    return getCurrentHub().captureException(exception, { captureContext });
  }
  function captureMessage(message, captureContext) {
    const level = typeof captureContext === "string" ? captureContext : void 0;
    const context = typeof captureContext !== "string" ? { captureContext } : void 0;
    return getCurrentHub().captureMessage(message, level, context);
  }
  function withScope(callback) {
    getCurrentHub().withScope(callback);
  }

  // node_modules/@sentry/core/esm/api.js
  var SENTRY_API_VERSION = "7";
  function getBaseApiEndpoint(dsn) {
    const protocol = dsn.protocol ? `${dsn.protocol}:` : "";
    const port = dsn.port ? `:${dsn.port}` : "";
    return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ""}/api/`;
  }
  function _getIngestEndpoint(dsn) {
    return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
  }
  function _encodedAuth(dsn, sdkInfo) {
    return urlEncode({
      sentry_key: dsn.publicKey,
      sentry_version: SENTRY_API_VERSION,
      ...sdkInfo && { sentry_client: `${sdkInfo.name}/${sdkInfo.version}` }
    });
  }
  function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnelOrOptions = {}) {
    const tunnel = typeof tunnelOrOptions === "string" ? tunnelOrOptions : tunnelOrOptions.tunnel;
    const sdkInfo = typeof tunnelOrOptions === "string" || !tunnelOrOptions._metadata ? void 0 : tunnelOrOptions._metadata.sdk;
    return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
  }

  // node_modules/@sentry/core/esm/envelope.js
  function enhanceEventWithSdkInfo(event, sdkInfo) {
    if (!sdkInfo) {
      return event;
    }
    event.sdk = event.sdk || {};
    event.sdk.name = event.sdk.name || sdkInfo.name;
    event.sdk.version = event.sdk.version || sdkInfo.version;
    event.sdk.integrations = [...event.sdk.integrations || [], ...sdkInfo.integrations || []];
    event.sdk.packages = [...event.sdk.packages || [], ...sdkInfo.packages || []];
    return event;
  }
  function createSessionEnvelope(session, dsn, metadata, tunnel) {
    const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
    const envelopeHeaders = {
      sent_at: new Date().toISOString(),
      ...sdkInfo && { sdk: sdkInfo },
      ...!!tunnel && { dsn: dsnToString(dsn) }
    };
    const envelopeItem = "aggregates" in session ? [{ type: "sessions" }, session] : [{ type: "session" }, session.toJSON()];
    return createEnvelope(envelopeHeaders, [envelopeItem]);
  }
  function createEventEnvelope(event, dsn, metadata, tunnel) {
    const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
    const eventType = event.type && event.type !== "replay_event" ? event.type : "event";
    enhanceEventWithSdkInfo(event, metadata && metadata.sdk);
    const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
    delete event.sdkProcessingMetadata;
    const eventItem = [{ type: eventType }, event];
    return createEnvelope(envelopeHeaders, [eventItem]);
  }

  // node_modules/@sentry/core/esm/integration.js
  var installedIntegrations = [];
  function filterDuplicates(integrations) {
    const integrationsByName = {};
    integrations.forEach((currentInstance) => {
      const { name } = currentInstance;
      const existingInstance = integrationsByName[name];
      if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
        return;
      }
      integrationsByName[name] = currentInstance;
    });
    return Object.keys(integrationsByName).map((k) => integrationsByName[k]);
  }
  function getIntegrationsToSetup(options) {
    const defaultIntegrations2 = options.defaultIntegrations || [];
    const userIntegrations = options.integrations;
    defaultIntegrations2.forEach((integration) => {
      integration.isDefaultInstance = true;
    });
    let integrations;
    if (Array.isArray(userIntegrations)) {
      integrations = [...defaultIntegrations2, ...userIntegrations];
    } else if (typeof userIntegrations === "function") {
      integrations = arrayify(userIntegrations(defaultIntegrations2));
    } else {
      integrations = defaultIntegrations2;
    }
    const finalIntegrations = filterDuplicates(integrations);
    const debugIndex = findIndex(finalIntegrations, (integration) => integration.name === "Debug");
    if (debugIndex !== -1) {
      const [debugInstance] = finalIntegrations.splice(debugIndex, 1);
      finalIntegrations.push(debugInstance);
    }
    return finalIntegrations;
  }
  function setupIntegrations(client, integrations) {
    const integrationIndex = {};
    integrations.forEach((integration) => {
      if (integration) {
        setupIntegration(client, integration, integrationIndex);
      }
    });
    return integrationIndex;
  }
  function setupIntegration(client, integration, integrationIndex) {
    integrationIndex[integration.name] = integration;
    if (installedIntegrations.indexOf(integration.name) === -1) {
      integration.setupOnce(addGlobalEventProcessor, getCurrentHub);
      installedIntegrations.push(integration.name);
    }
    if (client.on && typeof integration.preprocessEvent === "function") {
      const callback = integration.preprocessEvent.bind(integration);
      client.on("preprocessEvent", (event, hint) => callback(event, hint, client));
    }
    if (client.addEventProcessor && typeof integration.processEvent === "function") {
      const callback = integration.processEvent.bind(integration);
      const processor = Object.assign((event, hint) => callback(event, hint, client), {
        id: integration.name
      });
      client.addEventProcessor(processor);
    }
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Integration installed: ${integration.name}`);
  }
  function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i]) === true) {
        return i;
      }
    }
    return -1;
  }

  // node_modules/@sentry/core/esm/utils/prepareEvent.js
  function prepareEvent(options, event, hint, scope, client) {
    const { normalizeDepth = 3, normalizeMaxBreadth = 1e3 } = options;
    const prepared = {
      ...event,
      event_id: event.event_id || hint.event_id || uuid4(),
      timestamp: event.timestamp || dateTimestampInSeconds()
    };
    const integrations = hint.integrations || options.integrations.map((i) => i.name);
    applyClientOptions(prepared, options);
    applyIntegrationsMetadata(prepared, integrations);
    if (event.type === void 0) {
      applyDebugIds(prepared, options.stackParser);
    }
    let finalScope = scope;
    if (hint.captureContext) {
      finalScope = Scope.clone(finalScope).update(hint.captureContext);
    }
    let result = resolvedSyncPromise(prepared);
    if (finalScope) {
      if (finalScope.getAttachments) {
        const attachments = [...hint.attachments || [], ...finalScope.getAttachments()];
        if (attachments.length) {
          hint.attachments = attachments;
        }
      }
      result = finalScope.applyToEvent(prepared, hint);
    }
    return result.then((evt) => {
      return client && client.getEventProcessors ? notifyEventProcessors(client.getEventProcessors(), evt, hint) : evt;
    }).then((evt) => {
      if (evt) {
        applyDebugMeta(evt);
      }
      if (typeof normalizeDepth === "number" && normalizeDepth > 0) {
        return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
      }
      return evt;
    });
  }
  function applyClientOptions(event, options) {
    const { environment, release, dist, maxValueLength = 250 } = options;
    if (!("environment" in event)) {
      event.environment = "environment" in options ? environment : DEFAULT_ENVIRONMENT;
    }
    if (event.release === void 0 && release !== void 0) {
      event.release = release;
    }
    if (event.dist === void 0 && dist !== void 0) {
      event.dist = dist;
    }
    if (event.message) {
      event.message = truncate(event.message, maxValueLength);
    }
    const exception = event.exception && event.exception.values && event.exception.values[0];
    if (exception && exception.value) {
      exception.value = truncate(exception.value, maxValueLength);
    }
    const request = event.request;
    if (request && request.url) {
      request.url = truncate(request.url, maxValueLength);
    }
  }
  var debugIdStackParserCache = /* @__PURE__ */ new WeakMap();
  function applyDebugIds(event, stackParser) {
    const debugIdMap = GLOBAL_OBJ._sentryDebugIds;
    if (!debugIdMap) {
      return;
    }
    let debugIdStackFramesCache;
    const cachedDebugIdStackFrameCache = debugIdStackParserCache.get(stackParser);
    if (cachedDebugIdStackFrameCache) {
      debugIdStackFramesCache = cachedDebugIdStackFrameCache;
    } else {
      debugIdStackFramesCache = /* @__PURE__ */ new Map();
      debugIdStackParserCache.set(stackParser, debugIdStackFramesCache);
    }
    const filenameDebugIdMap = Object.keys(debugIdMap).reduce((acc, debugIdStackTrace) => {
      let parsedStack;
      const cachedParsedStack = debugIdStackFramesCache.get(debugIdStackTrace);
      if (cachedParsedStack) {
        parsedStack = cachedParsedStack;
      } else {
        parsedStack = stackParser(debugIdStackTrace);
        debugIdStackFramesCache.set(debugIdStackTrace, parsedStack);
      }
      for (let i = parsedStack.length - 1; i >= 0; i--) {
        const stackFrame = parsedStack[i];
        if (stackFrame.filename) {
          acc[stackFrame.filename] = debugIdMap[debugIdStackTrace];
          break;
        }
      }
      return acc;
    }, {});
    try {
      event.exception.values.forEach((exception) => {
        exception.stacktrace.frames.forEach((frame) => {
          if (frame.filename) {
            frame.debug_id = filenameDebugIdMap[frame.filename];
          }
        });
      });
    } catch (e) {
    }
  }
  function applyDebugMeta(event) {
    const filenameDebugIdMap = {};
    try {
      event.exception.values.forEach((exception) => {
        exception.stacktrace.frames.forEach((frame) => {
          if (frame.debug_id) {
            if (frame.abs_path) {
              filenameDebugIdMap[frame.abs_path] = frame.debug_id;
            } else if (frame.filename) {
              filenameDebugIdMap[frame.filename] = frame.debug_id;
            }
            delete frame.debug_id;
          }
        });
      });
    } catch (e) {
    }
    if (Object.keys(filenameDebugIdMap).length === 0) {
      return;
    }
    event.debug_meta = event.debug_meta || {};
    event.debug_meta.images = event.debug_meta.images || [];
    const images = event.debug_meta.images;
    Object.keys(filenameDebugIdMap).forEach((filename) => {
      images.push({
        type: "sourcemap",
        code_file: filename,
        debug_id: filenameDebugIdMap[filename]
      });
    });
  }
  function applyIntegrationsMetadata(event, integrationNames) {
    if (integrationNames.length > 0) {
      event.sdk = event.sdk || {};
      event.sdk.integrations = [...event.sdk.integrations || [], ...integrationNames];
    }
  }
  function normalizeEvent(event, depth, maxBreadth) {
    if (!event) {
      return null;
    }
    const normalized = {
      ...event,
      ...event.breadcrumbs && {
        breadcrumbs: event.breadcrumbs.map((b) => ({
          ...b,
          ...b.data && {
            data: normalize(b.data, depth, maxBreadth)
          }
        }))
      },
      ...event.user && {
        user: normalize(event.user, depth, maxBreadth)
      },
      ...event.contexts && {
        contexts: normalize(event.contexts, depth, maxBreadth)
      },
      ...event.extra && {
        extra: normalize(event.extra, depth, maxBreadth)
      }
    };
    if (event.contexts && event.contexts.trace && normalized.contexts) {
      normalized.contexts.trace = event.contexts.trace;
      if (event.contexts.trace.data) {
        normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
      }
    }
    if (event.spans) {
      normalized.spans = event.spans.map((span) => {
        if (span.data) {
          span.data = normalize(span.data, depth, maxBreadth);
        }
        return span;
      });
    }
    return normalized;
  }

  // node_modules/@sentry/core/esm/baseclient.js
  var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
  var BaseClient = class {
    constructor(options) {
      this._options = options;
      this._integrations = {};
      this._integrationsInitialized = false;
      this._numProcessing = 0;
      this._outcomes = {};
      this._hooks = {};
      this._eventProcessors = [];
      if (options.dsn) {
        this._dsn = makeDsn(options.dsn);
      } else {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("No DSN provided, client will not do anything.");
      }
      if (this._dsn) {
        const url = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, options);
        this._transport = options.transport({
          recordDroppedEvent: this.recordDroppedEvent.bind(this),
          ...options.transportOptions,
          url
        });
      }
    }
    captureException(exception, hint, scope) {
      if (checkOrSetAlreadyCaught(exception)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(ALREADY_SEEN_ERROR);
        return;
      }
      let eventId = hint && hint.event_id;
      this._process(
        this.eventFromException(exception, hint).then((event) => this._captureEvent(event, hint, scope)).then((result) => {
          eventId = result;
        })
      );
      return eventId;
    }
    captureMessage(message, level, hint, scope) {
      let eventId = hint && hint.event_id;
      const promisedEvent = isPrimitive(message) ? this.eventFromMessage(String(message), level, hint) : this.eventFromException(message, hint);
      this._process(
        promisedEvent.then((event) => this._captureEvent(event, hint, scope)).then((result) => {
          eventId = result;
        })
      );
      return eventId;
    }
    captureEvent(event, hint, scope) {
      if (hint && hint.originalException && checkOrSetAlreadyCaught(hint.originalException)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(ALREADY_SEEN_ERROR);
        return;
      }
      let eventId = hint && hint.event_id;
      this._process(
        this._captureEvent(event, hint, scope).then((result) => {
          eventId = result;
        })
      );
      return eventId;
    }
    captureSession(session) {
      if (!this._isEnabled()) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("SDK not enabled, will not capture session.");
        return;
      }
      if (!(typeof session.release === "string")) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Discarded session because of missing or non-string release");
      } else {
        this.sendSession(session);
        updateSession(session, { init: false });
      }
    }
    getDsn() {
      return this._dsn;
    }
    getOptions() {
      return this._options;
    }
    getSdkMetadata() {
      return this._options._metadata;
    }
    getTransport() {
      return this._transport;
    }
    flush(timeout) {
      const transport = this._transport;
      if (transport) {
        return this._isClientDoneProcessing(timeout).then((clientFinished) => {
          return transport.flush(timeout).then((transportFlushed) => clientFinished && transportFlushed);
        });
      } else {
        return resolvedSyncPromise(true);
      }
    }
    close(timeout) {
      return this.flush(timeout).then((result) => {
        this.getOptions().enabled = false;
        return result;
      });
    }
    getEventProcessors() {
      return this._eventProcessors;
    }
    addEventProcessor(eventProcessor) {
      this._eventProcessors.push(eventProcessor);
    }
    setupIntegrations() {
      if (this._isEnabled() && !this._integrationsInitialized) {
        this._integrations = setupIntegrations(this, this._options.integrations);
        this._integrationsInitialized = true;
      }
    }
    getIntegrationById(integrationId) {
      return this._integrations[integrationId];
    }
    getIntegration(integration) {
      try {
        return this._integrations[integration.id] || null;
      } catch (_oO) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Cannot retrieve integration ${integration.id} from the current Client`);
        return null;
      }
    }
    addIntegration(integration) {
      setupIntegration(this, integration, this._integrations);
    }
    sendEvent(event, hint = {}) {
      this.emit("beforeSendEvent", event, hint);
      if (this._dsn) {
        let env = createEventEnvelope(event, this._dsn, this._options._metadata, this._options.tunnel);
        for (const attachment of hint.attachments || []) {
          env = addItemToEnvelope(
            env,
            createAttachmentEnvelopeItem(
              attachment,
              this._options.transportOptions && this._options.transportOptions.textEncoder
            )
          );
        }
        const promise = this._sendEnvelope(env);
        if (promise) {
          promise.then((sendResponse) => this.emit("afterSendEvent", event, sendResponse), null);
        }
      }
    }
    sendSession(session) {
      if (this._dsn) {
        const env = createSessionEnvelope(session, this._dsn, this._options._metadata, this._options.tunnel);
        void this._sendEnvelope(env);
      }
    }
    recordDroppedEvent(reason, category, _event) {
      if (this._options.sendClientReports) {
        const key = `${reason}:${category}`;
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Adding outcome: "${key}"`);
        this._outcomes[key] = this._outcomes[key] + 1 || 1;
      }
    }
    on(hook, callback) {
      if (!this._hooks[hook]) {
        this._hooks[hook] = [];
      }
      this._hooks[hook].push(callback);
    }
    emit(hook, ...rest) {
      if (this._hooks[hook]) {
        this._hooks[hook].forEach((callback) => callback(...rest));
      }
    }
    _updateSessionFromEvent(session, event) {
      let crashed = false;
      let errored = false;
      const exceptions = event.exception && event.exception.values;
      if (exceptions) {
        errored = true;
        for (const ex of exceptions) {
          const mechanism = ex.mechanism;
          if (mechanism && mechanism.handled === false) {
            crashed = true;
            break;
          }
        }
      }
      const sessionNonTerminal = session.status === "ok";
      const shouldUpdateAndSend = sessionNonTerminal && session.errors === 0 || sessionNonTerminal && crashed;
      if (shouldUpdateAndSend) {
        updateSession(session, {
          ...crashed && { status: "crashed" },
          errors: session.errors || Number(errored || crashed)
        });
        this.captureSession(session);
      }
    }
    _isClientDoneProcessing(timeout) {
      return new SyncPromise((resolve) => {
        let ticked = 0;
        const tick = 1;
        const interval = setInterval(() => {
          if (this._numProcessing == 0) {
            clearInterval(interval);
            resolve(true);
          } else {
            ticked += tick;
            if (timeout && ticked >= timeout) {
              clearInterval(interval);
              resolve(false);
            }
          }
        }, tick);
      });
    }
    _isEnabled() {
      return this.getOptions().enabled !== false && this._dsn !== void 0;
    }
    _prepareEvent(event, hint, scope) {
      const options = this.getOptions();
      const integrations = Object.keys(this._integrations);
      if (!hint.integrations && integrations.length > 0) {
        hint.integrations = integrations;
      }
      this.emit("preprocessEvent", event, hint);
      return prepareEvent(options, event, hint, scope, this).then((evt) => {
        if (evt === null) {
          return evt;
        }
        const { propagationContext } = evt.sdkProcessingMetadata || {};
        const trace2 = evt.contexts && evt.contexts.trace;
        if (!trace2 && propagationContext) {
          const { traceId: trace_id, spanId, parentSpanId, dsc } = propagationContext;
          evt.contexts = {
            trace: {
              trace_id,
              span_id: spanId,
              parent_span_id: parentSpanId
            },
            ...evt.contexts
          };
          const dynamicSamplingContext = dsc ? dsc : getDynamicSamplingContextFromClient(trace_id, this, scope);
          evt.sdkProcessingMetadata = {
            dynamicSamplingContext,
            ...evt.sdkProcessingMetadata
          };
        }
        return evt;
      });
    }
    _captureEvent(event, hint = {}, scope) {
      return this._processEvent(event, hint, scope).then(
        (finalEvent) => {
          return finalEvent.event_id;
        },
        (reason) => {
          if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
            const sentryError = reason;
            if (sentryError.logLevel === "log") {
              logger.log(sentryError.message);
            } else {
              logger.warn(sentryError);
            }
          }
          return void 0;
        }
      );
    }
    _processEvent(event, hint, scope) {
      const options = this.getOptions();
      const { sampleRate } = options;
      if (!this._isEnabled()) {
        return rejectedSyncPromise(new SentryError("SDK not enabled, will not capture event.", "log"));
      }
      const isTransaction = isTransactionEvent(event);
      const isError2 = isErrorEvent2(event);
      const eventType = event.type || "error";
      const beforeSendLabel = `before send for type \`${eventType}\``;
      if (isError2 && typeof sampleRate === "number" && Math.random() > sampleRate) {
        this.recordDroppedEvent("sample_rate", "error", event);
        return rejectedSyncPromise(
          new SentryError(
            `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`,
            "log"
          )
        );
      }
      const dataCategory = eventType === "replay_event" ? "replay" : eventType;
      return this._prepareEvent(event, hint, scope).then((prepared) => {
        if (prepared === null) {
          this.recordDroppedEvent("event_processor", dataCategory, event);
          throw new SentryError("An event processor returned `null`, will not send event.", "log");
        }
        const isInternalException = hint.data && hint.data.__sentry__ === true;
        if (isInternalException) {
          return prepared;
        }
        const result = processBeforeSend(options, prepared, hint);
        return _validateBeforeSendResult(result, beforeSendLabel);
      }).then((processedEvent) => {
        if (processedEvent === null) {
          this.recordDroppedEvent("before_send", dataCategory, event);
          throw new SentryError(`${beforeSendLabel} returned \`null\`, will not send event.`, "log");
        }
        const session = scope && scope.getSession();
        if (!isTransaction && session) {
          this._updateSessionFromEvent(session, processedEvent);
        }
        const transactionInfo = processedEvent.transaction_info;
        if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
          const source = "custom";
          processedEvent.transaction_info = {
            ...transactionInfo,
            source
          };
        }
        this.sendEvent(processedEvent, hint);
        return processedEvent;
      }).then(null, (reason) => {
        if (reason instanceof SentryError) {
          throw reason;
        }
        this.captureException(reason, {
          data: {
            __sentry__: true
          },
          originalException: reason
        });
        throw new SentryError(
          `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${reason}`
        );
      });
    }
    _process(promise) {
      this._numProcessing++;
      void promise.then(
        (value) => {
          this._numProcessing--;
          return value;
        },
        (reason) => {
          this._numProcessing--;
          return reason;
        }
      );
    }
    _sendEnvelope(envelope) {
      if (this._transport && this._dsn) {
        this.emit("beforeEnvelope", envelope);
        return this._transport.send(envelope).then(null, (reason) => {
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Error while sending event:", reason);
        });
      } else {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Transport disabled");
      }
    }
    _clearOutcomes() {
      const outcomes = this._outcomes;
      this._outcomes = {};
      return Object.keys(outcomes).map((key) => {
        const [reason, category] = key.split(":");
        return {
          reason,
          category,
          quantity: outcomes[key]
        };
      });
    }
  };
  function _validateBeforeSendResult(beforeSendResult, beforeSendLabel) {
    const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
    if (isThenable(beforeSendResult)) {
      return beforeSendResult.then(
        (event) => {
          if (!isPlainObject(event) && event !== null) {
            throw new SentryError(invalidValueError);
          }
          return event;
        },
        (e) => {
          throw new SentryError(`${beforeSendLabel} rejected with ${e}`);
        }
      );
    } else if (!isPlainObject(beforeSendResult) && beforeSendResult !== null) {
      throw new SentryError(invalidValueError);
    }
    return beforeSendResult;
  }
  function processBeforeSend(options, event, hint) {
    const { beforeSend, beforeSendTransaction } = options;
    if (isErrorEvent2(event) && beforeSend) {
      return beforeSend(event, hint);
    }
    if (isTransactionEvent(event) && beforeSendTransaction) {
      return beforeSendTransaction(event, hint);
    }
    return event;
  }
  function isErrorEvent2(event) {
    return event.type === void 0;
  }
  function isTransactionEvent(event) {
    return event.type === "transaction";
  }

  // node_modules/@sentry/core/esm/sdk.js
  function initAndBind(clientClass, options) {
    if (options.debug === true) {
      if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
        logger.enable();
      } else {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      }
    }
    const hub = getCurrentHub();
    const scope = hub.getScope();
    scope.update(options.initialScope);
    const client = new clientClass(options);
    hub.bindClient(client);
  }

  // node_modules/@sentry/core/esm/transports/base.js
  var DEFAULT_TRANSPORT_BUFFER_SIZE = 30;
  function createTransport(options, makeRequest, buffer = makePromiseBuffer(
    options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE
  )) {
    let rateLimits = {};
    const flush2 = (timeout) => buffer.drain(timeout);
    function send(envelope) {
      const filteredEnvelopeItems = [];
      forEachEnvelopeItem(envelope, (item, type) => {
        const envelopeItemDataCategory = envelopeItemTypeToDataCategory(type);
        if (isRateLimited(rateLimits, envelopeItemDataCategory)) {
          const event = getEventForEnvelopeItem(item, type);
          options.recordDroppedEvent("ratelimit_backoff", envelopeItemDataCategory, event);
        } else {
          filteredEnvelopeItems.push(item);
        }
      });
      if (filteredEnvelopeItems.length === 0) {
        return resolvedSyncPromise();
      }
      const filteredEnvelope = createEnvelope(envelope[0], filteredEnvelopeItems);
      const recordEnvelopeLoss = (reason) => {
        forEachEnvelopeItem(filteredEnvelope, (item, type) => {
          const event = getEventForEnvelopeItem(item, type);
          options.recordDroppedEvent(reason, envelopeItemTypeToDataCategory(type), event);
        });
      };
      const requestTask = () => makeRequest({ body: serializeEnvelope(filteredEnvelope, options.textEncoder) }).then(
        (response) => {
          if (response.statusCode !== void 0 && (response.statusCode < 200 || response.statusCode >= 300)) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
          }
          rateLimits = updateRateLimits(rateLimits, response);
          return response;
        },
        (error) => {
          recordEnvelopeLoss("network_error");
          throw error;
        }
      );
      return buffer.add(requestTask).then(
        (result) => result,
        (error) => {
          if (error instanceof SentryError) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Skipped sending event because buffer is full.");
            recordEnvelopeLoss("queue_overflow");
            return resolvedSyncPromise();
          } else {
            throw error;
          }
        }
      );
    }
    send.__sentry__baseTransport__ = true;
    return {
      send,
      flush: flush2
    };
  }
  function getEventForEnvelopeItem(item, type) {
    if (type !== "event" && type !== "transaction") {
      return void 0;
    }
    return Array.isArray(item) ? item[1] : void 0;
  }

  // node_modules/@sentry/core/esm/version.js
  var SDK_VERSION = "7.70.0";

  // node_modules/@sentry/core/esm/integrations/index.js
  var integrations_exports = {};
  __export(integrations_exports, {
    FunctionToString: () => FunctionToString,
    InboundFilters: () => InboundFilters
  });

  // node_modules/@sentry/core/esm/integrations/functiontostring.js
  var originalFunctionToString;
  var FunctionToString = class {
    static __initStatic() {
      this.id = "FunctionToString";
    }
    constructor() {
      this.name = FunctionToString.id;
    }
    setupOnce() {
      originalFunctionToString = Function.prototype.toString;
      try {
        Function.prototype.toString = function(...args) {
          const context = getOriginalFunction(this) || this;
          return originalFunctionToString.apply(context, args);
        };
      } catch (e) {
      }
    }
  };
  FunctionToString.__initStatic();

  // node_modules/@sentry/core/esm/integrations/inboundfilters.js
  var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
  var DEFAULT_IGNORE_TRANSACTIONS = [
    /^.*healthcheck.*$/,
    /^.*healthy.*$/,
    /^.*live.*$/,
    /^.*ready.*$/,
    /^.*heartbeat.*$/,
    /^.*\/health$/,
    /^.*\/healthz$/
  ];
  var InboundFilters = class {
    static __initStatic() {
      this.id = "InboundFilters";
    }
    constructor(options = {}) {
      this.name = InboundFilters.id;
      this._options = options;
    }
    setupOnce(addGlobalEventProcessor2, getCurrentHub2) {
      const eventProcess = (event) => {
        const hub = getCurrentHub2();
        if (hub) {
          const self2 = hub.getIntegration(InboundFilters);
          if (self2) {
            const client = hub.getClient();
            const clientOptions = client ? client.getOptions() : {};
            const options = _mergeOptions(self2._options, clientOptions);
            return _shouldDropEvent(event, options) ? null : event;
          }
        }
        return event;
      };
      eventProcess.id = this.name;
      addGlobalEventProcessor2(eventProcess);
    }
  };
  InboundFilters.__initStatic();
  function _mergeOptions(internalOptions = {}, clientOptions = {}) {
    return {
      allowUrls: [...internalOptions.allowUrls || [], ...clientOptions.allowUrls || []],
      denyUrls: [...internalOptions.denyUrls || [], ...clientOptions.denyUrls || []],
      ignoreErrors: [
        ...internalOptions.ignoreErrors || [],
        ...clientOptions.ignoreErrors || [],
        ...internalOptions.disableErrorDefaults ? [] : DEFAULT_IGNORE_ERRORS
      ],
      ignoreTransactions: [
        ...internalOptions.ignoreTransactions || [],
        ...clientOptions.ignoreTransactions || [],
        ...internalOptions.disableTransactionDefaults ? [] : DEFAULT_IGNORE_TRANSACTIONS
      ],
      ignoreInternal: internalOptions.ignoreInternal !== void 0 ? internalOptions.ignoreInternal : true
    };
  }
  function _shouldDropEvent(event, options) {
    if (options.ignoreInternal && _isSentryError(event)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Event dropped due to being internal Sentry Error.
Event: ${getEventDescription(event)}`);
      return true;
    }
    if (_isIgnoredError(event, options.ignoreErrors)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${getEventDescription(event)}`
      );
      return true;
    }
    if (_isIgnoredTransaction(event, options.ignoreTransactions)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${getEventDescription(event)}`
      );
      return true;
    }
    if (_isDeniedUrl(event, options.denyUrls)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `Event dropped due to being matched by \`denyUrls\` option.
Event: ${getEventDescription(
          event
        )}.
Url: ${_getEventFilterUrl(event)}`
      );
      return true;
    }
    if (!_isAllowedUrl(event, options.allowUrls)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `Event dropped due to not being matched by \`allowUrls\` option.
Event: ${getEventDescription(
          event
        )}.
Url: ${_getEventFilterUrl(event)}`
      );
      return true;
    }
    return false;
  }
  function _isIgnoredError(event, ignoreErrors) {
    if (event.type || !ignoreErrors || !ignoreErrors.length) {
      return false;
    }
    return _getPossibleEventMessages(event).some((message) => stringMatchesSomePattern(message, ignoreErrors));
  }
  function _isIgnoredTransaction(event, ignoreTransactions) {
    if (event.type !== "transaction" || !ignoreTransactions || !ignoreTransactions.length) {
      return false;
    }
    const name = event.transaction;
    return name ? stringMatchesSomePattern(name, ignoreTransactions) : false;
  }
  function _isDeniedUrl(event, denyUrls) {
    if (!denyUrls || !denyUrls.length) {
      return false;
    }
    const url = _getEventFilterUrl(event);
    return !url ? false : stringMatchesSomePattern(url, denyUrls);
  }
  function _isAllowedUrl(event, allowUrls) {
    if (!allowUrls || !allowUrls.length) {
      return true;
    }
    const url = _getEventFilterUrl(event);
    return !url ? true : stringMatchesSomePattern(url, allowUrls);
  }
  function _getPossibleEventMessages(event) {
    const possibleMessages = [];
    if (event.message) {
      possibleMessages.push(event.message);
    }
    let lastException;
    try {
      lastException = event.exception.values[event.exception.values.length - 1];
    } catch (e) {
    }
    if (lastException) {
      if (lastException.value) {
        possibleMessages.push(lastException.value);
        if (lastException.type) {
          possibleMessages.push(`${lastException.type}: ${lastException.value}`);
        }
      }
    }
    if ((typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && possibleMessages.length === 0) {
      logger.error(`Could not extract message for event ${getEventDescription(event)}`);
    }
    return possibleMessages;
  }
  function _isSentryError(event) {
    try {
      return event.exception.values[0].type === "SentryError";
    } catch (e) {
    }
    return false;
  }
  function _getLastValidUrl(frames = []) {
    for (let i = frames.length - 1; i >= 0; i--) {
      const frame = frames[i];
      if (frame && frame.filename !== "<anonymous>" && frame.filename !== "[native code]") {
        return frame.filename || null;
      }
    }
    return null;
  }
  function _getEventFilterUrl(event) {
    try {
      let frames;
      try {
        frames = event.exception.values[0].stacktrace.frames;
      } catch (e) {
      }
      return frames ? _getLastValidUrl(frames) : null;
    } catch (oO) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(`Cannot extract url for event ${getEventDescription(event)}`);
      return null;
    }
  }

  // node_modules/@sentry/browser/esm/helpers.js
  var WINDOW6 = GLOBAL_OBJ;
  var ignoreOnError = 0;
  function shouldIgnoreOnError() {
    return ignoreOnError > 0;
  }
  function ignoreNextOnError() {
    ignoreOnError++;
    setTimeout(() => {
      ignoreOnError--;
    });
  }
  function wrap(fn, options = {}, before) {
    if (typeof fn !== "function") {
      return fn;
    }
    try {
      const wrapper = fn.__sentry_wrapped__;
      if (wrapper) {
        return wrapper;
      }
      if (getOriginalFunction(fn)) {
        return fn;
      }
    } catch (e) {
      return fn;
    }
    const sentryWrapped = function() {
      const args = Array.prototype.slice.call(arguments);
      try {
        if (before && typeof before === "function") {
          before.apply(this, arguments);
        }
        const wrappedArguments = args.map((arg) => wrap(arg, options));
        return fn.apply(this, wrappedArguments);
      } catch (ex) {
        ignoreNextOnError();
        withScope((scope) => {
          scope.addEventProcessor((event) => {
            if (options.mechanism) {
              addExceptionTypeValue(event, void 0, void 0);
              addExceptionMechanism(event, options.mechanism);
            }
            event.extra = {
              ...event.extra,
              arguments: args
            };
            return event;
          });
          captureException(ex);
        });
        throw ex;
      }
    };
    try {
      for (const property in fn) {
        if (Object.prototype.hasOwnProperty.call(fn, property)) {
          sentryWrapped[property] = fn[property];
        }
      }
    } catch (_oO) {
    }
    markFunctionWrapped(sentryWrapped, fn);
    addNonEnumerableProperty(fn, "__sentry_wrapped__", sentryWrapped);
    try {
      const descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, "name");
      if (descriptor.configurable) {
        Object.defineProperty(sentryWrapped, "name", {
          get() {
            return fn.name;
          }
        });
      }
    } catch (_oO) {
    }
    return sentryWrapped;
  }

  // node_modules/@sentry/browser/esm/eventbuilder.js
  function exceptionFromError(stackParser, ex) {
    const frames = parseStackFrames(stackParser, ex);
    const exception = {
      type: ex && ex.name,
      value: extractMessage(ex)
    };
    if (frames.length) {
      exception.stacktrace = { frames };
    }
    if (exception.type === void 0 && exception.value === "") {
      exception.value = "Unrecoverable error caught";
    }
    return exception;
  }
  function eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection) {
    const hub = getCurrentHub();
    const client = hub.getClient();
    const normalizeDepth = client && client.getOptions().normalizeDepth;
    const event = {
      exception: {
        values: [
          {
            type: isEvent(exception) ? exception.constructor.name : isUnhandledRejection ? "UnhandledRejection" : "Error",
            value: getNonErrorObjectExceptionValue(exception, { isUnhandledRejection })
          }
        ]
      },
      extra: {
        __serialized__: normalizeToSize(exception, normalizeDepth)
      }
    };
    if (syntheticException) {
      const frames = parseStackFrames(stackParser, syntheticException);
      if (frames.length) {
        event.exception.values[0].stacktrace = { frames };
      }
    }
    return event;
  }
  function eventFromError(stackParser, ex) {
    return {
      exception: {
        values: [exceptionFromError(stackParser, ex)]
      }
    };
  }
  function parseStackFrames(stackParser, ex) {
    const stacktrace = ex.stacktrace || ex.stack || "";
    const popSize = getPopSize(ex);
    try {
      return stackParser(stacktrace, popSize);
    } catch (e) {
    }
    return [];
  }
  var reactMinifiedRegexp = /Minified React error #\d+;/i;
  function getPopSize(ex) {
    if (ex) {
      if (typeof ex.framesToPop === "number") {
        return ex.framesToPop;
      }
      if (reactMinifiedRegexp.test(ex.message)) {
        return 1;
      }
    }
    return 0;
  }
  function extractMessage(ex) {
    const message = ex && ex.message;
    if (!message) {
      return "No error message";
    }
    if (message.error && typeof message.error.message === "string") {
      return message.error.message;
    }
    return message;
  }
  function eventFromException(stackParser, exception, hint, attachStacktrace) {
    const syntheticException = hint && hint.syntheticException || void 0;
    const event = eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace);
    addExceptionMechanism(event);
    event.level = "error";
    if (hint && hint.event_id) {
      event.event_id = hint.event_id;
    }
    return resolvedSyncPromise(event);
  }
  function eventFromMessage(stackParser, message, level = "info", hint, attachStacktrace) {
    const syntheticException = hint && hint.syntheticException || void 0;
    const event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
    event.level = level;
    if (hint && hint.event_id) {
      event.event_id = hint.event_id;
    }
    return resolvedSyncPromise(event);
  }
  function eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace, isUnhandledRejection) {
    let event;
    if (isErrorEvent(exception) && exception.error) {
      const errorEvent = exception;
      return eventFromError(stackParser, errorEvent.error);
    }
    if (isDOMError(exception) || isDOMException(exception)) {
      const domException = exception;
      if ("stack" in exception) {
        event = eventFromError(stackParser, exception);
      } else {
        const name = domException.name || (isDOMError(domException) ? "DOMError" : "DOMException");
        const message = domException.message ? `${name}: ${domException.message}` : name;
        event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
        addExceptionTypeValue(event, message);
      }
      if ("code" in domException) {
        event.tags = { ...event.tags, "DOMException.code": `${domException.code}` };
      }
      return event;
    }
    if (isError(exception)) {
      return eventFromError(stackParser, exception);
    }
    if (isPlainObject(exception) || isEvent(exception)) {
      const objectException = exception;
      event = eventFromPlainObject(stackParser, objectException, syntheticException, isUnhandledRejection);
      addExceptionMechanism(event, {
        synthetic: true
      });
      return event;
    }
    event = eventFromString(stackParser, exception, syntheticException, attachStacktrace);
    addExceptionTypeValue(event, `${exception}`, void 0);
    addExceptionMechanism(event, {
      synthetic: true
    });
    return event;
  }
  function eventFromString(stackParser, input, syntheticException, attachStacktrace) {
    const event = {
      message: input
    };
    if (attachStacktrace && syntheticException) {
      const frames = parseStackFrames(stackParser, syntheticException);
      if (frames.length) {
        event.exception = {
          values: [{ value: input, stacktrace: { frames } }]
        };
      }
    }
    return event;
  }
  function getNonErrorObjectExceptionValue(exception, { isUnhandledRejection }) {
    const keys = extractExceptionKeysForMessage(exception);
    const captureType = isUnhandledRejection ? "promise rejection" : "exception";
    if (isErrorEvent(exception)) {
      return `Event \`ErrorEvent\` captured as ${captureType} with message \`${exception.message}\``;
    }
    if (isEvent(exception)) {
      const className = getObjectClassName(exception);
      return `Event \`${className}\` (type=${exception.type}) captured as ${captureType}`;
    }
    return `Object captured as ${captureType} with keys: ${keys}`;
  }
  function getObjectClassName(obj) {
    try {
      const prototype = Object.getPrototypeOf(obj);
      return prototype ? prototype.constructor.name : void 0;
    } catch (e) {
    }
  }

  // node_modules/@sentry/browser/esm/userfeedback.js
  function createUserFeedbackEnvelope(feedback, {
    metadata,
    tunnel,
    dsn
  }) {
    const headers = {
      event_id: feedback.event_id,
      sent_at: new Date().toISOString(),
      ...metadata && metadata.sdk && {
        sdk: {
          name: metadata.sdk.name,
          version: metadata.sdk.version
        }
      },
      ...!!tunnel && !!dsn && { dsn: dsnToString(dsn) }
    };
    const item = createUserFeedbackEnvelopeItem(feedback);
    return createEnvelope(headers, [item]);
  }
  function createUserFeedbackEnvelopeItem(feedback) {
    const feedbackHeaders = {
      type: "user_report"
    };
    return [feedbackHeaders, feedback];
  }

  // node_modules/@sentry/browser/esm/client.js
  var BrowserClient = class extends BaseClient {
    constructor(options) {
      const sdkSource = WINDOW6.SENTRY_SDK_SOURCE || getSDKSource();
      options._metadata = options._metadata || {};
      options._metadata.sdk = options._metadata.sdk || {
        name: "sentry.javascript.browser",
        packages: [
          {
            name: `${sdkSource}:@sentry/browser`,
            version: SDK_VERSION
          }
        ],
        version: SDK_VERSION
      };
      super(options);
      if (options.sendClientReports && WINDOW6.document) {
        WINDOW6.document.addEventListener("visibilitychange", () => {
          if (WINDOW6.document.visibilityState === "hidden") {
            this._flushOutcomes();
          }
        });
      }
    }
    eventFromException(exception, hint) {
      return eventFromException(this._options.stackParser, exception, hint, this._options.attachStacktrace);
    }
    eventFromMessage(message, level = "info", hint) {
      return eventFromMessage(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
    }
    captureUserFeedback(feedback) {
      if (!this._isEnabled()) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("SDK not enabled, will not capture user feedback.");
        return;
      }
      const envelope = createUserFeedbackEnvelope(feedback, {
        metadata: this.getSdkMetadata(),
        dsn: this.getDsn(),
        tunnel: this.getOptions().tunnel
      });
      void this._sendEnvelope(envelope);
    }
    _prepareEvent(event, hint, scope) {
      event.platform = event.platform || "javascript";
      return super._prepareEvent(event, hint, scope);
    }
    _flushOutcomes() {
      const outcomes = this._clearOutcomes();
      if (outcomes.length === 0) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("No outcomes to send");
        return;
      }
      if (!this._dsn) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("No dsn provided, will not send outcomes");
        return;
      }
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("Sending outcomes:", outcomes);
      const envelope = createClientReportEnvelope(outcomes, this._options.tunnel && dsnToString(this._dsn));
      void this._sendEnvelope(envelope);
    }
  };

  // node_modules/@sentry/browser/esm/transports/utils.js
  var cachedFetchImpl = void 0;
  function getNativeFetchImplementation() {
    if (cachedFetchImpl) {
      return cachedFetchImpl;
    }
    if (isNativeFetch(WINDOW6.fetch)) {
      return cachedFetchImpl = WINDOW6.fetch.bind(WINDOW6);
    }
    const document2 = WINDOW6.document;
    let fetchImpl = WINDOW6.fetch;
    if (document2 && typeof document2.createElement === "function") {
      try {
        const sandbox = document2.createElement("iframe");
        sandbox.hidden = true;
        document2.head.appendChild(sandbox);
        const contentWindow = sandbox.contentWindow;
        if (contentWindow && contentWindow.fetch) {
          fetchImpl = contentWindow.fetch;
        }
        document2.head.removeChild(sandbox);
      } catch (e) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
      }
    }
    return cachedFetchImpl = fetchImpl.bind(WINDOW6);
  }
  function clearCachedFetchImplementation() {
    cachedFetchImpl = void 0;
  }

  // node_modules/@sentry/browser/esm/transports/fetch.js
  function makeFetchTransport(options, nativeFetch = getNativeFetchImplementation()) {
    let pendingBodySize = 0;
    let pendingCount = 0;
    function makeRequest(request) {
      const requestSize = request.body.length;
      pendingBodySize += requestSize;
      pendingCount++;
      const requestOptions = {
        body: request.body,
        method: "POST",
        referrerPolicy: "origin",
        headers: options.headers,
        keepalive: pendingBodySize <= 6e4 && pendingCount < 15,
        ...options.fetchOptions
      };
      try {
        return nativeFetch(options.url, requestOptions).then((response) => {
          pendingBodySize -= requestSize;
          pendingCount--;
          return {
            statusCode: response.status,
            headers: {
              "x-sentry-rate-limits": response.headers.get("X-Sentry-Rate-Limits"),
              "retry-after": response.headers.get("Retry-After")
            }
          };
        });
      } catch (e) {
        clearCachedFetchImplementation();
        pendingBodySize -= requestSize;
        pendingCount--;
        return rejectedSyncPromise(e);
      }
    }
    return createTransport(options, makeRequest);
  }

  // node_modules/@sentry/browser/esm/transports/xhr.js
  var XHR_READYSTATE_DONE = 4;
  function makeXHRTransport(options) {
    function makeRequest(request) {
      return new SyncPromise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onerror = reject;
        xhr.onreadystatechange = () => {
          if (xhr.readyState === XHR_READYSTATE_DONE) {
            resolve({
              statusCode: xhr.status,
              headers: {
                "x-sentry-rate-limits": xhr.getResponseHeader("X-Sentry-Rate-Limits"),
                "retry-after": xhr.getResponseHeader("Retry-After")
              }
            });
          }
        };
        xhr.open("POST", options.url);
        for (const header in options.headers) {
          if (Object.prototype.hasOwnProperty.call(options.headers, header)) {
            xhr.setRequestHeader(header, options.headers[header]);
          }
        }
        xhr.send(request.body);
      });
    }
    return createTransport(options, makeRequest);
  }

  // node_modules/@sentry/browser/esm/stack-parsers.js
  var UNKNOWN_FUNCTION = "?";
  var CHROME_PRIORITY = 30;
  var WINJS_PRIORITY = 40;
  var GECKO_PRIORITY = 50;
  function createFrame(filename, func, lineno, colno) {
    const frame = {
      filename,
      function: func,
      in_app: true
    };
    if (lineno !== void 0) {
      frame.lineno = lineno;
    }
    if (colno !== void 0) {
      frame.colno = colno;
    }
    return frame;
  }
  var chromeRegex = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
  var chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
  var chrome2 = (line) => {
    const parts = chromeRegex.exec(line);
    if (parts) {
      const isEval = parts[2] && parts[2].indexOf("eval") === 0;
      if (isEval) {
        const subMatch = chromeEvalRegex.exec(parts[2]);
        if (subMatch) {
          parts[2] = subMatch[1];
          parts[3] = subMatch[2];
          parts[4] = subMatch[3];
        }
      }
      const [func, filename] = extractSafariExtensionDetails(parts[1] || UNKNOWN_FUNCTION, parts[2]);
      return createFrame(filename, func, parts[3] ? +parts[3] : void 0, parts[4] ? +parts[4] : void 0);
    }
    return;
  };
  var chromeStackLineParser = [CHROME_PRIORITY, chrome2];
  var geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
  var geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
  var gecko = (line) => {
    const parts = geckoREgex.exec(line);
    if (parts) {
      const isEval = parts[3] && parts[3].indexOf(" > eval") > -1;
      if (isEval) {
        const subMatch = geckoEvalRegex.exec(parts[3]);
        if (subMatch) {
          parts[1] = parts[1] || "eval";
          parts[3] = subMatch[1];
          parts[4] = subMatch[2];
          parts[5] = "";
        }
      }
      let filename = parts[3];
      let func = parts[1] || UNKNOWN_FUNCTION;
      [func, filename] = extractSafariExtensionDetails(func, filename);
      return createFrame(filename, func, parts[4] ? +parts[4] : void 0, parts[5] ? +parts[5] : void 0);
    }
    return;
  };
  var geckoStackLineParser = [GECKO_PRIORITY, gecko];
  var winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  var winjs = (line) => {
    const parts = winjsRegex.exec(line);
    return parts ? createFrame(parts[2], parts[1] || UNKNOWN_FUNCTION, +parts[3], parts[4] ? +parts[4] : void 0) : void 0;
  };
  var winjsStackLineParser = [WINJS_PRIORITY, winjs];
  var defaultStackLineParsers = [chromeStackLineParser, geckoStackLineParser, winjsStackLineParser];
  var defaultStackParser = createStackParser(...defaultStackLineParsers);
  var extractSafariExtensionDetails = (func, filename) => {
    const isSafariExtension = func.indexOf("safari-extension") !== -1;
    const isSafariWebExtension = func.indexOf("safari-web-extension") !== -1;
    return isSafariExtension || isSafariWebExtension ? [
      func.indexOf("@") !== -1 ? func.split("@")[0] : UNKNOWN_FUNCTION,
      isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`
    ] : [func, filename];
  };

  // node_modules/@sentry/browser/esm/integrations/globalhandlers.js
  var GlobalHandlers = class {
    static __initStatic() {
      this.id = "GlobalHandlers";
    }
    constructor(options) {
      this.name = GlobalHandlers.id;
      this._options = {
        onerror: true,
        onunhandledrejection: true,
        ...options
      };
      this._installFunc = {
        onerror: _installGlobalOnErrorHandler,
        onunhandledrejection: _installGlobalOnUnhandledRejectionHandler
      };
    }
    setupOnce() {
      Error.stackTraceLimit = 50;
      const options = this._options;
      for (const key in options) {
        const installFunc = this._installFunc[key];
        if (installFunc && options[key]) {
          globalHandlerLog(key);
          installFunc();
          this._installFunc[key] = void 0;
        }
      }
    }
  };
  GlobalHandlers.__initStatic();
  function _installGlobalOnErrorHandler() {
    addInstrumentationHandler(
      "error",
      (data) => {
        const [hub, stackParser, attachStacktrace] = getHubAndOptions();
        if (!hub.getIntegration(GlobalHandlers)) {
          return;
        }
        const { msg, url, line, column, error } = data;
        if (shouldIgnoreOnError() || error && error.__sentry_own_request__) {
          return;
        }
        const event = error === void 0 && isString(msg) ? _eventFromIncompleteOnError(msg, url, line, column) : _enhanceEventWithInitialFrame(
          eventFromUnknownInput(stackParser, error || msg, void 0, attachStacktrace, false),
          url,
          line,
          column
        );
        event.level = "error";
        addMechanismAndCapture(hub, error, event, "onerror");
      }
    );
  }
  function _installGlobalOnUnhandledRejectionHandler() {
    addInstrumentationHandler(
      "unhandledrejection",
      (e) => {
        const [hub, stackParser, attachStacktrace] = getHubAndOptions();
        if (!hub.getIntegration(GlobalHandlers)) {
          return;
        }
        let error = e;
        try {
          if ("reason" in e) {
            error = e.reason;
          } else if ("detail" in e && "reason" in e.detail) {
            error = e.detail.reason;
          }
        } catch (_oO) {
        }
        if (shouldIgnoreOnError() || error && error.__sentry_own_request__) {
          return true;
        }
        const event = isPrimitive(error) ? _eventFromRejectionWithPrimitive(error) : eventFromUnknownInput(stackParser, error, void 0, attachStacktrace, true);
        event.level = "error";
        addMechanismAndCapture(hub, error, event, "onunhandledrejection");
        return;
      }
    );
  }
  function _eventFromRejectionWithPrimitive(reason) {
    return {
      exception: {
        values: [
          {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(reason)}`
          }
        ]
      }
    };
  }
  function _eventFromIncompleteOnError(msg, url, line, column) {
    const ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    let message = isErrorEvent(msg) ? msg.message : msg;
    let name = "Error";
    const groups = message.match(ERROR_TYPES_RE);
    if (groups) {
      name = groups[1];
      message = groups[2];
    }
    const event = {
      exception: {
        values: [
          {
            type: name,
            value: message
          }
        ]
      }
    };
    return _enhanceEventWithInitialFrame(event, url, line, column);
  }
  function _enhanceEventWithInitialFrame(event, url, line, column) {
    const e = event.exception = event.exception || {};
    const ev = e.values = e.values || [];
    const ev0 = ev[0] = ev[0] || {};
    const ev0s = ev0.stacktrace = ev0.stacktrace || {};
    const ev0sf = ev0s.frames = ev0s.frames || [];
    const colno = isNaN(parseInt(column, 10)) ? void 0 : column;
    const lineno = isNaN(parseInt(line, 10)) ? void 0 : line;
    const filename = isString(url) && url.length > 0 ? url : getLocationHref();
    if (ev0sf.length === 0) {
      ev0sf.push({
        colno,
        filename,
        function: "?",
        in_app: true,
        lineno
      });
    }
    return event;
  }
  function globalHandlerLog(type) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Global Handler attached: ${type}`);
  }
  function addMechanismAndCapture(hub, error, event, type) {
    addExceptionMechanism(event, {
      handled: false,
      type
    });
    hub.captureEvent(event, {
      originalException: error
    });
  }
  function getHubAndOptions() {
    const hub = getCurrentHub();
    const client = hub.getClient();
    const options = client && client.getOptions() || {
      stackParser: () => [],
      attachStacktrace: false
    };
    return [hub, options.stackParser, options.attachStacktrace];
  }

  // node_modules/@sentry/browser/esm/integrations/trycatch.js
  var DEFAULT_EVENT_TARGET = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "BroadcastChannel",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "SharedWorker",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload"
  ];
  var TryCatch = class {
    static __initStatic() {
      this.id = "TryCatch";
    }
    constructor(options) {
      this.name = TryCatch.id;
      this._options = {
        XMLHttpRequest: true,
        eventTarget: true,
        requestAnimationFrame: true,
        setInterval: true,
        setTimeout: true,
        ...options
      };
    }
    setupOnce() {
      if (this._options.setTimeout) {
        fill(WINDOW6, "setTimeout", _wrapTimeFunction);
      }
      if (this._options.setInterval) {
        fill(WINDOW6, "setInterval", _wrapTimeFunction);
      }
      if (this._options.requestAnimationFrame) {
        fill(WINDOW6, "requestAnimationFrame", _wrapRAF);
      }
      if (this._options.XMLHttpRequest && "XMLHttpRequest" in WINDOW6) {
        fill(XMLHttpRequest.prototype, "send", _wrapXHR);
      }
      const eventTargetOption = this._options.eventTarget;
      if (eventTargetOption) {
        const eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
        eventTarget.forEach(_wrapEventTarget);
      }
    }
  };
  TryCatch.__initStatic();
  function _wrapTimeFunction(original) {
    return function(...args) {
      const originalCallback = args[0];
      args[0] = wrap(originalCallback, {
        mechanism: {
          data: { function: getFunctionName(original) },
          handled: false,
          type: "instrument"
        }
      });
      return original.apply(this, args);
    };
  }
  function _wrapRAF(original) {
    return function(callback) {
      return original.apply(this, [
        wrap(callback, {
          mechanism: {
            data: {
              function: "requestAnimationFrame",
              handler: getFunctionName(original)
            },
            handled: false,
            type: "instrument"
          }
        })
      ]);
    };
  }
  function _wrapXHR(originalSend) {
    return function(...args) {
      const xhr = this;
      const xmlHttpRequestProps = ["onload", "onerror", "onprogress", "onreadystatechange"];
      xmlHttpRequestProps.forEach((prop) => {
        if (prop in xhr && typeof xhr[prop] === "function") {
          fill(xhr, prop, function(original) {
            const wrapOptions = {
              mechanism: {
                data: {
                  function: prop,
                  handler: getFunctionName(original)
                },
                handled: false,
                type: "instrument"
              }
            };
            const originalFunction = getOriginalFunction(original);
            if (originalFunction) {
              wrapOptions.mechanism.data.handler = getFunctionName(originalFunction);
            }
            return wrap(original, wrapOptions);
          });
        }
      });
      return originalSend.apply(this, args);
    };
  }
  function _wrapEventTarget(target) {
    const globalObject = WINDOW6;
    const proto = globalObject[target] && globalObject[target].prototype;
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) {
      return;
    }
    fill(proto, "addEventListener", function(original) {
      return function(eventName, fn, options) {
        try {
          if (typeof fn.handleEvent === "function") {
            fn.handleEvent = wrap(fn.handleEvent, {
              mechanism: {
                data: {
                  function: "handleEvent",
                  handler: getFunctionName(fn),
                  target
                },
                handled: false,
                type: "instrument"
              }
            });
          }
        } catch (err) {
        }
        return original.apply(this, [
          eventName,
          wrap(fn, {
            mechanism: {
              data: {
                function: "addEventListener",
                handler: getFunctionName(fn),
                target
              },
              handled: false,
              type: "instrument"
            }
          }),
          options
        ]);
      };
    });
    fill(
      proto,
      "removeEventListener",
      function(originalRemoveEventListener) {
        return function(eventName, fn, options) {
          const wrappedEventHandler = fn;
          try {
            const originalEventHandler = wrappedEventHandler && wrappedEventHandler.__sentry_wrapped__;
            if (originalEventHandler) {
              originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
            }
          } catch (e) {
          }
          return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
        };
      }
    );
  }

  // node_modules/@sentry/browser/esm/integrations/breadcrumbs.js
  var MAX_ALLOWED_STRING_LENGTH = 1024;
  var Breadcrumbs = class {
    static __initStatic() {
      this.id = "Breadcrumbs";
    }
    constructor(options) {
      this.name = Breadcrumbs.id;
      this.options = {
        console: true,
        dom: true,
        fetch: true,
        history: true,
        sentry: true,
        xhr: true,
        ...options
      };
    }
    setupOnce() {
      if (this.options.console) {
        addInstrumentationHandler("console", _consoleBreadcrumb);
      }
      if (this.options.dom) {
        addInstrumentationHandler("dom", _domBreadcrumb(this.options.dom));
      }
      if (this.options.xhr) {
        addInstrumentationHandler("xhr", _xhrBreadcrumb);
      }
      if (this.options.fetch) {
        addInstrumentationHandler("fetch", _fetchBreadcrumb);
      }
      if (this.options.history) {
        addInstrumentationHandler("history", _historyBreadcrumb);
      }
      if (this.options.sentry) {
        const client = getCurrentHub().getClient();
        client && client.on && client.on("beforeSendEvent", addSentryBreadcrumb);
      }
    }
  };
  Breadcrumbs.__initStatic();
  function addSentryBreadcrumb(event) {
    getCurrentHub().addBreadcrumb(
      {
        category: `sentry.${event.type === "transaction" ? "transaction" : "event"}`,
        event_id: event.event_id,
        level: event.level,
        message: getEventDescription(event)
      },
      {
        event
      }
    );
  }
  function _domBreadcrumb(dom) {
    function _innerDomBreadcrumb(handlerData) {
      let target;
      let keyAttrs = typeof dom === "object" ? dom.serializeAttribute : void 0;
      let maxStringLength = typeof dom === "object" && typeof dom.maxStringLength === "number" ? dom.maxStringLength : void 0;
      if (maxStringLength && maxStringLength > MAX_ALLOWED_STRING_LENGTH) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
          `\`dom.maxStringLength\` cannot exceed ${MAX_ALLOWED_STRING_LENGTH}, but a value of ${maxStringLength} was configured. Sentry will use ${MAX_ALLOWED_STRING_LENGTH} instead.`
        );
        maxStringLength = MAX_ALLOWED_STRING_LENGTH;
      }
      if (typeof keyAttrs === "string") {
        keyAttrs = [keyAttrs];
      }
      try {
        const event = handlerData.event;
        target = _isEvent(event) ? htmlTreeAsString(event.target, { keyAttrs, maxStringLength }) : htmlTreeAsString(event, { keyAttrs, maxStringLength });
      } catch (e) {
        target = "<unknown>";
      }
      if (target.length === 0) {
        return;
      }
      getCurrentHub().addBreadcrumb(
        {
          category: `ui.${handlerData.name}`,
          message: target
        },
        {
          event: handlerData.event,
          name: handlerData.name,
          global: handlerData.global
        }
      );
    }
    return _innerDomBreadcrumb;
  }
  function _consoleBreadcrumb(handlerData) {
    const breadcrumb = {
      category: "console",
      data: {
        arguments: handlerData.args,
        logger: "console"
      },
      level: severityLevelFromString(handlerData.level),
      message: safeJoin(handlerData.args, " ")
    };
    if (handlerData.level === "assert") {
      if (handlerData.args[0] === false) {
        breadcrumb.message = `Assertion failed: ${safeJoin(handlerData.args.slice(1), " ") || "console.assert"}`;
        breadcrumb.data.arguments = handlerData.args.slice(1);
      } else {
        return;
      }
    }
    getCurrentHub().addBreadcrumb(breadcrumb, {
      input: handlerData.args,
      level: handlerData.level
    });
  }
  function _xhrBreadcrumb(handlerData) {
    const { startTimestamp, endTimestamp } = handlerData;
    const sentryXhrData = handlerData.xhr[SENTRY_XHR_DATA_KEY];
    if (!startTimestamp || !endTimestamp || !sentryXhrData) {
      return;
    }
    const { method, url, status_code, body: body2 } = sentryXhrData;
    const data = {
      method,
      url,
      status_code
    };
    const hint = {
      xhr: handlerData.xhr,
      input: body2,
      startTimestamp,
      endTimestamp
    };
    getCurrentHub().addBreadcrumb(
      {
        category: "xhr",
        data,
        type: "http"
      },
      hint
    );
  }
  function _fetchBreadcrumb(handlerData) {
    const { startTimestamp, endTimestamp } = handlerData;
    if (!endTimestamp) {
      return;
    }
    if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === "POST") {
      return;
    }
    if (handlerData.error) {
      const data = handlerData.fetchData;
      const hint = {
        data: handlerData.error,
        input: handlerData.args,
        startTimestamp,
        endTimestamp
      };
      getCurrentHub().addBreadcrumb(
        {
          category: "fetch",
          data,
          level: "error",
          type: "http"
        },
        hint
      );
    } else {
      const data = {
        ...handlerData.fetchData,
        status_code: handlerData.response && handlerData.response.status
      };
      const hint = {
        input: handlerData.args,
        response: handlerData.response,
        startTimestamp,
        endTimestamp
      };
      getCurrentHub().addBreadcrumb(
        {
          category: "fetch",
          data,
          type: "http"
        },
        hint
      );
    }
  }
  function _historyBreadcrumb(handlerData) {
    let from = handlerData.from;
    let to = handlerData.to;
    const parsedLoc = parseUrl(WINDOW6.location.href);
    let parsedFrom = parseUrl(from);
    const parsedTo = parseUrl(to);
    if (!parsedFrom.path) {
      parsedFrom = parsedLoc;
    }
    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
      to = parsedTo.relative;
    }
    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
      from = parsedFrom.relative;
    }
    getCurrentHub().addBreadcrumb({
      category: "navigation",
      data: {
        from,
        to
      }
    });
  }
  function _isEvent(event) {
    return !!event && !!event.target;
  }

  // node_modules/@sentry/browser/esm/integrations/linkederrors.js
  var DEFAULT_KEY = "cause";
  var DEFAULT_LIMIT = 5;
  var LinkedErrors = class {
    static __initStatic() {
      this.id = "LinkedErrors";
    }
    constructor(options = {}) {
      this.name = LinkedErrors.id;
      this._key = options.key || DEFAULT_KEY;
      this._limit = options.limit || DEFAULT_LIMIT;
    }
    setupOnce() {
    }
    preprocessEvent(event, hint, client) {
      const options = client.getOptions();
      applyAggregateErrorsToEvent(
        exceptionFromError,
        options.stackParser,
        options.maxValueLength,
        this._key,
        this._limit,
        event,
        hint
      );
    }
  };
  LinkedErrors.__initStatic();

  // node_modules/@sentry/browser/esm/integrations/httpcontext.js
  var HttpContext = class {
    static __initStatic() {
      this.id = "HttpContext";
    }
    constructor() {
      this.name = HttpContext.id;
    }
    setupOnce() {
      addGlobalEventProcessor((event) => {
        if (getCurrentHub().getIntegration(HttpContext)) {
          if (!WINDOW6.navigator && !WINDOW6.location && !WINDOW6.document) {
            return event;
          }
          const url = event.request && event.request.url || WINDOW6.location && WINDOW6.location.href;
          const { referrer } = WINDOW6.document || {};
          const { userAgent } = WINDOW6.navigator || {};
          const headers = {
            ...event.request && event.request.headers,
            ...referrer && { Referer: referrer },
            ...userAgent && { "User-Agent": userAgent }
          };
          const request = { ...event.request, ...url && { url }, headers };
          return { ...event, request };
        }
        return event;
      });
    }
  };
  HttpContext.__initStatic();

  // node_modules/@sentry/browser/esm/integrations/dedupe.js
  var Dedupe = class {
    static __initStatic() {
      this.id = "Dedupe";
    }
    constructor() {
      this.name = Dedupe.id;
    }
    setupOnce(addGlobalEventProcessor2, getCurrentHub2) {
      const eventProcessor = (currentEvent) => {
        if (currentEvent.type) {
          return currentEvent;
        }
        const self2 = getCurrentHub2().getIntegration(Dedupe);
        if (self2) {
          try {
            if (_shouldDropEvent2(currentEvent, self2._previousEvent)) {
              (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Event dropped due to being a duplicate of previously captured event.");
              return null;
            }
          } catch (_oO) {
            return self2._previousEvent = currentEvent;
          }
          return self2._previousEvent = currentEvent;
        }
        return currentEvent;
      };
      eventProcessor.id = this.name;
      addGlobalEventProcessor2(eventProcessor);
    }
  };
  Dedupe.__initStatic();
  function _shouldDropEvent2(currentEvent, previousEvent) {
    if (!previousEvent) {
      return false;
    }
    if (_isSameMessageEvent(currentEvent, previousEvent)) {
      return true;
    }
    if (_isSameExceptionEvent(currentEvent, previousEvent)) {
      return true;
    }
    return false;
  }
  function _isSameMessageEvent(currentEvent, previousEvent) {
    const currentMessage = currentEvent.message;
    const previousMessage = previousEvent.message;
    if (!currentMessage && !previousMessage) {
      return false;
    }
    if (currentMessage && !previousMessage || !currentMessage && previousMessage) {
      return false;
    }
    if (currentMessage !== previousMessage) {
      return false;
    }
    if (!_isSameFingerprint(currentEvent, previousEvent)) {
      return false;
    }
    if (!_isSameStacktrace(currentEvent, previousEvent)) {
      return false;
    }
    return true;
  }
  function _isSameExceptionEvent(currentEvent, previousEvent) {
    const previousException = _getExceptionFromEvent(previousEvent);
    const currentException = _getExceptionFromEvent(currentEvent);
    if (!previousException || !currentException) {
      return false;
    }
    if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
      return false;
    }
    if (!_isSameFingerprint(currentEvent, previousEvent)) {
      return false;
    }
    if (!_isSameStacktrace(currentEvent, previousEvent)) {
      return false;
    }
    return true;
  }
  function _isSameStacktrace(currentEvent, previousEvent) {
    let currentFrames = _getFramesFromEvent(currentEvent);
    let previousFrames = _getFramesFromEvent(previousEvent);
    if (!currentFrames && !previousFrames) {
      return true;
    }
    if (currentFrames && !previousFrames || !currentFrames && previousFrames) {
      return false;
    }
    currentFrames = currentFrames;
    previousFrames = previousFrames;
    if (previousFrames.length !== currentFrames.length) {
      return false;
    }
    for (let i = 0; i < previousFrames.length; i++) {
      const frameA = previousFrames[i];
      const frameB = currentFrames[i];
      if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) {
        return false;
      }
    }
    return true;
  }
  function _isSameFingerprint(currentEvent, previousEvent) {
    let currentFingerprint = currentEvent.fingerprint;
    let previousFingerprint = previousEvent.fingerprint;
    if (!currentFingerprint && !previousFingerprint) {
      return true;
    }
    if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) {
      return false;
    }
    currentFingerprint = currentFingerprint;
    previousFingerprint = previousFingerprint;
    try {
      return !!(currentFingerprint.join("") === previousFingerprint.join(""));
    } catch (_oO) {
      return false;
    }
  }
  function _getExceptionFromEvent(event) {
    return event.exception && event.exception.values && event.exception.values[0];
  }
  function _getFramesFromEvent(event) {
    const exception = event.exception;
    if (exception) {
      try {
        return exception.values[0].stacktrace.frames;
      } catch (_oO) {
        return void 0;
      }
    }
    return void 0;
  }

  // node_modules/@sentry/browser/esm/sdk.js
  var defaultIntegrations = [
    new integrations_exports.InboundFilters(),
    new integrations_exports.FunctionToString(),
    new TryCatch(),
    new Breadcrumbs(),
    new GlobalHandlers(),
    new LinkedErrors(),
    new Dedupe(),
    new HttpContext()
  ];
  function init(options = {}) {
    if (options.defaultIntegrations === void 0) {
      options.defaultIntegrations = defaultIntegrations;
    }
    if (options.release === void 0) {
      if (typeof __SENTRY_RELEASE__ === "string") {
        options.release = __SENTRY_RELEASE__;
      }
      if (WINDOW6.SENTRY_RELEASE && WINDOW6.SENTRY_RELEASE.id) {
        options.release = WINDOW6.SENTRY_RELEASE.id;
      }
    }
    if (options.autoSessionTracking === void 0) {
      options.autoSessionTracking = true;
    }
    if (options.sendClientReports === void 0) {
      options.sendClientReports = true;
    }
    const clientOptions = {
      ...options,
      stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
      integrations: getIntegrationsToSetup(options),
      transport: options.transport || (supportsFetch() ? makeFetchTransport : makeXHRTransport)
    };
    initAndBind(BrowserClient, clientOptions);
    if (options.autoSessionTracking) {
      startSessionTracking();
    }
  }
  function startSessionOnHub(hub) {
    hub.startSession({ ignoreDuration: true });
    hub.captureSession();
  }
  function startSessionTracking() {
    if (typeof WINDOW6.document === "undefined") {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
      return;
    }
    const hub = getCurrentHub();
    if (!hub.captureSession) {
      return;
    }
    startSessionOnHub(hub);
    addInstrumentationHandler("history", ({ from, to }) => {
      if (!(from === void 0 || from === to)) {
        startSessionOnHub(getCurrentHub());
      }
    });
  }

  // node_modules/@sentry/browser/esm/integrations/index.js
  var integrations_exports2 = {};
  __export(integrations_exports2, {
    Breadcrumbs: () => Breadcrumbs,
    Dedupe: () => Dedupe,
    GlobalHandlers: () => GlobalHandlers,
    HttpContext: () => HttpContext,
    LinkedErrors: () => LinkedErrors,
    TryCatch: () => TryCatch
  });

  // node_modules/@sentry/browser/esm/index.js
  var windowIntegrations = {};
  if (WINDOW6.Sentry && WINDOW6.Sentry.Integrations) {
    windowIntegrations = WINDOW6.Sentry.Integrations;
  }
  var INTEGRATIONS = {
    ...windowIntegrations,
    ...integrations_exports,
    ...integrations_exports2
  };

  // src/manifest.json
  var manifest_default = {
    name: "__MSG_appName__",
    description: "__MSG_appDesc__",
    short_name: "__MSG_appShortName_",
    __package_name: "floating-calculator",
    homepage_url: "https://chrome.google.com/webstore/detail/floating-calculator/mbfnbhfjnjeedaknilkfegfnnmmmmpmn",
    "__comment:version": "Firefox does not support leading zeros in versions",
    version: "23.11.15",
    __sentry_dsn: "https://11fa19323b3a48d5882f26d3a98c1864@o526305.ingest.sentry.io/4504743091699712",
    __measurement_id: "G-ZCZLZLYH36",
    __ga_api_secret: "UIXmDH2iRxaZPMd1S_UUww",
    manifest_version: 3,
    default_locale: "en",
    author: "Justice Ogbonna",
    permissions: ["contextMenus", "storage", "cookies", "activeTab"],
    host_permissions: ["*://*/*"],
    action: {
      default_icon: {
        "16": "assets/logo-16x16.png",
        "24": "assets/logo-24x24.png",
        "32": "assets/logo-32x32.png"
      },
      default_title: "__MSG_appName__",
      __default_popup: "popup/popup.html"
    },
    content_scripts: [
      {
        matches: ["<all_urls>"],
        all_frames: true,
        js: ["content-script/content-script.js"],
        css: ["content-script/content-script.css"],
        match_about_blank: true,
        run_at: "document_start"
      }
    ],
    icons: {
      "16": "assets/logo-16x16.png",
      "32": "assets/logo-32x32.png",
      "48": "assets/logo-48x48.png",
      "128": "assets/logo-128x128.png"
    },
    web_accessible_resources: [
      {
        resources: ["assets/logo-24x24.png"],
        matches: ["<all_urls>"]
      },
      {
        resources: ["content-script/calculator.css"],
        matches: ["<all_urls>"]
      },
      {
        resources: ["assets/icon-min.svg"],
        matches: ["<all_urls>"]
      },
      {
        resources: ["assets/icon-max.svg"],
        matches: ["<all_urls>"]
      },
      {
        resources: ["assets/icon-close.svg"],
        matches: ["<all_urls>"]
      },
      {
        resources: ["content-script/*"],
        matches: ["<all_urls>"]
      },
      {
        resources: ["standalone/calc.html"],
        matches: ["<all_urls>"]
      },
      {
        resources: ["assets/icon-full.svg"],
        matches: ["<all_urls>"]
      }
    ],
    background: {
      __chrome__service_worker: "background-script/background.js",
      __firefox__scripts: ["background-script/background.js"]
    },
    __firefox__key: "",
    __firefox__browser_specific_settings: {
      gecko: {
        id: "scientific-calc@essentialkit.org"
      }
    }
  };

  // src/utils/logger.ts
  var EXTENSION_NAME = manifest_default.__package_name;
  var Logger = class {
    constructor(tag) {
      this.tag = "";
      this.debug = (...messages) => this.internalLog(3 /* DEBUG */, ...messages);
      this.log = (...messages) => this.internalLog(2 /* INFO */, ...messages);
      this.warn = (...messages) => this.internalLog(1 /* WARNING */, ...messages);
      this.error = (...messages) => this.internalLog(0 /* ERROR */, ...messages);
      this.tag = EXTENSION_NAME + "." + (typeof tag === "string" ? tag : tag.constructor.name);
      if (!IS_DEV_BUILD) {
        this.initSentry();
      }
      this.listenForBgLogs();
    }
    initSentry() {
      init({
        dsn: manifest_default.__sentry_dsn,
        tracesSampleRate: 0.1,
        release: EXTENSION_NAME + "@" + manifest_default.version,
        environment: "PROD"
      });
    }
    listenForBgLogs() {
      chrome?.runtime?.onMessage.addListener((message, sender) => {
        if (sender.id !== chrome.runtime.id || message.action != "log") {
          return;
        }
        this.internalLogTagOverride(
          message.data.level,
          message.data.tag,
          ...message.data.messages
        );
      });
    }
    internalLog(level, ...messages) {
      this.internalLogTagOverride(level, this.tag, ...messages);
    }
    internalLogTagOverride(level, tag, ...messages) {
      const d = new Date(Date.now());
      const output = [
        "%c%s %s",
        "color: blue",
        `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`,
        tag,
        ...messages
      ];
      if (!IS_DEV_BUILD) {
        switch (level) {
          case 1 /* WARNING */:
            captureMessage(output.join(" "));
            break;
          case 0 /* ERROR */:
            captureException(output.join(" "));
            break;
        }
        return;
      } else {
        switch (level) {
          case 3 /* DEBUG */:
            console.debug(...output);
            break;
          case 1 /* WARNING */:
            console.warn(...output);
            break;
          case 2 /* INFO */:
            console.log(...output);
            break;
          case 0 /* ERROR */:
            console.error(...output);
            break;
        }
      }
    }
  };

  // src/utils/winbox/template.js
  var template = document.createElement("div");
  template.innerHTML = '<div class=wb-header><div class=wb-control><span title="Minimize" class=wb-min></span><span title="Maximize" class=wb-max></span><span title="Fullscreen" class=wb-full></span><span title="Close" class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-footer><feedback-form size="inline"></feedback-form></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>';
  function markup(tpl) {
    return (tpl || template).cloneNode(true);
  }
  var winboxcss = `
  .winbox {
    position: fixed;
    left: 0;
    top: 0;
    background: #0050ff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    /* using transform make contents blur when applied and requires more gpu memory */
    transition: width 0.3s, height 0.3s, left 0.3s, top 0.3s;
    transition-timing-function: cubic-bezier(0.3, 1, 0.3, 1);
    /* contain "strict" does not make overflow contents selectable */
    contain: layout size;
    /* explicitly set text align to left fixes an issue with iframes alignment when centered */
    text-align: left;
    /* workaround for using passive listeners */
    touch-action: none;
  }
  .wb-header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 35px;
    line-height: 35px;
    color: #fff;
    overflow: hidden;
    z-index: 1;
  }
  .wb-body {
    position: absolute;
    top: 35px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
    will-change: contents;
    background: #fff;
    /* when no border is set there is some thin line visible */
    /* always hide top border visually */
    margin-top: 0 !important;
    contain: strict;
    z-index: 0;
  }
  .wb-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: none;
  }
  .winbox.show-footer .wb-body {
    bottom: 35px; /* height of footer */
  }
  .winbox.show-footer .wb-footer {
    display: block;
  }
  body > .wb-body {
    position: relative;
    display: inline-block;
    visibility: hidden;
    contain: none;
  }
  .wb-drag {
    height: 100%;
    padding-left: 10px;
    cursor: move;
  }
  .wb-title {
    font-family: Arial, sans-serif;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .wb-icon {
    display: none;
    width: 20px;
    height: 100%;
    margin: -1px 8px 0 -3px;
    float: left;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
  .wb-n {
    position: absolute;
    top: -5px;
    left: 0;
    right: 0;
    height: 10px;
    cursor: n-resize;
    z-index: 2;
  }
  .wb-e {
    position: absolute;
    top: 0;
    right: -5px;
    bottom: 0;
    width: 10px;
    cursor: w-resize;
    z-index: 2;
  }
  .wb-s {
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 10px;
    cursor: n-resize;
    z-index: 2;
  }
  .wb-w {
    position: absolute;
    top: 0;
    left: -5px;
    bottom: 0;
    width: 10px;
    cursor: w-resize;
    z-index: 2;
  }
  .wb-nw {
    position: absolute;
    top: -5px;
    left: -5px;
    width: 15px;
    height: 15px;
    cursor: nw-resize;
    z-index: 2;
  }
  .wb-ne {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 15px;
    height: 15px;
    cursor: ne-resize;
    z-index: 2;
  }
  .wb-sw {
    position: absolute;
    bottom: -5px;
    left: -5px;
    width: 15px;
    height: 15px;
    cursor: ne-resize;
    z-index: 2;
  }
  .wb-se {
    position: absolute;
    bottom: -5px;
    right: -5px;
    width: 15px;
    height: 15px;
    cursor: nw-resize;
    z-index: 2;
  }
  .wb-control {
    float: right;
    height: 100%;
    max-width: 100%;
    text-align: center;
  }
  .wb-control * {
    display: inline-block;
    width: 30px;
    height: 100%;
    max-width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .wb-min {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);
    background-size: 14px auto;
    background-position: center calc(50% + 6px);
  }
  .wb-max {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);
    background-size: 17px auto;
  }
  .wb-close {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);
    background-size: 15px auto;
    background-position: 5px center;
  }
  .wb-full {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);
    background-size: 16px auto;
  }
  /*
  .winbox:not(.max) .wb-max {
    background-image: url(@restore);
    background-size: 20px auto;
    background-position: center bottom 5px;
  }
  */
  /*
  .winbox:fullscreen{
    transition: none !important;
  }
  .winbox:fullscreen .wb-full{
    background-image: url(@minimize);
  }
  .winbox:fullscreen > div,
  .winbox:fullscreen .wb-title,
  */
  .winbox.modal .wb-body ~ div,
  .winbox.modal .wb-drag,
  .winbox.min .wb-body ~ div,
  .winbox.max .wb-body ~ div {
    pointer-events: none;
  }
  .winbox.max .wb-drag {
    cursor: default;
  }
  .winbox.min .wb-full,
  .winbox.min .wb-min {
    display: none;
  }
  .winbox.min .wb-drag {
    cursor: default;
  }
  .winbox.min .wb-body > * {
    display: none;
  }
  .winbox.hide {
    display: none;
  }
  .winbox.max {
    box-shadow: none;
  }
  .winbox.max .wb-body {
    margin: 0 !important;
  }
  .winbox iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0;
  }
  body.wb-lock .winbox {
    will-change: left, top, width, height;
    transition: none;
  }
  body.wb-lock iframe {
    pointer-events: none;
  }
  .winbox.modal:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    border-radius: inherit;
  }
  .winbox.modal:after {
    content: '';
    position: absolute;
    top: -50vh;
    left: -50vw;
    right: -50vw;
    bottom: -50vh;
    background: #0d1117;
    animation: wb-fade-in 0.2s ease-out forwards;
    z-index: -1;
  }
  .winbox.modal .wb-min,
  .winbox.modal .wb-max,
  .winbox.modal .wb-full {
    display: none;
  }
  @keyframes wb-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.85;
    }
  }
  .no-animation {
    transition: none;
  }
  .no-shadow {
    box-shadow: none;
  }
  .no-header .wb-header {
    display: none;
  }
  .no-header .wb-body {
    top: 0;
  }
  .no-min .wb-min {
    display: none;
  }
  .no-max .wb-max {
    display: none;
  }
  .no-full .wb-full {
    display: none;
  }
  .no-close .wb-close {
    display: none;
  }
  .no-resize .wb-body ~ div {
    display: none;
  }
  .no-move:not(.min) .wb-title {
    pointer-events: none;
  }
  .wb-body .wb-hide {
    display: none;
  }
  .wb-show {
    display: none;
  }
  .wb-body .wb-show {
    display: revert;
  }
`;

  // src/utils/winbox/helper.js
  function addListener(node, event, fn, opt) {
    node && node.addEventListener(event, fn, opt || false);
  }
  function removeListener(node, event, fn, opt) {
    node && node.removeEventListener(event, fn, opt || false);
  }
  function preventEvent(event, prevent) {
    event.stopPropagation();
    event.cancelable && event.preventDefault();
  }
  function getByClass(root, name) {
    return root.getElementsByClassName(name)[0];
  }
  function addClass(node, classname) {
    node.classList.add(classname);
  }
  function hasClass(node, classname) {
    return node.classList.contains(classname);
  }
  function removeClass(node, classname) {
    node.classList.remove(classname);
  }
  function setStyle(node, style, value) {
    value = "" + value;
    if (node["_s_" + style] !== value) {
      node.style.setProperty(style, value);
      node["_s_" + style] = value;
    }
  }
  function setText(node, value) {
    const textnode = node.firstChild;
    textnode ? textnode.nodeValue = value : node.textContent = value;
  }

  // src/utils/winbox/winbox.js
  var use_raf = false;
  var stack_min = [];
  var eventOptions = { capture: true, passive: true };
  var body;
  var id_counter = 0;
  var index_counter = 10;
  var is_fullscreen;
  var last_focus;
  var prefix_request;
  var prefix_exit;
  var root_w;
  var root_h;
  var WinBox = class {
    constructor(params, _title) {
      if (!(this instanceof WinBox)) {
        return new WinBox(params);
      }
      body || setup();
      let id, index, root, tpl, title, icon, mount, html, url, shadowel, shadowdom, framename, cssurl, width, height, minwidth, minheight, maxwidth, maxheight, autosize, x, y, top, left, bottom, right, min2, max2, hidden, modal, background, border, header, classname, oncreate, onclose, onfocus, onblur, onmove, onresize, onfullscreen, onmaximize, onminimize, onrestore, onhide, onshow, onload;
      if (params) {
        if (_title) {
          title = params;
          params = _title;
        }
        if (typeof params === "string") {
          title = params;
        } else {
          id = params["id"];
          index = params["index"];
          root = params["root"];
          tpl = params["template"];
          title = title || params["title"];
          icon = params["icon"];
          mount = params["mount"];
          html = params["html"];
          url = params["url"];
          shadowel = params["shadowel"];
          framename = params["framename"];
          cssurl = params["cssurl"];
          width = params["width"];
          height = params["height"];
          minwidth = params["minwidth"];
          minheight = params["minheight"];
          maxwidth = params["maxwidth"];
          maxheight = params["maxheight"];
          autosize = params["autosize"];
          min2 = params["min"];
          max2 = params["max"];
          hidden = params["hidden"];
          modal = params["modal"];
          x = params["x"] || (modal ? "center" : 0);
          y = params["y"] || (modal ? "center" : 0);
          top = params["top"];
          left = params["left"];
          bottom = params["bottom"];
          right = params["right"];
          background = params["background"];
          border = params["border"];
          header = params["header"];
          classname = params["class"];
          onclose = params["onclose"];
          onfocus = params["onfocus"];
          onblur = params["onblur"];
          onmove = params["onmove"];
          onresize = params["onresize"];
          onfullscreen = params["onfullscreen"];
          onmaximize = params["onmaximize"];
          onminimize = params["onminimize"];
          onrestore = params["onrestore"];
          onhide = params["onhide"];
          onshow = params["onshow"];
          onload = params["onload"];
        }
      }
      this.dom = markup(tpl);
      this.dom.id = this.id = id || "winbox-" + ++id_counter;
      this.dom.className = "winbox" + (classname ? " " + (typeof classname === "string" ? classname : classname.join(" ")) : "") + (modal ? " modal" : "");
      this.dom["winbox"] = this;
      this.window = this.dom;
      this.body = getByClass(this.dom, "wb-body");
      this.header = header || 35;
      if (index || index === 0) {
        index_counter = index;
      }
      if (background) {
        this.setBackground(background);
      }
      if (border) {
        setStyle(this.body, "margin", border + (isNaN(border) ? "" : "px"));
      } else {
        border = 0;
      }
      if (header) {
        const node = getByClass(this.dom, "wb-header");
        setStyle(node, "height", header + "px");
        setStyle(node, "line-height", header + "px");
        setStyle(this.body, "top", header + "px");
      }
      if (title) {
        this.setTitle(title);
      }
      if (icon) {
        this.setIcon(icon);
      }
      if (mount) {
        this.mount(mount);
      } else if (html) {
        this.body.innerHTML = html;
      } else if (url) {
        this.setUrl(url, onload);
      }
      top = top ? parse(top, root_h) : 0;
      bottom = bottom ? parse(bottom, root_h) : 0;
      left = left ? parse(left, root_w) : 0;
      right = right ? parse(right, root_w) : 0;
      const viewport_w = root_w - left - right;
      const viewport_h = root_h - top - bottom;
      maxwidth = maxwidth ? parse(maxwidth, viewport_w) : viewport_w;
      maxheight = maxheight ? parse(maxheight, viewport_h) : viewport_h;
      minwidth = minwidth ? parse(minwidth, maxwidth) : 150;
      minheight = minheight ? parse(minheight, maxheight) : this.header;
      if (autosize) {
        (root || body).appendChild(this.body);
        width = Math.max(
          Math.min(this.body.clientWidth + border * 2 + 1, maxwidth),
          minwidth
        );
        height = Math.max(
          Math.min(this.body.clientHeight + this.header + border + 1, maxheight),
          minheight
        );
        this.dom.appendChild(this.body);
      } else {
        width = width ? parse(width, maxwidth) : Math.max(maxwidth / 2, minwidth) | 0;
        height = height ? parse(height, maxheight) : Math.max(maxheight / 2, minheight) | 0;
      }
      x = x ? parse(x, viewport_w, width) : left;
      y = y ? parse(y, viewport_h, height) : top;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.minwidth = minwidth;
      this.minheight = minheight;
      this.maxwidth = maxwidth;
      this.maxheight = maxheight;
      this.top = top;
      this.right = right;
      this.bottom = bottom;
      this.left = left;
      this.index = index;
      this.min = false;
      this.max = false;
      this.full = false;
      this.hidden = false;
      this.focused = false;
      this.onclose = onclose;
      this.onfocus = onfocus;
      this.onblur = onblur;
      this.onmove = onmove;
      this.onresize = onresize;
      this.onfullscreen = onfullscreen;
      this.onmaximize = onmaximize;
      this.onminimize = onminimize;
      this.onrestore = onrestore;
      this.onhide = onhide;
      this.onshow = onshow;
      if (max2) {
        this.maximize();
      } else if (min2) {
        this.minimize();
      } else {
        this.resize().move();
      }
      if (hidden) {
        this.hide();
      } else {
        this.focus();
        if (index || index === 0) {
          this.index = index;
          if (index > index_counter)
            index_counter = index;
        }
      }
      setStyle(this.shadowdom ? this.shadowdom : this.dom, "z-index", index);
      register(this);
      if (shadowel) {
        const se = document.createElement(shadowel);
        se.style.position = "absolute";
        const style = document.createElement("style");
        style.textContent = winboxcss;
        se.appendChild(style);
        if (cssurl) {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.type = "text/css";
          link.href = cssurl;
          link.itemprop = "url";
          se.appendChild(link);
        }
        se.appendChild(this.dom);
        se.attachShadow({ mode: "open" }).innerHTML = "<slot></slot>";
        this.shadowdom = se;
        (root || body).appendChild(se);
      } else {
        (root || body).appendChild(this.dom);
      }
      (oncreate = params["oncreate"]) && oncreate.call(this, params);
    }
    static new(params) {
      return new WinBox(params);
    }
    mount(src) {
      this.unmount();
      src._backstore || (src._backstore = src.parentNode);
      this.body.textContent = "";
      this.body.appendChild(src);
      return this;
    }
    unmount(dest) {
      const node = this.body.firstChild;
      if (node) {
        const root = dest || node._backstore;
        root && root.appendChild(node);
        node._backstore = dest;
      }
      return this;
    }
    setTitle(title) {
      const node = getByClass(this.dom, "wb-title");
      setText(node, this.title = title);
      return this;
    }
    setIcon(src) {
      const img = getByClass(this.dom, "wb-icon");
      setStyle(img, "background-image", "url(" + src + ")");
      setStyle(img, "display", "inline-block");
      return this;
    }
    setBackground(background) {
      setStyle(this.dom, "background", background);
      return this;
    }
    setUrl(url, onload) {
      const node = this.body.firstChild;
      if (node && node.tagName.toLowerCase() === "iframe") {
        node.src = url;
      } else {
        const name = this.framename ?? "";
        this.body.innerHTML = `<iframe name="${name}" src="${url}"></iframe>`;
        onload && (this.body.firstChild.onload = onload);
      }
      return this;
    }
    focus(state) {
      if (state === false) {
        return this.blur();
      }
      if (last_focus !== this && this.dom) {
        last_focus && last_focus.blur();
        setStyle(
          this.shadowdom ? this.shadowdom : this.dom,
          "z-index",
          ++index_counter
        );
        this.index = index_counter;
        this.addClass("focus");
        last_focus = this;
        this.focused = true;
        this.onfocus && this.onfocus();
      }
      return this;
    }
    blur(state) {
      if (state === false) {
        return this.focus();
      }
      if (last_focus === this) {
        this.removeClass("focus");
        this.focused = false;
        this.onblur && this.onblur();
        last_focus = null;
      }
      return this;
    }
    hide(state) {
      if (state === false) {
        return this.show();
      }
      if (!this.hidden) {
        this.onhide && this.onhide();
        this.hidden = true;
        return this.addClass("hide");
      }
    }
    show(state) {
      if (state === false) {
        return this.hide();
      }
      if (this.hidden) {
        this.onshow && this.onshow();
        this.hidden = false;
        return this.removeClass("hide");
      }
    }
    minimize(state) {
      if (state === false) {
        return this.restore();
      }
      if (is_fullscreen) {
        cancel_fullscreen();
      }
      if (this.max) {
        this.removeClass("max");
        this.max = false;
      }
      if (!this.min) {
        stack_min.push(this);
        update_min_stack();
        this.dom.title = this.title;
        this.addClass("min");
        this.min = true;
        this.onminimize && this.onminimize();
      }
      return this;
    }
    restore() {
      if (is_fullscreen) {
        cancel_fullscreen();
      }
      if (this.min) {
        remove_min_stack(this);
        this.resize().move();
        this.onrestore && this.onrestore();
      }
      if (this.max) {
        this.max = false;
        this.removeClass("max").resize().move();
        this.onrestore && this.onrestore();
      }
      return this;
    }
    maximize(state) {
      if (state === false) {
        return this.restore();
      }
      if (is_fullscreen) {
        cancel_fullscreen();
      }
      if (this.min) {
        remove_min_stack(this);
      }
      if (!this.max) {
        this.addClass("max").resize(
          root_w - this.left - this.right,
          root_h - this.top - this.bottom,
          true
        ).move(this.left, this.top, true);
        this.max = true;
        this.onmaximize && this.onmaximize();
      }
      return this;
    }
    fullscreen(state) {
      if (this.min) {
        remove_min_stack(this);
        this.resize().move();
      }
      if (!is_fullscreen || !cancel_fullscreen()) {
        this.body[prefix_request]();
        is_fullscreen = this;
        this.full = true;
        this.onfullscreen && this.onfullscreen();
      } else if (state === false) {
        return this.restore();
      }
      return this;
    }
    close(force) {
      if (this.onclose && this.onclose(force)) {
        return true;
      }
      if (this.min) {
        remove_min_stack(this);
      }
      this.unmount();
      this.dom.remove();
      this.dom.textContent = "";
      this.dom["winbox"] = null;
      this.body = null;
      this.dom = null;
      if (last_focus === this) {
        last_focus = null;
      }
    }
    move(x, y, _skip_update) {
      if (!x && x !== 0) {
        x = this.x;
        y = this.y;
      } else if (!_skip_update) {
        this.x = x ? x = parse(x, root_w - this.left - this.right, this.width) : 0;
        this.y = y ? y = parse(y, root_h - this.top - this.bottom, this.height) : 0;
      }
      setStyle(this.dom, "left", x + "px");
      setStyle(this.dom, "top", y + "px");
      this.onmove && this.onmove(x, y);
      return this;
    }
    resize(w, h, _skip_update) {
      if (!w && w !== 0) {
        w = this.width;
        h = this.height;
      } else if (!_skip_update) {
        this.width = w ? w = parse(w, this.maxwidth) : 0;
        this.height = h ? h = parse(h, this.maxheight) : 0;
        w = Math.max(w, this.minwidth);
        h = Math.max(h, this.minheight);
      }
      setStyle(this.dom, "width", w + "px");
      setStyle(this.dom, "height", h + "px");
      this.onresize && this.onresize(w, h);
      return this;
    }
    addControl(control) {
      const classname = control["class"];
      const image = control.image;
      const click = control.click;
      const index = control.index;
      const title = control.title;
      const node = document.createElement("span");
      const icons = getByClass(this.dom, "wb-control");
      const self2 = this;
      if (classname)
        node.className = classname;
      if (image)
        setStyle(node, "background-image", "url(" + image + ")");
      if (click)
        node.onclick = function(event) {
          click.call(this, event, self2);
        };
      if (title)
        node.title = title;
      icons.insertBefore(node, icons.childNodes[index || 0]);
      return this;
    }
    removeControl(control) {
      control = getByClass(this.dom, control);
      control && control.remove();
      return this;
    }
    addClass(classname) {
      addClass(this.dom, classname);
      return this;
    }
    removeClass(classname) {
      removeClass(this.dom, classname);
      return this;
    }
    hasClass(classname) {
      return hasClass(this.dom, classname);
    }
    toggleClass(classname) {
      return this.hasClass(classname) ? this.removeClass(classname) : this.addClass(classname);
    }
  };
  function parse(num, base, center) {
    if (typeof num === "string") {
      if (num === "center") {
        num = (base - center) / 2 | 0;
      } else if (num === "right" || num === "bottom") {
        num = base - center;
      } else {
        const value = parseFloat(num);
        const unit = "" + value !== num && num.substring(("" + value).length);
        if (unit === "%") {
          num = base / 100 * value | 0;
        } else {
          num = value;
        }
      }
    }
    return num;
  }
  function setup() {
    body = document.body;
    body[prefix_request = "requestFullscreen"] || body[prefix_request = "msRequestFullscreen"] || body[prefix_request = "webkitRequestFullscreen"] || body[prefix_request = "mozRequestFullscreen"] || (prefix_request = "");
    prefix_exit = prefix_request && prefix_request.replace("request", "exit").replace("mozRequest", "mozCancel").replace("Request", "Exit");
    addListener(window, "resize", function() {
      init2();
      update_min_stack();
    });
    init2();
  }
  function register(self2) {
    addWindowListener(self2, "drag");
    addWindowListener(self2, "n");
    addWindowListener(self2, "s");
    addWindowListener(self2, "w");
    addWindowListener(self2, "e");
    addWindowListener(self2, "nw");
    addWindowListener(self2, "ne");
    addWindowListener(self2, "se");
    addWindowListener(self2, "sw");
    addListener(getByClass(self2.dom, "wb-min"), "click", function(event) {
      preventEvent(event);
      self2.min ? self2.focus().restore() : self2.blur().minimize();
    });
    addListener(getByClass(self2.dom, "wb-max"), "click", function(event) {
      self2.max ? self2.restore() : self2.maximize();
    });
    if (prefix_request) {
      addListener(getByClass(self2.dom, "wb-full"), "click", function(event) {
        self2.fullscreen();
      });
    } else {
      self2.addClass("no-full");
    }
    addListener(getByClass(self2.dom, "wb-close"), "click", function(event) {
      preventEvent(event);
      self2.close() || (self2 = null);
    });
    addListener(self2.dom, "click", function(event) {
      self2.focus();
    });
  }
  function remove_min_stack(self2) {
    stack_min.splice(stack_min.indexOf(self2), 1);
    update_min_stack();
    self2.removeClass("min");
    self2.min = false;
    self2.dom.title = "";
  }
  function update_min_stack() {
    const length = stack_min.length;
    const splitscreen_index = {};
    const splitscreen_length = {};
    for (let i = 0, self2, key; i < length; i++) {
      self2 = stack_min[i];
      key = (self2.left || self2.right) + ":" + (self2.top || self2.bottom);
      if (splitscreen_length[key]) {
        splitscreen_length[key]++;
      } else {
        splitscreen_index[key] = 0;
        splitscreen_length[key] = 1;
      }
    }
    for (let i = 0, self2, key, width; i < length; i++) {
      self2 = stack_min[i];
      key = (self2.left || self2.right) + ":" + (self2.top || self2.bottom);
      width = Math.min(
        (root_w - self2.left - self2.right) / splitscreen_length[key],
        250
      );
      self2.resize(width + 1 | 0, self2.header, true).move(
        self2.left + splitscreen_index[key] * width | 0,
        root_h - self2.bottom - self2.header,
        true
      );
      splitscreen_index[key]++;
    }
  }
  function addWindowListener(self2, dir) {
    const node = getByClass(self2.dom, "wb-" + dir);
    if (!node)
      return;
    let touch, x, y;
    let raf_timer, raf_move, raf_resize;
    let dblclick_timer = 0;
    addListener(node, "mousedown", mousedown);
    addListener(node, "touchstart", mousedown, eventOptions);
    function loop() {
      raf_timer = requestAnimationFrame(loop);
      if (raf_resize) {
        self2.resize();
        raf_resize = false;
      }
      if (raf_move) {
        self2.move();
        raf_move = false;
      }
    }
    function mousedown(event) {
      preventEvent(event);
      self2.focus();
      if (dir === "drag") {
        if (self2.min) {
          self2.restore();
          return;
        }
        const now = Date.now();
        const diff = now - dblclick_timer;
        dblclick_timer = now;
        if (diff < 300 && !self2.dom.classList.contains("no-max")) {
          self2.max ? self2.restore() : self2.maximize();
          return;
        }
      }
      if (!self2.max && !self2.min) {
        addClass(body, "wb-lock");
        use_raf && loop();
        if ((touch = event.touches) && (touch = touch[0])) {
          event = touch;
          addListener(window, "touchmove", handler_mousemove, eventOptions);
          addListener(window, "touchend", handler_mouseup, eventOptions);
        } else {
          addListener(window, "mousemove", handler_mousemove);
          addListener(window, "mouseup", handler_mouseup);
        }
        x = event.pageX;
        y = event.pageY;
      }
    }
    function handler_mousemove(event) {
      preventEvent(event);
      if (touch) {
        event = event.touches[0];
      }
      const pageX = event.pageX;
      const pageY = event.pageY;
      const offsetX = pageX - x;
      const offsetY = pageY - y;
      const old_w = self2.width;
      const old_h = self2.height;
      const old_x = self2.x;
      const old_y = self2.y;
      let resize_w, resize_h, move_x, move_y;
      if (dir === "drag") {
        self2.x += offsetX;
        self2.y += offsetY;
        move_x = move_y = 1;
      } else {
        if (dir === "e" || dir === "se" || dir === "ne") {
          self2.width += offsetX;
          resize_w = 1;
        } else if (dir === "w" || dir === "sw" || dir === "nw") {
          self2.x += offsetX;
          self2.width -= offsetX;
          resize_w = 1;
          move_x = 1;
        }
        if (dir === "s" || dir === "se" || dir === "sw") {
          self2.height += offsetY;
          resize_h = 1;
        } else if (dir === "n" || dir === "ne" || dir === "nw") {
          self2.y += offsetY;
          self2.height -= offsetY;
          resize_h = 1;
          move_y = 1;
        }
      }
      if (resize_w) {
        self2.width = Math.max(
          Math.min(self2.width, self2.maxwidth, root_w - self2.x - self2.right),
          self2.minwidth
        );
        resize_w = self2.width !== old_w;
      }
      if (resize_h) {
        self2.height = Math.max(
          Math.min(self2.height, self2.maxheight, root_h - self2.y - self2.bottom),
          self2.minheight
        );
        resize_h = self2.height !== old_h;
      }
      if (resize_w || resize_h) {
        use_raf ? raf_resize = true : self2.resize();
      }
      if (move_x) {
        self2.x = Math.max(
          Math.min(self2.x, root_w - self2.width - self2.right),
          self2.left
        );
        move_x = self2.x !== old_x;
      }
      if (move_y) {
        self2.y = Math.max(
          Math.min(self2.y, root_h - self2.height - self2.bottom),
          self2.top
        );
        move_y = self2.y !== old_y;
      }
      if (move_x || move_y) {
        use_raf ? raf_move = true : self2.move();
      }
      if (resize_w || move_x) {
        x = pageX;
      }
      if (resize_h || move_y) {
        y = pageY;
      }
    }
    function handler_mouseup(event) {
      preventEvent(event);
      removeClass(body, "wb-lock");
      use_raf && cancelAnimationFrame(raf_timer);
      if (touch) {
        removeListener(window, "touchmove", handler_mousemove, eventOptions);
        removeListener(window, "touchend", handler_mouseup, eventOptions);
      } else {
        removeListener(window, "mousemove", handler_mousemove);
        removeListener(window, "mouseup", handler_mouseup);
      }
    }
  }
  function init2() {
    const doc = document.documentElement;
    root_w = doc.clientWidth;
    root_h = doc.clientHeight;
  }
  function has_fullscreen() {
    return document["fullscreen"] || document["fullscreenElement"] || document["webkitFullscreenElement"] || document["mozFullScreenElement"];
  }
  function cancel_fullscreen() {
    is_fullscreen.full = false;
    if (has_fullscreen()) {
      document[prefix_exit]();
      return true;
    }
  }

  // node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
  var min = Math.min;
  var max = Math.max;
  var round = Math.round;
  var createCoords = (v) => ({
    x: v,
    y: v
  });
  var oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  var oppositeAlignmentMap = {
    start: "end",
    end: "start"
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split("-")[0];
  }
  function getAlignment(placement) {
    return placement.split("-")[1];
  }
  function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
  }
  function getSideAxis(placement) {
    return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
  }
  function getSideList(side, isStart, rtl) {
    const lr = ["left", "right"];
    const rl = ["right", "left"];
    const tb = ["top", "bottom"];
    const bt = ["bottom", "top"];
    switch (side) {
      case "top":
      case "bottom":
        if (rtl)
          return isStart ? rl : lr;
        return isStart ? lr : rl;
      case "left":
      case "right":
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
      list = list.map((side) => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    return {
      ...rect,
      top: rect.y,
      left: rect.x,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    };
  }

  // node_modules/@floating-ui/core/dist/floating-ui.core.mjs
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === "y";
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case "top":
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case "bottom":
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case "right":
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case "left":
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case "start":
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case "end":
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }
  var computePosition = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
    let rects = await platform2.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x,
      y
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i = 0; i < validMiddleware.length; i++) {
      const {
        name,
        fn
      } = validMiddleware[i];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn({
        x,
        y,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform: platform2,
        elements: {
          reference,
          floating
        }
      });
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === "object") {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform2.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x,
            y
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i = -1;
        continue;
      }
    }
    return {
      x,
      y,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
      element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      ...rects.floating,
      x,
      y
    } : rects.reference;
    const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
    const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }
  var flip = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "flip",
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements2 = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides2 = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements2[nextIndex];
          if (nextPlacement) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$map$so;
                const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };
  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null,
      ...rawValue
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }
  var offset = function(options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: "offset",
      options,
      async fn(state) {
        const {
          x,
          y
        } = state;
        const diffCoords = await convertValueToCoords(state, options);
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: diffCoords
        };
      }
    };
  };
  var shift = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "shift",
      options,
      async fn(state) {
        const {
          x,
          y,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x2,
                y: y2
              } = _ref;
              return {
                x: x2,
                y: y2
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x,
          y
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min2 = mainAxisCoord + overflow[minSide];
          const max2 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min2, mainAxisCoord, max2);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min2 = crossAxisCoord + overflow[minSide];
          const max2 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min2, crossAxisCoord, max2);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
          }
        };
      }
    };
  };

  // node_modules/@floating-ui/utils/dom/dist/floating-ui.utils.dom.mjs
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || "").toLowerCase();
    }
    return "#document";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement2(value) {
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
  }
  function isTableElement(element) {
    return ["table", "td", "th"].includes(getNodeName(element));
  }
  function isContainingBlock(element) {
    const webkit = isWebKit();
    const css = getComputedStyle(element);
    return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else {
        currentNode = getParentNode(currentNode);
      }
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === "undefined" || !CSS.supports)
      return false;
    return CSS.supports("-webkit-backdrop-filter", "none");
  }
  function isLastTraversableNode(node) {
    return ["html", "body", "#document"].includes(getNodeName(node));
  }
  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement2(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === "html") {
      return node;
    }
    const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }

  // node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
  function getCssDimensions(element) {
    const css = getComputedStyle(element);
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement2(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;
    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      y
    };
  }
  var noOffsets = /* @__PURE__ */ createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement2(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement2(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentIFrame = win.frameElement;
      while (currentIFrame && offsetParent && offsetWin !== win) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentIFrame = getWindow(currentIFrame).frameElement;
      }
    }
    return rectToClientRect({
      width,
      height,
      x,
      y
    });
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    if (offsetParent === documentElement) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
  }
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body2 = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body2.scrollWidth, body2.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body2.scrollHeight, body2.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (getComputedStyle(body2).direction === "rtl") {
      x += max(html.clientWidth, body2.clientWidth) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
      width,
      height,
      x,
      y
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement2(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        ...clippingAncestor,
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement2(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
  }
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter((el) => isElement2(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while (isElement2(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === "fixed") {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }
  function getDimensions(element) {
    return getCssDimensions(element);
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    return element.offsetParent;
  }
  function getOffsetParent(element, polyfill) {
    const window2 = getWindow(element);
    if (!isHTMLElement(element)) {
      return window2;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }
  var getElementRects = async function(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...await getDimensionsFn(floating)
      }
    };
  };
  function isRTL(element) {
    return getComputedStyle(element).direction === "rtl";
  }
  var platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement: isElement2,
    isRTL
  };
  var computePosition2 = (reference, floating, options) => {
    const cache = /* @__PURE__ */ new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };

  // node_modules/@webcomponents/custom-elements/custom-elements.min.js
  (function() {
    "use strict";
    var n = window.Document.prototype.createElement, p = window.Document.prototype.createElementNS, aa = window.Document.prototype.importNode, ba = window.Document.prototype.prepend, ca = window.Document.prototype.append, da = window.DocumentFragment.prototype.prepend, ea = window.DocumentFragment.prototype.append, q = window.Node.prototype.cloneNode, r = window.Node.prototype.appendChild, t = window.Node.prototype.insertBefore, u = window.Node.prototype.removeChild, v = window.Node.prototype.replaceChild, w = Object.getOwnPropertyDescriptor(
      window.Node.prototype,
      "textContent"
    ), y = window.Element.prototype.attachShadow, z = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), A = window.Element.prototype.getAttribute, B = window.Element.prototype.setAttribute, C = window.Element.prototype.removeAttribute, D = window.Element.prototype.toggleAttribute, E = window.Element.prototype.getAttributeNS, F = window.Element.prototype.setAttributeNS, G = window.Element.prototype.removeAttributeNS, H = window.Element.prototype.insertAdjacentElement, fa = window.Element.prototype.insertAdjacentHTML, ha = window.Element.prototype.prepend, ia = window.Element.prototype.append, ja = window.Element.prototype.before, ka = window.Element.prototype.after, la = window.Element.prototype.replaceWith, ma = window.Element.prototype.remove, na = window.HTMLElement, I = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), oa = window.HTMLElement.prototype.insertAdjacentElement, pa = window.HTMLElement.prototype.insertAdjacentHTML;
    var qa = /* @__PURE__ */ new Set();
    "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(a) {
      return qa.add(a);
    });
    function ra(a) {
      var b = qa.has(a);
      a = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);
      return !b && a;
    }
    var sa = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
    function J(a) {
      var b = a.isConnected;
      if (void 0 !== b)
        return b;
      if (sa(a))
        return true;
      for (; a && !(a.__CE_isImportDocument || a instanceof Document); )
        a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
      return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
    }
    function K(a) {
      var b = a.children;
      if (b)
        return Array.prototype.slice.call(b);
      b = [];
      for (a = a.firstChild; a; a = a.nextSibling)
        a.nodeType === Node.ELEMENT_NODE && b.push(a);
      return b;
    }
    function L(a, b) {
      for (; b && b !== a && !b.nextSibling; )
        b = b.parentNode;
      return b && b !== a ? b.nextSibling : null;
    }
    function M(a, b, d) {
      for (var f = a; f; ) {
        if (f.nodeType === Node.ELEMENT_NODE) {
          var c = f;
          b(c);
          var e = c.localName;
          if ("link" === e && "import" === c.getAttribute("rel")) {
            f = c.import;
            void 0 === d && (d = /* @__PURE__ */ new Set());
            if (f instanceof Node && !d.has(f))
              for (d.add(f), f = f.firstChild; f; f = f.nextSibling)
                M(f, b, d);
            f = L(a, c);
            continue;
          } else if ("template" === e) {
            f = L(a, c);
            continue;
          }
          if (c = c.__CE_shadowRoot)
            for (c = c.firstChild; c; c = c.nextSibling)
              M(c, b, d);
        }
        f = f.firstChild ? f.firstChild : L(a, f);
      }
    }
    ;
    function N() {
      var a = !(null === O || void 0 === O || !O.noDocumentConstructionObserver), b = !(null === O || void 0 === O || !O.shadyDomFastWalk);
      this.m = [];
      this.g = [];
      this.j = false;
      this.shadyDomFastWalk = b;
      this.I = !a;
    }
    function P(a, b, d, f) {
      var c = window.ShadyDOM;
      if (a.shadyDomFastWalk && c && c.inUse) {
        if (b.nodeType === Node.ELEMENT_NODE && d(b), b.querySelectorAll)
          for (a = c.nativeMethods.querySelectorAll.call(b, "*"), b = 0; b < a.length; b++)
            d(a[b]);
      } else
        M(b, d, f);
    }
    function ta(a, b) {
      a.j = true;
      a.m.push(b);
    }
    function ua(a, b) {
      a.j = true;
      a.g.push(b);
    }
    function Q(a, b) {
      a.j && P(a, b, function(d) {
        return R(a, d);
      });
    }
    function R(a, b) {
      if (a.j && !b.__CE_patched) {
        b.__CE_patched = true;
        for (var d = 0; d < a.m.length; d++)
          a.m[d](b);
        for (d = 0; d < a.g.length; d++)
          a.g[d](b);
      }
    }
    function S(a, b) {
      var d = [];
      P(a, b, function(c) {
        return d.push(c);
      });
      for (b = 0; b < d.length; b++) {
        var f = d[b];
        1 === f.__CE_state ? a.connectedCallback(f) : T(a, f);
      }
    }
    function U(a, b) {
      var d = [];
      P(a, b, function(c) {
        return d.push(c);
      });
      for (b = 0; b < d.length; b++) {
        var f = d[b];
        1 === f.__CE_state && a.disconnectedCallback(f);
      }
    }
    function V(a, b, d) {
      d = void 0 === d ? {} : d;
      var f = d.J, c = d.upgrade || function(g) {
        return T(a, g);
      }, e = [];
      P(a, b, function(g) {
        a.j && R(a, g);
        if ("link" === g.localName && "import" === g.getAttribute("rel")) {
          var h = g.import;
          h instanceof Node && (h.__CE_isImportDocument = true, h.__CE_registry = document.__CE_registry);
          h && "complete" === h.readyState ? h.__CE_documentLoadHandled = true : g.addEventListener("load", function() {
            var k = g.import;
            if (!k.__CE_documentLoadHandled) {
              k.__CE_documentLoadHandled = true;
              var l = /* @__PURE__ */ new Set();
              f && (f.forEach(function(m) {
                return l.add(m);
              }), l.delete(k));
              V(a, k, { J: l, upgrade: c });
            }
          });
        } else
          e.push(g);
      }, f);
      for (b = 0; b < e.length; b++)
        c(e[b]);
    }
    function T(a, b) {
      try {
        var d = b.ownerDocument, f = d.__CE_registry;
        var c = f && (d.defaultView || d.__CE_isImportDocument) ? W(f, b.localName) : void 0;
        if (c && void 0 === b.__CE_state) {
          c.constructionStack.push(b);
          try {
            try {
              if (new c.constructorFunction() !== b)
                throw Error("The custom element constructor did not produce the element being upgraded.");
            } finally {
              c.constructionStack.pop();
            }
          } catch (k) {
            throw b.__CE_state = 2, k;
          }
          b.__CE_state = 1;
          b.__CE_definition = c;
          if (c.attributeChangedCallback && b.hasAttributes()) {
            var e = c.observedAttributes;
            for (c = 0; c < e.length; c++) {
              var g = e[c], h = b.getAttribute(g);
              null !== h && a.attributeChangedCallback(b, g, null, h, null);
            }
          }
          J(b) && a.connectedCallback(b);
        }
      } catch (k) {
        X(k);
      }
    }
    N.prototype.connectedCallback = function(a) {
      var b = a.__CE_definition;
      if (b.connectedCallback)
        try {
          b.connectedCallback.call(a);
        } catch (d) {
          X(d);
        }
    };
    N.prototype.disconnectedCallback = function(a) {
      var b = a.__CE_definition;
      if (b.disconnectedCallback)
        try {
          b.disconnectedCallback.call(a);
        } catch (d) {
          X(d);
        }
    };
    N.prototype.attributeChangedCallback = function(a, b, d, f, c) {
      var e = a.__CE_definition;
      if (e.attributeChangedCallback && -1 < e.observedAttributes.indexOf(b))
        try {
          e.attributeChangedCallback.call(a, b, d, f, c);
        } catch (g) {
          X(g);
        }
    };
    function va(a, b, d, f) {
      var c = b.__CE_registry;
      if (c && (null === f || "http://www.w3.org/1999/xhtml" === f) && (c = W(c, d)))
        try {
          var e = new c.constructorFunction();
          if (void 0 === e.__CE_state || void 0 === e.__CE_definition)
            throw Error("Failed to construct '" + d + "': The returned value was not constructed with the HTMLElement constructor.");
          if ("http://www.w3.org/1999/xhtml" !== e.namespaceURI)
            throw Error("Failed to construct '" + d + "': The constructed element's namespace must be the HTML namespace.");
          if (e.hasAttributes())
            throw Error("Failed to construct '" + d + "': The constructed element must not have any attributes.");
          if (null !== e.firstChild)
            throw Error("Failed to construct '" + d + "': The constructed element must not have any children.");
          if (null !== e.parentNode)
            throw Error("Failed to construct '" + d + "': The constructed element must not have a parent node.");
          if (e.ownerDocument !== b)
            throw Error("Failed to construct '" + d + "': The constructed element's owner document is incorrect.");
          if (e.localName !== d)
            throw Error("Failed to construct '" + d + "': The constructed element's local name is incorrect.");
          return e;
        } catch (g) {
          return X(g), b = null === f ? n.call(b, d) : p.call(b, f, d), Object.setPrototypeOf(b, HTMLUnknownElement.prototype), b.__CE_state = 2, b.__CE_definition = void 0, R(a, b), b;
        }
      b = null === f ? n.call(b, d) : p.call(b, f, d);
      R(a, b);
      return b;
    }
    function X(a) {
      var b = "", d = "", f = 0, c = 0;
      a instanceof Error ? (b = a.message, d = a.sourceURL || a.fileName || "", f = a.line || a.lineNumber || 0, c = a.column || a.columnNumber || 0) : b = "Uncaught " + String(a);
      var e = void 0;
      void 0 === ErrorEvent.prototype.initErrorEvent ? e = new ErrorEvent("error", { cancelable: true, message: b, filename: d, lineno: f, colno: c, error: a }) : (e = document.createEvent("ErrorEvent"), e.initErrorEvent("error", false, true, b, d, f), e.preventDefault = function() {
        Object.defineProperty(this, "defaultPrevented", { configurable: true, get: function() {
          return true;
        } });
      });
      void 0 === e.error && Object.defineProperty(e, "error", { configurable: true, enumerable: true, get: function() {
        return a;
      } });
      window.dispatchEvent(e);
      e.defaultPrevented || console.error(a);
    }
    ;
    function wa() {
      var a = this;
      this.g = void 0;
      this.F = new Promise(function(b) {
        a.l = b;
      });
    }
    wa.prototype.resolve = function(a) {
      if (this.g)
        throw Error("Already resolved.");
      this.g = a;
      this.l(a);
    };
    function xa(a) {
      var b = document;
      this.l = void 0;
      this.h = a;
      this.g = b;
      V(this.h, this.g);
      "loading" === this.g.readyState && (this.l = new MutationObserver(this.G.bind(this)), this.l.observe(this.g, { childList: true, subtree: true }));
    }
    function ya(a) {
      a.l && a.l.disconnect();
    }
    xa.prototype.G = function(a) {
      var b = this.g.readyState;
      "interactive" !== b && "complete" !== b || ya(this);
      for (b = 0; b < a.length; b++)
        for (var d = a[b].addedNodes, f = 0; f < d.length; f++)
          V(this.h, d[f]);
    };
    function Y(a) {
      this.s = /* @__PURE__ */ new Map();
      this.u = /* @__PURE__ */ new Map();
      this.C = /* @__PURE__ */ new Map();
      this.A = false;
      this.B = /* @__PURE__ */ new Map();
      this.o = function(b) {
        return b();
      };
      this.i = false;
      this.v = [];
      this.h = a;
      this.D = a.I ? new xa(a) : void 0;
    }
    Y.prototype.H = function(a, b) {
      var d = this;
      if (!(b instanceof Function))
        throw new TypeError("Custom element constructor getters must be functions.");
      za(this, a);
      this.s.set(a, b);
      this.v.push(a);
      this.i || (this.i = true, this.o(function() {
        return Aa(d);
      }));
    };
    Y.prototype.define = function(a, b) {
      var d = this;
      if (!(b instanceof Function))
        throw new TypeError("Custom element constructors must be functions.");
      za(this, a);
      Ba(this, a, b);
      this.v.push(a);
      this.i || (this.i = true, this.o(function() {
        return Aa(d);
      }));
    };
    function za(a, b) {
      if (!ra(b))
        throw new SyntaxError("The element name '" + b + "' is not valid.");
      if (W(a, b))
        throw Error("A custom element with name '" + (b + "' has already been defined."));
      if (a.A)
        throw Error("A custom element is already being defined.");
    }
    function Ba(a, b, d) {
      a.A = true;
      var f;
      try {
        var c = d.prototype;
        if (!(c instanceof Object))
          throw new TypeError("The custom element constructor's prototype is not an object.");
        var e = function(m) {
          var x = c[m];
          if (void 0 !== x && !(x instanceof Function))
            throw Error("The '" + m + "' callback must be a function.");
          return x;
        };
        var g = e("connectedCallback");
        var h = e("disconnectedCallback");
        var k = e("adoptedCallback");
        var l = (f = e("attributeChangedCallback")) && d.observedAttributes || [];
      } catch (m) {
        throw m;
      } finally {
        a.A = false;
      }
      d = {
        localName: b,
        constructorFunction: d,
        connectedCallback: g,
        disconnectedCallback: h,
        adoptedCallback: k,
        attributeChangedCallback: f,
        observedAttributes: l,
        constructionStack: []
      };
      a.u.set(b, d);
      a.C.set(d.constructorFunction, d);
      return d;
    }
    Y.prototype.upgrade = function(a) {
      V(this.h, a);
    };
    function Aa(a) {
      if (false !== a.i) {
        a.i = false;
        for (var b = [], d = a.v, f = /* @__PURE__ */ new Map(), c = 0; c < d.length; c++)
          f.set(d[c], []);
        V(a.h, document, { upgrade: function(k) {
          if (void 0 === k.__CE_state) {
            var l = k.localName, m = f.get(l);
            m ? m.push(k) : a.u.has(l) && b.push(k);
          }
        } });
        for (c = 0; c < b.length; c++)
          T(a.h, b[c]);
        for (c = 0; c < d.length; c++) {
          for (var e = d[c], g = f.get(e), h = 0; h < g.length; h++)
            T(a.h, g[h]);
          (e = a.B.get(e)) && e.resolve(void 0);
        }
        d.length = 0;
      }
    }
    Y.prototype.get = function(a) {
      if (a = W(this, a))
        return a.constructorFunction;
    };
    Y.prototype.whenDefined = function(a) {
      if (!ra(a))
        return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
      var b = this.B.get(a);
      if (b)
        return b.F;
      b = new wa();
      this.B.set(a, b);
      var d = this.u.has(a) || this.s.has(a);
      a = -1 === this.v.indexOf(a);
      d && a && b.resolve(void 0);
      return b.F;
    };
    Y.prototype.polyfillWrapFlushCallback = function(a) {
      this.D && ya(this.D);
      var b = this.o;
      this.o = function(d) {
        return a(function() {
          return b(d);
        });
      };
    };
    function W(a, b) {
      var d = a.u.get(b);
      if (d)
        return d;
      if (d = a.s.get(b)) {
        a.s.delete(b);
        try {
          return Ba(a, b, d());
        } catch (f) {
          X(f);
        }
      }
    }
    Y.prototype.define = Y.prototype.define;
    Y.prototype.upgrade = Y.prototype.upgrade;
    Y.prototype.get = Y.prototype.get;
    Y.prototype.whenDefined = Y.prototype.whenDefined;
    Y.prototype.polyfillDefineLazy = Y.prototype.H;
    Y.prototype.polyfillWrapFlushCallback = Y.prototype.polyfillWrapFlushCallback;
    function Z(a, b, d) {
      function f(c) {
        return function(e) {
          for (var g = [], h = 0; h < arguments.length; ++h)
            g[h] = arguments[h];
          h = [];
          for (var k = [], l = 0; l < g.length; l++) {
            var m = g[l];
            m instanceof Element && J(m) && k.push(m);
            if (m instanceof DocumentFragment)
              for (m = m.firstChild; m; m = m.nextSibling)
                h.push(m);
            else
              h.push(m);
          }
          c.apply(this, g);
          for (g = 0; g < k.length; g++)
            U(a, k[g]);
          if (J(this))
            for (g = 0; g < h.length; g++)
              k = h[g], k instanceof Element && S(a, k);
        };
      }
      void 0 !== d.prepend && (b.prepend = f(d.prepend));
      void 0 !== d.append && (b.append = f(d.append));
    }
    ;
    function Ca(a) {
      Document.prototype.createElement = function(b) {
        return va(a, this, b, null);
      };
      Document.prototype.importNode = function(b, d) {
        b = aa.call(this, b, !!d);
        this.__CE_registry ? V(a, b) : Q(a, b);
        return b;
      };
      Document.prototype.createElementNS = function(b, d) {
        return va(a, this, d, b);
      };
      Z(a, Document.prototype, { prepend: ba, append: ca });
    }
    ;
    function Da(a) {
      function b(f) {
        return function(c) {
          for (var e = [], g = 0; g < arguments.length; ++g)
            e[g] = arguments[g];
          g = [];
          for (var h = [], k = 0; k < e.length; k++) {
            var l = e[k];
            l instanceof Element && J(l) && h.push(l);
            if (l instanceof DocumentFragment)
              for (l = l.firstChild; l; l = l.nextSibling)
                g.push(l);
            else
              g.push(l);
          }
          f.apply(this, e);
          for (e = 0; e < h.length; e++)
            U(a, h[e]);
          if (J(this))
            for (e = 0; e < g.length; e++)
              h = g[e], h instanceof Element && S(a, h);
        };
      }
      var d = Element.prototype;
      void 0 !== ja && (d.before = b(ja));
      void 0 !== ka && (d.after = b(ka));
      void 0 !== la && (d.replaceWith = function(f) {
        for (var c = [], e = 0; e < arguments.length; ++e)
          c[e] = arguments[e];
        e = [];
        for (var g = [], h = 0; h < c.length; h++) {
          var k = c[h];
          k instanceof Element && J(k) && g.push(k);
          if (k instanceof DocumentFragment)
            for (k = k.firstChild; k; k = k.nextSibling)
              e.push(k);
          else
            e.push(k);
        }
        h = J(this);
        la.apply(this, c);
        for (c = 0; c < g.length; c++)
          U(a, g[c]);
        if (h)
          for (U(a, this), c = 0; c < e.length; c++)
            g = e[c], g instanceof Element && S(a, g);
      });
      void 0 !== ma && (d.remove = function() {
        var f = J(this);
        ma.call(this);
        f && U(a, this);
      });
    }
    ;
    function Ea(a) {
      function b(c, e) {
        Object.defineProperty(c, "innerHTML", { enumerable: e.enumerable, configurable: true, get: e.get, set: function(g) {
          var h = this, k = void 0;
          J(this) && (k = [], P(a, this, function(x) {
            x !== h && k.push(x);
          }));
          e.set.call(this, g);
          if (k)
            for (var l = 0; l < k.length; l++) {
              var m = k[l];
              1 === m.__CE_state && a.disconnectedCallback(m);
            }
          this.ownerDocument.__CE_registry ? V(a, this) : Q(a, this);
          return g;
        } });
      }
      function d(c, e) {
        c.insertAdjacentElement = function(g, h) {
          var k = J(h);
          g = e.call(this, g, h);
          k && U(a, h);
          J(g) && S(a, h);
          return g;
        };
      }
      function f(c, e) {
        function g(h, k) {
          for (var l = []; h !== k; h = h.nextSibling)
            l.push(h);
          for (k = 0; k < l.length; k++)
            V(a, l[k]);
        }
        c.insertAdjacentHTML = function(h, k) {
          h = h.toLowerCase();
          if ("beforebegin" === h) {
            var l = this.previousSibling;
            e.call(this, h, k);
            g(l || this.parentNode.firstChild, this);
          } else if ("afterbegin" === h)
            l = this.firstChild, e.call(this, h, k), g(this.firstChild, l);
          else if ("beforeend" === h)
            l = this.lastChild, e.call(this, h, k), g(l || this.firstChild, null);
          else if ("afterend" === h)
            l = this.nextSibling, e.call(this, h, k), g(this.nextSibling, l);
          else
            throw new SyntaxError("The value provided (" + String(h) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
        };
      }
      y && (Element.prototype.attachShadow = function(c) {
        c = y.call(this, c);
        if (a.j && !c.__CE_patched) {
          c.__CE_patched = true;
          for (var e = 0; e < a.m.length; e++)
            a.m[e](c);
        }
        return this.__CE_shadowRoot = c;
      });
      z && z.get ? b(Element.prototype, z) : I && I.get ? b(HTMLElement.prototype, I) : ua(a, function(c) {
        b(c, { enumerable: true, configurable: true, get: function() {
          return q.call(this, true).innerHTML;
        }, set: function(e) {
          var g = "template" === this.localName, h = g ? this.content : this, k = p.call(document, this.namespaceURI, this.localName);
          for (k.innerHTML = e; 0 < h.childNodes.length; )
            u.call(h, h.childNodes[0]);
          for (e = g ? k.content : k; 0 < e.childNodes.length; )
            r.call(h, e.childNodes[0]);
        } });
      });
      Element.prototype.setAttribute = function(c, e) {
        if (1 !== this.__CE_state)
          return B.call(this, c, e);
        var g = A.call(this, c);
        B.call(this, c, e);
        e = A.call(this, c);
        a.attributeChangedCallback(this, c, g, e, null);
      };
      Element.prototype.setAttributeNS = function(c, e, g) {
        if (1 !== this.__CE_state)
          return F.call(
            this,
            c,
            e,
            g
          );
        var h = E.call(this, c, e);
        F.call(this, c, e, g);
        g = E.call(this, c, e);
        a.attributeChangedCallback(this, e, h, g, c);
      };
      Element.prototype.removeAttribute = function(c) {
        if (1 !== this.__CE_state)
          return C.call(this, c);
        var e = A.call(this, c);
        C.call(this, c);
        null !== e && a.attributeChangedCallback(this, c, e, null, null);
      };
      D && (Element.prototype.toggleAttribute = function(c, e) {
        if (1 !== this.__CE_state)
          return D.call(this, c, e);
        var g = A.call(this, c), h = null !== g;
        e = D.call(this, c, e);
        h !== e && a.attributeChangedCallback(this, c, g, e ? "" : null, null);
        return e;
      });
      Element.prototype.removeAttributeNS = function(c, e) {
        if (1 !== this.__CE_state)
          return G.call(this, c, e);
        var g = E.call(this, c, e);
        G.call(this, c, e);
        var h = E.call(this, c, e);
        g !== h && a.attributeChangedCallback(this, e, g, h, c);
      };
      oa ? d(HTMLElement.prototype, oa) : H && d(Element.prototype, H);
      pa ? f(HTMLElement.prototype, pa) : fa && f(Element.prototype, fa);
      Z(a, Element.prototype, { prepend: ha, append: ia });
      Da(a);
    }
    ;
    var Fa = {};
    function Ga(a) {
      function b() {
        var d = this.constructor;
        var f = document.__CE_registry.C.get(d);
        if (!f)
          throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
        var c = f.constructionStack;
        if (0 === c.length)
          return c = n.call(document, f.localName), Object.setPrototypeOf(c, d.prototype), c.__CE_state = 1, c.__CE_definition = f, R(a, c), c;
        var e = c.length - 1, g = c[e];
        if (g === Fa)
          throw Error("Failed to construct '" + f.localName + "': This element was already constructed.");
        c[e] = Fa;
        Object.setPrototypeOf(g, d.prototype);
        R(a, g);
        return g;
      }
      b.prototype = na.prototype;
      Object.defineProperty(HTMLElement.prototype, "constructor", { writable: true, configurable: true, enumerable: false, value: b });
      window.HTMLElement = b;
    }
    ;
    function Ha(a) {
      function b(d, f) {
        Object.defineProperty(d, "textContent", { enumerable: f.enumerable, configurable: true, get: f.get, set: function(c) {
          if (this.nodeType === Node.TEXT_NODE)
            f.set.call(this, c);
          else {
            var e = void 0;
            if (this.firstChild) {
              var g = this.childNodes, h = g.length;
              if (0 < h && J(this)) {
                e = Array(h);
                for (var k = 0; k < h; k++)
                  e[k] = g[k];
              }
            }
            f.set.call(this, c);
            if (e)
              for (c = 0; c < e.length; c++)
                U(a, e[c]);
          }
        } });
      }
      Node.prototype.insertBefore = function(d, f) {
        if (d instanceof DocumentFragment) {
          var c = K(d);
          d = t.call(this, d, f);
          if (J(this))
            for (f = 0; f < c.length; f++)
              S(a, c[f]);
          return d;
        }
        c = d instanceof Element && J(d);
        f = t.call(this, d, f);
        c && U(a, d);
        J(this) && S(a, d);
        return f;
      };
      Node.prototype.appendChild = function(d) {
        if (d instanceof DocumentFragment) {
          var f = K(d);
          d = r.call(this, d);
          if (J(this))
            for (var c = 0; c < f.length; c++)
              S(a, f[c]);
          return d;
        }
        f = d instanceof Element && J(d);
        c = r.call(this, d);
        f && U(a, d);
        J(this) && S(a, d);
        return c;
      };
      Node.prototype.cloneNode = function(d) {
        d = q.call(this, !!d);
        this.ownerDocument.__CE_registry ? V(a, d) : Q(a, d);
        return d;
      };
      Node.prototype.removeChild = function(d) {
        var f = d instanceof Element && J(d), c = u.call(this, d);
        f && U(a, d);
        return c;
      };
      Node.prototype.replaceChild = function(d, f) {
        if (d instanceof DocumentFragment) {
          var c = K(d);
          d = v.call(this, d, f);
          if (J(this))
            for (U(a, f), f = 0; f < c.length; f++)
              S(a, c[f]);
          return d;
        }
        c = d instanceof Element && J(d);
        var e = v.call(this, d, f), g = J(this);
        g && U(a, f);
        c && U(a, d);
        g && S(a, d);
        return e;
      };
      w && w.get ? b(Node.prototype, w) : ta(a, function(d) {
        b(d, { enumerable: true, configurable: true, get: function() {
          for (var f = [], c = this.firstChild; c; c = c.nextSibling)
            c.nodeType !== Node.COMMENT_NODE && f.push(c.textContent);
          return f.join("");
        }, set: function(f) {
          for (; this.firstChild; )
            u.call(this, this.firstChild);
          null != f && "" !== f && r.call(this, document.createTextNode(f));
        } });
      });
    }
    ;
    var O = window.customElements;
    function Ia() {
      var a = new N();
      Ga(a);
      Ca(a);
      Z(a, DocumentFragment.prototype, { prepend: da, append: ea });
      Ha(a);
      Ea(a);
      window.CustomElementRegistry = Y;
      a = new Y(a);
      document.__CE_registry = a;
      Object.defineProperty(window, "customElements", { configurable: true, enumerable: true, value: a });
    }
    O && !O.forcePolyfill && "function" == typeof O.define && "function" == typeof O.get || Ia();
    window.__CE_installPolyfill = Ia;
  }).call(self);

  // src/utils/feedback/feedback.txt.html
  var feedback_txt_default = '<form data-multi-step class="form inline">\n  <div class="row-container">\n    <div class="information">\n      <div class="logo">\n        <img src="" />\n        <p></p>\n      </div>\n      <p data-step="1">How are we doing?</p>\n      <p data-step="2">Glad you like it! Can you help us share the \u2764\uFE0F?</p>\n      <input name="feedback" data-step="3" placeholder="How can we improve?" />\n      <p data-step="4">Thanks for the feedback!</p>\n    </div>\n    <div class="action">\n      <div data-step="1">\n        <span class="star" data-star-index="1"></span>\n        <span class="star" data-star-index="2"></span>\n        <span class="star" data-star-index="3"></span>\n        <span class="star" data-star-index="4"></span>\n        <span class="star" data-star-index="5"></span>\n      </div>\n      <div data-step="2">\n        <button id="rate-on-store" type="button" data-next-step="4">\n          Rate on webstore\n        </button>\n        <button id="decline-rate-on-rate" type="button" data-next-step="4">\n          No thanks\n        </button>\n      </div>\n      <button id="submit-form" type="button" data-step="3" data-next-step="4">\n        Submit\n      </button>\n    </div>\n  </div>\n</form>\n';

  // src/utils/feedback/feedback.txt.css
  var feedback_txt_default2 = '/* Start css reset */\n/* 1. Use a more-intuitive box-sizing model. */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/* 2. Remove default margin */\n* {\n  margin: 0;\n}\n/* 3. Allow percentage-based heights in the application */\nhtml,\nbody {\n  height: 100%;\n}\n/* Typographic tweaks! 4. Add accessible line-height 5. Improve text rendering */\nbody {\n  line-height: 20px;\n  -webkit-font-smoothing: antialiased;\n}\n/* 6. Improve media defaults */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/* 7. Remove built-in form typography styles */\ninput,\nbutton,\ntextarea,\nselect {\n  font-size: 12px;\n}\n/* 8. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/* End css reset */\n\n.form {\n  width: 100%;\n  font-family: Verdana, sans-serif;\n}\n[data-step],\n.form[data-current-step="4"] .action {\n  display: none;\n}\n.form[data-current-step="1"] [data-step="1"],\n.form[data-current-step="2"] [data-step="2"],\n.form[data-current-step="3"] [data-step="3"],\n.form[data-current-step="4"] [data-step="4"] {\n  display: block;\n}\n.row-container {\n  align-items: center;\n  background: #cce;\n  display: grid;\n  gap: 8px;\n  margin: 0;\n  padding: 4px 10px;\n}\n\n.information {\n  align-items: center;\n  display: grid;\n  gap: 8px;\n  grid-auto-flow: column;\n}\n.action {\n  align-items: center;\n  display: flex;\n}\n.logo {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n}\n.logo img {\n  width: 15px;\n}\n.logo p {\n  display: none;\n}\nbutton {\n  background-color: transparent;\n  border-radius: 5px;\n  margin-right: 8px;\n}\n.star {\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: bold;\n}\n.star:before {\n  content: "\u2606";\n}\n.full.star:before {\n  content: "\u2605";\n  color: gold;\n}\n\n.inline .row-container,\n.inline .row-container.active {\n  display: flex;\n  min-height: 35px;\n}\n.inline .row-container .information {\n  display: flex;\n  flex-grow: 100;\n}\n.row-container .information input {\n  flex: 1;\n}\n.inline .row-container[data-step="4"] .information {\n  flex-grow: 0;\n}\n\n.small .row-container .information {\n  display: flex;\n}\n\n.medium .row-container .information {\n  grid-auto-flow: row;\n}\n.medium .logo p {\n  display: block;\n}\np {\n  font-size: 12px;\n}\n\ndiv[data-step="2"] {\n  white-space: nowrap;\n}\n';

  // src/_locales/en/messages.json
  var messages_exports = {};
  __export(messages_exports, {
    appDesc: () => appDesc,
    appName: () => appName,
    appShortName: () => appShortName,
    calculator_cue: () => calculator_cue,
    default: () => messages_default
  });
  var appName = {
    message: "Floating Scientific Calculator",
    description: "The name of the extension"
  };
  var appShortName = {
    message: "Calculator",
    description: "The short-version name of the extension name"
  };
  var appDesc = {
    message: "A floating scientific calculator anywhere you need it",
    description: "The description of your extension"
  };
  var calculator_cue = {
    message: "calculator",
    description: "The search query cue for calculator"
  };
  var messages_default = {
    appName,
    appShortName,
    appDesc,
    calculator_cue
  };

  // src/utils/i18n.ts
  var logger2 = new Logger("i18n");
  var i18n = (key) => {
    if (!key) {
      logger2.error("A valid key is required for i18n, got", key);
      return key;
    }
    if (chrome?.i18n && chrome.i18n.getMessage(key) !== "") {
      return chrome.i18n.getMessage(key);
    }
    logger2.warn(
      "chrome.i18n is not available in the current context, falling back to en-US"
    );
    Object.keys(messages_exports).forEach((k) => {
    });
    for (const [translationKey, translatedText] of Object.entries(messages_exports)) {
      if (translationKey === key) {
        return translatedText["message"];
      }
    }
    logger2.error("No translation available for key:", key);
    return key;
  };

  // src/utils/feedback/feedback.ts
  var FeedbackForm = class extends HTMLElement {
    constructor() {
      super();
      this.logger = new Logger("feedback-form");
      this.attachShadow({ mode: "open" });
    }
    setProgressHandler(fn) {
      this.progressHandler = fn;
    }
    static get observedAttributes() {
      return ["size", "app-name", "logo-url", "store-link", "form-link"];
    }
    connectedCallback() {
      this.logger.debug("Feedback form added to page.");
      this.updateStyle(this);
    }
    disconnectedCallback() {
      this.logger.debug("Feedback form removed from page.");
    }
    adoptedCallback() {
      this.logger.debug("Feedback form moved to new page.");
    }
    updateStyle(elem) {
      const style = document.createElement("style");
      style.textContent = feedback_txt_default2;
      const range = document.createRange();
      range.selectNode(document.getElementsByTagName("body").item(0));
      const documentFragment = range.createContextualFragment(feedback_txt_default);
      const shadow = elem.shadowRoot;
      shadow.append(style, documentFragment);
      const size2 = elem.getAttribute("size") ?? "inline";
      const app = elem.getAttribute("app-name") ?? i18n("appName");
      const logo = elem.getAttribute("logo-url") ?? chrome.runtime.getURL("assets/logo-24x24.png");
      const storeLink = elem.getAttribute("store-link") ?? "https://chrome.google.com/webstore/detail/" + i18n("@@extension_id");
      const formLink = elem.getAttribute("form-link") ?? "https://formspree.io/f/mayzdndj";
      this.logger.debug(`Attributes: size=${size2}, app=${app}, logo=${logo}`);
      const multiStepForm = shadow.querySelector("[data-multi-step]");
      multiStepForm.classList.remove("inline", "small", "medium");
      multiStepForm.classList.add(size2);
      multiStepForm.querySelector("img").src = logo;
      multiStepForm.querySelector(".logo p").innerHTML = app;
      let currentStep = multiStepForm.getAttribute("data-current-step");
      if (!currentStep) {
        currentStep = 1;
        multiStepForm.setAttribute("data-current-step", currentStep);
      }
      const stars = [...multiStepForm.querySelectorAll(".star")];
      const jumpButtons = [...multiStepForm.querySelectorAll("[data-next-step]")];
      if (stars.length > 0) {
        const resetStarsClass = () => stars.forEach((star) => star.classList = ["star"]);
        const handleMouseOver = (event) => {
          const starIndex = event.target.getAttribute("data-star-index");
          resetStarsClass();
          stars.forEach(
            (star, index) => index < starIndex ? star.classList.add("full") : null
          );
        };
        const handleStarClick = (event) => {
          const starIndex = event.target.getAttribute("data-star-index");
          if (this.progressHandler) {
            this.progressHandler("started", starIndex);
          }
          currentStep = starIndex < 5 ? 3 : 2;
          multiStepForm.setAttribute("data-current-step", currentStep);
        };
        stars.forEach(
          (star) => star.addEventListener("mouseover", handleMouseOver)
        );
        stars.forEach((star) => star.addEventListener("click", handleStarClick));
        multiStepForm.addEventListener("mouseleave", resetStarsClass);
      }
      jumpButtons.forEach(
        (button) => button.addEventListener("click", (event) => {
          currentStep = event.target.getAttribute("data-next-step");
          multiStepForm.setAttribute("data-current-step", currentStep);
          if (button.id === "rate-on-store") {
            window.open(storeLink);
          }
          const data = {
            feedback: multiStepForm.querySelector("input").value,
            appName: app
          };
          if (button.id === "submit-form") {
            fetch(formLink, {
              method: "POST",
              body: JSON.stringify(data)
            }).then(function(response) {
              return this.logger.debug("response", response.json());
            }).then(function(response) {
              this.logger.debug("response 2", response.json());
            });
          }
          if (currentStep == 4) {
            setTimeout(() => {
              if (this.progressHandler) {
                this.progressHandler("completed", data);
              }
            }, 1300);
          }
        })
      );
    }
  };
  customElements.define("feedback-form", FeedbackForm);

  // src/utils/storage.ts
  var FEEDBACK_DATA_KEY = "feedback_data";
  var Storage = class {
    constructor() {
      this.storageService = chrome?.storage?.sync ?? window.localStorage;
    }
    put(key, value) {
      if (value === null || value === void 0) {
        return Promise.reject("Attempting to save a null value");
      }
      if (!key) {
        return Promise.reject("Attempting to use a null key");
      }
      if (!chrome?.storage?.sync) {
        return this.storageService.setItem(key, JSON.stringify(value));
      }
      const data = {};
      data[key] = value;
      return this.storageService.set(data);
    }
    async get(key) {
      if (!chrome?.storage?.sync) {
        return JSON.parse(this.storageService.getItem(key));
      }
      const response = await this.storageService.get(key);
      return response[key];
    }
    getAll() {
      return this.storageService.get(null);
    }
    async getAndUpdate(key, updateFn) {
      const data = await this.get(key);
      return this.put(key, await updateFn(data));
    }
  };
  var storage_default = new Storage();

  // src/utils/session-id.ts
  var SESSION_EXPIRATION_IN_MIN = 30;
  async function getOrCreateSessionId() {
    let { sessionData } = await chrome.storage.session.get("sessionData");
    const currentTimeInMs = Date.now();
    if (sessionData && sessionData.timestamp) {
      const durationInMin = (currentTimeInMs - sessionData.timestamp) / 6e4;
      if (durationInMin > SESSION_EXPIRATION_IN_MIN) {
        sessionData = null;
      } else {
        sessionData.timestamp = currentTimeInMs;
        await chrome.storage.session.set({ sessionData });
      }
    }
    if (!sessionData) {
      sessionData = {
        session_id: currentTimeInMs.toString(),
        timestamp: currentTimeInMs.toString()
      };
      await chrome.storage.session.set({ sessionData });
    }
    return sessionData.session_id;
  }

  // src/utils/analytics.ts
  var GA_ENDPOINT = "https://www.google-analytics.com/mp/collect";
  var GA_DEBUG_ENDPOINT = "https://www.google-analytics.com/debug/mp/collect";
  var MEASUREMENT_ID = manifest_default.__measurement_id;
  var API_SECRET = manifest_default.__ga_api_secret;
  var DEFAULT_ENGAGEMENT_TIME_MSEC = 100;
  var Analytics = class {
    constructor() {
      this.debug = IS_DEV_BUILD;
    }
    async getOrCreateClientId() {
      let { clientId } = await chrome.storage.local.get("clientId");
      if (!clientId) {
        clientId = self.crypto.randomUUID();
        await chrome.storage.local.set({ clientId });
      }
      return clientId;
    }
    async getSessionId() {
      try {
        return getOrCreateSessionId();
      } catch (e) {
        return new Promise((resolve) => {
          chrome.runtime.sendMessage("get_or_create_session_id", (sessionId) => {
            resolve(sessionId);
          });
        });
      }
    }
    async fireEvent(name, params = {}) {
      if (!params.session_id) {
        params.session_id = await this.getSessionId();
      }
      if (!params.engagement_time_msec) {
        params.engagement_time_msec = DEFAULT_ENGAGEMENT_TIME_MSEC;
      }
      try {
        const response = await fetch(
          `${this.debug ? GA_DEBUG_ENDPOINT : GA_ENDPOINT}?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`,
          {
            method: "POST",
            body: JSON.stringify({
              client_id: await this.getOrCreateClientId(),
              events: [
                {
                  name,
                  params
                }
              ]
            })
          }
        );
        if (!this.debug) {
          return;
        }
        console.log(await response.text());
      } catch (e) {
        console.error("Google Analytics request failed with an exception", e);
      }
    }
    async firePageViewEvent(pageTitle, pageLocation, additionalParams = {}) {
      return this.fireEvent("page_view", {
        page_title: pageTitle,
        page_location: pageLocation,
        ...additionalParams
      });
    }
    async fireErrorEvent(error, additionalParams = {}) {
      return this.fireEvent("extension_error", {
        ...error,
        ...additionalParams
      });
    }
  };
  var analytics_default = new Analytics();

  // src/content-script/previewr.ts
  var iframeName = "essentialkit_calc_frame";
  var getUrl = {
    default: chrome?.runtime?.getURL,
    demo: (path) => {
      if (window.location.protocol === "chrome-extension:") {
        return chrome.runtime.getURL(path);
      } else if (window.location.hostname === "127.0.0.1" || window.location.hostname === "essentialkit.org") {
        return window.location.origin + "/assets/demos/floating-calculator/standalone/calc.html";
      }
      console.error("Invalid path");
      return "";
    }
  };
  var Previewr = class {
    constructor() {
      this.logger = new Logger("previewr");
      this.mode = "default";
      this.onEscHandler = (evt) => {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
          isEscape = evt.key === "Escape" || evt.key === "Esc";
        } else {
          isEscape = evt.keyCode === 27;
        }
        if (isEscape) {
          this.handleMessage({
            action: "escape",
            href: document.location.href,
            sourceFrame: iframeName
          });
        }
      };
    }
    init() {
      if (this.inIframe()) {
        this.logger.debug(
          "Not inserting previewr in iframe: ",
          window.location.href
        );
        return;
      }
      this.listenForCspError();
      document.addEventListener("keydown", this.onEscHandler);
    }
    listenForCspError() {
      document.addEventListener("securitypolicyviolation", (e) => {
        if (window.name !== iframeName) {
          return;
        }
        this.logger.error("CSP error", e, e.blockedURI);
      });
    }
    async handleMessage(message) {
      this.logger.debug("#handleMessage: ", message);
      const mode = message.mode;
      if (mode === "demo") {
        this.mode = "demo";
      }
      switch (message.action) {
        case "toggle-calculator":
          try {
            let link = getUrl[this.mode]("standalone/calc.html");
            console.log("creatign url", link);
            let newUrl = new URL(link);
            if (newUrl.href === this.url?.href) {
              this.logger.warn("Ignoring update of same URL", newUrl.href);
              return;
            }
            this.url = newUrl;
            this.previewUrl(newUrl, message.point);
            return;
          } catch (e) {
            this.logger.log("Error creating url: ", e);
          }
          break;
        case "escape":
          this.dialog?.close();
          break;
        default:
          this.logger.warn("Unhandled action: ", message.action);
          break;
      }
    }
    async previewUrl(url, point) {
      this.logger.log("#previewUrl: ", url);
      const winboxOptions = await this.getWinboxOptions(url, point);
      if (!this.dialog) {
        this.logger.debug("creating new dialog with options", winboxOptions);
        this.dialog = new WinBox(i18n("appName"), winboxOptions);
      } else {
        this.logger.debug("restoring dialog");
        this.dialog.setUrl(url.href);
        this.dialog.move(
          winboxOptions.x,
          winboxOptions.y,
          false
        );
      }
      await this.registerFeedbackUI();
      this.dialog?.show();
    }
    async registerFeedbackUI() {
      const feedbackData = await storage_default.get(FEEDBACK_DATA_KEY);
      const shouldShow = feedbackData?.status === "eligible";
      if (shouldShow) {
        this.dialog?.addClass("show-footer");
      }
      const ff = this.dialog?.dom.querySelector("feedback-form");
      ff.setProgressHandler((status, data) => {
        if (status === "started") {
          this.logger.log("started: this", this, chrome?.storage?.sync);
          const feedbackUpdate = {
            status: "honored",
            timestamp: Date.now(),
            rating: data
          };
          storage_default.put(FEEDBACK_DATA_KEY, feedbackUpdate);
          analytics_default.fireEvent("user_feedback", {
            action: "rate_experience",
            star_rating: data
          });
        }
        if (status === "completed") {
          this.dialog?.removeClass("show-footer");
          analytics_default.fireEvent("user_feedback", {
            action: "submit_feedback",
            feedback_text: data
          });
        }
      });
    }
    async getWinboxOptions(url, point) {
      let pos = { x: 0, y: 0, placement: "top" };
      if (point) {
        pos = await this.getPos(point);
      }
      return {
        icon: getUrl[this.mode]("assets/logo-24x24.png"),
        x: pos.x,
        y: pos.y,
        width: "440px",
        height: "360px",
        autosize: false,
        class: ["no-max", "no-full", "no-min", "no-move"],
        index: await this.getMaxZIndex(),
        html: `<iframe name="${iframeName}" src="${url}"></iframe>`,
        hidden: true,
        shadowel: "floating-calculator-preview-window",
        framename: iframeName,
        onclose: () => {
          this.url = void 0;
          this.dialog = void 0;
          document.querySelectorAll("floating-calculator-preview-window")?.forEach((e) => e.remove());
        }
      };
    }
    inIframe() {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    }
    getMaxZIndex() {
      return new Promise((resolve) => {
        const z = Math.max(
          ...Array.from(
            document.querySelectorAll("body *"),
            (el) => parseFloat(window.getComputedStyle(el).zIndex)
          ).filter((zIndex) => !Number.isNaN(zIndex)),
          0
        );
        resolve(z);
      });
    }
    async getPos(rect) {
      const virtualEl = {
        getBoundingClientRect() {
          return rect;
        }
      };
      const div = document.createElement("div");
      div.style.width = "655px";
      div.style.height = "360px";
      div.style.position = "fixed";
      div.style.visibility = "hidden";
      document.body.appendChild(div);
      return computePosition2(virtualEl, div, {
        placement: "top",
        strategy: "fixed",
        middleware: [
          offset(12),
          flip(),
          shift({ padding: 5 })
        ]
      }).then(({ x, y, placement, middlewareData }) => {
        return {
          x,
          y,
          placement
        };
      });
    }
  };

  // src/welcome/welcome.ts
  var previewr = new Previewr();
  previewr.init();
  window.addEventListener("load", (e) => {
    let lastMousePosition;
    document.addEventListener("mousemove", (e2) => {
      const y = e2.y < 20 ? 20 : e2.y;
      lastMousePosition = {
        width: 10,
        height: 10,
        x: e2.x,
        y,
        left: e2.x,
        top: y,
        right: e2.x + 10,
        bottom: y + 10
      };
    });
    document.querySelector("#demo-button")?.addEventListener("click", (e2) => {
      previewr.handleMessage({
        application: "floating-calculator",
        action: "toggle-calculator",
        data: { mode: "demo" },
        point: lastMousePosition
      });
    });
  });
})();
//# sourceMappingURL=welcome.js.map
