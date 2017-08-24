import React from 'react';

import { Link } from 'react-router-dom';

import './HeaderButton.scss';

export default function({ path, linkText, isActive, style, handlers }) {
  function getButtonClassname() {
    var classNames = ['header__button'];

    isActive && classNames.push('header__button--active');

    return classNames.join(' ');
  }

  function getLinkComponent() {
    return (
      <Link to={path} className={getButtonClassname()} style={style}>
        {linkText}
      </Link>
    );
  }

  function getHandlerComponent() {
    return (
      <a
        onClick={handlers.onClick}
        className={getButtonClassname()}
        style={style}
      >
        {linkText}
      </a>
    );
  }

  return path ? getLinkComponent() : getHandlerComponent();
}
