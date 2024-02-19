'use client'

import { useState } from "react";
import { inter } from "../ui/fonts";
import Link from "next/link";
import PageWrap from "../ui/common/page-wrap";
import AnimatedWrap from "../ui/common/animated-wrap";

const ServicesList = () => {
    const [toggleVissible, setToggleVissible] = useState(false);

    const servicesList = [
        {
            name: 'Стрижка',
            price: '150 грн.'
        },
        {
            name: 'Стрижка',
            price: '150 грн.'
        },
        {
            name: 'Стрижка',
            price: '150 грн.'
        },
        {
            name: 'Стрижка',
            price: '150 грн.'
        }
    ]

    return (
        <PageWrap
            backgroundStyles="bg-[url('/images/services/scissors.webp')]"
            title="Service list"
        >
            <section className={`container ${inter.className} pb-8 text-center`}>
                <ul className="max-w-[800px] flex flex-col items-center gap-y-5 mx-auto py-10">
                    {servicesList.map((item, index) => (
                        <AnimatedWrap
                            key={index}
                            y={30}
                            opacity={0}
                            duration={0.4}
                            delay={index - (0.92 * index)}
                            styles="w-full"
                        >
                            <li
                                className="w-full flex justify-between text-t-md hover:scale-105 hover:bg-t-brown-light p-4 rounded-lg duration-150"
                                onClick={() => setToggleVissible(!toggleVissible)}
                            >
                                <p className="">{item.name}</p>
                                <p className="border-l-2 border-t-brown-strong pl-7">{item.price}</p>
                            </li>
                        </AnimatedWrap>
                    ))}
                </ul>
                <Link
                    href="/contacts"
                    className="mx-auto text-t-black text-t-sm-bold hover:text-white border-2 border-t-brown bg-transparent hover:bg-t-brown hover:scale-105 py-2 px-5 rounded-xl duration-100 "
                >
                    Записаться »
                </Link>
            </section>
        </PageWrap>
    )
}

export default ServicesList;