var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var renderArray = function renderArray(arr) {
  return arr.length ? arr.map(function (item) {
    return Array.isArray(item) ? renderArray(item) : renderObject(item);
  }) : null;
};

var renderCollectionArray = function renderCollectionArray(arr) {
  return arr.length ? arr.map(function (item) {
    return Array.isArray(item) ? renderArray(item) : renderCollectionObject(item);
  }) : null;
};

var renderObject = function renderObject(obj) {
  return Object.keys(obj).length ? Object.keys(obj).map(function (key, index) {
    return typeof obj[key] === 'object' ? Array.isArray(obj[key]) ? renderArray(obj[key]) : obj[key] !== null && renderObject(obj[key]) : renderElement(key, obj[key], index, obj.collection);
  }) : null;
};

var renderCollectionObject = function renderCollectionObject(obj) {
  return Object.keys(obj).length ? React.createElement(
    'ul',
    null,
    ' ',
    Object.keys(obj).map(function (key, index) {
      return _typeof(obj[key]) === 'object' ? Array.isArray(obj[key]) ? renderArray(obj[key]) : obj[key] !== null && renderObject(obj[key]) : renderCollection(key, obj[key], index);
    })
  ) : null;
};

var renderCollection = function renderCollection(field, value, index) {
  var specs = React.createElement(
    'li',
    { key: index },
    field,
    ':',
    value
  );
  return field !== 'id' ? specs : null;
};

var renderElement = function renderElement(key, value, index, obj) {
  var Brand = function Brand() {
    var brand = React.createElement(
      'td',
      { colSpan: 2 },
      value
    );
    return key === 'brand' ? React.createElement(
      'tr',
      { key: index, className: 'brand' },
      brand
    ) : null;
  };

  var Models = function Models() {
    var models = React.createElement(
      'td',
      { className: 'name' },
      value
    );
    return key === 'name' ? React.createElement(
      'tr',
      null,
      models,
      React.createElement(
        'td',
        null,
        renderCollectionArray(obj)
      )
    ) : null;
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Brand, null),
    React.createElement(Models, null)
  );
};

var renderTable = function renderTable(obj) {
  return obj.length ? React.createElement(
    'tbody',
    null,
    renderArray(obj)
  ) : null;
};

export { renderTable };