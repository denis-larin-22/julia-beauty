'use client'

import { useState } from "react";

interface IProps {
    srcImagesArray: string[]
}

const Carousel = ({ srcImagesArray }: IProps) => {
    const [currentIndexImage, setCurrentIndexImage] = useState(0);
    const [fullSizeImage, setFullSizeImage] = useState(false);

    const switchImage = (action: 'next' | 'prev') => {
        const imagesArrayLength = srcImagesArray.length;
        let currentIndex = currentIndexImage;

        switch (action) {
            case 'next':
                ++currentIndex;
                break;
            case 'prev':
                --currentIndex;
        }

        if (currentIndex < imagesArrayLength && currentIndex >= 0) {
            setCurrentIndexImage(currentIndex);
        } else if (currentIndex >= imagesArrayLength) {
            setCurrentIndexImage(0);
        } else {
            setCurrentIndexImage(imagesArrayLength - 1);
        }
    }

    return (
        <div
            className={fullSizeImage ? "absolute top-0 left-0 h-screen w-screen flex items-center justify-center bg-[#000000bf]" : "relative flex items-center justify-center  gap-2 md:gap-4"}
            onClick={(e) => {
                if (e.currentTarget === e.target) setFullSizeImage(false);
            }}
        >
            <button
                className={`w-8 h-8 flex items-center justify-center bg-transparent md:bg-t-brown-light hover:bg-t-brown hover:scale-105 active:scale-90 duration-150 rounded-full text-white  text-2xl ${fullSizeImage && 'absolute left-[5%]'}`}
                onClick={() => switchImage("prev")}
            >
                {'<'}
            </button>
            <div className={`${fullSizeImage ? 'w-3/4 h-fit z-10' : 'w-[600px] h-[400px]'} flex items-center justify-center overflow-hidden rounded-xl`}>
                <img
                    src={srcImagesArray[currentIndexImage]}
                    alt="Photos of works from the portfolio"
                    onClick={() => setFullSizeImage(true)}
                    className="h-fit max-h-screen w-full object-cover cursor-pointer"
                />
            </div>
            <ul className="absolute bottom-2 flex gap-2 z-20">
                {srcImagesArray.map((image, index) => (
                    <li
                        key={index}
                        className={`w-3 h-3 rounded-full border-[1px] border-t-brown ${currentIndexImage === index ? 'bg-t-brown' : 'bg-transparent'} hover:bg-t-brown hover:border-t-brown cursor-pointer`}
                        onClick={() => setCurrentIndexImage(index)}
                    ></li>
                ))}
            </ul>
            <button
                className={`w-8 h-8 flex items-center justify-center bg-transparent md:bg-t-brown-light hover:bg-t-brown hover:scale-105 active:scale-90 duration-150 rounded-full text-white  text-2xl ${fullSizeImage && 'absolute right-[5%]'}`}
                onClick={() => switchImage("next")}
            >
                {'>'}
            </button>
        </div>
    )
}

export default Carousel;