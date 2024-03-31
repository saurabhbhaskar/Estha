import React from 'react';
import OrgCard from './OrgCards';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import osho2 from '../orgimg/osho2.jpg';
import osho3 from '../orgimg/osho3.png';
import osho4 from '../orgimg/osho4.png';
import osho5 from '../orgimg/osho5.png';
import osho6 from '../orgimg/osho6.png';
import artoli from '../orgimg/artoli.png';
import tbsoi1 from '../orgimg/tbsoi1.png';
import tbsoi2 from '../orgimg/tbsoi2.png';
import tushita from '../orgimg/tushita.jpg';
import bohra1 from '../orgimg/bohra1.webp';
import bohra2 from '../orgimg/bohra2.jpg';
import bohra3 from '../orgimg/bohra3.jpg';
import brmhak from '../orgimg/brmhak.jpg';
import brmhak1 from '../orgimg/brmhak1.jpg';
import dalailama from '../orgimg/dalailama.jpeg';
import dalailama1 from '../orgimg/dalailama1.jpg';
import ias from '../orgimg/ias.png';
import ias1 from '../orgimg/ias1.jpg';
import ias2 from '../orgimg/ias2.jpg';
import ias3 from '../orgimg/ias3.jpg';
import isha from '../orgimg/isha.jpg';
import isha1 from '../orgimg/isha1.png';
import iskon1 from '../orgimg/iskon1.jpg';
import iskon2 from '../orgimg/iskon2.png';
import iskon3 from '../orgimg/iskon3.jpg';
import jamatehind1 from '../orgimg/jamatehind1.jpg';
import jamatehind2 from '../orgimg/jamatehind2.jpg';
import jamatehind3 from '../orgimg/jamatehind3.jpg';
import jamatehind4 from '../orgimg/jamatehind4.webp';
import jamatemustafa from '../orgimg/jamatemustafa.jpg';
import jamatemustafa1 from '../orgimg/jamatemustafa1.jpg';
import jamatemustafa2 from '../orgimg/jamatemustafa2.jpg';
import jesuscalls from '../orgimg/jesuscalls.jpg';
import osho1 from '../orgimg/osho1.png';


function OrgCardSlider() {
  const orgData = [
    {
      "orgName": "Osho International",
      "description": "A spiritual movement inspired by the teachings of Osho, emphasizing meditation and mindfulness.",
      "greatHeader": "Spiritual Movement | Founded in 1990",
      "imageSrc": osho6
    },
    {
      "orgName": "Isha",
      "description": "Founded by Sadhguru, Isha focuses on inner engineering and holistic well-being through yoga and meditation.",
      "greatHeader": "Holistic Well-being | Founded in 1992",
      "imageSrc": isha1
    },
    {
      "orgName": "Brahma Kumaris",
      "description": "A spiritual organization promoting meditation and self-transformation for a peaceful and harmonious world.",
      "greatHeader": "Peaceful Transformation | Founded in 1936",
      "imageSrc": brmhak
    },
    {
      "orgName": "The Art of Living",
      "description": "Founded by Sri Sri Ravi Shankar, this organization offers programs to reduce stress and promote mental well-being.",
      "greatHeader": "Stress Reduction Programs | Founded in 1981",
      "imageSrc": artoli
    },
    {
      "orgName": "ISKON (International Society for Krishna Consciousness)",
      "description": "A global movement dedicated to the practice of bhakti-yoga, centered around devotion to Lord Krishna.",
      "greatHeader": "Global Bhakti Movement | Founded in 1966",
      "imageSrc": iskon2
    },
    {
      "orgName": "International Association of Sufism (IAS)",
      "description": "A non-profit organization promoting Sufism's varied forms, fostering dialogue, and advancing Sufi principles globally.",
      "greatHeader": "Promoting Sufi Principles | Founded in 1983",
      "imageSrc": ias
    },
    {
      "orgName": "Buddhist Society of India",
      "description": "Founded by Dr. B.R. Ambedkar, dedicated to spreading the social and moral teachings of Buddha worldwide.",
      "greatHeader": "Spreading Buddha's Teachings | Founded in 1954",
      "imageSrc": tbsoi2
    },
    {
      "orgName": "Jamaat Raza e Mustafa",
      "description": "Founded in 1920 by Imam Ahmad Raza Khan, aims to strengthen Muslims religiously, socially, and financially.",
      "greatHeader": "Strengthening Muslim Beliefs | Founded in 1920",
      "imageSrc": jamatemustafa2
    },
    {
      "orgName": "Dawoodi Bohras",
      "description": "A global Muslim community in 40+ countries, led by Syedna Mufaddal Saifuddin. Embraces modernity while preserving traditions.",
      "greatHeader": "Global Muslim Community | Founded in 1840",
      "imageSrc": bohra1
    },
    {
      "orgName": "Jesus Calls",
      "description": "Founded by Dr. D.G.S. Dhinakaran, a Christian ministry emphasizing compassion and healing.",
      "greatHeader": "Ministry of Compassion | Founded in 1970",
      "imageSrc": jesuscalls
    },
    {
      "orgName": "Jamaat-e-Islami Hind (JIH)",
      "description": "An Islamic organization guided by the principles of Islam, emphasizing the Oneness of God, Prophethood, and Life After Death.",
      "greatHeader": "Guided by Islamic Principles | Founded in 1941",
      "imageSrc": jamatehind3
    },
    {
      "orgName": "Dalai Lama Foundation",
      "description": "Founded by the 14th Dalai Lama, dedicated to promoting basic human values, mutual understanding among religions, and environmental protection.",
      "greatHeader": "Promoting Human Values | Founded in 1989",
      "imageSrc": dalailama1
    },
];


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="py-8 px-5 mx-auto max-w-screen-4xl lg:py-16 lg:px-20 ml-10">
      <div className="w-full mb-10 lg:mb-40 translate-x-10 translate-y-10">
        <h1 className="sm:text-2xl text-5xl font-bold title-font mb-2 text-gray-900">Religious Organizations</h1>
        <div className="h-1 w-20 mt-5 bg-indigo-500 rounded"></div>
      </div>
      <Slider {...sliderSettings}>
        {orgData.map((org, index) => (
          <OrgCard
            key={index}
            orgName={org.orgName}
            description={org.description}
            greatHeader={org.greatHeader}
            imageSrc={org.imageSrc}
          />
        ))}
      </Slider>
    </div>
  );
}

export default OrgCardSlider;
