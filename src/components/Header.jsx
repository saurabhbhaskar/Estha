import React from 'react';
import EsthaLogo from '../assets/esthalogo1.svg';
import headerImg from '../assets/headerimg2.svg';
import header1 from '../homeimg/header1.png';
import header2 from '../homeimg/header2.png';
import header3 from '../homeimg/header3.png';
import '../App.css';

"use client";
import { SparklesCore } from "../ui/sparkles";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { WavyBackground } from "../ui/wavy-background";

const words = `एकं सद्विप्रा बहुधा वदन्ति`;
const words1 = `Estha`;

export default function Header() {

  const headerImgStyle = {
    width: 'auto',
    height: '600px',
    marginLeft: '-2%',
    paddingTop: '10%',
  };

  return (
    <div className="bg-white">
      <div className="h-[40rem] relative w-full bg-white flex flex-row items-center justify-evenly overflow-hidden rounded-md">
      <div
          className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="z-10 absolute inset-x-70 -top-100 left-10 -bottom-10">
          <img
            src={header2}
            alt="Header Image"
            style={headerImgStyle}
          />
        </div>
        <div className="z-10 absolute inset-x-70 -top-100 -right-80 -bottom-0 translate-x-40">
          <img
            src={header3}
            alt="Header Image"
            style={headerImgStyle}
          />
        </div>
        {/* <div className="z-10 absolute inset-x-120 -top-100 left-20 translate-y-5 item-center">
          <img
            src={header1}
            alt="Header Image"
            style={headerImgStyle}
            className='opacity-30'
          />
        </div> */}
        <WavyBackground backgroundFill="white" waveOpacity={0.1} waveWidth={10} className="mx-auto py-32 sm:py-48 lg:py-20 mb-40 flex justify-evenly items-center" colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]} >
          <div className="text-center">
            <img
              src={EsthaLogo}
              alt="Estha Logo"
              className="max-h-60 -mb-10 shadow-none"
            />
            <h1 className="text-2xl font-normal tracking-tight text-gray-900 sm:text-9xl esthafont">
              Estha
            </h1>
            <TextGenerateEffect className="mt-6 text-3xl font-semibold leading-8 text-gray-700" words={words} />
          </div>
          </WavyBackground>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-3/4 bg-gradient-to-tr from-[#ff80b5] to-[#09f3eb] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={4}
          particleDensity={4}
          className="w-full h-full"
          particleColor="#048a85"
        />
      </div>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={4}
          particleDensity={4}
          className="w-full h-full"
          particleColor="#ff80b5"
        />
      </div>
      </div>
    </div>
  );
}
