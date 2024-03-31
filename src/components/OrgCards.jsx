import React from 'react';

function OrgCard({ orgName, description, greatHeader, imageSrc }) {
  return (
    <>
      <div className="p-5 mb-15">
              <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={imageSrc} alt="organization" />
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">{greatHeader}</h2>
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">{orgName}</h1>
              <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">{description}</p>
              <div className="mt-4">
                <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more">
                  Know More »
                </a>
              </div>
        </div>
    </>
  );
}

export default OrgCard;
