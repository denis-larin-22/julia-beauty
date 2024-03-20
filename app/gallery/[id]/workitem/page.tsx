import Carousel from "../../../ui/common/carousel";
import PageWrap from "../../../ui/common/page-wrap";
import { getWorkItemFromFirestoreDB, getWorksImagesFromStorage } from "../../../lib/firebase/gallery";
import TLink from "../../../ui/common/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Галерея | Julia Magic Beauty',
    description: 'Julia Magic Beauty - мистецтво краси в кожному образі. Зануртеся у світ унікальних зачісок і стильних образів у галереї моїх робіт. Ознайомтеся з роботами у галереї та оберіть свій ідеальний образ. Унікальність кожного стилю чекає на вас тут!!',
    openGraph: {
        title: 'Галерея | Julia Magic Beauty',
        description: 'Julia Magic Beauty - мистецтво краси в кожному образі. Зануртеся у світ унікальних зачісок і стильних образів у галереї моїх робіт.',
        type: 'website',
        locale: 'uk_UA',
        url: '',
        siteName: 'Julia Magic Beauty'
    }
};

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
            <article className="relative container grid grid-cols-1 lg:grid-cols-2 items-center gap-4 md:gap-5 py-4">
                <div className="flex flex-col">
                    <p className="text-center text-t-brown-light text-4xl md:text-6xl mb-4">результат</p>
                    <Carousel srcImagesArray={imagesAfter} />
                </div>
                {imagesBefore.length !== 0 && <div className="flex flex-col">
                    <p className="text-center text-t-brown-light text-4xl md:text-6xl mb-4">до</p>
                    <Carousel srcImagesArray={imagesBefore} />
                </div>}

                <div className="flex flex-col bg-t-brown-light p-8">
                    <p className="text-t-xl text-t-brown">Опис:</p>
                    <p>{workInfo.description}</p>
                </div>


                <div className="flex flex-col gap-5 flex-wrap mt-5 self-end">
                    {[{ href: '/contacts', text: 'Записатися' }, { href: '/gallery', text: 'Галерея' }].map((link) => (
                        <TLink href={link.href}>{link.text}</TLink>
                    ))}
                </div>
            </article>
        </PageWrap>
    )
};