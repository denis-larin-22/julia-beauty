import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
    const portfolioList = [1, 2, 3, 4]

    return (
        <section className="lg:container h-fit flex flex-col lg:flex-row">
            <div className="w-full lg:max-w-80 p-5 text-white bg-t-black flex flex-col justify-center text-end">
                <p className="text-t-md uppercase">nossos</p>
                <h4 className="text-t-xl uppercase text-t-brown mb-8">profissionais</h4>
                <p className="text-t-sm-regular">Conheça todos nossos experts que estão a sua disposição para cuidar do seu cabelo.</p>
            </div>
            <div className="relative p-4 sm:p-10 pb-24 flex flex-wrap gap-6 items-center justify-center">
                {portfolioList.map((item, index) => (
                    <Link
                        href="/"
                    >
                        <Image
                            src="/images/process.jpg"
                            width={200}
                            height={200}
                            alt="The male haircut"
                            className="h-32 sm:h-[200px] w-32 sm:w-[200px] object-cover"
                        />
                        <h6 className="text-t-md ">Sarah Rules</h6>
                        <p className="text-t-sm-regular text-t-brown border-b-2 border-t-brown mb-6 md:mb-10">Hair Designer</p>
                    </Link>
                ))}
                <Link href="/gallery" className="absolute bottom-4 mx-auto text-t-black hover:text-white border-2 border-t-brown bg-transparent hover:bg-t-brown py-2 px-5 rounded-xl duration-100">See all</Link>
            </div>
        </section>
    )
}

export default Gallery;