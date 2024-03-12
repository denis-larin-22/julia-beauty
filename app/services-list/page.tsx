import { inter } from "../ui/fonts";
import PageWrap from "../ui/common/page-wrap";
import AnimatedWrap from "../ui/common/animated-wrap";
import TLink from "../ui/common/link";
import { getServiceListFromFirestoreDB } from "../lib/firebase/services-list";
import Image from "next/image";

export default async function ServiceList() {
    const servicesList = await getServiceListFromFirestoreDB();

    return (
        <PageWrap
            srcBackground="/images/services/scissors.webp"
            title="Мої послуги"
        >
            <section className={`container ${inter.className} pb-8`}>
                <ul className="max-w-[800px] flex flex-col items-center gap-y-5 mx-auto py-10">
                    {servicesList.map((item, index) => (
                        <AnimatedWrap
                            key={index}
                            y={30}
                            opacity={0}
                            duration={0.4}
                            delay={index - (0.92 * index)}
                            styles="w-full"
                        >
                            <li className="w-full flex items-center justify-between text-t-sm-semibold md:text-t-md hover:scale-105 hover:bg-t-brown-light py-4 rounded-lg duration-150 px-1">
                                <div className="">
                                    <p>{item.name}</p>
                                    <p className="text-t-gray">{item.description}</p>
                                </div>
                                <p className="border-l-2 border-t-brown-strong pl-2 md:pl-7">{item.price}</p>
                            </li>
                        </AnimatedWrap>
                    ))}
                </ul>

                <TLink href="/contacts" wrapStyles="mx-auto">Запис</TLink>

                <div className="flex items-center justify-center gap-2 mt-10">
                    <a href="https://spamaster.com.ua/" target="_blank" className="hover:scale-105 duration-150">
                        <Image
                            width={200}
                            height={100}
                            loading="lazy"
                            src="/images/spa-master-logo.webp"
                            alt="Spa Master logo"
                        />
                    </a>
                    <p className="text-t-md text-t-gray opacity-60"> — бренд, якому я довіряю</p>
                </div>
            </section>
        </PageWrap>
    )
};