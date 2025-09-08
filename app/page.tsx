import About from "./sections/about";
import Hero from "./sections/hero";
import Intro from "./sections/intro";
import Skills from "./sections/skills";

export default function Home() {
    return (
        <main>
            <Hero />
            <Intro />
            <About />
            <Skills />
        </main>
    );
}
