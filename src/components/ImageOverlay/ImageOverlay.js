import React, { Component } from 'react';

import ImagePin from '../ImagePin/ImagePin';

import './ImageOverlay.scss';

export default function({ pins }) {
  return (
    <div className="img__overlay">
      {pins.map(function(pin) {
        return <ImagePin key={pin.id} pin={pin} />;
      })}
    </div>
  );
}
