import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { aboutStrengths } from "@/utils/utils";

const About = () => {
    return (
        <section className="container mx-auto flex items-center justify-between px-4 py-32 xl:px-0">
            <div className="w-1/2">about design</div>
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
