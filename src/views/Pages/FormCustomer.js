import React, { useEffect, useState } from 'react';

// Chakra imports
import { Flex, Input, Button, Icon, Text, Th, Thead, Tr, Container, FormControl, FormLabel } from '@chakra-ui/react';

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
import Pagination from 'components/Customer/Pagination';
import { useNavigate, useParams } from 'react-router-dom';
import { useCustomerContext } from 'layouts/CustomerContex';

function EditCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();

  const { customers, updateData, addData } = useCustomerContext();
  useEffect(() => {
    console.log(Number(id), customers);
    if (id !== undefined) {
      const data = customers.filter((item) => item.id === Number(id));
      if (data !== []) {
        const customer = data[0];
        setName(customer?.name);
        setAge(customer?.age);
        setEmail(customer?.email);
        setPhone(customer?.phone);
        setAddress(customer?.address);
      }
      console.log(data);
    }
  }, [id]);
  return (
    <Flex direction="column" pt={{ base: '120px', md: '75px' }}>
      {/* Authors Table */}
      <CardBody>
        <Container
          maxW="lg"
          centerContent
          p={8}
          variant="simple"
          color="#fff"
          background="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
          borderRadius={12}
        >
          <FormControl id="name" isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input type="text" value={name || ''} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="age" isRequired>
            <FormLabel>Age</FormLabel>
            <Input type="number" value={age || ''} onChange={(e) => setAge(e.target.value)} />
          </FormControl>
          <FormControl id="phone" mt={4} isRequired>
            <FormLabel>Phone</FormLabel>
            <Input type="email" value={phone || ''} onChange={(e) => setPhone(e.target.value)} />
          </FormControl>
          <FormControl id="email" mt={4} isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email || ''} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="address" mt={4} isRequired>
            <FormLabel>Address</FormLabel>
            <Input type="text" value={address || ''} onChange={(e) => setAddress(e.target.value)} />
          </FormControl>
          <Button
            colorScheme="teal"
            mt={8}
            isFullWidth
            onClick={() => {
              if (id !== undefined) {
                updateData({ id, name, age, email });
                navigate('/admin/customers');
              } else {
                addData({ name, age, email });
                navigate('/admin/customers');
              }
            }}
          >
            Save
          </Button>
          <Pagination />
        </Container>
      </CardBody>
    </Flex>
  );
}

export default EditCustomer;
