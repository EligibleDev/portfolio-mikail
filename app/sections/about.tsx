import Title from "@/components/ui/title";

const About = () => {
    return (
        <section className="container mx-auto flex justify-between px-4 py-32 align-middle xl:px-0">
            <div className="w-1/2">about design</div>
            <div className="w-1/2">
                <Title
                    subtitle="About me"
                    description="I've been working with websites since 2021. And helped over 100s of clients around the globe."
                >
                    Front-end based Full stack Web Developer
                </Title>
            </div>
        </section>
    );
};

export default About;
