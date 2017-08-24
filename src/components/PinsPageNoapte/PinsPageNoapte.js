import React from 'react';

import Image from '../Image/Image';
import SectionTitle from '../SectionTitle/SectionTitle';

import './PinsPageNoapte.scss';

import { images } from '../../data/PinsPageNoapte';

export default function({ history }) {
  return (
    <div className="pins-page-noapte">
      <SectionTitle
        title="Camera de noapte"
        style={{ backgroundColor: 'rgb(51, 51, 51)' }}
      />

      <div className="images-container">
        {images.map(function(image) {
          return <Image key={image.id} data={image} />;
        })}
      </div>

      <button className="back-button" onClick={history.goBack}>
        Inapoi in site
      </button>
    </div>
  );
}
