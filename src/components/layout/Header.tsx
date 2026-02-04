"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useState } from "react";
import { DropdownMenuBasic } from "../common/dropMenu";
import { DropdownMenuAvatar } from "../common/Avatar";
import { SheetDemo } from "../common/MenuSheet";
import { headerAction, headerlist } from "@/data/headerData";

const HeaderContent = () => {
  const pathname = usePathname();

  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/verify" ||
    pathname === "/dashboard"
  )
    return null;
  return (
    <header className="p-5 shadow w-full">
      <section className="container mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-10">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={100}
              height={100}
              alt="logo"
              loading="eager"
            />
          </Link>

          {/* links */}
          <ul className="hidden lg:flex item-center gap-5 xl:gap-10">
            {headerlist.length > 0 &&
              headerlist.map((link) => (
                <li className="group" key={link.id}>
                  <Link href={link.href} className="flex items-center gap-2">
                    <Image
                      src={link.img}
                      width={20}
                      height={20}
                      alt={link.alt}
                      loading={"lazy"}
                    />
                    <span className="text-[#8A8A8A] group-hover:text-black capitalize text-xs xl:text-md">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center">
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

        {/* Menu Icon */}
        <SheetDemo />
      </section>
    </header>
  );
};

export default HeaderContent;
