import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';
import AppContainer from './components/AppContainer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: 'Verdana, sans-serif',
      }}
    >
      <AppContainer>
        <App />
      </AppContainer>
    </MantineProvider>
  </React.StrictMode>
);
