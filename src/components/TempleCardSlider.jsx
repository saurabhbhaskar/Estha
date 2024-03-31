import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import '../App.css';

import TempleCard from './TempleCard';

import templeData from '../datas/templeData';

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

export default function TempleCardSlider(){
  return (
    <div className="App pb-10">
      <div className="w-full mb-6 lg:mb-0 translate-x-10 translate-y-10">
        <h1 className="sm:text-2xl text-xl font-bold title-font mb-2 text-gray-900">Eminent Pilgrimage Destinations</h1>
        <div className="h-1 w-20 mt-5 bg-indigo-500 rounded"></div>
      </div>
      <Swiper
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 2,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        slidesPerView={3}
        centeredSlides
        spaceBetween={3}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        style={{ height: '400px' }}
      >
        {templeData.map((temple, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <TempleCard
              templeName={temple.templeName}
              city={temple.city}
              state={temple.state}
              religionName={temple.religionName}
              imageUrl={temple.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
