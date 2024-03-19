import AnimatedWrap from "../common/animated-wrap";
import { getAllPreviewWorksWithImages } from "../../lib/firebase/gallery";
import GalleryCard from "./gallery-card";

export default async function GalleryList() {
    const portfolioList = await getAllPreviewWorksWithImages();

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
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
                        <GalleryCard work={work} />
                    </AnimatedWrap>
                )
            })}
        </div>
    )
}

