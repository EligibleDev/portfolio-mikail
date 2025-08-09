"use client";

import { TypeAnimation } from "react-type-animation";

const BannerTittles = () => {
    return (
        <TypeAnimation
            sequence={[
                "Frontend Developer",
                1000,
                "React Developer",
                1000,
                "Javascript Developer",
                1000,
                "Nextjs Developer",
                1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-primary-red mt-2 text-6xl font-bold"
            wrapper="h1"
        />
    );
};

export default BannerTittles;
