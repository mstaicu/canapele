import React, { Component } from 'react';

import './BannerOferta.scss';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bannerClassname: ['banner'],
    };

    this.onBannerButtonClick = this.onBannerButtonClick.bind(this);
    this.hideBanner = this.hideBanner.bind(this);
  }

  onBannerButtonClick(event) {
    event.preventDefault();

    localStorage.setItem('bannerExpiration', new Date().getTime());

    this.hideBanner();
  }

  hideBanner() {
    this.setState({
      bannerClassname: [...this.state.bannerClassname, 'banner--hidden'],
    });
  }

  componentDidMount() {
    var bannerExpiration = Number(localStorage.getItem('bannerExpiration'));

    if (
      bannerExpiration &&
      bannerExpiration < bannerExpiration + (24 * 60 * 60 + 1) * 1000
    ) {
      this.hideBanner();
    }
  }

  render() {
    return (
      <div className={this.state.bannerClassname.join(' ')}>
        <img
          src="/assets/images/banner/1.jpg"
          alt="Site banner"
          className="banner__image"
        />
        <div className="banner__overlay">
          <div className="banner__info">
            <h1 className="banner__title">
              {'Lorem ipsum'}
            </h1>

            <p className="banner__description">
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            </p>

            <button
              className="banner__button"
              onClick={this.onBannerButtonClick}
            >
              <h4>Continua la site</h4>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
