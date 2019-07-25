import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/SideBar.css';

const SideBar = (props) => {
  const { isOpen } = props;

  return (
    <div id="sidebar" className={!isOpen ? 'active' : ''}>
      <div className="sidebar-header">
        <h3>Kot ERP</h3>
      </div>

      <ul className="list-unstyled components">
        <p>Operational Modules</p>
        <li>
          <NavLink activeClassName="active" to="/backoffice/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/backoffice/users">Users</NavLink>
        </li>
      </ul>

      <ul className="list-unstyled components">
        <p>Market Modules</p>
        <li>
          <NavLink activeClassName="active" to="/backoffice/reports">Reportes</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/backoffice/others">Others</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
