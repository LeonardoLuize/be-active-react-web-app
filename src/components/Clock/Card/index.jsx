/* eslint-disable react/prop-types */
import React from 'react';
import { Flex } from '@chakra-ui/react';

export default function Card({ time }) {
  const [timeLeft, timeRight] = String(time).padStart(2, '0').split('');

  return (
    <Flex
      display="flex"
      align="center"
      justify="center"
      fontSize={['4rem', '5.4rem']}
      fontWeight="bold"
      fontFamily="Rajdhani"
      color="#4D4D4D"
      width="100%"
      boxShadow="-1px 6px 21px -8px rgba(0, 0, 0, 0.25)"
    >
      <Flex
        align="center"
        justify="center"
        bg="white"
        height={['200px', '220px']}
        width={['100%', '100%', '100%', '110px']}
        borderRight="2px solid #dddddd"
        borderRadius="8px 0px 0px 8px"
      >
        {timeLeft}
      </Flex>
      <Flex
        align="center"
        justify="center"
        bg="white"
        height={['200px', '220px']}
        width={['100%', '100%', '100%', '110px']}
        borderRadius="0px 8px 8px 0px"
      >
        {timeRight}
      </Flex>
    </Flex>
  );
}
