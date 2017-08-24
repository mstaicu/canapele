import React, { Component } from 'react';

import MediaQuery from 'react-responsive';

import BannerOferta from '../BannerOferta/BannerOferta';
import Header from '../Header/Header';
import MobileHeader from '../MobileHeader/MobileHeader';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import './App.scss';

export default function() {
  return (
    <div className="app">
      <BannerOferta />
      <MediaQuery query="(max-width: 414px)">
        <MobileHeader />
      </MediaQuery>
      <MediaQuery query="(min-width: 415px)">
        <Header />
      </MediaQuery>
      <Main />
      <Footer />
    </div>
  );
}
