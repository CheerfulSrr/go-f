import React, { useEffect, useState } from 'react';

const Schedule = (props) => {
  const [ kindDataList, setKindDataList ] = useState([])
  useEffect(() => {
    if (props.kindList !== undefined) {
      setKindDataList(props.kindList)
    }
  }, [ props.kindList ])
  return (
    <div>
      <form>
        <span className="input-name">kind: </span><input type="text" list="kindList"/>
        <datalist id="kindList">{kindDataList.map((v) => <option key={v.id} value={v.aliasName}/>)}</datalist>
        <br/>
        <span className="input-name">book:</span><input type="text"/>
      </form>
    </div>
  )
}

export default Schedule;