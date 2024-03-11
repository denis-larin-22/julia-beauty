'use client'
import Image from "next/image";
import Link from "next/link";
import AnimatedWrap from "../common/animated-wrap";
import { useRef } from "react";

interface IServiceObj {
    alt: string,
    text: string,
    image: string
}

const Services = () => {
    const serviceList: Array<IServiceObj> = [
        {
            alt: 'Blonding in Kharkiv',
            text: 'Блондування, спец-блонд, тотал-блонд',
            image: '/images/services/coloring.webp'
        },
        {
            alt: 'Hair coloring technique airtouch',
            text: 'Фарбування коренів, однотонне фарбування',
            image: '/images/services/airtouch.webp'
        },
        {
            alt: 'Male haircut',
            text: 'Чоловіча стрижка, дитяча стрижка',
            image: '/images/services/male-haircut.webp'
        },
        {
            alt: 'Hair care',
            text: 'Жіноча стрижка, догляд за волоссям',
            image: '/images/services/hair-care.webp'
        },
    ];
    const ref = useRef(null);

    return (
        <div className="bg-white mb-40 md:mb-72">
            <section className="container flex flex-col items-center py-6">
                <AnimatedWrap
                    refTriggerBlock={ref}
                    y="100px"
                    opacity={0}
                    duration={0.3}
                    delay={0.2}
                >
                    <p className="uppercase text-t-lg lg:mt-12">Мої</p>
                </AnimatedWrap>
                <AnimatedWrap
                    refTriggerBlock={ref}
                    y="100px"
                    opacity={0}
                    duration={0.3}
                    delay={0.3}
                >
                    <h2 className="uppercase text-t-xl text-t-brown mb-14">послуги</h2>
                </AnimatedWrap>

                <ul ref={ref} className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2  2xl:grid-cols-4 gap-7">
                    {serviceList.map((service, index) => {
                        return (
                            <li
                                key={index}
                                className="group relative z-0 w-36 sm:w-[329px] h-36 sm:h-[290px] p-3 sm:p-7 py-4 sm:py-10 border-[1px] border-[#F1F1F1] rounded-xl shadow-xl overflow-hidden flex flex-col items-center gap-5"
                            >
                                <Image
                                    width={329}
                                    height={290}
                                    src={service.image}
                                    alt={service.alt}
                                    className="w-full h-full absolute top-0 left-0 -z-10 contrast-50 brightness-50 object-cover"
                                />
                                <p className="h-full text-t-md md:text-t-lg text-white text-center after:block after:w-full after:h-1 after:absolute after:bottom-0 after:bg-t-brown flex flex-col items-center">{service.text}</p>
                                <Link href="/services-list" className="absolute -bottom-full group-hover:-bottom-20 -right-full group-hover:-right-20 w-28 md:w-40 h-28 md:h-40 bg-t-brown-light border-4 border-t-brown rounded-full pt-6 pl-4 md:p-8 md:pt-12 duration-200 text-t-black text-t-sm-semibold`">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" fill="gray" /></svg>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}

export default Services;