import React, { Component } from 'react';

import { Gmaps, Marker } from 'react-gmaps';

import './Map.scss';

const coords = {
  lat: 47.17367,
  lng: 27.56028900000001,
};

const MY_API_KEY = 'AIzaSyBFVbQM2FyEwx4S9c_jUIEGPSwaWLQthd4';

const params = { v: '3.exp', key: MY_API_KEY };

export default function() {
  return (
    <div className="footer__map">
      <Gmaps
        width={'100%'}
        height={'100%'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={18}
        params={params}
      >
        <Marker lat={coords.lat} lng={coords.lng} draggable={true} />
      </Gmaps>
    </div>
  );
}
