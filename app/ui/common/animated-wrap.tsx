'use client'

import { motion, useInView } from "framer-motion";
import { IAnimationValues } from "../../lib/types/definitions";
import { _createAnimation } from "../../lib/_utils/_createFramerAnimation";
import { RefObject, useRef } from "react";

interface IProps extends IAnimationValues {
    children: Readonly<React.ReactNode>,
    styles?: string,
    refTriggerBlock?: RefObject<Element>
}

export const AnimatedWrap = ({
    children,
    refTriggerBlock,
    x,
    y,
    opacity,
    scale,
    delay,
    duration,
    styles
}: IProps) => {

    const [initialBlock, animateBlock, transitionBlock] = _createAnimation({ x, y, opacity, scale, delay, duration });

    if (refTriggerBlock) {
        const isInView = useInView(refTriggerBlock, { once: false });

        return (
            <motion.div
                className={styles}
                initial={initialBlock}
                animate={isInView ? animateBlock : 'none'}
                transition={transitionBlock}
            >
                {children}
            </motion.div>
        )
    } else {
        return (
            <motion.div
                className={styles}
                initial={initialBlock}
                animate={animateBlock}
                transition={transitionBlock}
            >
                {children}
            </motion.div>
        )
    }

}

export default AnimatedWrap;