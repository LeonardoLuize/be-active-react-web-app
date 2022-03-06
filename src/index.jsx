import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { theme } from './theme/theme';
import CountdownProvider from './context/CountdownContext';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CountdownProvider>
        <App />
      </CountdownProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
