import AnimatedWrap from "../ui/common/animated-wrap";
import PageWrap from "../ui/common/page-wrap";

interface CommentObj {
    name: string,
    comment: string
}

const Feedback = () => {
    const commentsList: CommentObj[] = [
        {
            name: 'Dima',
            comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur deserunt, voluptatem at repellat nostrum harum quidem laudantium culpa obcaecati ducimus officiis totam soluta ipsum, laborum possimus ratione exercitationem repudiandae incidunt.'
        },
        {
            name: 'Dima',
            comment: 'Lorem ipsum dolor, si possimus ratione exercitationem repudiandae incidunt.'
        },
        {
            name: 'Dima',
            comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur deserunt, voluptatem at repellat nostrum harum quidem laudantium culpa obcaecati ducimus officiis totam soluta ipsum, laborum possimus ratione exercitationem repudiandae incidunt.'
        },
        {
            name: 'Dima',
            comment: 'Lorem ipsum dolor,mus ratione exercitationem repudiandae incidunt.'
        },
        {
            name: 'Dima',
            comment: 'Lorem ipsum dolor, sborum possimus ratione exercitationem repudiandae incidunt.'
        },
        {
            name: 'Dima',
            comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur deserunt, voluptatem at repellat nostrum harum quidem laudantium culpa obcaecati ducimus officiis totam soluta ipsum, laborum possimus ratione exercitationem repudiandae incidunt.'
        },
        {
            name: 'Dima',
            comment: 'Lorem ipsum dolor, sium possimus ratione exercitationem repudiandae incidunt.'
        },
        {
            name: 'Dima',
            comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur deserunt, voluptatem at repellat nostrum harum quidem laudantium culpa obcaecati ducimus officiis totam soluta ipsum, laborum possimus ratione exercitationem repudiandae incidunt.'
        },
    ]

    return (
        <PageWrap
            backgroundStyles="bg-[url('/images/male-hair.png')]"
            title="Feedback"
        >
            <section className="py-12 mx-auto flex flex-col items-center bg-t-brown-light">
                <ul className="container columns-1 md:columns-2">
                    {commentsList.map((item, index) => (
                        <AnimatedWrap
                            key={index}
                            x={100}
                            opacity={0}
                            duration={0.4}
                            delay={index - (0.92 * index)}
                            styles="w-full"
                        >
                            <li
                                className="max-w-full bg-t-brown-light brightness-[107%] rounded-xl py-4 md:py-8 px-5 md:px-10 mb-4"
                            >
                                <div className="flex flex-col gap-3 md:gap-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46.534058" height="35.000000" viewBox="0 0 46.5341 35" fill="none" className="w-4 h-4 md:w-10 md:h-10 ">
                                        <desc>
                                            Quotes commentary icon
                                        </desc>
                                        <defs />
                                        <path d="M16.4394 0L18.9583 4.50757C17.5442 6.4519 16.2184 8.61743 14.9811 11.0039C13.8321 13.3901 13.1692 15.865 12.9924 18.428L20.2841 19.7539L20.2841 35L0 35L0 24.1289C0 17.8535 1.45831 12.8157 4.375 9.01514C7.38007 5.12622 11.4015 2.12109 16.4394 0ZM42.6894 0L45.2083 4.50757C43.7942 6.4519 42.4684 8.61743 41.2311 11.0039C40.0821 13.3901 39.4192 15.865 39.2424 18.428L46.5341 19.7539L46.5341 35L26.25 35L26.25 24.1289C26.25 17.8535 27.7083 12.8157 30.625 9.01514C33.6301 5.12622 37.6515 2.12109 42.6894 0Z" fill="#CDA582" fillOpacity="1.000000" fillRule="nonzero" />
                                    </svg>

                                    <p className="text-t-sm-regular md:text-md">
                                        {item.comment}
                                    </p>
                                </div>
                                <p className="mt-2 md:mt-5 text-md text-right text-t-brown-strong">
                                    {item.name}
                                </p>
                            </li>
                        </AnimatedWrap>
                    ))}
                </ul>
            </section>
        </PageWrap >


    )
}

export default Feedback;