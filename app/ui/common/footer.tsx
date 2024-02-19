import Link from "next/link";
import { Logo } from "../assets/logo";
import { CallIcon, MailIcon, TelegramIcon, ViberIcon } from "../assets/links-icons";

interface ILinkObj {
    name: string,
    href: string
}

const Footer = () => {
    const links: Array<ILinkObj> = [
        { name: 'Home', href: '/' },
        { name: 'About me', href: '/about-me' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Services', href: '/services-list' },
        { name: 'Feedback', href: '/feedback' },
        { name: 'Contacts', href: '/contacts' },
    ]

    return (
        <footer className="bg-t-black text-white">
            <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 sm:py-8">
                <Logo style="text-white self-center sm:self-auto" iconColor="brown" />
                <div className="flex flex-col sm:flex-row gap-10 lg:gap-44 mt-3 items-start sm:items-center">
                    <nav className="flex flex-col gap-3">
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
                            <a href="">
                                <TelegramIcon />
                            </a>
                            <a href="">
                                <ViberIcon />
                            </a>
                        </div>
                        <a href="/" className="flex items-center gap-3">
                            <CallIcon />
                            097 555 12 17
                        </a>
                        <a href="/" className="flex items-center gap-3">
                            <MailIcon />
                            contato@buenobeauty.com.br
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer; 