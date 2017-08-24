import React from 'react';

import FooterInformations from '../FooterInformations/FooterInformations';
import Map from '../Map/Map';
import FormularContact from '../FormularContact/FormularContact';

import './Footer.scss';

export default function() {
  return (
    <footer>
      <FooterInformations />
      <Map />
      <FormularContact />
    </footer>
  );
}
