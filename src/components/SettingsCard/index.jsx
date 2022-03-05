import React from 'react';
import {
  Button,
  Flex, Input, Text,
} from '@chakra-ui/react';

export default function SettingsCard() {
  return (
    <Flex
      mt={5}
      p={4}
      gap={2}
      height="fit-content"
      bg="white"
      boxShadow="-1px 6px 21px -8px rgba(0, 0, 0, 0.25)"
      borderRadius="6px"
      fontFamily="Lexend"
      flexDirection="column"
      width="450px"
    >
      <Flex gap={2}>
        <Flex flexDirection="column">
          <Text as="label" htmlFor="focusTimeInput">
            Focus Time
          </Text>
          <Input id="focusTimeInput" type="number" />
        </Flex>
        <Flex flexDirection="column">
          <Text as="label" htmlFor="restTimeInput">
            Rest Time
          </Text>
          <Input id="restTimeInput" type="number" />
        </Flex>
      </Flex>
      <Button colorScheme="secondaryColor">
        Update Time
      </Button>
    </Flex>
  );
}
