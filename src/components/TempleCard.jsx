import React from 'react';
import namaste from '../assets/namaste1.svg';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';

function TempleCard({ templeName, city, state, religionName, imageUrl }) {
  return (
    <>
      <CardContainer className="inter-var flex flex-col">
        <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex shadow-lg shadow-[#afa9a9]">
          <div className='w-1/3'>
          <CardItem translateZ="60" className="w-full mt-4">
            <img
              className="h-[110px] w-[120px] rounded-lg"
              src={imageUrl}
              alt=""
            />
          </CardItem>
          </div>
          <div className='m-6'>
          <CardItem
            translateZ="50"
            className="text-md font-bold text-neutral-600 dark:text-white"
          >
            {templeName}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {city}, {state}
          </CardItem>
          </div>
          <CardItem translateZ="60" className="ml-7 flex items-center justify-end text-gray-600 dark:text-white">
                <img
                src={namaste}
                alt="Estha Logo"
                className="shadow-none w-16"
                />
          </CardItem>
        </CardBody>
        <CardItem className="text-navy-700 mt-5 mx-auto w-max font-bold">
            Religion :{' '}
            <a href="#" target="_blank" className="text-brand-500 font-normal">
              {religionName}
            </a>
        </CardItem>
      </CardContainer>
    </>
  );
}

export default TempleCard;
