import { LogoIcon } from "./logo-icon"

export const Logo = ({ style, iconColor }: { style?: string, iconColor?: 'black' | 'brown' }) => {
    return (
        <div className={`flex items-center gap-1 md:gap-2 text-[0.8em] md:text-t-sm-semibold tracking-[0.5em] ${style}`}>
            <p className="">JULIA</p>
            <LogoIcon iconColor={iconColor} />
            <p className="text-t-brown">BEAUTY</p>
        </div >
    )
}