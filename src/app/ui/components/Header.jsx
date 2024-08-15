"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links, networks } from "@/utils/constants";

export default function Header() {
  const pathName = usePathname();
  return (
    <nav
      className="max-w-[980px] w-full mx-auto flex items-center backdrop-blur-md z-10 
    justify-between py-6 md:px-[10px] shadow-lg px-4 sticky top-0 bg-gradient-to-r from-transparent via-[#00a2ff30] to-transparent bg-white"
    >
      <ul className="hidden md:flex items-center gap-x-6 ">
        {networks.map(({ name, icon }) => {
          const Icon = icon;
          return (
            <li key={name}>
              <Link href={`/${name}`}>
                <Icon />
              </Link>
            </li>
          );
        })}
      </ul>
      <h2 className="capitalize text-lg tracking-wider cursor-default">
        Portfolio
      </h2>
      <ul className="hidden md:flex items-center gap-x-6 [&>li]:text-base *:capitalize">
        {links.map(({ name, href }) => (
          <li key={name} className={`${pathName === href ? "font-bold" : ""} `}>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
