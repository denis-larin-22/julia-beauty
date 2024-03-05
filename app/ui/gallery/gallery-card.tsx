import Link from "next/link";

interface IWorkCard {
    id: string;
    name: string;
    image: string;
}

export default function GalleryCard({ work }: { work: IWorkCard }) {
    return (
        <div
            className="group relative h-full rounded-xl shadow-xl overflow-hidden flex flex-col"
        >
            <img
                width={200}
                height={256}
                src={work.image}
                loading="lazy"
                alt="The photo of work from portfolio"
                className="w-full h-full rounded-xl object-cover brightness-75"
            />
            <h6 className="absolute top-3/4 group-hover:top-0 duration-100 w-full h-full p-1 md:p-2 text-t-sm sm:text-t-md md:text-t-sm-semibold text-white text-left bg-[#00000095] after:block after:h-1 after:w-14 after:mt-4 after:bg-t-brown">{work.name}</h6>
            <Link
                href={`/gallery/${work.id}/workitem`}
                className="absolute -bottom-20 group-hover:-bottom-6 -right-20 group-hover:-right-2 duration-100 delay-75 w-28 h-28 rounded-full border-4 border-t-brown-light flex items-center justify-center bg-t-brown cursor-pointer text-t-brown-light text-t-sm-bold"
            >Перейти</Link>
        </div>
    )
}