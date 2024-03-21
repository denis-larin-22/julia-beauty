import AnimatedWrap from "../ui/common/animated-wrap";
import { Logo } from "../ui/assets/logo";
import { inter } from "../ui/fonts";
import PageWrap from "../ui/common/page-wrap";
import { InstagramIcon, MailIcon, TelegramIcon } from "../ui/assets/links-icons";
import { Metadata } from "next";
import { IIconObj } from "../lib/types/definitions";

export const metadata: Metadata = {
    title: 'Контакти | Julia Magic Beauty',
    description: 'Julia Magic Beauty - перукар-стиліст у Харкові. Контакти та адреса салону.',
    openGraph: {
        title: 'Контакти | Julia Magic Beauty',
        description: 'Julia Magic Beauty - перукар-стиліст у Харкові. Контакти та адреса салону.',
        type: 'website',
        locale: 'uk_UA',
        url: '',
        siteName: 'Julia Magic Beauty'
    }
};

const Contacts = () => {
    const socialNetworksLinks: IIconObj[] = [
        {
            title: 'Telegram',
            icon: <TelegramIcon color="black" />,
            href: 'https://t.me/jyliya24'
        },
        {
            title: 'Instagram',
            icon: <InstagramIcon color="black" />,
            href: 'https://www.instagram.com/julia_magicbeautiful/?igsh=eXo5cGQxdDR5OWZh'
        },
        {
            title: 'email',
            icon: <MailIcon color="black" />,
            href: 'https://www.google.com/intl/ru/gmail/about/'
        },
    ];

    return (
        <PageWrap
            srcBackground="/images/contacts/scissors.webp"
            title="Контакти"
        >
            <section className="container grid grid-cols-1 md:grid-cols-2 gap-5 p-5 md:p-10">
                <div className="flex flex-col gap-5">
                    <Logo iconColor="black" style="self-center" />

                    <AnimatedWrap
                        x={100}
                        opacity={0}
                        duration={0.6}
                    >
                        <h4 className="text-t-xl mb-5">Адреса</h4>
                        <p className="text-t-md font-normal text-gray-500">вул. Валентинівська 37/128</p>
                    </AnimatedWrap>

                    <AnimatedWrap
                        x={100}
                        opacity={0}
                        duration={0.5}
                        delay={0.2}
                    >
                        <h4 className="text-t-xl">Телефон</h4>
                        <a href="tel:380667718657" className="text-t-lg font-normal">+38 066 771 86 57</a>
                    </AnimatedWrap>

                    <AnimatedWrap
                        y={50}
                        opacity={0}
                        duration={0.5}
                        delay={0.4}
                    >
                        <ul className="flex items-center justify-center md:justify-normal gap-5">
                            {socialNetworksLinks.map((link, index) => (
                                <li
                                    key={index}
                                    className="hover:scale-125 duration-150"
                                >
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        title={`Посилання на ${link.title}`}
                                    >
                                        {link.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </AnimatedWrap>
                </div>

                <AnimatedWrap
                    styles="max-w-[600px] h-[250px] md:h-[450px]"
                    x="-200px"
                    opacity={0}
                    duration={0.5}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1017.5377617531886!2d36.35138650094212!3d50.01070941470507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127090dff1c5403%3A0x628e5accba450193!2z0KHQsNC70L7QvSDQutGA0LDRgdC-0YLRiyAiVmFsYXJpcyI!5e0!3m2!1suk!2sua!4v1707724927505!5m2!1suk!2sua"
                        className="w-full h-full border-2 border-t-brown rounded-md"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </AnimatedWrap>
            </section>
        </PageWrap>
    )
}

export default Contacts;