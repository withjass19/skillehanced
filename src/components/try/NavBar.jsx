"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-full mx-auto z-50 bg-white",
        className
      )}
    >
      <div className="grid grid-rows-1 grid-cols-12">
        <div className="col-span-2 flex justify-end items-center">
          <Image
            src="/assets/images/skillEnhanced.png"
            width={180}
            height={180}
            alt="Logo"
          />
        </div>
        <div className="col-span-8">
          <Menu setActive={setActive}>
            {/* <Link>Home</Link> */}
            <HoveredLink name="home" href="/">
              Home
            </HoveredLink>
            <MenuItem setActive={setActive} active={active} item="Courses">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/">AI / Machine Learning</HoveredLink>
                <HoveredLink href="/">Cloud Computing</HoveredLink>
                <HoveredLink href="/">Service Management</HoveredLink>
                <HoveredLink href="/">Mechanical CAD</HoveredLink>
                <HoveredLink href="/">Software Quality Testing</HoveredLink>
                <HoveredLink href="/">Prog. & Development</HoveredLink>
                <HoveredLink href="/">Mobile Web Development</HoveredLink>
              </div>
            </MenuItem>
            {/* <MenuItem setActive={setActive} active={active} item="Products">
              <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  //   src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  //   src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  //   src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  //   src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem> */}
            {/* <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem> */}
            <HoveredLink name="blog" href="/">
              Blog
            </HoveredLink>
            <HoveredLink name="contact" href="/">
              Contact
            </HoveredLink>
            <HoveredLink name="about" href="/">
              About
            </HoveredLink>
          </Menu>
        </div>
        <div className="col-span-2 flex justify-start items-center">
          <HoveredLink className="text-white" href="/login">
            <Button
              radius="full"
              className="bg-gradient-to-tr from-black to-slate-500 text-white shadow-lg px-6"
            >
              Get Start
            </Button>
          </HoveredLink>
        </div>
      </div>
    </div>
  );
}
