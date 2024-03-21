'use client'
import { getAllPreviewWorksWithImages } from "../../lib/firebase/gallery";
import { motion } from "framer-motion";
import GalleryCard from "./gallery-card";
import { _createAnimation } from "../../lib/_utils/_createFramerAnimation";

export default async function GalleryList() {
    const portfolioList = await getAllPreviewWorksWithImages();
    const [initItem, animateItem] = _createAnimation({ y: 0, opacity: 0 });

    return (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {portfolioList.map((work, index) => {
                if (!work) {
                    return
                }
                return (
                    <motion.li
                        initial={initItem}
                        animate={animateItem}
                        transition={{
                            duration: 0.4,
                            delay: index - (0.92 * index)
                        }}
                    >
                        <GalleryCard work={work} />
                    </motion.li>
                )
            })}
        </ul >
    )
}

