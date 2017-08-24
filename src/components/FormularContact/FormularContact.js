import React, { Component } from 'react';

import './FormularContact.scss';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      buttonText: 'Trimite',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(event) {
    event.preventDefault();

    this.setState({
      buttonText: 'Se trimite..',
    });

    var promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('#done');
      }, 1000);
    });

    var response = await promise;

    this.setState({
      buttonText: 'Mesajul a fost #trimis 💪🏻',
    });

    //Do stuff with this.state
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="footer__contact">
        <form onSubmit={this.onSubmit} className="contact">
          <div className="contact__top">
            <div className="top__left">
              <input
                type="text"
                placeholder="Nume"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                className="contact__name"
              />
            </div>

            <div className="top__right">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                className="contact__email"
              />
            </div>
          </div>

          <div className="contact__bottom">
            <textarea
              placeholder="Mesaj"
              name="message"
              value={this.state.message}
              onChange={this.onChange}
              className="contact__message"
            />

            <button className="contact__submit">
              {this.state.buttonText}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
