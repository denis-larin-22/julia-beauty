import Link from "next/link";

interface IWorkCard {
    id: string;
    name: string;
    image: string;
}

export default function GalleryCard({ work }: { work: IWorkCard }) {
    return (
        <div className="group relative h-full rounded-xl shadow-xl overflow-hidden flex flex-col hover:shadow-md hover:shadow-black">
            <img
                width={200}
                height={256}
                src={work.image}
                loading="lazy"
                alt="The photo of work from portfolio"
                className="w-full h-full rounded-xl object-cover brightness-75 group-hover:brightness-50 all duration-150"
            />
            <div className="flex items-center justify-center h-full absolute inset-0">
                <Link href={`/gallery/${work.id}/workitem`} className="h-10 w-10 rounded-full bg-t-glass flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 duration-150 -translate-y-10 group-hover:translate-y-0">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M419-80q-28 0-52.5-12T325-126L107-403l19-20q20-21 48-25t52 11l74 45v-328q0-17 11.5-28.5T340-760q17 0 29 11.5t12 28.5v472l-97-60 104 133q6 7 14 11t17 4h221q33 0 56.5-23.5T720-240v-160q0-17-11.5-28.5T680-440H461v-80h219q50 0 85 35t35 85v160q0 66-47 113T640-80H419ZM167-620q-13-22-20-47.5t-7-52.5q0-83 58.5-141.5T340-920q83 0 141.5 58.5T540-720q0 27-7 52.5T513-620l-69-40q8-14 12-28.5t4-31.5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 17 4 31.5t12 28.5l-69 40Zm335 280Z" fill="white" />
                    </svg>
                </Link>
            </div>
            <h5 className="absolute top-3/4 w-full h-full p-1 md:p-2 text-xs sm:text-t-md md:text-t-sm-semibold text-gray-200 text-left bg-[#00000095]">{work.name}</h5>
        </div>
    );
}
