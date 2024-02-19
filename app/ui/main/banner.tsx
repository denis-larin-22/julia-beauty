import Image from "next/image"
import Link from "next/link";
import AnimatedWrap from "../common/animated-wrap";

const Banner = () => {
    return (
        <div className="h-96 md:h-[586px] bg-t-brown">
            <section className="h-full relative container overflow-hidden flex items-end lg:items-center justify-center lg:justify-between">
                <Image
                    src="/images/circles-group.png"
                    alt="Decoration image of circles"
                    width={848}
                    height={449}
                    className="absolute top-24 left-16 z-0 w-auto h-auto"
                />
                <AnimatedWrap
                    y={100}
                    opacity={0}
                    duration={0.8}
                >
                    <Image
                        src="/images/red-haired-girl.png"
                        alt="A girl with long red hair"
                        width={614}
                        height={787}
                        priority
                        className="absolute lg:static -bottom-4 left-6 md:left-32 z-20 brightness-75 w-auto h-auto"
                    />
                </AnimatedWrap>

                <div className="max-w-[700px] z-30 text-center lg:text-left mb-4 text-white">
                    <AnimatedWrap
                        y={"-50px"}
                        opacity={0}
                        delay={0.4}
                        duration={0.5}
                    >
                        <h1 className="text-t-xxl uppercase">
                            seus cabelos precisam
                            dos cuidados certos.
                        </h1>
                    </AnimatedWrap>
                    <AnimatedWrap
                        y={"-50px"}
                        opacity={0}
                        delay={0.6}
                        duration={0.5}
                    >
                        <p className="text-t-md my-6">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        </p>
                    </AnimatedWrap>
                    <AnimatedWrap
                        y={"-40px"}
                        opacity={0}
                        delay={1}
                        duration={0.5}
                    >
                        <Link href="/about-me" className="bg-t-black hover:bg-black rounded-lg py-3 px-6 text-white">Про мене »</Link>
                    </AnimatedWrap>
                </div>
            </section>
        </div>
    )
}

export default Banner;