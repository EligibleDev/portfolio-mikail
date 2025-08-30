import { Lightbulb } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

export const navbarItems: { label: string; link: string }[] = [
    { label: "home", link: "/" },
    { label: "about", link: "/about" },
    { label: "projects", link: "/projects" },
    { label: "contact", link: "/contact" },
];

export const socialItems: {
    icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    link: string;
}[] = [
    { icon: Lightbulb, link: "https://github.com/EligibleDev" },
    { icon: Lightbulb, link: "https://www.linkedin.com/in/developer-mikail" },
    { icon: Lightbulb, link: "https://www.facebook.com/m1ka1l" },
];
