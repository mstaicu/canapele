import React from 'react';

import { withRouter } from 'react-router-dom';

import HeaderButton from '../HeaderButton/HeaderButton';

import { buttons } from '../../data/Header';

import './Header.scss';

function getButtons(currentLocation) {
  return buttons.map(function(button) {
    var buttonProperties = Object.assign(button, {
      isActive: button.path && button.path === currentLocation ? true : false,
      style: {
        width: `${(100 / buttons.length).toFixed(2)}%`,
      },
    });

    return <HeaderButton key={button.id} {...buttonProperties} />;
  });
}

export default withRouter(function({ location }) {
  return (
    <header className="header">
      <h1 className="logo">
        <span className="logo__text">
          {'MondoAcademia'}
        </span>
      </h1>

      <div className="buttons">
        {getButtons(location.pathname)}
      </div>
    </header>
  );
});
