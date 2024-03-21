'use client'
import { _createAnimation } from "../../lib/_utils/_createFramerAnimation";
import { syne } from "../fonts";
import { LogoIcon } from "./logo-icon";
import { motion } from "framer-motion";

interface IProps {
    style?: string,
    iconColor?: 'black' | 'brown'
}

export const Logo = ({ style, iconColor }: IProps) => {
    const [initialJuliaWord, animateJuliaWord, transitionJuliaWord] = _createAnimation({
        opacity: 0,
        scale: 1.1,
        x: '-10px',
        duration: 0.5,
        delay: 0.2
    });
    const [initialMagicWord, animateMagicWord, transitionMagicWord] = _createAnimation({
        opacity: 0,
        scale: 1.1,
        y: '-10px',
        duration: 0.5,
        delay: 0.4
    });
    const [initialBeautyWord, animateBeautyWord, transitionBeautyWord] = _createAnimation({
        opacity: 0,
        scale: 1.1,
        y: '10px',
        duration: 0.5,
        delay: 0.4
    });


    return (
        <div className={`${syne.className} flex items-center gap-1 text-[0.8em] md:text-t-sm-semibold tracking-[0.5em] ${style}`}>
            <motion.p
                className={iconColor === 'black' ? 'black' : 'white'}
                initial={initialJuliaWord}
                animate={animateJuliaWord}
                transition={transitionJuliaWord}
            >
                JULIA
            </motion.p>
            <LogoIcon iconColor={iconColor} />

            <div className="text-t-brown">
                <motion.p
                    initial={initialMagicWord}
                    animate={animateMagicWord}
                    transition={transitionMagicWord}
                >
                    MAGIC
                </motion.p>
                <motion.p
                    initial={initialBeautyWord}
                    animate={animateBeautyWord}
                    transition={transitionBeautyWord}
                >
                    BEAUTY
                </motion.p>
            </div>
        </div >
    )
};