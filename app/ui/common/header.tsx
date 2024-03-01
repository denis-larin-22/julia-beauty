'use client'
import Link from "next/link";
import { CallIcon, InstagramIcon, MailIcon, TelegramIcon, ViberIcon } from "../assets/links-icons";
import { Logo } from "../assets/logo";
import { inter, openSans } from "../fonts";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { socialNetworksLinks } from "./social-networks-links";
import AnimatedWrap from "./animated-wrap";

interface ILinkObj {
    name: string,
    href: string
}

const Header = () => {
    const pathname = usePathname();
    const [toggleNavbar, setToggleNavbar] = useState(false);

    const links: Array<ILinkObj> = [
        { name: 'Головна', href: '/' },
        { name: 'Про мене', href: '/about-me' },
        { name: 'Мої роботи', href: '/gallery' },
        { name: 'Послуги', href: '/services-list' },
        { name: 'Відгуки', href: '/feedback' },
        { name: 'Контакти', href: '/contacts' },
    ];

    return (
        <header
            className="bg-white"
        >
            <div className={`bg-t-brown text-white ${inter.className} font-medium text-xs md:text-sm leading-[1.2em]`}>

                {/* contacts desktop*/}
                <div className="hidden md:flex justify-between items-center container py-4">
                    <div className="flex items-center gap-10">
                        <a href="https://www.google.com/intl/ru/gmail/about/" target="_blank" className="hidden sm:flex items-center gap-3">
                            <MailIcon />
                            yarmakulia5@gmail.com
                        </a>
                        <a href="tel:380667718657" className="flex items-center gap-3">
                            <CallIcon />
                            +38 066 771 86 57
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <p className="hidden md:inline">Follow me:</p>
                        <a href="https://t.me/jyliya24" target="_blank">
                            <TelegramIcon />
                        </a>
                        <a href="https://www.instagram.com/julia_magicbeautiful/?igsh=eXo5cGQxdDR5OWZh" target="_blank">
                            <InstagramIcon />
                        </a>
                    </div>
                </div>

                {/* contacts mobile*/}
                <div className="flex justify-center items-center md:hidden fixed bottom-0 left-0 z-50 w-full py-2 bg-t-brown">
                    <ul className="flex items-center justify-center md:justify-normal gap-5">
                        <a href="tel:380667718657" className="">
                            <CallIcon color="black" />
                        </a>
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
            </div >

            {/* nav */}
            <nav className="container relative py-2 md:py-5 flex justify-between lg:justify-around items-center border-t-4 border-t-brown md:border-0">
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
                            className={`uppercase text-t-sm-bold font-medium hover:text-t-brown-strong duration-100 ${pathname === link.href ? 'text-t-brown' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile */}
                <button
                    className="inline-block lg:hidden p-5"
                    onClick={() => setToggleNavbar(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                </button>

                {toggleNavbar &&
                    <div className="fixed top-0 right-0 z-50 bg-t-brown-light w-full h-full p-4 flex flex-col gap-8 pt-16 mobile">
                        {links.map((link, index) => (
                            <AnimatedWrap
                                key={link.name}
                                x={150}
                                opacity={0}
                                duration={0.4}
                                delay={index - (0.92 * index)}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setToggleNavbar(false)}
                                    className={`uppercase text-t-sm-bold font-medium hover:text-t-brown-strong ${pathname === link.href && 'text-t-brown'}`}
                                >
                                    {link.name}
                                </Link>
                            </AnimatedWrap>
                        ))}

                        <AnimatedWrap
                            y={20}
                            opacity={0}
                            delay={0.5}
                            duration={0.5}
                        >
                            <ul className="flex items-center justify-center md:justify-normal gap-5 mt-6">
                                {socialNetworksLinks.map((link, index) => (
                                    <li
                                        key={index}
                                        className="hover:scale-125 duration-150"
                                    >
                                        <a href={link.href} target="_blank">{link.icon}</a>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedWrap>

                        <button
                            className="absolute top-3 right-3 p-5"
                            onClick={() => setToggleNavbar(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                        </button>
                    </div>
                }
            </nav>
        </header >
    )
}

export default Header;