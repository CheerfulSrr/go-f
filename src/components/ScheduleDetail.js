import React, { useEffect, useRef, useState } from 'react';
import { axios } from "@/util";

const ScheduleDetail = () => {
  const [ formState, setFormState ] = useState({});
  const [ scheduleId, setScheduleId ] = useState([])
  const selectSchedule = useRef();
  const selectStatus = useRef();
  useEffect(() => {
    axios.get("/schedule/list")
      .then(result => {
        setScheduleId(result.data)
        setFormState({
          ...formState,
          [selectSchedule.current.name]: selectSchedule.current.value,
          [selectStatus.current.name]: selectStatus.current.value,
        })
      })
  }, [])
  const setFormStateOnChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(formState)
    try {
      const saveResult = await axios.get("/schedule/detail/save", { params: formState });
      if (saveResult.status === 200)
        alert("success")
    } catch (e) {
      alert("failed")
    }
  }
  return (
    <div>
      <div>
        <form>

          <div className="form-group">
            <label>schedule</label>
            <select name="scheduleId" ref={selectSchedule} className="form-control" required
                    onChange={setFormStateOnChange}>
              {
                scheduleId.map(item => (<option key={item.id} value={item.id}>{item.scheduleName}</option>))
              }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="scheduleFormChapter">current chapter</label>
            <input name="currentChapter" type="text" className="form-control" id="scheduleFormChapter"
                   onChange={setFormStateOnChange}
            />
          </div>
          <div className="form-group">
            <label>status</label>
            <select name="status" ref={selectStatus} className="form-control" required onChange={setFormStateOnChange}>
              <option value="0">未开始</option>
              <option value="1">进行中</option>
              <option value="2">暂停</option>
              <option value="3">停止</option>
              <option value="4">结束</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="scheduleFormStartDate">start date</label>
            <input name="currentChapterStartDate" type="text" className="form-control" id="scheduleFormStartDate"
                   onChange={setFormStateOnChange}/>
            <p className="help-block">example: yyyy-MM-nn</p>
          </div>
          <button type="submit" className="btn btn-primary" onClick={submitHandler}>submit</button>
        </form>
      </div>
    </div>
  )
}

export default ScheduleDetail;