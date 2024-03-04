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
            <h6 className="absolute top-3/4 group-hover:top-0 duration-100 w-full h-full p-1 md:p-2 group-hover:pt-36 text-t-sm sm:text-t-md md:text-t-sm-semibold text-white text-left bg-[#00000095]">{work.name}</h6>
            <Link
                href={`/gallery/${work.id}/workitem`}
                className="absolute -bottom-24 group-hover:-bottom-7 -right-24 group-hover:-right-6 duration-100 delay-75 w-32 h-32 rounded-full flex items-center justify-center bg-t-brown cursor-pointer"
            >Відкрити</Link>
        </div>
    )
}