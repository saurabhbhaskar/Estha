import React from 'react';
import BlogCard from './BlogCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import varanasi from '../image/varanasi.jpg';
import rishikesh from '../image/rishikesh.jpg';
import badrinath from '../image/badrinath.jpg';
import kedarnath from '../image/kedarnath.jpg';
import kedarnath1 from '../image/kedarnath1.jpg';
import ajmer from '../image/ajmer.jpg';
import dharmashala1 from '../image/dharamashala1.jpg';
import dharmashala from '../image/dharmashala.png';
import hampi1 from '../image/hampi1.jpg';
import hampi2 from '../image/hampi2.jpg';
import hampi3 from '../image/hampi3.jpg';

function BlogCardSlider() {
    const blogData = [
        {
            description: 'Embark on a Spiritual Odyssey in Varanasi: Where Serenity Meets Tradition',
            author: 'Saurabh Bhaskar',
            bgImage: varanasi,
            imageSrc: varanasi,
        },
        {
            description: 'Rishikesh Reverie: A Sojourn into Spiritual Bliss by the Ganges',
            author: 'Saurabh Bhaskar',
            bgImage: rishikesh,
            imageSrc: varanasi,
        },
        {
            description: 'Dharamshala Diaries: Exploring the Tranquil Abode in the Lap of the Himalayas',
            author: 'Saurabh Bhaskar',
            bgImage: dharmashala1,
            imageSrc: varanasi,
        },
        {
            description: 'Kedarnath Chronicles: A Pilgrimage to the Sacred Himalayan Shrine',
            author: 'Saurabh Bhaskar',
            bgImage: kedarnath1,
            imageSrc: varanasi,
        },
        {
            description: 'Badrinath Bliss: Discovering Divinity amid the Majestic Himalayas',
            author: 'Saurabh Bhaskar',
            bgImage: badrinath,
            imageSrc: varanasi,
        },
        {
            description: 'Ajmer Alchemy: Journeying into Sufi Spirituality and Ancient Charms',
            author: 'Saurabh Bhaskar',
            bgImage: ajmer,
            imageSrc: varanasi,
        },
        {
            description: 'Hampi Harmony: Unveiling the Mythical and Historical Marvels',
            author: 'Saurabh Bhaskar',
            bgImage: hampi3,
            imageSrc: varanasi,
        },
    ];
    

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="py-8 px-5 mx-auto max-w-screen-4xl lg:py-16 lg:px-6 ml-20">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Blog
          </h2>
          <p className="font-semibold text-gray-500 sm:text-xl dark:text-gray-400 leading-relaxed text-base">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <Slider {...settings}>
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              description={blog.description}
              author={blog.author}
              bgImage={blog.bgImage}
              imageSrc={blog.imageSrc}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default BlogCardSlider;
