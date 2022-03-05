import { extendTheme } from '@chakra-ui/react';

const colors = {
  primaryColor: {
    600: '#E88A23',
    500: '#FF8804',
    400: '#FF981F',
  },
  secondaryColor: {
    600: '#BE2B5C',
    500: '#DB3069',
    400: '#E83E76',
    300: '#FF709F',
  },
};

// eslint-disable-next-line import/prefer-default-export
export const theme = extendTheme({ colors });
