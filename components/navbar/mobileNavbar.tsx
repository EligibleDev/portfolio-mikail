import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/images/logo-transparent.png";
import { socialItems } from "@/utils/utils";
import MobileNav from "./mobileNav";

const MobileNavbar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild className="flex lg:hidden">
                <Button size={"icon"}>
                    <Menu className="size-6" />
                </Button>
            </SheetTrigger>

            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <Image src={Logo} alt="Mikail" width={200} height={45} />
                    </SheetTitle>

                    <SheetDescription>
                        Driven front-end developer proficient in JavaScript, NextJS, and
                        Node JS.
                    </SheetDescription>
                </SheetHeader>

                <MobileNav />

                <SheetFooter>
                    <p className="uppercase">Find me on</p>

                    <ul className="flex gap-2">
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
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavbar;
