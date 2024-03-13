import Image from "next/image";
import PageWrap from "../ui/common/page-wrap";
import AnimatedWrap from "../ui/common/animated-wrap";
import TLink from "../ui/common/link";
import TextHighlighter from "../ui/common/text-highlighter";

const AboutMe = () => {
    return (
        <PageWrap
            srcBackground="/images/about-me/bg1.webp"
            title="Про мене"
        >
            <article className="container grid grid-cols-1 md:grid-cols-2 items-center gap-3 md:gap-10 py-5 md:py-0">
                <AnimatedWrap
                    x={"-70px"}
                    opacity={0}
                    duration={0.5}
                >
                    <div className="">
                        <div className="flex items-center md:items-end gap-3 mb-5">
                            <Image
                                src="/images/about-me/avatar-admin.webp"
                                width={128}
                                height={128}
                                alt="Фото парикмахера-стиліста Юлії"
                                className="relative z-10 rounded-full mt-1 w-24 md:w-32 h-24 md:h-32 object-cover border-4 border-t-brown"
                            />
                            <p className="text-t-xxl text-black border-b-2 border-t-brown w-fit mb-5 md:mb-11">Привіт👋</p>

                        </div>
                        <p>Мене звуть <TextHighlighter>Юлія,</TextHighlighter> я професійний перукар-стиліст з більш ніж двадцятирічним досвідом роботи в індустрії краси. <TextHighlighter>Моє покликання</TextHighlighter> — створювати унікальні образи, втілюючи бажання моїх клієнтів в реальність. Працюючи <TextHighlighter>в Харкові,</TextHighlighter> я забезпечую високий рівень сервісу і професійного підходу <TextHighlighter>до кожного клієнта.</TextHighlighter></p>
                        <p className="mt-3">Моя мета — не просто змінити ваш зовнішній вигляд, а підкреслити вашу <TextHighlighter>індивідуальність і неповторність.</TextHighlighter> Завдяки моєму багаторічному досвіду і постійному навчанню останнім тенденціям, я пропоную <TextHighlighter>широкий спектр послуг,</TextHighlighter> включаючи модні стрижки, фарбування, блонд, та багато інших послуг з догляду за волоссям.</p>
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
                    {/* Нужно поменять картинку */}
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
                        <p>Кожна моя робота ґрунтується на <TextHighlighter>увазі до деталей та індивідуальному підході</TextHighlighter> до кожного клієнта. Я прагну до того, щоб кожен, хто відвідує моє крісло, почував себе комфортно і виходив з впевненістю у своєму новому образі.</p>
                        <p className="mt-3">Якщо ви шукаєте <TextHighlighter>досвідченого перукаря-стиліста у Харкові,</TextHighlighter> який допоможе вам оновити ваш стиль і підкреслити вашу красу, звертайтеся до мене. Я втілю <TextHighlighter>усі ваші мрії</TextHighlighter> про ідеальну зачіску у реальність!</p>
                        <TLink href="/gallery">Галерея</TLink>
                    </div>
                </AnimatedWrap>
            </article>
        </PageWrap>
    )
}

export default AboutMe;