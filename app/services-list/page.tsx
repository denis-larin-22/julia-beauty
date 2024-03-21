import { inter } from "../ui/fonts";
import PageWrap from "../ui/common/page-wrap";
import TLink from "../ui/common/link";
import { getServiceListFromFirestoreDB } from "../lib/firebase/services-list";
import Image from "next/image";
import { Metadata } from "next";
import ServicesList from "../ui/services-list/services-list";

export const metadata: Metadata = {
    title: 'Мої послуги | Julia Magic Beauty',
    description: 'Повний перелік послуг та цін від "Julia Magic Beauty". Стрижки, фарбування, догляд та багато інших послуг з індивідуальним підхідом до кожного клієнта. Оберіть своє ідеальне обслуговування!',
    openGraph: {
        title: 'Мої послуги | Julia Magic Beauty',
        description: 'Повний перелік послуг та цін від "Julia Magic Beauty". Стрижки, фарбування, догляд та багато інших послуг з індивідуальним підхідом до кожного клієнта. Оберіть своє ідеальне обслуговування!',
        type: 'website',
        locale: 'uk_UA',
        url: '',
        siteName: 'Julia Magic Beauty'
    }
};

export default async function ServiceList() {
    const servicesList = await getServiceListFromFirestoreDB();

    return (
        <PageWrap
            srcBackground="/images/services/scissors.webp"
            title="Мої послуги"
        >
            <section className="container pb-8">
                <ServicesList list={servicesList} />

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