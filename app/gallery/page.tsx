import Image from "next/image";
import TitleBlock from "../ui/title-block";
import Link from "next/link";

const Gallery = () => {
    const portfolioList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <article className="">
            <TitleBlock
                title="Portfolio"
                styles="bg-[url('/images/gallery/haircut-tools.webp')]"
            />

            <div className="container py-5 flex flex-wrap gap-6 items-center justify-around">
                {portfolioList.map((item, index) => (
                    <Link
                        href="/gallery/safdfdsfsf/workitem"
                        key={index}
                        className="rounded-md overflow-hidden hover:bg-t-brown-light hover:scale-105 duration-150 hover:shadow-xl"
                    >
                        <Image
                            src="/images/process.jpg"
                            width={300}
                            height={200}
                            alt="The photo of work from portfolio"
                            className=""
                        />
                        <h6 className="text-t-md ">Sarah Rules</h6>
                        <p className="text-t-sm-regular text-t-brown border-b-2 border-t-brown mb-6 md:mb-10">Hair Designer</p>
                    </Link>
                ))}
            </div>



        </article>
    )
}

export default Gallery;