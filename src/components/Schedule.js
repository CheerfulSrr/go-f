import React, { useEffect, useRef, useState } from 'react';
import { axios } from "@/util";

const Schedule = () => {
  const [ kindList, setKindList ] = useState([])
  const [ formState, setFormState ] = useState({});
  const selectKindInfoId = useRef()
  useEffect(() => {
    axios.get("/kind/list")
      .then(result => {
        setKindList(result.data)
        setFormState({
          ...formState,
          [selectKindInfoId.current.name]: selectKindInfoId.current.value,
        })
      })
  }, [])
  const setFormStateOnChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.get("/schedule/save", { params: formState })
      alert("success")
    } catch (e) {
      alert("failed")
    }
  }
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="scheduleFormName">schedule name</label>
          <input name="scheduleName" type="text" className="form-control" id="scheduleFormName"
                 onChange={setFormStateOnChange}
          />
        </div>
        <div className="form-group">
          <label>kind name</label>
          <select name="kindInfoId" ref={selectKindInfoId} className="form-control" required
                  onChange={setFormStateOnChange}>
            {
              kindList.map(item => (<option key={item.id} value={item.id}>{item.kindName}</option>))
            }
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="scheduleFormStartDate">start date</label>
          <input name="startDate" type="text" className="form-control" id="scheduleFormStartDate"
                 onChange={setFormStateOnChange}/>
          <p className="help-block">example: yyyy-MM-nn</p>
        </div>
        <div className="form-group">
          <label htmlFor="scheduleFormEndDate">end date</label>
          <input name="endDate" type="text" className="form-control" id="scheduleFormEndDate"
                 onChange={setFormStateOnChange}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={submitHandler}>submit</button>
      </form>
    </div>
  )
}

export default Schedule;