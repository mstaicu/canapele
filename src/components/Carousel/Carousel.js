import React, { Component } from 'react';

import { Carousel } from 'react-responsive-carousel';

import './Carousel.scss';

export default function({ settings, children }) {
  var carouselSettings = Object.assign(
    {
      showStatus: false,
      showIndicators: false,
      showThumbs: false,
      infiniteLoop: true,
      autoPlay: true,
      stopOnHover: true,
    },
    settings,
  );

  return (
    <Carousel {...carouselSettings}>
      {children}
    </Carousel>
  );
}
