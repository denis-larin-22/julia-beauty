import PageWrap from "../ui/common/page-wrap";
import GalleryList from "../ui/gallery/gallery-list";

export default function Gallery() {

    return (
        <PageWrap
            srcBackground="/images/gallery/haircut-tools.webp"
            title="Мої роботи. Стиліст-парикмахер у Харкові"
        >
            <section className="container py-5 flex flex-wrap gap-6 items-center justify-around bg-white z-40">
                <GalleryList />
            </section>
        </PageWrap>
    )
};