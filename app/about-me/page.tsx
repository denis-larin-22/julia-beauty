import Image from "next/image";
import Link from "next/link";
import PageWrap from "../ui/common/page-wrap";
import AnimatedWrap from "../ui/common/animated-wrap";
import TLink from "../ui/common/link";

const AboutMe = () => {
    return (
        <PageWrap
            srcBackground="/images/about-me/bg1.webp"
            title="About me"
        >
            <article className="container grid grid-cols-1 md:grid-cols-2 items-center gap-3 md:gap-10 py-5 md:py-0">
                <AnimatedWrap
                    x={"-70px"}
                    opacity={0}
                    duration={0.5}
                >
                    <div className="">
                        <h2 className="text-t-xxl text-black border-b-2 border-t-brown w-fit mb-5 md:mb-11">Hello world</h2>
                        <p className="text-t-sm-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quas rerum, beatae a nihil fugit. Similique, voluptate excepturi adipisci voluptates esse nemo hic. Eius beatae tenetur nobis obcaecati! Ab, nemo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, aspernatur accusantium alias nihil ex dolorum perferendis temporibus nostrum molestias laudantium saepe? Hic exercitationem ad delectus blanditiis aperiam. Repudiandae, voluptatibus temporibus.</p>
                    </div>
                </AnimatedWrap>
                <AnimatedWrap
                    x={70}
                    opacity={0}
                    duration={0.5}
                    delay={0.3}
                >
                    <Image
                        src="/images/about-me/bg2.webp"
                        width={600}
                        height={600}
                        alt="Tools for haircut"
                        className="mx-auto md:m-0 w-auto h-auto"
                    />
                </AnimatedWrap>
                <AnimatedWrap
                    x={"-70px"}
                    opacity={0}
                    duration={0.5}
                    delay={0.6}
                >
                    <Image
                        src="/images/about-me/bg3.webp"
                        width={600}
                        height={600}
                        alt="Tools for haircut"
                        className="mx-auto md:m-0 order-last md:order-none w-auto h-auto"
                    />
                </AnimatedWrap>
                <AnimatedWrap
                    x={70}
                    opacity={0}
                    duration={0.5}
                    delay={0.9}
                >
                    <div className="flex flex-col items-center gap-5">
                        <p className="text-t-sm-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quas rerum, beatae a nihil fugit. Similique, voluptate excepturi adipisci voluptates esse nemo hic. Eius beatae tenetur nobis obcaecati! Ab, nemo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, aspernatur accusantium alias nihil ex dolorum perferendis temporibus nostrum molestias laudantium saepe? Hic exercitationem ad delectus blanditiis aperiam. Repudiandae, voluptatibus temporibus.</p>
                        <TLink href="/gallery">Галерея</TLink>
                    </div>
                </AnimatedWrap>
            </article>
        </PageWrap>
    )
}

export default AboutMe;