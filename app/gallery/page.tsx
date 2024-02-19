import Image from "next/image";
import Link from "next/link";
import PageWrap from "../ui/common/page-wrap";

const Gallery = () => {
    const portfolioList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <PageWrap
            backgroundStyles="bg-[url('/images/gallery/haircut-tools.webp')]"
            title="Portfolio"
        >
            <section className="container py-5 flex flex-wrap gap-6 items-center justify-around">
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
            </section>
        </PageWrap>
    )
}

export default Gallery;