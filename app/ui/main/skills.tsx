'use client'
import Image from "next/image";
import TextHighlighter from "../common/text-highlighter";
import AnimatedWrap from "../common/animated-wrap";
import { useRef } from "react";

interface ISkillObj {
    text: string,
    icon: string
}

const Skills = () => {
    const ref = useRef(null);
    const skillsStack: Array<ISkillObj> = [
        {
            text: 'Професійне обладнання та інструменти.',
            icon: '/images/001-salon.webp'
        },
        {
            text: 'Висока якість послуг та индивідуальний підхід.',
            icon: '/images/003-hair-cutting.webp'
        },
        {
            text: 'Широкий комплекс послуг.',
            icon: '/images/002-shampoo.webp'
        },
        {
            text: 'Лише преміальні засоби.',
            icon: '/images/005-toiletries.webp'
        }
    ];

    return (
        <article className="relative z-10 max-w-t-maxScreen mx-auto bg-white flex flex-col md:flex-row">
            <div className="container max-w-[577px] my-6 lg:my-12 2xl:my-28">
                <AnimatedWrap
                    refTriggerBlock={ref}
                    x={'100px'}
                    opacity={0}
                    duration={0.3}
                    delay={0.2}
                >
                    <p className="uppercase text-t-lg">Чому</p>
                </AnimatedWrap>
                <AnimatedWrap
                    refTriggerBlock={ref}
                    x={'100px'}
                    opacity={0}
                    duration={0.3}
                    delay={0.3}
                >
                    <h2 className="uppercase text-t-xl text-t-brown">обирають мене?</h2>
                </AnimatedWrap>
                <AnimatedWrap
                    refTriggerBlock={ref}
                    x={'100px'}
                    opacity={0}
                    duration={0.3}
                    delay={0.4}
                >
                    <p className="text-t-sm-regular my-4 lg:my-10 max-w-96 lg:max-w-full">
                        <TextHighlighter>Ласкаво прошу</TextHighlighter> до мого світу краси та стилю <TextHighlighter>у Харкові,</TextHighlighter> де головною метою є підкреслення вашої неповторності та створення найкращого образу. Мене звуть <TextHighlighter>Юлія</TextHighlighter> і я справжній майстер свого діла, з багаторічним досвідом та неймовірним талантом. Переваги моєї роботи:
                    </p>
                </AnimatedWrap>


                <ul
                    ref={ref}
                    className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-10"
                >
                    {skillsStack.map((skill, index) => (
                        <li
                            key={index}
                            className="max-w-40 md:max-w-64 flex flex-col lg:flex-row items-center sm:items-start gap-x-0 md:gap-x-5"
                        >
                            <Image
                                src={skill.icon}
                                alt={`Advantages`}
                                width={80}
                                height={80}
                                className="w-auto h-auto mb-2"
                            />
                            <p className="text-t-sm-regular text-center sm:text-left">{skill.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Image
                src="/images/female-hairdresser-making.webp"
                width={885}
                height={701}
                alt="Парикмахер-стиліст у Харкові"
                className="rounded-bl-[300px] w-auto md:w-[400px] 2xl:w-[885px] h-auto md:h-[316px] 2xl:h-[701px]"
            />
        </article>
    )
}

export default Skills;