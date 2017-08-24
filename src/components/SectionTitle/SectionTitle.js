import React from 'react';

import './SectionTitle.scss';

export default function({ title, style }) {
  return (
    <h2 className="section-title" style={style}>
      <span className="section-title__text">
        {title}
      </span>
    </h2>
  );
}
