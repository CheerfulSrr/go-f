import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getKind } from "@/actions";

const Schedule = (d) => {
  console.log('dddddddddd')
  console.log(d)
  const dispatch=d.dispatch
  useEffect(() => {
    dispatch(getKind())
  }, [])
  // todo 拆分容器组件和ui组件
  return (
    <div>
      <form>
        <input type="text" list="kindList"/>
        <datalist id="kindList">
          {/*{*/}
          {/*  item.kind.map(d=>(<option>{d.kindName}</option>))*/}
          {/*}*/}
        </datalist>
        <input type="text"/>
      </form>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  console.log('dddddddddddddddddddddd')
  const item = state.item
  return {
    ...props,
    item
  }
}

export default connect(mapStateToProps)(Schedule);