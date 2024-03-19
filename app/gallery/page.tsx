import { Metadata } from "next";
import PageWrap from "../ui/common/page-wrap";
import GalleryList from "../ui/gallery/gallery-list";

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

export default function Gallery() {

    return (
        <PageWrap
            srcBackground="/images/gallery/haircut-tools.webp"
            title="Мої роботи. Стиліст-перукар у Харкові"
        >
            <section className="container py-5">
                <GalleryList />
            </section>
        </PageWrap>
    )
};