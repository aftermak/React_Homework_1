const renderArray = (arr) => { 
  return arr.length ?
    arr.map((item) => {
      return  Array.isArray(item) ? renderArray(item) : renderObject(item)
    })
  : null;
}

const renderCollectionArray = (arr) => { 
  return arr.length ?
    arr.map((item) => {
      return  Array.isArray(item) ? renderArray(item) : renderCollectionObject(item)
    })
  : null;
}

const renderObject = (obj) => {
  return Object.keys(obj).length ? (
    Object.keys(obj).map((key, index) => {
      return typeof obj[key] === `object` ? Array.isArray(obj[key]) ? renderArray(obj[key]) : obj[key]!== null && renderObject(obj[key]):
        renderElement(key, obj[key], index, obj.collection)
    })
  ) : null
}

const renderCollectionObject = (obj) => {
  return Object.keys(obj).length ? (
  <ul> {
    Object.keys(obj).map((key, index) => {
      return typeof obj[key] === `object` ? Array.isArray(obj[key]) ? renderArray(obj[key]) : obj[key]!== null && renderObject(obj[key]) :
        renderCollection(key, obj[key], index)
    })
  }</ul>)
  : null
}

const renderCollection = (field, value, index) => {
  const specs = <li key={index}>{field}:{value}</li>
  return field !== 'id' ? specs
  :null
}

const renderElement = (key, value, index, obj) => {
  const Brand = () => {
    const brand = <td colSpan={2}>{value}</td>
    return key==='brand' ? <tr key={index} className={'brand'}>{brand}</tr> : null
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
    </tbody> ) 
  : null
}

export { renderTable };