import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <>
      <Header />
      <Content />
      <ToastContainer />
    </>
  );
}

export default App;
