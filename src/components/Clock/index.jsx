import React, { useContext } from 'react';
import {
  Flex, Text,
} from '@chakra-ui/react';
import Card from './Card';
import { CountdownContext } from '../../context/CountdownContext';

export default function Clock() {
  const {
    focusMinutes, focusSeconds,
  } = useContext(CountdownContext);

  return (
    <Flex
      align="center"
      my={8}
      spacing={0}
    >
      <Card time={focusMinutes} />
      <Text color="#4D4D4D" px={7} fontFamily="Rajdhani" fontSize="3rem">:</Text>
      <Card time={focusSeconds} />
    </Flex>
  );
}
