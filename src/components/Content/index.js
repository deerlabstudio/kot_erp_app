import React from 'react';
import { Route } from 'react-router-dom';

// Styles
import '../../styles/Content.css';

// Pages
import Dashboard from '../../pages/Dashboard';
import UsersTypes from '../../pages/UsersTypes';
import Users from '../../pages/Users';
import Providers from '../../pages/Providers';
import Levels from '../../pages/Levels';

const Content = () => (
  <div className="content-app">
    <Route path="/backoffice/dashboard" component={Dashboard} />
    <Route path="/backoffice/userstypes" component={UsersTypes} />
    <Route path="/backoffice/users" component={Users} />
    <Route path="/backoffice/providers" component={Providers} />
    <Route path="/backoffice/levels" component={Levels} />
  </div>
);

export default Content;
