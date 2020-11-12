import React from 'react';

const Kind = (props) => {
  return (
    <div>
      <form>
        <div className="form-group col-lg-2">
          <label htmlFor="kindInfoFormName">name</label>
          <input type="text" className="form-control" id="kindInfoFormName"/>
        </div>
      </form>

    </div>
  )
}

export default Kind;
