"use client";

import { navbarItems } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-2 font-bold capitalize">
            {navbarItems?.map((item) => (
                <Link
                    key={item.link}
                    className={`${pathname === item.link && "bg-primary-red/10 text-primary-red"} hover:bg-primary-red/10 hover:text-primary-red px-3 py-1 transition-all duration-300`}
                    href={item.link}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
