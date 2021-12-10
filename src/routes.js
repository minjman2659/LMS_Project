import Users from './pages/Users';
import User from './pages/User';
import Home from './pages/Home';
import Courses from './pages/Courses';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/courses',
    component: Courses,
  },
  {
    path: '/users',
    component: Users,
  },
  {
    path: '/users/:id',
    component: User,
  },
];
