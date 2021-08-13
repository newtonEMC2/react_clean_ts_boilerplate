import React from 'react';
import Dashboard from '../../views/dashboard/dashboard.view';
import { users, dashboard } from '../../constants/paths.const';

const adminRoutes = [
  {
    path: dashboard,
    component: Dashboard,
    exact: true,
    guarded: true,
    redirect: false,
  },
  {
    path: users,
    component: () => <h1>usersss</h1>,
    exact: true,
    guarded: true,
    redirect: false,
  },

];

export default adminRoutes;
