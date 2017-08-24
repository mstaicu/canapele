import React from 'react';

import { withRouter } from 'react-router-dom';

import SectionTitle from '../SectionTitle/SectionTitle';
import Carousel from '../Carousel/Carousel';
import Image from '../Image/Image';
import MenuSelectorDormitor from '../MenuSelectorDormitor/MenuSelectorDormitor';

import { topCarouselSlides, menuItems, saltele } from '../../data/CameraNoapte';

import './ContinutCameraNoapte.scss';

export default withRouter(function({ history }) {
  var topCarouselSettings = {
    onClickItem: onTopCarouselSlideClick,
  };

  function onTopCarouselSlideClick() {
    history.push('/camera-noapte-compozitii');
  }

  return (
    <div className="camera-noapte">
      <SectionTitle
        title="Dormitor"
        style={{ paddingLeft: '10px', backgroundColor: 'rgb(51, 51, 51)' }}
      />

      <Carousel settings={topCarouselSettings}>
        {topCarouselSlides.map(function(slide) {
          return (
            <div key={slide.id} className="carousel__slide">
              <Image data={slide} />
            </div>
          );
        })}
      </Carousel>

      <MenuSelectorDormitor menuItems={menuItems} />

      <div className="saltele">
        <h2 className="saltele__title saltele__title--top">
          <span>
            {'Lorem Ipsum is placeholder text commonly used in the graphic'}
          </span>
        </h2>

        <div className="saltele__carousel">
          <Carousel>
            {saltele.map(function(slide) {
              return (
                <div key={slide.id} className="carousel__slide">
                  <Image data={slide} />
                </div>
              );
            })}
          </Carousel>
        </div>

        <h2 className="saltele__title saltele__title--bottom">
          <span>
            {'Saltele'}
          </span>
        </h2>

        <p className="saltele__description">
          <span>
            {
              'Lorem Ipsum is placeholder text commonly used in the graphicLorem Ipsum is placeholder text commonly used in the graphicLorem Ipsum is placeholder text commonly used in the graphic'
            }
          </span>
        </p>

        <div className="saltele__bottom">
          <div className="left">
            {'Imagine'}
          </div>
          <div className="right">
            <p className="text">
              {
                'Lorem Ipsum is placeholder text commonly used in the graphicLorem Ipsum is placeholder text commonly used in the graphicLorem Ipsum is placeholder text commonly used in the graphic'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
