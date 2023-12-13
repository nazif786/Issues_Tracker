"use client";
import Link from "next/link";
import React from "react";
import logo from "../public/Logos/logo-png.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import classname from "classnames";

const Navbar = () => {
  const current = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex mb-5 space-x-6 items-center h-14 border-b px-5">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className="h-auto w-auto"
        />
      </Link>

      <ul className="flex space-x-6 ">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classname({
              "text-zinc-800": link.href === current,
              "text-zinc-500": link.href !== current,
              "hover:text-zinc-800 transition-colors": true,
            })}

            // {` ${
            //   link.href === current ? "text-zinc-800" : " text-zinc-500"
            // } space-x-6 `}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
