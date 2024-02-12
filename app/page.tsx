import Contacts from "./ui/contacts";
import Feedback from "./ui/feedback";
import Gallery from "./ui/gallery";
import Banner from "./ui/main/banner";
import Skills from "./ui/main/skills";
import Services from "./ui/services";

export default function Home() {

  return (
    <main className="">
      <Banner />
      <Skills />
      <Services />
      <Gallery />
      <Feedback />
      <Contacts />
    </main>
  );
}
