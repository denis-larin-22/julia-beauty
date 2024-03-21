import { Inter, Syne, Open_Sans } from 'next/font/google';

export const inter = Inter({
    subsets: ['cyrillic'],
    weight: ['400', '600', '700']
});

export const syne = Syne({
    subsets: ['latin'],
    weight: ['500', '600']
});

export const openSans = Open_Sans({
    subsets: ['cyrillic'],
    weight: ['500', '600']
})