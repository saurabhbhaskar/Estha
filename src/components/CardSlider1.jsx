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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card1 from './Card1';

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
      <Carousel className="bg-gradient-to-b from-[#f8edf7] via-[#ffffff]  to-[#ffffff] dark:from-indigo-900 dark:via-purple-900 dark:to-teal-900 dark:text-gray-100 py-6 flex flex-col sm:py-12 items-center" opts={{
    align: "start",
    loop: true,
  }}>
      <img
        src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt57caa9a215ff63d2/5f0e35a09be1ce01c562aa44/SB_SVG_Divider_01.svg"
        alt="line"
        className="transform translate-y-[-68px]"
      />
      
      <div className="relative sm:max-w-7xl sm:mx-auto items-center">
      <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <Card1 {...card} className="py-12 px-6" />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="bg-red-100 h-20 w-10 border-4" />
      <CarouselNext className="bg-red-100 h-20 w-10 border-4" />
        </div>
      </Carousel>
    </>
  );
}

export default CardSlider;

