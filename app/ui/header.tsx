'use client'
import Link from "next/link";
import { CallIcon, MailIcon, TelegramIcon, ViberIcon } from "./assets/links-icons";
import { Logo } from "./assets/logo";
import { inter } from "./fonts";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface ILinkObj {
    name: string,
    href: string
}

const Header = () => {
    const pathname = usePathname();
    const [toggleNavbar, setToggleNavbar] = useState(false);

    const links: Array<ILinkObj> = [
        { name: 'Home', href: '/' },
        { name: 'About me', href: '/about-me' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Services', href: '/services-list' },
        { name: 'Feedback', href: '/feedback' },
        { name: 'Contacts', href: '/contacts' },
    ];

    return (
        <header>
            <div className="bg-t-brown">
                {/* contacts */}
                <div className={`container py-4 bg-t-brown text-white ${inter.className} font-medium text-xs md:text-sm leading-[1.2em] flex justify-between items-center`}>
                    <div className="flex items-center gap-10">
                        <a href="/" className="hidden sm:flex items-center gap-3">
                            <MailIcon />
                            contato@buenobeauty.com.br
                        </a>
                        <a href="/" className="flex items-center gap-3">
                            <CallIcon />
                            097 555 12 12
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <p className="hidden md:inline">Follow me:</p>
                        <a href="">
                            <TelegramIcon />
                        </a>
                        <a href="">
                            <ViberIcon />
                        </a>
                    </div>
                </div>
                {/* nav */}
            </div >
            <nav className="container relative py-2 md:py-5 flex justify-between lg:justify-around items-center">
                <Link
                    href="/"
                >
                    <Logo iconColor="black" />
                </Link>
                <div className="hidden lg:flex gap-8">
                    {links.map((link) => (
                        <Link
                            href={link.href}
                            key={link.name}
                            className={`uppercase text-t-sm-bold font-medium hover:text-t-brown-strong ${pathname === link.href && 'text-t-brown'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                {/* Mobile */}
                <button
                    className="inline-block lg:hidden absolute top-3 right-3"
                    onClick={() => setToggleNavbar(true)}
                >
                    =
                </button>
                {toggleNavbar && <div className="fixed top-0 right-0 z-50 bg-t-brown-light w-60 h-screen p-4 flex flex-col gap-8 pt-16">
                    {links.map((link) => (
                        <Link
                            href={link.href}
                            key={link.name}
                            onClick={() => setToggleNavbar(false)}
                            className={`uppercase text-t-sm-bold font-medium hover:text-t-brown-strong ${pathname === link.href && 'text-t-brown'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        className="absolute top-3 right-3"
                        onClick={() => setToggleNavbar(false)}
                    >
                        x
                    </button>
                    <Logo style="self-center absolute bottom-16" iconColor="black" />
                </div>}
            </nav>
        </header>
    )
}

export default Header;