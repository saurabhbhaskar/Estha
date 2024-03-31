"use client";

// import Image from "next/image";
// import Image from "../image/church1.png";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

function Card1({ imageSrc, title, className, colour }){

    const defopadding = "py-12 px-6";

    const finalpadding = className ? className : defopadding;

    return(
        <>
        <CardContainer className="inter-var">
            <CardBody className={`rounded-3xl border-2 flex flex-col bg-gradient-to-b from-indigo-50 via-teal-50 to-[#ffffff] w-80 hover:scale-105 items-center justify-center shadow-lg hover:shadow-lg transition duration-300 m-4 ${finalpadding}`} >
                <CardItem translateZ="50" className="w-full mt-4 flex flex-col justify-center">
                <img
                src={imageSrc}
                height="700"
                width="700"
                className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-5xl"
                />
                <CardItem
                translateZ="50"
                className="text-3xl mt-5 mx-auto font-bold text-neutral-600 dark:text-white"
                >
                <h1 className={`text-4xl font-bold mt-2 ${colour} transition duration-300 text-shadow-lg`}>{title}</h1>
                </CardItem>

                </CardItem>
                <div className="flex justify-between items-center mt-20">
                </div>
            </CardBody>
        </CardContainer>
        </>
    );
}


export default Card1;
