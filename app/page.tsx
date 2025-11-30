import Slide1Hero from "@/components/sections/Slide1Hero";
import Slide2Context from "@/components/sections/Slide2Context";
import Slide3Agenda from "@/components/sections/Slide3Agenda";
import Slide4AIEraExpectations from "@/components/sections/Slide4AIEraExpectations";
import Slide5AIStillUnfinished from "@/components/sections/Slide5AIStillUnfinished";
import Slide6SoWhatIsGoingOn from "@/components/sections/Slide6SoWhatIsGoingOn";
import Slide7StackParadigm from "@/components/sections/Slide7StackParadigm";
import Slide8InterfaceStrategic from "@/components/sections/Slide8InterfaceStrategic";
import Slide9VercelAICloud from "@/components/sections/Slide9VercelAICloud";
import Slide11VercelCloudInside from "@/components/sections/Slide11VercelCloudInside";

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <Slide1Hero />
      <Slide2Context />
      <Slide3Agenda />
      <Slide4AIEraExpectations />
      <Slide5AIStillUnfinished />
      <Slide6SoWhatIsGoingOn />
      <Slide7StackParadigm />
      <Slide8InterfaceStrategic />
      <Slide9VercelAICloud />
      <Slide11VercelCloudInside />
    </main>
  );
}
