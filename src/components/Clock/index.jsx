import React from 'react';
import {
  Flex, Text,
} from '@chakra-ui/react';
import Card from './Card';

export default function Clock() {
  return (
    <Flex
      align="center"
      my={8}
      spacing={0}
    >
      <Card firstNumber={0} secondNumber={0} />
      <Text color="#4D4D4D" px={7} fontFamily="Rajdhani" fontSize="3rem">:</Text>
      <Card firstNumber={0} secondNumber={0} />
    </Flex>
  );
}
