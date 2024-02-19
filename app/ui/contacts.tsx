import { CallIcon, MailIcon } from "./assets/links-icons";
import { inter } from "./fonts";

const Contacts = () => {
    return (
        <div className="bg-white">
            <section className="container py-8 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-5">
                <div className="text-t-sm-regular">
                    <p className="text-t-sm-bold">How to find me?</p>
                    <h4 className="text-t-xl text-t-brown uppercase mb-7">Fale conosco</h4>
                    <p className="mb-7">Não perca mais tempo e entre agora em contato com nossa equipe de especialistas. Teremos o maior prazer em ajudar você.</p>
                    <a href="/" className={`${inter.className} bg-t-brown flex items-center gap-3 text-white max-w-fit px-5 py-2 rounded-full mb-3`}>
                        <CallIcon />
                        0975551247
                    </a>
                    <a href="/" className={`${inter.className} bg-t-brown flex items-center gap-3 text-white max-w-fit px-5 py-2 rounded-full`}>
                        <MailIcon />
                        dnaosjaf@gmail.com
                    </a>
                </div>
                <div className="max-w-[600px] h-[250px] md:h-[450px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1017.5377617531886!2d36.35138650094212!3d50.01070941470507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127090dff1c5403%3A0x628e5accba450193!2z0KHQsNC70L7QvSDQutGA0LDRgdC-0YLRiyAiVmFsYXJpcyI!5e0!3m2!1suk!2sua!4v1707724927505!5m2!1suk!2sua"
                        className="w-full h-full border-2 border-t-brown rounded-md"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </div>
    )
}

export default Contacts;