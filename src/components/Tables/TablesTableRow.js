/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { Avatar, Badge, Button, Flex, Td, Text, Tr, useColorModeValue } from '@chakra-ui/react';
import { useCustomerContext } from 'layouts/CustomerContex';
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function TablesTableRow(props) {
  const { id, fullname, age, email, phone, lastItem } = props;
  const textColor = useColorModeValue('gray.700', 'white');
  const bgStatus = useColorModeValue('gray.400', '#1a202c');
  const colorStatus = useColorModeValue('white', 'gray.400');
  const history = useHistory();

  const { customers, updateData, deleteData } = useCustomerContext();
  return (
    <Tr key={id} cursor={'pointer'}>
      <Td
        ps="0px"
        border={lastItem ? 'none' : null}
        borderBottomColor="#56577A"
        padding={'16px 0px'}
        onClick={() => {
          history.push(`/admin/detail/customer/${id}`);
        }}
      >
        <Text fontSize="sm" color="#fff" fontWeight="normal">
          {id}
        </Text>
      </Td>
      <Td
        border={lastItem ? 'none' : null}
        borderBottomColor="#56577A"
        padding={'16px 0px'}
        onClick={() => {
          history.push(`/admin/detail/customer/${id}`);
        }}
      >
        <Text fontSize="sm" color="#fff" fontWeight="normal">
          {fullname}
        </Text>
      </Td>
      <Td
        border={lastItem ? 'none' : null}
        borderBottomColor="#56577A"
        padding={'16px 0px'}
        onClick={() => {
          history.push(`/admin/detail/customer/${id}`);
        }}
      >
        <Text fontSize="sm" color="#fff" fontWeight="normal">
          {age}
        </Text>
      </Td>
      <Td
        border={lastItem ? 'none' : null}
        borderBottomColor="#56577A"
        padding={'16px 0px'}
        onClick={() => {
          history.push(`/admin/detail/customer/${id}`);
        }}
      >
        <Text fontSize="sm" color="#fff" fontWeight="normal">
          {email}
        </Text>
      </Td>
      <Td
        border={lastItem ? 'none' : null}
        borderBottomColor="#56577A"
        padding={'16px 0px'}
        onClick={() => {
          history.push(`/admin/detail/customer/${id}`);
        }}
      >
        <Text fontSize="sm" color="#fff" fontWeight="normal">
          {phone || '0987654321'}
        </Text>
      </Td>
      <Td border={lastItem ? 'none' : null} borderBottomColor="#56577A" padding={'16px 0px'}>
        <Flex gap={4}>
          <Button
            p="0px"
            bg="transparent"
            variant="no-hover"
            onClick={() => {
              history.push(`/admin/edit/customer/${id}`);
            }}
          >
            <Text fontSize="sm" color="gray.400" fontWeight="bold" cursor="pointer">
              Edit
            </Text>
          </Button>
          <Button
            p="0px"
            bg="transparent"
            variant="no-hover"
            onClick={() => {
              deleteData(id);
              history.push(`/admin/customers`);
            }}
          >
            <Text fontSize="sm" color="gray.400" fontWeight="bold" cursor="pointer">
              Delete
            </Text>
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
