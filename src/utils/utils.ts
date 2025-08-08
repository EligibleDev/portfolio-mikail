import { IconType } from "react-icons";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";

export const navbarItems: { label: string; link: string }[] = [
    { label: "home", link: "/" },
    { label: "about", link: "/about" },
    { label: "projects", link: "/projects" },
    { label: "contact", link: "/contact" },
];

export const socialItems: { icon: IconType; link: string }[] = [
    { icon: FaGithub, link: "https://github.com/EligibleDev" },
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/developer-mikail" },
    { icon: FaFacebook, link: "https://www.facebook.com/m1ka1l" },
];
