import React from 'react';
import Slider from 'react-slick';
import Card from '../components/Card';
import Header from '../components/Header';
import temple1 from '../image/temple1.png';
import buddha1 from '../image/buddha1.png';
import church1 from '../image/church1.png';
import masjid3 from '../image/masjid3.png';
import sikh1 from '../image/sikh1.png';
import '../App.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PrevArrow = ({ onClick }) => (
  <button onClick={onClick} className="slick-prev" style={{ fontSize: '2rem', color: '#000', marginRight: '-3rem', marginLeft: '-4rem'}}>
    &#9664;
  </button>
);

const NextArrow = ({ onClick }) => (
  <button onClick={onClick} className="slick-next" style={{ fontSize: '2rem', color: '#000', margin: '0.5rem'}}>
    &#9654;
  </button>
);

function CardSlider() {
  const cards = [
    { imageSrc: temple1, title: 'Hinduism', colour: 'hover:text-orange-600' },
    { imageSrc: masjid3, title: 'Islam', colour: 'hover:text-green-700' },
    { imageSrc: buddha1, title: 'Buddhism', colour: 'hover:text-orange-400' },
    { imageSrc: church1, title: 'Christianity', colour: 'hover:text-blue-800' },
    { imageSrc: sikh1, title: 'Sikhism', colour: 'hover:text-red-700' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-gradient-to-b from-indigo-50 via-teal-50 to-[#ffffff] dark:from-indigo-900 dark:via-purple-900 dark:to-teal-900 dark:text-gray-100 py-6 flex flex-col sm:py-12 items-center">
        <div className="relative pb-10 pt-20 sm:max-w-7xl sm:mx-auto items-center">
          <Slider {...sliderSettings}>
            {cards.map((card, index) => (
              <div key={index} className="px-2">
                <Card {...card} className="py-12 px-6" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default CardSlider;

