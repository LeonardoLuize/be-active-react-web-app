import React from 'react';
import {
  Box, Flex, Text,
} from '@chakra-ui/react';
import PomodoroClock from '../PomodoroClock';

export default function PomodoroBox() {
  return (
    <Flex flexDirection="column">
      <Flex align="center" gap={1}>
        <Text fontSize="1.2rem" fontFamily="Lexend" fontWeight={600} color="gray.300">Choose your time and start a cycle </Text>
      </Flex>
      <Box width="100%" height="3px" borderRadius="20px" background="gray.300" />
      <PomodoroClock />
    </Flex>
  );
}
