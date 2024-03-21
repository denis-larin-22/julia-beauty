'use client'
import Image from "next/image";
import TLink from "../common/link";
import { useRef } from "react";
import AnimatedWrap from "../common/animated-wrap";

const Gallery = () => {
    const galleryList: [string, string, string, string] = ['/images/gallery/gallery1.webp', '/images/gallery/gallery2.webp', '/images/gallery/gallery3.webp', '/images/gallery/gallery4.webp'];
    const ref = useRef(null);

    return (
        <div className="bg-white">
            <section className="lg:container h-fit flex flex-col lg:flex-row">
                <div ref={ref} className="w-full lg:max-w-80 p-5 text-white bg-t-black flex flex-col justify-center text-end">
                    <AnimatedWrap refTriggerBlock={ref} x="-100px" opacity={0} duration={0.3} delay={0.3}>
                        <p className="text-t-md uppercase">Приклади</p>
                    </AnimatedWrap>
                    <AnimatedWrap refTriggerBlock={ref} x="-100px" opacity={0} duration={0.3} delay={0.4}>
                        <h4 className="text-t-xl uppercase text-t-brown mb-8">Моїх робіт</h4>
                    </AnimatedWrap>
                    <AnimatedWrap refTriggerBlock={ref} x="-100px" opacity={0} duration={0.3} delay={0.5}>
                        <p className="text-t-sm-regular text-gray-400">Щоб побачити більше перейдіть до сторінки Галерея</p>
                    </AnimatedWrap>
                </div>
                <ul className="relative p-4 sm:p-10 flex flex-wrap gap-6 items-center justify-center">
                    {galleryList.map((path, index) => (
                        <li
                            key={index}
                            className="group border-b-2 border-transparent pb-4 hover:border-t-brown brightness-75 hover:brightness-100 duration-150"
                        >
                            <Image
                                src={path}
                                width={200}
                                height={200}
                                alt="Фотографії робіт з галереї"
                                className="h-32 sm:h-[200px] w-32 sm:w-[200px] object-cover group-hover:scale-105 duration-150"
                            />
                        </li>
                    ))}
                    <TLink href="/gallery">Галерея</TLink>
                </ul>
            </section>
        </div>
    )
}

export default Gallery;