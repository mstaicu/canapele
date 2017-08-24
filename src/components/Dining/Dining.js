import React from 'react';

import SectionTitle from '../SectionTitle/SectionTitle';
import Carousel from '../Carousel/Carousel';
import Image from '../Image/Image';

import './Dining.scss';

export default function({ leftCarouselData, rightCarouselData }) {
  return (
    <div className="dining">
      <div className="left">
        <SectionTitle title="Dining" style={{ paddingLeft: '10px' }} />

        <Carousel>
          {leftCarouselData.map(function(slide) {
            return (
              <div key={slide.id} className="carousel__slide">
                {/* <img src={slide.image.src} /> */}
                <Image data={slide} />
              </div>
            );
          })}
        </Carousel>

        <div className="info">
          <SectionTitle
            title="Is this really #necessary?"
            style={{ marginBottom: '20px' }}
          />

          <p className="info__description">
            {
              'Curabitur congue fringilla congue. Nam convallis commodo vulputate. Nam vel lectus et neque condimentum maximus vel vitae metus. Donec luctus augue sed imperdiet cursus. Sed dignissim sollicitudin tortor, finibus faucibus quam tempus ut. Nullam condimentum maximus nisi, ac tristique massa tempus in. '
            }
          </p>
        </div>
      </div>

      <div className="right">
        <SectionTitle
          title="Draperii"
          style={{
            paddingLeft: '10px',
            backgroundColor: '#fff',
            color: 'rgb(50, 50, 50)',
          }}
        />

        <Carousel>
          {rightCarouselData.map(function(slide) {
            return (
              <div key={slide.id} className="carousel__slide">
                {/* <img src={slide.image.src} /> */}
                <Image data={slide} />
              </div>
            );
          })}
        </Carousel>

        <div className="info">
          <p className="info__description">
            {
              'Curabitur congue fringilla congue. Nam convallis commodo vulputate. Nam vel lectus et neque condimentum maximus vel vitae metus. Donec luctus augue sed imperdiet cursus. Sed dignissim sollicitudin tortor, finibus faucibus quam tempus ut. Nullam condimentum maximus nisi, ac tristique massa tempus in. '
            }
          </p>
        </div>
      </div>
    </div>
  );
}
