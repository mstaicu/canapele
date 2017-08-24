import React from 'react';

import Image from '../Image/Image';
import SectionTitle from '../SectionTitle/SectionTitle';

import './PinsPageZi.scss';

import { images } from '../../data/PinsPageZi';

export default function({ history }) {
  return (
    <div className="pins-page-zi">
      <SectionTitle title="Camera de zi" />

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
