import Link from "next/link";
import PageWrap from "../ui/common/page-wrap";
import AnimatedWrap from "../ui/common/animated-wrap";
import CreateWorkItem from "../ui/create-work-item";
import { getAllPreviewWorksWithImages } from "../lib/firebase/gallery";
import { Suspense } from "react";

export default async function Gallery() {
    const portfolioList = await getAllPreviewWorksWithImages();

    return (
        // <PageWrap
        //     srcBackground="/images/gallery/haircut-tools.webp"
        //     title="Portfolio"
        // >
        <section className="container py-5 flex flex-wrap gap-6 items-center justify-around">
            {portfolioList.map((work, index) => (
                <AnimatedWrap
                    key={work.id}
                    y={30}
                    opacity={0}
                    duration={0.4}
                    delay={index - (0.92 * index)}
                >
                    <Link
                        href={`/gallery/${work.id}/workitem`}
                        className="relative h-80 w-72 p-2 flex flex-col justify-between rounded-2xl overflow-hidden shadow-2xl shadow-slate-300"
                    >
                        <img
                            src={work.image}
                            alt="The photo of work from portfolio"
                            className="w-full h-64 rounded-2xl object-cover"
                        />
                        <h6 className="p-2 text-t-sm-semibold border-b-2 border-t-brown-light">{work.name}</h6>
                    </Link>
                </AnimatedWrap>
            ))}
        </section>
        // </PageWrap>
    )
};