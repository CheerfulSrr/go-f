import React, { useState } from 'react';

const Kind = () => {
  const [ formState, setFormState ] = useState({})
  const setFormStateValue = (e) => {
    e.preventDefault()
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  const submitValue = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form>
        <span className="input-name">kind: </span>
        <input name="kind" type="text" onChange={setFormStateValue}/>
        <br/>
        <span className="input-name">alias name: </span>
        <input name="aliasName" type="text" onChange={setFormStateValue}/>
        <br/>
        <input type="button" value="submit" onClick={submitValue}/>
      </form>
    </div>
  )
}

export default Kind;