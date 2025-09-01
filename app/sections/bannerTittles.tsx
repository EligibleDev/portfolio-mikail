"use client";

import { TypeAnimation } from "react-type-animation";

const BannerTittles = () => {
    const titleInterval = 1000;

    return (
        <TypeAnimation
            sequence={[
                "Frontend Developer",
                titleInterval,
                "React Developer",
                titleInterval,
                "Javascript Developer",
                titleInterval,
                "Nextjs Developer",
                titleInterval,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-primary-red mt-0 text-3xl font-bold sm:text-4xl md:text-5xl lg:mt-2 xl:text-6xl"
            wrapper="h1"
        />
    );
};

export default BannerTittles;
