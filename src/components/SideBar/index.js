import React from 'react';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../../styles/SideBar.css';

const SideBar = (props) => {
  const { isOpen } = props;

  return (
    <div className="sidebar-wrap">
      <div id="sidebar" className={!isOpen ? 'active' : ''}>
        <div className="sidebar-header">
          <Image className="company-photo" src="/statics/images/deerlab_logo.jpg" roundedCircle />
          Kot ERP
        </div>

        <ul className="list-unstyled components">
          <p>Operational Modules</p>
          <li>
            <NavLink activeClassName="active" to="/backoffice/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/backoffice/users">Usuarios</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/backoffice/providers">Proveedores</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/backoffice/levels">Niveles</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/backoffice/customers">Clientes</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/backoffice/categories">Categorias</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/backoffice/products">Productos</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/backoffice/purchases">Compras</NavLink>
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
    </div>
  );
};

export default SideBar;
