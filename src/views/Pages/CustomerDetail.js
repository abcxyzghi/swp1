import React, { useEffect, useState } from 'react';

// Chakra imports
import {
  Flex,
  Box,
  Avatar,
  Heading,
  Text,
  VStack,
  Thead,
  Tr,
  Container,
  FormControl,
  FormLabel,
  Button,
} from '@chakra-ui/react';

// Custom components
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';

// Table Components
import TablesProjectRow from 'components/Tables/TablesProjectRow';
import TablesTableRow from 'components/Tables/TablesTableRow';

// Data
import { tablesProjectData, tablesTableData } from 'variables/general';

// Icons
import { AiFillCheckCircle } from 'react-icons/ai';
import cusomterApi from 'api/customerApi';
import { EditIcon } from '@chakra-ui/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useCustomerContext } from 'layouts/CustomerContex';

function CustomerDetail() {
  const [customer, setCustomer] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const { customers, updateData } = useCustomerContext();
  useEffect(() => {
    console.log(Number(id), customers);
    if (id !== undefined) {
      const data = customers.filter((item) => item.id === Number(id));
      if (data !== []) {
        setCustomer(data[0]);
      }
      console.log(data);
    }
  }, [id]);
  return (
    <Flex alignItems={'center'} justifyContent={'center'} direction="column" pt={{ base: '120px', md: '75px' }}>
      {/* Authors Table */}
      <Box
        p={8}
        w={'50vw'}
        borderWidth={1}
        borderRadius="md"
        shadow="lg"
        color={'#fff'}
        background="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
      >
        <Flex
          w={'20'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={2}
          border={'1px solid'}
          borderRadius="md"
          cursor={'pointer'}
          onClick={() => {
            navigate(`/admin/edit/customer/${id}`);
          }}
        >
          <EditIcon />
          Edit
        </Flex>
        <Flex alignItems={'center'} justifyContent={'center'} direction="column">
          <Avatar size="xl" mb={4} />
          <Heading as="h2" size="xl" mb={4}>
            {customer?.name}
          </Heading>
          <VStack align="start" spacing={4}>
            <Text fontSize="lg">
              <strong>Age:</strong> {customer?.age}
            </Text>
            <Text fontSize="lg">
              <strong>Phone:</strong> {customer?.phone || '0987654321'}
            </Text>
            <Text fontSize="lg">
              <strong>Email:</strong> {customer?.email}
            </Text>
            <Text fontSize="lg">
              <strong>Address:</strong> {customer?.address || 'Hồ Chí Minh'}
            </Text>
            {/* Hiển thị các trường thông tin khác của khách hàng tại đây */}
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
}

export default CustomerDetail;
