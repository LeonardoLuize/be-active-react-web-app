/* eslint-disable react/jsx-no-bind */
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Button,
  Flex, Input, Text,
} from '@chakra-ui/react';
import { CountdownContext } from '../../context/CountdownContext';

export default function SettingsCard() {
  const [focusTime, setFocusTime] = useState(25);
  const [restTime, setRestTime] = useState(5);

  const { updateTime } = useContext(CountdownContext);

  function handleUpdateTime() {
    if (focusTime > 99 || restTime > 99) {
      if (focusTime > 99) setFocusTime(25);
      if (restTime > 99) setRestTime(5);

      toast.error('Time must be lower or equal to 99 minutes', {
        theme: 'colored',
        position: 'bottom-center',
      });

      return;
    }

    if (focusTime < 1 || restTime < 1) {
      if (focusTime < 1) setFocusTime(25);
      if (restTime < 1) setRestTime(5);

      toast.error('Time must be greater or equal to 1 minute', {
        theme: 'colored',
        position: 'bottom-center',
      });

      return;
    }
    toast.success('Time updated with success', {
      theme: 'colored',
      position: 'bottom-center',
    });

    updateTime(focusTime, restTime);
  }

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
          <Input id="focusTimeInput" type="number" value={focusTime} onChange={(e) => setFocusTime(e.target.value)} />
        </Flex>
        <Flex flexDirection="column">
          <Text as="label" htmlFor="restTimeInput">
            Rest Time
          </Text>
          <Input id="restTimeInput" type="number" value={restTime} onChange={(e) => setRestTime(e.target.value)} />
        </Flex>
      </Flex>
      <Button onClick={handleUpdateTime} colorScheme="secondaryColor">
        Update Time
      </Button>
    </Flex>
  );
}
