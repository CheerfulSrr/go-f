import React, { useState } from 'react';
import { connect } from "react-redux";
import { fetchKind } from '@/actions'

const Kind = ({ dispatch }) => {
  const [ formState, setFormState ] = useState({})
  const setFormStateValue = (e) => {
    e.preventDefault()
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  const submitValue = (e) => {
    e.preventDefault()
    dispatch(fetchKind(formState))
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

export default connect()(Kind);