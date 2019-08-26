import React from 'react';
import { Route } from 'react-router-dom';

// Styles
import '../../styles/Content.css';

// Pages
import Dashboard from '../../pages/Dashboard';
import Users from '../../pages/Users';
import Providers from '../../pages/Providers';
import Levels from '../../pages/Levels';
import Customers from '../../pages/Customers';
import Categories from '../../pages/Categories';
import Products from '../../pages/Products';
import Purchases from '../../pages/Purchases';

const Content = () => (
  <div className="content-app">
    <Route path="/backoffice/dashboard" component={Dashboard} />
    <Route path="/backoffice/users" component={Users} />
    <Route path="/backoffice/providers" component={Providers} />
    <Route path="/backoffice/levels" component={Levels} />
    <Route path="/backoffice/customers" component={Customers} />
    <Route path="/backoffice/categories" component={Categories} />
    <Route path="/backoffice/products" component={Products} />
    <Route path="/backoffice/purchases" component={Purchases} />
  </div>
);

export default Content;
