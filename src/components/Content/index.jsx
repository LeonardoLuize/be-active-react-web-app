import React from 'react';
import { Flex } from '@chakra-ui/react';
import PomodoroBox from '../PomodoroBox';
import SettingsCard from '../SettingsCard';

export default function Content() {
  return (
    <Flex width="100%" align="center" justify="center">
      <Flex mt={20} width="100%" maxWidth="1000px" algin="center" justify="space-between">
        <PomodoroBox />
        <Flex>
          <SettingsCard />
        </Flex>
      </Flex>
    </Flex>
  );
}
