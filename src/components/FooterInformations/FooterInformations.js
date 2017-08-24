import React from 'react';

import './FooterInformations.scss';

export default function() {
  return (
    <div className="footer__informations">
      <div className="left">
        <h3 className="store__label">
          {'Localizare'}
        </h3>

        <p className="store__address">
          {`
            Strada Păcurari nr. 114 (intersecție cu Str. Petru Poni), Bloc 581,
            Parter (vis-a-vis de benzinăria MOL)
            `}
        </p>
      </div>

      <div className="right">
        {/* <h3 className="store__label">
          {'Contact'}
          </h3>
        */}
        <div className="store__schedule">
          <h3 className="store__label">
            {'Program'}
          </h3>

          <p className="store__schedule__hours">
            {'L-V 10:00 - 18:00'}
          </p>

          <p className="store__schedule__hours">
            {'S 10:00 - 14:00'}
          </p>
        </div>

        <div className="store__phone">
          <h3 className="store__label">
            {'Telefon'}
          </h3>
          <p className="store__phone__no">
            <a href="tel:004723590580">
              {'0723 590 580'}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
