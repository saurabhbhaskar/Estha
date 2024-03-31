import React from 'react';

function Card({ imageSrc, title, className, colour }) {

    const defopadding = "py-12 px-6";

    const finalpadding = className ? className : defopadding;
    
    return (
        <div
            className={`rounded-3xl flex flex-col bg-white w-80 hover:scale-105 items-center justify-center shadow-lg hover:shadow-lg transition duration-300 m-4 ${finalpadding}`}
            id="widget"
        >
            <img
                src={imageSrc}
                className="mt-4 transform duration-200 hover:scale-105 w-40 h-40 object-cover"
            />
            <div className={`bg-white w-60 rounded-2xl flex flex-col pt-6 justify-center items-center -mt-7 z-10`}>
                <h1 className={`text-4xl font-bold mt-5 ${colour} transition duration-300 text-shadow-lg`}>{title}</h1>
            </div>
        </div>
    );
}

export default Card

