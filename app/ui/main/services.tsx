import Image from "next/image";
import Link from "next/link";

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
    ]

    return (
        <div className="bg-white mb-40 md:mb-72">
            <section className="container flex flex-col items-center py-6">
                <p className="uppercase text-t-lg lg:mt-12">Мої</p>
                <h2 className="uppercase text-t-xl text-t-brown mb-14">послуги</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2  2xl:grid-cols-4 gap-7">
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
                                <p className="text-t-lg text-white text-center after:block after:w-32 after:h-1 after:mt-10 after:bg-t-brown flex flex-col items-center">{service.text}</p>
                                <Link href="/services-list" className="absolute -bottom-full group-hover:-bottom-16 -right-full group-hover:-right-16 w-28 md:w-40 h-28 md:h-40 bg-t-brown border-4 border-t-brown-light rounded-full flex items-start justify-start pt-6 pl-4 md:p-8 md:pt-12 duration-200 text-t-brown-light text-t-sm-bold">Більше</Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}

export default Services;