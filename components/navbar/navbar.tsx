import Image from "next/image";
import Logo from "@/assets/images/logo-transparent.png";
import Nav from "./nav";
import { socialItems } from "@/utils/utils";
import MobileNavbar from "./mobileNavbar";

const Navbar = () => {
    return (
        <header className="container mx-auto flex items-center justify-between bg-transparent px-4 py-7 xl:px-0">
            <Image src={Logo} alt="Mikail" width={200} height={45} />

            <Nav />

            <ul className="hidden gap-2 lg:flex">
                {socialItems?.map((Item) => (
                    <a
                        href={Item.link}
                        key={Item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-primary-red box-content rounded-full bg-white/10 p-3 text-white transition-all duration-500"
                    >
                        <Item.icon size={14} />
                    </a>
                ))}
            </ul>

            <MobileNavbar />
        </header>
    );
};

export default Navbar;
