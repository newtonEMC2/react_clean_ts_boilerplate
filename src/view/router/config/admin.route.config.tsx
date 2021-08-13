// import DashboardView from 'views/Dashboard/dashboard.view';
import React from 'react';
import { users, dashboard } from '../../constants/paths.const';

const adminRoutes = [
  {
    path: dashboard,
    component: () => <h1>dashhh</h1>,
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
