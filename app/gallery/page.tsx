import PageWrap from "../ui/common/page-wrap";
import GalleryList from "../ui/gallery/gallery-list";

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