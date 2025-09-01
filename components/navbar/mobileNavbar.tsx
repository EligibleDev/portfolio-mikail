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
import { navbarItems } from "@/utils/utils";
import MobileNav from "./mobileNav";

const MobileNavbar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
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
                        Driven
                        <span className="text-primary-red"> front-end developer </span>
                        proficient in
                        <span className="text-primary-red"> JavaScript </span>,
                        <span className="text-primary-red"> NextJS </span>, and
                        <span className="text-primary-red"> Node JS</span>.
                    </SheetDescription>
                </SheetHeader>

                <MobileNav />

                <SheetFooter>
                    <Button type="submit">Save changes</Button>

                    <SheetClose asChild>
                        <Button>Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavbar;
