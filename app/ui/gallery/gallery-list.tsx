import Link from "next/link";
import AnimatedWrap from "../common/animated-wrap";
import { getAllPreviewWorksWithImages } from "../../lib/firebase/gallery";

export default async function GalleryList() {
    const portfolioList = await getAllPreviewWorksWithImages();

    return (
        <>
            {portfolioList.map((work, index) => {
                if (!work) {
                    return
                }
                return (
                    <AnimatedWrap
                        key={work.id}
                        y={30}
                        opacity={0}
                        duration={0.4}
                        delay={index - (0.92 * index)}
                    >
                        <Link
                            href={`/gallery/${work.id}/workitem`}
                            className="relative h-80 w-72 p-2 flex flex-col justify-between rounded-2xl overflow-hidden hover:shadow-md hover:shadow-slate-400 duration-150"
                        >
                            <img
                                width={200}
                                height={256}
                                src={work.image}
                                loading="lazy"
                                alt="The photo of work from portfolio"
                                className="w-full h-64 rounded-2xl object-cover"
                            />
                            <h6 className="p-2 text-t-sm-semibold border-b-2 border-t-brown-light">{work.name}</h6>
                        </Link>
                    </AnimatedWrap>
                )
            })}
        </>
    )
}