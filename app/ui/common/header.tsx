'use client'
import Link from "next/link";
import { CallIcon, InstagramIcon, MailIcon, TelegramIcon } from "../assets/links-icons";
import { Logo } from "../assets/logo";
import { inter } from "../fonts";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { socialNetworksLinks } from "./social-networks-links";
import AnimatedWrap from "./animated-wrap";
import { AnimatePresence, motion } from "framer-motion";

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
        { name: 'Галерея', href: '/gallery' },
        { name: 'Послуги', href: '/services-list' },
        { name: 'Відгуки', href: '/feedback' },
        { name: 'Контакти', href: '/contacts' },
    ];

    return (
        <header
            className="bg-white sticky top-0 z-50 md:static"
        >
            <div className={`bg-t-brown text-white ${inter.className} font-medium text-xs md:text-sm leading-[1.2em]`}>

                {/* ontacts desktop*/}
                <nav className="hidden md:flex justify-between items-center container py-4">
                    <div className="flex items-center gap-10">
                        <a href="https://www.google.com/intl/uk/gmail/about/" target="_blank" className="hidden sm:flex items-center gap-3">
                            <MailIcon />
                            yarmakulia5@gmail.com
                        </a>
                        <a href="tel:380667718657" className="flex items-center gap-3">
                            <CallIcon />
                            +38 066 771 86 57
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://www.t.me/jyliya24" target="_blank">
                            <TelegramIcon />
                        </a>
                        <a href="https://www.instagram.com/julia_magicbeautiful/?igsh=eXo5cGQxdDR5OWZh" target="_blank">
                            <InstagramIcon />
                        </a>
                    </div>
                </nav>

                {/* Contacts mobile*/}
                <nav className="md:hidden fixed bottom-0 left-0 z-50 w-full bg-t-brown py-2 flex items-center justify-center gap-5">
                    {socialNetworksLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            className="hover:scale-125 duration-150"
                        >{link.icon}</a>
                    ))}
                </nav>
            </div >

            {/*Desktop website nav */}
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
                            className={`relative z-50 uppercase text-t-sm-bold font-medium hover:text-t-brown-strong duration-100 py-1 overflow-hidden ${pathname === link.href ? 'text-t-brown after:left-full hover:after:left-0' : ''} after:block after:w-full after:h-[2px] after:bg-t-brown after:absolute -after:bottom-1 after:left-full hover:after:left-0 after:duration-200`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile website nav*/}
                <button
                    className="inline-block lg:hidden p-5"
                    onClick={() => setToggleNavbar(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                </button>

                <AnimatePresence>
                    {toggleNavbar &&
                        <motion.nav
                            className="fixed top-0 right-0 z-50 w-screen h-screen flex flex-col items-center justify-center gap-8 pt-16 bg-t-brown-light origin-top-right"
                            initial={{ rotate: '-90deg', opacity: 0, borderTopLeftRadius: '100%', borderBottomLeftRadius: '100%' }}
                            animate={{ rotate: '0', opacity: 1, borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
                            exit={{ rotate: '-90deg', opacity: 0, borderTopLeftRadius: '100%', borderBottomLeftRadius: '100%' }}
                            transition={{ duration: 0.5 }}
                        >
                            {links.map((link, index) => (
                                <AnimatedWrap
                                    key={link.name}
                                    x={150}
                                    opacity={0}
                                    duration={0.4}
                                    delay={index - (0.9 * index)}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setToggleNavbar(false)}
                                        className={`uppercase text-t-md hover:text-t-brown-strong ${pathname === link.href && 'text-t-brown'}`}
                                    >
                                        {link.name}
                                    </Link>
                                </AnimatedWrap>
                            ))}

                            <button
                                className="absolute top-3 right-3 p-5"
                                onClick={() => setToggleNavbar(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                            </button>
                        </motion.nav>
                    }
                </AnimatePresence>
            </nav>
        </header >
    )
}

export default Header;