import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Redirect, Navigate } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import AdminLayout from './layouts/Admin';
import RTLLayout from './layouts/RTL';

import { Provider } from 'react-redux';
import store from 'reduxStore/store';
import Dashboard from './views/Dashboard/Dashboard';
import SignIn from './views/Pages/SignIn';
import SignUp from './views/Pages/SignUp';
import TablesCustomer from 'views/Dashboard/TablesCustomer';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/themeAdmin';
import GlobalPrivateRouter from './privateRouter/GlobalPrivateRouter';
ReactDOM.render(
  <ChakraProvider resetCSS={false} theme={theme}>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path={`/auth`} element={<AuthLayout />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route element={<GlobalPrivateRouter />}>
            <Route path={`/admin`} element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="customers" element={<TablesCustomer />} />
            </Route>
            <Route path={`/rtl`} element={<RTLLayout />} />
            <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </ChakraProvider>,
  document.getElementById('root'),
);
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import AuthLayout from 'layouts/Auth.js';
import AdminLayout from 'layouts/Admin.js';
import RTLLayout from 'layouts/RTL.js';
import { CustomerProvider } from 'layouts/CustomerContex';

ReactDOM.render(
  <CustomerProvider>
    <HashRouter>
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <Route path={`/admin`} component={AdminLayout} />
        <Route path={`/rtl`} component={RTLLayout} />
        <Redirect from={`/`} to="/admin/dashboard" />
      </Switch>
    </HashRouter>
  </CustomerProvider>,
  document.getElementById('root'),
);
