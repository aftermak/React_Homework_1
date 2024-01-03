const renderArray = (arr) => {
  return arr.length ? <tr>
      {
          arr.map((item) => {
              return <th key={item.id}>
                  {item.brand}
              </th>
          })
      }
  </tr> : null;
}

const renderObject = (obj) => {
return Object.keys(obj).length ? (
  <ul>
    {Object.keys(obj).map((key, index) => {
      return (
        <li key={index}>
          {typeof obj[key] === `object`
            ? Array.isArray(obj[key]) ? renderArray(obj[key]) : obj[key]!== null && renderObject(obj[key])
            : obj[key]}
        </li>
      );
    })}
  </ul>
) : null;
};

export { renderObject, renderArray };