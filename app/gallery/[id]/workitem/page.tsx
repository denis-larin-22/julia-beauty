import Link from "next/link";
import Carousel from "../../../ui/carousel";
import TitleBlock from "../../../ui/title-block";

const WorkItem = () => {
    const images = ['https://images.unsplash.com/photo-1629397685944-7073f5589754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1595475716260-0f2c35f5a40f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1624981014681-47c20b7bb67b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'];

    return (
        <article className="">
            <TitleBlock
                title="My work"
                styles="bg-[url('/images/gallery/haircut-tools.webp')]"
            />

            <div className="container flex flex-col gap-5 py-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-2 md:gap-5 text-t-brown-light text-6xl md:text-8xl">
                    <Carousel srcImagesArray={images} />
                    <p>result</p>

                    <p className="text-end">before</p>
                    <Carousel srcImagesArray={images} />
                </div>

                <div className="max-w-[55em]">
                    <h4 className="text-t-xxl text-t-brown">The name of work</h4>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptate esse sint, mollitia ut consequatur id, nihil accusantium deleniti sunt consequuntur inventore? Quo aliquam dolore odio blanditiis neque sapiente dicta?
                        Tenetur ducimus nulla rerum quos itaque, minima quidem incidunt dignissimos ea, quod optio inventore ad facilis neque possimus magni voluptatem quas exercitationem! Dolores blanditiis nemo debitis libero nisi modi excepturi!</p>

                    <Link href="/contacts" className="inline-block text-t-black hover:text-white border-2 border-t-brown bg-transparent hover:bg-t-brown py-2 px-5 mt-5 rounded-xl duration-100">Записатися »</Link>
                </div>
            </div>




        </article >
    )
}

export default WorkItem;