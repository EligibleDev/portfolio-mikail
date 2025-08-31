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

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>Open</Button>
            </SheetTrigger>

            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>

                    <SheetDescription>
                        Make changes to your profile here. Click save when you&apos;re
                        done.
                    </SheetDescription>
                </SheetHeader>

                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                        <label htmlFor="sheet-demo-name">Name</label>
                        <input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                    </div>

                    <div className="grid gap-3">
                        <label htmlFor="sheet-demo-username">Username</label>
                        <input id="sheet-demo-username" defaultValue="@peduarte" />
                    </div>
                </div>

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

export default MobileNav;
