import React, { Component } from 'react';

import enhanceWithClickOutside from 'react-click-outside';

import PropTypes from 'prop-types';

import './ImagePin.scss';

export default enhanceWithClickOutside(
  class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        boxVisible: false,
      };

      this.onPinClick = this.onPinClick.bind(this);
      this.getPinBoxClassnames = this.getPinBoxClassnames.bind(this);
      this.getPinBoxStyle = this.getPinBoxStyle.bind(this);
      this.hidePin = this.hidePin.bind(this);
    }

    handleClickOutside() {
      this.hidePin();
    }

    onPinClick() {
      this.setState({
        boxVisible: true,
      });
    }

    hidePin() {
      this.setState({
        boxVisible: false,
      });
    }

    getPinBoxClassnames() {
      var classNames = ['pin__box'];

      if (this.state.boxVisible) {
        classNames.push('pin__box--visible');
      }

      return classNames.join(' ');
    }

    getPinBoxStyle() {
      var { id, style } = this.props.pin;

      return {
        top: `${style.top}px`,
        left: `${style.left}px`,
        zIndex: 10 + Number(id),
      };
    }

    render() {
      var { pin } = this.props;

      return (
        <div className="pin" style={pin.style}>
          <div className="pin__icon" onClick={this.onPinClick} />

          <div
            className={this.getPinBoxClassnames()}
            style={this.getPinBoxStyle()}
          >
            <div className="pin__box__image">
              <img src={pin.image} />
            </div>

            <h4 className="pin__box__title">
              {pin.title}
            </h4>

            <div className="pin__box__description">
              {pin.description}
            </div>
          </div>
        </div>
      );
    }
  },
);
