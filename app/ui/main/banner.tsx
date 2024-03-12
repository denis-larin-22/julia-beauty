import Image from "next/image"
import AnimatedWrap from "../common/animated-wrap";
import { syne } from "../fonts";

const Banner = () => {
    return (
        <div className="h-96 md:h-[586px] bg-t-brown">
            <section className="h-full relative container overflow-hidden flex items-end lg:items-center justify-center lg:justify-between">
                <Image
                    src="/images/circles-group.webp"
                    alt="Decoration image of circles"
                    width={848}
                    height={449}
                    className="absolute top-24 left-16 z-0 w-auto h-auto"
                />
                <AnimatedWrap
                    x="100px"
                    opacity={0}
                    duration={1}
                >
                    <Image
                        src="/images/red-haired-girl.webp"
                        alt="A girl with long red hair"
                        width={614}
                        height={787}
                        priority
                        className="absolute lg:static -bottom-4 left-6 md:left-32 z-20 brightness-75 w-auto h-auto"
                    />
                </AnimatedWrap>

                <div className="max-w-full lg:max-w-[700px] bg-[#0000008a] lg:bg-transparent p-5 rounded-lg z-30 text-center lg:text-left mb-4 text-white">
                    <AnimatedWrap
                        y={"-50px"}
                        opacity={0}
                        delay={0.4}
                        duration={0.5}
                    >
                        <h2 className={`${syne.className} text-t-xxl uppercase`}>
                            Julia Magic Beauty
                        </h2>
                    </AnimatedWrap>
                    <AnimatedWrap
                        y={"-50px"}
                        opacity={0}
                        delay={0.6}
                        duration={0.5}
                    >
                        <h1 className="text-t-lg uppercase my-6 text-t-brown-light">
                            перукар-стиліст харків | стрижка | фарбування | догляд за волоссям
                        </h1>
                    </AnimatedWrap>
                    <AnimatedWrap
                        y={"-40px"}
                        opacity={0}
                        delay={1}
                        duration={0.5}
                    >
                        <h3 className="text-t-md">
                            Зануртеся у світ краси та догляду, де кожен момент - це можливість відчути себе особливою.
                        </h3>
                    </AnimatedWrap>
                </div>
            </section>
        </div>
    )
}

export default Banner;