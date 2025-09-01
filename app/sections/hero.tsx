import bgShape from "@/assets/images/banner-shape.png";
import Image from "next/image";
import BannerTittles from "./bannerTittles";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <>
            <Image
                src={bgShape}
                alt=""
                className="absolute top-0 left-0 -z-20 opacity-50"
            />

            <section className="before:bg-primary-red after:bg-primary-red align-center container mx-auto flex flex-col justify-between gap-8 px-4 py-4 before:absolute before:-top-20 before:-left-[300px] before:-z-10 before:h-[600px] before:w-[600px] before:rounded-[100px] before:opacity-30 before:blur-[300px] after:fixed after:-top-20 after:-right-[300px] after:-z-10 after:h-[600px] after:w-[600px] after:opacity-30 after:blur-[300px] lg:flex-row lg:py-40 xl:px-0">
                <div className="w-full lg:w-1/2">
                    <p className="text-primary-red mb-2 text-lg font-bold uppercase">
                        I am
                    </p>

                    <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl xl:text-6xl">
                        Mikail Islam
                    </h1>

                    <BannerTittles />

                    <p className="font-rubik text-secondary-gray mt-4 mb-10 text-lg lg:text-xl">
                        I&apos;m a driven
                        <span className="text-primary-red"> front-end developer </span>
                        proficient in
                        <span className="text-primary-red"> JavaScript </span>,
                        <span className="text-primary-red"> NextJS </span>, and
                        <span className="text-primary-red"> Node JS</span>. Passionate
                        about continuous learning, I seek opportunities to contribute to
                        team goals and excel in performance.
                    </p>

                    <Button>More about me</Button>
                </div>

                <div className="to-primary-red/5 from-primary-red/20 relative h-min w-full rounded-lg bg-linear-to-tr p-2 font-mono lg:w-1/2">
                    <div className="relative flex text-center">
                        <div className="flex pt-3 pl-3.5">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-1.5 -ml-0.5 h-3 w-3 text-red-500/20"
                            >
                                <circle r="12" cy="12" cx="12"></circle>
                            </svg>
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-1.5 -ml-0.75 h-3 w-3 text-yellow-500/20"
                            >
                                <circle r="12" cy="12" cx="12"></circle>
                            </svg>
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-1.5 -ml-0.75 h-3 w-3 text-green-500/20"
                            >
                                <circle r="12" cy="12" cx="12"></circle>
                            </svg>
                        </div>
                        <span className="absolute inset-x-0 top-2 text-xs text-slate-500">
                            page.tsx
                        </span>
                    </div>

                    <div className="mt-5 space-y-1.5 px-5 pb-10 text-xs font-normal tracking-wide text-violet-400">
                        <p>
                            <span className="text-slate-500">import</span>
                            <span className="text-green-400"> React </span>
                            <span className="text-slate-500">from</span>
                            <span className="text-green-400"> &quot;react&quot;</span>
                        </p>
                        <p>
                            <span className="text-slate-500">import</span>
                            <span className="text-green-400"> Link </span>
                            <span className="text-slate-500">from</span>
                            <span className="text-green-400"> &quot;next/link&quot;</span>
                        </p>
                        <br />
                        <p>
                            <span className="text-slate-500">
                                export default function
                            </span>
                            <span className="text-blue-400"> AboutMe</span>
                            <span className="text-slate-500">() {`{`}</span>
                        </p>
                        <p className="ml-4">
                            <span className="text-slate-500">return (</span>
                        </p>
                        <p className="ml-8">
                            <span className="text-slate-500">&lt;</span>
                            <span className="text-pink-400">div</span>
                            <span className="text-violet-400"> className</span>
                            <span className="text-slate-500">=</span>
                            <span className="text-green-400">
                                &quot;p-6 bg-gray-900 rounded-lg&quot;
                            </span>
                            <span className="text-slate-500">&gt;</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-slate-500">&lt;</span>
                            <span className="text-pink-400">h1</span>
                            <span className="text-slate-500">&gt;</span>
                            <span className="text-blue-400">Mikail Islam</span>
                            <span className="text-slate-500">&lt;/</span>
                            <span className="text-pink-400">h1</span>
                            <span className="text-slate-500">&gt;</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-slate-500">&lt;</span>
                            <span className="text-pink-400">p</span>
                            <span className="text-slate-500">&gt;</span>
                            <span className="text-blue-400">
                                Jr. MERN Stack and Nextjs developer.
                            </span>
                            <span className="text-slate-500">&lt;/</span>
                            <span className="text-pink-400">p</span>
                            <span className="text-slate-500">&gt;</span>
                        </p>
                        <p className="ml-12">
                            <span className="text-slate-500">&lt;</span>
                            <span className="text-pink-400">Link</span>
                            <span className="text-violet-400"> href</span>
                            <span className="text-slate-500">=</span>
                            <span className="text-green-400">&quot;/projects&quot;</span>
                            <span className="text-slate-500">&gt;</span>
                            <span className="text-blue-400">Check out my projects</span>
                            <span className="text-slate-500">&lt;/</span>
                            <span className="text-pink-400">Link</span>
                            <span className="text-slate-500">&gt;</span>
                        </p>
                        <p className="ml-8">
                            <span className="text-slate-500">&lt;/</span>
                            <span className="text-pink-400">div</span>
                            <span className="text-slate-500">&gt;</span>
                        </p>
                        <p className="ml-4">
                            <span className="text-slate-500">)</span>
                        </p>
                        <p>
                            <span className="text-slate-500">{`}`}</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
