var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var renderArray = function renderArray(arr) {
  return arr.length ? React.createElement(
    "tr",
    null,
    arr.map(function (item) {
      return React.createElement(
        "th",
        { key: item.id },
        item.brand
      );
    })
  ) : null;
};

var renderObject = function renderObject(obj) {
  return Object.keys(obj).length ? React.createElement(
    "ul",
    null,
    Object.keys(obj).map(function (key, index) {
      return React.createElement(
        "li",
        { key: index },
        _typeof(obj[key]) === "object" ? Array.isArray(obj[key]) ? renderArray(obj[key]) : obj[key] !== null && renderObject(obj[key]) : obj[key]
      );
    })
  ) : null;
};

export { renderObject, renderArray };