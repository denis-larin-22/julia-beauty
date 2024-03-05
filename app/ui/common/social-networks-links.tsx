import { CallIcon, InstagramIcon, TelegramIcon } from "../assets/links-icons";

interface IIconObj {
    icon: JSX.Element;
    href: string;
}

export const socialNetworksLinks: IIconObj[] = [
    {
        icon: <TelegramIcon color="black" />,
        href: 'https://t.me/jyliya24'
    },
    {
        icon: <CallIcon color="black" />,
        href: 'tel:380667718657'
    },
    {
        icon: <InstagramIcon color="black" />,
        href: 'https://www.instagram.com/julia_magicbeautiful/?igsh=eXo5cGQxdDR5OWZh'
    },
];