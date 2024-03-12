import Carousel from "../../../ui/common/carousel";
import PageWrap from "../../../ui/common/page-wrap";
import { getWorkItemFromFirestoreDB, getWorksImagesFromStorage } from "../../../lib/firebase/gallery";
import TLink from "../../../ui/common/link";
import { notFound } from "next/navigation";

export default async function WorkItem({ params }: { params: { id: string } }) {
    const id = params.id;
    const workInfo = await getWorkItemFromFirestoreDB(id);
    if (!workInfo) {
        notFound();
    };

    const imagesBefore = await getWorksImagesFromStorage(id, 'before');
    const imagesAfter = await getWorksImagesFromStorage(id, 'after');

    return (
        <PageWrap
            srcBackground="/images/gallery/haircut-tools.webp"
            title={workInfo.name}
        >
            <article className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-4 md:gap-5 py-5">
                {imagesBefore.length !== 0 && <div className="flex flex-col">
                    <p className="text-center text-t-brown-light text-4xl md:text-6xl mb-4">до</p>
                    <Carousel srcImagesArray={imagesBefore} />
                </div>}

                <div className="flex flex-col">
                    <p className="text-center text-t-brown-light text-4xl md:text-6xl mb-4">результат</p>
                    <Carousel srcImagesArray={imagesAfter} />
                </div>

                <div className="max-w-[450px]">
                    <h4 className="text-t-xxl text-t-brown my-6">{workInfo.name}</h4>
                    <p>{workInfo.description}</p>

                    <div className="flex flex-col gap-5 flex-wrap mt-5">
                        {[{ href: '/contacts', text: 'Записатися' }, { href: '/gallery', text: 'Галерея' }].map((link) => (
                            <TLink href={link.href}>{link.text}</TLink>
                        ))}
                    </div>
                </div>
            </article>
        </PageWrap>
    )
};