import { Button, Icon } from '@chakra-ui/react';
import React from 'react';
import { HiLightningBolt } from 'react-icons/hi';
import Clock from '../Clock';

export default function PomodoroClock() {
  return (
    <>
      <Clock />
      <Button fontFamily="Lexend" py={6} fontSize="1.2rem" colorScheme="primaryColor">
        <Icon as={HiLightningBolt} me={2} />
        Start cycle
      </Button>
    </>
  );
}
