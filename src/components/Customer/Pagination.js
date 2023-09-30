import React, { useState } from 'react';
import { ChakraProvider, Flex, Container, Box, ButtonGroup, Button } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';
import './style/Pagiante.css';

const Pagination = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel="next >"
        pageRangeDisplayed={5}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        disabledClassName="paginate__disabled"
        activeClassName="paginate__active"
      />
    </Flex>
  );
};

export default Pagination;
