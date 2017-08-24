import React, { Component } from 'react';

import Carousel from '../Carousel/Carousel';
import Image from '../Image/Image';

import './MenuSelectorDormitor.scss';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeButtonIndex: 0,
    };

    this.switchMenuItem = this.switchMenuItem.bind(this);
    this.getButtonClassName = this.getButtonClassName.bind(this);
    this.getActiveMenuCarouselSlides = this.getActiveMenuCarouselSlides.bind(
      this,
    );
    this.getActiveDescription = this.getActiveDescription.bind(this);
    this.getActiveMenuItem = this.getActiveMenuItem.bind(this);
  }

  switchMenuItem(newIndex) {
    this.setState({
      activeButtonIndex: newIndex,
    });
  }

  getButtonClassName(buttonIndex) {
    var classnames = ['center__button'];

    if (buttonIndex === this.state.activeButtonIndex) {
      classnames.push('center__button--active');
    }

    return classnames.join(' ');
  }

  getActiveMenuItem() {
    var { menuItems } = this.props;

    return menuItems && menuItems[this.state.activeButtonIndex];
  }

  getActiveMenuCarouselSlides() {
    var activeMenuItem = this.getActiveMenuItem();

    return activeMenuItem && activeMenuItem.carouselSlides;
  }

  getActiveDescription() {
    var activeMenuItem = this.getActiveMenuItem();

    return activeMenuItem && activeMenuItem.description;
  }

  render() {
    var { menuItems } = this.props;

    return (
      <div className="menu-selector-dormitor">
        <div className="top">
          <div className="left">
            <p className="text">
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac. Imperdiet proin fermentum leo vel orci. Faucibus turpis in eu mi. Id diam vel quam elementum.'
              }
            </p>
          </div>

          <div className="right">
            <p className="text">
              {'Empty'}
            </p>
          </div>
        </div>

        <div className="center">
          <div className="center__buttons">
            {menuItems.map((menuItem, menuItemIndex) => {
              return (
                <button
                  key={menuItem.id}
                  onClick={() => this.switchMenuItem(menuItemIndex)}
                  className={this.getButtonClassName(menuItemIndex)}
                >
                  {menuItem.button.text}
                </button>
              );
            })}
          </div>

          <div className="center__carousel">
            <Carousel>
              {this.getActiveMenuCarouselSlides().map(function(slide) {
                return <Image key={slide.id} data={slide} />;
              })}
            </Carousel>
          </div>
        </div>

        <div className="bottom">
          <p className="description">
            {this.getActiveDescription()}
          </p>
        </div>
      </div>
    );
  }
}
