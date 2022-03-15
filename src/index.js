import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import './index.scss';
import { Header } from './Header/header';
import { Nav } from './Nav/Nav';
import { Footer } from './Footer/footer';
import Pam from './Pam';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(

  <React.StrictMode>
    <Header />
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Pam />
      </BrowserRouter>
    </Provider>
    <Footer />
  </React.StrictMode >
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
