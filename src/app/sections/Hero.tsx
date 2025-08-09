import bgShape from "@/assets/images/banner-shape.png";
import Image from "next/image";
import BannerTittles from "./BannerTittles";
import Button from "@/components/Button/Button";

const Hero = () => {
    return (
        <>
            <Image
                src={bgShape}
                alt=""
                className="absolute top-0 left-0 -z-10 opacity-50"
            />

            <section className="before:bg-primary-red after:bg-primary-red align-center container mx-auto flex justify-between py-40 before:absolute before:-top-20 before:-left-[300px] before:h-[600px] before:w-[600px] before:rounded-[100px] before:opacity-30 before:blur-[300px] after:absolute after:-top-20 after:-right-[300px] after:h-[600px] after:w-[600px] after:opacity-30 after:blur-[300px]">
                <div className="w-1/2">
                    <p className="text-primary-red mb-2 text-lg font-bold uppercase">
                        I am
                    </p>

                    <h1 className="text-6xl font-bold">Mikail Islam</h1>

                    <BannerTittles />

                    <p className="font-rubik text-secondary-gray mt-4 mb-10 text-xl">
                        I'm a driven
                        <span className="text-primary-red"> front-end developer </span>
                        proficient in
                        <span className="text-primary-red"> JavaScript </span>,
                        <span className="text-primary-red"> NextJS </span>, and
                        <span className="text-primary-red"> Node JS</span>. Passionate
                        about continuous learning, I seek opportunities to contribute to
                        team goals and excel in performance.
                    </p>

                    <Button>Get started</Button>
                </div>

                <div className="w-1/2"></div>
            </section>
        </>
    );
};

export default Hero;
