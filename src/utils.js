const renderArray = (arr) => {
  return arr.length ?
    arr.map((item) => {
      return Array.isArray(item) ? renderArray(item) : renderObject(item)
    })
    : null;
}

const renderCollectionArray = (arr) => {
  return arr.length ?
    arr.map((item, index) => {
      return Array.isArray(item) ? renderArray(item) 
        : <React.Fragment key={index} >
          {renderCollectionObject(item)}
        </React.Fragment>
      })
      : null;
}

const renderObject = (obj) => {
  return Object.keys(obj).length ? (
    Object.keys(obj).map((key, index) => {
      return typeof obj[key] === `object` ? Array.isArray(obj[key]) 
        ? renderArray(obj[key]) 
        : obj[key] !== null && renderObject(obj[key]) 
        : <React.Fragment key={index}>
          {renderElement(key, obj[key], obj.collection)}
        </React.Fragment>
    })
  ): null
}

const renderCollectionObject = (obj) => {
  return Object.keys(obj).length ? (
    <ul> {
      Object.keys(obj).map((key, index) => {
        return typeof obj[key] === `object` 
          ? Array.isArray(obj[key]) 
          ? renderArray(obj[key]) 
          : obj[key] !== null && renderObject(obj[key]) 
          : <React.Fragment key={index}>
            {renderCollection(key, obj[key], index)}
          </React.Fragment>
      })
    }</ul>)
    : null
}

const renderCollection = (field, value) => {
  const specs = <li>{field}:{value}</li>
  return field !== 'id' ? specs : null
}

const renderElement = (key, value, obj) => {
  const Brand = () => {
    const brand = <td colSpan={2}>{value}</td>
    return key === 'brand' ? <tr className={'brand'}>{brand}</tr> : null
  }

  const Models = () => {
    const models = <td className={'name'}>{value}</td>
    return key === 'name' ? (
      <tr>
        {models}
        <td>{renderCollectionArray(obj)}</td>
      </tr>)
      : null
  }

  return <React.Fragment>
    <Brand />
    <Models />
  </React.Fragment>
}

const renderTable = (obj) => {
  return obj.length ? (
    <tbody>
      {renderArray(obj)}
    </tbody>)
    : null
}

export { renderTable };