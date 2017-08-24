import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';

import { slide as Menu } from 'react-burger-menu';

import HeaderButton from '../HeaderButton/HeaderButton';

import { buttons } from '../../data/Header';

import './MobileHeader.scss';

var styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px',
    left: '10px',
    top: '10px',
  },
  bmBurgerBars: {
    background: '#fff',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

export default withRouter(
  class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        menuIsOpened: false,
      };
    }

    render() {
      var { location } = this.props;

      return (
        <header className="mobile-header">
          <Menu
            styles={styles}
            isOpen={this.state.menuIsOpened}
            className="mobile-header__menu"
          >
            <div className="buttons">
              {buttons.map(button => {
                var buttonClassnames = ['header__button'];

                if (button.path && button.path === location.pathname) {
                  buttonClassnames.push('header__button--active');
                }

                return (
                  <Link
                    key={button.id}
                    to={button.path}
                    className={buttonClassnames.join(' ')}
                  >
                    {button.linkText}
                  </Link>
                );
              })}
            </div>
          </Menu>

          <div className="mobile-header__logo">
            <h1>
              <span className="logo__text">
                {'MondoAcademia'}
              </span>
            </h1>
          </div>
        </header>
      );
    }
  },
);
