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
            className="text-primary-red mt-2 text-6xl font-bold"
            wrapper="h1"
        />
    );
};

export default BannerTittles;
