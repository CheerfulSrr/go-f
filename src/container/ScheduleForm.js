import React, { useEffect, useState } from 'react';
import Schedule from "@/components/Schedule";
import { axios } from "@/util";

const ScheduleForm = () => {
  const [ state, setState ] = useState({})
  useEffect(() => {
    axios.get("/kind/list").then(result => setState({ kindList: result.data }))
  }, [])
  const submitHandler = (e) => {
    axios.post("/schedule/create")
  }
  return (
    <Schedule kindList={state.kindList} submit={submitHandler}/>
  )
}

export default ScheduleForm;