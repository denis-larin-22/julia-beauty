import { InstagramIcon, TelegramIcon, ViberIcon, WhatsappIcon } from "../assets/links-icons";

interface IIconObj {
    icon: JSX.Element;
    href: string;
}

export const socialNetworksLinks: IIconObj[] = [
    {
        icon: <TelegramIcon color="black" />,
        href: '/'
    },
    {
        icon: <ViberIcon color="black" />,
        href: '/'
    },
    {
        icon: <InstagramIcon color="black" />,
        href: 'https://www.instagram.com/julia_magicbeautiful/?igsh=eXo5cGQxdDR5OWZh'
    },
    {
        icon: <WhatsappIcon color="black" />,
        href: '/'
    }
];