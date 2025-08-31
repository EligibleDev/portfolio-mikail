"use client";

import { navbarItems } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="hidden gap-2 font-bold capitalize sm:flex">
            {navbarItems?.map((item) => (
                <Link
                    key={item.link}
                    className={`${pathname === item.link && "bg-primary-red/10 text-primary-red"} hover:bg-primary-red/10 hover:text-primary-red rounded-sm px-3 py-1 transition-all duration-500`}
                    href={item.link}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
