import Contacts from "./ui/main/contacts";
import Feedback from "./ui/main/feedback";
import FixedBackground from "./ui/common/fixed-background";
import Gallery from "./ui/main/gallery";
import Banner from "./ui/main/banner";
import Skills from "./ui/main/skills";
import Services from "./ui/main/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Перукар-стиліст Харків | Стрижка | Фарбування | Перукар Харків | Фарбування',
  description: 'Julia Magic Beauty – ваш ідеальний парикмахер та стиліст у Харкові. Відкрийте для себе неповторну красу та стиль. Запишіться на послуги вже зараз та насолоджуйтеся відчуттям нового образу!',
  openGraph: {
    title: 'Julia Magic Beauty - перукар-стиліст у Харкові',
    description: 'Julia Magic Beauty – ваш ідеальний парикмахер та стиліст у Харкові.Відкрийте для себе неповторну красу та стиль.',
    type: 'website',
    locale: 'uk_UA',
    url: '',
    siteName: 'Julia Magic Beauty'
  }
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <FixedBackground srcImage="/images/transition-1.webp" />
      <Banner />
      <Skills />
      <Services />
      <Gallery />
      <Feedback />
      <Contacts />
    </main>
  );
}
