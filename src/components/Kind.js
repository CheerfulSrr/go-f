import React, { useEffect, useRef, useState } from 'react';
import { axios } from "@/util";

const Kind = () => {
  const [ formState, setFormState ] = useState({});
  const selectKind = useRef()
  const selectStatus = useRef()

  const setFormStateOnChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    setFormState({
      ...formState,
      [selectKind.current.name]: selectKind.current.value,
      [selectStatus.current.name]: selectStatus.current.value
    })
  }, [])
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const saveResult = await axios.get("/kind/save", { params: formState });
      if (saveResult.status === 200)
        alert("success")
    } catch (e) {
      alert("failed")
    }
  }
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="kindInfoFormName">name</label>
          <input name="kindName" type="text" className="form-control" id="kindInfoFormName"
                 onChange={setFormStateOnChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="kindInfoFormTag">tag</label>
          <input name="tags" type="text" className="form-control" id="kindInfoFormTag"
                 onChange={setFormStateOnChange}/>
        </div>
        <div className="form-group">
          <label>kind</label>
          <select name="kind" ref={selectKind} className="form-control" required onChange={setFormStateOnChange}>
            <option value="0">实体书</option>
            <option value="1">电子书</option>
            <option value="2">文档</option>
            <option value="3">博客</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="kindInfoFormUrl">url</label>
          <input name="url" type="text" className="form-control" id="kindInfoFormUrl" onChange={setFormStateOnChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="kindInfoFormChapter">chapter</label>
          <input name="chapter" type="text" className="form-control" id="kindInfoFormChapter"
                 onChange={setFormStateOnChange}/>
        </div>
        <div className="form-group">
          <label>status</label>
          <select name="status" ref={selectStatus} className="form-control" required onChange={setFormStateOnChange}>
            <option value="0">未完成</option>
            <option value="1">进行中</option>
            <option value="2">已完成</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" onClick={submitHandler}>submit</button>
      </form>
    </div>
  )
}

export default Kind;
