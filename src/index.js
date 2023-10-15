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
import { CustomerProvider } from 'layouts/CustomerContex';
import CustomerDetail from 'views/Pages/CustomerDetail';
import EditCustomer from 'views/Pages/FormCustomer';
ReactDOM.render(
  <ChakraProvider resetCSS={false} theme={theme}>
    <CustomerProvider>
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
                <Route path="detail/customer/:id" element={<CustomerDetail />} />
                <Route path="edit/customer/:id" element={<EditCustomer />} />
                <Route path="add/customer" element={<EditCustomer />} />
              </Route>
              <Route path={`/rtl`} element={<RTLLayout />} />
              <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </CustomerProvider>
  </ChakraProvider>,
  document.getElementById('root'),
);
