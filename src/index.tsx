import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/style/GlobalStyle';

const theme = {
  colorWhite: '#FFF',
  colorGray: '#565353',
  colorBgNavbar: '#3F444A',  // colorBgNavbar: '#019267', colorBgHeader: '#00C897',
  colorBgHeader: '#565353',
  colorBlack: '#020203',
  colorAllBlack: '#000',
  colorGrayBorder: '#E8E8E8',
  fontColorDarkBlue: '#093366',
  colorDarkGreen: '#196C3D',
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
