import Dashboard from '../../views/dashboard/dashboard.view';
import Users from '../../views/users/users.view';
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
    component: Users,
    exact: true,
    guarded: true,
    redirect: false,
  },

];

export default adminRoutes;
