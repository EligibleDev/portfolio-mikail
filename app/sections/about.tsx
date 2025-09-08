import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { aboutStrengths } from "@/utils/utils";
import { LayoutTemplate } from "lucide-react";

const About = () => {
    return (
        <section className="container mx-auto flex flex-col items-center justify-end gap-12 px-4 py-16 sm:py-32 lg:flex-row lg:gap-0 xl:px-0">
            <div className="relative flex w-full flex-col items-end justify-center gap-4 pr-0 sm:gap-8 lg:w-1/2 lg:pr-24">
                <span className="from-primary-red to absolute top-32 left-0 size-55 rounded-full bg-linear-to-b to-transparent blur-xs lg:size-96"></span>

                <div className="bg-secondary-gray/10 w-full space-y-4 rounded-3xl p-5 text-center backdrop-blur-2xl sm:p-16 lg:w-4/5">
                    <h1 className="text-6xl font-bold sm:text-8xl">4+</h1>

                    <h3 className="font-rubik text-xl font-medium sm:text-4xl">
                        Years of working
                        <br /> with websites
                    </h3>
                </div>

                <div className="bg-secondary-gray/10 flex w-full items-center gap-3 rounded-3xl p-4 backdrop-blur-2xl sm:gap-7 sm:p-8 lg:w-4/5">
                    <div className="border-primary-red/40 w-min rounded-full border p-4 sm:p-7">
                        <LayoutTemplate className="text-primary-red size-6 sm:size-11" />
                    </div>

                    <div className="">
                        <h3 className="font-rubik text-xl font-medium sm:text-2xl">
                            Web Development
                        </h3>
                        <p className="text-lg font-normal">50+ Projects</p>
                    </div>
                </div>
            </div>

            <div className="w-full space-y-10 lg:w-1/2">
                <Title
                    subtitle="About me"
                    description="I've been working with websites since 2021. And helped over 100s of clients around the globe."
                >
                    Front-end based Full stack Web Developer
                </Title>

                <div className="flex flex-col justify-between gap-8 sm:flex-row">
                    {aboutStrengths.map((item) => (
                        <div
                            key={item.title}
                            className="border-primary-red w-full space-y-2.5 rounded-2xl border-2 px-7 py-10"
                        >
                            <div className="flex items-center justify-start gap-3.5">
                                <item.icon className="bg-primary-red box-content size-6 rounded-full p-3" />
                                <h2 className="text-xl font-bold">{item.title}</h2>
                            </div>

                            <p className="font-rubik text-secondary-gray leading-7">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <Button>Learn more about me</Button>
            </div>
        </section>
    );
};

export default About;
