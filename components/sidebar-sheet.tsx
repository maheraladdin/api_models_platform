import {Sidebar} from "@/components/sidebar";
import {
    Sheet,
    SheetTrigger,
    SheetContent
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import { Menu } from 'lucide-react';

export const SidebarSheet = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className={"ml-2 lg:hidden"} variant="ghost">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}