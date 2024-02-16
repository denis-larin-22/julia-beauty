import Link from "next/link";
import { inter } from "./ui/fonts";

const NotFound = () => {
    return (
        <div className={`${inter.className} min-h-[80vh] text-black text-center flex flex-col items-center justify-center`}>
            <h4 className="text-t-xxl text-t-brown">404 Page Not Found</h4>
            <p className="text-t-md">Вибачте, але на жаль такої сторінки не існує</p>
            <Link href="/" className="inline-block text-t-black hover:text-white border-2 border-t-brown bg-transparent hover:bg-t-brown py-2 px-5 mt-5 rounded-xl duration-100">На головну »</Link>
        </div>
    )
}

export default NotFound;