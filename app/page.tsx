import Slide1Hero from "@/components/sections/Slide1Hero";
import Slide2Context from "@/components/sections/Slide2Context";
import Slide3Agenda from "@/components/sections/Slide3Agenda";

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <Slide1Hero />
      <Slide2Context />
      <Slide3Agenda />
    </main>
  );
}
