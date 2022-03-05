import { extendTheme } from '@chakra-ui/react';

const colors = {
    primaryColor: {
        600: '#6FE4B5',
        500: '#7CFFCB',
        400: '#80FFCC'
    },
    secondaryColor: {
        600: '#5C164E',
        500: '#9B287B',
        400: '#B02D8B',
        300: '#D035A4'
    }
}

export const theme = extendTheme({ colors })
