import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import Image from "next/image";
import Link from "next/link";
import { DropdownMenuBasic } from "./dropMenu";
import { DropdownMenuAvatar } from "./Avatar";
import { headerAction, headerlist } from "@/data/headerData";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} className="flex lg:hidden">
          <Image
            src={"/icons/menu.svg"}
            width={20}
            height={20}
            alt="menu-toggle"
            loading="lazy"
          />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        {/* links */}
        <ul className="flex flex-col item-center  mt-10">
          {headerlist.length > 0 &&
            headerlist.map((link) => (
              <li className="group not-last:border-b py-5" key={link.id}>
                <Link href={link.href} className="flex items-center gap-5">
                  <Image
                    src={link.img}
                    width={25}
                    height={25}
                    alt={link.alt}
                    loading={"lazy"}
                  />
                  <span className="text-[#8A8A8A] group-hover:text-black capitalize text-xl">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
        </ul>

        {/* Right Section */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mt-10">
          {headerAction.length > 0 &&
            headerAction.map((icon) => (
              <Button variant={"ghost"} key={icon.id}>
                <Image
                  src={icon.icon}
                  width={20}
                  height={20}
                  alt={icon.alt}
                  loading="lazy"
                />
              </Button>
            ))}

          <DropdownMenuBasic />
          <DropdownMenuAvatar />
        </div>
      </SheetContent>
    </Sheet>
  );
}
