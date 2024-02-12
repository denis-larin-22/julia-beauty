import Image from "next/image";

interface ISkillObj {
    title: string,
    text: string,
    icon: string
}

const Skills = () => {
    const skillsStack: Array<ISkillObj> = [
        {
            title: 'Amet minim mollit',
            text: 'Amet minim mollit non deserunt ullam co est sit.',
            icon: '/images/001-salon.png'
        },
        {
            title: 'Amet minim mollit',
            text: 'Amet minim mollit non deserunt ullam co est sit.',
            icon: '/images/003-hair-cutting.png'
        },
        {
            title: 'Amet minim mollit',
            text: 'Amet minim mollit non deserunt ullam co est sit.',
            icon: '/images/002-shampoo.png'
        },
        {
            title: 'Amet minim mollit',
            text: 'Amet minim mollit non deserunt ullam co est sit.',
            icon: '/images/005-toiletries.png'
        }
    ];

    return (
        <article className="relative z-10 flex flex-col md:flex-row max-w-t-maxScreen mx-auto">
            <div className="container max-w-[577px] my-6 lg:my-12 2xl:my-28">
                <p className="uppercase text-t-lg">Sobre A</p>
                <h2 className="uppercase text-t-xl text-t-brown">bueno beauty</h2>
                <p className="text-t-sm-regular my-4 lg:my-10 max-w-96 lg:max-w-full">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit</p>
                <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-10">
                    {skillsStack.map((skill, index) => (
                        <li
                            key={index}
                            className="max-w-40 md:max-w-64 flex flex-col lg:flex-row items-center sm:items-start gap-x-0 md:gap-x-5"
                        >
                            <Image
                                src={skill.icon}
                                alt={`An image about ${skill.title}`}
                                width={80}
                                height={80}
                                className="w-auto h-auto mb-2"
                            />
                            <div className="text-center sm:text-left">
                                <p className="text-t-sm-bold pb-2">{skill.title}</p>
                                <p className="text-t-sm-regular">{skill.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Image
                src="/images/female-hairdresser-making.png"
                width={885}
                height={701}
                alt="The process of haircut"
                className="rounded-bl-[300px] w-auto md:w-[400px] 2xl:w-[885px] h-auto md:h-[316px] 2xl:h-[701px]"
            />
        </article>
    )
}

export default Skills;