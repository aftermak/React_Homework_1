const renderArray = (arr) => {
  return arr.length ? <ol>
      {
          arr.map((item, index) => {
              return <li key={index}>
                  {Array.isArray(item) ? renderArray(item) : renderObject(item)}
              </li>
          })
      }
  </ol> : null;
}

const renderObject = (obj) => {
return Object.keys(obj).length ? (
  <tr>
    {Object.keys(obj).map((key, index) => {
      return (
        <th key={index}>
          {typeof obj[key] === `object`
            ? Array.isArray(obj[key]) ? renderArray(obj[key]) : obj[key]!== null && renderObject(obj[key])
            : obj[key]}
        </th>
      );
    })}
  </tr>
) : null;
};

export { renderObject, renderArray };