"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/courses"}>
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">
              <p className=" dark:hover:text-white">All courses</p>
            </HoveredLink>
            <HoveredLink href="/courses">
              <p className=" dark:hover:text-white">Basic Music Theory</p>
            </HoveredLink>
            <HoveredLink href="/courses">
              <p className=" dark:hover:text-white">Advance Composition</p>
            </HoveredLink>
            <HoveredLink href="/courses">
              <p className=" dark:hover:text-white">Songwriting</p>
            </HoveredLink>
            <HoveredLink href="/courses">
              <p className=" dark:hover:text-white">Music Production</p>
            </HoveredLink>
          </div> */}
          </MenuItem>
        </Link>
        <Link href={"/contactus"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
        <Link href={"/aboutus"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
