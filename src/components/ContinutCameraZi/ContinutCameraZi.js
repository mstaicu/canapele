import React from 'react';

import { withRouter } from 'react-router-dom';

import SectionTitle from '../SectionTitle/SectionTitle';

import Carousel from '../Carousel/Carousel';
import Image from '../Image/Image';

import MenuSelector from '../MenuSelector/MenuSelector';
import Dining from '../Dining/Dining';

import {
  topCarouselSlides,
  menuItems,
  dinningCarousel,
  draperiiCarousel,
} from '../../data/CameraZi';

import './ContinutCameraZi.scss';

export default withRouter(function({ history }) {
  var topCarouselSettings = {
    onClickItem: onTopCarouselSlideClick,
  };

  function onTopCarouselSlideClick() {
    history.push('/camera-zi-compozitii');
  }

  return (
    <div>
      <SectionTitle title="Camera de zi" style={{ paddingLeft: '10px' }} />

      <div className="top-carousel">
        <Carousel settings={topCarouselSettings}>
          {topCarouselSlides.map(function(slide) {
            return (
              <div key={slide.id} className="carousel__slide">
                {/* <img src={slide.image.src} /> */}
                <Image data={slide} />
              </div>
            );
          })}
        </Carousel>
      </div>

      <MenuSelector menuItems={menuItems} />

      <Dining
        leftCarouselData={dinningCarousel}
        rightCarouselData={draperiiCarousel}
      />
    </div>
  );
});
