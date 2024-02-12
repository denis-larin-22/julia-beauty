'use client'
import { useEffect, useState } from "react";
import { QuotesItem } from "./assets/links-icons";

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
        <section className="max-w-t-maxScreen py-12 flex flex-col items-center bg-t-brown-light">
            <h5 className="text-t-xl text-t-brown uppercase mb-10">Depoimentos</h5>
            <ul className="container flex items-center flex-wrap justify-around">
                {[currentIndex, (currentIndex + 1) % reviewsList.length].map((index) => (
                    <li
                        key={index}
                        className="max-w-[600px] bg-t-brown-light brightness-[107%] rounded-xl py-4 md:py-8 px-5 md:px-10 mb-4"
                    >
                        <div className="flex items-start gap-3 md:gap-6">
                            <QuotesItem />
                            <p className="text-md">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. {reviewsList[index]}</p>
                        </div>
                        <p className="mt-2 md:mt-5 text-md text-right text-t-brown-strong">Sarah Nimbus</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Feedback;