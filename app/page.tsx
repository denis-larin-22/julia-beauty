import Contacts from "./ui/contacts";
import Feedback from "./ui/feedback";
import FixedBackground from "./ui/common/fixed-background";
import Gallery from "./ui/gallery";
import Banner from "./ui/main/banner";
import Skills from "./ui/main/skills";
import Services from "./ui/services";

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
