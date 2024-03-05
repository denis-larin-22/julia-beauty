import Link from 'next/link';
import styles from './index.module.css';

interface IProps {
    children: string,
    href: string
    wrapStyles?: string
}

export default function TLink({ children, href, wrapStyles }: IProps) {
    return (
        <Link
            href={href}
            className={`${styles.animated_link} ${wrapStyles}`}
        >
            <svg viewBox="0 0 24 24" className={`${styles.arr2}`} xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
            </svg>
            <span className={styles.text}>{children}</span>
            <span className={styles.circle}></span>
            <svg viewBox="0 0 24 24" className={styles.arr1} xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
            </svg>
        </Link>

    )
}