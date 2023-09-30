import React, { createContext, useState, useContext, useEffect } from 'react';
import cusomterApi from 'api/customerApi';

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    const response = await cusomterApi.getList();
    if (response !== undefined) {
      setCustomers(response);
    }
    console.log(response);
  };
  useEffect(() => {
    getCustomers();
  }, []);
  const addData = ({ name, age, email }) => {
    const id = Math.floor(Math.random() * 1000000);
    customers.push({ id, name, age, email });
    console.log(customers);
    setCustomers(customers);
  };
  const updateData = ({ id, name, age, email }) => {
    console.log(id);
    const newCustomers = customers.map((customer) => {
      if (customer.id === Number(id)) {
        return { ...customer, name: name, email: email, age: age };
      }
      return customer;
    });
    console.log(newCustomers);
    setCustomers(newCustomers);
  };

  const deleteData = (id) => {
    const newCustomers = customers.filter((item) => item.id !== Number(id));
    setCustomers(newCustomers);
  };

  return (
    <CustomerContext.Provider value={{ customers, updateData, deleteData, addData }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => {
  return useContext(CustomerContext);
};
