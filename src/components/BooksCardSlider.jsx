import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BooksCard from './BooksCard.jsx';
import adigranth1 from '../booksimg/adigranth1.jpg';
import bible1 from '../booksimg/bible1.jpg';
import gita1 from '../booksimg/gita1.jpg';
import quran1 from '../booksimg/quran1.png';
import sutra1 from '../booksimg/sutra1.jpg';
import Tripitakas1 from '../booksimg/Tripitakas2.jpg';
import agamas from '../booksimg/agamas.jpg';
import avestan from '../booksimg/avestan.jpg';
import dhamm from '../booksimg/dhamm.jpg';
import dhamm1 from '../booksimg/dhamm1.jpg';
import mormon1 from '../booksimg/mormon1.jpeg';
import Torah from '../booksimg/Torah.jpg';
import upanishadhas from '../booksimg/upanishadhas.jpg';
import vedas1 from '../booksimg/vedas1.jpg';
import taote1 from '../booksimg/taote1.png';



function BooksCardSlider() {
  const scriptures = [
    {
      name: 'Adi Granth (Sri Guru Granth Sahib)',
      author: 'Compiled by Guru Arjan Dev Ji, with contributions from other Sikh Gurus',
      description:
        'Adi Granth is the central religious scripture of Sikhism, containing hymns and teachings of Sikh Gurus. It is considered the eternal Guru by Sikhs.',
      imageSrc: adigranth1,
    },
    {
      name: 'Bible',
      author: 'Various authors, traditionally attributed to prophets, apostles, and disciples',
      description:
        'The Bible is the holy scripture of Christianity, consisting of the Old Testament and the New Testament. It contains religious teachings, history, poetry, and prophecy.',
      imageSrc: bible1,
    },
    {
      name: 'Bhagavad Gita',
      author: 'Sage Vyasa, spoken by Lord Krishna',
      description:
        'The Bhagavad Gita is a Hindu scripture that is part of the Indian epic Mahabharata. It consists of a conversation between Prince Arjuna and the god Krishna, who serves as his charioteer.',
      imageSrc: gita1,
    },
    {
      name: 'Lotus Sutra',
      author: 'Attributed to Gautama Buddha',
      description:
        'The Lotus Sutra is one of the most influential texts of Mahayana Buddhism. It emphasizes the importance of universal salvation and the possibility of Buddhahood for all sentient beings.',
      imageSrc: sutra1,
    },
    {
      name: 'Quran',
      author: 'Revealed to Prophet Muhammad by Allah',
      description:
        'The Quran is the holy book of Islam, believed by Muslims to be a revelation from God. It is widely regarded as the finest work in classical Arabic literature.',
      imageSrc: quran1,
    },
    {
      name: 'Tripitakas',
      author: 'Various authors, traditionally attributed to Gautama Buddha and his disciples',
      description:
        'The Tripitakas, also known as the Pali Canon, are the traditional scriptures of Theravada Buddhism. They contain teachings attributed to Gautama Buddha and are considered the earliest Buddhist texts.',
      imageSrc: Tripitakas1,
    },
    {
        name: 'The Vedas',
        author: 'Attributed to various ancient sages',
        description:
          'The Vedas are a collection of ancient sacred hymns in Sanskrit. They form the foundation of Hindu religious and spiritual knowledge.',
        imageSrc: vedas1,
      },
      {
        name: 'The Tao Te Ching',
        author: 'Attributed to Laozi',
        description:
          'The Tao Te Ching is a foundational text of Taoism, offering insights into the nature of existence, wisdom, and the Tao (the Way).',
        imageSrc: taote1,
      },
      {
        name: 'The Dhammapada',
        author: 'Attributed to Gautama Buddha',
        description:
          'The Dhammapada is a collection of sayings of Gautama Buddha in verse form. It is one of the most widely read and studied texts in the Buddhist tradition.',
        imageSrc: dhamm1,
      },
      {
        name: 'The Avesta',
        author: 'Attributed to Zoroaster',
        description:
          'The Avesta is the primary collection of religious texts of Zoroastrianism, the ancient Persian religion. It includes hymns, rituals, and philosophical teachings.',
        imageSrc: avestan,
      },
      {
        name: 'The Book of Mormon',
        author: 'Joseph Smith and others',
        description:
          'The Book of Mormon is a sacred text in the Latter Day Saint movement. It is viewed as a supplement to the Bible and contains writings of ancient prophets in the Americas.',
        imageSrc: mormon1,
      },
      {
        name: 'The Torah',
        author: 'Moses and other prophets',
        description:
          'The Torah is the central reference of the religious Judaic tradition. It includes the first five books of the Hebrew Bible and serves as the primary source of Jewish law and ethics.',
        imageSrc: Torah,
      },
      {
        name: 'The Upanishads',
        author: 'Various ancient Indian sages',
        description:
          'The Upanishads are a group of philosophical texts that explore the nature of reality, consciousness, and the self. They are considered the culmination of Vedic thought in Hinduism.',
        imageSrc: upanishadhas,
      },
      {
        name: 'The Agamas',
        author: 'Various authors in Hinduism and Jainism',
        description:
          'The Agamas are a collection of scriptures in Hinduism and Jainism that provide guidance on rituals, temple construction, and philosophical teachings. They are essential to both traditions.',
        imageSrc: agamas,
      },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="text-gray-600 body-font bg-gray-100 p-5">
      <div className="w-full mb-6 lg:mb-0 translate-x-10 translate-y-10">
        <h1 className="sm:text-2xl text-5xl font-bold title-font mb-2 text-gray-900">Religious Scriptures</h1>
        <div className="h-1 w-20 mt-5 bg-indigo-500 rounded"></div>
      </div>
      <div className="container px-5 py-24 mx-auto max-w-8xl">
        <Slider {...sliderSettings}>
          {scriptures.map((scripture, index1) => (
            <BooksCard
              key={index1}
              scriptureName={scripture.name}
              author={scripture.author}
              description={scripture.description}
              imageSrc={scripture.imageSrc}
            />
          ))}
          
        </Slider>
      </div>
    </section>
  );
}

export default BooksCardSlider;
