import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex width="100%" align="center" justify="center" background="linear-gradient(90.22deg, #DB3069 -6.49%, #EA7C03 105.83%);">
      <Flex width="100%" maxWidth="1000px" align="center" justify="start" py={2}>
        <Image src="./assets/logo.svg" alt="logo" />
      </Flex>
    </Flex>
  );
}
