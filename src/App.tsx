import Preloader from "./components/Preloader";
import Hero from "./components/sections/Hero";
import Feeling from "./components/sections/Feeling";
import Intro from "./components/sections/Intro";
import Works from "./components/sections/Works";
import ServicesPuzzle from "./components/sections/ServicesPuzzle";
import ProcessTimeline from "./components/sections/ProcessTimeline";
import WhyMe from "./components/sections/WhyMe";
import GrowthGraph from "./components/sections/GrowthGraph";
import Faq from "./components/sections/Faq";
import Quiz from "./components/sections/Quiz";
import Contact from "./components/sections/Contact";
import Copyright from "./components/sections/Copyright";

// Homepage of estergigi.com, sections in the same order as the original.
export default function App() {
  return (
    <>
      <Preloader />
      <main className="flex flex-col">
        <Hero />
        <Feeling />
        <Intro />
        <Works />
        <ServicesPuzzle />
        <ProcessTimeline />
        <WhyMe />
        <GrowthGraph />
        <Faq />
        <Quiz />
        <Contact />
      </main>
      <Copyright />
    </>
  );
}
