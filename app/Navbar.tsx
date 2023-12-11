import Link from "next/link";
import React from "react";
import logo from "../public/Logos/logo-png.png";
import Image from "next/image";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/" },
  ];
  return (
    <nav className="flex mb-5 space-x-6 items-center h-14 border-b px-5">
      <Link href="/">
        <Image src={logo} alt="logo" width={50} height={50} />
      </Link>

      <ul className="flex space-x-6 ">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="space-x-6 text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}{" "}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
