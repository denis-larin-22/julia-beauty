import Link from "next/link";
import { Logo } from "../assets/logo";
import { CallIcon, InstagramIcon, MailIcon, TelegramIcon, ViberIcon } from "../assets/links-icons";
import { openSans } from "../fonts";

interface ILinkObj {
    name: string,
    href: string
}

const Footer = () => {
    const links: Array<ILinkObj> = [
        { name: 'Головна', href: '/' },
        { name: 'Про мене', href: '/about-me' },
        { name: 'Мої роботи', href: '/gallery' },
        { name: 'Послуги', href: '/services-list' },
        { name: 'Відгуки', href: '/feedback' },
        { name: 'Контакти', href: '/contacts' },
    ];

    return (
        <footer className="bg-t-black text-white">
            <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 sm:py-8">
                <Logo style="text-white self-center sm:self-auto" iconColor="brown" />
                <div className={`${openSans.className} flex flex-col sm:flex-row gap-10 lg:gap-44 mt-3 items-start sm:items-center`} >
                    < nav className="flex flex-col gap-3">
                        {links.map((link) => (
                            <Link
                                href={link.href}
                                key={link.name}
                                className="uppercase text-t-sm-bold font-medium hover:text-t-brown"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <a href="https://www.t.me/jyliya24" target="_blank">
                                <TelegramIcon />
                            </a>
                            <a href="https://www.instagram.com/julia_magicbeautiful/?igsh=eXo5cGQxdDR5OWZh" target="_blank">
                                <InstagramIcon />
                            </a>
                        </div>
                        <a href="tel:380667718657" className="flex items-center gap-3">
                            <CallIcon />
                            +38 066 771 86 57
                        </a>
                        <a href="https://www.google.com/intl/ru/gmail/about/" target="_blank" className="flex items-center gap-3">
                            <MailIcon />
                            yarmakulia5@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer; 