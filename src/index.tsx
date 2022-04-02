import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/style/GlobalStyle';

const theme = {
  bgColor: '#F7F7F7',
  bgColorGray: '#E5E5E5',
  orangeColor: '#F5A31A',
  fontColorGreen: '#16C79A',
  fontColorWhite: '#F7F7F7',
  fontColorGray: '#3F3F44',
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
