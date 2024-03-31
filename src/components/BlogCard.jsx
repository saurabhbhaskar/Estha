// BlogCard.js

import React from 'react';

function BlogCard({ description, author, imageSrc, bgImage }) {
  return (
    <>
      <div className="group relative grid h-[26rem] w-full max-w-[20rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 transition-transform transform scale-100 hover:scale-105">
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-cover bg-clip-border bg-center text-gray-700 shadow-none group-hover:scale-105"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-6 px-6 md:px-12">
          <h2 className="mb-6 block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
            {description}
          </h2>
          <h5 className="mb-4 block font-sans text-md font-semibold leading-snug tracking-normal text-gray-400 antialiased">
            Author: {author}
          </h5>
          <img
            alt={author}
            src={imageSrc}
            className="relative inline-block h-[50px] w-[50px] rounded-full border-2 border-white object-cover object-center mx-auto"
          />
        </div>
      </div>
      <div className="w-full pt-5 px-4 mb-8 mx-auto ">
        <div className="text-sm text-gray-700 py-1">
          Blog by <a className="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents" target="_blank">Estha Foundation</a> and <a href="https://www.creative-tim.com?ref=tailwindcomponents" className="text-gray-700 font-semibold" target="_blank">copyright claimed </a>.
        </div>
      </div>
    </>
  );
}

export default BlogCard;
