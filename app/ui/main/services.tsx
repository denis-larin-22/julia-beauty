'use client'
import Image from "next/image";
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
                                <div className="absolute bottom-0 w-full min-h-fit p-2 text-start text-t-sm-semibold text-t-brown-light bg-t-glass">
                                    {service.text.map((text, index) => <p key={index} className=" ">{text}</p>)}
                                </div>
                            </motion.li>
                        )
                    })}
                </ul>
            </section>
        </div >
    )
}

export default Services;