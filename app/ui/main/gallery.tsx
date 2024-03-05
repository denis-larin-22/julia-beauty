import Image from "next/image";
import Link from "next/link";
import TLink from "../common/button";

const Gallery = () => {
    const galleryList: [string, string, string, string] = ['/images/gallery/gallery1.webp', '/images/gallery/gallery2.webp', '/images/gallery/gallery3.webp', '/images/gallery/gallery4.webp'];

    return (
        <div className="bg-white">
            <section className="lg:container h-fit flex flex-col lg:flex-row">
                <div className="w-full lg:max-w-80 p-5 text-white bg-t-black flex flex-col justify-center text-end">
                    <p className="text-t-md uppercase">Приклади</p>
                    <h4 className="text-t-xl uppercase text-t-brown mb-8">Моїх робіт</h4>
                    <p className="text-t-sm-regular text-t-brown-light">Щоб побачити більше перейдіть до сторінки Галерея</p>
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
                                alt="Photos of works from the gallery"
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