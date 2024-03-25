import { IIconObj } from "../../lib/types/definitions";
import { CallIcon, InstagramIcon, TelegramIcon } from "../assets/links-icons";

export const socialNetworksLinks: IIconObj[] = [
    {
        title: 'Telegram',
        icon: <TelegramIcon color="black" />,
        href: 'https://t.me/jyliya24'
    },
    {
        title: 'Call number',
        icon: <CallIcon color="black" />,
        href: 'tel:380667718657'
    },
    {
        title: 'Instagram',
        icon: <InstagramIcon color="black" />,
        href: 'https://www.instagram.com/julia_magicbeautiful/?igsh=eXo5cGQxdDR5OWZh'
    },
];