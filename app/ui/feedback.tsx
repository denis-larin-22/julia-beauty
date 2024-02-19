'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const Feedback = () => {
    const reviewsList = [1, 2, 3, 4];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 2) % reviewsList.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="max-w-t-maxScreen py-12 mb-40 md:mb-72 mx-auto flex flex-col items-center bg-t-brown-light">
            <h5 className="text-t-xl text-t-brown uppercase mb-10">Depoimentos</h5>
            <ul className="container flex items-center flex-wrap justify-around">
                {[currentIndex, (currentIndex + 1) % reviewsList.length].map((index) => (
                    <li
                        key={index}
                        className="max-w-[600px] bg-t-brown-light brightness-[107%] rounded-xl py-4 md:py-8 px-5 md:px-10 mb-4"
                    >
                        <div className="flex items-start gap-3 md:gap-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46.534058" height="35.000000" viewBox="0 0 46.5341 35" fill="none">
                                <desc>
                                    Quotes commentary icon
                                </desc>
                                <defs />
                                <path d="M16.4394 0L18.9583 4.50757C17.5442 6.4519 16.2184 8.61743 14.9811 11.0039C13.8321 13.3901 13.1692 15.865 12.9924 18.428L20.2841 19.7539L20.2841 35L0 35L0 24.1289C0 17.8535 1.45831 12.8157 4.375 9.01514C7.38007 5.12622 11.4015 2.12109 16.4394 0ZM42.6894 0L45.2083 4.50757C43.7942 6.4519 42.4684 8.61743 41.2311 11.0039C40.0821 13.3901 39.4192 15.865 39.2424 18.428L46.5341 19.7539L46.5341 35L26.25 35L26.25 24.1289C26.25 17.8535 27.7083 12.8157 30.625 9.01514C33.6301 5.12622 37.6515 2.12109 42.6894 0Z" fill="#CDA582" fillOpacity="1.000000" fillRule="nonzero" />
                            </svg>

                            <p className="text-md">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. {reviewsList[index]}</p>
                        </div>
                        <p className="mt-2 md:mt-5 text-md text-right text-t-brown-strong">Sarah Nimbus</p>
                    </li>
                ))}
            </ul>
            <Link href="/feedback" className="inline-block text-t-black hover:text-white border-2 border-t-brown bg-transparent hover:bg-t-brown py-2 px-5 mt-5 rounded-xl duration-100">Дивитись усі»</Link>
        </section>
    )
}

export default Feedback;