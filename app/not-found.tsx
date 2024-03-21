import { inter } from "./ui/fonts";
import TLink from "./ui/common/link";

const NotFound = () => {
    return (
        <div className={`${inter.className} min-h-[80vh] text-black text-center flex flex-col items-center justify-center`}>
            <h4 className="text-t-xxl text-t-brown">404 Page Not Found</h4>
            <p className="text-t-md">Вибачте, але на жаль такої сторінки не існує</p>
            <TLink href="/" wrapStyles="mt-5">На головну</TLink>
        </div>
    )
}

export default NotFound;