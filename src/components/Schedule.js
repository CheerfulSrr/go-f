import React from 'react';

const Schedule = (props) => {
  return (
    <div>
      <form>
        <input type="text" list="kindList"/>
        <datalist id="kindList">
          {
            props.state.kindList.map(d => <option id={d.id}>{d.aliasName}</option>)
          }
        </datalist>
        <input type="text"/>
      </form>
    </div>
  )
}

export default Schedule;