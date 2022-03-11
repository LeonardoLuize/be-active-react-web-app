import { Button, Icon } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { HiLightningBolt, HiOutlineXCircle } from 'react-icons/hi';
import { CountdownContext } from '../../context/CountdownContext';
import Clock from '../Clock';

export default function PomodoroClock() {
  const {
    startCountdown, resetCountdown, isActive, hasFinished,
  } = useContext(CountdownContext);

  return (
    <>
      <Clock />
      {
        !isActive && !hasFinished
          ? (
            <Button onClick={startCountdown} fontFamily="Lexend" py={6} fontSize="1.2rem" colorScheme="primaryColor" size="lg">
              <Icon as={HiLightningBolt} me={2} />
              Start cycle
            </Button>
          )
          : (
            <Button
              onClick={resetCountdown}
              fontFamily="Lexend"
              py={6}
              fontSize="1.2rem"
              colorScheme="secondaryColor"
              variant="outline"
              borderWidth="2px"
              size="lg"
              _hover={{
                bg: 'secondaryColor.500',
                color: 'white',
                border: '2px solid #DB3069',
              }}
            >
              <Icon width="22px" height="22px" as={HiOutlineXCircle} me={2} />
              {!hasFinished ? 'Interrupt cycle' : 'Stop rest time' }
            </Button>
          )
      }
    </>
  );
}
