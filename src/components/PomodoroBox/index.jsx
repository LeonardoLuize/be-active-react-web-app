import React from 'react';
import {
  Box, Flex, Icon, Text,
} from '@chakra-ui/react';
import { HiOutlineClock } from 'react-icons/hi';
import PomodoroClock from '../PomodoroClock';

export default function PomodoroBox() {
  return (
    <Flex mt={20} flexDirection="column">
      <Flex align="center" gap={1}>
        <Text fontSize="1.2rem" fontFamily="Lexend" fontWeight={600} color="gray.300">Choose your time and start a cicle </Text>
        <Icon fontSize="1.2rem" fontWeight={600} color="gray.300" as={HiOutlineClock} />
      </Flex>
      <Box width="100%" height="3px" borderRadius="20px" background="gray.300" />
      <PomodoroClock />
    </Flex>
  );
}
