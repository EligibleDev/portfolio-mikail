import Image from "next/image";
import Logo from "@/assets/images/logo-transparent.png";
import Nav from "./nav";
import { socialItems } from "@/utils/utils";

const Navbar = () => {
    return (
        <header className="container mx-auto flex items-center justify-between bg-transparent py-7">
            <Image src={Logo} alt="Mikail" width={200} height={45} />

            <Nav />

            <ul className="flex gap-2">
                {socialItems?.map((Item) => (
                    <a
                        href={Item.link}
                        key={Item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-primary-red box-content rounded-full bg-white/10 p-3 text-white transition-all duration-500"
                    >
                        <Item.icon size={18} />
                    </a>
                ))}
            </ul>
        </header>
    );
};

export default Navbar;
