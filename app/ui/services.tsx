import Image from "next/image";
import Link from "next/link";

interface IServiceObj {
    title: string,
    text: string,
    image: string
}

const Services = () => {
    const serviceList: Array<IServiceObj> = [
        {
            title: 'Lavada Especial',
            text: 'Amet minim mollit non deserunt ullam coet minim mollit.',
            image: '/images/woman-washing-head.png'
        },
        {
            title: 'Lavada Especial',
            text: 'Amet minim mollit non deserunt ullam coet minim mollit.',
            image: '/images/woman-washing-head.png'
        },
        {
            title: 'Lavada Especial',
            text: 'Amet minim mollit non deserunt ullam coet minim mollit.',
            image: '/images/woman-washing-head.png'
        },
        {
            title: 'Lavada Especial',
            text: 'Amet minim mollit non deserunt ullam coet minim mollit.',
            image: '/images/woman-washing-head.png'
        },
    ]

    return (
        <>
            <div className="max-w-t-maxScreen h-40 sm:h-64 mx-auto bg-[url('/images/transition-1.jpg')] bg-fixed bg-cover bg-center brightness-75"></div>
            <section className="container flex flex-col items-center my-6">
                <p className="uppercase text-t-lg lg:mt-12">nossos</p>
                <h2 className="uppercase text-t-xl text-t-brown mb-14">serviços</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2  2xl:grid-cols-4 gap-7">
                    {serviceList.map((service, index) => {
                        return (
                            <li
                                key={index}
                                className="group relative w-36 sm:w-[329px] h-36 sm:h-[290px] p-3 sm:p-7 py-4 sm:py-10 border-[1px] border-[#F1F1F1] rounded-xl shadow-xl overflow-hidden flex flex-col items-center gap-5"
                            >
                                <img
                                    src={service.image}
                                    alt="Card background image"
                                    className="w-full h-full absolute group-hover:top-0 scale-110 -top-[110%] left-0 -z-10 contrast-50 brightness-50 duration-100"
                                />
                                <p className="text-t-sm-bold sm:text-[1.4em] text-t-brown">{service.title}</p>
                                <p className="sm:text-t-sm-regular group-hover:text-white text-center">{service.text}</p>
                                <Link href="/" className="text-t-sm-regular text-white border-2 border-t-brown bg-transparent hover:bg-t-brown px-6 sm:px-10 rounded-md absolute -bottom-10 group-hover:bottom-2 duration-200">More »</Link>
                            </li>
                        )
                    })}

                </ul>
            </section>

            <div className="max-w-t-maxScreen h-40 sm:h-64 mx-auto bg-[url('/images/male-hair.png')] bg-fixed bg-cover bg-center brightness-75"></div>
        </>
    )
}

export default Services;