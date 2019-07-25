import React from 'react';
import { Route } from 'react-router-dom';

// Styles
import '../../styles/Content.css';

// Pages
import Dashboard from '../../pages/Dashboard';
import Users from '../../pages/Users';

const Content = () => (
  <div className="content-app">
    <Route path="/backoffice/dashboard" component={Dashboard} />
    <Route path="/backoffice/users" component={Users} />
  </div>
);

export default Content;
