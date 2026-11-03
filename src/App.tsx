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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WhichSite from "./pages/WhichSite";

// The other pages of the original site, by path (Hebrew slugs, trailing slash optional).
// vercel.json rewrites every path to index.html so these load directly.
const pages: Record<string, { title: string; Page: () => JSX.Element }> = {
  "/מדיניות-פרטיות": { title: "מדיניות פרטיות – אסתר גיגי", Page: PrivacyPolicy },
  "/איזה-אתר-העסק-שלי-צריך": { title: "איזה אתר העסק שלי צריך – אסתר גיגי", Page: WhichSite },
};

export default function App() {
  const path = decodeURIComponent(window.location.pathname).replace(/\/+$/, "");
  const page = pages[path];
  if (page) {
    document.title = page.title;
    return <page.Page />;
  }
  return <Home />;
}

// Homepage of estergigi.com, sections in the same order as the original.
function Home() {
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
