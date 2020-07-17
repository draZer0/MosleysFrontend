import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Auto from './components/auto/Auto';
import Caroussel from './components/caroussel/Caroussel';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Auto />
    <Caroussel />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
