'use client'
import { useState } from "react";
import { syne } from "../fonts";

interface IProps {
    srcImagesArray: string[],
    wrapStyles?: string
}

const Carousel = ({ srcImagesArray, wrapStyles }: IProps) => {
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
            className={fullSizeImage ?
                "fixed top-0 left-0 z-50 h-screen w-screen flex items-center justify-center bg-[#000000ce]"
                :
                `relative flex items-center justify-center gap-1 md:gap-4 drop-shadow-2xl ${wrapStyles}`
            }
            onClick={(e) => {
                if (e.currentTarget === e.target) setFullSizeImage(false);
            }}
        >
            <button
                className={`${syne.className} w-8 h-8 flex items-center justify-center bg-transparent md:bg-t-brown hover:scale-105 active:scale-90 duration-150 rounded-full text-black md:text-white  text-2xl drop-shadow-2xl ${fullSizeImage && 'absolute left-0 md:left-[2%] bg-transparent text-4xl text-gray-400'}`}
                onClick={() => switchImage("prev")}
            >
                {'<'}
            </button>
            <div className={`flex items-center justify-center overflow-hidden rounded-xl ${fullSizeImage ?
                "w-[80vw] md:w-fit h-fit z-10"
                :
                'w-96 max-h-[600px]'
                }`}>
                {srcImagesArray.map((path, index) => (
                    <img
                        key={index}
                        width={384}
                        height={600}
                        src={path}
                        alt="Фото роботи з галереї"
                        title="Відкрити на весь екран"
                        onClick={() => setFullSizeImage(true)}
                        className={`h-fit max-h-screen w-full object-contain cursor-pointer ${currentIndexImage === index ? 'inline' : 'hidden'}`}
                    />
                ))}
            </div>
            <ul className={`absolute bottom-2 ${fullSizeImage && "bottom-20"} flex gap-2 z-20`}>
                {srcImagesArray.map((image, index) => (
                    <li
                        key={index}
                        className={`w-3 h-3 rounded-full border-[1px] border-t-brown ${currentIndexImage === index ? 'bg-t-brown' : 'bg-transparent'} hover:bg-t-brown hover:border-t-brown cursor-pointer`}
                        onClick={() => setCurrentIndexImage(index)}
                    ></li>
                ))}
            </ul>
            <button
                className={`${syne.className} w-8 h-8 flex items-center justify-center bg-transparent md:bg-t-brown hover:scale-105 active:scale-90 duration-150 rounded-full text-black md:text-white  text-2xl drop-shadow-2xl ${fullSizeImage && 'absolute right-0 md:right-[2%] bg-transparent text-4xl text-gray-400'}`}
                onClick={() => switchImage("next")}
            >
                {'>'}
            </button>
        </div>
    )
}

export default Carousel;