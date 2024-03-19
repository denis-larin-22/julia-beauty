import TLink from "../common/link";
import { getCommentsFromFirestoreDB } from "../../lib/firebase/feedback";

export default async function Feedback() {
    const commentsList = await getCommentsFromFirestoreDB();
    const cutedList = commentsList.splice(0, 2).filter(item => item);

    return (
        // <section className="max-w-t-maxScreen py-12 mb-40 md:mb-72 mx-auto flex flex-col items-center bg-t-brown-light">
        <section className="bg-t-brown-light">
            <div className="container flex flex-col items-center gap-4 py-10 text-md">
                <h5 className="text-t-xl text-t-brown uppercase">Відгуки</h5>
                <ul className="container flex items-start flex-wrap justify-around gap-4">
                    {cutedList.map((comment) => (
                        <li
                            key={comment.id}
                            className="max-w-[600px] bg-t-brown-light brightness-[107%] rounded-xl py-4 md:py-8 px-5 md:px-10 mb-4"
                        >
                            <div className="flex flex-col items-start gap-3 md:gap-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46.534058" height="35" viewBox="0 0 46.5341 35" fill="none">
                                    <desc>
                                        Quotes commentary icon
                                    </desc>
                                    <defs />
                                    <path d="M16.4394 0L18.9583 4.50757C17.5442 6.4519 16.2184 8.61743 14.9811 11.0039C13.8321 13.3901 13.1692 15.865 12.9924 18.428L20.2841 19.7539L20.2841 35L0 35L0 24.1289C0 17.8535 1.45831 12.8157 4.375 9.01514C7.38007 5.12622 11.4015 2.12109 16.4394 0ZM42.6894 0L45.2083 4.50757C43.7942 6.4519 42.4684 8.61743 41.2311 11.0039C40.0821 13.3901 39.4192 15.865 39.2424 18.428L46.5341 19.7539L46.5341 35L26.25 35L26.25 24.1289C26.25 17.8535 27.7083 12.8157 30.625 9.01514C33.6301 5.12622 37.6515 2.12109 42.6894 0Z" fill="#CDA582" fillOpacity="1.000000" fillRule="nonzero" />
                                </svg>

                                <p>{comment.comment}</p>
                            </div>
                            <p className="mt-2 md:mt-5 text-right text-t-brown-strong">{comment.name}</p>
                        </li>
                    ))}
                </ul>
                <TLink href="/feedback">Усі відгуки</TLink>
            </div>
        </section>
    )
};