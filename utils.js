var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var renderArray = function renderArray(arr) {
  return arr.length ? arr.map(function (item) {
    return Array.isArray(item) ? renderArray(item) : renderObject(item);
  }) : null;
};

var renderCollectionArray = function renderCollectionArray(arr) {
  return arr.length ? arr.map(function (item, index) {
    return Array.isArray(item) ? renderArray(item) : React.createElement(
      React.Fragment,
      { key: index },
      renderCollectionObject(item)
    );
  }) : null;
};

var renderObject = function renderObject(obj) {
  return Object.keys(obj).length ? Object.keys(obj).map(function (key, index) {
    return typeof obj[key] === 'object' ? Array.isArray(obj[key]) ? renderArray(obj[key]) : obj[key] !== null && renderObject(obj[key]) : React.createElement(
      React.Fragment,
      { key: index },
      renderElement(key, obj[key], obj.collection)
    );
  }) : null;
};

var renderCollectionObject = function renderCollectionObject(obj) {
  return Object.keys(obj).length ? React.createElement(
    'ul',
    null,
    ' ',
    Object.keys(obj).map(function (key, index) {
      return _typeof(obj[key]) === 'object' ? Array.isArray(obj[key]) ? renderArray(obj[key]) : obj[key] !== null && renderObject(obj[key]) : React.createElement(
        React.Fragment,
        { key: index },
        renderCollection(key, obj[key], index)
      );
    })
  ) : null;
};

var renderCollection = function renderCollection(field, value) {
  var specs = React.createElement(
    'li',
    null,
    field,
    ':',
    value
  );
  return field !== 'id' ? specs : null;
};

var renderElement = function renderElement(key, value, obj) {
  var Brand = function Brand() {
    var brand = React.createElement(
      'td',
      { colSpan: 2 },
      value
    );
    return key === 'brand' ? React.createElement(
      'tr',
      { className: 'brand' },
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