import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { aboutStrengths } from "@/utils/utils";
import { PanelsTopLeft } from "lucide-react";

const About = () => {
    return (
        <section className="container mx-auto flex items-center justify-end px-4 py-32 xl:px-0">
            <div className="relative flex w-1/2 flex-col items-end justify-center pr-24">
                <span className="from-primary-red to absolute top-32 left-0 size-96 rounded-full bg-linear-to-b to-transparent blur-xs"></span>

                <div className="bg-secondary-gray/10 w-fit space-y-4 rounded-3xl p-16 text-center backdrop-blur-2xl">
                    <h1 className="text-8xl font-bold">4 +</h1>

                    <h3 className="font-rubik text-4xl font-medium">
                        Years of working
                        <br /> with websites
                    </h3>
                </div>

                <div className="bg-secondary-gray/10">
                    <PanelsTopLeft className="text-primary-red border-primary-red box-content size-11 rounded-full border p-7" />
                </div>
            </div>

            <div className="w-1/2 space-y-10">
                <Title
                    subtitle="About me"
                    description="I've been working with websites since 2021. And helped over 100s of clients around the globe."
                >
                    Front-end based Full stack Web Developer
                </Title>

                <div className="flex justify-between gap-8">
                    {aboutStrengths.map((item) => (
                        <div
                            key={item.title}
                            className="border-primary-red w-full space-y-2.5 rounded-2xl border-4 px-7 py-10"
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
