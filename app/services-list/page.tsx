'use client'

import { useState } from "react";
import { inter } from "../ui/fonts";
import Link from "next/link";
import TitleBlock from "../ui/title-block";

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
        <section className="">
            <TitleBlock
                title="Service list"
                styles="bg-[url('/images/services/scissors.webp')]"
            />

            <section className={`container ${inter.className} pb-8 text-center`}>
                <ul className="max-w-[800px] flex flex-col items-center gap-y-5 mx-auto py-10">
                    {servicesList.map((item, index) => (
                        <li
                            key={index}
                            className="w-full flex justify-between text-t-md hover:scale-105 hover:bg-t-brown-light p-4 rounded-lg duration-150"
                            onClick={() => setToggleVissible(!toggleVissible)}
                        >
                            <p className="">{item.name}</p>
                            <p className="border-l-2 border-t-brown-strong pl-7">{item.price}</p>
                        </li>
                    ))}
                </ul>
                <Link
                    href="/contacts"
                    className="mx-auto text-t-black text-t-sm-bold hover:text-white border-2 border-t-brown bg-transparent hover:bg-t-brown hover:scale-105 py-2 px-5 rounded-xl duration-100 "
                >
                    Записаться »
                </Link>
            </section>
        </section>
    )
}

export default ServicesList;