'use client'
import Image from "next/image";
import Link from "next/link";
import AnimatedWrap from "../common/animated-wrap";
import { useRef } from "react";
import { motion } from "framer-motion";

interface IServiceObj {
    alt: string,
    text: string[],
    image: string
}

const Services = () => {
    const serviceList: Array<IServiceObj> = [
        {
            alt: 'Жіноча стрижка у Харкові',
            text: ['• жіноча стрижка', '• догляд за волоссям'],
            image: '/images/services/hair-care.webp'
        },
        {
            alt: 'Чоловіча стрижка у Харкові',
            text: ['• чоловіча стрижка', '• дитяча стрижка'],
            image: '/images/services/male-haircut.webp'
        },
        {
            alt: 'Фарбування волосся',
            text: ['• однотонне фарбування', '• фарбування коренів'],
            image: '/images/services/airtouch.webp'
        },
        {
            alt: 'Блондування в Харкові',
            text: ['• блондування', '• спец-блонд', '• тотал-блонд'],
            image: '/images/services/coloring.webp'
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
                            <motion.li
                                key={index}
                                className="group relative z-0 w-36 sm:w-[329px] h-36 sm:h-[290px] rounded-xl shadow-xl overflow-hidden flex flex-col items-center gap-5 border-4 border-[#F1F1F1] hover:border-t-brown"

                            >
                                <Image
                                    width={329}
                                    height={290}
                                    src={service.image}
                                    alt={service.alt}
                                    className="w-full h-full absolute top-0 left-0 -z-10 contrast-50 brightness-50 object-cover group-hover:scale-110 duration-150"
                                />
                                <Link
                                    href="/services-list"
                                    scroll
                                    className="h-10 w-10 rounded-full bg-t-glass flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 duration-150 -translate-y-10 group-hover:translate-y-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M419-80q-28 0-52.5-12T325-126L107-403l19-20q20-21 48-25t52 11l74 45v-328q0-17 11.5-28.5T340-760q17 0 29 11.5t12 28.5v472l-97-60 104 133q6 7 14 11t17 4h221q33 0 56.5-23.5T720-240v-160q0-17-11.5-28.5T680-440H461v-80h219q50 0 85 35t35 85v160q0 66-47 113T640-80H419ZM167-620q-13-22-20-47.5t-7-52.5q0-83 58.5-141.5T340-920q83 0 141.5 58.5T540-720q0 27-7 52.5T513-620l-69-40q8-14 12-28.5t4-31.5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 17 4 31.5t12 28.5l-69 40Zm335 280Z" fill="gray" /></svg>
                                </Link>
                                <div className="absolute -bottom-full group-hover:bottom-0 w-full min-h-fit p-2 text-start text-t-sm-semibold text-t-brown-light opacity-0 group-hover:opacity-100 duration-300 bg-t-glass">
                                    {service.text.map((text, index) => <p key={index} className=" ">{text}</p>)}
                                </div>
                            </motion.li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}

export default Services;