import { CallIcon, InstagramIcon, MailIcon, TelegramIcon } from "../assets/links-icons";
import { inter } from "../fonts";

interface IIconObj {
    icon: JSX.Element;
    href: string;
}

const Contacts = () => {
    const socialNetworksLinks: IIconObj[] = [
        {
            icon: <TelegramIcon color="black" />,
            href: 'https://t.me/jyliya24'
        },
        {
            icon: <InstagramIcon color="black" />,
            href: 'https://www.instagram.com/julia_magicbeautiful/?igsh=eXo5cGQxdDR5OWZh'
        },
        {
            icon: <MailIcon color="black" />,
            href: 'https://www.google.com/intl/ru/gmail/about/'
        },
    ];

    return (
        <div className="bg-white">
            <section className="container py-8 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-5">
                <div className="text-t-sm-regular">
                    <p className="text-t-md uppercase">Зв'язок зі мною</p>
                    <h4 className="text-t-xl text-t-brown uppercase mb-7">Мої контакти</h4>
                    <p className="mb-7 text-t-md">Запрошую вас до світу краси та догляду за собою і з нетерпінням чекаю на ваш візит!</p>
                    <a href="tel:380667718657" className="text-t-lg font-normal">+38 066 771 86 57</a>

                    <ul className="flex items-center justify-center md:justify-normal gap-5 mt-5">
                        {socialNetworksLinks.map((link, index) => (
                            <li
                                key={index}
                                className="hover:scale-125 duration-150"
                            >
                                <a href={link.href} target="_blank">{link.icon}</a>
                            </li>
                        ))}
                    </ul>

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