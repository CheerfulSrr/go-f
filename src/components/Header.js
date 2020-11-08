import React from 'react';
import './Header.css'
import { HashRouter as Router, Link } from "react-router-dom";

const Header = () => {
  return (<Router>
      <div className="header">
        <div className="nav"><Link to="/">GO</Link></div>
        <div className="item">
          <ul>
            <li><Link to="/new/kind">新建类型</Link></li>
            <li><Link to="/new/schedule">新建计划</Link></li>
          </ul>
        </div>
      </div>
    </Router>
  )
}

export default Header;