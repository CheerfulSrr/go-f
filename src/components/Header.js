import React from 'react';
import { HashRouter as Router, Link } from "react-router-dom";

const Header = () => {
  return (
    <Router>
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Go</Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/new/kind">新建信息</Link></li>
            <li><Link to="/new/schedule">新建计划</Link></li>
          </ul>
        </div>
      </div>
    </Router>
  )
}

export default Header;