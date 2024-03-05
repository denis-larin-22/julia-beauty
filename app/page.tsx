import Contacts from "./ui/main/contacts";
import Feedback from "./ui/main/feedback";
import FixedBackground from "./ui/common/fixed-background";
import Gallery from "./ui/main/gallery";
import Banner from "./ui/main/banner";
import Skills from "./ui/main/skills";
import Services from "./ui/main/services";

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
