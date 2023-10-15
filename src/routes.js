// import
import Dashboard from 'views/Dashboard/Dashboard.js';
import TablesCustomer from 'views/Dashboard/TablesCustomer.js';
import FormCustomer from 'views/Pages/FormCustomer';
import CustomerDetail from './views/Pages/CustomerDetail';
import Billing from 'views/Dashboard/Billing.js';
import RTLPage from 'views/RTL/RTLPage.js';
import Profile from 'views/Dashboard/Profile.js';
import SignIn from 'views/Pages/SignIn.js';
import SignUp from 'views/Pages/SignUp.js';

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from 'components/Icons/Icons';

var dashRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: '/admin',
    access: ['ADMIN', 'STAFF'],
  },
  {
    path: '/customers',
    name: 'Customers',
    icon: <StatsIcon color="inherit" />,
    component: TablesCustomer,
    layout: '/admin',
    routes: [
      {
        name: 'Detail Customer',
        path: '/detail/customer/:id',
        regex: '/detail/customer',
        component: CustomerDetail,
      },
      {
        name: 'Add Customer',
        path: '/add/customer',
        regex: '/add/customer',
        component: FormCustomer,
      },
      {
        name: 'Edit Customer',
        path: '/edit/customer/:id',
        regex: '/edit/customer',
        component: FormCustomer,
      },
    ],
  },
  // {
  //   path: '/billing',
  //   name: 'Billing',
  //   icon: <CreditIcon color="inherit" />,
  //   component: Billing,
  //   layout: '/admin',
  // },
  // {
  //   path: "/rtl-support-page",
  //   name: "RTL",
  //   rtlName: "آرتيإل",
  //   icon: <SupportIcon color='inherit' />,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  {
    name: 'ACCOUNT PAGES',
    category: 'account',
    state: 'pageCollapse',
    views: [
      {
        path: '/profile',
        name: 'Profile',
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: '/admin',
      },
      {
        path: '/signin',
        name: 'Sign In',
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: '/auth',
      },
      {
        path: '/signup',
        name: 'Sign Up',
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: '/auth',
      },
    ],
  },
];
export default dashRoutes;
