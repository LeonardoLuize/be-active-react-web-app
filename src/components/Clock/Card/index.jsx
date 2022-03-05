/* eslint-disable react/prop-types */
import React from 'react';
import { Flex } from '@chakra-ui/react';

export default function Card({ firstNumber, secondNumber }) {
  return (
    <Flex
      display="flex"
      align="center"
      justify="center"
      fontSize="5.4rem"
      fontWeight="bold"
      fontFamily="Rajdhani"
      color="#4D4D4D"
      boxShadow="-1px 6px 21px -8px rgba(0, 0, 0, 0.25)"
    >
      <Flex
        align="center"
        justify="center"
        bg="white"
        height="220px"
        width="110px"
        borderRight="2px solid #dddddd"
        borderRadius="8px 0px 0px 8px"
      >
        {firstNumber}
      </Flex>
      <Flex
        align="center"
        justify="center"
        bg="white"
        height="220px"
        width="110px"
        borderRadius="0px 8px 8px 0px"
      >
        {secondNumber}
      </Flex>
    </Flex>
  );
}
