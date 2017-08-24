import React from 'react';

import ImageOverlay from '../ImageOverlay/ImageOverlay';

import './Image.scss';

function renderBottomInformation(data) {
  return (
    <div className="image-bottom">
      <h3 className="image__title">
        {data.title}
      </h3>

      <p className="image__description">
        {data.description}
      </p>
    </div>
  );
}

export default function({ data }) {
  return (
    <div className="image">
      <div className="image-top">
        <img src={data.src} alt="Image of the showroom" />

        {data.pins && <ImageOverlay pins={data.pins} />}
      </div>

      {data.title && data.description && renderBottomInformation(data)}
    </div>
  );
}
