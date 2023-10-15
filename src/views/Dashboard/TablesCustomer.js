import React, { useEffect, useState } from 'react';

// Chakra imports
import { Flex, Table, Tbody, Icon, Text, Th, Thead, Tr, Button } from '@chakra-ui/react';

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
import { AddIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useCustomerContext } from 'layouts/CustomerContex';

function TablesCustomer() {
  // const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();
  // const getCustomers = async () => {
  //   const response = await cusomterApi.getList();
  //   if (response !== undefined) {
  //     setCustomers(response);
  //   }
  //   console.log(response);
  // };
  // useEffect(() => {
  //   getCustomers();
  // }, []);

  const { customers, updateData, deleteData } = useCustomerContext();
  return (
    <Flex direction="column" pt={{ base: '120px', md: '75px' }}>
      {/* Authors Table */}
      <Card overflowX={{ sm: 'scroll', xl: 'hidden' }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="lg" color="#fff" fontWeight="bold">
            Customers
          </Text>
        </CardHeader>
        <Button
          maxW={'48'}
          onClick={() => {
            navigate(`/admin/add/customer`);
          }}
        >
          <AddIcon />
          Add Coustomer
        </Button>
        <CardBody>
          <Table variant="simple" color="#fff">
            <Thead>
              <Tr my=".8rem" ps="0px" color="gray.400">
                <Th
                  ps="0px"
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                  padding={'16px 0px'}
                  width={'10%'}
                >
                  ID
                </Th>
                <Th
                  ps="0px"
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                  padding={'16px 0px'}
                  width={'25%'}
                >
                  Full name
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                  padding={'16px 0px'}
                  width={'10%'}
                >
                  Age
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                  padding={'16px 0px'}
                  width={'20%'}
                >
                  Email
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                  padding={'16px 0px'}
                  width={'15%'}
                >
                  Phone
                </Th>
                <Th borderBottomColor="#56577A" width={'10%'}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {customers !== undefined &&
                customers?.map((row, index, arr) => {
                  return (
                    <TablesTableRow
                      id={row.id}
                      fullname={row.name}
                      age={row.age}
                      email={row.email}
                      phone={row.phone}
                      lastItem={index === customers.length - 1 ? true : false}
                    />
                  );
                })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default TablesCustomer;
