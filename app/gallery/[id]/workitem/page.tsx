import Link from "next/link";
import Carousel from "../../../ui/carousel";
import PageWrap from "../../../ui/common/page-wrap";
import { IWorkInfo, getWorkItemFromFirestoreDB, getWorksImagesFromStorage } from "../../../lib/firebase/gallery";

export default async function WorkItem({ params }: { params: { id: string } }) {
    const id = params.id;
    const workInfo = await getWorkItemFromFirestoreDB(id);
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

                <div className="max-w-[55em] mt-6">
                    <h4 className="text-t-xxl text-t-brown">{workInfo.name}</h4>
                    <p>{workInfo.description}</p>

                    {[{ path: '/gallery', text: 'Галерея »' }, { path: '/contacts', text: 'Записатися »' }].map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className="inline-block text-t-black hover:text-white border-2 border-t-brown bg-transparent hover:bg-t-brown py-2 px-5 mt-5 mr-5 rounded-xl duration-100">
                            {link.text}
                        </Link>
                    ))}
                </div>
            </article>
        </PageWrap>
    )
};